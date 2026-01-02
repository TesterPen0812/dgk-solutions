import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-background/95 backdrop-blur-md border-t border-border p-3 safe-area-bottom">
      <div className="flex gap-2">
        <a href="tel:+44XXXXXXXXXX" className="flex-1">
          <Button className="w-full bg-emergency text-emergency-foreground gap-2" data-testid="button-call-sticky">
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </a>
        <Link href="/contact" className="flex-1">
          <Button variant="outline" className="w-full gap-2" data-testid="button-book-sticky">
            <Calendar className="w-4 h-4" />
            Book Online
          </Button>
        </Link>
      </div>
    </div>
  );
}
