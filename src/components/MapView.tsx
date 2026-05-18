"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MarkerData {
  id: string;
  pos: [number, number];
  title: string;
  desc: string;
  color: string;
  img: string;
  sectionId: string;
}

const markers: MarkerData[] = [
  { id: "georgetown", pos: [5.4141, 100.3288], title: "ジョージタウン", desc: "世界遺産地区・ショップハウス・壁画", color: "#ff6b6b", img: "https://images.pexels.com/photos/6770742/pexels-photo-6770742.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop", sectionId: "culture" },
  { id: "kek-lok-si", pos: [5.4063, 100.2839], title: "極楽寺 (Kek Lok Si)", desc: "東南アジア最大の仏教寺院", color: "#ff6b6b", img: "https://images.pexels.com/photos/10897082/pexels-photo-10897082.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop", sectionId: "culture" },
  { id: "clan-jetties", pos: [5.4118, 100.3382], title: "クラン・ジャッティ", desc: "水上集落", color: "#ff6b6b", img: "https://images.pexels.com/photos/35421794/pexels-photo-35421794.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop", sectionId: "culture" },
  { id: "little-india", pos: [5.4110, 100.3320], title: "リトル・インディア", desc: "スパイス香る街", color: "#ff6b6b", img: "https://images.pexels.com/photos/35164824/pexels-photo-35164824.png?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop", sectionId: "culture" },
  { id: "peranakan-mansion", pos: [5.4135, 100.3370], title: "Pinang Peranakan Mansion", desc: "ババ・ニョニャ博物館", color: "#ff6b6b", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Penang_Peranakan_Mansion_by_C.W._Tan_01.jpg/200px-Penang_Peranakan_Mansion_by_C.W._Tan_01.jpg", sectionId: "culture" },
  { id: "batu-ferringhi", pos: [5.4730, 100.2540], title: "バトゥ・フェリンギ", desc: "ペナン代表ビーチ", color: "#2d8a4e", img: "https://images.pexels.com/photos/11789655/pexels-photo-11789655.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop", sectionId: "nature" },
  { id: "penang-hill", pos: [5.4233, 100.2647], title: "ペナンヒル", desc: "パノラマ展望台", color: "#2d8a4e", img: "https://images.pexels.com/photos/16714837/pexels-photo-16714837.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop", sectionId: "nature" },
  { id: "national-park", pos: [5.4578, 100.2108], title: "ペナン国立公園", desc: "原生林・隠れビーチ", color: "#2d8a4e", img: "https://images.pexels.com/photos/32066576/pexels-photo-32066576.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop", sectionId: "nature" },
  { id: "children-bicycle", pos: [5.4138, 100.3310], title: "Children on a Bicycle", desc: "ペナン有名壁画", color: "#f5c842", img: "https://images.pexels.com/photos/30867351/pexels-photo-30867351.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop", sectionId: "art" },
  { id: "boy-chair", pos: [5.4145, 100.3340], title: "Boy on a Chair", desc: "ストリートアート", color: "#f5c842", img: "https://images.pexels.com/photos/12587163/pexels-photo-12587163.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop", sectionId: "art" },
  { id: "wire-murals", pos: [5.4130, 100.3360], title: "Wire Murals", desc: "鉄線アート", color: "#f5c842", img: "https://images.pexels.com/photos/35222171/pexels-photo-35222171.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop", sectionId: "art" },
  { id: "food-street", pos: [5.4142, 100.3290], title: "屋台街", desc: "Lorong Selamat の Char Koay Teow", color: "#ff8e8e", img: "https://images.pexels.com/photos/8983416/pexels-photo-8983416.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop", sectionId: "food" },
  { id: "line-clear", pos: [5.4100, 100.3360], title: "Line Clear Nasi Kandar", desc: "ペナンで最も有名なナシカンダ", color: "#ff8e8e", img: "https://images.pexels.com/photos/17661072/pexels-photo-17661072.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop", sectionId: "food" },
];

function createIcon(color: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" viewBox="0 0 32 42">
    <path d="M16 0C7.2 0 0 7.2 0 16c0 12 16 26 16 26s16-14 16-26C32 7.2 24.8 0 16 0z" fill="${color}" stroke="white" stroke-width="2"/>
    <circle cx="16" cy="16" r="6" fill="white"/>
  </svg>`;
  return L.divIcon({
    html: svg,
    className: "custom-marker",
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -42],
  });
}

export default function MapView() {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    const map = L.map(containerRef.current, {
      center: [5.42, 100.30],
      zoom: 12,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 18,
    }).addTo(map);

    markers.forEach((m) => {
      const icon = createIcon(m.color);
      const marker = L.marker(m.pos, { icon }).addTo(map);

      const popupContent = `
        <div class="map-popup-content">
          <div class="map-popup-img-wrap">
            <img class="map-popup-img" src="${m.img}" alt="${m.title}" loading="lazy" />
          </div>
          <div class="map-popup-body">
            <strong class="map-popup-title">${m.title}</strong>
            <p class="map-popup-desc">${m.desc}</p>
            <button class="map-popup-btn" data-marker-id="${m.id}">
              詳しく見る
            </button>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);

      marker.on("popupopen", () => {
        const btn = document.querySelector(
          `[data-marker-id="${m.id}"]`
        ) as HTMLButtonElement | null;
        if (btn) {
          btn.onclick = () => {
            const el = document.getElementById(m.sectionId);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
              map.closePopup();
            }
          };
        }
      });
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
