"use client";

import FadeInView from "./FadeInView";

const cultureItems = [
  {
    title: "ジョージタウン世界遺産地区",
    subtitle: "George Town UNESCO Site",
    desc: "2008年に登録された世界遺産。19世紀のショップハウスが立ち並び、中国系祠堂、イスラム寺院、ヒンドゥー寺院が混在する独特な景観は、歩くだけでタイムスリップした気分に。",
    image: "https://images.pexels.com/photos/6770742/pexels-photo-6770742.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
  {
    title: "極楽寺 (Kek Lok Si)",
    subtitle: "東南アジア最大の仏教寺院",
    desc: "丘の上にそびえ立つ壮麗な寺院。7層の仏塔と巨大な観音像が圧巻。旧正月には何万もの提灯が灯され、幻想的な光景が広がります。",
    image: "https://images.pexels.com/photos/36796574/pexels-photo-36796574.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
  {
    title: "ペナン・ペラナカン・マンション",
    subtitle: "Pinang Peranakan Mansion",
    desc: "華人とマレー人の融合文化「ババ・ニョニャ」の暮らしを体感できる博物館。金ぴかの調度品と繊細な工芸品の美しさに息を飲む。",
    image: "https://images.pexels.com/photos/17168624/pexels-photo-17168624.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
  {
    title: "リトル・インディア & チャイナタウン",
    subtitle: "Little India & Chinatown",
    desc: "スパイスの香りが立ち込めるリトル・インディアと、線香の香りが漂うチャイナタウン。徒歩数分で別世界を行き来できる、ペナンならではの体験。",
    image: "https://images.pexels.com/photos/35164824/pexels-photo-35164824.png?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
];

export default function CultureSection() {
  return (
    <section id="culture" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-penang-coral/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <span className="text-penang-coral text-sm tracking-[0.2em] uppercase font-medium">
            🇲🇾 Culture & History
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-penang-dark mt-3 mb-4">
            <span className="text-penang-coral">Muhibah</span> — 三つの文化が織りなす
            <br />
            色とりどりの街並み
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            <em className="text-penang-green not-italic font-medium">&ldquo;Muhibah&rdquo;</em> とはマレー語で「調和・友好」の意。
            マレー、中国、インド — 三つの大きな文化がペナンという島で美しく交差します。
            寺院、モスク、教会が同じ通りに並ぶ、多文化共生の奇跡。
          </p>
        </FadeInView>

        <div className="space-y-6">
          {cultureItems.map((item, i) => (
            <FadeInView key={item.title} delay={i * 100}>
              <div className="group flex flex-col md:flex-row gap-0 bg-penang-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500">
                <div className="md:w-56 h-48 md:h-auto shrink-0 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                  <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-penang-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
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
