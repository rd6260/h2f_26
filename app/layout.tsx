import type { Metadata } from "next";
import { Inter, Playfair_Display, Bricolage_Grotesque, Montserrat } from "next/font/google";
import Script from "next/script";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://hack2future.in"),
  title: {
    default: "Hack2Future 2026",
    template: "%s | Hack2Future 2026",
  },
  description:
    "The National Level Flagship Hackathon of IIIT Dharwad. Build Bold, Think Beyond, Code the Future.",
  keywords: [
    "Hack2Future",
    "Hackathon",
    "IIIT Dharwad",
    "Coding Competition",
    "Tech Event",
    "India Hackathon",
  ],
  authors: [{ name: "IIIT Dharwad" }],
  creator: "IIIT Dharwad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hack2future.in",
    siteName: "Hack2Future 2026",
    title: "Hack2Future 2026 - IIIT Dharwad",
    description:
      "The National Level Flagship Hackathon of IIIT Dharwad. Build Bold, Think Beyond, Code the Future.",
    images: [
      {
        url: "/icon.png", // fallback image as we know icon.png exists
        width: 1200,
        height: 630,
        alt: "Hack2Future 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hack2Future 2026 - IIIT Dharwad",
    description:
      "The National Level Flagship Hackathon of IIIT Dharwad. Build Bold, Think Beyond, Code the Future.",
    images: ["/icon.png"],
    creator: "@hack2future_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Iconify Web Component */}
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://apply.devfolio.co/v2/sdk.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${bricolage.variable} ${montserrat.variable} bg-neutral-950 text-neutral-50 w-full overflow-x-hidden selection:bg-white/20 selection:text-white relative antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
