import { Phone, Clock } from "lucide-react";

export function EmergencyBanner() {
  return (
    <div className="bg-emergency text-emergency-foreground py-2 px-4 animate-pulse-once">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span className="font-semibold text-sm">24/7 Emergency Call-Outs</span>
          <span className="hidden sm:inline mx-2">|</span>
        </div>
        <span className="text-sm">365 Days a Year</span>
        <span className="hidden sm:inline mx-2">|</span>
        <span className="text-sm opacity-90">Plumbing, Drainage & Tanker Services</span>
      </div>
    </div>
  );
}
