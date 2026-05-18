"use client";

import FadeInView from "@/components/FadeInView";

const tips = [
  {
    icon: "✈️",
    title: "Getting There",
    items: [
      "1-hour flight from Kuala Lumpur",
      "Direct flights from Singapore (~1.5 hours)",
      "Japanese passport holders: visa-free for up to 90 days (conditions apply)",
    ],
  },
  {
    icon: "🌤️",
    title: "Best Season",
    items: [
      "December to February is the most comfortable dry season",
      "Hot and humid year-round (~30°C / 86°F)",
      "Carry a foldable umbrella for sudden showers",
    ],
  },
  {
    icon: "💰",
    title: "Budget Guide",
    items: [
      "Hawker meal: ~RM 3-10 (approx. ¥100-300)",
      "Mid-range hotel: ~RM 80-160/night (approx. ¥3,000-6,000)",
      "Daily budget: ~RM 80-130 (approx. ¥3,000-5,000)",
    ],
  },
  {
    icon: "🚗",
    title: "Getting Around",
    items: [
      "Grab (Southeast Asia's Uber) is the most convenient",
      "George Town: walkable and trishaw-friendly",
      "Rapid Penang buses to the beach area and airport",
      "Penang Hill funicular: visit in the morning for shorter queues",
    ],
  },
  {
    icon: "🍜",
    title: "Food Tips",
    items: [
      "Long queues = good food — follow the locals",
      "Spice level can be adjusted — say \"kurang pedas\" (less spicy)",
      "Hygiene is generally fine — choose stalls with local crowds",
      "Don't forget \"Kopi Peng\" (iced coffee) at a local kopitiam",
    ],
  },
  {
    icon: "📝",
    title: "Things to Note",
    items: [
      "Do not drink tap water",
      "Sunscreen and insect repellent are essential",
      "Learn \"Terima Kasih\" (thank you) — locals appreciate it",
    ],
  },
];

export default function TipsSection() {
  return (
    <section
      id="tips"
      className="relative py-24 md:py-36 bg-gradient-to-br from-penang-dark via-slate-800 to-penang-dark text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,200,66,0.03)_0%,transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView className="text-center mb-16">
          <span className="text-penang-yellow text-sm tracking-[0.2em] uppercase font-medium">
            🇲🇾 Travel Tips
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4">
            Before You Go —
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-penang-yellow to-amber-200">
              {" "}What to Know
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            First time in Penang? No worries. Here are insider tips to make the most of your trip.
          </p>
        </FadeInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip, i) => (
            <FadeInView key={tip.title} delay={i * 80}>
              <div className="bg-white/[0.04] backdrop-blur-sm rounded-xl p-6 border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-500 group">
                <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {tip.icon}
                </div>
                <h3 className="text-base font-bold mb-3 text-white/90">{tip.title}</h3>
                <ul className="space-y-2">
                  {tip.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-400 flex gap-2 leading-relaxed"
                    >
                      <span className="text-penang-yellow mt-0.5 shrink-0 text-xs">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={300}>
          <div className="mt-16 text-center">
            <div className="inline-block bg-white/[0.04] backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/[0.06] max-w-2xl">
              <p className="text-xl font-display font-bold mb-3">
                🇲🇾 Now, Off to Penang!
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                This page only scratches the surface of what Penang has to offer. Come see it with your own eyes, taste it for yourself, and feel it on your skin. It might just be the most delicious trip of your life.
              </p>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
