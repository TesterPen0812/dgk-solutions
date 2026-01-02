import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { BookingForm } from "@/components/BookingForm";
import { useSEO } from "@/hooks/useSEO";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertTriangle,
} from "lucide-react";

export default function Contact() {
  useSEO({
    title: "Contact Us & Book Online",
    description: "Get in touch or book a plumbing, drainage, or tanker service. 24/7 emergency call-outs available.",
  });

  return (
    <div data-testid="page-contact">
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="w-10 h-10 text-primary" />
              <span className="font-heading text-lg font-semibold text-primary">Contact Us</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              Whether you need an emergency plumber or want to schedule a service, we&apos;re here to help.
              Use the booking form below or call us directly.
            </p>

            <a href="tel:+44XXXXXXXXXX">
              <Button size="lg" className="bg-emergency text-emergency-foreground gap-2" data-testid="button-call-contact">
                <Phone className="w-5 h-5" />
                Call Now for Emergencies
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Book a Service
              </h2>
              <BookingForm />
            </div>

            <div className="space-y-6">
              <GlassCard className="p-6 border-emergency/20 bg-emergency/5">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-emergency flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      Emergency?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      For emergencies, please call us directly for the fastest response.
                    </p>
                    <a href="tel:+44XXXXXXXXXX">
                      <Button className="w-full bg-emergency text-emergency-foreground gap-2">
                        <Phone className="w-4 h-4" />
                        Call Emergency Line
                      </Button>
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <a href="tel:+44XXXXXXXXXX" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Call for Enquiries
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <a href="mailto:info@dgksolutions.co.uk" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        info@dgksolutions.co.uk
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">Based in Essex, UK</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Availability</p>
                      <p className="text-sm text-muted-foreground">24/7 Emergency Service</p>
                      <p className="text-sm text-muted-foreground">365 Days a Year</p>
                    </div>
                  </li>
                </ul>
              </GlassCard>

              <GlassCard className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  Areas We Cover
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Essex (Home Base)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">M25 Radius</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Cambridge</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Luton</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4">
                  Additional travel costs may apply outside core areas.
                </p>
                <Link href="/areas-covered">
                  <Button variant="link" className="px-0 mt-2">
                    View All Areas
                  </Button>
                </Link>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
