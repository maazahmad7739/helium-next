import { MotionLink } from "@/components/motion/MotionLink";
import { CONTACT_URL } from "@/lib/site";

/**
 * Footer CTA card (live: footer "Card" — framer-13zfff0). Full-bleed:
 * card spans the viewport edge-to-edge and sits directly on the black
 * footer (no side padding, no gap below). Centered stack — title
 * (801px, Poppins 62px) → subtitle (600px, 20px light) → 52px gradient
 * pill with white arrow circle — all on a uniform 20px gap (live
 * "Heading" block framer-1nl9v0b gap). Card padding 79px 100px
 * (mobile 51px 20px 79px).
 */
export function FooterCta() {
  return (
    <section>
      <div className="flex w-full flex-col items-center gap-5 rounded-t-[20px] bg-[linear-gradient(180deg,#553687_0%,#000000_100%)] px-5 pt-[51px] pb-[79px] sm:px-[100px] sm:pt-[79px]">
        <h2 className="text-display max-w-[801px] text-center text-4xl text-white sm:text-[62px]">
          This is where conversions get easier.
        </h2>
        <p className="max-w-[600px] text-center text-xl leading-[1.3] tracking-[-0.01em] font-light text-white/80">
          Book a demo to see Helium adapt your store in real time.
        </p>
        <MotionLink
          href={CONTACT_URL}
          ariaLabel="Get Started"
          className="bg-cta inline-flex h-[52px] items-center justify-center gap-3 rounded-pill-cta py-[2px] pr-[2px] pl-5 font-sans text-lg font-medium text-white"
        >
          Get Started
          <span
            aria-hidden
            className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[linear-gradient(140deg,rgba(246,239,249,0.8)_0%,rgba(246,239,249,0.8)_100%)]"
          >
            <svg width="15" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75"
                stroke="#52329d"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </MotionLink>
      </div>
    </section>
  );
}