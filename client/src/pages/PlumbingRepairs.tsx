import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { PlumbingRepairsSection } from "@/components/PlumbingRepairsSection";
import { BookOnlineLink } from "@/components/BookOnlineLink";
import { CallButton } from "@/components/CallButton";

export default function PlumbingRepairs() {
  useSEO({
    title: "Plumbing Repairs in Essex, London, Cambridge & Luton",
    description: "Expert plumbing repairs and maintenance for toilets, taps, tanks, cylinders, leaks, and radiators across Essex, M25 radius, Cambridge, and Luton. Fast, professional service.",
  });

  return (
    <div data-testid="page-plumbing-repairs">
      <PlumbingRepairsSection />

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Need Plumbing Repairs?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Call now or book online for fast, professional plumbing repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

