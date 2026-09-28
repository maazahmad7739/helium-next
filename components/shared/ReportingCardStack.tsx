import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export type ReportingCardData = {
  title: string;
  image: { src: string; width: number; height: number; alt?: string };
  points: readonly string[];
};

/**
 * Blue circular check icon used by the live reporting-card bullet lists
 * (20px, #466cf3, white stroke) — measured from /catalog-optimization.
 */
function CardCheck() {
  return (
    <svg aria-hidden width="20" height="20" viewBox="0 0 20 20" className="mt-0.5 shrink-0">
      <circle cx="10" cy="10" r="10" fill="#466cf3" />
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

/**
 * ReportingCardStack — live /catalog-optimization "Card List": five
 * uniform reporting cards stacked with a 64px gap. Each card is a
 * flex-row: image (~500px) left, title + check-bullets right. Measured
 * from the live DOM: bg rgba(0,0,0,0.02), radius 20px, padding 35px/30px,
 * Poppins 40px (-3px) titles, 16px #181818 bullets.
 *
 * Natural document flow (task.md §1); every image sits in an explicit
 * aspect-ratio container (§2); whole stack is a simple flex column (§3).
 */
export function ReportingCardStack({
  cards,
  className,
}: {
  cards: readonly ReportingCardData[];
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-8 md:gap-16 ${className ?? ""}`}>
      {cards.map((card, i) => (
        <Reveal key={card.title} delay={i * 0.05}>
          <article className="grid items-center gap-8 rounded-[20px] bg-black/[0.02] p-6 md:grid-cols-[minmax(0,500px)_1fr] md:gap-[13px] md:rounded-[20px] md:p-[35px_30px]">
            <div className="relative aspect-[1433/948] w-full overflow-hidden rounded-[17px]">
              <Image
                src={card.image.src}
                alt={card.image.alt ?? card.title}
                width={card.image.width}
                height={card.image.height}
                sizes="(max-width: 768px) 100vw, 500px"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 md:pl-7">
              <h3 className="text-display text-tight text-[28px] leading-[1.1] text-ink md:text-[40px]">
                {card.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CardCheck />
                    <span className="font-sans text-base leading-[1.5] text-ink">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}