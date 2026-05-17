export default function Footer() {
  return (
    <footer className="bg-penang-dark text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#cc0000] via-white to-[#0032a0] opacity-40" />
      <div className="absolute -top-20 -right-20 text-[200px] opacity-[0.02] pointer-events-none select-none">
        🌺
      </div>
      <div className="absolute -bottom-20 -left-20 text-[200px] opacity-[0.02] pointer-events-none select-none">
        🌴
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-display font-bold mb-4">
              <span className="text-penang-coral">Penang</span> Island
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              Pulau Pinang — マレーシア半島西岸に浮かぶ、多文化が織りなす楽園の島。
            </p>
            <div className="flex gap-2 text-sm">
              <span className="text-xs bg-white/10 px-2 py-1 rounded">🇲🇾 Malaysia</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded">🌏 Asia</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["About", "Food", "Art", "Culture", "Nature", "Gallery", "Tips"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-penang-coral transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">
              Malay Phrases
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span className="text-penang-yellow">Selamat Datang</span> — ようこそ</li>
              <li><span className="text-penang-yellow">Terima Kasih</span> — ありがとう</li>
              <li><span className="text-penang-yellow">Selamat Makan</span> — いただきます</li>
              <li><span className="text-penang-yellow">Lepak</span> — のんびりする</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">
              Share the Love
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              ペナンの魅力を友達にもシェアしましょう
            </p>
            <div className="flex gap-2 flex-wrap">
              {["Twitter", "Facebook", "Instagram"].map((s) => (
                <span
                  key={s}
                  className="text-xs bg-white/10 px-3 py-1.5 rounded-full hover:bg-penang-coral/30 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500 mb-1">
            &copy; {new Date().getFullYear()} Penang Island.
          </p>
          <p className="text-xs text-gray-600">
            Dibuat dengan 🧡 untuk Pulau Pinang — Made with 🧡 for the island of endless summer.
          </p>
          <div className="flex justify-center gap-3 mt-3 text-lg opacity-30">
            <span>🌴</span>
            <span>🌊</span>
            <span>☀️</span>
            <span>🍜</span>
            <span>🏖️</span>
            <span>🌺</span>
            <span>🦋</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
