/**
 * Live /pulse "more features" double ticker (ref pulse3.md.txt):
 * two 48px rows scrolling in opposite directions —
 * top row travels left → right, bottom row right → left.
 * Verbatim live values: 60px chip gap, #d8dfe5 pill fill, #0e1c29
 * text, 228px pill radius, 12.5% / 87.5% edge mask.
 * Pure CSS translate3d loop (GPU only, no JS on the hot path);
 * duplicate lists are aria-hidden; both rows freeze under
 * prefers-reduced-motion.
 */

function TickerRow({
  items,
  reverse = false,
}: {
  items: readonly string[];
  reverse?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div className="mask-ticker-pulse w-full overflow-hidden py-[10px]">
      <div
        className={`flex w-max items-center ${
          reverse ? "animate-ticker-reverse" : "animate-ticker"
        }`}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="mr-[60px] flex h-12 shrink-0 items-center rounded-full bg-pulse-panel px-6 font-sans text-base font-medium whitespace-nowrap text-navy"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ChipMarquee({
  rows,
}: {
  rows: { top: readonly string[]; bottom: readonly string[] };
}) {
  return (
    <div className="flex w-full flex-col">
      {/* Live capture: top row carries a negative phase offset (left:-2228px)
          → it travels left → right; bottom row starts at 0 → right → left. */}
      <TickerRow items={rows.top} reverse />
      <TickerRow items={rows.bottom} />
    </div>
  );
}