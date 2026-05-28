"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  as?: "div" | "section" | "span" | "li" | "p" | "h1" | "h2" | "h3";
  className?: string;
  once?: boolean;
};

/**
 * Scroll-triggered fade-up. Honors prefers-reduced-motion automatically.
 */
export default function AnimateIn({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  as = "div",
  className,
  once = true,
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
