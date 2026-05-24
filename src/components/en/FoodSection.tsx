"use client";

import FadeInView from "@/components/FadeInView";

function pexelUrl(id: number) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop`;
}

const foods = [
  {
    name: "Char Koay Teow",
    subtitle: "Stir-fried Rice Noodles",
    description:
      "Penang&apos;s #1 street food. Flat rice noodles stir-fried over high heat with prawns, Chinese sausage, and bean sprouts in dark soy sauce. The best spots are at Lorong Selamat and Siam Road.",
    place: "Lorong Selamat / Siam Road",
    image: pexelUrl(8983416),
  },
  {
    name: "Assam Laksa",
    subtitle: "Sour Fish Noodle Soup",
    description:
      "A Penang original — a tangy fish-based noodle soup flavored with mackerel broth and tamarind. Topped with pineapple, mint, and onion for a refreshing finish. The authentic spot is at Air Itam Market.",
    place: "Air Itam Laksa (Pasar Air Itam)",
    image: pexelUrl(9772442),
  },
  {
    name: "Nasi Kandar",
    subtitle: "Steamed Rice with Curries",
    description:
      "The pinnacle of Indian-Malaysian cuisine. Steamed rice served with a variety of curries and side dishes of your choice. Hameediyah (est. 1907) and Line Clear are Penang&apos;s two legendary spots.",
    place: "Line Clear / Hameediyah",
    image: pexelUrl(17661072),
  },
  {
    name: "Cendol",
    subtitle: "Shaved Ice Dessert",
    description:
      "The perfect treat for Penang&apos;s tropical heat. Pandan-flavored green jelly with coconut milk and palm sugar syrup. Penang Road Famous Cendol at Lebuh Keng Kwee always has a queue.",
    place: "Lebuh Keng Kwee",
    image: pexelUrl(8306187),
  },
  {
    name: "Wantan Mee",
    subtitle: "Wonton Noodles",
    description:
      "Springy egg noodles in a soy-based sauce, topped with char siu (barbecued pork) and wontons. A breakfast staple. Uncle Seng at Macallum Street is a local favorite.",
    place: "Macallum Street (Uncle Seng)",
    image: pexelUrl(37121509),
  },
  {
    name: "Roti Canai",
    subtitle: "Flaky Flatbread",
    description:
      "An Indian-style flatbread — crispy on the outside, soft and chewy inside. Served with curry dip, it&apos;s the king of Malaysian breakfasts. The Transfer Road spot is Penang&apos;s oldest.",
    place: "Transfer Road",
    image: pexelUrl(37555450),
  },
  {
    name: "Tomato Egg Stir-fry",
    subtitle: "番茄炒蛋 (Fānqié Chǎo Dàn)",
    description:
      "A personal favorite! Sweet-and-sour tomatoes pair perfectly with silky scrambled eggs — simple but incredibly addictive. A classic Chinese home-cooked dish, but somehow tastes extra special at a Penang kopitiam. Best enjoyed over steamed rice.",
    place: "At any local kopitiam",
    image: pexelUrl(12145329),
  },
  {
    name: "Koei Tew Kung Fue",
    subtitle: "粿条工法",
    description:
      "Not well-known among tourists, but a local treasure. Chewy flat rice noodle sheets stir-fried with crunchy vegetables in a savory sauce. The texture contrast is incredible — soft, sticky noodles with crisp veggies in every bite.",
    place: "Hawker stalls in George Town",
    image: pexelUrl(8983416),
  },
  {
    name: "Dim Sum",
    subtitle: "点心 (Diǎnxīn)",
    description:
      "A paradise for shrimp lovers! There are so many varieties, but my favorite is har gow (shrimp dumplings) — translucent chewy wrappers filled with juicy whole prawns. Weekend mornings at a bustling dim sum restaurant is a Penang ritual not to miss.",
    place: "Dim sum restaurants in George Town",
    image: pexelUrl(7394719),
  },
  {
    name: "Coconut Shake",
    subtitle: "Coconut Shake",
    description:
      "The ultimate thirst-quencher in Penang&apos;s tropical heat! Fresh coconut meat blended with coconut milk and ice — naturally sweet and incredibly refreshing. Best enjoyed at a beach stall in Batu Ferringhi while watching the sunset.",
    place: "Batu Ferringhi beachside stalls",
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
            The Undisputed
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-penang-coral to-penang-yellow">
              Food Capital of Southeast Asia
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-penang-yellow/20 text-penang-yellow-dark text-xs font-semibold px-3 py-1 rounded-full border border-penang-yellow/30">
              🇲🇾 Selamat Makan!
            </span>
            <span className="text-gray-400 text-xs">— &ldquo;Enjoy your meal&rdquo; in Malay</span>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Penang is known as the &ldquo;Food Capital of Southeast Asia&rdquo; and continues to captivate food lovers from around the world. From street stalls to fine dining, an endless culinary adventure awaits.
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
