import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-penang-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <h3 className="text-xl font-display font-bold mb-4">
              <span className="text-penang-coral">Penang</span> Island
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Pulau Pinang — a tropical paradise off the west coast of Peninsular Malaysia, where cultures intertwine.
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-white/5 px-2.5 py-1 rounded-md text-gray-400">🇲🇾 Malaysia</span>
              <span className="text-xs bg-white/5 px-2.5 py-1 rounded-md text-gray-400">🌏 Asia</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">
              Navigate
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              {["About", "Food", "Art", "Culture", "Nature", "Gallery", "Map", "Tips"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-penang-coral transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">
              Malay Phrases
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><span className="text-penang-yellow">Selamat Datang</span> — Welcome</li>
              <li><span className="text-penang-yellow">Terima Kasih</span> — Thank you</li>
              <li><span className="text-penang-yellow">Selamat Makan</span> — Enjoy your meal</li>
              <li><span className="text-penang-yellow">Lepak</span> — Chill out</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">
              Language
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              View this site in another language
            </p>
            <Link
              href="/"
              className="text-xs bg-white/5 px-3 py-1.5 rounded-lg hover:bg-penang-coral/20 hover:text-white transition-all duration-300 cursor-pointer text-gray-400 inline-block"
            >
              🇯🇵 Japanese Version
            </Link>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-gray-600 mb-1">
            &copy; {new Date().getFullYear()} Penang Island.
          </p>
          <p className="text-xs text-gray-600/60">
            Dibuat dengan 🧡 untuk Pulau Pinang
          </p>
        </div>
      </div>
    </footer>
  );
}
