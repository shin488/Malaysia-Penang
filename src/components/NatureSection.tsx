export default function NatureSection() {
  return (
    <section id="nature" className="py-20 md:py-32 bg-penang-cream relative overflow-hidden">
      <div className="palm-silhouette top-10 left-5 opacity-[0.03]">🌴</div>
      <div className="palm-silhouette bottom-10 right-5 opacity-[0.03] rotate-12">🌴</div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-penang-green/30 via-penang-yellow/30 to-penang-blue/30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-penang-coral text-sm tracking-[0.2em] uppercase font-medium">
            🌿 Nature & Beaches
          </span>
          <h2 className="section-title mt-3 mb-4">
            都市の喧騒を忘れる
            <br />
            もう一つの顔
          </h2>
          <p className="section-subtitle">
            グルメとアートだけじゃない。ペナンには美しいビーチと緑豊かな自然が広がっています。
            街中から少し足を伸ばせば、そこは楽園。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
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
          ].map((item) => (
            <div key={item.title} className="card">
              <div className="h-64 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-penang-dark mb-2">
                  {item.title}
                </h3>
                <span className="text-sm text-gray-400">{item.subtitle}</span>
                <p className="text-sm text-gray-600 leading-relaxed mt-3">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
