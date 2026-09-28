"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SPRING, SCROLL_TWEEN } from "@/lib/motion";

const TAP_SPRING = { type: "spring" as const, stiffness: 300, damping: 25 };

export type FeatureCardProps = {
  title?: string;
  body?: string;
  /** sub-bullet rows rendered as tinted point-cards */
  points?: readonly string[];
  /** optional micro-metrics (label/value pairs) */
  metrics?: readonly { label: string; value: string }[];
  /** optional visual slot: image src + natural dims */
  image?: { src: string; width: number; height: number; alt?: string };
  /** router href — makes the whole card (or the chip/button) clickable */
  href?: string;
  chipLabel?: string;
  ctaLabel?: string;
  /** image-left layout on desktop */
  imageFirst?: boolean;
  className?: string;
};

/**
 * InteractiveFeatureCard — flexible card: title/body/points/metrics +
 * visual slot + clickable states. Resolves the Attribution dead-link
 * defect by making the chip AND card both real router links with spring
 * hover/tap.
 *
 * Reused by: /ad-stack pillars, /catalog-optimization features & mismatch,
 *            /merchandising features, /pulse features
 */
export function InteractiveFeatureCard(props: FeatureCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, body, points, metrics, image, href, chipLabel, ctaLabel, className } = props;
  const reduce = useReducedMotion();

  const text = (
    <>
      {chipLabel &&
        (href ? (
          <motion.a
            href={href}
            whileHover={reduce ? undefined : { scale: 1.04 }}
            whileTap={reduce ? undefined : { scale: 0.96 }}
            transition={reduce ? { duration: 0 } : TAP_SPRING}
            className="inline-flex items-center rounded-pill-cta bg-plum px-5 py-2.5 font-sans text-base font-medium text-white"
          >
            {chipLabel}
          </motion.a>
        ) : (
          <span className="inline-flex items-center rounded-pill-cta bg-plum px-5 py-2.5 font-sans text-base font-medium text-white">
            {chipLabel}
          </span>
        ))}
      {title && (
        <h3 className={`font-sans text-[26px] leading-[1.3] font-medium text-ink ${chipLabel ? "mt-4" : ""}`}>
          {title}
        </h3>
      )}
      {body && <p className={`font-sans text-[15px] leading-[1.6] text-ink/70 ${title ? "mt-3" : ""}`}>{body}</p>}
      {metrics && metrics.length > 0 && (
        <div className={`grid gap-4 sm:grid-cols-2 ${title || body ? "mt-5" : ""}`}>
          {metrics.map((m) => (
            <div key={m.label} className="rounded-[20px] bg-white p-5 shadow-card">
              <p className="font-micro text-xs font-medium tracking-[0.1px] text-ink/50">{m.label}</p>
              <p className="mt-2 font-display text-[28px] font-medium text-ink">{m.value}</p>
            </div>
          ))}
        </div>
      )}
      {points && points.length > 0 && (
        <ul className={`flex flex-col gap-3 ${title || body || metrics ? "mt-5" : ""}`}>
          {points.map((point) => (
            <li
              key={point}
              className="rounded-2xl bg-white p-4 font-sans text-[15px] leading-[1.55] text-ink/80 shadow-card"
            >
              {point}
            </li>
          ))}
        </ul>
      )}
      {ctaLabel &&
        (href ? (
          <motion.a
            href={href}
            whileHover={reduce ? undefined : { scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={reduce ? { duration: 0 } : SPRING}
            className="bg-cta mt-6 inline-flex items-center justify-center rounded-pill-cta px-7 py-[13px] font-sans text-base font-medium text-white"
          >
            {ctaLabel}
          </motion.a>
        ) : (
          <span className="bg-cta mt-6 inline-flex items-center justify-center rounded-pill-cta px-7 py-[13px] font-sans text-base font-medium text-white">
            {ctaLabel}
          </span>
        ))}
    </>
  );

  const imageEl = image && (
    <Image
      src={image.src}
      alt={image.alt ?? title ?? chipLabel ?? ""}
      width={image.width}
      height={image.height}
      loading="lazy"
      className="w-full rounded-[20px] object-cover shadow-card"
    />
  );

  const cardBody = (
    <div className="grid items-center gap-8 rounded-card border border-black/[0.06] bg-paper-2 p-8 lg:grid-cols-2">
      <div className={props.image ? (props.imageFirst ? "lg:order-2" : "") : ""}>
        {text}
      </div>
      {imageEl && <div className={props.imageFirst ? "lg:order-1" : ""}>{imageEl}</div>}
    </div>
  );

  // whole-card click target when href is set and no explicit chip/CTA
  if (href && !chipLabel && !ctaLabel) {
    return (
      <motion.a
        href={href}
        whileHover={reduce ? undefined : { scale: 1.02 }}
        whileTap={reduce ? undefined : { scale: 0.98 }}
        transition={reduce ? { duration: 0 } : TAP_SPRING}
        className={`block ${className ?? ""}`}
      >
        {cardBody}
      </motion.a>
    );
  }

  return <div className={className}>{cardBody}</div>;
}

/** Responsive card grid with staggered whileInView reveals. */
export function FeatureCardGrid({
  cards,
  cols = 2,
  stagger = 0.1,
  className,
}: {
  cards: readonly FeatureCardProps[];
  cols?: 2 | 3 | 4;
  stagger?: number;
  className?: string;
}) {
  const colsCls =
    cols === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : cols === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2";
  return (
    <motion.div
      className={`grid gap-6 ${colsCls} ${className ?? ""}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {cards.map((card, i) => (
        <motion.div
          key={card.title ?? card.chipLabel ?? i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: SCROLL_TWEEN },
          }}
        >
          <InteractiveFeatureCard {...card} className="h-full" />
        </motion.div>
      ))}
    </motion.div>
  );
}