import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { services } from "@shared/schema";
import { useSEO } from "@/hooks/useSEO";
import {
  Phone,
  Calendar,
  AlertTriangle,
  Droplets,
  Wrench,
  Truck,
  ArrowRight,
  CheckCircle,
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

const categoryInfo = {
  emergency: {
    icon: AlertTriangle,
    title: "Emergency Services",
    description: "24/7 emergency response for urgent plumbing and drainage issues",
    href: "/emergency",
    color: "text-emergency",
  },
  plumbing: {
    icon: Wrench,
    title: "Plumbing Repairs",
    description: "Repairs and maintenance for toilets, taps, tanks, cylinders, leaks, and radiators",
    href: "/plumbing-repairs",
    color: "text-primary",
  },
  drainage: {
    icon: Droplets,
    title: "Drainage Services",
    description: "Comprehensive drainage solutions including clearing, inspection, and jetting",
    href: "/drainage",
    color: "text-primary",
  },
  repairs: {
    icon: Wrench,
    title: "Drain Repairs",
    description: "Modern no-dig solutions and traditional repair methods",
    href: "/drain-repairs",
    color: "text-primary",
  },
  tanker: {
    icon: Truck,
    title: "Tanker & Waste Services",
    description: "Liquid waste removal, septic tanks, and grease trap maintenance",
    href: "/tanker-waste",
    color: "text-primary",
  },
};

export default function Services() {
  useSEO({
    title: "Plumbing & Drainage Services in Essex, London, Cambridge & Luton",
    description: "Comprehensive plumbing, drainage, and waste management services for homes and businesses across Essex, M25 radius, Cambridge, and Luton. Emergency plumbing, drain clearing, CCTV surveys, and more.",
  });

  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services[number][]>);

  return (
    <div data-testid="page-services">
      {Object.entries(categoryInfo).map(([key, category], index) => (
        <section key={key} className={`${index === 0 ? 'pt-16' : 'py-16'} ${key === 'drainage' || key === 'tanker' ? 'bg-muted/30' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {index === 0 && (
              <ScrollReveal>
                <div className="mb-12">
                  <SlideIn delay={0.1}>
                    <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
                      Our Services
                    </h1>
                  </SlideIn>
                  <FadeIn delay={0.2}>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                      DGK Solutions provides comprehensive plumbing, drainage, and waste management services for both domestic and commercial clients across Essex, the M25 radius, Cambridge, and Luton.
                    </p>
                  </FadeIn>
                </div>
              </ScrollReveal>
            )}
            <ScrollReveal delay={index * 0.1}>
              <div className="flex items-start gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <category.icon className={`w-10 h-10 ${category.color} flex-shrink-0`} />
                </motion.div>
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" staggerDelay={0.08} triggerOnScroll>
              {groupedServices[key]?.map((service) => (
                <StaggerItem key={service.id}>
                  <HoverScale>
                    <GlassCard className="p-6">
                      <div className="flex items-start gap-3">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        </motion.div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground mb-1">
                            {service.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Professional {service.name.toLowerCase()} services for domestic and commercial properties.
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </HoverScale>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.2}>
              <div className="mb-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href={category.href}>
                    <Button variant="outline" className="gap-2">
                      Learn More About {category.title} <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Contact us today for a consultation or to book a service. Our experienced team is ready to help.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
