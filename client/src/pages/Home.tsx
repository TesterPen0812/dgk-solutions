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

const serviceCategories = [
  {
    icon: AlertTriangle,
    title: "Emergency Plumbing",
    description: "24/7 emergency response for burst pipes, leaks, and urgent plumbing issues.",
    href: "/emergency",
    color: "text-emergency",
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
    title: "24/7 Emergency Plumbing & Drainage Services",
    description: "Professional plumbing, drainage, and tanker services across Essex, M25 radius, Cambridge, and Luton. 30+ years combined experience. 24/7 emergency call-outs, 365 days a year.",
  });

  return (
    <div data-testid="page-home">
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-emergency/10 text-emergency border-emergency/20 px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Available 24/7 for Emergencies
              </Badge>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Professional Plumbing & Drainage{" "}
                <span className="text-primary">Solutions</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                Serving Essex, the M25 radius, Cambridge, and Luton with over{" "}
                <strong className="text-foreground">30 years combined industry experience</strong>.
                From emergency call-outs to planned maintenance, we deliver reliable, expert service.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+44XXXXXXXXXX">
                  <Button size="lg" className="w-full sm:w-auto bg-emergency text-emergency-foreground gap-2" data-testid="button-call-hero">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" data-testid="button-book-hero">
                    <Calendar className="w-5 h-5" />
                    Book Online
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Fully Certified</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>24/7 Available</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4 text-primary" />
                  <span>30+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <GlassCard className="p-8 relative z-10">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-md flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Wrench className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Professional Trade Services</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Why Choose DGK Solutions?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Trading for 2 years with 30+ years combined experience
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        24/7 emergency call-outs, 365 days a year
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Domestic & commercial specialists
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        NVQ Level 3, PASMA, IPAF certified
                      </span>
                    </li>
                  </ul>
                </div>
              </GlassCard>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emergency/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive plumbing, drainage, and waste management solutions for homes and businesses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category) => (
              <Link key={category.href} href={category.href}>
                <GlassCard className="p-6 h-full hover-elevate cursor-pointer transition-all duration-200 group">
                  <category.icon className={`w-10 h-10 ${category.color} mb-4`} />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-sm text-primary font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Areas We Cover
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Based in Essex, we provide services across a wide area. Additional travel costs may apply outside core zones.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area) => (
              <GlassCard key={area.name} className="p-6 text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {area.name}
                </h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </GlassCard>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/areas-covered">
              <Button variant="outline" className="gap-2" data-testid="button-view-areas">
                View All Areas <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
                Certifications & Qualifications
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Our team holds industry-recognized certifications ensuring quality workmanship and compliance with all safety regulations.
              </p>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <Badge
                    key={cert}
                    variant="secondary"
                    className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <GlassCard className="p-6 bg-primary-foreground/10 border-primary-foreground/20 text-center">
                <span className="font-heading text-4xl font-bold text-primary-foreground">30+</span>
                <p className="text-sm text-primary-foreground/80 mt-1">Years Combined Experience</p>
              </GlassCard>
              <GlassCard className="p-6 bg-primary-foreground/10 border-primary-foreground/20 text-center">
                <span className="font-heading text-4xl font-bold text-primary-foreground">24/7</span>
                <p className="text-sm text-primary-foreground/80 mt-1">Emergency Service</p>
              </GlassCard>
              <GlassCard className="p-6 bg-primary-foreground/10 border-primary-foreground/20 text-center">
                <span className="font-heading text-4xl font-bold text-primary-foreground">365</span>
                <p className="text-sm text-primary-foreground/80 mt-1">Days a Year</p>
              </GlassCard>
              <GlassCard className="p-6 bg-primary-foreground/10 border-primary-foreground/20 text-center">
                <span className="font-heading text-4xl font-bold text-primary-foreground">2</span>
                <p className="text-sm text-primary-foreground/80 mt-1">Years Trading</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Need Help Now?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether it&apos;s an emergency or you need to schedule a service, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+44XXXXXXXXXX">
              <Button size="lg" className="bg-emergency text-emergency-foreground gap-2" data-testid="button-call-cta">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-book-cta">
                <Calendar className="w-5 h-5" />
                Book Online
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
