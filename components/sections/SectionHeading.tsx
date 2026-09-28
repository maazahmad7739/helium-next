import type { ReactNode } from "react";

/**
 * SectionHeading — eyebrow + display heading + optional subline,
 * matching the live pattern (Poppins display, tight tracking).
 * `eyebrowPill` renders the live black pill variant (e.g. "Pricing", "FAQ").
 *
 * Reused by: /ad-stack, /audience-signals, /attribution, /catalog-optimization, /pulse
 */
export function SectionHeading({
  eyebrow,
  eyebrowPill = false,
  title,
  titleAccent,
  subline,
  tone = "dark",
  align = "center",
  className,
}: {
  eyebrow?: string;
  eyebrowPill?: boolean;
  title: ReactNode;
  /** accent word rendered inline in plum (live "What if you knew exactly") */
  titleAccent?: string;
  subline?: ReactNode;
  tone?: "dark" | "light";
  align?: "center" | "left";
  className?: string;
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = tone === "light" ? "text-white" : "text-grape-deep";
  const subColor = tone === "light" ? "text-white/80" : "text-ink/60";

  return (
    <div className={`flex flex-col ${alignCls} ${className ?? ""}`}>
      {eyebrow &&
        (eyebrowPill ? (
          <span className="inline-flex items-center rounded-badge bg-ink px-5 py-2.5 font-sans text-sm font-medium text-white">
            {eyebrow}
          </span>
        ) : (
          <p className="font-micro text-sm font-medium tracking-[0.1px] text-plum">{eyebrow}</p>
        ))}
      <h2
        className={`text-display text-display-4 text-[32px] leading-[1.15] sm:text-[40px] ${
          eyebrow ? "mt-4" : ""
        } ${titleColor}`}
      >
        {title}
        {titleAccent && <span className="text-plum"> {titleAccent}</span>}
      </h2>
      {subline && <p className={`mt-3 font-sans text-base ${subColor}`}>{subline}</p>}
    </div>
  );
}