import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { OFFICE_TEL, EMERGENCY_TEL } from "./CallNumbers";

interface CallButtonProps {
  size?: "default" | "sm" | "lg";
  className?: string;
  variant?: "default" | "emergency";
  enhanced?: boolean;
}

export function CallButton({ size = "lg", className, variant = "emergency", enhanced = false }: CallButtonProps) {
  const isEmergency = variant === "emergency";
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size={size}
          className={cn(
            isEmergency
              ? "bg-emergency text-emergency-foreground gap-2 border-0 -translate-y-1 shadow-md hover:shadow-lg transition-all"
              : "gap-2 border-0",
            enhanced && "shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.04)] -translate-y-1 hover:-translate-y-[2px] active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.08)]",
            className
          )}
        >
          <Phone className="w-4 h-4" />
          Call Now
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem asChild>
          <a href={EMERGENCY_TEL} className="flex items-center gap-2 cursor-pointer">
            <Phone className="w-4 h-4" />
            <div className="flex flex-col">
              <span className="font-semibold">Emergency / Mobile</span>
              <span className="text-xs text-muted-foreground">07089 61700</span>
            </div>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={OFFICE_TEL} className="flex items-center gap-2 cursor-pointer">
            <Phone className="w-4 h-4" />
            <div className="flex flex-col">
              <span className="font-semibold">Office / General</span>
              <span className="text-xs text-muted-foreground">01708 961700</span>
            </div>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

