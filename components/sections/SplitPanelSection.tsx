import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

/**
 * SplitPanelSection — two-column section with text on one side and a
 * tinted media panel on the other (live attribution "We weigh every
 * touchpoint…", audience-signals "Capture and Synthesise Visitor Data").
 *
 * Reused by: /attribution, /audience-signals, /catalog-optimization
 */
export function SplitPanelSection({
  title,
  subline,
  panel,
  panelFirst = false,
  tone = "white",
  list,
  className,
}: {
  title: ReactNode;
  subline?: ReactNode;
  panel?: ReactNode;
  panelFirst?: boolean;
  tone?: "white" | "paper";
  /** optional vertical tab/list under the title (live "By Channel and Campaign"…) */
  list?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`${tone === "paper" ? "bg-paper-2" : "bg-white"} px-6 py-16 sm:px-10 ${className ?? ""}`}
    >
      <Reveal>
        <div className="mx-auto grid max-w-[1091px] items-center gap-10 lg:grid-cols-2">
          <div className={panelFirst ? "lg:order-2" : ""}>
            <h2 className="font-sans text-[26px] leading-[1.3] font-medium tracking-[-0.02em] text-ink sm:text-[30px]">
              {title}
            </h2>
            {subline && <p className="mt-3 font-sans text-[15px] leading-[1.6] text-ink/70">{subline}</p>}
            {list}
          </div>
          {panel && (
            <div className={panelFirst ? "lg:order-1" : ""}>{panel}</div>
          )}
        </div>
      </Reveal>
    </section>
  );
}