import Hero from "@/components/en/Hero";
import AboutSection from "@/components/en/AboutSection";
import FoodSection from "@/components/en/FoodSection";
import ArtSection from "@/components/en/ArtSection";
import CultureSection from "@/components/en/CultureSection";
import NatureSection from "@/components/en/NatureSection";
import GallerySection from "@/components/en/GallerySection";
import MapSection from "@/components/en/MapSection";
import TipsSection from "@/components/en/TipsSection";

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
