export default function ArtSection() {
  return (
    <section id="art" className="py-20 md:py-32 bg-penang-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-penang-coral text-sm tracking-[0.2em] uppercase font-medium">
            Street Art
          </span>
          <h2 className="section-title mt-3 mb-4">
            街全体がギャラリー
          </h2>
          <p className="section-subtitle">
            ジョージタウンの路地を歩けば、そこは屋根のない美術館。
            リトアニア人アーティスト、アーネスト・ザカレヴィッチの壁画をきっかけに、
            街中がキャンバスに変わりました。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Children on a Bicycle",
              desc: "ペナンで最も有名な壁画。自転車に乗った子どもたちの生き生きとした表情が、路地に命を吹き込む。",
              image: "https://images.pexels.com/photos/30867351/pexels-photo-30867351.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            },
            {
              title: "Boy on a Chair",
              desc: "古いショップハウスの壁に描かれた少年。椅子に立ち、何かを見つめる姿が不思議な物語を感じさせる。",
              image: "https://images.pexels.com/photos/12587163/pexels-photo-12587163.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            },
            {
              title: "Wire Mural & Hidden Art",
              desc: "壁画だけでなく、鉄線アートも街の至る所に。路地裏の細道を入ると、思いがけないアートに出会える。",
              image: "https://images.pexels.com/photos/35222171/pexels-photo-35222171.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            },
          ].map((art) => (
            <div key={art.title} className="card">
              <div className="h-56 relative overflow-hidden">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-penang-dark mb-2">
                  {art.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {art.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-6 md:p-10 shadow-md">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <h4 className="font-bold text-penang-dark mb-2">
                🗺️ アート散策マップ
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                ジョージタウンはコンパクトなので徒歩で回れます。おすすめは朝早く、
                観光客が少ない時間帯。路地裏を迷いながら、自分のお気に入りの壁画を探すのが醍醐味です。
              </p>
            </div>
            <div className="bg-penang-coral/10 rounded-xl px-5 py-3 text-sm text-penang-coral font-medium whitespace-nowrap">
              所要時間: 2-3時間
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
