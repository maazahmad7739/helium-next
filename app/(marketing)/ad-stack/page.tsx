import type { Metadata } from "next";
import { AD_STACK } from "@/lib/adstack-data";
import { SITE } from "@/lib/site";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { HeroReveal } from "@/components/motion/HeroReveal";
import { Reveal } from "@/components/motion/Reveal";
import { EmailCapture } from "@/components/EmailCapture";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import {
  TopBannerBadge,
  HeroIntroCards,
  TrustBar,
  KnewExactlySection,
  PillarFeatureCard,
  PillarStack,
  PillarItem,
  MetricBanner,
  OutcomesBand,
  IntelligenceShowcase,
  PricingSection,
  CtaPill,
  FaqAccordionSection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: AD_STACK.meta.title,
  description: AD_STACK.meta.description,
  alternates: { canonical: `${SITE.url}${AD_STACK.meta.canonical}` },
};

/* Live chip icons (verbatim paths from the reference site) */
function UserConnectIcon() {
  return (
    <svg aria-hidden width="17" height="18" viewBox="0 0 17 18" fill="none" className="shrink-0">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.1383 9C9.31807 9 10.3758 9.11339 11.3073 9.33722C11.3316 9.34304 11.3644 9.35466 11.4021 9.37136L11.4414 9.38974C11.6488 9.47843 11.8231 9.64432 11.9173 9.86794C12.1104 10.3263 11.8935 10.8537 11.433 11.0459C10.7998 11.3101 10.2697 11.7698 9.91862 12.375C9.13944 13.7182 9.46165 15.4206 10.656 16.3893C11.0431 16.7032 11.1115 17.2836 10.796 17.669C10.6673 17.8262 10.4946 17.9266 10.3089 17.9691L10.2287 17.9838C10.182 17.9944 10.1227 18 10.0499 18H1.10405C0.60072 18 0.175033 17.6294 0.108082 17.133C-0.606652 11.8335 2.24067 9 8.1383 9ZM14.0612 11.025C14.4357 11.025 14.7394 11.3272 14.7394 11.7V13.275H16.3218C16.6964 13.275 17 13.5772 17 13.95C17 14.3228 16.6964 14.625 16.3218 14.625H14.7394V16.2C14.7394 16.5728 14.4357 16.875 14.0612 16.875C13.6866 16.875 13.383 16.5728 13.383 16.2V14.625H11.8005C11.426 14.625 11.1223 14.3228 11.1223 13.95C11.1223 13.5772 11.426 13.275 11.8005 13.275H13.383V11.7C13.383 11.3272 13.6866 11.025 14.0612 11.025ZM8.1383 0C10.3582 0 12.1579 1.79086 12.1579 4C12.1579 6.20914 10.3582 8 8.1383 8C5.91835 8 4.11873 6.20914 4.11873 4C4.11873 1.79086 5.91835 0 8.1383 0Z"
        fill="white"
      />
    </svg>
  );
}

function GridViewIcon() {
  return (
    <svg aria-hidden width="21" height="21" viewBox="0 0 21 21" fill="none" className="shrink-0">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3.675C0 1.64535 1.64535 0 3.675 0H6.3C8.32965 0 9.975 1.64535 9.975 3.675V6.3C9.975 8.32965 8.32965 9.975 6.3 9.975H3.675C1.64535 9.975 0 8.32965 0 6.3V3.675ZM3.675 2.1C2.80515 2.1 2.1 2.80515 2.1 3.675V6.3C2.1 7.16985 2.80515 7.875 3.675 7.875H6.3C7.16985 7.875 7.875 7.16985 7.875 6.3V3.675C7.875 2.80515 7.16985 2.1 6.3 2.1H3.675Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14.7C0 12.6704 1.64535 11.025 3.675 11.025H6.3C8.32965 11.025 9.975 12.6704 9.975 14.7V17.325C9.975 19.3546 8.32965 21 6.3 21H3.675C1.64535 21 0 19.3546 0 17.325V14.7ZM3.675 13.125C2.80515 13.125 2.1 13.8302 2.1 14.7V17.325C2.1 18.1948 2.80515 18.9 3.675 18.9H6.3C7.16985 7.875 7.875 18.1948 7.875 17.325V14.7C7.875 13.8302 7.16985 13.125 6.3 13.125H3.675Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.025 3.675C11.025 1.64535 12.6704 0 14.7 0H17.325C19.3546 0 21 1.64535 21 3.675V6.3C21 8.32965 19.3546 9.975 17.325 9.975H14.7C12.6704 9.975 11.025 8.32965 11.025 6.3V3.675ZM14.7 2.1C13.8302 2.1 13.125 2.80515 13.125 3.675V6.3C13.125 7.16985 13.8302 7.875 14.7 7.875H17.325C18.1948 7.875 18.9 7.16985 18.9 6.3V3.675C18.9 2.80515 18.1948 2.1 17.325 2.1H14.7Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.025 14.7C11.025 12.6704 12.6704 11.025 14.7 11.025H17.325C19.3546 11.025 21 12.6704 21 14.7V17.325C21 19.3546 19.3546 21 17.325 21H14.7C12.6704 21 11.025 19.3546 11.025 17.325V14.7ZM14.7 13.125C13.8302 13.125 13.125 13.8302 13.125 14.7V17.325C13.125 18.1948 13.8302 18.9 14.7 18.9H17.325C18.1948 18.9 18.9 18.1948 18.9 17.325V14.7C18.9 13.8302 18.1948 13.125 17.325 13.125H14.7Z"
        fill="white"
      />
    </svg>
  );
}

