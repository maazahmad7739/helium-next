"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SPRING, SCROLL_TWEEN } from "@/lib/motion";

const TAP_SPRING = { type: "spring" as const, stiffness: 300, damping: 25 };

export type PillarCardProps = {
  chipLabel?: string;
  /** optional inline SVG icon path set rendered inside the chip (live chips have icons) */
  chipIcon?: React.ReactNode;
  title: React.ReactNode;
  body?: string;
  points?: readonly string[];
  image?: { src: string; width: number; height: number; alt?: string };
  href?: string;
  ctaLabel?: string;
  imageFirst?: boolean;
  className?: string;
};

/**
 * PillarFeatureCard — live pillar section: purple chip (icon + label),
 * heading, body, and check-bullet points (blue circular check icon +
 * plain text, NOT white cards). Whole card links to `href` (real route).
 *
 * Live layout: image sits in a #fafafa rounded-16 panel (~532px wide,
 * aspect ~1.117, 56px padding) beside a ~515px text column; H2 is
 * Poppins 40px medium with -2.4px tracking.
 *
 * Reused by: /ad-stack pillars, /catalog-optimization, /audience-signals, /attribution
 */
export function PillarFeatureCard({
  chipLabel,
  chipIcon,
  title,
  body,
  points,
  image,
  href,
  ctaLabel,
  imageFirst = false,
  className,
}: PillarCardProps) {
  const reduce = useReducedMotion();

  const text = (
    <>
      {chipLabel && (
        <span className="inline-flex w-fit items-center gap-2 rounded-badge bg-plum px-5 py-2.5 font-badge text-sm font-medium text-white shadow-[0px_4px_7px_-5px_rgba(0,0,0,0.68)]">
          {chipIcon}
          {chipLabel}
        </span>
      )}
      <h3
        className={`font-display text-[28px] leading-[1.15] font-medium tracking-[-0.02em] text-ink sm:text-[36px] sm:tracking-[-2.4px] ${
          chipLabel ? "mt-6" : ""
        }`}
      >
        {title}
      </h3>
      {body && (
        <p className={`font-sans text-[15px] leading-[1.7] text-ink/70 ${chipLabel || title ? "mt-4" : ""}`}>
          {body}
        </p>
      )}
      {points && points.length > 0 && (
        <ul className={`flex flex-col gap-4 ${chipLabel || title || body ? "mt-6" : ""}`}>
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <CheckBadge />
              <span className="font-sans text-[15px] leading-[1.55] text-ink/85">{point}</span>
            </li>
          ))}
        </ul>
      )}
      {ctaLabel && href && (
        <motion.a
          href={href}
          whileHover={reduce ? undefined : { scale: 1.02 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
          transition={reduce ? { duration: 0 } : SPRING}
          className="mt-7 inline-flex w-fit items-center justify-center rounded-pill-cta bg-ink px-6 py-3 font-sans text-sm font-medium text-white shadow-glow"
        >
          {ctaLabel}
        </motion.a>
      )}
    </>
  );

  const imageEl = image && (
    <div className="flex w-full items-center justify-center rounded-[16px] bg-grey-50 p-8 sm:p-12 lg:w-auto">
      <Image
        src={image.src}
        alt={image.alt ?? title?.toString() ?? chipLabel ?? ""}
        width={image.width}
        height={image.height}
        loading="lazy"
        className="w-full max-w-[520px] rounded-[12px] object-contain"
      />
    </div>
  );

  const cardBody = (
    <div className="grid items-center gap-10 rounded-card p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8 lg:p-0">
      <div className={image ? (imageFirst ? "lg:order-2 lg:pl-2" : "lg:pr-2") : ""}>{text}</div>
      {imageEl && <div className={imageFirst ? "lg:order-1" : ""}>{imageEl}</div>}
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={reduce ? undefined : { scale: 1.01 }}
        whileTap={reduce ? undefined : { scale: 0.99 }}
        transition={reduce ? { duration: 0 } : TAP_SPRING}
        className={`block ${className ?? ""}`}
      >
        {cardBody}
      </motion.a>
    );
  }
  return <div className={className}>{cardBody}</div>;
}

/** Blue circular check icon used by the live bullet lists. */
export function CheckBadge() {
  return (
    <svg aria-hidden width="20" height="20" viewBox="0 0 20 20" className="mt-0.5 shrink-0">
      <circle cx="10" cy="10" r="10" fill="#1784fb" />
      <path
        d="M5.8 10.2l2.7 2.7 5.7-5.6"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/** Staggered pillar list wrapper (scroll reveal). */
export function PillarStack({
  children,
  stagger = 0.12,
  className,
}: {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`flex flex-col gap-24 ${className ?? ""}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.08 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function PillarItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: SCROLL_TWEEN },
      }}
    >
      {children}
    </motion.div>
  );
}