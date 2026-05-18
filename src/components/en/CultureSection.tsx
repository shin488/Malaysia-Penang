"use client";

import FadeInView from "@/components/FadeInView";

const cultureItems = [
  {
    title: "George Town UNESCO Heritage Site",
    subtitle: "George Town UNESCO Site",
    desc: "A UNESCO World Heritage Site inscribed in 2008. 19th-century shop houses line the streets alongside Chinese clan houses (Khoo Kongsi, Cheah Kongsi), Islamic mosques (Kapitan Keling Mosque), and Hindu temples (Sri Mahamariamman Temple) — walking through feels like stepping back in time.",
    image: "https://images.pexels.com/photos/6770742/pexels-photo-6770742.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
  {
    title: "Kek Lok Si Temple",
    subtitle: "Southeast Asia&apos;s Largest Buddhist Temple",
    desc: "Rising on a hilltop, this is the largest Buddhist temple in Southeast Asia. The 7-story Pagoda of Ten Thousand Buddhas and the towering 30m Guanyin statue are breathtaking. During Chinese New Year, tens of thousands of lanterns light up a magical scene. Located in Air Itam.",
    image: "https://images.pexels.com/photos/10897082/pexels-photo-10897082.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
  {
    title: "Pinang Peranakan Mansion",
    subtitle: "Pinang Peranakan Mansion",
    desc: "A museum showcasing the lifestyle of the &ldquo;Baba Nyonya&rdquo; — the fusion culture of Chinese and Malay heritage. The gold-leafed furnishings and exquisite craftsmanship will take your breath away.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Penang_Peranakan_Mansion_by_C.W._Tan_01.jpg",
  },
  {
    title: "Little India & Chinatown",
    subtitle: "Little India & Chinatown",
    desc: "The spice-scented streets of Little India and the incense-filled alleys of Chinatown are just a short walk apart. Experiencing two completely different worlds within minutes is a uniquely Penang experience.",
    image: "https://images.pexels.com/photos/35164824/pexels-photo-35164824.png?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
];

export default function CultureSection() {
  return (
    <section id="culture" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-penang-coral/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <span className="text-penang-coral text-sm tracking-[0.2em] uppercase font-medium">
            🇲🇾 Culture & History
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-penang-dark mt-3 mb-4">
            <span className="text-penang-coral">Muhibbah</span> — Three Cultures, One
            <br />
            Colorful City
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            <em className="text-penang-green not-italic font-medium">&ldquo;Muhibbah&rdquo;</em> means &ldquo;harmony and goodwill&rdquo; in Malay. Three great cultures — Malay, Chinese, and Indian — beautifully intersect on this island. Temples, mosques, and churches standing on the same street — a miracle of multicultural coexistence.
          </p>
        </FadeInView>

        <div className="space-y-6">
          {cultureItems.map((item, i) => (
            <FadeInView key={item.title} delay={i * 100}>
              <div className="group flex flex-col md:flex-row gap-0 bg-penang-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500">
                <div className="md:w-56 h-48 md:h-auto shrink-0 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                  <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-penang-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
