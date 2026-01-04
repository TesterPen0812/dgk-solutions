import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { useSEO } from "@/hooks/useSEO";
import {
  Phone,
  Calendar,
  Truck,
  CheckCircle,
  ArrowRight,
  Droplet,
  Factory,
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

const tankerServices = [
  {
    icon: Truck,
    title: "Tanker Services",
    description: "Professional liquid waste removal for commercial and industrial clients. Our tanker fleet handles a variety of waste types safely and efficiently.",
    features: ["Industrial waste removal", "Commercial liquid waste", "Safe disposal", "Licensed operators"],
  },
  {
    icon: Droplet,
    title: "Septic Tank Emptying",
    description: "Regular septic tank emptying and maintenance to keep your system working efficiently and prevent costly problems.",
    features: ["Scheduled emptying", "Emergency call-outs", "Full inspection", "Waste disposal included"],
  },
  {
    icon: Factory,
    title: "Grease Trap Maintenance",
    description: "Essential grease trap cleaning for restaurants, commercial kitchens, and food service establishments.",
    features: ["Regular maintenance", "Compliance support", "Emergency cleaning", "Waste documentation"],
  },
];

export default function TankerWaste() {
  useSEO({
    title: "Tanker & Waste Services in Essex, London, Cambridge & Luton",
    description: "Professional tanker services, septic tank emptying, and grease trap maintenance across Essex, M25 radius, Cambridge, and Luton. Licensed waste disposal and commercial liquid waste removal.",
  });

  return (
    <div data-testid="page-tanker-waste">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SlideIn delay={0.1}>
                <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Our Services
                </h1>
              </SlideIn>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive waste management solutions for homes, businesses, and industrial clients.
                </p>
              </FadeIn>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid lg:grid-cols-3 gap-8" staggerDelay={0.1} triggerOnScroll>
            {tankerServices.map((service) => (
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
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
                    Septic Tank Services
                  </h2>
                </SlideIn>
                <FadeIn delay={0.2}>
                  <p className="text-muted-foreground mb-6">
                    Regular septic tank maintenance is essential to prevent blockages, overflows, and costly repairs.
                    We recommend emptying your septic tank every 12-24 months depending on usage.
                  </p>
                </FadeIn>
                <StaggerContainer className="space-y-4 mb-8" staggerDelay={0.1}>
                  {[
                    {
                      title: "Scheduled Emptying",
                      description: "Set up regular emptying to keep your system running smoothly.",
                    },
                    {
                      title: "Emergency Service",
                      description: "Overflowing septic tank? We can respond quickly to emergencies.",
                    },
                    {
                      title: "Licensed Disposal",
                      description: "All waste is disposed of at licensed facilities with full documentation.",
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
                      Schedule Service <ArrowRight className="w-4 h-4" />
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
                    <Droplet className="w-16 h-16 text-primary mx-auto mb-6" />
                  </motion.div>
                  <h3 className="font-heading text-xl font-bold text-foreground text-center mb-4">
                    Signs You Need Emptying
                  </h3>
                  <StaggerContainer className="space-y-3" staggerDelay={0.05}>
                    {[
                      "Slow draining sinks and toilets",
                      "Unpleasant odours around the tank",
                      "Pooling water near the tank area",
                      "Gurgling sounds from drains",
                      "More than 12 months since last empty",
                    ].map((item, index) => (
                      <StaggerItem key={item}>
                        <motion.li
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, amount: 0.1 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-emergency font-bold">!</span>
                          <span className="text-muted-foreground">{item}</span>
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
                    <Factory className="w-16 h-16 text-primary mx-auto mb-6" />
                  </motion.div>
                  <h3 className="font-heading text-xl font-bold text-foreground text-center mb-4">
                    Commercial Grease Traps
                  </h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Essential for restaurants, hotels, and food service establishments to maintain compliance
                    and prevent drain blockages.
                  </p>
                  <div className="space-y-3">
                    <HoverScale>
                      <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                        <span className="text-sm text-muted-foreground">Recommended frequency</span>
                        <span className="font-semibold text-foreground">Monthly</span>
                      </div>
                    </HoverScale>
                    <HoverScale>
                      <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                        <span className="text-sm text-muted-foreground">Emergency available</span>
                        <span className="font-semibold text-foreground">24/7</span>
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
                    Grease Trap Maintenance
                  </h2>
                </SlideIn>
                <FadeIn delay={0.2}>
                  <p className="text-muted-foreground mb-6">
                    Regular grease trap cleaning is essential for commercial kitchens to prevent blockages,
                    maintain hygiene standards, and ensure compliance with regulations.
                  </p>
                </FadeIn>
                <StaggerContainer className="space-y-4 mb-8" staggerDelay={0.1}>
                  {[
                    {
                      title: "Prevent Blockages",
                      description: "Regular cleaning prevents fats, oils, and grease from blocking your drains.",
                    },
                    {
                      title: "Stay Compliant",
                      description: "Meet food hygiene and environmental regulations with proper maintenance.",
                    },
                    {
                      title: "Waste Documentation",
                      description: "Full documentation provided for regulatory compliance.",
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
                      Book Maintenance <ArrowRight className="w-4 h-4" />
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
              Need Waste Management Services?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              From septic tanks to commercial grease traps, we handle all your liquid waste needs professionally.
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
                    Schedule Service
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
