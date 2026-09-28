import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

/**
 * PurpleHeroBand — the live purple product hero band (audience-signals
 * `#main … > div.framer-15fkt80 > section.framer-1h2e9nl`, attribution
 * `framer-17zy7po > section.framer-1yx1bvi`). Verbatim specs:
 *
 *   wrapper  : 10px page gutter, band radius 25px
 *   gradient : linear-gradient(#29035cfc 0%, #5401c0cc 50%, #e28cffcc 90%, #e28cff66 125%)
 *   paddings : 150/30/120 desktop · 160/30/80 tablet · 120/20/60 mobile
 *   container: row (max 1060), gap 10 (audience) / 86 (attribution),
 *              column + centered on <1200px
 *   copy     : max-w 476; Geist 500 h1 64px/-3.5px desktop, 54px centered
 *              mobile; Inter 23px semibold lede + 17px secondary
 *   media    : "overlay" = absolute right-bleed (audience-signals AS image)
 *              "inline"  = in-flow 538px column (attribution)
 *   CTA      : rainbow-gradient pill with blurred glow bar
 */
export function PurpleHeroBand({
  title,
  lede,
  children,
  media,
  floatingMedia,
  cta,
  href = "/contact",
  layout = "inline",
  /** desktop row gap (live: 86 attribution, 10 audience-signals) */
  gap = "86px",
  /** container max-width (live: 1060 attribution, 1100 audience-signals) */
  maxW = 1060,
  className,
}: {
  title: ReactNode;
  /** Inter SemiBold 23px line ("Know who is worth your money…") */
  lede?: ReactNode;
  /** secondary 17px copy ("A real-time intelligence engine + …") */
  children?: ReactNode;
  /** hero media (dashboard card etc.) */
  media: ReactNode;
  /** optional badge pinned to the media's top-right (overlay layout) */
  floatingMedia?: ReactNode;
  /** replaces the default "+20% ROAS in 30 days" rainbow CTA */
  cta?: ReactNode;
  href?: string;
  /** overlay = absolute right-bleed media; inline = in-flow column */
  layout?: "overlay" | "inline";
  gap?: string;
  maxW?: number;
  className?: string;
}) {
  return (
    <section className="p-2.5">
      <div
          className={`relative mx-auto min-h-[800px] overflow-visible rounded-[25px] bg-[linear-gradient(180deg,#29035cfc_0%,#5401c0cc_50%,#e28cffcc_90%,#e28cff66_125%)] px-5 pb-[60px] pt-[120px] max-[1199px]:min-h-[811px] max-[1199px]:pb-20 max-[1199px]:pt-40 lg:min-h-[620px] lg:pb-[120px] lg:pt-[150px] ${className ?? ""}`}
      >
        <div
          className="relative z-[2] mx-auto flex h-full flex-col items-center justify-center gap-10 lg:flex-row lg:items-center lg:justify-start lg:[gap:var(--hero-gap)]"
          style={{ maxWidth: maxW, ["--hero-gap" as string]: gap }}
        >
          {/* Copy column — flex 1, max-w 476, left aligned (centered <768px) */}
          <Reveal
            y={60}
            className="w-full max-[767px]:order-0 lg:w-auto lg:max-w-[476px] lg:flex-[1_0_0]"
          >
            <div className="flex flex-col gap-4 lg:items-start">
              <div className="flex w-full flex-col gap-3 lg:items-start">
                <h1 className="text-center font-geist text-[54px] leading-[1.1] font-medium tracking-[-3.5px] text-white lg:text-left lg:text-[64px]">
                  {title}
                </h1>
                {lede && (
                  <p className="mx-auto max-w-[440px] text-center [font-family:var(--font-inter)] text-[17px] leading-[1.5] font-semibold text-white sm:text-[23px] lg:mx-0 lg:text-left">
                    {lede}
                  </p>
                )}
                {children && (
                  <div className="mx-auto max-w-[456px] text-center [font-family:var(--font-inter)] text-[17px] leading-[1.7] font-semibold text-white lg:mx-0 lg:text-left">
                    {children}
                  </div>
                )}
              </div>
              {/* Rainbow CTA (live gradient with blurred glow bar) */}
              {cta ?? (
                <a
                  href={href}
                  className="relative mx-auto mt-1 inline-flex min-h-[44px] items-center justify-center overflow-hidden rounded-full lg:mx-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgb(33,204,238) 0%, rgb(20,112,239) 33.28%, rgb(105,39,218) 68.47%, rgb(242,61,148) 100%)",
                  }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 left-[34.78%] h-6 w-[127px] -translate-x-1/2"
                    style={{
                      background:
                        "linear-gradient(90deg, rgb(33,204,238) 0%, rgb(20,112,239) 33.28%, rgb(105,39,218) 68.47%, rgb(242,61,148) 100%)",
                      filter: "blur(17px)",
                      borderRadius: 135,
                    }}
                  />
                  <span
                    className="relative rounded-full px-[22px] py-3 font-sans text-[14px] leading-[1.7] font-medium text-white"
                    style={{
                      background:
                        "linear-gradient(180deg, rgb(255,255,255) -51%, rgb(16,2,2) 18%, rgb(16,2,2) 132%)",
                    }}
                  >
                    +20% ROAS in 30 days
                  </span>
                </a>
              )}
            </div>
          </Reveal>

          {/* Media column — absolute right-bleed on desktop, stacked below <1200px */}
          <div
            className={
              layout === "overlay"
                ? "relative z-[1] flex w-full justify-center max-[1199px]:max-w-[497px] max-[767px]:max-w-[329px] lg:absolute lg:top-1/2 lg:right-[-24px] lg:w-auto lg:-translate-y-1/2 lg:justify-end"
                : "relative z-[1] flex w-full justify-center max-[767px]:max-w-[330px] lg:w-auto lg:justify-end"
            }
          >
            <div className="relative w-full max-w-[497px] max-[767px]:max-w-[329px] lg:w-[614px] lg:max-w-[614px]">
              {media}
              {floatingMedia && (
                <div className="absolute top-8 -right-4 hidden items-center gap-2 lg:flex">
                  {floatingMedia}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}