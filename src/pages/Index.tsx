import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesStrip from "@/components/FeaturesStrip";
import StorySection from "@/components/StorySection";
import StagesSection from "@/components/StagesSection";
import CharactersSection from "@/components/CharactersSection";
import MediaSection from "@/components/MediaSection";
import RoadmapSection from "@/components/RoadmapSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ScrollReveal>
        <FeaturesStrip />
      </ScrollReveal>
      <ScrollReveal>
        <StorySection />
      </ScrollReveal>
      <ScrollReveal>
        <StagesSection />
      </ScrollReveal>
      <ScrollReveal>
        <CharactersSection />
      </ScrollReveal>
      <ScrollReveal>
        <MediaSection />
      </ScrollReveal>
      <ScrollReveal>
        <RoadmapSection />
      </ScrollReveal>
      <ScrollReveal>
        <NewsletterSection />
      </ScrollReveal>
      <FooterSection />
    </div>
  );
};

export default Index;
