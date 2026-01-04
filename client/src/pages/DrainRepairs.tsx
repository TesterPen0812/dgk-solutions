import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { useSEO } from "@/hooks/useSEO";
import {
  Phone,
  Calendar,
  Wrench,
  CheckCircle,
  ArrowRight,
  Hammer,
  CircleDot,
  Layers,
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

const repairServices = [
  {
    icon: CircleDot,
    title: "No-Dig Drain Repairs",
    description: "Modern trenchless technology that repairs drains without excavation, minimizing disruption to your property.",
    benefits: ["Minimal disruption", "Faster completion", "Cost-effective", "No garden damage"],
  },
  {
    icon: Layers,
    title: "Drain Lining",
    description: "Create a new pipe within your existing pipe using advanced lining materials for a long-lasting repair.",
    benefits: ["50+ year lifespan", "Structural strength", "No excavation", "Smooth flow"],
  },
  {
    icon: Wrench,
    title: "Patch Repairs",
    description: "Targeted repairs for localized damage without the need to reline the entire drain.",
    benefits: ["Precise repairs", "Quick installation", "Minimal cost", "Effective solution"],
  },
  {
    icon: Hammer,
    title: "Traditional Excavations",
    description: "When no-dig methods aren't suitable, we provide professional excavation and replacement services.",
    benefits: ["Complete replacement", "Full access", "New pipework", "Long-term fix"],
  },
];

export default function DrainRepairs() {
  useSEO({
    title: "Drain Repairs in Essex, London, Cambridge & Luton",
    description: "Expert drain repair solutions including no-dig repairs, drain lining, and traditional excavations across Essex, M25 radius, Cambridge, and Luton. Minimize disruption with modern trenchless technology.",
  });

  return (
    <div data-testid="page-drain-repairs">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SlideIn delay={0.1}>
                <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Our Repair Methods
                </h1>
              </SlideIn>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We use the most appropriate repair method for your situation, always prioritizing minimal disruption.
                </p>
              </FadeIn>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.1} triggerOnScroll>
            {repairServices.map((service) => (
              <StaggerItem key={service.title}>
                <HoverScale>
                  <GlassCard className="p-8">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <service.icon className="w-12 h-12 text-primary mb-4" />
                    </motion.div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
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
                    Why Choose No-Dig Repairs?
                  </h2>
                </SlideIn>
                <FadeIn delay={0.2}>
                  <p className="text-muted-foreground mb-6">
                    No-dig technology has revolutionized drain repairs. Instead of excavating your garden, driveway, or
                    property, we repair pipes from the inside using advanced techniques.
                  </p>
                </FadeIn>
                <StaggerContainer className="space-y-4 mb-8" staggerDelay={0.1}>
                  {[
                    {
                      title: "Preserve Your Property",
                      description: "No need to dig up patios, driveways, or landscaping.",
                    },
                    {
                      title: "Faster Completion",
                      description: "Most no-dig repairs are completed in a single day.",
                    },
                    {
                      title: "Cost Effective",
                      description: "Save money on excavation, reinstatement, and landscaping costs.",
                    },
                    {
                      title: "Long-Lasting Results",
                      description: "Modern liners can last 50+ years with proper installation.",
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
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <BookOnlineLink>
                    <Button className="gap-2">
                      Get a Free Assessment <ArrowRight className="w-4 h-4" />
                    </Button>
                  </BookOnlineLink>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <HoverScale>
                <GlassCard className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Our Process
                  </h3>
                  <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                    {[
                      {
                        step: "1",
                        title: "CCTV Survey",
                        description: "We inspect the drain to assess the damage and determine the best repair method.",
                      },
                      {
                        step: "2",
                        title: "Quote & Plan",
                        description: "We provide a clear quote and explain the recommended repair approach.",
                      },
                      {
                        step: "3",
                        title: "Professional Repair",
                        description: "Our certified team completes the repair using the agreed method.",
                      },
                      {
                        step: "4",
                        title: "Final Inspection",
                        description: "We verify the repair with a post-work CCTV survey and provide documentation.",
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

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Damaged Drains? We Can Help
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Don&apos;t let drain problems escalate. Contact us for a professional assessment and repair quote.
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
                    Book Assessment
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
