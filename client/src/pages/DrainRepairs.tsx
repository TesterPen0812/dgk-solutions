import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { useSEO } from "@/hooks/useSEO";
import {
  Phone,
  Calendar,
  Wrench,
  CheckCircle,
  ArrowRight,
  Hammer,
  CircleDot,
  Layers,
} from "lucide-react";

const repairServices = [
  {
    icon: CircleDot,
    title: "No-Dig Drain Repairs",
    description: "Modern trenchless technology that repairs drains without excavation, minimizing disruption to your property.",
    benefits: ["Minimal disruption", "Faster completion", "Cost-effective", "No garden damage"],
  },
  {
    icon: Layers,
    title: "Drain Lining",
    description: "Create a new pipe within your existing pipe using advanced lining materials for a long-lasting repair.",
    benefits: ["50+ year lifespan", "Structural strength", "No excavation", "Smooth flow"],
  },
  {
    icon: Wrench,
    title: "Patch Repairs",
    description: "Targeted repairs for localized damage without the need to reline the entire drain.",
    benefits: ["Precise repairs", "Quick installation", "Minimal cost", "Effective solution"],
  },
  {
    icon: Hammer,
    title: "Traditional Excavations",
    description: "When no-dig methods aren't suitable, we provide professional excavation and replacement services.",
    benefits: ["Complete replacement", "Full access", "New pipework", "Long-term fix"],
  },
];

export default function DrainRepairs() {
  useSEO({
    title: "Drain Repairs",
    description: "Expert drain repair solutions including no-dig repairs, drain lining, and traditional excavations across Essex.",
  });

  return (
    <div data-testid="page-drain-repairs">
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-10 h-10 text-primary" />
              <span className="font-heading text-lg font-semibold text-primary">Drain Repairs</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Expert Drain Repair Solutions
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              From modern no-dig repairs to traditional excavations, DGK Solutions offers comprehensive drain repair
              services for damaged, cracked, or collapsed drains across Essex, the M25 radius, Cambridge, and Luton.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+44XXXXXXXXXX">
                <Button className="bg-emergency text-emergency-foreground gap-2" data-testid="button-call-repairs">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="gap-2" data-testid="button-book-repairs">
                  <Calendar className="w-4 h-4" />
                  Request Assessment
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
              Our Repair Methods
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We use the most appropriate repair method for your situation, always prioritizing minimal disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {repairServices.map((service) => (
              <GlassCard key={service.title} className="p-8">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
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
                Why Choose No-Dig Repairs?
              </h2>
              <p className="text-muted-foreground mb-6">
                No-dig technology has revolutionized drain repairs. Instead of excavating your garden, driveway, or
                property, we repair pipes from the inside using advanced techniques.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Preserve Your Property</h3>
                    <p className="text-sm text-muted-foreground">
                      No need to dig up patios, driveways, or landscaping.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Faster Completion</h3>
                    <p className="text-sm text-muted-foreground">
                      Most no-dig repairs are completed in a single day.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Cost Effective</h3>
                    <p className="text-sm text-muted-foreground">
                      Save money on excavation, reinstatement, and landscaping costs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Long-Lasting Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Modern liners can last 50+ years with proper installation.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="gap-2">
                  Get a Free Assessment <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              <GlassCard className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Our Process
                </h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground">CCTV Survey</h4>
                      <p className="text-sm text-muted-foreground">
                        We inspect the drain to assess the damage and determine the best repair method.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground">Quote & Plan</h4>
                      <p className="text-sm text-muted-foreground">
                        We provide a clear quote and explain the recommended repair approach.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground">Professional Repair</h4>
                      <p className="text-sm text-muted-foreground">
                        Our certified team completes the repair using the agreed method.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      4
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground">Final Inspection</h4>
                      <p className="text-sm text-muted-foreground">
                        We verify the repair with a post-work CCTV survey and provide documentation.
                      </p>
                    </div>
                  </li>
                </ol>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Damaged Drains? We Can Help
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Don&apos;t let drain problems escalate. Contact us for a professional assessment and repair quote.
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
                Book Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
