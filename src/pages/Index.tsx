import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CompanyIntroSection from "@/components/CompanyIntroSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import FeaturedPropertiesSection from "@/components/FeaturedPropertiesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* 1. Hero — Aufmerksamkeit & Markenversprechen */}
      <HeroSection />
      {/* 2. Company Intro — Wer ist BeFi? Kurzvorstellung mit Stats (dunkler Akzent) */}
      <CompanyIntroSection />
      {/* 3. Value Proposition — Warum BeFi? (4 Gründe) */}
      <ValuePropositionSection />
      {/* 3. Services — Was bieten wir an? */}
      <WhatWeOfferSection />
      {/* 4. Proof — Referenzen direkt nach Services beantworten "Können die das?" */}
      <FeaturedPropertiesSection />
      {/* 5. Detail-Leistungen — Vertieft das Angebot */}
      <WhyChooseUsSection />
      {/* 6. Über uns — Erst wenn der Lead überzeugt ist */}
      <WhoWeAreSection />
      {/* 7. Testimonials — Emotionale Validierung */}
      <TestimonialsSection />
      {/* 8. FAQ — Letzte Einwände ausräumen */}
      <FAQSection />
      {/* 9. Contact — Conversion */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
