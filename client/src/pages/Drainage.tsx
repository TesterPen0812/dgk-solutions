import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { useSEO } from "@/hooks/useSEO";
import {
  Phone,
  Calendar,
  Droplets,
  CheckCircle,
  Camera,
  Waves,
  ArrowRight,
} from "lucide-react";

const drainageServices = [
  {
    icon: Droplets,
    title: "Drain Clearing & Inspection",
    description: "Complete drain clearing service with thorough inspection to identify issues and prevent future problems.",
  },
  {
    icon: Droplets,
    title: "Sink Unblocking",
    description: "Fast and effective sink unblocking for kitchens and bathrooms in domestic and commercial settings.",
  },
  {
    icon: Droplets,
    title: "Toilet Unblocking",
    description: "Professional toilet unblocking services with minimal disruption to your property.",
  },
  {
    icon: Droplets,
    title: "Bath Unblocking",
    description: "Expert bath and shower drain unblocking to restore proper drainage quickly.",
  },
  {
    icon: Camera,
    title: "CCTV Drain Surveys",
    description: "Advanced camera technology to inspect drains, identify blockages, damage, and structural issues.",
  },
  {
    icon: Waves,
    title: "HPWJ Jetting",
    description: "High-pressure water jetting to clear stubborn blockages and clean drain walls effectively.",
  },
];

export default function Drainage() {
  useSEO({
    title: "Drainage Services",
    description: "Professional drainage solutions including drain clearing, CCTV surveys, and high-pressure jetting across Essex and London.",
  });

  return (
    <div data-testid="page-drainage">
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Droplets className="w-10 h-10 text-primary" />
              <span className="font-heading text-lg font-semibold text-primary">Drainage Services</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Professional Drainage Solutions
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              From blocked drains to comprehensive CCTV surveys, DGK Solutions provides complete drainage services
              for homes and businesses across Essex, the M25 radius, Cambridge, and Luton.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+44XXXXXXXXXX">
                <Button className="bg-emergency text-emergency-foreground gap-2" data-testid="button-call-drainage">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="gap-2" data-testid="button-book-drainage">
                  <Calendar className="w-4 h-4" />
                  Book a Survey
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
              Our Drainage Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive drainage solutions using the latest equipment and techniques.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {drainageServices.map((service) => (
              <GlassCard key={service.title} className="p-6">
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
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
                CCTV Drain Surveys
              </h2>
              <p className="text-muted-foreground mb-6">
                Our CCTV drain surveys provide a detailed visual inspection of your drainage system,
                allowing us to identify problems quickly and accurately without unnecessary excavation.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Identify blockages and their exact location</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Detect cracks, damage, and structural issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Pre-purchase property surveys</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Recorded footage provided for reference</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="gap-2">
                  Book a CCTV Survey <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <GlassCard className="p-8">
              <Camera className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="font-heading text-xl font-bold text-foreground text-center mb-4">
                High-Definition Inspections
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Our camera equipment provides clear, detailed footage of your drainage system,
                helping us diagnose issues accurately and recommend the best solution.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-md">
                  <span className="font-heading text-2xl font-bold text-foreground">HD</span>
                  <p className="text-xs text-muted-foreground">Camera Quality</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-md">
                  <span className="font-heading text-2xl font-bold text-foreground">50m+</span>
                  <p className="text-xs text-muted-foreground">Cable Length</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <GlassCard className="p-8 order-2 lg:order-1">
              <Waves className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="font-heading text-xl font-bold text-foreground text-center mb-4">
                High-Pressure Water Jetting
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Our HPWJ equipment delivers powerful cleaning action to clear even the most
                stubborn blockages and leave drains clean and free-flowing.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-md">
                  <span className="font-heading text-2xl font-bold text-foreground">4000+</span>
                  <p className="text-xs text-muted-foreground">PSI Pressure</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-md">
                  <span className="font-heading text-2xl font-bold text-foreground">Certified</span>
                  <p className="text-xs text-muted-foreground">HPWJ Qualified</p>
                </div>
              </div>
            </GlassCard>

            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                HPWJ Jetting Services
              </h2>
              <p className="text-muted-foreground mb-6">
                High-pressure water jetting is the most effective method for clearing stubborn blockages
                and cleaning drain walls. Our certified team uses professional-grade equipment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Clears grease, fat, and oil build-up</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Removes tree root intrusions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Descales pipes and drains</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Suitable for domestic and commercial drains</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="gap-2">
                  Book Jetting Service <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Need Drainage Help?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Whether it&apos;s a blocked drain or a comprehensive survey, our team is ready to help.
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
