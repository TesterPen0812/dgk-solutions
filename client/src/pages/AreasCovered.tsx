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
    title: "Areas We Cover",
    description: "Plumbing and drainage services across Essex, M25 radius, Cambridge, and Luton. Based in Essex with wide coverage.",
  });

  return (
    <div data-testid="page-areas-covered">
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-10 h-10 text-primary" />
              <span className="font-heading text-lg font-semibold text-primary">Areas We Cover</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Service Coverage Areas
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              Based in Essex, DGK Solutions provides plumbing, drainage, and waste management services
              across a wide area including the M25 radius, Cambridge, and Luton.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+44XXXXXXXXXX">
                <Button className="bg-emergency text-emergency-foreground gap-2" data-testid="button-call-areas">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="gap-2" data-testid="button-book-areas">
                  <Calendar className="w-4 h-4" />
                  Check Availability
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
              Our Coverage Areas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide services across these main regions. Contact us to confirm coverage for your specific location.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {areaDetails.map((area) => (
              <GlassCard
                key={area.name}
                className={`p-6 ${area.highlight ? 'border-primary/30 bg-primary/5' : ''}`}
              >
                <MapPin className={`w-10 h-10 mb-4 ${area.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {area.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{area.description}</p>
                <p className="text-xs text-muted-foreground">{area.coverage}</p>
              </GlassCard>
            ))}
          </div>

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
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Essex Coverage
              </h2>
              <p className="text-muted-foreground mb-6">
                As our home county, we provide comprehensive coverage across Essex with the fastest response times.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {essexAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
                London Coverage
              </h2>
              <p className="text-muted-foreground mb-6">
                We cover areas within the M25, particularly North and East London boroughs.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {londonAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Not Sure If We Cover Your Area?
              </h2>
              <p className="text-muted-foreground mb-6">
                If your location isn&apos;t listed, don&apos;t worry. We may still be able to help.
                Contact us with your postcode and we&apos;ll confirm if we can provide service to your area.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Quick response to coverage enquiries</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Clear pricing including any travel costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Emergency services may be available outside normal areas</span>
                </li>
              </ul>
            </div>

            <GlassCard className="p-8 text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Check Your Coverage
              </h3>
              <p className="text-muted-foreground mb-6">
                Call us or use our booking form to check if we cover your area.
              </p>
              <div className="space-y-3">
                <a href="tel:+44XXXXXXXXXX" className="block">
                  <Button className="w-full bg-emergency text-emergency-foreground gap-2">
                    <Phone className="w-4 h-4" />
                    Call to Confirm
                  </Button>
                </a>
                <Link href="/contact" className="block">
                  <Button variant="outline" className="w-full gap-2">
                    <Calendar className="w-4 h-4" />
                    Book Online
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Serving Essex & Beyond
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            With 24/7 emergency services and flexible scheduling, we&apos;re here when you need us.
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
