export default function Footer() {
  return (
    <footer className="bg-penang-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              <span className="text-penang-coral">Penang</span> Island
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              マレーシア・ペナン島。多文化が織りなす食、アート、歴史、そして自然。
              一度訪れたら忘れない、東南アジアが誇る楽園。
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">
              Quick Links
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
              Share the Love
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              ペナン島の魅力を友達にもシェアしましょう 🌴
            </p>
            <div className="flex gap-3">
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
          <p className="text-sm text-gray-500 mb-2">
            &copy; {new Date().getFullYear()} Penang Island.
          </p>
          <p className="text-xs text-gray-600">
            Made with 🧡 for the island of endless summer.
          </p>
          <div className="flex justify-center gap-3 mt-3 text-lg opacity-30">
            <span>🌴</span>
            <span>🌊</span>
            <span>☀️</span>
            <span>🍜</span>
            <span>🏖️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
