"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SCROLL_TWEEN } from "@/lib/motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { PULSE } from "@/lib/pulse-data";

/**
 * Live /pulse "Deployment" panel (ref pulse4.md.txt, #deployment): one rounded
 * #d8dfe5 panel holding the detective headline, GA4-vs-Helium highlight cards,
 * the Shobhit quote (live animates word-by-word), the "What Helium Analytics
 * catches" feature grid, the dotted benefits row, and the CRO line.
 */

/* Same reveal physics as components/motion/Reveal, as line/word/list items. */
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: SCROLL_TWEEN },
};

const wordVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: SCROLL_TWEEN },
};

type IconProps = { className?: string };

function ChatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4.5 5.5h15v10.2H9.4L4.5 19V5.5Z" fill="currentColor" opacity="0.2" />
      <path
        d="M4.5 5.5h15v10.2H9.4L4.5 19V5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M8 9.2h8M8 12h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function WarnIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 4.2 3.4 19h17.2L12 4.2Z" fill="currentColor" opacity="0.2" />
      <path
        d="M12 4.2 3.4 19h17.2L12 4.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M12 10v4.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12 17.1h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M3.5 9.8 12 4l8.5 5.8V19a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V9.8Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M3.5 9.8 12 4l8.5 5.8V19a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V9.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="m3.5 10.2 8.5 5.6 8.5-5.6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function GaugeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 9.5a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8Z" fill="currentColor" opacity="0.2" />
      <path d="M4 17.5a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="m12 17.5 3.8-4.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function TrendIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M3.5 17.5 9.5 11l4 4 7-7.5v10h-17Z" fill="currentColor" opacity="0.2" />
      <path d="M3.5 17.5 9.5 11l4 4 7-7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7h5v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3.5 18.5 6v5.2c0 4.3-2.7 7.5-6.5 9.3-3.8-1.8-6.5-5-6.5-9.3V6L12 3.5Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M12 3.5 18.5 6v5.2c0 4.3-2.7 7.5-6.5 9.3-3.8-1.8-6.5-5-6.5-9.3V6L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="m9.2 11.6 2 2 3.8-4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const FEATURE_ICONS: Record<string, (props: IconProps) => React.ReactElement> = {
  "Anomaly Chat": ChatIcon,
  "Funnel Drop Reason Finder": WarnIcon,
  "Conversion Likelihood Score": MailIcon,
  "Collaborative Fix Logs": GaugeIcon,
  "Fix Uplift Simulator": TrendIcon,
  "Attribution AI": ShieldIcon,
};

