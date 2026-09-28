import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gethelium.co"),
  title: {
    default:
      "Helium | AI Personalization for D2C eCommerce Growth",
    template: "%s | Helium",
  },
  description:
    "Increase conversion and AOV with AI merchandising, personalization, product discovery, recommendations, and search optimization for eCommerce brands. 30% higher conversion | 18% higher AOV | 20% better retention. Featured in Forbes and TechCrunch.",
  applicationName: "Helium",
  keywords: [
    "AI personalization",
    "eCommerce",
    "merchandising",
    "product discovery",
    "recommendations",
    "search optimization",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: "https://www.gethelium.co/",
    siteName: "Helium",
    title: "Helium | AI Personalization for D2C eCommerce Growth",
    description:
      "Increase conversion and AOV with AI merchandising, personalization, product discovery, recommendations, and search optimization for eCommerce brands.",
    images: [
      {
        url: "/brand/og-default.png",
        width: 1200,
        height: 630,
        alt: "Helium | AI Personalization for D2C eCommerce Growth",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helium | AI Personalization for D2C eCommerce Growth",
    description:
      "Increase conversion and AOV with AI merchandising, personalization, product discovery, recommendations, and search optimization for eCommerce brands.",
    images: ["/brand/og-default.png"],
  },
  icons: {
    icon: "/brand/favicon.webp",
    shortcut: "/brand/favicon.webp",
    apple: "/brand/favicon.webp",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fontVariables} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        {children}
      </body>
    </html>
  );
}