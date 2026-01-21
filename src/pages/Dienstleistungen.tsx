import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { Sparkles, Wrench, Trees, Home, Building, Factory, Building2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const heroStats = [
  { number: "3", suffix: "", label: "Kernbereiche" },
  { number: "8", suffix: "+", label: "Services pro Bereich" },
  { number: "100", suffix: "%", label: "Kundenfokus" },
];

const serviceAreas = [
  {
    icon: <Sparkles className="w-6 h-6 text-foreground" />,
    badge: "Reinigung & Unterhalt",
    title: "PROFESSIONELLE REINIGUNG FÜR JEDEN BEREICH",
    description: "Professionelle Reinigungsarbeiten für Wohnungen, Büros, Industrie- und Gewerberäume. Wir sorgen für makellose Sauberkeit mit modernsten Techniken und umweltfreundlichen Mitteln.",
    services: [
      "Unterhaltsreinigung (regelmässig)",
      "Grundreinigung & Tiefenreinigung",
      "Spezialreinigung (Böden, Teppiche, Polster)",
      "Fenster- und Fassadenreinigung",
      "Bau- und Bauendreinigung",
      "Industriereinigung (Anlagen, Werkstätten)",
      "Umzugsreinigung",
      "Dachrinnenreinigung (SkyVac-Technik)"
    ],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
  },
  {
    icon: <Wrench className="w-6 h-6 text-foreground" />,
    badge: "Hauswartung & Technischer Service",
    title: "WARTUNG UND BETREUUNG IHRER LIEGENSCHAFT",
    description: "Laufende Betreuung und Pflege von Immobilien – technisch und organisatorisch. Wir sorgen für Funktionalität, Sicherheit und Werterhalt Ihrer Liegenschaft.",
    services: [
      "Überwachung und Wartung der Haustechnik",
      "Kontrolle Heizung, Lüftung, Sanitär",
      "Pflege technischer Anlagen",
      "Koordination von Fremdfirmen",
      "Winterdienst (Schneeräumen, Eisbekämpfung)",
      "Notdienst & Pikettdienst nach Bedarf"
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
  },
  {
    icon: <Trees className="w-6 h-6 text-foreground" />,
    badge: "Garten & Aussenanlagen",
    title: "GEPFLEGTE GRÜNANLAGEN DAS GANZE JAHR",
    description: "Gartenpflege und Grünflächenbetreuung für gepflegte und einladende Aussenbereiche. Das ganze Jahr über kümmern wir uns um Ihre Grünanlagen.",
    services: [
      "Rasen- und Wiesenpflege inkl. Düngung",
      "Herbst- und Winterarbeiten",
      "Hecken- und Strauchschnitt",
      "Professionelle Baumarbeiten",
      "Entsorgung von Grüngut",
      "Pflege von Beeten und Pflanzflächen"
    ],
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
        <div className="relative w-full h-[calc(100vh-100px)] min-h-[600px] rounded-2xl md:rounded-3xl overflow-hidden">
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
          <div className="relative h-full flex flex-col justify-between p-8 md:p-12 lg:p-16">
            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-center max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-6">
                UNSERE
                <br />
                DIENSTLEISTUNGEN
              </h1>

              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Von der klassischen Reinigung bis zu spezialisierten Facility Management-Services – 
                wir bieten ganzheitliche Lösungen für Ihre Immobilie. Qualität, Zuverlässigkeit und 
                persönlicher Service stehen bei uns an erster Stelle.
              </p>

              <Link to="/#contact" className="btn-explore w-fit">
                <span>Jetzt Offerte anfragen</span>
                <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12 mt-8">
              {heroStats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="stat-number">
                    {stat.number}
                    {stat.suffix && <sup className="text-lg md:text-xl align-super">{stat.suffix}</sup>}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas - Asymmetric Two-Column Layout */}
      {serviceAreas.map((service, index) => {
        const isReversed = index % 2 === 1;
        
        return (
          <section 
            key={service.badge}
            className="py-16 md:py-24 px-6 md:px-12 lg:px-20 xl:px-[240px]"
          >
            <FadeIn direction="up">
              <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12`}>
                {/* Text Content - 40% */}
                <div className="lg:w-2/5 flex flex-col justify-center">
                  <div className="inline-flex items-center px-6 py-2 bg-secondary border border-border rounded-full text-lg font-light mb-6 w-fit">
                    {service.badge}
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-tight leading-tight text-foreground mb-6">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg font-light text-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground">
                        <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Image - 60% */}
                <div className="lg:w-3/5">
                  <div className="relative rounded-[32px] overflow-hidden aspect-[4/3]">
                    <img 
                      src={service.image} 
                      alt={service.badge} 
                      className="w-full h-full object-cover"
                    />
                    {/* Icon Badge on Image */}
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                      {service.icon}
                    </div>
                  </div>
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
