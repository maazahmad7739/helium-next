"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SPRING } from "@/lib/motion";

/**
 * Live interactive trio: phone-card screenshots wrapped in router links
 * (./audience-signals / ./attribution / ./catalog-optimization), each with
 * rounded-[9px] corners and the 3-stop Framer card shadow. Spring hover.
 */
export function TrioLink({
  href,
  img,
  width,
  height,
  className,
  label,
}: {
  href: string;
  img: string;
  width: number;
  height: number;
  className?: string;
  label: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.a
      href={href}
      aria-label={label}
      whileHover={reduce ? undefined : { scale: 1.04, y: -4 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={reduce ? { duration: 0 } : SPRING}
      className={`shadow-card block shrink-0 overflow-hidden rounded-[9px] ${className ?? ""}`}
    >
      <Image
        src={img}
        alt={label}
        width={width}
        height={height}
        className="h-full w-full object-cover"
      />
    </motion.a>
  );
}