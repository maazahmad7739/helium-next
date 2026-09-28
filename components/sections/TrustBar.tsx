/**
 * TrustBar — live "Trusted by 100+ fast-growing ecommerce brands" line
 * + logo marquee (shared by the three product pages on the live site).
 *
 * Reused by: /ad-stack, /audience-signals, /attribution
 */
export function TrustBar({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  /** section background — transparent by default so the page bg shows through */
  className?: string;
}) {
  return (
    <section className={`py-10 ${className ?? ""}`}>
      <p className="text-center font-sans text-lg text-plum">{label}</p>
      <div className="mt-8">{children}</div>
    </section>
  );
}