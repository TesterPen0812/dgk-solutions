import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { certifications } from "@shared/schema";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">DGK</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-foreground">DGK Solutions</span>
                <span className="text-xs text-muted-foreground block -mt-1">Ltd</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Professional plumbing, drainage, and tanker services across Essex, M25 radius, Cambridge, and Luton.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>24/7 Emergency Service</span>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/emergency" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Emergency Plumbing</Link></li>
              <li><Link href="/drainage" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Drainage Services</Link></li>
              <li><Link href="/drain-repairs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Drain Repairs</Link></li>
              <li><Link href="/tanker-waste" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Tanker & Waste</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/sectors-served" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sectors We Serve</Link></li>
              <li><Link href="/areas-covered" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Areas Covered</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <a href="tel:+44XXXXXXXXXX" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Call for Enquiries
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <a href="mailto:info@dgksolutions.co.uk" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  info@dgksolutions.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-sm text-muted-foreground">Based in Essex, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {certifications.map((cert) => (
              <span key={cert} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                {cert}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} DGK Solutions Ltd. All rights reserved.</p>
            <p>Trading for 2 years | 30+ years combined experience</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
