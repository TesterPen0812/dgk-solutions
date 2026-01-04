import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { serviceAreas } from "@shared/schema";
import { useSEO } from "@/hooks/useSEO";
import {
  Phone,
  Calendar,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { BookOnlineLink } from "@/components/BookOnlineLink";
import { CallButton } from "@/components/CallButton";
import { OFFICE_TEL } from "@/components/CallNumbers";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { HoverScale } from "@/components/animations/HoverScale";
import { SlideIn } from "@/components/animations/SlideIn";
import { FadeIn } from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

const areaDetails = [
  {
    name: "Essex",
    description: "Our home base with the fastest response times",
    coverage: "Full coverage across the county",
    highlight: true,
  },
  {
    name: "M25 Radius",
    description: "Complete coverage within the M25 motorway",
    coverage: "All areas inside the M25",
    highlight: true,
  },
  {
    name: "Cambridge",
    description: "Extended coverage for Cambridge and surrounding areas",
    coverage: "Cambridge city and nearby towns",
    highlight: false,
  },
  {
    name: "Luton",
    description: "Extended coverage for Luton and surrounding areas",
    coverage: "Luton and nearby areas",
    highlight: false,
  },
];

const essexAreas = [
  "Chelmsford",
  "Colchester",
  "Basildon",
  "Southend-on-Sea",
  "Harlow",
  "Brentwood",
  "Romford",
  "Grays",
  "Billericay",
  "Wickford",
  "Rayleigh",
  "Braintree",
  "Witham",
  "Maldon",
  "Epping",
];

const londonAreas = [
  "East London",
  "North East London",
  "Barking & Dagenham",
  "Havering",
  "Redbridge",
  "Waltham Forest",
  "Newham",
  "Tower Hamlets",
  "Hackney",
  "Islington",
  "Enfield",
  "Haringey",
];

export default function AreasCovered() {
  useSEO({
    title: "Service Areas - Essex, London, Cambridge & Luton Coverage",
    description: "Plumbing and drainage services across Essex, M25 radius, Cambridge, and Luton. Based in Essex with wide coverage. Fast response times in core areas.",
  });

  return (
    <div data-testid="page-areas-covered">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SlideIn delay={0.1}>
                <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Our Coverage Areas
                </h1>
              </SlideIn>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We provide services across these main regions. Contact us to confirm coverage for your specific location.
                </p>
              </FadeIn>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" staggerDelay={0.1} triggerOnScroll>
            {areaDetails.map((area) => (
              <StaggerItem key={area.name}>
                <HoverScale>
                  <GlassCard
                    className={`p-6 ${area.highlight ? 'border-primary/30 bg-primary/5' : ''}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className={`w-10 h-10 mb-4 ${area.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                    </motion.div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {area.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{area.description}</p>
                    <p className="text-xs text-muted-foreground">{area.coverage}</p>
                  </GlassCard>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <HoverScale>
              <GlassCard className="p-6 flex items-start gap-4 bg-muted/50">
                <AlertCircle className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Additional Travel Costs</h3>
                  <p className="text-sm text-muted-foreground">
                    Additional travel costs may apply for locations outside our core service areas.
                    Please contact us for a quote specific to your location.
                  </p>
                </div>
              </GlassCard>
            </HoverScale>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <SlideIn delay={0.1}>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
                    Essex Coverage
                  </h2>
                </SlideIn>
                <FadeIn delay={0.2}>
                  <p className="text-muted-foreground mb-6">
                    As our home county, we provide comprehensive coverage across Essex with the fastest response times.
                  </p>
                </FadeIn>
                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-3" staggerDelay={0.03} triggerOnScroll>
                  {essexAreas.map((area) => (
                    <StaggerItem key={area}>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{area}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <SlideIn delay={0.1}>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
                    London Coverage
                  </h2>
                </SlideIn>
                <FadeIn delay={0.2}>
                  <p className="text-muted-foreground mb-6">
                    We cover areas within the M25, particularly North and East London boroughs.
                  </p>
                </FadeIn>
                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-3" staggerDelay={0.03} triggerOnScroll>
                  {londonAreas.map((area) => (
                    <StaggerItem key={area}>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{area}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <SlideIn delay={0.1}>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                    Not Sure If We Cover Your Area?
                  </h2>
                </SlideIn>
                <FadeIn delay={0.2}>
                  <p className="text-muted-foreground mb-6">
                    If your location isn&apos;t listed, don&apos;t worry. We may still be able to help.
                    Contact us with your postcode and we&apos;ll confirm if we can provide service to your area.
                  </p>
                </FadeIn>
                <StaggerContainer className="space-y-3 mb-8" staggerDelay={0.1}>
                  {[
                    "Quick response to coverage enquiries",
                    "Clear pricing including any travel costs",
                    "Emergency services may be available outside normal areas",
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
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <HoverScale>
                <GlassCard className="p-8 text-center">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  </motion.div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    Check Your Coverage
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Call us or use our booking form to check if we cover your area.
                  </p>
                  <div className="space-y-3">
                    <motion.a href={OFFICE_TEL} className="block" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-emergency text-emergency-foreground gap-2">
                        <Phone className="w-4 h-4" />
                        Call Office to Confirm
                      </Button>
                    </motion.a>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <BookOnlineLink className="block">
                        <Button variant="outline" className="w-full gap-2">
                          <Calendar className="w-4 h-4" />
                          Book Online
                        </Button>
                      </BookOnlineLink>
                    </motion.div>
                  </div>
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
              Serving Essex & Beyond
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              With 24/7 emergency services and flexible scheduling, we&apos;re here when you need us.
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
