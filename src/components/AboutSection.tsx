"use client";

import FadeInView from "./FadeInView";

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
                      <div className="text-[9px] text-gray-600 uppercase tracking-wider">🇬🇧 植民地の始まり</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md">
                      <div className="text-2xl font-display font-bold text-penang-green">2008</div>
                      <div className="text-[9px] text-gray-600 uppercase tracking-wider">🏛️ 世界遺産登録</div>
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
              多文化が織りなす
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-penang-coral to-penang-yellow">
                奇跡の島
              </span>
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p className="text-base md:text-lg">
                マレーシア半島西岸に浮かぶペナン島。1786年にイギリス東インド会社のフランシス・ライトが植民地を開き、
                マレー系、中国系、インド系の文化が絶妙に混ざり合う、世界でも類を見ない多文化都市へと育ちました。
              </p>
              <div className="border-l-4 border-gradient-to-b from-penang-yellow to-penang-coral pl-4 py-1">
                <p className="italic text-gray-500 text-sm">
                  &ldquo;East meets West — ここにしかない、色と味わいの交差点。&rdquo;
                </p>
              </div>
              <p>
                首都ジョージタウンは2008年にユネスコ世界遺産に登録され、
                カラフルなショップハウス、ストリートアート、そして東南アジア随一の屋台文化が息づいています。
                地元の人々は「ペナンには美味いものしかない」と誇らしげに語ります。
              </p>
              <p>
                週末にはジョージタウンの路地がコンジキ（テーブル出店）で埋め尽くされ、
                ビーチエリアのバトゥ・フェリンギではナイトマーケットが灯りをともす。
                初心者から旅慣れた人まで、誰もが夢中になる魅力にあふれた島。それがペナンです。
              </p>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
