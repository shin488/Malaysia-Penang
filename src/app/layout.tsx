import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Penang Island | ペナン島 — 東南アジアが誇る楽園",
  description:
    "マレーシア・ペナン島の魅力を徹底紹介。グルメ、ストリートアート、歴史、ビーチまで。一度訪れたら忘れない、多文化が織りなす奇跡の島。",
  openGraph: {
    title: "Penang Island | ペナン島",
    description: "東南アジアが誇る楽園、ペナン島の魅力",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
