import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

export const OFFICE_TEL = "tel:+441708961700";

interface CallNumbersProps {
  size?: "default" | "sm" | "lg";
  className?: string;
}

export function CallNumbers({ size = "lg", className }: CallNumbersProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <a href={OFFICE_TEL}>
        <Button size={size} className="gap-2 bg-emergency text-emergency-foreground shadow-md hover:shadow-lg transition-shadow">
          <Phone className="w-4 h-4" />
          01708 961700
        </Button>
      </a>
    </div>
  );
}
