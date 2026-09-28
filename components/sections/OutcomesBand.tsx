"use client";

import { motion } from "framer-motion";
import { SCROLL_TWEEN } from "@/lib/motion";
import { CountUp } from "./CountUp";

export type OutcomeItem = {
  /** numeric target for the animated counter (e.g. 32 -> "32%") */
  value: number;
  /** static override rendered verbatim (e.g. "30-35%") */
  display?: string;
  /** white chip label under the stat (live "CAC" / "ROAS") */
  statLabel: string;
  /** caption line above the chip (live "Reduction in") */
  statCaption?: string;
  brand: { src: string; width?: number; height?: number };
  quote: string;
  name: string;
  role: string;
  avatar?: { src: string; width?: number; height?: number };
};

/**
 * OutcomesBand — live full-bleed purple gradient band with dark stat
 * cards: brand logo, count-up stat, white chip, quote, author.
 * Counters verified to reach their target on scroll-into-view.
 *
 * Reused by: /ad-stack outcomes, /audience-signals stats
 */
export function OutcomesBand({
  heading,
  items,
  tone = "purple",
}: {
  heading: string;
  items: readonly OutcomeItem[];
  /** purple = live gradient band; white = plain light section */
  tone?: "purple" | "white";
}) {
  const isPurple = tone === "purple";

  return (
    <section
      className={
        isPurple
          ? "bg-[linear-gradient(170deg,#7a3fd0_0%,#5b2ea6_55%,#b17fe0_100%)] px-4 py-16 sm:px-10 sm:py-20"
          : "bg-paper-2 px-6 py-16 sm:px-10"
      }
    >
      <motion.div
        className="mx-auto max-w-[1091px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 15 },
            show: { opacity: 1, y: 0, transition: SCROLL_TWEEN },
          }}
          className={`text-display text-display-4 text-center text-[36px] sm:text-[44px] ${
            isPurple ? "text-white" : "text-grape-deep"
          }`}
        >
          {heading}
        </motion.h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {items.map((item) => (
            <motion.figure
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: SCROLL_TWEEN },
              }}
              className="flex flex-col gap-6 rounded-card bg-[#2b1546] p-8 shadow-card"
            >
              <img
                src={item.brand.src}
                alt=""
                aria-hidden
                width={item.brand.width ?? 200}
                height={item.brand.height ?? 90}
                loading="lazy"
                className="h-[64px] w-auto object-contain object-left"
              />
              <div>
                <p className="text-display text-[64px] leading-none text-white">
                  <CountUp value={item.value} suffix="%" />
                </p>
                {item.statCaption && (
                  <p className="mt-2 font-sans text-lg text-white/90">{item.statCaption}</p>
                )}
                <span className="mt-3 inline-flex items-center rounded-badge bg-white px-4 py-1.5 font-sans text-sm font-semibold text-ink">
                  {item.statLabel}
                </span>
              </div>
              <div className="mt-auto flex flex-col gap-4">
                <blockquote className="font-sans text-[15px] leading-[1.55] text-white/90">
                  “{item.quote}”
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  {item.avatar && (
                    <img
                      src={item.avatar.src}
                      alt={item.name}
                      width={44}
                      height={44}
                      loading="lazy"
                      className="h-11 w-11 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-sans text-base font-medium text-white">{item.name}</p>
                    <p className="font-sans text-sm text-white/70">{item.role}</p>
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}