import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
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
        <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden">
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
          <div className="relative h-full flex flex-col justify-end p-6 md:p-8 lg:p-10">
            {/* Main Content */}
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight mb-4">
                UNSERE
                <br />
                DIENSTLEISTUNGEN
              </h1>

              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 max-w-md">
                Von der klassischen Reinigung bis zu spezialisierten Facility Management-Services – 
                wir bieten ganzheitliche Lösungen für Ihre Immobilie.
              </p>

              <Link to="/#contact" className="btn-explore w-fit">
                <span>Jetzt Offerte anfragen</span>
                <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
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
            className="py-10 md:py-14 px-6 md:px-12 lg:px-20 xl:px-[240px]"
          >
            <FadeIn direction="up">
              <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}>
                {/* Image - Compact */}
                <div className="lg:w-[45%] flex justify-center">
                  <div className="rounded-[24px] overflow-hidden max-w-[500px] w-full">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="lg:w-[55%]">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <Link 
                    to="/#contact" 
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full font-medium transition-colors"
                  >
                    Mehr erfahren
                  </Link>
                </div>
              </div>
            </FadeIn>
          </section>
        );
      })}

      {/* Target Groups Section - Like WhyChooseUsSection */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 xl:px-[240px] bg-secondary">
        <FadeIn direction="up">
          {/* Two-Column Header */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
            <div className="lg:w-2/5">
              <div className="inline-flex items-center px-6 py-2 bg-background border border-border rounded-full text-lg font-light mb-6">
                Zielgruppen
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight leading-tight text-foreground">
                FÜR WEN WIR ARBEITEN
              </h2>
            </div>
            <div className="lg:w-3/5 flex items-end">
              <p className="text-lg font-light text-foreground leading-relaxed">
                Wir betreuen Kunden aus verschiedenen Bereichen – von Privatpersonen über 
                Gewerbebetriebe bis hin zu Industrieunternehmen und Immobilienverwaltungen. 
                Für jeden Bedarf die passende Lösung.
              </p>
            </div>
          </div>
        </FadeIn>

        <StaggerChildren 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {targetGroups.map((group) => (
            <div 
              key={group.title}
              className="bg-background rounded-[32px] p-8"
            >
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-6">
                {group.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {group.title}
              </h3>
              <p className="text-foreground font-light text-sm leading-relaxed">
                {group.description}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 xl:px-[240px]">
        <FadeIn direction="up">
          <div className="bg-secondary rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="lg:w-3/5">
              <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight leading-tight text-foreground mb-4">
                INTERESSE AN UNSEREN DIENSTLEISTUNGEN?
              </h2>
              <p className="text-lg font-light text-foreground leading-relaxed">
                Kontaktieren Sie uns für eine unverbindliche Beratung und ein massgeschneidertes Angebot 
                für Ihre Anforderungen.
              </p>
            </div>
            <div className="lg:w-2/5 flex justify-center lg:justify-end">
              <Link to="/#contact" className="btn-explore">
                <span>Jetzt Offerte anfragen</span>
                <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Dienstleistungen;
