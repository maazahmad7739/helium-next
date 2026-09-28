import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import {
  TopBannerBadge,
  CtaPill,
  TrustBar,
  PurpleHeroBand,
  CaseStudySplit,
} from "@/components/sections";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { ScrollStageCard } from "@/components/audience-signals/ScrollStageCard";

export const metadata: Metadata = {
  title: "Storefront audience signals for ads",
  description:
    "Helium audience signals use storefront behavior to improve ad audiences. For D2C brands running paid traffic.",
  alternates: { canonical: `${SITE.url}/audience-signals` },
};

/* Live checkmark icon mask (framer-9NniK, 18x18 viewBox). */
const CHECK_MASK =
  'url(\'data:image/svg+xml,<svg display="block" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M 14.4 0 L 4.5 9.9 L 0 5.4" fill="transparent" stroke-width="2.7" stroke="black" transform="translate(1.8 3.6)"/></svg>\')';

const CARDS = [
  "Whether someone is exploring or just clicking around",
  "Whether their behaviour shows readiness or hesitation",
  "Whether the visit aligns with your category demand patterns",
];

/* Live "Possibilities Section" card: left-aligned, purple check icon,
   card 1 has a faint white/12% border (invisible on white bg),
   cards 2-3 show a visible 1.5px black/6% border. */