function RowInsertIcon() {
  return (
    <svg aria-hidden width="19" height="17" viewBox="0 0 19 17" fill="none" className="shrink-0">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8715 8.81319V8.37363C18.8715 7.40258 18.1037 6.61538 17.1567 6.61538H5.47785C4.53077 6.61538 3.763 7.40258 3.763 8.37363V8.81319C3.763 9.78424 4.53077 10.5714 5.47785 10.5714H17.1567C18.1037 10.5714 18.8715 9.78424 18.8715 8.81319ZM18.8704 14.5824V15.022C18.8704 16.1144 18.0067 17 16.9412 17H6.97728C5.91181 17 5.04808 16.1144 5.04808 15.022V14.5824C5.04808 13.49 5.91181 12.6044 6.97728 12.6044H16.9412C18.0067 12.6044 18.8704 13.49 18.8704 14.5824ZM17.5843 14.5824C17.5843 14.2183 17.2964 13.9231 16.9412 13.9231H6.97728C6.62213 13.9231 6.33421 14.2183 6.33421 14.5824V15.022C6.33421 15.3861 6.62213 15.6813 6.97728 15.6813H16.9412C17.2964 15.6813 17.5843 15.3861 17.5843 15.022V14.5824ZM19 3.15385V2.71429C19 1.74324 18.2322 0.956044 17.2852 0.956044H5.60635C4.65926 0.956044 3.8915 1.74324 3.8915 2.71429V3.15385C3.8915 4.1249 4.65926 4.91209 5.60635 4.91209H17.2852C18.2322 4.91209 19 4.1249 19 3.15385ZM2.54047 10.7692V0.659341C2.54047 0.295197 2.25256 0 1.8974 0C1.54225 0 1.25434 0.295197 1.25434 0.659341V10.7692C1.25434 11.1334 1.54225 11.4286 1.8974 11.4286C2.25256 11.4286 2.54047 11.1334 2.54047 10.7692ZM3.76194 14.8407C3.76194 14.5363 3.52133 14.2896 3.22452 14.2896H2.41839V13.4631C2.41839 13.1588 2.17778 12.9121 1.88097 12.9121C1.58416 12.9121 1.34355 13.1588 1.34355 13.4631V14.2896H0.537421C0.240612 14.2896 0 14.5363 0 14.8407C0 15.145 0.240612 15.3917 0.537421 15.3917H1.34355V16.2182C1.34355 16.5225 1.58416 16.7692 1.88097 16.7692C2.17778 16.7692 2.41839 16.5225 2.41839 16.2182V15.3917H3.22452C3.52133 15.3917 3.76194 15.145 3.76194 14.8407Z"
        fill="white"
      />
    </svg>
  );
}

