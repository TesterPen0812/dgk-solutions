import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SlideInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnScroll?: boolean;
}

export function SlideIn({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.6,
  className,
  triggerOnScroll = false 
}: SlideInProps) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const variants = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 },
  };

  const animate = {
    y: 0,
    x: 0,
    opacity: 1,
  };

  // If reduced motion is preferred, skip animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // If triggerOnScroll is true, use scroll-based animation
  if (triggerOnScroll) {
    return (
      <motion.div
        ref={ref}
        initial={variants[direction]}
        animate={isInView ? animate : variants[direction]}
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
      initial={variants[direction]}
      animate={animate}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