function RecognisesCard({ text, index }: { text: string; index: number }) {
  return (
    <div
      className="flex w-full flex-col items-start justify-start gap-10 rounded-[16px] pt-10 pr-8 pb-6 pl-8"
      style={
        index === 0
          ? { border: "1px solid rgba(255, 255, 255, 0.12)" }
          : { border: "1.5px solid rgba(70, 72, 77, 0.06)" }
      }
    >
      <span
        aria-hidden
        className="block aspect-square w-[18px] bg-[rgb(86,3,192)]"
        style={{
          WebkitMaskImage: CHECK_MASK,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "contain",
          maskImage: CHECK_MASK,
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "contain",
        }}
      />
      <div className="flex w-full flex-col items-start gap-3">
        <p className="[font-family:var(--font-inter)] text-[18px] leading-[1.7] font-semibold tracking-[-0.3px] text-[#46484d]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function AudienceSignalsPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="-mt-[120px] bg-paper-2 px-6 pt-[182px] pb-2 text-center sm:px-10">
        <TopBannerBadge
          label="Featured in Top AI Startups - TechCrunch, Forbes"
          showLogos={false}
        />
        <h1 className="text-display mx-auto mt-6 max-w-[640px] text-[44px] leading-[1.08] text-grape sm:text-[60px]">
          Turn Every Visit Into a Smarter Ad Decision
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CtaPill label="Improve ROAS by 20% in 2 weeks" variant="dark" size="sm" />
          <CtaPill
            label="Download Shopify App"
            variant="gradient"
            size="sm"
            href="https://apps.shopify.com/helium-marketing-efficiency"
            external
            className="bg-white text-plum shadow-card"
          />
        </div>
        <p className="mx-auto mt-8 max-w-[720px] font-sans text-lg leading-[1.6] text-ink/70">
          Tag every session in real time with AI-driven signals so your ad platforms
          know exactly who&apos;s worth spending on.
        </p>
      </section>

      {/* 2. TRUST BAR */}
      <TrustBar label="Trusted by 100+ fast-growing ecommerce brands" className="bg-paper-2">
        <LogoMarquee />
      </TrustBar>

      {/* 3. PURPLE BAND - "Audience Signals" hero (live framer-15fkt80) */}
      <PurpleHeroBand
        layout="overlay"
        maxW={1100}
        gap="10px"
        title="Audience Signals"
        lede="Know who is worth your money before the next $ leaves your ad account."
        media={
          <img
            src="/content/ad-stack/BHgHhHvRh05F8Iygtao1XVbQ3o.png"
            alt="Retargeting audience with conversion likelihood and audience filters"
            width={1372}
            height={1157}
            loading="lazy"
            className="relative w-full rounded-[20px] object-cover shadow-card lg:top-[129px]"
          />
        }
      >
        A real-time intelligence engine + an{" "}
        <span className="font-semibold text-white">Audience Builder</span>.
      </PurpleHeroBand>

      {/* 4. CAPTURE & SYNTHESISE — sticky card swaps through 3 stages on scroll */}
      <ScrollStageCard className="bg-paper-2 px-6 pt-6 pb-14 sm:px-10" />

      {/* 5. THE INTELLIGENCE IT ADDS ("Possibilities Section" on live) */}
      <section className="bg-white px-5 pt-11 sm:px-[30px] sm:pt-[45px] lg:px-[30px] lg:pt-[120px]">
        {/* Full-height vertical hairlines (live "Line Wrap", desktop only) */}
        <div className="relative mx-auto max-w-[1300px]">
          <span
            aria-hidden
            className="absolute top-0 bottom-0 left-[50px] hidden w-0.5 bg-[#6c6f760f] lg:block"
          />
          <span
            aria-hidden
            className="absolute top-0 right-[50px] bottom-0 hidden w-0.5 bg-[#6c6f760f] lg:block"
          />
          <div className="relative z-[1]">
            {/* < lg: image first, then cards, then centered caption */}
            <div className="flex flex-col items-center gap-10 lg:hidden">
              <div className="mx-auto flex w-full max-w-[745px] flex-col items-center gap-4 text-center">
                <h2 className="font-geist text-[44px] leading-[1.2] font-medium tracking-[-3px] text-[#181818]">
                  The intelligence it adds
                </h2>
                <div className="max-w-[380px] [font-family:var(--font-inter)] text-base leading-[1.7] text-[#46484d] opacity-80">
                  <p>Audience Signals understands intent meaning.</p>
                  <p>It recognises:</p>
                </div>
              </div>
              <div className="w-full rounded-[20px] bg-[#fafafa] p-3 sm:rounded-[32px] sm:p-3">
                <img
                  src="/content/ad-stack/rHsgYNrGV2nQEPqCx4hfCL9iMIM.png"
                  alt="Audience Signals dashboard"
                  width={1728}
                  height={1117}
                  loading="lazy"
                  className="w-full rounded-[10px] object-cover sm:rounded-[20px]"
                />
              </div>
              <div className="grid w-full gap-6 sm:grid-cols-2">
                {CARDS.map((text, i) => (
                  <RecognisesCard key={text} text={text} index={i} />
                ))}
              </div>
              <p className="max-w-[518px] text-center font-micro text-xl leading-[1.5] font-medium text-[#2d025e]">
                It behaves like a performance analyst who can evaluate intent in real
                time.
              </p>
            </div>

            {/* â‰¥ lg (live desktop variant): cards, image, left-aligned caption */}
            <div className="mx-auto hidden max-w-[1060px] flex-col gap-[26px] lg:flex lg:pt-[56px]">
              <div className="mx-auto flex w-full max-w-[518px] flex-col items-center gap-4 text-center">
                <h2 className="font-geist text-[44px] leading-[1.2] font-medium tracking-[-3px] text-[#181818]">
                  The intelligence it adds
                </h2>
                <div className="max-w-[380px] [font-family:var(--font-inter)] text-base leading-[1.7] text-[#46484d] opacity-80">
                  <p>Audience Signals understands intent meaning.</p>
                  <p>It recognises:</p>
                </div>
              </div>
              <div className="grid w-full grid-cols-3 gap-6">
                {CARDS.map((text, i) => (
                  <RecognisesCard key={text} text={text} index={i} />
                ))}
              </div>
              <div className="mx-auto w-full max-w-[875px] rounded-[32px] bg-[#fafafa] p-3">
                <img
                  src="/content/ad-stack/rHsgYNrGV2nQEPqCx4hfCL9iMIM.png"
                  alt="Audience Signals dashboard"
                  width={1728}
                  height={1117}
                  loading="lazy"
                  className="w-full rounded-[20px] object-cover"
                />
              </div>
              <p className="mx-auto max-w-[642px] text-center font-micro text-xl leading-[1.5] font-medium text-[#2d025e]">
                It behaves like a performance analyst who can evaluate intent in real
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CHOSEN BY 100+ D2C BRANDS */}
      <CaseStudySplit
        className="lg:pt-[88px]"
        heading="Chosen by 100+ D2C brands"
        brandSrc="/content/ad-stack/pPJ9BUMa9y9tJEc9YT8J1BT6w.webp"
        quote="We hit ROAS ~ 10 on our retargeting ads in just 2 days. I'm still not sure how it works but it's been 3 months and we've already achieved our yearly growth goals."
        name="Viren Lathiya"
        role="Co-founder at Sudathi"
        stats={[
          { value: "41%", label: "Revenue boost per year" },
          { value: "30-35%", label: "Reduction in CAC" },
        ]}
        photoSrc="/content/ad-stack/v0KrPOVp9cmrKOpBwOLEdmwzmZE.jpg"
        ctaLabel="Get in Touch"
      />
    </>
  );
}