/* Staggered list (ul/li) with the shared reveal variants. */
function RevealList({ items, dot }: { items: readonly string[]; dot: "ring" | "check" }) {
  const reduce = useReducedMotion();
  return (
    <motion.ul
      className="flex flex-col justify-center gap-4"
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, margin: "-60px" }}
      variants={reduce ? undefined : { hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
    >
      {items.map((point, i) => (
        <motion.li key={point} className="flex items-center gap-3" variants={reduce ? undefined : itemVariants}>
          {dot === "ring" ? (
            <span aria-hidden className="h-4 w-4 shrink-0 rounded-full border border-[#404040]/80" />
          ) : (
            <span
              aria-hidden
              className="animate-pulse-check flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#1fb567] bg-[#1fb567]/25 text-[#1fb567]"
              style={{ "--pulse-check-delay": `${400 + i * 120}` } as React.CSSProperties}
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                <path
                  d="M4.5 12.5 10 18 19.5 7"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
          <span
            className={
              dot === "ring"
                ? "font-instrument text-[15px] leading-[1.5] text-[#151515]/80"
                : "font-instrument text-[15px] leading-[1.5] text-[#151515]"
            }
          >
            {point}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export function PulseDeployment() {
  const reduce = useReducedMotion();
  const quoteWords = `"${PULSE.quote.text}"`.split(" ");
  const headingWords = PULSE.features.heading.split(" ");

  return (
    <section id="deployment" className="bg-[#f0f8ffe6] px-4 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 rounded-[20px] bg-[rgb(216,223,229)] px-[18px] py-[47px] sm:gap-[91px] sm:px-10 sm:py-[102px]">
        {/* Detective headline: three staggered lines, 60px violet accent */}
        <motion.h3
          className="font-inter text-[28px] font-medium leading-[1.15] tracking-[-0.03em] text-[#323232] sm:text-[44px]"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, margin: "-60px" }}
          variants={reduce ? undefined : { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span className="block" variants={reduce ? undefined : itemVariants}>
            {PULSE.detective.line1}
          </motion.span>
          <motion.span className="block" variants={reduce ? undefined : itemVariants}>
            {PULSE.detective.line2}
          </motion.span>
          <motion.span
            className="block text-[36px] font-semibold text-pulse-violet sm:text-[60px]"
            variants={reduce ? undefined : itemVariants}
          >
            {PULSE.detective.accent}
          </motion.span>
        </motion.h3>

        {/* GA4 (transparent) vs Helium (white card) */}
        <RevealGroup className="grid gap-8 md:grid-cols-2" stagger={0.15}>
          <RevealItem className="h-full">
            <div className="flex h-full flex-col gap-8 rounded-[16px] p-6 sm:p-8">
              <h5 className="font-instrument text-2xl tracking-[-0.05em] text-[#151515]">
                {PULSE.comparison.ga4.name}
              </h5>
              <RevealList items={PULSE.comparison.ga4.points} dot="ring" />
            </div>
          </RevealItem>
          <RevealItem className="h-full">
            <div className="flex h-full flex-col gap-8 rounded-[16px] bg-white p-6 shadow-card sm:p-8">
              <h5 className="font-sans text-[26px] font-medium tracking-[-0.02em] text-pulse-violet">
                {PULSE.comparison.helium.name}
              </h5>
              <RevealList items={PULSE.comparison.helium.points} dot="check" />
            </div>
          </RevealItem>
        </RevealGroup>

        {/* Quote — live animates word-by-word */}
        <Reveal className="mx-auto w-full max-w-[920px] px-5">
          <motion.p
            className="font-instrument text-[24px] font-medium italic leading-[1.3] tracking-[-0.05em] text-[#323232] sm:text-[40px]"
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "show"}
            viewport={{ once: true, margin: "-60px" }}
            variants={reduce ? undefined : { hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
          >
            {quoteWords.map((w, i) => (
              <Fragment key={`${w}-${i}`}>
                {i > 0 ? " " : ""}
                <motion.span className="inline-block" variants={reduce ? undefined : wordVariants}>
                  {w}
                </motion.span>
              </Fragment>
            ))}
          </motion.p>
          <figcaption className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-instrument text-lg font-medium tracking-[-0.05em] text-[#151515] sm:text-xl">
              {PULSE.quote.name}
            </span>
            <span className="font-instrument text-lg tracking-[-0.04em] text-[#151515] sm:text-xl">
              {PULSE.quote.role}
            </span>
          </figcaption>
        </Reveal>

        {/* Features: word-stagger heading + icon cards + dotted benefits row */}
        <div className="flex flex-col items-center gap-11">
          <motion.h2
            className="max-w-[800px] text-center font-display text-[32px] font-medium leading-[1.2] tracking-[-0.01em] text-[#16101e] sm:text-[51px]"
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "show"}
            viewport={{ once: true, margin: "-60px" }}
            variants={reduce ? undefined : { hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          >
            {headingWords.map((w, i) => (
              <Fragment key={`${w}-${i}`}>
                {i > 0 ? " " : ""}
                <motion.span className="inline-block" variants={reduce ? undefined : wordVariants}>
                  {w}
                </motion.span>
              </Fragment>
            ))}
          </motion.h2>

          <RevealGroup className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" stagger={0.08}>
            {PULSE.features.items.map((f) => {
              const Icon = FEATURE_ICONS[f.title] ?? ChatIcon;
              return (
                <RevealItem key={f.title} className="h-full">
                  <div className="flex h-full flex-col gap-6 rounded-[16px] bg-[#f6fbff] p-6 shadow-pulse-card transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#f6fbff] p-2 shadow-pulse-icon">
                      <Icon className="h-6 w-6 text-pulse-violet" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-instrument text-xl font-medium tracking-[-0.04em] text-[#151515]">
                        {f.title}
                      </h4>
                      <p className="font-instrument text-[15px] leading-[1.5] text-[#151515]/80">{f.body}</p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>

          <RevealGroup className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3" stagger={0.1}>
            {PULSE.features.chips.map((chip, i) => (
              <Fragment key={chip}>
                {i > 0 && (
                  <span
                    aria-hidden
                    className="hidden h-0 w-[114px] border-t-2 border-dotted border-[#F0F8FFE6]/70 md:block"
                  />
                )}
                <RevealItem>
                  <span className="font-instrument text-[15px] text-[#151515]/80">{chip}</span>
                </RevealItem>
              </Fragment>
            ))}
          </RevealGroup>
        </div>

        {/* CRO line */}
        <Reveal className="px-1 sm:px-6">
          <h2 className="font-instrument text-[28px] font-medium leading-[1.2] tracking-[-0.05em] text-[#323232] sm:text-[44px]">
            Unlock <span className="text-pulse-violet">hidden anomalies</span> to power your next CRO action
          </h2>
        </Reveal>
      </div>
    </section>
  );
}