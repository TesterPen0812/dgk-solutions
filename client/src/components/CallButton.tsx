import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { OFFICE_TEL } from "./CallNumbers";

interface CallButtonProps {
  size?: "default" | "sm" | "lg";
  className?: string;
  variant?: "default" | "emergency";
  enhanced?: boolean;
}

export function CallButton({ size = "lg", className, variant = "emergency", enhanced = false }: CallButtonProps) {
  const isEmergency = variant === "emergency";
  
  return (
    <a href={OFFICE_TEL}>
      <Button
        size={size}
        className={cn(
          isEmergency
            ? "bg-emergency text-emergency-foreground gap-2 border-0 -translate-y-1 shadow-md hover:shadow-lg transition-all"
            : "gap-2 border-0",
          enhanced && "shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.04)] -translate-y-1 hover:-translate-y-[2px] active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.08)]",
          className
        )}
        data-testid="button-call-now"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </Button>
    </a>
  );
}
