import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { sectors } from "@shared/schema";
import { useSEO } from "@/hooks/useSEO";
import {
  Phone,
  Calendar,
  Home,
  Building2,
  UtensilsCrossed,
  GraduationCap,
  ShoppingBag,
  Briefcase,
  Heart,
  Building,
  Dumbbell,
  Users,
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

const sectorDetails = [
  {
    icon: Home,
    title: "Homeowners",
    description: "Reliable plumbing and drainage services for your home, from emergency repairs to planned maintenance.",
  },
  {
    icon: Building,
    title: "Managing Agents",
    description: "Trusted partner for property management companies handling multiple residential and commercial properties.",
  },
  {
    icon: Briefcase,
    title: "Businesses",
    description: "Commercial plumbing and drainage solutions to keep your business running smoothly.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Specialized services including grease trap maintenance and emergency drain clearing for food service.",
  },
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    description: "Educational facility support with planned maintenance and rapid emergency response.",
  },
  {
    icon: ShoppingBag,
    title: "Retail Outlets",
    description: "Minimal disruption services for retail environments with flexible scheduling options.",
  },
  {
    icon: Building2,
    title: "Offices",
    description: "Office building plumbing and drainage services with professional, discreet service delivery.",
  },
  {
    icon: Heart,
    title: "Hospitals & Healthcare",
    description: "Critical facility support with understanding of healthcare environment requirements.",
  },
  {
    icon: Building,
    title: "Apartment Buildings",
    description: "Multi-unit residential property services for communal and individual drainage issues.",
  },
  {
    icon: Dumbbell,
    title: "Gyms & Leisure",
    description: "High-demand facility support for shower rooms, changing areas, and pool drainage systems.",
  },
  {
    icon: Users,
    title: "Commercial",
    description: "Plumbing and drainage support for commercial properties with reliable scheduled and emergency services.",
  },
  {
    icon: Home,
    title: "Houses",
    description: "Complete residential plumbing and drainage solutions for all property types.",
  },
];

export default function SectorsServed() {
  useSEO({
    title: "Sectors We Serve - Commercial & Residential Plumbing Services",
    description: "Plumbing and drainage services for homeowners, businesses, restaurants, schools, hospitals, and more across Essex, M25 radius, Cambridge, and Luton. 30+ years combined experience.",
  });

  return (
    <div data-testid="page-sectors-served">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SlideIn delay={0.1}>
                <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Industries We Support
                </h1>
              </SlideIn>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  With 30+ years combined experience, our team understands the unique requirements of each sector.
                </p>
              </FadeIn>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" staggerDelay={0.08} triggerOnScroll>
            {sectorDetails.map((sector) => (
              <StaggerItem key={sector.title}>
                <HoverScale>
                  <GlassCard className="p-6">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <sector.icon className="w-10 h-10 text-primary mb-4" />
                    </motion.div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {sector.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{sector.description}</p>
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
                    Why Businesses Choose Us
                  </h2>
                </SlideIn>
                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                  {[
                    {
                      title: "Flexible Scheduling",
                      description: "We work around your business hours to minimise disruption.",
                    },
                    {
                      title: "24/7 Emergency Response",
                      description: "When emergencies happen, we're available around the clock.",
                    },
                    {
                      title: "Certified & Qualified",
                      description: "Our team holds industry certifications including PASMA, IPAF, and SSSTS.",
                    },
                    {
                      title: "Planned Maintenance",
                      description: "Preventative maintenance programs to avoid costly emergencies.",
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
                    Certifications & Qualifications
                  </h3>
                  <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.05} triggerOnScroll>
                    {[
                      { name: "NVQ Level 3", desc: "Plumbing" },
                      { name: "PASMA", desc: "Scaffolding" },
                      { name: "IPAF", desc: "Access Platforms" },
                      { name: "SSSTS", desc: "Site Safety" },
                      { name: "STREETWORKS (NRSWA)", desc: "Road Works Certified", span: 2 },
                    ].map((cert, index) => (
                      <StaggerItem key={cert.name}>
                        <HoverScale>
                          <div className={`text-center p-4 bg-muted/50 rounded-md ${cert.span ? 'col-span-2' : ''}`}>
                            <span className="font-heading text-lg font-bold text-foreground">{cert.name}</span>
                            <p className="text-xs text-muted-foreground">{cert.desc}</p>
                          </div>
                        </HoverScale>
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
              Whatever Your Sector, We Can Help
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Get in touch to discuss your specific requirements and how we can support your business.
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
