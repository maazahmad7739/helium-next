import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export type HeroIntroCardData = {
  title: string;
  /** router link — pages for these routes are built later */
  href: string;
  /** full card artwork (title, body, chips and frame are baked into the image) */
  image: { src: string; alt: string; width: number; height: number };
};

/**
 * HeroIntroCards — live three-card row directly under the ad-stack hero.
 * Each card is a whole-card link to its pillar page; the center
 * (Audience Signals) card is taller and raised. Hovering a card scales
 * it up (live behavior: transform scale(1.1), ~0.3s ease).
 *
 * Reused by: /ad-stack hero
 */
export function HeroIntroCards({ cards }: { cards: readonly HeroIntroCardData[] }) {
  return (
    <RevealGroup
      className="mx-auto flex w-full max-w-[1012px] flex-col items-center gap-6 px-6 sm:flex-row sm:items-end sm:justify-center sm:gap-[5px] sm:px-0"
      stagger={0.1}
    >
      {cards.map((card, i) => (
        <RevealItem
          key={card.title}
          className={i === 1 ? "w-full max-w-[377px] sm:w-[377px]" : "w-full max-w-[314px] sm:w-[314px]"}
        >
          <Link
            href={card.href}
            aria-label={card.title}
            className="block transition-transform duration-300 ease-out hover:scale-[1.1] focus-visible:scale-[1.1] focus-visible:outline-none"
          >
            <img
              src={card.image.src}
              alt={card.image.alt}
              width={card.image.width}
              height={card.image.height}
              className="h-auto w-full select-none"
              draggable={false}
            />
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}