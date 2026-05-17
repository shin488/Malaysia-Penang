"use client";

import FadeInView from "./FadeInView";

const natureItems = [
  {
    title: "バトゥ・フェリンギ",
    subtitle: "Batu Ferringhi",
    desc: "ペナンを代表するビーチエリア。4kmにわたる白い砂浜とヤシの木々。夕暮れ時のナイトマーケットも必見。ウォータースポーツも充実。",
    image: "https://images.pexels.com/photos/11789655/pexels-photo-11789655.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    title: "ペナンヒル",
    subtitle: "Penang Hill",
    desc: "標高833m。フニクラー鉄道で頂上へ。ジョージタウンと本土を一望するパノラマは圧巻。朝の清々しい空気の中で見る景色は一生の思い出に。",
    image: "https://images.pexels.com/photos/16714837/pexels-photo-16714837.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    title: "ペナン国立公園",
    subtitle: "Penang National Park",
    desc: "マレーシア最小の国立公園だが、隠れたビーチや原生林のトレッキング、イルカウォッチングまで楽しめる。のんびりハイキングに最適。",
    image: "https://images.pexels.com/photos/29355304/pexels-photo-29355304.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    title: "サンセットクルーズ",
    subtitle: "Sunset Cruise",
    desc: "ペナン海峡に沈む夕日を眺めながらのクルーズ。マレーシアの温かい風を感じ、水平線に消える太陽を見る贅沢なひととき。",
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
            都市の喧騒を忘れる
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-penang-green to-penang-blue">
              もう一つの顔
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            グルメとアートだけじゃない。ペナンには美しいビーチと緑豊かな自然が広がっています。
            街中から少し足を伸ばせば、そこは楽園。
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
