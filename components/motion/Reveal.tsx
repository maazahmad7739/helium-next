"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SCROLL_TWEEN } from "@/lib/motion";

/**
 * Scroll-triggered entrance replicating the live site's
 * `will-change:transform; opacity:0; transform:translateY(15px)` pattern,
 * tweened 0.4s cubic-bezier(0.44, 0, 0.56, 1).
 *
 * Hydration-safe: `initial` must be identical on server and client
 * (useReducedMotion() is false during SSR), so reduced-motion users get a
 * 0-duration tween instead of a different JSX tree.
 */
export function Reveal({
  children,
  delay = 0,
  y = 15,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={reduce ? { duration: 0, delay: 0 } : { ...SCROLL_TWEEN, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Staggered container: children reveal with a fixed stagger */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={reduce ? { duration: 0 } : undefined}
      variants={{
        hidden: {},
        show: { transition: reduce ? {} : { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  style,
  y = 15,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: reduce ? { duration: 0 } : SCROLL_TWEEN,
        },
      }}
    >
      {children}
    </motion.div>
  );
}