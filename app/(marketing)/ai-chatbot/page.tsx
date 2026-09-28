import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { TopBannerBadge, CtaPill, TrustBar } from "@/components/sections";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { HeroReveal } from "@/components/motion/HeroReveal";
import { CountUp } from "@/components/sections/CountUp";
import { LogoMarquee } from "@/components/home/LogoMarquee";

export const metadata: Metadata = {
  title: "AI Chatbot — PLACEHOLDER SEO title | Helium",
  description:
    "PLACEHOLDER SEO description: answer questions, recommend products, and close the sale inside chat. Final copy to be supplied.",
  alternates: { canonical: `${SITE.url}/ai-chatbot` },
};

/* PLACEHOLDER — brand names for the "Live on real brands" strip.
   Final list/logos to be confirmed; rendered as text wordmarks in the
   same style as the live /pulse badge row until logo assets arrive. */
const BRANDS = [
  "W for Woman",
  "BBlunt",
  "Aurelia",
  "Aqualogica",
  "MamaEarth",
  "Honasa",
  "Innovist",
  "Dermaco",
  "Swiss Beauty",
  "Staze",
] as const;

/* PLACEHOLDER stat — swap `value` + label with final numbers/copy. */
const CHATBOT_STAT = {
  value: 18,
  label: "PLACEHOLDER — increase in conversion via chat-assisted sessions",
} as const;

/* PLACEHOLDER checklist copy — final wording to be supplied. */
const FEATURE_POINTS = [
  "Product cards with swatches inside chat",
  "Add-to-cart without leaving the conversation",
  "Per-brand configurable widgets (popup / floating / embedded)",
] as const;

function ProductCardIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <rect x="5" y="5" width="26" height="26" rx="4" stroke="#6236ad" strokeWidth="3" />
      <circle cx="13" cy="22" r="3" fill="#6236ad" />
      <circle cx="18" cy="22" r="3" fill="#f23d3d" />
      <circle cx="23" cy="22" r="3" fill="#ffb407" />
      <path d="M10 12h16" stroke="#6236ad" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function CartPlusIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#6236ad" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 6h5l4 17h13l4-12H11" />
      <circle cx="15" cy="29" r="2.5" fill="#6236ad" stroke="none" />
      <circle cx="24" cy="29" r="2.5" fill="#6236ad" stroke="none" />
      <path d="M28 4v8M24 8h8" />
    </svg>
  );
}

function WidgetsIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <rect x="5" y="5" width="26" height="22" rx="4" stroke="#6236ad" strokeWidth="3" />
      <path d="M12 27l-2 5 6-5" stroke="#6236ad" strokeWidth="3" strokeLinejoin="round" />
      <path d="M13 13h10M13 18h6" stroke="#6236ad" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

const FEATURE_POINTS_ICONS = [ProductCardIcon(), CartPlusIcon(), WidgetsIcon()];

