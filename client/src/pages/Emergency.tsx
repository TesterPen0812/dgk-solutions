import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";
import {
  Phone,
  Calendar,
  AlertTriangle,
  Clock,
  CheckCircle,
  Droplets,
  Wrench,
  Shield,
} from "lucide-react";

const emergencyServices = [
  {
    title: "Burst Pipes",
    description: "Immediate response for burst or leaking pipes to minimize water damage.",
  },
  {
    title: "Blocked Drains",
    description: "Emergency drain unblocking when you need it most.",
  },
  {
    title: "Leaking Pipes",
    description: "Quick leak detection and repair to prevent further damage.",
  },
  {
    title: "Flooding",
    description: "Emergency response for flood situations and water extraction.",
  },
  {
    title: "No Hot Water",
    description: "Emergency boiler and heating issues resolved quickly.",
  },
  {
    title: "Sewage Backup",
    description: "Urgent sewage and drainage emergencies handled safely.",
  },
];

export default function Emergency() {
  useSEO({
    title: "24/7 Emergency Plumbing",
    description: "Emergency plumbing and drainage services available 24/7, 365 days a year across Essex, M25 radius, Cambridge, and Luton.",
  });

  return (
    <div data-testid="page-emergency">
      <section className="bg-gradient-to-br from-emergency/10 via-background to-background py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-emergency text-emergency-foreground px-4 py-2">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Emergency Service
              </Badge>

              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
                24/7 Emergency Plumbing & Drainage
              </h1>

              <p className="text-lg text-muted-foreground">
                When plumbing emergencies strike, you need fast, reliable help. DGK Solutions provides
                round-the-clock emergency services across Essex, the M25 radius, Cambridge, and Luton.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emergency" />
                  <span className="font-medium">24/7 Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emergency" />
                  <span className="font-medium">365 Days a Year</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+44XXXXXXXXXX">
                  <Button size="lg" className="w-full sm:w-auto bg-emergency text-emergency-foreground gap-2" data-testid="button-call-emergency">
                    <Phone className="w-5 h-5" />
                    Call Now for Emergency
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" data-testid="button-book-emergency">
                    <Calendar className="w-5 h-5" />
                    Book Non-Emergency
                  </Button>
                </Link>
              </div>
            </div>

            <GlassCard className="p-8 border-emergency/20 bg-emergency/5">
              <div className="text-center mb-6">
                <AlertTriangle className="w-16 h-16 text-emergency mx-auto mb-4" />
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                  Got an Emergency?
                </h2>
                <p className="text-muted-foreground">
                  Don&apos;t wait - call us immediately for fastest response
                </p>
              </div>
              <a href="tel:+44XXXXXXXXXX" className="block">
                <Button className="w-full bg-emergency text-emergency-foreground text-lg py-6 gap-2">
                  <Phone className="w-6 h-6" />
                  Call Emergency Line
                </Button>
              </a>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Our team is standing by 24/7
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Emergency Services We Provide
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From burst pipes to blocked drains, our experienced team handles all plumbing and drainage emergencies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyServices.map((service) => (
              <GlassCard key={service.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emergency/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-emergency" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Choose Us for Emergencies?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      30+ Years Combined Experience
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Our senior engineers have extensive experience handling all types of emergencies.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Fully Equipped Vehicles
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Our vans carry all necessary equipment to handle most emergencies on the first visit.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Domestic & Commercial
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We handle emergencies for homes, businesses, and commercial properties alike.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Wide Coverage Area
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Serving Essex, M25 radius, Cambridge, and Luton for emergency call-outs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <GlassCard className="p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 text-center">
                What to Do in an Emergency
              </h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground">Turn Off Water Supply</h4>
                    <p className="text-sm text-muted-foreground">
                      Locate your stopcock and turn off the water to prevent further damage.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground">Call Us Immediately</h4>
                    <p className="text-sm text-muted-foreground">
                      Our emergency line is available 24/7, 365 days a year.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground">We Respond Quickly</h4>
                    <p className="text-sm text-muted-foreground">
                      Our team will arrive equipped to handle your emergency.
                    </p>
                  </div>
                </li>
              </ol>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-emergency text-emergency-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Don&apos;t Wait - Call Now
          </h2>
          <p className="text-emergency-foreground/80 max-w-2xl mx-auto mb-8">
            Plumbing emergencies can cause significant damage if left untreated.
            Our team is ready to help you 24 hours a day, 7 days a week.
          </p>
          <a href="tel:+44XXXXXXXXXX">
            <Button size="lg" className="bg-white text-emergency gap-2 text-lg px-8">
              <Phone className="w-6 h-6" />
              Call Emergency Line
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
