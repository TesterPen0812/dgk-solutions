import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@shared/schema";
import { useSEO } from "@/hooks/useSEO";
import {
  Phone,
  Calendar,
  Users,
  Award,
  Clock,
  CheckCircle,
  Wrench,
  Shield,
} from "lucide-react";
import { BookOnlineLink } from "@/components/BookOnlineLink";
import { CallButton } from "@/components/CallButton";

const teamMembers = [
  {
    name: "Dean",
    role: "Director & Senior Engineer",
    experience: "18 years",
    description: "Director and Senior Plumbing and Drainage Engineer with extensive experience in both domestic and commercial settings.",
    specialties: ["Plumbing", "Drainage", "Commercial Projects"],
  },
  {
    name: "Duncan",
    role: "Lead Engineer",
    experience: "Field Operations",
    description: "Lead Engineer specialising in field operations, CCTV surveys, drain repairs, and emergency response.",
    specialties: ["CCTV Surveys", "Drain Repairs", "Emergency Response"],
  },
  {
    name: "Carly",
    role: "Office & Finance Manager",
    experience: "Operations",
    description: "Managing bookings, customer communications, invoicing, and scheduling to ensure smooth service delivery.",
    specialties: ["Bookings", "Customer Service", "Scheduling"],
  },
];

export default function About() {
  useSEO({
    title: "About Us",
    description: "DGK Solutions Ltd - Professional plumbing and drainage company with 30+ years combined experience serving Essex and London.",
  });

  return (
    <div data-testid="page-about">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h1>
              <p className="text-muted-foreground mb-4">
                DGK Solutions Ltd was established to provide reliable, professional plumbing and drainage services
                to homes and businesses across Essex and the surrounding areas.
              </p>
              <p className="text-muted-foreground mb-4">
                Trading for 2 years, our team brings together over 30 years of combined industry experience,
                ensuring every job is completed to the highest standards.
              </p>
              <p className="text-muted-foreground mb-6">
                We pride ourselves on honest, straightforward service with no hidden costs. Whether it&apos;s an emergency
                call-out at 3am or a planned drainage survey, you&apos;ll receive the same professional approach.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium">2 Years Trading</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="font-medium">30+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <GlassCard className="p-6 text-center">
                <span className="font-heading text-4xl font-bold text-primary">30+</span>
                <p className="text-sm text-muted-foreground mt-1">Years Combined Experience</p>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <span className="font-heading text-4xl font-bold text-primary">24/7</span>
                <p className="text-sm text-muted-foreground mt-1">Emergency Service</p>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <span className="font-heading text-4xl font-bold text-primary">365</span>
                <p className="text-sm text-muted-foreground mt-1">Days a Year</p>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <span className="font-heading text-4xl font-bold text-primary">2</span>
                <p className="text-sm text-muted-foreground mt-1">Years Trading</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated team of experienced professionals committed to delivering excellent service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <GlassCard key={member.name} className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-4">{member.experience}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <GlassCard className="p-6 inline-block">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Growing Team:</strong> We&apos;re planning to hire
                another engineer in the coming months to meet demand.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <GlassCard className="p-8">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Certifications
              </h3>
              <p className="text-muted-foreground mb-6">
                Our team holds a range of industry certifications, ensuring safe, compliant, and professional work.
              </p>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <Badge key={cert} variant="outline" className="px-3 py-1">
                    {cert}
                  </Badge>
                ))}
              </div>
            </GlassCard>

            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Choose DGK Solutions?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Experienced Team</h3>
                    <p className="text-sm text-muted-foreground">
                      30+ years combined experience in plumbing and drainage.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">24/7 Availability</h3>
                    <p className="text-sm text-muted-foreground">
                      Emergency services available around the clock, every day of the year.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Fully Certified</h3>
                    <p className="text-sm text-muted-foreground">
                      Industry certifications including NVQ Level 3, PASMA, IPAF, and more.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Domestic & Commercial</h3>
                    <p className="text-sm text-muted-foreground">
                      Serving homes, businesses, and a wide range of commercial sectors.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Get in touch to discuss your requirements or book a service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton />
            <BookOnlineLink>
              <Button size="lg" variant="secondary" className="gap-2">
                <Calendar className="w-5 h-5" />
                Book Online
              </Button>
            </BookOnlineLink>
          </div>
        </div>
      </section>
    </div>
  );
}