export default function AiChatbotPage() {
  return (
    <>
      {/* 1. HERO — staggered HeroReveal choreography (badge → H1 → CTAs →
          sub), same 0.2/0.5/0.7/0.9 delays as /ab-testing hero */}
      <section className="-mt-[120px] bg-paper-2 px-6 pt-[182px] pb-16 text-center sm:px-10">
        <HeroReveal>
          <TopBannerBadge label="Featured among Top AI Startups - TechCrunch, Forbes" showLogos={false} />
        </HeroReveal>
        <HeroReveal delay={0.5}>
          <h1 className="text-display mx-auto mt-6 max-w-[820px] text-[44px] leading-[1.08] text-grape sm:text-[60px]">
            {/* PLACEHOLDER H1 */}
            AI Shopping Assistant
          </h1>
        </HeroReveal>
        <HeroReveal delay={0.7}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CtaPill label="Book a demo" variant="dark" size="sm" />
            <CtaPill
              label="Download Shopify App"
              variant="gradient"
              size="sm"
              href="https://apps.shopify.com/helium-marketing-efficiency"
              external
              className="bg-white text-plum shadow-card"
            />
          </div>
        </HeroReveal>
        <HeroReveal delay={0.9}>
          <p className="mx-auto mt-8 max-w-[720px] font-sans text-lg leading-[1.6] text-ink/70">
            {/* PLACEHOLDER subcopy */}
            Answer questions, recommend products, and close the sale — without
            leaving the chat.
          </p>
        </HeroReveal>
      </section>

      {/* 2. TRUST BAR — LogoMarquee is already a continuous CSS ticker */}
      <TrustBar label="Trusted by 100+ fast-growing ecommerce brands" className="bg-paper-2">
        <LogoMarquee />
      </TrustBar>

      {/* 3. OUTCOME / STAT BLOCK — PLACEHOLDER stat card, homepage
          "Order values up by 18%" pattern; CountUp animates on
          scroll-into-view (same primitive as /ad-stack outcomes) */}
      <section className="bg-paper-2 px-6 pb-16 sm:px-10">
        <Reveal delay={0.1} className="flex justify-center">
          <div className="flex min-h-[220px] w-full max-w-[820px] flex-col items-center justify-center gap-2 rounded-[16px] border-[1.5px] border-[rgba(108,111,118,0.12)] bg-[#5603c0] px-10 py-12 text-center">
            <p className="font-geist text-[64px] leading-[1.1] font-medium tracking-[-3.5px] text-white">
              <CountUp value={CHATBOT_STAT.value} suffix="%" />
            </p>
            <p className="font-sans text-xl leading-[1.7] font-medium text-white">
              {CHATBOT_STAT.label}
            </p>
          </div>
        </Reveal>
      </section>

      {/* 4. FEATURE CHECKLIST — conversational arrangement (page-distinct):
          stacked full-width message-style rows with icon-in-circle, instead
          of the centered IconPointRow grid used on /attribution +
          /audience-signals (no chat-bubble component exists in the design
          system — flagged, not invented). Rows stagger in on scroll. */}
      <section className="bg-white px-6 pb-16 sm:px-10">
        <div className="mx-auto max-w-[1091px]">
          <Reveal>
            <h2 className="text-display text-display-4 text-center text-[36px] text-ink sm:text-[44px]">
              {/* PLACEHOLDER heading */}
              What the AI Chatbot does
            </h2>
            <p className="mt-3 text-center font-sans text-[15px] text-ink/70">
              {/* PLACEHOLDER kicker */}
              A shopping assistant that:
            </p>
          </Reveal>
          <RevealGroup className="mx-auto mt-12 flex max-w-[820px] flex-col gap-4" stagger={0.12}>
            {FEATURE_POINTS.map((text, i) => (
              <RevealItem key={text} y={20}>
                <div className="flex items-center gap-5 rounded-[16px] border border-[rgba(33,33,33,0.08)] bg-paper-2 p-5 sm:p-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white text-plum shadow-chip">
                    {FEATURE_POINTS_ICONS[i]}
                  </span>
                  <p className="font-sans text-base leading-[1.55] font-medium text-ink">
                    {text}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 5. LIVE ON REAL BRANDS — single continuous CSS ticker
          (mask-ticker + animate-ticker, same primitives as LogoMarquee /
          ChipMarquee) replacing the static wrapped chip row; duplicate
          list aria-hidden, freezes under reduced motion. */}
      <section className="bg-paper-2 px-6 py-16 text-center sm:px-10">
        <Reveal>
          <h2 className="text-display text-display-4 text-[36px] text-ink sm:text-[44px]">
            {/* PLACEHOLDER heading */}
            Live on real brands
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <div className="mask-ticker relative w-full overflow-hidden py-2">
            <div className="animate-ticker flex w-max items-center">
              {[...BRANDS, ...BRANDS].map((brand, i) => (
                <div
                  key={`${brand}-${i}`}
                  aria-hidden={i >= BRANDS.length}
                  className="flex shrink-0 items-center px-3"
                >
                  <span className="inline-flex items-center rounded-badge border border-black/[0.08] bg-white px-5 py-3 font-sans text-[15px] font-semibold whitespace-nowrap text-ink shadow-chip">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 6. CTA — dark CtaPill closing band, scroll-revealed like every
          other page's closing band (rhythm normalized to pb-20) */}
      <section className="bg-white px-6 pb-20 sm:px-10">
        <Reveal className="mx-auto flex max-w-[1091px] flex-col items-center gap-4 text-center">
          <h2 className="text-display text-display-4 text-[36px] text-ink sm:text-[44px]">
            {/* PLACEHOLDER heading */}
            See the assistant on your store
          </h2>
          <p className="max-w-[720px] font-sans text-lg leading-[1.6] text-ink/70">
            {/* PLACEHOLDER body */}
            Book a demo and watch the assistant answer, recommend, and convert
            on your own catalog.
          </p>
          <div className="mt-6 flex justify-center">
            <CtaPill label="Book a demo" variant="dark" />
          </div>
        </Reveal>
      </section>
    </>
  );
}