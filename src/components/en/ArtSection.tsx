"use client";

import FadeInView from "@/components/FadeInView";

const arts = [
  {
    title: "Children on a Bicycle",
    desc: "The most famous mural in Penang, painted by Lithuanian artist Ernest Zacharevic in 2012. The lively expressions of children on a bicycle breathe life into the alley. Located on Armenian Street (Lebuh Armenian).",
    image: "https://images.pexels.com/photos/30867351/pexels-photo-30867351.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    accent: "bg-penang-yellow/10 border-penang-yellow/20",
  },
  {
    title: "Boy on a Chair",
    desc: "A boy painted onto the wall of an old shop house, standing on a chair and gazing into the distance, evoking a mysterious story. Also by Zacharevic. Legend has it that a local child passing by served as the model.",
    image: "https://images.pexels.com/photos/12587163/pexels-photo-12587163.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    accent: "bg-penang-coral/10 border-penang-coral/20",
  },
  {
    title: "Wire Mural & Hidden Art",
    desc: "Beyond murals, wire art by local artists can be found throughout the city. Created by the Sculpture At Work project, these pieces await discovery down narrow alleyways and hidden passages.",
    image: "https://images.pexels.com/photos/35222171/pexels-photo-35222171.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    accent: "bg-penang-green/10 border-penang-green/20",
  },
];

export default function ArtSection() {
  return (
    <section id="art" className="relative py-24 md:py-36 bg-penang-cream overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,200,66,0.05)_0%,transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView className="text-center mb-16">
          <span className="text-penang-coral text-sm tracking-[0.2em] uppercase font-medium">
            🎨 Street Art
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-penang-dark mt-3 mb-4">
            The Whole City Is
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-penang-coral to-penang-yellow">
              {" "}a Gallery
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Walk through the alleys of George Town and you&apos;ll find an open-air museum. Inspired by Lithuanian artist Ernest Zacharevic&apos;s murals, the entire city became a canvas.
          </p>
        </FadeInView>

        <div className="grid md:grid-cols-3 gap-8">
          {arts.map((art, i) => (
            <FadeInView key={art.title} delay={i * 100}>
              <div className={`rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 border ${art.accent}`}>
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 bg-white/80 backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-penang-dark mb-3">
                    {art.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {art.desc}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={200}>
          <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <h4 className="font-bold text-penang-dark mb-2 flex items-center gap-2">
                  <span className="text-xl">🗺️</span>
                  Art Walk Guide
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  George Town is compact and easily walkable. The best time to explore is early morning when it&apos;s less crowded. Getting lost in the back alleys and discovering your favorite mural is the real joy of Penang.
                </p>
              </div>
              <div className="bg-penang-coral/10 rounded-xl px-5 py-3 text-sm text-penang-coral font-medium whitespace-nowrap shrink-0">
                Duration: 2-3 hours
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
