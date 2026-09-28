import { Reveal } from "@/components/motion/Reveal";

/**
 * MetricBanner - live "Better ROAS | Less waste | Faster scale" pill:
 * gradient rim (cyan→blue→purple→pink) with a blurred gradient glow
 * behind a dark pill; whole thing links to /contact on the live site.
 * Text is Inter Medium 12px, white.
 *
 * Reused by: /ad-stack, /attribution
 */
export function MetricBanner({
  label,
  href = "/contact",
}: {
  label: string;
  href?: string;
}) {
  return (
    <Reveal className="flex justify-center">
      <a
        href={href}
        className="group relative inline-flex items-center justify-center rounded-[100px] bg-catalog-cta p-[1.5px] transition-transform duration-300 hover:scale-[1.02]"
      >
        {/* blurred gradient glow behind (live: 17px blur, only bottom sliver visible) */}
        <span
          aria-hidden
          className="bg-catalog-cta pointer-events-none absolute -bottom-2 left-1/2 h-6 w-[127px] -translate-x-1/2 rounded-[135px] opacity-100 blur-[17px]"
        />
        <span
          className="relative inline-flex items-center justify-center rounded-[100px] px-[22px] py-3"
          style={{
            background: "linear-gradient(180deg, rgb(255,255,255) -51%, rgb(16,2,2) 18%, rgb(16,2,2) 132%)",
          }}
        >
          <span className="font-sans text-xs font-medium text-white">
            {label.split("  |  ").map((part, i) => (
              <span key={part}>
                {i > 0 && <span className="mx-2.5 text-white/70">|</span>}
                <span className={i === 0 ? "font-semibold" : undefined}>{part}</span>
              </span>
            ))}
          </span>
        </span>
      </a>
    </Reveal>
  );
}