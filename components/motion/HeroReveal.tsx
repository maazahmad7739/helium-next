"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import { SPRING } from "@/lib/motion";

/**
 * Live-site hero appear: pure opacity spring fade with the exact
 * Framer delay choreography (badge 0.2s -> headline 0.2/0.5s -> body 0.9s).
 */
export function HeroReveal({
  children,
  delay = 0.2,
  className,
  id,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}) {
  const reduce = useReducedMotion();
  const transition: Transition = reduce ? { duration: 0 } : { ...SPRING, delay };
  return (
    <motion.div
      id={id}
      className={className}
      initial={reduce ? false : { opacity: 0.001 }}
      animate={reduce ? undefined : { opacity: 1 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}