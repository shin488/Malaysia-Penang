export default function CultureSection() {
  return (
    <section id="culture" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-penang-coral text-sm tracking-[0.2em] uppercase font-medium">
            🇲🇾 Culture & History
          </span>
          <h2 className="section-title mt-3 mb-4">
            <span className="text-penang-coral">Muhibah</span> — 三つの文化が織りなす
            <br />
            色とりどりの街並み
          </h2>
          <p className="section-subtitle">
            <em className="text-penang-green not-italic">&ldquo;Muhibah&rdquo;</em> とはマレー語で「調和・友好」の意。
            マレー、中国、インド — 三つの大きな文化がペナンという島で美しく交差します。
            寺院、モスク、教会が同じ通りに並ぶ、多文化共生の奇跡。
          </p>
        </div>

        <div className="space-y-8">
          {[
            {
              title: "ジョージタウン世界遺産地区",
              subtitle: "George Town UNESCO Site",
              desc: "2008年に登録された世界遺産。19世紀のショップハウスが立ち並び、中国系祠堂、イスラム寺院、ヒンドゥー寺院が混在する独特な景観は、歩くだけでタイムスリップした気分に。",
              image: "https://images.pexels.com/photos/6770742/pexels-photo-6770742.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            },
            {
              title: "極楽寺 (Kek Lok Si)",
              subtitle: "東南アジア最大の仏教寺院",
              desc: "丘の上にそびえ立つ壮麗な寺院。7層の仏塔と巨大な観音像が圧巻。旧正月には何万もの提灯が灯され、幻想的な光景が広がります。",
              image: "https://images.pexels.com/photos/36796574/pexels-photo-36796574.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            },
            {
              title: "ペナン・ペラナカン・マンション",
              subtitle: "Pinang Peranakan Mansion",
              desc: "華人とマレー人の融合文化「ババ・ニョニャ」の暮らしを体感できる博物館。金ぴかの調度品と繊細な工芸品の美しさに息を飲む。",
              image: "https://images.pexels.com/photos/17168624/pexels-photo-17168624.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            },
            {
              title: "リトル・インディア & チャイナタウン",
              subtitle: "Little India & Chinatown",
              desc: "スパイスの香りが立ち込めるリトル・インディアと、線香の香りが漂うチャイナタウン。徒歩数分で別世界を行き来できる、ペナンならではの体験。",
              image: "https://images.pexels.com/photos/35164824/pexels-photo-35164824.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col md:flex-row gap-6 bg-penang-cream rounded-2xl overflow-hidden shadow-md"
            >
              <div className="md:w-48 h-32 md:h-auto shrink-0 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:py-8 md:pr-8 flex-1">
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  {item.subtitle}
                </span>
                <h3 className="text-xl font-bold text-penang-dark mt-1 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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
