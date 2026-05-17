import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FoodSection from "@/components/FoodSection";
import ArtSection from "@/components/ArtSection";
import CultureSection from "@/components/CultureSection";
import NatureSection from "@/components/NatureSection";
import GallerySection from "@/components/GallerySection";
import TipsSection from "@/components/TipsSection";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <WaveDivider />
      <AboutSection />
      <WaveDivider flip />
      <FoodSection />
      <WaveDivider />
      <ArtSection />
      <WaveDivider flip />
      <CultureSection />
      <WaveDivider />
      <NatureSection />
      <WaveDivider flip />
      <GallerySection />
      <TipsSection />
    </>
  );
}
