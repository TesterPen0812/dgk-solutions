import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { certifications, services, serviceAreas } from "@shared/schema";
import { useSEO } from "@/hooks/useSEO";
import {
  Phone,
  Calendar,
  Shield,
  Clock,
  Award,
  CheckCircle,
  Droplets,
  Wrench,
  Truck,
  AlertTriangle,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { SlideIn } from "@/components/animations/SlideIn";
import { FadeIn } from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { BookOnlineLink } from "@/components/BookOnlineLink";
import { PlumbingRepairsSection } from "@/components/PlumbingRepairsSection";
import { CallButton } from "@/components/CallButton";

const serviceCategories = [
  {
    icon: AlertTriangle,
    title: "Emergency Plumbing",
    description: "24/7 emergency response for burst pipes, leaks, and urgent plumbing issues.",
    href: "/emergency",
    color: "text-emergency",
  },
  {
    icon: Wrench,
    title: "Plumbing Repairs",
    description: "Toilets, taps, tanks, cylinders, leaks, and radiators kept in top shape.",
    href: "/plumbing-repairs",
    color: "text-primary",
  },
  {
    icon: Droplets,
    title: "Drainage Services",
    description: "Drain clearing, unblocking, CCTV surveys, and high-pressure jetting.",
    href: "/drainage",
    color: "text-primary",
  },
  {
    icon: Wrench,
    title: "Drain Repairs",
    description: "No-dig repairs, drain lining, patch repairs, and traditional excavations.",
    href: "/drain-repairs",
    color: "text-primary",
  },
  {
    icon: Truck,
    title: "Tanker & Waste",
    description: "Tanker services, septic tank emptying, and grease trap maintenance.",
    href: "/tanker-waste",
    color: "text-primary",
  },
];

export default function Home() {
  useSEO({
    title: "24/7 Emergency Plumbing & Drainage Services in Essex, London, Cambridge & Luton",
    description: "DGK Solutions - Professional plumbing, drainage, and tanker services across Essex, M25 radius, Cambridge, and Luton. 30+ years combined experience. 24/7 emergency call-outs, 365 days a year. Fully certified plumbers.",
  });

  return (
    <div data-testid="page-home">
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-grid-pattern"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <SlideIn delay={0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge className="bg-emergency/10 text-emergency border-emergency/20 px-4 py-2">
                    <Clock className="w-4 h-4 mr-2" />
                    Available 24/7 for Emergencies
                  </Badge>
                </motion.div>
              </SlideIn>

              <SlideIn delay={0.2} direction="right">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  <span className="text-primary">Professional</span> Plumbing & Drainage{" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-primary"
                  >
                    Solutions
                  </motion.span>
                </h1>
              </SlideIn>

              <FadeIn delay={0.3}>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Serving Essex, the M25 radius, Cambridge, and Luton with over{" "}
                  <strong className="text-foreground">30 years combined industry experience</strong>.
                  From emergency call-outs to planned maintenance, we deliver reliable, expert service.
                </p>
              </FadeIn>

              <SlideIn delay={0.4} direction="up">
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 sm:flex-none"
                  >
                    <CallButton />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 sm:flex-none"
                  >
                    <BookOnlineLink>
                      <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" data-testid="button-book-hero">
                        <Calendar className="w-5 h-5" />
                        Book Online
                      </Button>
                    </BookOnlineLink>
                  </motion.div>
                </div>
              </SlideIn>

              <FadeIn delay={0.5}>
                <div className="flex flex-wrap gap-4 pt-4">
                  {[
                    { icon: Shield, text: "Fully Certified" },
                    { icon: Clock, text: "24/7 Available" },
                    { icon: Award, text: "30+ Years Experience" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <ScrollReveal delay={0.3}>
              <div className="relative lg:pl-8">
                <GlassCard className="p-8 relative z-10">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="aspect-video rounded-md overflow-hidden mb-6 relative"
                  >
                    <img
                      src="https://benjaminfranklinplumbingfortworth.com/wp-content/uploads/2021/06/Plumbing-Services-from-People-You-Trust-Plumbing-Service-in-Fort-Worth-TX-1.jpg"
                      alt="Professional plumbing and drainage services"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent" />
                  </motion.div>
                  <div className="space-y-4">
                    <FadeIn delay={0.5}>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Why Choose DGK Solutions?
                      </h3>
                    </FadeIn>
                    <ul className="space-y-3">
                      {[
                        "Trading for 2 years with 30+ years combined experience",
                        "24/7 emergency call-outs, 365 days a year",
                        "Domestic & commercial specialists",
                        "Fully Insured – Public Liability & Professional Indemnity Insurance",
                        "NVQ Level 3, PASMA, IPAF certified",
                      ].map((text, index) => (
                        <motion.li
                          key={text}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                          className="flex items-start gap-3"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 + 0.1, type: "spring", stiffness: 200 }}
                          >
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          </motion.div>
                          <span className="text-sm text-muted-foreground">{text}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-emergency/10 rounded-full blur-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive plumbing, drainage, and waste management solutions for homes and businesses.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" staggerDelay={0.1}>
            {serviceCategories.map((category) => (
              <StaggerItem key={category.href}>
                <Link href={category.href}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <GlassCard className="p-6 h-full cursor-pointer group">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <category.icon className={`w-10 h-10 ${category.color} mb-4`} />
                      </motion.div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {category.description}
                      </p>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center text-sm text-primary font-medium"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </motion.span>
                    </GlassCard>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Areas We Cover
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Based in Essex, we provide services across a wide area. Additional travel costs may apply outside core zones.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
            {serviceAreas.map((area) => (
              <StaggerItem key={area.name}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <GlassCard className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                    </motion.div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                      {area.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </GlassCard>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/areas-covered">
                  <Button variant="outline" className="gap-2" data-testid="button-view-areas">
                    View All Areas <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
                  Certifications & Qualifications
                </h2>
                <p className="text-primary-foreground/80 mb-8">
                  Our team holds industry-recognised certifications ensuring quality workmanship and compliance with all safety regulations.
                </p>
                <StaggerContainer className="flex flex-wrap gap-3" staggerDelay={0.05}>
                  {certifications.map((cert) => (
                    <StaggerItem key={cert}>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
                        >
                          {cert}
                        </Badge>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>
            <StaggerContainer className="grid grid-cols-2 gap-6" staggerDelay={0.1}>
              {[
                { value: "30+", label: "Years Combined Experience" },
                { value: "24/7", label: "Emergency Service" },
                { value: "365", label: "Days a Year" },
                { value: "2", label: "Years Trading" },
              ].map((stat, index) => (
                <StaggerItem key={stat.label}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <GlassCard className="p-6 bg-primary-foreground/10 border-primary-foreground/20 text-center">
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                        className="font-heading text-4xl font-bold text-primary-foreground block"
                      >
                        {stat.value}
                      </motion.span>
                      <p className="text-sm text-primary-foreground/80 mt-1">{stat.label}</p>
                    </GlassCard>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <PlumbingRepairsSection />

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Need Help Now?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether it&apos;s an emergency or you need to schedule a service, we&apos;re here to help.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <CallButton />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOnlineLink>
                  <Button size="lg" variant="outline" className="gap-2" data-testid="button-book-cta">
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
