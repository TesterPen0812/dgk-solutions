import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { useSEO } from "@/hooks/useSEO";
import {
  Phone,
  Calendar,
  Droplets,
  CheckCircle,
  Camera,
  Waves,
  ArrowRight,
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

const drainageServices = [
  {
    icon: Droplets,
    title: "Drain Clearing & Inspection",
    description: "Complete drain clearing service with thorough inspection to identify issues and prevent future problems.",
  },
  {
    icon: CheckCircle,
    title: "PPM (Pre-Planned Maintenance)",
    description: "Scheduled maintenance visits to keep drains clear and prevent blockages before they happen.",
  },
  {
    icon: Droplets,
    title: "Sink Unblocking",
    description: "Fast and effective sink unblocking for kitchens and bathrooms in domestic and commercial settings.",
  },
  {
    icon: Droplets,
    title: "Toilet Unblocking",
    description: "Professional toilet unblocking services with minimal disruption to your property.",
  },
  {
    icon: Droplets,
    title: "Bath Unblocking",
    description: "Expert bath and shower drain unblocking to restore proper drainage quickly.",
  },
  {
    icon: Camera,
    title: "CCTV Drain Surveys",
    description: "Advanced camera technology to inspect drains, identify blockages, damage, and structural issues.",
  },
  {
    icon: Waves,
    title: "HPWJ Jetting",
    description: "High-pressure water jetting to clear stubborn blockages and clean drain walls effectively.",
  },
];

export default function Drainage() {
  useSEO({
    title: "Drainage Services in Essex, London, Cambridge & Luton",
    description: "Professional drainage solutions including drain clearing, CCTV surveys, and high-pressure jetting across Essex, M25 radius, Cambridge, and Luton. Expert drain unblocking and inspection services.",
  });

  return (
    <div data-testid="page-drainage">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SlideIn delay={0.1}>
                <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Our Drainage Services
                </h1>
              </SlideIn>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive drainage solutions using the latest equipment and techniques.
                </p>
              </FadeIn>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1} triggerOnScroll>
            {drainageServices.map((service) => (
              <StaggerItem key={service.title}>
                <HoverScale>
                  <GlassCard className="p-6">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <service.icon className="w-10 h-10 text-primary mb-4" />
                    </motion.div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </GlassCard>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <SlideIn delay={0.1}>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                    CCTV Drain Surveys
                  </h2>
                </SlideIn>
                <FadeIn delay={0.2}>
                  <p className="text-muted-foreground mb-6">
                    Our CCTV drain surveys provide a detailed visual inspection of your drainage system,
                    allowing us to identify problems quickly and accurately without unnecessary excavation.
                  </p>
                </FadeIn>
                <StaggerContainer className="space-y-3 mb-8" staggerDelay={0.1}>
                  {[
                    "Identify blockages and their exact location",
                    "Detect cracks, damage, and structural issues",
                    "Pre-purchase property surveys",
                    "Recorded footage provided for reference",
                  ].map((item, index) => (
                    <StaggerItem key={item}>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="flex items-start gap-3"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ delay: index * 0.1 + 0.1, type: "spring", stiffness: 200 }}
                        >
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        </motion.div>
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <BookOnlineLink>
                    <Button className="gap-2">
                      Book a CCTV Survey <ArrowRight className="w-4 h-4" />
                    </Button>
                  </BookOnlineLink>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <HoverScale>
                <GlassCard className="p-8">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Camera className="w-16 h-16 text-primary mx-auto mb-6" />
                  </motion.div>
                  <h3 className="font-heading text-xl font-bold text-foreground text-center mb-4">
                    High-Definition Inspections
                  </h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Our camera equipment provides clear, detailed footage of your drainage system,
                    helping us diagnose issues accurately and recommend the best solution.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <HoverScale>
                      <div className="text-center p-4 bg-muted/50 rounded-md">
                        <span className="font-heading text-2xl font-bold text-foreground">HD</span>
                        <p className="text-xs text-muted-foreground">Camera Quality</p>
                      </div>
                    </HoverScale>
                    <HoverScale>
                      <div className="text-center p-4 bg-muted/50 rounded-md">
                        <span className="font-heading text-2xl font-bold text-foreground">50m+</span>
                        <p className="text-xs text-muted-foreground">Cable Length</p>
                      </div>
                    </HoverScale>
                  </div>
                </GlassCard>
              </HoverScale>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.2}>
              <HoverScale>
                <GlassCard className="p-8 order-2 lg:order-1">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Waves className="w-16 h-16 text-primary mx-auto mb-6" />
                  </motion.div>
                  <h3 className="font-heading text-xl font-bold text-foreground text-center mb-4">
                    High-Pressure Water Jetting
                  </h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Our HPWJ equipment delivers powerful cleaning action to clear even the most
                    stubborn blockages and leave drains clean and free-flowing.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <HoverScale>
                      <div className="text-center p-4 bg-muted/50 rounded-md">
                        <span className="font-heading text-2xl font-bold text-foreground">4000+</span>
                        <p className="text-xs text-muted-foreground">PSI Pressure</p>
                      </div>
                    </HoverScale>
                    <HoverScale>
                      <div className="text-center p-4 bg-muted/50 rounded-md">
                        <span className="font-heading text-2xl font-bold text-foreground">Certified</span>
                        <p className="text-xs text-muted-foreground">HPWJ Qualified</p>
                      </div>
                    </HoverScale>
                  </div>
                </GlassCard>
              </HoverScale>
            </ScrollReveal>

            <ScrollReveal>
              <div className="order-1 lg:order-2">
                <SlideIn delay={0.1}>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                    HPWJ Jetting Services
                  </h2>
                </SlideIn>
                <FadeIn delay={0.2}>
                  <p className="text-muted-foreground mb-6">
                    High-pressure water jetting is the most effective method for clearing stubborn blockages
                    and cleaning drain walls. Our certified team uses professional-grade equipment.
                  </p>
                </FadeIn>
                <StaggerContainer className="space-y-3 mb-8" staggerDelay={0.1}>
                  {[
                    "Clears grease, fat, and oil build-up",
                    "Removes tree root intrusions",
                    "Descales pipes and drains",
                    "Suitable for domestic and commercial drains",
                  ].map((item, index) => (
                    <StaggerItem key={item}>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="flex items-start gap-3"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ delay: index * 0.1 + 0.1, type: "spring", stiffness: 200 }}
                        >
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        </motion.div>
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <BookOnlineLink>
                    <Button className="gap-2">
                      Book Jetting Service <ArrowRight className="w-4 h-4" />
                    </Button>
                  </BookOnlineLink>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Need Drainage Help?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Whether it&apos;s a blocked drain or a comprehensive survey, our team is ready to help.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <CallButton />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <BookOnlineLink>
                  <Button size="lg" variant="secondary" className="gap-2">
                    <Calendar className="w-5 h-5" />
                    Book Online
                  </Button>
                </BookOnlineLink>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
