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
    title: "Management Properties",
    description: "Comprehensive property management support with reliable scheduled and emergency services.",
  },
  {
    icon: Home,
    title: "Houses",
    description: "Complete residential plumbing and drainage solutions for all property types.",
  },
];

export default function SectorsServed() {
  useSEO({
    title: "Sectors We Serve",
    description: "Plumbing and drainage services for homeowners, businesses, restaurants, schools, hospitals, and more.",
  });

  return (
    <div data-testid="page-sectors-served">
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-10 h-10 text-primary" />
              <span className="font-heading text-lg font-semibold text-primary">Sectors We Serve</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Serving All Sectors
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              DGK Solutions provides plumbing, drainage, and waste management services to a wide range of sectors.
              From homeowners to hospitals, we have the experience and equipment to handle any requirement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+44XXXXXXXXXX">
                <Button className="bg-emergency text-emergency-foreground gap-2" data-testid="button-call-sectors">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="gap-2" data-testid="button-book-sectors">
                  <Calendar className="w-4 h-4" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Industries We Support
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With 30+ years combined experience, our team understands the unique requirements of each sector.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectorDetails.map((sector) => (
              <GlassCard key={sector.title} className="p-6">
                <sector.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {sector.title}
                </h3>
                <p className="text-sm text-muted-foreground">{sector.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Businesses Choose Us
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Flexible Scheduling</h3>
                    <p className="text-sm text-muted-foreground">
                      We work around your business hours to minimize disruption.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">24/7 Emergency Response</h3>
                    <p className="text-sm text-muted-foreground">
                      When emergencies happen, we&apos;re available around the clock.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Certified & Qualified</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team holds industry certifications including PASMA, IPAF, and SSSTS.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Planned Maintenance</h3>
                    <p className="text-sm text-muted-foreground">
                      Preventative maintenance programs to avoid costly emergencies.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <GlassCard className="p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 text-center">
                Certifications & Qualifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-md">
                  <span className="font-heading text-lg font-bold text-foreground">NVQ Level 3</span>
                  <p className="text-xs text-muted-foreground">Plumbing</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-md">
                  <span className="font-heading text-lg font-bold text-foreground">PASMA</span>
                  <p className="text-xs text-muted-foreground">Scaffolding</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-md">
                  <span className="font-heading text-lg font-bold text-foreground">IPAF</span>
                  <p className="text-xs text-muted-foreground">Access Platforms</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-md">
                  <span className="font-heading text-lg font-bold text-foreground">SSSTS</span>
                  <p className="text-xs text-muted-foreground">Site Safety</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-md col-span-2">
                  <span className="font-heading text-lg font-bold text-foreground">STREETWORKS (NRSWA)</span>
                  <p className="text-xs text-muted-foreground">Road Works Certified</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Whatever Your Sector, We Can Help
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Get in touch to discuss your specific requirements and how we can support your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+44XXXXXXXXXX">
              <Button size="lg" className="bg-emergency text-emergency-foreground gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="gap-2">
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
