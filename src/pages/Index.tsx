import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FeaturedPropertiesSection from "@/components/FeaturedPropertiesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhatWeOfferSection />
      <WhyChooseUsSection />
      <FeaturedPropertiesSection />
    </div>
  );
};

export default Index;