export default function AdStackPage() {
  return (
    <>
      <FaqJsonLd items={AD_STACK.faqs} />

      {/* 1. HERO â€” badge + H1 + email capture + accent sub-headline (order per live).
          -mt/pt pair slides the page bg up behind the transparent 120px navbar
          (live: nav = blur only, page bg shows through). */}
      <section className="relative -mt-[120px] overflow-x-clip bg-paper-2 px-6 pt-[182px] pb-16 sm:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute top-[-200px] left-1/2 h-[500px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-[110px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(164,150,235,0.45), rgba(216,190,244,0.3), transparent)",
          }}
        />
        <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
          <HeroReveal delay={0.1}>
            <TopBannerBadge label={AD_STACK.topBanner} />
          </HeroReveal>
          <HeroReveal delay={0.2}>
            <h1 className="text-display mt-6 text-[44px] leading-[1.08] text-grape sm:text-[68px]">
              {AD_STACK.hero.h1a}
              <br />
              <span className="text-plum">{AD_STACK.hero.h1b}</span>
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.5}>
            <EmailCapture cta={AD_STACK.hero.cta} />
          </HeroReveal>
          <HeroReveal delay={0.9}>
            <p className="mt-10 font-sans text-[28px] leading-[1.35] font-medium text-grape-soft sm:text-[36px]">
              {AD_STACK.hero.bodyA}{" "}
              <span className="text-plum">{AD_STACK.hero.bodyAccent}</span>
              <br />
              {AD_STACK.hero.bodyB}
            </p>
          </HeroReveal>
        </div>
      </section>

      {/* 2. HERO INTRO CARDS — Catalog Optimization / Audience Signals / Attribution.
            Whole-card image links (hover scales up); pillar pages built later. */}
      <section className="bg-paper-2 pb-16">
        <HeroIntroCards
          cards={[
            {
              title: "Catalog Optimization",
              href: "/catalog-optimization",
              image: {
                src: "/content/ad-stack/hiI4wwC6nlFrBSs88apxz1KMQpQ.png",
                alt: "Catalog Optimization card",
                width: 968,
                height: 1277,
              },
            },
            {
              title: "Audience Signals",
              href: "/audience-signals",
              image: {
                src: "/content/ad-stack/hdFi7ifSwQuJaS6DXxE8eRc9y88.png",
                alt: "Audience Signals card",
                width: 1127,
                height: 1460,
              },
            },
            {
              title: "Attribution",
              href: "/attribution",
              image: {
                src: "/content/ad-stack/YtZk9Dkyg1sLPfBanNrnqgMm4.png",
                alt: "Attribution card",
                width: 968,
                height: 1277,
              },
            },
          ]}
        />
      </section>

      {/* 3. TRUSTED BY marquee */}
      <TrustBar label={AD_STACK.trustedBy} className="bg-paper-2">
        <LogoMarquee />
      </TrustBar>

      {/* 4. SETUP HINT + VIDEO â€” 2-min tutorial, 16:9 rounded frame with native controls (live behavior) */}
      <SectionSetupHint setupHint={AD_STACK.setupHint} />
      <section className="bg-paper-2 px-6 pb-20 sm:px-10">
        <div className="mx-auto max-w-[960px]">
          <div
            className="relative isolate overflow-hidden rounded-[10px]"
            style={{ aspectRatio: "16 / 9", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
          >
            <video
              src={AD_STACK.heroVideo}
              poster="/content/ad-stack/xypaJJxP3Ux6gRhNuiae2v6ng.png"
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. WHAT IF YOU KNEW EXACTLY â€” bracket-connected chips (was missing) */}
      <KnewExactlySection
        titleBefore={AD_STACK.knewExactly.titleBefore}
        titleAccent={AD_STACK.knewExactly.titleAccent}
        chips={AD_STACK.knewExactly.chips}
        caption={AD_STACK.knewExactly.caption}
        tightBottom
      />

      {/* 6. SMART AD STACK INTRO */}
      <section className="bg-white px-6 pt-[56px] pb-[29px] sm:px-10">
        <Reveal y={60}>
          <h2 className="adstack-title text-center font-display">
            {AD_STACK.eyebrow}
          </h2>
          <p className="adstack-tagline text-center font-sans">
            {AD_STACK.tagline}
          </p>
        </Reveal>
      </section>

      {/* 7â€“9. PILLARS â€” real router links to /audience-signals, /catalog-optimization, /attribution */}
      <section className="bg-white px-6 pb-16 sm:px-10">
        <PillarStack className="mx-auto max-w-[1091px]">
          <PillarItem>
            <PillarFeatureCard
              chipLabel={AD_STACK.pillars[0].chip}
              chipIcon={<UserConnectIcon />}
              href="/audience-signals"
              title={AD_STACK.pillars[0].heading}
              body={AD_STACK.pillars[0].body}
              points={AD_STACK.pillars[0].points}
              image={{ src: AD_STACK.pillarVisuals.audience, width: 1024, height: 864 }}
            />
          </PillarItem>
          <PillarItem>
            <PillarFeatureCard
              chipLabel={AD_STACK.pillars[1].chip}
              chipIcon={<GridViewIcon />}
              href="/catalog-optimization"
              title="Your high-performers, automatically front and center."
              body={AD_STACK.pillars[1].body}
              points={AD_STACK.pillars[1].points}
              image={{ src: AD_STACK.pillarVisuals.catalog, width: 1024, height: 974 }}
              imageFirst
            />
          </PillarItem>
          <PillarItem>
            <PillarFeatureCard
              chipLabel={AD_STACK.pillars[2].chip}
              chipIcon={<RowInsertIcon />}
              href="/attribution"
              title={AD_STACK.pillars[2].heading}
              body={AD_STACK.pillars[2].body}
              points={AD_STACK.pillars[2].points}
              image={{
                src: AD_STACK.pillarVisuals.attribution,
                width: 1024,
                height: 982,
                alt: "Attribution dashboard â€” revenue source, revenue, conversion likelihood and attributed revenue by channel",
              }}
            />
          </PillarItem>
        </PillarStack>
      </section>

      {/* 10. METRIC BANNER — gradient-edged dark pill with blur glow, links to /contact (live) */}
      <section className="bg-white px-6 pb-16 sm:px-10">
        <MetricBanner label={AD_STACK.metricBanner} href="/contact" />
      </section>

      {/* 11. OUTCOMES â€” purple gradient band, dark cards, animated count-up */}
      <OutcomesBand
        heading={AD_STACK.outcomes.heading}
        items={AD_STACK.outcomes.items.map((item) => ({
          value: item.value,
          statLabel: item.metricLabel,
          statCaption: item.metricCaption,
          brand: { src: item.brand },
          quote: item.quote,
          name: item.name,
          role: item.role,
          avatar: { src: item.avatar },
        }))}
      />

      {/* 12. INTELLIGENCE LAYER â€” sticky tab list + scrolling content */}
      <IntelligenceShowcase
        heading={AD_STACK.intelligence.heading}
        steps={AD_STACK.intelligence.steps.map((step, i) => ({
          tabLabel: step.title.replace(/\.$/, ""),
          title: step.title,
          body: step.body,
          image: { src: AD_STACK.intelVisuals[i], width: 1917, height: 1368 },
        }))}
      />

      {/* 13. PRICING â€” purple Kickstart card + white Custom Plan card */}
      <PricingSection
        eyebrow={AD_STACK.pricing.eyebrow}
        heading={AD_STACK.pricing.heading}
        plan={AD_STACK.pricing.plan}
        per={AD_STACK.pricing.per}
        captions={TIER_CAPTIONS}
        ctaLabel={AD_STACK.pricing.cta}
        custom={AD_STACK.pricing.custom}
      />

      {/* 14. PILOT RUN â€” black CTA on white with catalog dashboard shot */}
      <section className="bg-white px-6 pb-16 sm:px-10">
        <div className="mx-auto max-w-[1091px]">
          <img
            src={AD_STACK.pricingVisual}
            alt="Catalog manager dashboard"
            loading="lazy"
            className="mx-auto w-full max-w-[900px] rounded-card shadow-card"
          />
          <div className="mt-12 flex flex-col items-center gap-5 text-center">
            <h2 className="text-display text-[32px] text-ink sm:text-[40px]">
              {AD_STACK.pilot.heading}
            </h2>
            <p className="max-w-[480px] font-sans text-lg text-ink/75">{AD_STACK.pilot.body}</p>
            <CtaPill label={AD_STACK.pilot.cta} variant="dark" />
          </div>
        </div>
      </section>

      {/* 15. FAQ â€” two-column layout: heading left, accordion right (live pattern) */}
      <section className="bg-white px-6 pb-20 sm:px-10">
        <div className="mx-auto grid max-w-[1091px] gap-10 lg:grid-cols-[minmax(280px,420px)_1fr]">
          <div>
            <span className="inline-flex items-center rounded-badge bg-ink px-5 py-2.5 font-sans text-sm font-medium text-white">
              FAQ
            </span>
            <h2 className="text-display text-display-115 mt-4 text-[36px] text-ink sm:text-[44px]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 font-sans text-base text-ink/60">
              Get answers to common questions here
            </p>
          </div>
          <FaqAccordionSection items={AD_STACK.faqs} />
        </div>
      </section>
    </>
  );
}

const TIER_CAPTIONS = [
  "Monthly traffic upto 50K",
  "Monthly traffic upto 150K",
  "Monthly traffic upto 500K",
  "Monthly traffic upto 1M",
  "Monthly traffic 1M+",
] as const;

function SectionSetupHint({ setupHint }: { setupHint: string }) {
  const [lead, rest] = setupHint.split("Â·");
  return (
    <p className="bg-paper-2 px-6 pb-6 text-center font-micro text-sm font-medium tracking-[0.1px] text-grape-soft sm:px-10">
      <em>{lead?.trim()} Â· </em>
      <em className="font-semibold not-italic">{rest?.trim()}</em>
    </p>
  );
}