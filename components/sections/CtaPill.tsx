"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SPRING } from "@/lib/motion";

/**
 * CtaPill — live CTA pill. `variant="dark"` is the black pill with the
 * purple glow underneath (hero "Improve ROAS…", "Get in touch",
 * "+20% ROAS in 30 days"); `variant="gradient"` is the purple gradient
 * button ("Contact Sales", "Get Started").
 *
 * Reused by: /ad-stack, /audience-signals, /attribution
 */
export function CtaPill({
  label,
  href = "/contact",
  variant = "gradient",
  size = "md",
  external = false,
  className,
}: {
  label: string;
  href?: string;
  variant?: "dark" | "gradient";
  size?: "sm" | "md";
  external?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const sizeCls =
    size === "sm" ? "px-6 py-3 text-sm" : "px-8 py-[15px] text-lg";
  const variantCls =
    variant === "dark"
      ? "bg-ink text-white shadow-glow"
      : "bg-cta text-white";

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={reduce ? undefined : { scale: 1.02 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={reduce ? { duration: 0 } : SPRING}
      className={`inline-flex items-center justify-center rounded-pill-cta font-sans font-medium transition-shadow ${sizeCls} ${variantCls} ${className ?? ""}`}
    >
      {label}
    </motion.a>
  );
}