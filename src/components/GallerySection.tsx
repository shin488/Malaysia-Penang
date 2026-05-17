"use client";

import { useState } from "react";
import FadeInView from "./FadeInView";
import Lightbox from "./Lightbox";

const galleryItems = [
  { label: "チャイナタウンの路地", image: "https://images.pexels.com/photos/17168624/pexels-photo-17168624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
  { label: "ジョージタウンのショップハウス", image: "https://images.pexels.com/photos/6770742/pexels-photo-6770742.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
  { label: "クラン・ジャッティの水上集落", image: "https://images.pexels.com/photos/35421794/pexels-photo-35421794.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
  { label: "ペナンヒルからの夜景", image: "https://images.pexels.com/photos/31019129/pexels-photo-31019129.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
  { label: "ストリートフードの屋台", image: "https://images.pexels.com/photos/32541938/pexels-photo-32541938.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
  { label: "ペナン・ストランドの桟橋", image: "https://images.pexels.com/photos/1465993/pexels-photo-1465993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
  { label: "モスクと寺院の調和", image: "https://images.pexels.com/photos/35776783/pexels-photo-35776783.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
  { label: "熱帯の夕暮れ", image: "https://images.pexels.com/photos/34017118/pexels-photo-34017118.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
  { label: "バトゥ・フェリンギの海", image: "https://images.pexels.com/photos/29389365/pexels-photo-29389365.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-penang-green/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <span className="text-penang-coral text-sm tracking-[0.2em] uppercase font-medium">
            📸 Gallery — Galeri
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-penang-dark mt-3 mb-4">
            ペナンの風景
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            言葉よりも雄弁に、ペナンの魅力を色で感じてください。
            <br />
            <span className="text-gray-400 text-sm">Cantiknya! — 美しい!</span>
          </p>
        </FadeInView>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <FadeInView key={item.label} delay={i * 60}>
              <button
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer w-full focus:outline-none focus:ring-2 focus:ring-penang-coral/50"
                onClick={() => setLightboxIndex(i)}
                aria-label={`${item.label}を拡大表示`}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg transform group-hover:scale-100 scale-75 transition-transform duration-300">
                    <svg className="w-5 h-5 text-penang-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium">{item.label}</span>
                </div>
              </button>
            </FadeInView>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          src={galleryItems[lightboxIndex].image}
          label={galleryItems[lightboxIndex].label}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % galleryItems.length)}
        />
      )}
    </section>
  );
}
