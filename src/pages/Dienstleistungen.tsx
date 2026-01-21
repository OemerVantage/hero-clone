import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { Home, Building, Factory, Building2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const heroStats = [
  { number: "3", suffix: "", label: "Kernbereiche" },
  { number: "8", suffix: "+", label: "Services pro Bereich" },
  { number: "100", suffix: "%", label: "Kundenfokus" },
];

const serviceAreas = [
  {
    title: "Reinigung & Unterhalt",
    description: "Professionelle Reinigungsarbeiten für Wohnungen, Büros, Industrie- und Gewerberäume. Wir sorgen für makellose Sauberkeit mit modernsten Techniken und umweltfreundlichen Mitteln.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
  },
  {
    title: "Hauswartung & Technischer Service",
    description: "Laufende Betreuung und Pflege von Immobilien – technisch und organisatorisch. Wir sorgen für Funktionalität, Sicherheit und Werterhalt Ihrer Liegenschaft.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
  },
  {
    title: "Garten & Aussenanlagen",
    description: "Gartenpflege und Grünflächenbetreuung für gepflegte und einladende Aussenbereiche. Das ganze Jahr über kümmern wir uns um Ihre Grünanlagen.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
  }
];

const targetGroups = [
  { 
    icon: <Home className="w-6 h-6 text-foreground" />, 
    title: "Privatkunden", 
    description: "Wohnungen, Einfamilienhäuser und private Liegenschaften" 
  },
  { 
    icon: <Building className="w-6 h-6 text-foreground" />, 
    title: "Gewerbekunden", 
    description: "Büros, Läden, Praxen und Geschäftsräume" 
  },
  { 
    icon: <Factory className="w-6 h-6 text-foreground" />, 
    title: "Industriekunden", 
    description: "Produktions- und Lagerhallen, Werkstätten" 
  },
  { 
    icon: <Building2 className="w-6 h-6 text-foreground" />, 
    title: "Immobilienverwaltungen", 
    description: "Liegenschaftsbesitzer und Verwaltungsgesellschaften" 
  }
];

const Dienstleistungen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Like HeroSection.tsx */}
      <section className="px-4 md:px-6 pb-6">
        <div className="relative w-full h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
            alt="Professionelle Reinigung und Facility Services"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.25) 50%, transparent 100%)",
            }}
          />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10">
            {/* Main Content */}
            <div className="max-w-xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight mb-3 md:mb-4">
                UNSERE
                <br />
                DIENSTLEISTUNGEN
              </h1>

              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-md">
                Von der klassischen Reinigung bis zu spezialisierten Facility Management-Services – 
                wir bieten ganzheitliche Lösungen für Ihre Immobilie.
              </p>

              <Link to="/#contact" className="btn-explore w-fit text-sm md:text-base">
                <span>Jetzt Offerte anfragen</span>
                <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas - Compact Layout */}
      {serviceAreas.map((service, index) => {
        const isReversed = index % 2 === 1;
        
        return (
          <section 
            key={service.title}
            className="py-8 md:py-10 lg:py-14"
          >
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
              <FadeIn direction="up">
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-12 lg:gap-16 items-center`}>
                  {/* Image - Compact */}
                  <div className="w-full lg:w-[45%] flex justify-center">
                    <div className="rounded-[20px] md:rounded-[24px] overflow-hidden max-w-[500px] w-full">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-auto object-cover aspect-[4/3]"
                      />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="w-full lg:w-[55%]">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                      {service.title}
                    </h2>
                    
                    <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 md:mb-8">
                      {service.description}
                    </p>
                    
                    <Link 
                      to="/#contact" 
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-colors"
                    >
                      Mehr erfahren
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        );
      })}

      {/* Target Groups Section - Like WhyChooseUsSection */}
      <section className="py-12 md:py-16 lg:py-24 bg-secondary">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
            {/* Two-Column Header */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
              <div className="lg:w-2/5">
                <div className="inline-flex items-center px-4 md:px-6 py-2 bg-background border border-border rounded-full text-base md:text-lg font-light mb-4 md:mb-6">
                  Zielgruppen
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight leading-tight text-foreground">
                  FÜR WEN WIR ARBEITEN
                </h2>
              </div>
              <div className="lg:w-3/5 flex items-end">
                <p className="text-base md:text-lg font-light text-foreground leading-relaxed">
                  Wir betreuen Kunden aus verschiedenen Bereichen – von Privatpersonen über 
                  Gewerbebetriebe bis hin zu Industrieunternehmen und Immobilienverwaltungen. 
                  Für jeden Bedarf die passende Lösung.
                </p>
              </div>
            </div>
          </FadeIn>

          <StaggerChildren 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            staggerDelay={0.1}
          >
            {targetGroups.map((group) => (
              <div 
                key={group.title}
                className="bg-background rounded-[24px] md:rounded-[32px] p-6 md:p-8"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary rounded-full flex items-center justify-center mb-4 md:mb-6">
                  {group.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                  {group.title}
                </h3>
                <p className="text-foreground font-light text-sm leading-relaxed">
                  {group.description}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
            <div className="bg-secondary rounded-[24px] md:rounded-[32px] p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
              <div className="w-full lg:w-3/5">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase tracking-tight leading-tight text-foreground mb-3 md:mb-4">
                  INTERESSE AN UNSEREN DIENSTLEISTUNGEN?
                </h2>
                <p className="text-base md:text-lg font-light text-foreground leading-relaxed">
                  Kontaktieren Sie uns für eine unverbindliche Beratung und ein massgeschneidertes Angebot 
                  für Ihre Anforderungen.
                </p>
              </div>
              <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                <Link to="/#contact" className="btn-explore text-sm md:text-base">
                  <span>Jetzt Offerte anfragen</span>
                  <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Dienstleistungen;
