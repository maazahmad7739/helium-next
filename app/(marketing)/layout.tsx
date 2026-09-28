import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Scripts } from "@/components/Scripts";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Scripts />
    </div>
  );
}