"use client";

import FadeInView from "@/components/FadeInView";

const natureItems = [
  {
    title: "Batu Ferringhi",
    subtitle: "Batu Ferringhi Beach",
    desc: "Penang&apos;s premier beach destination. A 4km stretch of white sand and coconut palms. The evening night market is a must-see. Water sports are plentiful.",
    image: "https://images.pexels.com/photos/11789655/pexels-photo-11789655.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    title: "Penang Hill",
    subtitle: "Penang Hill",
    desc: "At 833m above sea level, ride the funicular railway to the summit. The panoramic view of George Town and the mainland is breathtaking. The morning air offers a once-in-a-lifetime experience.",
    image: "https://images.pexels.com/photos/16714837/pexels-photo-16714837.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    title: "Penang National Park",
    subtitle: "Penang National Park",
    desc: "Malaysia&apos;s smallest national park, but packed with hidden beaches, rainforest trekking, and even dolphin watching. Perfect for a relaxing hike.",
    image: "https://images.pexels.com/photos/32066576/pexels-photo-32066576.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    title: "Sunset Cruise",
    subtitle: "Sunset Cruise",
    desc: "Watch the sun sink into the Penang Strait on a relaxing cruise. Feel the warm Malaysian breeze and enjoy a luxurious moment as the sun disappears over the horizon.",
    image: "https://images.pexels.com/photos/34818532/pexels-photo-34818532.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
];

export default function NatureSection() {
  return (
    <section id="nature" className="relative py-24 md:py-36 bg-penang-cream overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(45,138,78,0.05)_0%,transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView className="text-center mb-16">
          <span className="text-penang-green text-sm tracking-[0.2em] uppercase font-medium">
            🌿 Nature & Beaches
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-penang-dark mt-3 mb-4">
            Forget the Urban Bustle —
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-penang-green to-penang-blue">
              Penang&apos;s Other Face
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            It&apos;s not just about food and art. Penang has beautiful beaches and lush greenery. Just a short trip from the city center, paradise awaits.
          </p>
        </FadeInView>

        <div className="grid md:grid-cols-2 gap-8">
          {natureItems.map((item, i) => (
            <FadeInView key={item.title} delay={i * 100}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-penang-dark mb-1">
                    {item.title}
                  </h3>
                  <span className="text-sm text-gray-400">{item.subtitle}</span>
                  <p className="text-sm text-gray-500 leading-relaxed mt-3">
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
