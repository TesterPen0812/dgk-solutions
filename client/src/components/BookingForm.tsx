import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertBookingSchema, type InsertBooking, services } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { GlassCard } from "@/components/ui/glass-card";
import { CheckCircle, Loader2, AlertTriangle, Phone, Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScaleIn } from "@/components/animations/ScaleIn";
import { CallButton } from "@/components/CallButton";
import { OFFICE_TEL } from "@/components/CallNumbers";
import { cn } from "@/lib/utils";

// Replace this with your actual Formspree endpoint from https://formspree.io
// Format: https://formspree.io/f/YOUR_FORM_ID
// You can also set it via environment variable: VITE_FORMSPREE_ENDPOINT
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/xgovobpb";

// Category mapping for grouped service display
const serviceCategories = {
  "Emergency Plumbing": ["emergency-plumbing", "burst-pipes"],
  "Plumbing Repairs": ["plumbing-repairs", "toilet-repairs", "tap-repairs", "cold-water-tanks", "hot-water-cylinders", "leaks", "radiators"],
  "Drainage & Unblocking": ["drain-clearing", "sink-unblocking", "toilet-unblocking", "bath-unblocking", "hpwj-jetting"],
  "CCTV Surveys & Inspection": ["cctv-surveys"],
  "Drain Repairs (No-Dig / Lining / Patch)": ["no-dig-repairs", "drain-lining", "patch-repairs"],
  "Excavations": ["excavations"],
  "Tanker & Waste Services (Septic / Grease Trap / Liquid Waste)": ["tanker-services", "septic-tank", "grease-trap"],
} as const;

