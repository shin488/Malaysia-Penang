const floatingEmojis = [
  { emoji: "🌴", className: "top-[10%] left-[5%] animate-float-slow text-4xl md:text-6xl" },
  { emoji: "🍜", className: "top-[20%] right-[8%] animate-float-delayed text-3xl md:text-5xl" },
  { emoji: "🌊", className: "bottom-[25%] left-[10%] animate-float text-4xl md:text-5xl" },
  { emoji: "🏖️", className: "bottom-[15%] right-[5%] animate-float-slow text-3xl md:text-5xl" },
  { emoji: "🌺", className: "top-[35%] left-[3%] animate-float-delayed text-2xl md:text-4xl" },
  { emoji: "🥥", className: "top-[15%] left-[15%] animate-wiggle text-2xl md:text-3xl" },
  { emoji: "☀️", className: "top-[5%] right-[15%] animate-pulse-soft text-3xl md:text-5xl" },
  { emoji: "🦐", className: "bottom-[35%] right-[12%] animate-drift text-2xl md:text-3xl" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1747493397711-2230a016c852?w=1920&h=1080&fit=crop&auto=format)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-penang-blue/70 via-penang-green/60 to-penang-yellow/50" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L35 20H50L38 30L42 45L30 35L18 45L22 30L10 20H25Z' fill='white' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {floatingEmojis.map((item, i) => (
        <div key={i} className={`absolute ${item.className} opacity-70`}>
          {item.emoji}
        </div>
      ))}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-1.5 mb-8 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-soft" />
            <span className="text-white/80 text-xs md:text-sm tracking-wider font-medium uppercase">
              Welcome to Paradise
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-white mb-4 leading-tight drop-shadow-lg">
            Penang
            <br className="md:hidden" />
            <span className="text-gradient bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-200">
              {" "}Island
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-white/60 text-sm">🇲🇾</span>
            <span className="text-white/70 text-sm tracking-[0.15em] uppercase font-medium">
              Malaysia
            </span>
            <span className="text-white/60 text-sm">🇲🇾</span>
          </div>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
            カラフルな街並みに香るスパイスの匂い、
            <br className="hidden sm:block" />
            笑顔あふれる屋台、どこまでも続く碧い海。
            <br />
            <span className="text-yellow-200 font-semibold">ここは、人生がもっと色づく場所。</span>
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
              🍜 グルメをチェック
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs tracking-wider uppercase">Scroll</span>
          <svg
            className="w-5 h-5 text-white/50"
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
