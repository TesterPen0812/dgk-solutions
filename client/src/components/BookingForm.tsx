import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertBookingSchema, type InsertBooking, services } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { GlassCard } from "@/components/ui/glass-card";
import { CheckCircle, Loader2, AlertTriangle } from "lucide-react";

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

  const mutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      if (honeypot) {
        throw new Error("Spam detected");
      }
      return apiRequest("POST", "/api/bookings", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
    },
  });

  if (submitted) {
    return (
      <GlassCard className="p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
          Booking Request Received
        </h3>
        <p className="text-muted-foreground mb-6">
          Thank you for your enquiry. We will review your request and contact you shortly to confirm your appointment.
        </p>
        <Button onClick={() => setSubmitted(false)} data-testid="button-new-booking">
          Submit Another Request
        </Button>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-6 md:p-8">
      <div className="mb-6">
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
          Book a Service
        </h3>
        <p className="text-sm text-muted-foreground">
          Fill in your details and we&apos;ll get back to you to confirm your appointment.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
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
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    data-testid="switch-emergency"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="preferredDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} data-testid="input-date" />
                  </FormControl>
                  <p className="text-xs text-muted-foreground">Subject to confirmation</p>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} data-testid="input-time" />
                  </FormControl>
                  <p className="text-xs text-muted-foreground">Subject to confirmation</p>
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

          {mutation.isError && (
            <p className="text-sm text-destructive text-center">
              Something went wrong. Please try again or call us directly.
            </p>
          )}
        </form>
      </Form>
    </GlassCard>
  );
}
