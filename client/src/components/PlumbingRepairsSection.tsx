import { CheckCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { HoverScale } from "@/components/animations/HoverScale";
import { motion } from "framer-motion";

const repairs = [
  "Toilet repairs",
  "Tap repairs",
  "Cold water tanks",
  "Hot water cylinders",
  "Leaks",
  "Radiators",
];

export function PlumbingRepairsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Plumbing Repairs
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert plumbing repairs and maintenance services across Essex, M25 radius, Cambridge, and Luton.
          </p>
        </div>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1} triggerOnScroll>
          {repairs.map((item) => (
            <StaggerItem key={item}>
              <HoverScale>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    </motion.div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">{item}</h3>
                      <p className="text-sm text-muted-foreground">
                        Expert troubleshooting and repair to keep your plumbing running smoothly.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

