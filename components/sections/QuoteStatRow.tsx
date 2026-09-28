import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/sections/CountUp";

/**
 * QuoteStatRow — live attribution "Results" (framer-tn57rz desktop):
 * top row = white summary card + grey (#ededed) summary card, both 220px
 * tall with centered 15px text and a hairline border; bottom row = black
 * quote card (631px, 40px padding, avatar 44px) + purple stat card (268px,
 * 64px count-up number). Cards stack full-width on mobile.
 *
 * Reused by: /attribution results
 */
export function QuoteStatRow({
  summaryCards,
  quote,
  name,
  role,
  avatarSrc,
  statValue,
  statLabel,
}: {
  summaryCards: readonly string[];
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string;
  statValue: string;
  statLabel: ReactNode;
}) {
  const stat = /^(\d+)(%?)$/.exec(statValue);

  return (
    <div className="flex flex-col">
      {/* Top: summary cards (white + grey, centered text) */}
      <div className="flex flex-col gap-6 p-5 lg:flex-row lg:justify-center">
        <Reveal className="lg:w-[382px]">
          <div className="flex min-h-[220px] h-full items-center justify-center rounded-[10px] border border-[rgba(33,33,33,0.12)] bg-white p-8 text-center">
            <p className="font-sans text-[15px] leading-[1.5] font-medium text-ink">
              {summaryCards[0]}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.06} className="lg:w-[517px]">
          <div className="flex min-h-[220px] h-full items-center justify-center rounded-[10px] border border-[rgba(33,33,33,0.12)] bg-[#ededed] p-8 text-center">
            <p className="font-sans text-[15px] leading-[1.5] font-medium text-ink">
              {summaryCards[1]}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Bottom: black quote card + purple stat card */}
      <div className="flex flex-col gap-6 p-5 lg:flex-row lg:justify-center">
        <Reveal delay={0.08} className="lg:w-[631px]">
          <figure className="flex h-full min-h-[290px] flex-col gap-[60px] rounded-[16px] bg-[#181818] p-10">
            <blockquote className="font-sans text-lg leading-[1.7] font-medium text-white">
              {quote}
            </blockquote>
            <figcaption className="flex items-center gap-3">
              {avatarSrc && (
                <img
                  src={avatarSrc}
                  alt={name}
                  width={44}
                  height={44}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-sans text-base font-medium text-white">{name}</p>
                <p className="font-sans text-sm text-white/60">{role}</p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={0.12} className="lg:w-[268px]">
          <div className="flex h-full flex-col items-start justify-center gap-2 rounded-[16px] border-[1.5px] border-[rgba(108,111,118,0.12)] bg-[#5603c0] px-14 py-[72px]">
            <p className="font-sans text-[64px] leading-[1.1] font-medium tracking-[-3.5px] text-white">
              {stat ? (
                <CountUp value={Number(stat[1])} suffix={stat[2] ? " %" : ""} />
              ) : (
                statValue
              )}
            </p>
            <p className="font-sans text-xl leading-[1.7] font-medium text-white">
              {statLabel}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}