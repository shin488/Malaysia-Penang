import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FoodSection from "@/components/FoodSection";
import ArtSection from "@/components/ArtSection";
import CultureSection from "@/components/CultureSection";
import NatureSection from "@/components/NatureSection";
import GallerySection from "@/components/GallerySection";
import MapSection from "@/components/MapSection";
import TipsSection from "@/components/TipsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FoodSection />
      <ArtSection />
      <CultureSection />
      <NatureSection />
      <GallerySection />
      <MapSection />
      <TipsSection />
    </>
  );
}
