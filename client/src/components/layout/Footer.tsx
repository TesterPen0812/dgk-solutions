import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { certifications } from "@shared/schema";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { OFFICE_TEL } from "@/components/CallNumbers";
import { useTheme } from "@/components/ThemeProvider";

export function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const { theme } = useTheme();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      className="bg-card border-t border-border mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ScrollReveal delay={0}>
            <div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center mb-4"
              >
                <img 
                  src={theme === "dark" ? "/DGK_white.png" : "/DGK.png"} 
                  alt="DGK Solutions"
                  className="h-32 w-auto"
                />
              </motion.div>
              <p className="text-sm text-muted-foreground mb-4">
                Professional plumbing, drainage, and tanker services across Essex, M25 radius, Cambridge, and Luton.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  { href: "/emergency", label: "Emergency Plumbing" },
                  { href: "/plumbing-repairs", label: "Plumbing Repairs" },
                  { href: "/drainage", label: "Drainage Services" },
                  { href: "/drain-repairs", label: "Drain Repairs" },
                  { href: "/tanker-waste", label: "Tanker & Waste" },
                  { href: "/services", label: "All Services" },
                ].map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ delay: prefersReducedMotion ? 0 : 0.1 + index * 0.05, duration: prefersReducedMotion ? 0 : 0.3 }}
                  >
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/sectors-served", label: "Sectors We Serve" },
                  { href: "/areas-covered", label: "Areas Covered" },
                  { href: "/contact", label: "Contact Us" },
                ].map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                  >
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-3">
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ delay: prefersReducedMotion ? 0 : 0.3, duration: prefersReducedMotion ? 0 : 0.3 }}
                  className="flex items-start gap-2"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-primary" />
              <a href={OFFICE_TEL} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                01708 961700
              </a>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ delay: prefersReducedMotion ? 0 : 0.35, duration: prefersReducedMotion ? 0 : 0.3 }}
                  className="flex items-start gap-2"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-primary" />
                  <a href="mailto:info@dgksolutions.co.uk" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    info@dgksolutions.co.uk
                  </a>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ delay: prefersReducedMotion ? 0 : 0.4, duration: prefersReducedMotion ? 0 : 0.3 }}
                  className="flex items-start gap-2"
                >
                  <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                  <span className="text-sm text-muted-foreground">Based in Essex, UK</span>
                </motion.li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.4, duration: prefersReducedMotion ? 0 : 0.6 }}
          className="border-t border-border mt-8 pt-8"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {certifications.map((cert, index) => (
              <motion.span
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: prefersReducedMotion ? 0 : 0.4 + index * 0.05, duration: prefersReducedMotion ? 0 : 0.3 }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
              >
                {cert}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} DGK Solutions Ltd. All rights reserved.</p>
            <p>Trading for 2 years | 30+ years combined experience</p>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Fully Insured – Public Liability & Professional Indemnity Insurance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
