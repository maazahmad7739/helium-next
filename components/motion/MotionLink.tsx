"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/**
 * CTA/link-card micro-interaction: spring hover scale 1.02,
 * press scale 0.98 — honors prefers-reduced-motion.
 */
export function MotionLink({
  href,
  children,
  className,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="inline-flex"
      whileHover={reduce ? undefined : { scale: 1.02 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 25 }}
    >
      <Link href={href} aria-label={ariaLabel} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}

/**
 * Whole-card link micro-interaction: spring hover 1.02 / press 0.98.
 */
export function MotionCardLink({
  href,
  children,
  className,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      whileHover={reduce ? undefined : { scale: 1.02 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 25 }}
      className={className}
    >
      <Link href={href} aria-label={ariaLabel} className="block">
        {children}
      </Link>
    </motion.div>
  );
}