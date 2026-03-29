import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesStrip from "@/components/FeaturesStrip";
import StorySection from "@/components/StorySection";
import StagesSection from "@/components/StagesSection";
import CharactersSection from "@/components/CharactersSection";
import MediaSection from "@/components/MediaSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesStrip />
      <StorySection />
      <StagesSection />
      <CharactersSection />
      <MediaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
