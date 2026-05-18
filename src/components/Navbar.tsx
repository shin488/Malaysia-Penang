"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Food", href: "#food" },
  { label: "Art", href: "#art" },
  { label: "Culture", href: "#culture" },
  { label: "Nature", href: "#nature" },
  { label: "Gallery", href: "#gallery" },
  { label: "Map", href: "#map" },
  { label: "Tips", href: "#tips" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm"
          : "bg-gradient-to-b from-black/30 to-transparent"
      }`}
    >
      <div className="h-0.5 w-full bg-gradient-to-r from-[#cc0000] via-white to-[#0032a0] opacity-60" />
      <div
        className="h-0.5 bg-gradient-to-r from-penang-coral via-penang-yellow to-penang-green transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className={`text-xl md:text-2xl font-display font-bold tracking-tight transition-colors flex items-center gap-2 ${
              scrolled ? "text-penang-dark" : "text-white"
            }`}
          >
            <span className="text-sm leading-none">🇲🇾</span>
            <span>
              <span className={scrolled ? "text-penang-coral" : "text-white"}>Penang</span>
              <span className={scrolled ? "text-penang-dark/60" : "text-white/60"}> Island</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-penang-coral after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled
                    ? "text-gray-600 hover:text-penang-coral"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/en"
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/30 text-white/80 hover:bg-white/10 hover:text-white transition-all"
            >
              English
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-penang-dark" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-penang-dark" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-penang-dark" : "bg-white"
              } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-penang-coral hover:bg-penang-coral/5 px-4 py-3 rounded-lg transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/en"
                className="text-sm font-medium text-penang-coral hover:bg-penang-coral/5 px-4 py-3 rounded-lg transition-all border-t border-gray-100 mt-1"
                onClick={() => setMenuOpen(false)}
              >
                🇺🇸 English Version
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
