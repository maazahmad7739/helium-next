"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SPRING } from "@/lib/motion";

/** Pulse page testimonial cards: spring hover-lift. */
export function PulseTestimonials({
  testimonials,
}: {
  testimonials: readonly { quote: string; name: string; role: string }[];
}) {
  const reduce = useReducedMotion();
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {testimonials.map((t, i) => (
        <motion.figure
          key={t.name}
          initial={reduce ? false : { opacity: 0, y: 15 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reduce ? { duration: 0 } : { ...SPRING, delay: i * 0.08 }}
          whileHover={reduce ? undefined : { y: -4 }}
          className="flex h-full flex-col gap-4 rounded-card border border-black/[0.06] bg-paper-2 p-6 shadow-card"
        >
          <blockquote className="font-sans text-[15px] leading-[1.6] text-ink/80">
            {t.quote}
          </blockquote>
          <figcaption className="mt-auto">
            <p className="font-sans text-base font-medium text-ink">{t.name}</p>
            <p className="font-sans text-sm text-ink/60">{t.role}</p>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}