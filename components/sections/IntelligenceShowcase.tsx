"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SCROLL_TWEEN } from "@/lib/motion";

export type IntelStep = {
  tabLabel: string;
  title: string;
  body: string;
  image: { src: string; width: number; height: number; alt?: string };
};

/**
 * IntelligenceShowcase — live "How our intelligence layer works":
 * sticky left-hand tab list with active-state highlight (purple text +
 * left accent bar), scrollable content column on the right. Active tab
 * tracks scroll position via IntersectionObserver on each step row.
 * Replaces the previous wrong numbered-alternating-rows pattern
 * (Step 1 discrepancy #15).
 *
 * Reused by: /ad-stack intelligence, /audience-signals, /attribution
 */
export function IntelligenceShowcase({
  heading,
  steps,
  className,
}: {
  heading: string;
  steps: readonly IntelStep[];
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onStepScrollIntoView = (i: number) => {
    setActive(i);
  };

  return (
    <section className={`bg-white px-6 py-16 sm:px-10 ${className ?? ""}`}>
      <div className="mx-auto max-w-[1091px]">
        <h2 className="text-display text-display-4 text-center text-[32px] text-grape-deep sm:text-[40px]">
          {heading}
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(260px,380px)_1fr]">
          {/* sticky tab list */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <ul className="flex flex-col gap-1">
              {steps.map((step, i) => {
                const isActive = active === i;
                return (
                  <li key={step.tabLabel}>
                    <a
                      href={`#intel-step-${i}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative block border-l-2 py-3 pl-5 font-sans text-lg leading-[1.4] transition-colors duration-300 ${
                        isActive
                          ? "border-plum font-medium text-plum"
                          : "border-black/10 text-ink hover:text-plum"
                      }`}
                    >
                      {step.tabLabel}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* scrolling content */}
          <div className="flex flex-col gap-24">
            {steps.map((step, i) => (
              <IntelStepRow
                key={step.title}
                index={i}
                step={step}
                refEl={(el) => {
                  stepRefs.current[i] = el;
                }}
                onVisible={() => onStepScrollIntoView(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IntelStepRow({
  index,
  step,
  refEl,
  onVisible,
}: {
  index: number;
  step: IntelStep;
  refEl: (el: HTMLDivElement | null) => void;
  onVisible: () => void;
}) {
  const reduce = useReducedMotion();

  // Track when this step occupies the upper-middle of the viewport
  // and notify the parent to highlight the matching tab.
  useEffect(() => {
    const el = document.getElementById(`intel-step-${index}`);
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) onVisible();
        }
      },
      { rootMargin: "-30% 0px -55% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index, onVisible]);

  return (
    <motion.div
      id={`intel-step-${index}`}
      ref={refEl}
      variants={
        reduce
          ? undefined
          : {
              hidden: { opacity: 0, y: 25 },
              show: { opacity: 1, y: 0, transition: SCROLL_TWEEN },
            }
      }
      className="scroll-mt-40"
    >
      <h3 className="font-sans text-[22px] leading-[1.3] font-medium text-ink sm:text-[26px]">
        {step.title}
      </h3>
      <p className="mt-3 font-sans text-[15px] leading-[1.6] text-ink/70">{step.body}</p>
      <div
        className="relative isolate mt-6 w-full transform-gpu overflow-hidden rounded-card shadow-card"
        style={{ aspectRatio: "1917 / 1368" }}
      >
        <Image
          src={step.image.src}
          alt={step.image.alt ?? step.title}
          width={step.image.width}
          height={step.image.height}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
}