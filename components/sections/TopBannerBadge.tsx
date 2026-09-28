import Image from "next/image";

/**
 * TopBannerBadge — live hero badge: white pill with green dot +
 * "Featured among top AI startups by Forbes & TechCrunch", with the
 * floating Forbes (F) and TechCrunch (TC) logo tiles above-right.
 * Replaces the plain-text banner (Step 1 discrepancy #4).
 *
 * Reused by: /ad-stack, /audience-signals, /attribution
 * `showLogos` — audience-signals live page has no floating tiles.
 */
export function TopBannerBadge({
  label,
  showLogos = true,
}: {
  label: string;
  showLogos?: boolean;
}) {
  return (
    <div className="relative mx-auto w-fit">
      {/* floating logo tiles (live: 34px rounded-8 with 1px shadow, top:-36/-29) */}
      {showLogos && (
        <span className="absolute -top-9 left-[58%] flex items-end gap-2">
          <Image
            src="/content/ad-stack/X0GSzIUG47TunHrMoqhR5xNCXEg.jpeg"
            alt="Forbes"
            width={34}
            height={34}
            className="h-[34px] w-[34px] rounded-[8px] object-cover shadow-[0_1px_10px_rgba(0,0,0,0.1)]"
          />
          <Image
            src="/content/ad-stack/ZPO7xXIffE8ZRPH22RdVmBjwmU.png"
            alt="TechCrunch"
            width={34}
            height={34}
            className="h-[34px] w-[34px] rounded-[8px] object-cover shadow-[0_1px_10px_rgba(0,0,0,0.1)]"
          />
        </span>
      )}
      <span className="inline-flex items-center gap-2.5 rounded-badge border border-black/[0.08] bg-white px-5 py-3 shadow-chip">
        <span aria-hidden className="h-3 w-3 shrink-0 rounded-full bg-brand" />
        <span className="font-sans text-[15px] text-ink">{label}</span>
      </span>
    </div>
  );
}