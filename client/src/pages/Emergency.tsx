import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";
import {
  Phone,
  Calendar,
  AlertTriangle,
  Clock,
  CheckCircle,
  Droplets,
  Wrench,
  Shield,
} from "lucide-react";
import { BookOnlineLink } from "@/components/BookOnlineLink";
import { CallButton } from "@/components/CallButton";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { HoverScale } from "@/components/animations/HoverScale";
import { SlideIn } from "@/components/animations/SlideIn";
import { FadeIn } from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

const emergencyServices = [
  {
    title: "Burst Pipes",
    description: "Immediate response for burst or leaking pipes to minimise water damage.",
  },
  {
    title: "Blocked Drains",
    description: "Emergency drain unblocking when you need it most.",
  },
  {
    title: "Leaking Pipes",
    description: "Quick leak detection and repair to prevent further damage.",
  },
  {
    title: "Flooding",
    description: "Emergency response for flood situations and water extraction.",
  },
  {
    title: "No Hot Water",
    description: "Emergency boiler and heating issues resolved quickly.",
  },
  {
    title: "Sewage Backup",
    description: "Urgent sewage and drainage emergencies handled safely.",
  },
];

export default function Emergency() {
  useSEO({
    title: "24/7 Emergency Plumbing Services in Essex, London, Cambridge & Luton",
    description: "Emergency plumbing and drainage services available 24/7, 365 days a year across Essex, M25 radius, Cambridge, and Luton. Fast response for burst pipes, blocked drains, leaks, and flooding.",
  });

  return (
    <div data-testid="page-emergency">
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SlideIn delay={0.1}>
                <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Emergency Services We Provide
                </h1>
              </SlideIn>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  From burst pipes to blocked drains, our experienced team handles all plumbing and drainage emergencies.
                </p>
              </FadeIn>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1} triggerOnScroll>
            {emergencyServices.map((service) => (
              <StaggerItem key={service.title}>
                <HoverScale>
                  <GlassCard className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className="w-10 h-10 bg-emergency/10 rounded-md flex items-center justify-center flex-shrink-0"
                      >
                        <AlertTriangle className="w-5 h-5 text-emergency" />
                      </motion.div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <SlideIn delay={0.1}>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                    Why Choose Us for Emergencies?
                  </h2>
                </SlideIn>
                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                  {[
                    {
                      title: "30+ Years Combined Experience",
                      description: "Our senior engineers have extensive experience handling all types of emergencies.",
                    },
                    {
                      title: "Fully Equipped Vehicles",
                      description: "Our vans carry all necessary equipment to handle most emergencies on the first visit.",
                    },
                    {
                      title: "Domestic & Commercial",
                      description: "We handle emergencies for homes, businesses, and commercial properties alike.",
                    },
                    {
                      title: "Wide Coverage Area",
                      description: "Serving Essex, M25 radius, Cambridge, and Luton for emergency call-outs.",
                    },
                  ].map((item, index) => (
                    <StaggerItem key={item.title}>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="flex items-start gap-4"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ delay: index * 0.1 + 0.1, type: "spring", stiffness: 200 }}
                        >
                          <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </motion.li>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <HoverScale>
                <GlassCard className="p-8">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-6 text-center">
                    What to Do in an Emergency
                  </h3>
                  <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                    {[
                      {
                        step: "1",
                        title: "Turn Off Water Supply",
                        description: "Locate your stopcock and turn off the water to prevent further damage.",
                      },
                      {
                        step: "2",
                        title: "Call Us Immediately",
                        description: "Our emergency line is available 24/7, 365 days a year.",
                      },
                      {
                        step: "3",
                        title: "We Respond Quickly",
                        description: "Our team will arrive equipped to handle your emergency.",
                      },
                    ].map((item, index) => (
                      <StaggerItem key={item.step}>
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, amount: 0.1 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          className="flex items-start gap-4"
                        >
                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.1 + 0.1, type: "spring", stiffness: 200 }}
                            className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0"
                          >
                            {item.step}
                          </motion.span>
                          <div>
                            <h4 className="font-semibold text-foreground">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </motion.li>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </GlassCard>
              </HoverScale>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-emergency text-emergency-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            >
              <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
            </motion.div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Don&apos;t Wait - Call Now
            </h2>
            <p className="text-emergency-foreground/80 max-w-2xl mx-auto mb-8">
              Plumbing emergencies can cause significant damage if left untreated.
              Our team is ready to help you 24 hours a day, 7 days a week.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <CallButton />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
