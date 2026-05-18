"use client";

import FadeInView from "@/components/FadeInView";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 bg-penang-cream overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,107,0.06)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(45,138,78,0.06)_0%,transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeInView className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-penang-yellow/30 rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
                <img
                  src="https://images.pexels.com/photos/34017118/pexels-photo-34017118.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                  alt="Penang sunset"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md">
                      <div className="text-2xl font-display font-bold text-penang-coral">1786</div>
                      <div className="text-[9px] text-gray-600 uppercase tracking-wider">🇬🇧 British colonization begins</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md">
                      <div className="text-2xl font-display font-bold text-penang-green">2008</div>
                      <div className="text-[9px] text-gray-600 uppercase tracking-wider">🏛️ UNESCO World Heritage</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-penang-coral/30 rounded-2xl" />
            </div>
          </FadeInView>

          <FadeInView delay={150} className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 bg-penang-coral/10 rounded-full px-4 py-1.5 mb-5">
              <span className="text-penang-coral text-xs tracking-[0.2em] uppercase font-semibold">
                🇲🇾 About Pulau Pinang
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-penang-dark mb-6 leading-tight">
              A Miracle Island Where
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-penang-coral to-penang-yellow">
                Cultures Intertwine
              </span>
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p className="text-base md:text-lg">
                Penang Island, off the west coast of Peninsular Malaysia. In 1786, Francis Light of the British East India Company established a settlement here, and over centuries, Malay, Chinese, and Indian cultures blended into one of the world&apos;s most unique multicultural cities.
              </p>
              <div className="border-l-4 border-gradient-to-b from-penang-yellow to-penang-coral pl-4 py-1">
                <p className="italic text-gray-500 text-sm">
                  &ldquo;East meets West — a one-of-a-kind crossroads of color and flavor.&rdquo;
                </p>
              </div>
              <p>
                The capital, George Town, was inscribed as a UNESCO World Heritage Site in 2008. Colorful shop houses, vibrant street art, and Southeast Asia&apos;s finest hawker culture breathe life into every corner. Locals proudly say, &ldquo;There&apos;s nothing but delicious food in Penang.&rdquo;
              </p>
              <p>
                On weekends, George Town&apos;s alleys fill with kongsi (table stalls), while the beach area of Batu Ferringhi lights up with night markets. Whether you&apos;re a first-time traveler or a seasoned explorer, Penang has a charm that captivates everyone.
              </p>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
