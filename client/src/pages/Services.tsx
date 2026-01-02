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

const categoryInfo = {
  emergency: {
    icon: AlertTriangle,
    title: "Emergency Services",
    description: "24/7 emergency response for urgent plumbing and drainage issues",
    href: "/emergency",
    color: "text-emergency",
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
    title: "Our Services",
    description: "Comprehensive plumbing, drainage, and waste management services for homes and businesses across Essex, M25 radius, Cambridge, and Luton.",
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
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              DGK Solutions provides comprehensive plumbing, drainage, and waste management services for both domestic and commercial clients across Essex, the M25 radius, Cambridge, and Luton.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+44XXXXXXXXXX">
                <Button className="bg-emergency text-emergency-foreground gap-2" data-testid="button-call-services">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="gap-2" data-testid="button-book-services">
                  <Calendar className="w-4 h-4" />
                  Book Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {Object.entries(categoryInfo).map(([key, category]) => (
        <section key={key} className={`py-16 ${key === 'drainage' || key === 'tanker' ? 'bg-muted/30' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-8">
              <category.icon className={`w-10 h-10 ${category.color} flex-shrink-0`} />
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {category.title}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {groupedServices[key]?.map((service) => (
                <GlassCard key={service.id} className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
              ))}
            </div>

            <Link href={category.href}>
              <Button variant="outline" className="gap-2">
                Learn More About {category.title} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      ))}

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us today for a consultation or to book a service. Our experienced team is ready to help.
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
