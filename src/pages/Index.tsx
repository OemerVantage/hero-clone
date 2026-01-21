import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FeaturedPropertiesSection from "@/components/FeaturedPropertiesSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhatWeOfferSection />
      <WhyChooseUsSection />
      <FeaturedPropertiesSection />
      <WhoWeAreSection />
    </div>
  );
};

export default Index;
