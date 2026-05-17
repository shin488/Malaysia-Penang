"use client";

import FadeInView from "./FadeInView";

const tips = [
  {
    icon: "✈️",
    title: "アクセス",
    items: [
      "クアラルンプールから飛行機で約1時間",
      "シンガポールからも直行便あり（約1.5時間）",
      "日本人は条件付きで90日以内はビザ不要",
    ],
  },
  {
    icon: "🌤️",
    title: "ベストシーズン",
    items: [
      "12月〜2月が最も過ごしやすい乾季",
      "年間通して高温多湿（30℃前後）",
      "スコールに備えて折りたたみ傘を",
    ],
  },
  {
    icon: "💰",
    title: "予算の目安",
    items: [
      "屋台料理: 1食 約100〜300円",
      "中級ホテル: 1泊 約3,000〜6,000円",
      "1日 約3,000〜5,000円",
    ],
  },
  {
    icon: "🚗",
    title: "島内移動",
    items: [
      "Grab（東南アジア版Uber）が便利",
      "ジョージタウンは徒歩とトライショーで",
      "Rapid Penang バスでビーチエリアや空港へ",
      "ペナンヒルへのフニクラーは午前中が空いている",
    ],
  },
  {
    icon: "🍜",
    title: "グルメの心得",
    items: [
      "行列ができている屋台が正解",
      "辛さはオーダー時に調整可能 — \"kurang pedas\"（少なめ）",
      "衛生面は基本大丈夫、地元民が並ぶ店を選べば安心",
      "コーヒー店（Kopitiam）のアイスコーヒー \"Kopi Peng\" もお忘れなく",
    ],
  },
  {
    icon: "📝",
    title: "注意事項",
    items: [
      "水道水は飲まない",
      "日焼け止めと虫除けは必須",
      "「Terima Kasih」を覚えよう",
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
            旅の前に
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-penang-yellow to-amber-200">
              {" "}知っておきたいこと
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            初めてのペナンでも安心。現地を知り尽くした私たちが、
            旅を最大限楽しむためのヒントをお届けします。
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
                🇲🇾 さあ、ペナンへ出かけよう
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                このページだけでは伝えきれない魅力が、ペナンにはまだまだあります。
                実際に足を運んで、自分の目で見て、舌で味わって、肌で感じてください。
                きっと、人生で一番美味しい旅になるはずです。
              </p>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
