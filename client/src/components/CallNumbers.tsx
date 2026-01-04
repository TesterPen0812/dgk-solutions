import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

export const OFFICE_TEL = "tel:+441708961700";
export const EMERGENCY_TEL = "tel:+44708961700";

interface CallNumbersProps {
  size?: "default" | "sm" | "lg";
  className?: string;
}

// Renders both office and emergency numbers responsively.
// Desktop: show both buttons labeled. Mobile: emphasize emergency, add office text link.
export function CallNumbers({ size = "lg", className }: CallNumbersProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="hidden md:flex flex-wrap items-center gap-2">
        <a href={OFFICE_TEL}>
          <Button size={size} variant="outline" className="gap-2">
            <Phone className="w-4 h-4" />
            01708 961700
            <span className="text-xs text-muted-foreground">(Office / General)</span>
          </Button>
        </a>
        <a href={EMERGENCY_TEL}>
          <Button size={size} className="gap-2 bg-emergency text-emergency-foreground shadow-md hover:shadow-lg transition-shadow">
            <Phone className="w-4 h-4" />
            07089 61700
            <span className="text-xs text-emergency-foreground/80">(Emergency / Mobile)</span>
          </Button>
        </a>
      </div>

      <div className="flex md:hidden flex-col gap-2">
        <a href={OFFICE_TEL}>
          <Button size={size} className="w-full gap-2 bg-emergency text-emergency-foreground shadow-md hover:shadow-lg transition-shadow">
            <Phone className="w-4 h-4" />
            Call Emergency Line
          </Button>
        </a>
        <a href={OFFICE_TEL} className="text-sm text-muted-foreground underline underline-offset-4">
          Call Office (01708 961700)
        </a>
      </div>
    </div>
  );
}

