import Image from "next/image";
import { MERCH } from "@/lib/merch-data";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * Live "Features" section: 6 bespoke cards in a 3×2 grid (534×480,
 * radius 32, border #EFF1F3, bg #FDFDFD, warm radial glow pinned to the
 * card bottom). Copy sits at the bottom (h3 24px Outfit + optional body
 * 15px Satoshi, #7D6161); visuals fill the upper area and are clipped by
 * the card with fade-out masks, exactly as on the live site.
 */
export function FeatureGrid() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10" id="features">
      <Reveal>
        <h2 className="text-center font-sans text-[40px] leading-[1.15] font-normal tracking-[-0.01em] text-ink sm:text-[52px]">
          {MERCH.features.heading}
        </h2>
      </Reveal>
      <RevealGroup
        className="mx-auto mt-16 grid max-w-[1080px] gap-3 lg:grid-cols-2"
        stagger={0.08}
      >
        {MERCH.features.items.map((item) => (
          <RevealItem
            key={item.title}
            className="relative flex h-[480px] flex-col justify-end overflow-hidden rounded-[32px] border border-[#EFF1F3] bg-[#FDFDFD]"
          >
            {/* warm radial glow pinned to card bottom (live BgBlur) */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(94% 69% at 50% 100%, #FFF4E0 0%, rgba(241,206,247,0) 100%)",
              }}
            />
            <FeatureVisual visual={item} />
            <div className="relative z-10 flex flex-col gap-2 p-8 pt-0">
              <h3 className="font-sans text-[24px] leading-[1.4] font-normal text-ink">
                {item.title}
              </h3>
              {"body" in item && item.body && (
                <p className="font-sans text-[15px] leading-[1.3] font-medium text-[#7D6161]">
                  {item.body}
                </p>
              )}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

type FeatureItem = (typeof MERCH.features.items)[number];

/** Bespoke per-card visuals, clipped by the card and fading out at the top. */
function FeatureVisual({ visual }: { visual: FeatureItem }) {
  switch (visual.visual) {
    case "mosaic":
      return (
        <div className="absolute inset-x-8 top-8 bottom-[168px] overflow-hidden">
          <div className="relative h-full w-full overflow-hidden rounded-[24px] shadow-soft">
            <Image
              src={visual.image!}
              alt={visual.title}
              fill
              sizes="(min-width: 1080px) 470px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      );
    case "heads":
      return (
        <div
          className="absolute inset-x-8 top-0 bottom-[120px]"
          style={{
            maskImage:
              "linear-gradient(180deg, black 53%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(180deg, black 53%, transparent 100%)",
          }}
        >
          {/* concentric rings */}
          <div
            aria-hidden
            className="absolute top-[68%] left-1/2 h-[313px] w-[313px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[7px] border-[#FFF4E0] opacity-60"
          />
          <div
            aria-hidden
            className="absolute top-[68%] left-1/2 h-[251px] w-[251px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#FFF4E0] opacity-40"
          />
          <div
            aria-hidden
            className="absolute top-[68%] left-1/2 h-[189px] w-[189px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-[#FFF4E0] opacity-20"
          />
          {/* orbiting avatars, 62px circles with 4px cream ring */}
          <Head
            src={visual.avatars![0]}
            className="top-[61%] left-[16.8%]"
          />
          <Head
            src={visual.avatars![1]}
            className="top-[28.9%] left-[26.8%]"
          />
          <Head
            src={visual.avatars![2]}
            className="top-[17.3%] left-[50%]"
          />
          <Head
            src={visual.avatars![3]}
            className="top-[28.9%] left-[73.2%]"
          />
          <Head
            src={visual.avatars![4]}
            className="top-[61%] left-[83.2%]"
          />
          {/* big center avatar, 192px */}
          <div className="absolute top-[68%] left-1/2 h-[192px] w-[192px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-[#FFF4E0]">
            <Image
              src={visual.bigAvatar!}
              alt=""
              fill
              sizes="192px"
              className="object-cover"
            />
          </div>
        </div>
      );
    case "metrics":
      return (
        <div
          className="absolute inset-x-0 top-0 bottom-[104px] px-8 pt-8"
          style={{
            maskImage: "linear-gradient(0deg, transparent 0%, black 46%)",
            WebkitMaskImage:
              "linear-gradient(0deg, transparent 0%, black 46%)",
          }}
        >
          <div className="flex h-full flex-col justify-center gap-2">
            {visual.stats!.map((s) => (
              <div
                key={s.label}
                className="flex w-full items-center justify-between gap-4 rounded-[244px] border border-[#EFF1F3] bg-white py-2 pr-2 pl-6"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-base leading-[1.3] font-medium text-[#3D0000]">
                    {s.label}
                  </span>
                  <span className="font-sans text-[13px] leading-[1.4] font-bold tracking-[0.04em] text-[#7D6161] uppercase">
                    {s.value}
                  </span>
                </div>
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <Image src={s.avatar} alt="" fill sizes="48px" className="object-cover" />
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    case "phones":
      return (
        <div
          className="absolute inset-x-0 top-0 bottom-[88px]"
          style={{
            maskImage:
              "linear-gradient(180deg, black 57%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(180deg, black 57%, transparent 100%)",
          }}
        >
          <div className="absolute top-9 left-[13%] w-[229px] -rotate-7">
            <IPhoneMockup src={visual.phones![0]} />
          </div>
          <div className="absolute top-4 left-[40%] w-[229px]">
            <IPhoneMockup src={visual.phones![1]} />
          </div>
          <div className="absolute top-11 left-[67%] w-[229px] rotate-12">
            <IPhoneMockup src={visual.phones![2]} />
          </div>
        </div>
      );
    case "attribution":
      return (
        <div className="absolute inset-x-8 top-6 bottom-[104px]">
          <div className="absolute top-[15%] left-0 h-[251px] w-[205px] -rotate-6 overflow-hidden rounded-[24px] shadow-soft">
            <Image
              src={visual.images![0]}
              alt=""
              fill
              sizes="205px"
              className="object-cover"
            />
          </div>
          <div className="absolute top-[15%] right-0 h-[177px] w-[267px] rotate-6 overflow-hidden rounded-[24px] shadow-soft">
            <Image
              src={visual.images![1]}
              alt=""
              fill
              sizes="267px"
              className="object-contain"
            />
          </div>
        </div>
      );
    case "drafts":
      return (
        <div className="absolute top-[50px] bottom-[104px] left-4 w-[calc(100%-32px)] space-y-3 opacity-90">
          {visual.drafts!.map((d, i) => (
            <div
              key={d.title}
              className="flex items-center gap-2.5 rounded-[24px] border border-[#EFF1F3] bg-[#FCFCFC]/85 p-3.5 pr-3 backdrop-blur-sm"
              style={{ opacity: 1 - i * 0.2 }}
            >
              <span className="relative h-[53px] w-[53px] shrink-0 overflow-hidden rounded-[8.5px]">
                <Image
                  src="/content/merchandising/WwqxGTzaDNicolH1m3eloAti8.png"
                  alt=""
                  fill
                  sizes="53px"
                  className="object-cover"
                />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="truncate font-sans text-[18px] leading-[1.3] font-medium text-[#3D0000]">
                    {d.title}
                  </p>
                  <span className="shrink-0 font-sans text-[15px] font-medium text-[#7D6161]">
                    Drafts
                  </span>
                </div>
                <p className="mt-0.5 font-sans text-[15px] font-medium text-[#7D6161]">
                  {d.meta}
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

/** 62px avatar with 4px cream ring (live FloatingHeads orbit items). */
function Head({ src, className }: { src: string; className: string }) {
  return (
    <div
      className={`absolute h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-[#FFF4E0] ${className}`}
    >
      <Image src={src} alt="" fill sizes="62px" className="object-cover" />
    </div>
  );
}

/** App screenshot inside the transparent-screen iPhone frame webp. */
function IPhoneMockup({ src }: { src: string }) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt=""
        width={413}
        height={893}
        loading="eager"
        className="w-[90%] rounded-[24px] object-cover"
      />
      <Image
        src="/content/merchandising/YlYIbfFEujexwgWABDzpsRlY.webp"
        alt=""
        width={722}
        height={1470}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}