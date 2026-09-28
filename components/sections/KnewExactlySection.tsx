import { Reveal } from "@/components/motion/Reveal";

/**
 * KnewExactlySection — live "What if you knew exactly" block:
 * heading with plum accent word, three white chips connected by a
 * drawn bracket line above them, caption underneath.
 *
 * Note: the live DOM contains a dark "Add Salix" pill here, but it's
 * positioned `absolute; bottom:-241px` inside an `overflow:hidden` card,
 * so it never renders visibly on the live site — intentionally omitted.
 *
 * Reused by: /ad-stack
 */
export function KnewExactlySection({
  titleBefore,
  titleAccent,
  chips,
  caption,
  tightBottom = false,
}: {
  titleBefore: string;
  titleAccent: string;
  chips: readonly string[];
  caption: string;
  /** live /ad-stack: only 21px section bottom padding before the Smart Ad Stack title */
  tightBottom?: boolean;
}) {
  return (
    <section
      className={`bg-white px-6 ${tightBottom ? "pb-[21px]" : "py-16"} sm:px-10`}
    >
      <div className="mx-auto max-w-[1091px]">
        <Reveal>
          <h2 className="text-display text-display-4 text-center text-[36px] text-ink sm:text-[44px]">
            {titleBefore} <span className="text-plum">{titleAccent}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative mt-10 rounded-panel bg-paper-2 px-6 py-12 sm:px-12">
            {/* bracket line connecting the three chips: rounded corners on both
                outer edges + a center vertical tick over the middle chip (live).
                Live = faint static outline + a purple segment that sweeps the
                line left -> right and loops continuously (Framer strokeEffectLoop
                continuous, 2s tween, total length 1466.36 / 39 for the tick). */}
            <svg
              aria-hidden
              viewBox="0 0 691 78"
              className="mx-auto mb-2 hidden h-[70px] w-[88%] sm:block"
            >
              <path
                d="M 38.25 76.5 C 17.125 76.5 0 59.375 0 38.25 C 0 17.125 17.125 0 38.25 0 L 651.25 0 C 672.375 0 689.5 17.125 689.5 38.25 C 689.5 59.375 672.375 76.5 651.25 76.5"
                fill="none"
                stroke="rgba(70, 72, 77, 0.1)"
                strokeWidth="1.5"
              />
              <path
                className="adstack-bracket-sweep"
                d="M 38.25 76.5 C 17.125 76.5 0 59.375 0 38.25 C 0 17.125 17.125 0 38.25 0 L 651.25 0 C 672.375 0 689.5 17.125 689.5 38.25 C 689.5 59.375 672.375 76.5 651.25 76.5"
                fill="none"
                pathLength={1}
                stroke="#6236ad"
                strokeWidth="1.5"
              />
              <path
                d="M 345.75 0 L 345.75 39"
                fill="none"
                stroke="rgba(70, 72, 77, 0.1)"
                strokeWidth="1.5"
              />
              <path
                className="adstack-bracket-sweep"
                d="M 345.75 0 L 345.75 39"
                fill="none"
                pathLength={1}
                stroke="#6236ad"
                strokeWidth="1.5"
              />
            </svg>
            <div className="grid gap-5 sm:grid-cols-3">
              {chips.map((chip) => (
                <div
                  key={chip}
                  className="flex items-center justify-center rounded-card border border-black/[0.06] bg-white px-6 py-8 shadow-chip"
                >
                  <p className="text-center font-sans text-lg font-medium text-plum">{chip}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-[760px] text-center font-sans text-[15px] leading-[1.6] text-ink/75">
              {caption}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}