import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FeaturedPropertiesSection from "@/components/FeaturedPropertiesSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhatWeOfferSection />
      <WhyChooseUsSection />
      <FeaturedPropertiesSection />
      <WhoWeAreSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
