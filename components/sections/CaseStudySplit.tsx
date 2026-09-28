import { Reveal } from "@/components/motion/Reveal";
import { CtaPill } from "./CtaPill";

/**
 * CaseStudySplit — live "Chosen by 100+ D2C brands" block: quote card
 * (brand, quote, author, purple stat pair) + brand photo panel on the
 * right, followed by a centered CTA.
 *
 * Reused by: /audience-signals, /attribution (results), /ad-stack
 */
export function CaseStudySplit({
  heading,
  brandSrc,
  quote,
  name,
  role,
  stats,
  photoSrc,
  ctaLabel,
  ctaHref = "/contact",
  className,
}: {
  heading: string;
  brandSrc: string;
  quote: string;
  name: string;
  role: string;
  /** one or two stat pairs rendered purple at the card bottom */
  stats: readonly { value: string; label: string }[];
  photoSrc: string;
  ctaLabel: string;
  ctaHref?: string;
  /** extra section classes (e.g. lg:pt-[…] to match live rhythm) */
  className?: string;
}) {
  return (
    <section className={`bg-white px-6 py-16 sm:px-10 ${className ?? ""}`}>
      <div className="mx-auto max-w-[1091px]">
        <Reveal>
          <h2 className="text-display text-display-4 text-center text-[36px] text-ink sm:text-[44px]">
            {heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-card border border-black/[0.06] bg-white p-8 shadow-card">
            <img src={brandSrc} alt={name} width={120} height={40} className="h-9 w-auto object-contain object-left" />
            <p className="font-sans text-2xl leading-tight text-plum">“</p>
            <blockquote className="font-sans text-[17px] leading-[1.6] text-ink/85">{quote}</blockquote>
            <p className="font-sans text-[15px] text-ink">
              <span className="font-semibold">{name}</span> <span className="text-ink/60">{role}</span>
            </p>
            <div className="mt-auto grid grid-cols-2 gap-6 border-t border-black/[0.06] pt-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-display text-[36px] text-plum">{s.value}</p>
                  <p className="mt-1 font-sans text-sm text-ink/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-card shadow-card">
            <img
              src={photoSrc}
              alt={`${name} team`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15} className="mt-12 flex justify-center">
          <CtaPill label={ctaLabel} href={ctaHref} variant="dark" />
        </Reveal>
      </div>
    </section>
  );
}