"use client";

import dynamic from "next/dynamic";
import FadeInView from "@/components/FadeInView";

const MapView = dynamic(() => import("@/components/en/MapView"), { ssr: false });

const categories = [
  { label: "Culture", color: "#ff6b6b" },
  { label: "Nature", color: "#2d8a4e" },
  { label: "Art", color: "#f5c842" },
  { label: "Food", color: "#ff8e8e" },
];

export default function MapSection() {
  return (
    <section id="map" className="relative py-24 md:py-36 bg-penang-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center mb-12">
          <span className="text-penang-coral text-sm tracking-[0.2em] uppercase font-medium">
            🗺️ Map — Peta
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-penang-dark mt-3 mb-4">
            Penang Island
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-penang-coral to-penang-yellow">
              {" "}Spot Map
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            From George Town to the beaches — check out Penang&apos;s highlights on the map.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
            {categories.map((cat) => (
              <span key={cat.label} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                {cat.label}
              </span>
            ))}
          </div>
        </FadeInView>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20 h-[500px] md:h-[600px]">
            <MapView />
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
