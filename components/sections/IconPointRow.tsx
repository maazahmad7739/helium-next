import type { ReactNode } from "react";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export type IconPoint = {
  icon: ReactNode;
  text: ReactNode;
};

/** Column layout per point count: 3-up rows fill the grid evenly
    (no empty 4th column), 4-up keeps the live attribution grid. */
const COLS_CLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/**
 * IconPointRow — live 4-up icon + text row (attribution "What Helium
 * Attribution is": person-add / sliders / check / dollar icons with
 * short copy under each).
 *
 * Reused by: /attribution, /audience-signals
 *
 * `cols`  — grid columns (default 4, unchanged for existing call sites).
 * `stagger` — per-cell scroll reveal (RevealGroup + RevealItem) instead of
 *             a single parent Reveal. Purely additive motion; existing
 *             call sites keep the plain single-block rendering.
 */
export function IconPointRow({
  points,
  cols = 4,
  stagger = false,
}: {
  points: readonly IconPoint[];
  cols?: 2 | 3 | 4;
  stagger?: boolean;
}) {
  if (stagger) {
    return (
      <RevealGroup className={`mx-auto grid max-w-[1091px] gap-10 ${COLS_CLS[cols]}`} stagger={0.12}>
        {points.map((point, i) => (
          <RevealItem key={i} className="flex flex-col items-center gap-4 text-center">
            <span className="flex h-10 w-10 items-center justify-center text-plum">{point.icon}</span>
            <p className="font-sans text-[15px] leading-[1.55] text-ink/85">{point.text}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    );
  }

  return (
    <div className={`mx-auto grid max-w-[1091px] gap-10 ${COLS_CLS[cols]}`}>
      {points.map((point, i) => (
        <div key={i} className="flex flex-col items-center gap-4 text-center">
          <span className="flex h-10 w-10 items-center justify-center text-plum">{point.icon}</span>
          <p className="font-sans text-[15px] leading-[1.55] text-ink/85">{point.text}</p>
        </div>
      ))}
    </div>
  );
}