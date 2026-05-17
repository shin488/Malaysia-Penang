export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-penang-cream relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 text-6xl opacity-5 animate-float-slow pointer-events-none select-none">
        🌴
      </div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-5 animate-float-delayed pointer-events-none select-none">
        🌺
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-penang-coral/10 rounded-full px-4 py-1.5 mb-4">
              <span className="text-penang-coral">🏝️</span>
              <span className="text-penang-coral text-xs tracking-[0.2em] uppercase font-semibold">
                🇲🇾 About Pulau Pinang
              </span>
            </div>
            <h2 className="section-title mt-3 mb-6">
              多文化が織りなす
              <br />
              奇跡の島
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p className="text-base md:text-lg">
                マレーシア半島西岸に浮かぶペナン島。18世紀末からイギリス植民地として栄え、
                マレー系、中国系、インド系の文化が絶妙に混ざり合う、世界でも類を見ない多文化都市です。
              </p>
              <p className="border-l-4 border-penang-yellow pl-4 italic text-gray-500">
                &ldquo;East meets West &mdash; ここにしかない、色と味わいの交差点。&rdquo;
              </p>
              <p>
                首都ジョージタウンは2008年にユネスコ世界遺産に登録され、
                カラフルなショップハウス、ストリートアート、そして東南アジア随一の屋台文化が息づいています。
              </p>
              <p>
                ビーチリゾートとしての顔も持ち、初心者から旅慣れた人まで、
                誰もが夢中になる魅力にあふれた島。それがペナンです。
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-[350px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url(https://images.pexels.com/photos/34017118/pexels-photo-34017118.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&fit=crop)",
                }}
              />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="relative z-10 grid grid-cols-2 gap-4 p-6 absolute bottom-0 left-0 right-0">
              <div className="space-y-3">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-display font-bold text-penang-coral mb-0.5">
                    1786
                  </div>
                  <div className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">
                    🇬🇧 イギリス植民地の始まり
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-display font-bold text-penang-blue mb-0.5">
                    2008
                  </div>
                  <div className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">
                    🏛️ 世界遺産登録
                  </div>
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-display font-bold text-penang-green mb-0.5">
                    3
                  </div>
                  <div className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">
                    🌏 主要文化の融合
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-display font-bold text-penang-yellow mb-0.5">
                    #1
                  </div>
                  <div className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">
                    🍜 東南アジアの食の都
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
