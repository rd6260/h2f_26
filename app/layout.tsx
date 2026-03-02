import type { Metadata } from "next";
import { Inter, Playfair_Display, Bricolage_Grotesque } from "next/font/google";
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

export const metadata: Metadata = {
  title: "VELOS — Interstellar Logistics | Hack2Future",
  description:
    "The Flagship Hackathon of IIIT Dharwad. Build Bold, Think Beyond, Code the Future.",
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
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${bricolage.variable} bg-neutral-950 text-neutral-50 w-full overflow-x-hidden selection:bg-white/20 selection:text-white relative antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
