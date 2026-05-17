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
      "1日 約3,000〜5,000円で楽しめる",
    ],
  },
  {
    icon: "🚗",
    title: "島内移動",
    items: [
      "Grab（東南アジア版Uber）が便利",
      "ジョージタウンは徒歩とトライショー（自転車タクシー）で",
      "バス路線も充実、ビーチエリアへのアクセス良好",
    ],
  },
  {
    icon: "🍜",
    title: "グルメの心得",
    items: [
      "屋台はその列に地元民が並んでいる店が正解",
      "辛さはオーダー時に調整可能",
      "衛生面は基本大丈夫。現地の人は気にしていない",
    ],
  },
  {
    icon: "📝",
    title: "注意事項",
    items: [
      "水道水は飲まない（ミネラルウォーターを）",
      "日焼け止めと虫除けは必須",
      "マレー語の「Terima Kasih（ありがとう）」を覚えよう",
    ],
  },
];

export default function TipsSection() {
  return (
    <section
      id="tips"
      className="py-20 md:py-32 bg-gradient-to-br from-penang-dark via-slate-800 to-penang-dark text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-penang-yellow text-sm tracking-[0.2em] uppercase font-medium">
            Travel Tips
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4 text-balance">
            旅の前に知っておきたいこと
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            初めてのペナンでも安心。現地を知り尽くした私たちが、
            旅を最大限楽しむためのヒントをお届けします。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{tip.icon}</div>
              <h3 className="text-lg font-bold mb-4">{tip.title}</h3>
              <ul className="space-y-2">
                {tip.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-400 flex gap-2 leading-relaxed"
                  >
                    <span className="text-penang-yellow mt-1 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl">
            <p className="text-lg font-display font-bold mb-2">
              🇲🇾 さあ、ペナンへ出かけよう
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              このページだけでは伝えきれない魅力が、ペナンにはまだまだあります。
              実際に足を運んで、自分の目で見て、舌で味わって、肌で感じてください。
              きっと、人生で一番美味しい旅になるはずです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
