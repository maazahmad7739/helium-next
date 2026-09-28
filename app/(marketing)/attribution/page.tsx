import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import {
  TopBannerBadge,
  CtaPill,
  TrustBar,
  PurpleHeroBand,
  IconPointRow,
  QuoteStatRow,
  TouchpointTabs,
} from "@/components/sections";
import { Reveal } from "@/components/motion/Reveal";
import { LogoMarquee } from "@/components/home/LogoMarquee";

export const metadata: Metadata = {
  title: "Attribution — See what actually drove the sale | Helium",
  description:
    "Fix broken attribution by revealing which channel, campaign, audience, and SKU truly influenced revenue — no more last-click lies. +20% ROAS in 6 to 8 weeks.",
  alternates: { canonical: `${SITE.url}/attribution` },
};

export default function AttributionPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="-mt-[120px] bg-paper-2 px-6 pt-[182px] pb-16 text-center sm:px-10">
        <TopBannerBadge label="Featured among Top AI Startups - TechCrunch, Forbes" />
        <h1 className="text-display mx-auto mt-6 max-w-[820px] text-[44px] leading-[1.08] text-grape sm:text-[60px]">
          See What Actually Drove the Sale
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
          Fix broken attribution by revealing which channel, campaign, audience, and
          SKU truly influenced revenue no more last-click lies.
        </p>
      </section>

      {/* 2. TRUST BAR */}
      <TrustBar label="Trusted by 100+ fast-growing ecommerce brands" className="bg-paper-2">
        <LogoMarquee />
      </TrustBar>

      {/* 3. PURPLE BAND — title + attribution dashboard (live framer-17zy7po) */}
      <PurpleHeroBand
        layout="inline"
        title="Attribution"
        lede={
          <>
            See what really drives sales — without the heavy attribution
            bill.
          </>
        }
        media={
          <img
            src="/content/ad-stack/QRbqZis14ibhZ4gC74zOEbo4So.png"
            alt="Attribution dashboard — revenue source, revenue and attributed revenue by channel"
            width={1024}
            height={1024}
            className="w-full rounded-[20px] object-cover shadow-card lg:w-[538px]"
          />
        }
      >
        We fix the credit mess by showing which channel, campaign, audience,
        and SKU actually drove the sale.
      </PurpleHeroBand>

      {/* 4. YOUR STORE'S ATTRIBUTION LAYER */}
      <section className="bg-white px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[1091px] text-center">
          <h2 className="text-display text-display-4 text-[36px] text-ink sm:text-[44px]">
            Your Store&apos;s Attribution Layer
          </h2>
          <p className="mt-3 font-sans text-[15px] text-ink/70">
            Big-suite clarity Â· Shared brain with Signals + Catalog Â· Small-tool price
          </p>
          <div className="mt-10 overflow-hidden rounded-card bg-paper-2 p-6 shadow-card sm:p-12">
            <img
              src="/content/ad-stack/SGNNNlXp3bjQ7TMTOEFTEFRCog.png"
              alt="Campaign attribution dashboard with per-campaign attributed revenue"
              width={1737}
              height={1108}
              loading="lazy"
              className="w-full rounded-card object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. WHAT HELIUM ATTRIBUTION IS — 4-up icon row */}
      <section className="bg-white px-6 pb-16 sm:px-10">
        <div className="mx-auto max-w-[1091px]">
          <h2 className="text-display text-display-4 text-center text-[36px] text-ink sm:text-[44px]">
            What Helium Attribution is
          </h2>
          <p className="mt-3 text-center font-sans text-[15px] text-ink/70">
            A lean attribution layer that:
          </p>
          <Reveal className="mt-12">
            <IconPointRow
              points={[
                {
                  icon: <PersonAddIcon />,
                  text: (
                    <>
                      Runs on the same events and scores you already use for{" "}
                      <span className="font-semibold">Audience Signals</span> and{" "}
                      <span className="font-semibold">Catalog Optimisation</span>.
                    </>
                  ),
                },
                {
                  icon: <SlidersIcon />,
                  text: "Measures every touchpoint by how much it actually pushed the sale.",
                },
                {
                  icon: <CheckIcon />,
                  text: "Gives you the real story of every channel and campaign numbers you can finally trust.",
                },
                {
                  icon: <DollarIcon />,
                  text: "You get the power of an attribution suite, but at a fraction of the cost.",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* 6. TOUCHPOINT WEIGHTING + tabbed dashboard panel (live framer-7cl7o2) */}
      <TouchpointTabs
        title="We weigh every touchpoint by how much it actually changed the chance to buy, then give clean credit:"
        tabs={[
          {
            label: "By Channel and Campaign",
            image: "/content/ad-stack/QRbqZis14ibhZ4gC74zOEbo4So.png",
            alt: "Attribution dashboard — revenue and attributed revenue by channel",
          },
          {
            label: "By Audience and Creative",
            image: "/content/ad-stack/NSRoRHCI7hv1Hy6j96DPPtCIeuY.png",
            alt: "Attribution dashboard — attributed revenue by audience and creative",
          },
          {
            label: "By SKU and Product set",
            image: "/content/ad-stack/KpM2wo5kv1FgSa1i2Q5mpKH1Jns.png",
            alt: "Attribution dashboard — attributed revenue by SKU and product set",
          },
        ]}
      />

      {/* 7. RESULTS */}
      <section className="bg-white px-6 pb-16 sm:px-10">
        <div className="mx-auto max-w-[1091px]">
          <h2 className="text-display text-display-4 text-center text-[36px] text-ink sm:text-[44px]">
            Results
          </h2>
          <div className="mt-12">
            <QuoteStatRow
              summaryCards={[
                "See which touches, channels, and campaigns actually pushed the sale - with clear impact you can trust.",
                "Understand what truly drove the conversion, so you know exactly where your spend is working and where it's not.",
              ]}
              quote='"We stopped guessing what products to push. Helium turned our product feed into a performance engine - every ad now talks to the right shopper. The uplift in efficiency and ROAS speaks for itself."'
              name="Shobhit Agarwal"
              role="Ecommerce Lead, TCNS"
              avatarSrc="/content/ad-stack/Cq9nVGE8GeOYqBX2nwj2JWIXM.png"
              statValue="20%"
              statLabel={
                <>
                  ROAS lift in 6 to
                  <br />
                  8 weeks
                </>
              }
            />
          </div>
          <div className="mt-12 flex justify-center">
            <CtaPill label="See Your Real Drivers" variant="dark" />
          </div>
        </div>
      </section>
    </>
  );
}

function PersonAddIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="#6236ad" aria-hidden>
      <circle cx="14" cy="11" r="6" />
      <path d="M4 30c0-5.5 4.5-10 10-10s10 4.5 10 10v2H4v-2z" />
      <path d="M29 12v4h-3v-4h-4v-3h4V5h3v4h4v3h-4z" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#6236ad" strokeWidth="3" strokeLinecap="round" aria-hidden>
      <path d="M5 12h10M21 12h10M5 24h10M21 24h10" />
      <circle cx="18" cy="12" r="4" fill="#fff" />
      <circle cx="18" cy="24" r="4" fill="#fff" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden>
      <path d="M6 19l8 8L30 9" stroke="#6236ad" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="#6236ad" aria-hidden>
      <text x="18" y="27" textAnchor="middle" fontSize="28" fontWeight="700" fill="#6236ad" fontFamily="sans-serif">
        $
      </text>
    </svg>
  );
}