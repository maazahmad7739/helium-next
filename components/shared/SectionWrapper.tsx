import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

export type SectionTone = "white" | "paper" | "navy";

const TONE_BG: Record<SectionTone, string> = {
  white: "bg-white",
  paper: "bg-paper-2",
  navy: "bg-navy",
};

/**
 * Standard section shell: consistent vertical padding, container width,
 * background tone, and a whileInView scroll-reveal on the content.
 *
 * Reused by: /ad-stack, /catalog-optimization, /merchandising, /pulse
 */
export function SectionWrapper({
  children,
  tone = "white",
  width = "wide",
  pt = 16,
  pb = 16,
  delay = 0,
  className,
  innerClassName,
  reveal = true,
}: {
  children: ReactNode;
  tone?: SectionTone;
  width?: "wide" | "narrow" | "full";
  pt?: number;
  pb?: number;
  delay?: number;
  className?: string;
  innerClassName?: string;
  reveal?: boolean;
}) {
  const widthCls =
    width === "wide"
      ? "max-w-[1091px]"
      : width === "narrow"
        ? "max-w-[900px]"
        : "max-w-none";
  const content = (
    <div className={`mx-auto ${widthCls} ${innerClassName ?? ""}`}>{children}</div>
  );

  return (
    <section
      className={`${TONE_BG[tone]} px-6 sm:px-10 ${className ?? ""}`}
      style={{ paddingTop: `${pt * 0.25}rem`, paddingBottom: `${pb * 0.25}rem` }}
    >
      {reveal ? (
        <Reveal delay={delay} className={widthCls}>
          {content}
        </Reveal>
      ) : (
        content
      )}
    </section>
  );
}