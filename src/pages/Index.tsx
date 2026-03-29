import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesStrip from "@/components/FeaturesStrip";
import GameShowcase from "@/components/GameShowcase";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesStrip />
      <GameShowcase />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default Index;
