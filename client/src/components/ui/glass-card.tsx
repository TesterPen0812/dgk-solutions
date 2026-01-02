import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-card/80 backdrop-blur-sm border border-card-border rounded-md shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
