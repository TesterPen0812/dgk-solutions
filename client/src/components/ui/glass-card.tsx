import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GlassCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"> {
  children: React.ReactNode;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  const prefersReducedMotion = useReducedMotion();

  // If reduced motion is preferred, skip animation
  if (prefersReducedMotion) {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "bg-card/80 backdrop-blur-sm border border-card-border rounded-md shadow-md",
        className
      )}
      {...(props as HTMLMotionProps<"div">)}
    >
      {children}
    </motion.div>
  );
}