// Service Selector Component with search and grouping
function ServiceSelector({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedService = services.find((s) => s.id === value);

  // Filter services based on search query
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group filtered services by category
  const groupedServices = Object.entries(serviceCategories).map(([categoryName, serviceIds]) => {
    const categoryServices = filteredServices.filter((service) =>
      (serviceIds as readonly string[]).includes(service.id)
    );
    return { categoryName, services: categoryServices };
  }).filter((group) => group.services.length > 0);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            !value && "text-muted-foreground"
          )}
          data-testid="select-service"
        >
          {selectedService ? selectedService.name : "Select a service"}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Search services..."
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList>
            <CommandEmpty>No services found.</CommandEmpty>
            {groupedServices.map((group) => (
              <CommandGroup key={group.categoryName} heading={group.categoryName}>
                {group.services.map((service) => (
                  <CommandItem
                    key={service.id}
                    value={service.id}
                    onSelect={() => {
                      onChange(service.id);
                      setOpen(false);
                      setSearchQuery("");
                    }}
                    className="cursor-pointer"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === service.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {service.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      postcode: "",
      address: "",
      serviceNeeded: "",
      isEmergency: false,
      preferredDate: "",
      preferredTime: "",
      description: "",
    },
  });

  const isEmergency = form.watch("isEmergency");

  const mutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      // Don’t throw here—bots/autofill can sometimes fill hidden fields.
      // Just silently ignore spam so real users aren’t blocked accidentally.
      if (honeypot?.trim()) return true;

      const serviceName =
        services.find((s) => s.id === data.serviceNeeded)?.name || data.serviceNeeded;

      const payload: Record<string, string> = {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email || "",
        postcode: data.postcode,
        address: data.address || "",
        serviceNeeded: serviceName,
        isEmergency: data.isEmergency ? "Yes" : "No",
        preferredDate: data.preferredDate || "",
        preferredTime: data.preferredTime || "",
        description: data.description,
        _subject: `DGK Booking Request (${data.isEmergency ? "EMERGENCY" : "Standard"}) - ${data.postcode}`,
      };

      const formData = new FormData();
      Object.entries(payload).forEach(([k, v]) => formData.append(k, v));

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!res.ok) {
        let errorMessage = "Form submission failed. Please try again.";
        try {
          const errorData = await res.json();
          // Formspree returns error details in the response
          if (errorData.error) {
            errorMessage = errorData.error;
          }
        } catch {
          // If response isn't JSON, use the status text
          errorMessage = res.statusText || errorMessage;
        }
        console.error("Formspree error:", res.status, errorMessage);
        throw new Error(errorMessage);
      }

      // Formspree returns { ok: true } on success
      const result = await res.json();
      return result;
    },
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
    },
  });

  if (submitted) {
    return (
      <ScaleIn>
        <GlassCard className="p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="font-heading text-2xl font-bold text-foreground mb-2"
          >
            Booking Request Received
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-muted-foreground mb-6"
          >
            Thank you for your enquiry. We will review your request and contact you shortly to confirm your appointment.
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={() => setSubmitted(false)} data-testid="button-new-booking">
              Submit Another Request
            </Button>
          </motion.div>
        </GlassCard>
      </ScaleIn>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GlassCard className="p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-6"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
            Book a Service
          </h3>
          <p className="text-sm text-muted-foreground">
            Fill in your details and we&apos;ll get back to you to confirm your appointment.
          </p>
        </motion.div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
            <input
              type="text"
              name="company_website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} data-testid="input-fullname" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone number" type="tel" {...field} data-testid="input-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email address" type="email" {...field} data-testid="input-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="postcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postcode *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. CM1 1AB" {...field} data-testid="input-postcode" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full address" {...field} data-testid="input-address" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="serviceNeeded"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Needed *</FormLabel>
                  <FormControl>
                    <ServiceSelector value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isEmergency"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between p-4 bg-emergency/10 border border-emergency/20 rounded-md">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-emergency" />
                    <div>
                      <FormLabel className="text-foreground font-medium">Is this an emergency?</FormLabel>
                      <p className="text-xs text-muted-foreground">We offer 24/7 emergency call-outs</p>
                    </div>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} data-testid="switch-emergency" />
                  </FormControl>
                </FormItem>
              )}
            />

            {isEmergency && (
              <div className="flex flex-col gap-3 p-4 border border-emergency/30 bg-emergency/5 rounded-md" data-testid="emergency-guidance">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-emergency mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      For emergencies, calling us is the fastest way to get help.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Calling avoids delays and lets us dispatch the right team immediately.
                    </p>
                  </div>
                </div>
                <div>
                  <Button asChild size="default" className="bg-emergency text-emergency-foreground gap-2">
                    <a href={OFFICE_TEL}>
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="preferredDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Date (subject to confirmation)</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} data-testid="input-date" min={new Date().toISOString().split("T")[0]} />
                    </FormControl>
                    <p className="text-xs text-muted-foreground">We&apos;ll confirm availability after receiving your request</p>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferredTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Callback / Visit Time (optional)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-preferred-time">
                          <SelectValue placeholder="Select a preferred time window" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="anytime">Anytime</SelectItem>
                        <SelectItem value="morning-8-12">Morning (8am–12pm)</SelectItem>
                        <SelectItem value="afternoon-12-5">Afternoon (12pm–5pm)</SelectItem>
                        <SelectItem value="evening-after-5">Evening (after 5pm)</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                      Choosing a window reduces disappointment, matches how we dispatch teams, and still gives you control.
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description of Issue *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please describe the issue you're experiencing..."
                      className="min-h-[120px]"
                      {...field}
                      data-testid="textarea-description"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground"
                disabled={mutation.isPending}
                data-testid="button-submit-booking"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Booking Request"
                )}
              </Button>
            </motion.div>

            <AnimatePresence>
              {mutation.isError && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-destructive text-center"
                >
                  Something went wrong. Please try again or call us directly.
                </motion.p>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Fully Insured – Public Liability & Professional Indemnity Insurance</span>
            </div>
          </form>
        </Form>
      </GlassCard>
    </motion.div>
  );
}