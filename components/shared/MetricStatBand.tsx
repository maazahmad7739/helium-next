"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SPRING, SCROLL_TWEEN } from "@/lib/motion";

export type MetricItem = {
  /** numeric target for the animated counter, e.g. 20 (renders "20%") */
  value?: number;
  /** static display override (verbatim text, e.g. "0%" or "+27%") */
  display?: string;
  suffix?: string;
  label: string;
  caption?: string;
  quote?: string;
  name?: string;
  role?: string;
  avatar?: { src: string; width: number; height: number };
  brand?: { src: string; width: number; height: number };
};

/**
 * MetricStatBand — reusable outcome band: animated count-up metrics with
 * optional quote/author/brand slots. Staggered whileInView entrance.
 *
 * Reused by: /ad-stack outcomes, /catalog-optimization results,
 *            /pulse (+27% band, Trusted-by counter)
 */
export function MetricStatBand({
  heading,
  items,
  tone = "paper",
  cols = 3,
}: {
  heading?: string;
  items: readonly MetricItem[];
  tone?: "white" | "paper" | "navy";
  cols?: 2 | 3;
}) {
  const toneCls = tone === "navy" ? "bg-navy" : tone === "paper" ? "bg-paper-2" : "bg-white";
  const colsCls = cols === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  const cardCls =
    tone === "navy"
      ? "border border-white/10 bg-white/[0.06]"
      : "bg-white shadow-card";

  return (
    <section className={`${toneCls} px-6 py-16 sm:px-10`}>
      <motion.div
        className="mx-auto max-w-[1091px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        {heading && (
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: { opacity: 1, y: 0, transition: SCROLL_TWEEN },
            }}
            className="text-display text-display-4 text-center text-[36px] text-grape-deep"
          >
            {heading}
          </motion.h2>
        )}
        <div className={`mt-12 grid gap-8 ${colsCls}`}>
          {items.map((item) => (
            <motion.figure
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: SCROLL_TWEEN },
              }}
              className={`flex flex-col gap-6 rounded-card p-8 ${cardCls}`}
            >
              {item.brand && (
                <img
                  src={item.brand.src}
                  alt=""
                  aria-hidden
                  width={item.brand.width}
                  height={item.brand.height}
                  className="h-[72px] w-auto object-contain object-left opacity-90"
                />
              )}
              <div>
                <p className="text-display text-[64px] text-plum">
                  {item.display ?? `${item.value}${item.suffix ?? "%"}`}
                </p>
                <p className="font-sans text-lg font-medium text-ink">{item.label}</p>
                {item.caption && (
                  <p className="font-sans text-sm text-ink/60">{item.caption}</p>
                )}
              </div>
              {item.quote && (
                <div className="mt-auto flex flex-col gap-4">
                  <blockquote className="font-sans text-[15px] leading-[1.55] text-ink/80">
                    “{item.quote}”
                  </blockquote>
                  {(item.name || item.avatar) && (
                    <figcaption className="flex items-center gap-3">
                      {item.avatar && (
                        <img
                          src={item.avatar.src}
                          alt={item.name ?? ""}
                          width={item.avatar.width}
                          height={item.avatar.height}
                          className="h-11 w-11 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <p className="font-sans text-base font-medium text-ink">{item.name}</p>
                        <p className="font-sans text-sm text-ink/60">{item.role}</p>
                      </div>
                    </figcaption>
                  )}
                </div>
              )}
            </motion.figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/** Animated count-up number, triggers once at 10% visibility. */
export function AnimatedCounter({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) return;
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {n}
    </span>
  );
}