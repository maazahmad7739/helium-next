"use client";

import { useReducedMotion } from "framer-motion";
import {
  BULLET_COLORS,
  BulletIcon,
  OrbitVisual,
  ProductFanVisual,
  RetainVisual,
} from "@/components/home/TransformScrollCards";
import { TRANSFORM } from "@/lib/home-data";

type TransformStat = (typeof TRANSFORM)["stats"][number];

/**
 * Stacked-scroll card group for /contact ("Outcomes" pill).
 * Same card markup/visuals as the homepage TransformScrollCards; here the
 * three dark cards are position: sticky within a taller scroll container —
 * each card pins to the viewport and the next card slides up over it,
 * leaving a thin sliver of the previous card peeking at the top
 * (live contact page: sticky tops 126/176/226px). Stacking order 1 → 2 → 3.
 */
const CARD_COLORS = ["#03a174", "#f23d3d", "#ffb407"] as const;

const STICKY_TOPS = ["lg:top-[126px]", "lg:top-[176px]", "lg:top-[226px]"] as const;

const iconColor = (s: TransformStat, i: number) =>
  BULLET_COLORS[s.visual === "products" ? 1 : s.visual === "retain" ? 2 : 0] ??
  CARD_COLORS[i];

export function TransformStackedCards() {
  const reduce = useReducedMotion();

  const visual = (s: TransformStat) => {
    if (s.visual === "personas") return <OrbitVisual />;
    if (s.visual === "products") return <ProductFanVisual />;
    return <RetainVisual />;
  };

  const card = (s: TransformStat, i: number) => (
    <div
      className={`relative flex min-h-[520px] w-[min(92vw,1200px)] flex-col items-stretch justify-between gap-10 rounded-[15px] bg-[linear-gradient(180deg,#1f1f1f_0%,#141414_100%)] p-7 sm:p-10 lg:min-h-0 lg:h-[min(72vh,620px)] lg:flex-row lg:items-center lg:justify-between ${
        i > 0 ? "lg:shadow-[0_-40px_40px_-0.75px_rgba(74,74,74,0.21)]" : ""
      }`}
    >
      <div className="w-full max-w-[540px] py-2 lg:py-[50px]">
        <h3 className="font-display text-[30px] leading-[1.2] font-normal text-white sm:text-[34px]">
          {s.title.map((seg, j) =>
            seg.b ? (
              <strong key={j} className="font-bold">{seg.t}</strong>
            ) : (
              <span key={j}>{seg.t}</span>
            ),
          )}
        </h3>
        <p className="mt-3 font-sans text-base font-medium text-[#fafafa]">{s.kicker}</p>
        <ul className="mt-4 flex flex-col gap-2.5">
          {s.points.map((p, j) => (
            <li key={p} className="flex items-center gap-3">
              <span className="h-[30px] w-[30px] shrink-0">
                <BulletIcon i={j} color={iconColor(s, i)} />
              </span>
              <span className="font-display text-[15px] leading-[1.5] text-[#fafafa]">{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden shrink-0 md:block">{visual(s)}</div>
    </div>
  );

  if (reduce) {
    return (
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6">
        {TRANSFORM.stats.map((s, i) => (
          <div key={s.kicker}>{card(s, i)}</div>
        ))}
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-5 px-6">
      {TRANSFORM.stats.map((s, i) => (
        <div
          key={s.kicker}
          className={`${STICKY_TOPS[i]} sticky w-full`}
          style={{ zIndex: i + 1 }}
        >
          {card(s, i)}
        </div>
      ))}
    </div>
  );
}