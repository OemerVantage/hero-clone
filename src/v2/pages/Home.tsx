// BeFi v2 — Home page composition. Ported from app.jsx (without the palette switcher).
import { Header } from "@/v2/components/Header";
import { Footer } from "@/v2/components/Footer";
import { V2Page } from "@/v2/components/V2Page";
import { Hero } from "@/v2/components/home/Hero";
import { ValueProps } from "@/v2/components/home/ValueProps";
import { Services } from "@/v2/components/home/Services";
import { WhoWeAre } from "@/v2/components/home/WhoWeAre";
import { Process } from "@/v2/components/home/Process";
import { Testimonials } from "@/v2/components/home/Testimonials";
import { Faq } from "@/v2/components/home/Faq";
import { ContactHome } from "@/v2/components/home/ContactHome";

export default function Home() {
  return (
    <V2Page>
      <Header active="home" />
      <Hero />
      <ValueProps />
      <Services />
      <WhoWeAre />
      <Process />
      <Testimonials />
      <Faq />
      <ContactHome />
      <Footer />
    </V2Page>
  );
}
