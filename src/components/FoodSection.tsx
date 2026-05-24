"use client";

import FadeInView from "./FadeInView";

function pexelUrl(id: number) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop`;
}

const foods = [
  {
    name: "Char Koay Teow",
    subtitle: "炒粿条",
    description:
      "ペナンNo.1の屋台料理。平打ち米粉麺をエビ、ソーセージ、もやしと共に強火で炒めた黒醤油風味の一品。地元民が並ぶ名店は Lorong Selamat と Siam Road。",
    place: "Lorong Selamat / Siam Road",
    image: pexelUrl(8983416),
  },
  {
    name: "Assam Laksa",
    subtitle: "亚参叻沙",
    description:
      "サバの出汁とタマリンドの酸味が効いた、ペナン発祥の魚介麺。パイナップル、ミント、タマネギの爽やかなトッピングが絶妙。本場は Air Itam の Pasar 内。",
    place: "Air Itam Laksa (Pasar Air Itam)",
    image: pexelUrl(9772442),
  },
  {
    name: "Nasi Kandar",
    subtitle: "ナシカンダー",
    description:
      "インド系マレーシア料理の金字塔。ご飯にカレーをかけ、好みのおかずを選ぶスタイル。1907年創業の Hameediyah と Line Clear がペナン二大巨塔。",
    place: "Line Clear / Hameediyah",
    image: pexelUrl(17661072),
  },
  {
    name: "Cendol",
    subtitle: "煎蕊",
    description:
      "ペナンの暑さにぴったりのスイーツ。パンダン風味の緑ゼリーにココナッツミルクと黒蜜をかけて。Lebuh Keng Kwee の Penang Road Famous Cendol が行列必至。",
    place: "Lebuh Keng Kwee",
    image: pexelUrl(8306187),
  },
  {
    name: "Wantan Mee",
    subtitle: "云吞面",
    description:
      "ちぢれ麺に醤油ベースのタレ、チャーシューとワンタンをのせた中国系ペナン料理。朝食の定番。Macallum Street の Uncle Seng が地元で大人気。",
    place: "Macallum Street (Uncle Seng)",
    image: pexelUrl(37121509),
  },
  {
    name: "Roti Canai",
    subtitle: "ロティチャナイ",
    description:
      "インド系の平焼きパン。外はパリッと中はモチモチ。カレーディップでいただく朝食の王様。Transfer Road の Roti Canai がペナン最古参。",
    place: "Transfer Road",
    image: pexelUrl(37555450),
  },
  {
    name: "Tomato Egg Stir-fry",
    subtitle: "番茄炒蛋",
    description:
      "個人的イチオシ！甘酸っぱいトマトのうまみととろとろの卵が絡んでご飯が止まらなくなる。中華の家庭料理だけど、ペナンのコピティアムで食べると格別。シンプルなのに病みつきになる味。",
    place: "街中のコピティアムで",
    image: pexelUrl(12145329),
  },
  {
    name: "Koei Tew Kung Fue",
    subtitle: "粿条工法",
    description:
      "観光客にはあまり知られていないけど、地元で愛される一品。もっちりした平打ち麺とシャキシャキ野菜の食感が最高。タレが絡んだ麺がとにかく癖になる。",
    place: "ジョージタウンの屋台",
    image: pexelUrl(8983416),
  },
  {
    name: "Dim Sum",
    subtitle: "点心",
    description:
      "エビ好きにはたまらない！いろんな種類があるけど、私はエビ餃子（ハーカウ）が一番好き。皮がもちっとしていて中のエビがぷりぷり。週末の朝に家族連れで賑わう点心店の活気もまたいい。",
    place: "George Town 点心店",
    image: pexelUrl(7394719),
  },
  {
    name: "Coconut Shake",
    subtitle: "ココナッツシェイク",
    description:
      "ペナンの暑さにこれ以上ないくらいの一杯！フレッシュなココナッツの果肉とミルク、氷をブレンドしたシェイクは自然な甘さでめちゃくちゃ飲みやすい。バトゥ・フェリンギのビーチで夕日を見ながら飲むのが最高。",
    place: "Batu Ferringhi ビーチ沿い",
    image: pexelUrl(3186641),
  },
];

export default function FoodSection() {
  return (
    <section id="food" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-penang-yellow/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <span className="text-penang-coral text-sm tracking-[0.2em] uppercase font-medium">
            🍜 Food — Makanan
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-penang-dark mt-3 mb-4">
            誰もが認める
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-penang-coral to-penang-yellow">
              東南アジア食の頂点
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-penang-yellow/20 text-penang-yellow-dark text-xs font-semibold px-3 py-1 rounded-full border border-penang-yellow/30">
              🇲🇾 Selamat Makan!
            </span>
            <span className="text-gray-400 text-xs">— マレー語で「いただきます」</span>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            ペナンは &ldquo;東南アジアの食の都&rdquo; と呼ばれ、世界中の美食家を魅了してやみません。
            屋台から高級店まで、飽くなき美味の探求がここにはあります。
          </p>
        </FadeInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food, index) => (
            <FadeInView key={food.name} delay={index * 80}>
              <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-penang-yellow/20">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                    <div className="mb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-penang-dark">
                          {food.name}
                        </h3>
                        <span className="text-sm text-gray-400">
                          {food.subtitle}
                        </span>
                      </div>
                    </div>
                    {food.place && (
                      <span className="inline-block mt-1.5 text-[10px] bg-penang-yellow/10 text-penang-yellow-dark px-2 py-0.5 rounded-full border border-penang-yellow/20 font-medium">
                        📍 {food.place}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {food.description}
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
