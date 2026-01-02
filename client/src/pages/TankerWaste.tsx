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
    title: "Tanker & Waste Services",
    description: "Professional tanker services, septic tank emptying, and grease trap maintenance across Essex and the M25 radius.",
  });

  return (
    <div data-testid="page-tanker-waste">
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Truck className="w-10 h-10 text-primary" />
              <span className="font-heading text-lg font-semibold text-primary">Tanker & Waste Services</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Professional Waste Management
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              DGK Solutions provides professional tanker and waste management services including liquid waste removal,
              septic tank emptying, and grease trap maintenance across Essex, the M25 radius, Cambridge, and Luton.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+44XXXXXXXXXX">
                <Button className="bg-emergency text-emergency-foreground gap-2" data-testid="button-call-tanker">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="gap-2" data-testid="button-book-tanker">
                  <Calendar className="w-4 h-4" />
                  Schedule Service
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
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive waste management solutions for homes, businesses, and industrial clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {tankerServices.map((service) => (
              <GlassCard key={service.title} className="p-8">
                <service.icon className="w-12 h-12 text-primary mb-4" />
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
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Septic Tank Services
              </h2>
              <p className="text-muted-foreground mb-6">
                Regular septic tank maintenance is essential to prevent blockages, overflows, and costly repairs.
                We recommend emptying your septic tank every 12-24 months depending on usage.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Scheduled Emptying</h3>
                    <p className="text-sm text-muted-foreground">
                      Set up regular emptying to keep your system running smoothly.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Emergency Service</h3>
                    <p className="text-sm text-muted-foreground">
                      Overflowing septic tank? We can respond quickly to emergencies.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Licensed Disposal</h3>
                    <p className="text-sm text-muted-foreground">
                      All waste is disposed of at licensed facilities with full documentation.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="gap-2">
                  Schedule Service <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <GlassCard className="p-8">
              <Droplet className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="font-heading text-xl font-bold text-foreground text-center mb-4">
                Signs You Need Emptying
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emergency font-bold">!</span>
                  <span className="text-muted-foreground">Slow draining sinks and toilets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emergency font-bold">!</span>
                  <span className="text-muted-foreground">Unpleasant odours around the tank</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emergency font-bold">!</span>
                  <span className="text-muted-foreground">Pooling water near the tank area</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emergency font-bold">!</span>
                  <span className="text-muted-foreground">Gurgling sounds from drains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emergency font-bold">!</span>
                  <span className="text-muted-foreground">More than 12 months since last empty</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <GlassCard className="p-8 order-2 lg:order-1">
              <Factory className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="font-heading text-xl font-bold text-foreground text-center mb-4">
                Commercial Grease Traps
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Essential for restaurants, hotels, and food service establishments to maintain compliance
                and prevent drain blockages.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                  <span className="text-sm text-muted-foreground">Recommended frequency</span>
                  <span className="font-semibold text-foreground">Monthly</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                  <span className="text-sm text-muted-foreground">Emergency available</span>
                  <span className="font-semibold text-foreground">24/7</span>
                </div>
              </div>
            </GlassCard>

            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Grease Trap Maintenance
              </h2>
              <p className="text-muted-foreground mb-6">
                Regular grease trap cleaning is essential for commercial kitchens to prevent blockages,
                maintain hygiene standards, and ensure compliance with regulations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Prevent Blockages</h3>
                    <p className="text-sm text-muted-foreground">
                      Regular cleaning prevents fats, oils, and grease from blocking your drains.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Stay Compliant</h3>
                    <p className="text-sm text-muted-foreground">
                      Meet food hygiene and environmental regulations with proper maintenance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Waste Documentation</h3>
                    <p className="text-sm text-muted-foreground">
                      Full documentation provided for regulatory compliance.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="gap-2">
                  Book Maintenance <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Need Waste Management Services?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            From septic tanks to commercial grease traps, we handle all your liquid waste needs professionally.
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
                Schedule Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
