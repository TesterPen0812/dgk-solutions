import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { BookingForm } from "@/components/BookingForm";
import { useSEO } from "@/hooks/useSEO";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SlideIn } from "@/components/animations/SlideIn";
import { FadeIn } from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { CallNumbers, OFFICE_TEL } from "@/components/CallNumbers";

export default function Contact() {
  useSEO({
    title: "Contact DGK Solutions - Book Online or Call 24/7 in Essex, London, Cambridge & Luton",
    description: "Get in touch or book a plumbing, drainage, or tanker service. 24/7 emergency call-outs available across Essex, M25 radius, Cambridge, and Luton. Call 01708 961700 or 07089 61700.",
  });

  // Scroll to #book anchor if present in URL
  useEffect(() => {
    if (window.location.hash === "#book") {
      const bookSection = document.getElementById("book");
      if (bookSection) {
        setTimeout(() => {
          bookSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  return (
    <div data-testid="page-contact">
      <section id="book" className="py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-8">
              <SlideIn delay={0.1}>
                <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Contact Us & Book Online
                </h1>
              </SlideIn>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground max-w-2xl">
                  Get in touch or book a plumbing, drainage, or tanker service. 24/7 emergency call-outs available across Essex, M25 radius, Cambridge, and Luton.
                </p>
              </FadeIn>
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-3 gap-12">
            <ScrollReveal className="lg:col-span-2">
              <BookingForm />
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <GlassCard className="p-6 border-emergency/20 bg-emergency/5">
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <AlertTriangle className="w-6 h-6 text-emergency flex-shrink-0" />
                    </motion.div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        Emergency?
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        For emergencies, please call us directly for the fastest response.
                      </p>
                      <motion.a
                        href={OFFICE_TEL}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full bg-emergency text-emergency-foreground gap-2">
                          <Phone className="w-4 h-4" />
                          Call Emergency Line
                        </Button>
                      </motion.a>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <GlassCard className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { icon: Phone, label: "Phone", value: "01708 961700", href: OFFICE_TEL },
                      { icon: Mail, label: "Email", value: "info@dgksolutions.ltd", href: "mailto:info@dgksolutions.ltd" },
                      { icon: MapPin, label: "Location", value: "Based in Essex, UK" },
                      { icon: Clock, label: "Availability", value: "24/7 Emergency Service", value2: "365 Days a Year" },
                    ].map((item, index) => (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="flex items-start gap-3"
                      >
                        <item.icon className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <>
                              <p className="text-sm text-muted-foreground">{item.value}</p>
                              {item.value2 && <p className="text-sm text-muted-foreground">{item.value2}</p>}
                            </>
                          )}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <GlassCard className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-4">
                    Areas We Cover
                  </h3>
                  <ul className="space-y-2">
                    {["Essex (Home Base)", "M25 Radius", "Cambridge", "Luton"].map((area, index) => (
                      <motion.li
                        key={area}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="flex items-center gap-2"
                      >
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{area}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4">
                    Additional travel costs may apply outside core areas.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/areas-covered">
                      <Button variant="ghost" className="px-0 mt-2 underline-offset-4 hover:underline">
                        View All Areas
                      </Button>
                    </Link>
                  </motion.div>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
