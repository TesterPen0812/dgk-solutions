import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnScroll?: boolean;
}

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  className,
  triggerOnScroll = false 
}: FadeInProps) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  // If reduced motion is preferred, skip animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // If triggerOnScroll is true, use scroll-based animation
  if (triggerOnScroll) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // Default: animate on mount (for page-level animations)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

