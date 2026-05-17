const galleryItems = [
  { label: "チャイナタウンの路地", image: "https://images.pexels.com/photos/17168624/pexels-photo-17168624.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop" },
  { label: "ジョージタウンのショップハウス", image: "https://images.pexels.com/photos/6770742/pexels-photo-6770742.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop" },
  { label: "クラン・ジャッティの水上集落", image: "https://images.pexels.com/photos/35421794/pexels-photo-35421794.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop" },
  { label: "ペナンヒルからの夜景", image: "https://images.pexels.com/photos/31019129/pexels-photo-31019129.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop" },
  { label: "ストリートフードの屋台", image: "https://images.pexels.com/photos/32541938/pexels-photo-32541938.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop" },
  { label: "ペナン・ストランドの桟橋", image: "https://images.pexels.com/photos/1465993/pexels-photo-1465993.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop" },
  { label: "モスクと寺院の調和", image: "https://images.pexels.com/photos/4685799/pexels-photo-4685799.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop" },
  { label: "熱帯の夕暮れ", image: "https://images.pexels.com/photos/34017118/pexels-photo-34017118.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop" },
  { label: "バトゥ・フェリンギの海", image: "https://images.pexels.com/photos/29389365/pexels-photo-29389365.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="palm-silhouette -bottom-10 -left-10 opacity-[0.02] text-[12rem]">🌴</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-penang-coral text-sm tracking-[0.2em] uppercase font-medium">
            📸 Gallery — Galeri
          </span>
          <h2 className="section-title mt-3 mb-4">
            ペナンの風景
          </h2>
          <p className="section-subtitle">
            言葉よりも雄弁に、ペナンの魅力を色で感じてください。
            <br />
            <span className="text-gray-400 text-sm">Cantiknya! — 美しい!</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-sm font-medium drop-shadow-lg">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
