"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MarkerData {
  pos: [number, number];
  title: string;
  desc: string;
  color: string;
}

const markers: MarkerData[] = [
  { pos: [5.4141, 100.3288], title: "George Town", desc: "Heritage Site · Shop Houses · Street Art", color: "#ff6b6b" },
  { pos: [5.4063, 100.2839], title: "Kek Lok Si Temple", desc: "Southeast Asia's largest Buddhist temple", color: "#ff6b6b" },
  { pos: [5.4118, 100.3382], title: "Clan Jetties", desc: "Water village on stilts", color: "#ff6b6b" },
  { pos: [5.4110, 100.3320], title: "Little India", desc: "Spice-scented streets", color: "#ff6b6b" },
  { pos: [5.4135, 100.3370], title: "Pinang Peranakan Mansion", desc: "Baba Nyonya heritage museum", color: "#ff6b6b" },
  { pos: [5.4730, 100.2540], title: "Batu Ferringhi", desc: "Penang's premier beach", color: "#2d8a4e" },
  { pos: [5.4233, 100.2647], title: "Penang Hill", desc: "Panoramic viewpoint", color: "#2d8a4e" },
  { pos: [5.4578, 100.2108], title: "Penang National Park", desc: "Rainforest & hidden beaches", color: "#2d8a4e" },
  { pos: [5.4138, 100.3310], title: "Children on a Bicycle", desc: "Penang's most famous mural", color: "#f5c842" },
  { pos: [5.4145, 100.3340], title: "Boy on a Chair", desc: "Street art", color: "#f5c842" },
  { pos: [5.4130, 100.3360], title: "Wire Murals", desc: "Iron wire art", color: "#f5c842" },
  { pos: [5.4142, 100.3290], title: "Hawker Street", desc: "Char Koay Teow at Lorong Selamat", color: "#ff8e8e" },
  { pos: [5.4100, 100.3360], title: "Line Clear Nasi Kandar", desc: "Penang's most famous nasi kandar", color: "#ff8e8e" },
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
      marker.bindPopup(`
        <div style="font-family:sans-serif;min-width:180px">
          <strong style="font-size:14px;color:#1a1a2e">${m.title}</strong>
          <p style="font-size:12px;color:#666;margin:4px 0 0">${m.desc}</p>
        </div>
      `);
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
