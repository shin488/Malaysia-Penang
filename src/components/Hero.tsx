"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.4);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://images.pexels.com/photos/11789655/pexels-photo-11789655.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)",
          transform: `translateY(${offsetY}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 5 Q50 15 55 25 Q65 20 70 30 Q60 40 50 35 Q55 50 45 55 Q40 45 35 55 Q25 50 30 35 Q20 40 10 30 Q15 20 25 25 Q30 15 40 5Z' fill='white' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-penang-cream to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-white/30" />
            <span className="text-white/50 text-sm tracking-[0.2em] uppercase font-medium">
              🇲🇾 Selamat Datang
            </span>
            <div className="h-px w-12 bg-white/30" />
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold text-white mb-4 leading-tight">
            Penang
            <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-200">
              {" "}Island
            </span>
          </h1>
          <p className="text-white/70 text-xs md:text-sm tracking-[0.2em] uppercase font-medium mb-8">
            マレーシア · ペナン島
          </p>
          <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            カラフルな街並みに香るスパイスの匂い、
            笑顔あふれる屋台、どこまでも続く碧い海。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="group inline-flex items-center gap-2 bg-white text-penang-dark px-8 py-4 rounded-full font-bold text-sm hover:bg-penang-yellow hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              旅に出かける
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#food"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              グルメをチェック
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <svg
            className="w-4 h-4 text-white/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
