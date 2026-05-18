import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/en/Navbar";
import Footer from "@/components/en/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Penang Island — A Tropical Paradise in Southeast Asia",
  description:
    "Discover the magic of Penang Island, Malaysia. From world-class street food to vibrant street art, historic heritage sites, and stunning beaches — a multicultural paradise you'll never forget.",
  openGraph: {
    title: "Penang Island — A Tropical Paradise",
    description: "Food, art, culture, nature — explore Penang, Malaysia",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <a
          href="#"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-penang-coral/90 hover:bg-penang-coral text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </body>
    </html>
  );
}
