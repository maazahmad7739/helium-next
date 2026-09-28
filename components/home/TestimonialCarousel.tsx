/**
 * Live "Backed by Results." ticker fidelity (gethelium.co, section
 * .framer-1mj0mgz → .framer-ctgl9s / .framer-ul7g9 rows):
 * - two rows of 5 cards, card 363px × 203px, 20px gap, radius 15px
 * - card bg: linear-gradient(180deg, rgb(18,11,33) 20%, rgba(0,0,0,0.41) 115%)
 *   + 1px border rgba(33,33,33,0.05)
 * - top row travels right → left, bottom row left → right
 * - section mask-image: 0.2 alpha edges, 23% / 77% stops
 * - quotes Outfit 300 / 130% (instrument fallback stack), company 14px / 200
 * Pure CSS translate3d loop (GPU only, no JS on the hot path); duplicate
 * lists are aria-hidden; both rows freeze under prefers-reduced-motion.
 */
import type { Testimonial } from "@/lib/home-data";

const DURATION = "48s";

function TickerRow({
  items,
  reverse = false,
}: {
  items: readonly Testimonial[];
  reverse?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div
      className="w-full overflow-hidden py-[10px]"
      style={{
        maskImage:
          "linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,1) 23%, rgba(0,0,0,1) 77%, rgba(0,0,0,0.2) 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,1) 23%, rgba(0,0,0,1) 77%, rgba(0,0,0,0.2) 100%)",
      }}
    >
      <div
        className={`flex w-max items-stretch ${
          reverse ? "animate-ticker-reverse" : "animate-ticker"
        }`}
        style={{ animationDuration: DURATION }}
      >
        {row.map((t, i) => (
          <figure
            key={`${t.company}-${i}`}
            aria-hidden={i >= items.length}
            className="mr-5 flex min-h-[203px] w-[363px] shrink-0 flex-col justify-between gap-5 rounded-[15px] border border-[rgba(33,33,33,0.05)] p-5"
            style={{
              background:
                "linear-gradient(180deg, rgb(18,11,33) 20%, rgba(0,0,0,0.41) 115%)",
            }}
          >
            <blockquote
              className="text-[15px] leading-[130%] font-light text-white"
              style={{
                fontFamily:
                  "var(--font-instrument-sans), var(--font-inter), sans-serif",
              }}
            >
              {t.quote}
            </blockquote>
            <figcaption>
              <p className="font-sans text-base font-light text-white">{t.role}</p>
              <p className="mt-0.5 font-sans text-sm font-extralight text-white">
                {t.company}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function TestimonialCarousel({
  testimonials,
}: {
  testimonials: readonly Testimonial[];
}) {
  const half = Math.ceil(testimonials.length / 2);
  const top = testimonials.slice(0, half);
  const bottom = testimonials.slice(half);

  return (
    <div className="flex w-full flex-col gap-2.5">
      <TickerRow items={top} />
      <TickerRow items={bottom} reverse />
    </div>
  );
}