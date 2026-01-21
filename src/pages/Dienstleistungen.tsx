import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { Sparkles, Wrench, Trees, Home, Building, Factory, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceDetail {
  icon: React.ReactNode;
  title: string;
  description: string;
  services: string[];
  image: string;
}

const serviceDetails: ServiceDetail[] = [
  {
    icon: <Sparkles className="w-6 h-6 text-foreground" />,
    title: "Reinigung & Unterhalt",
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
    title: "Hauswartung & Technischer Service",
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
    title: "Garten & Aussenanlagen",
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

const ServiceDetailSection = ({ 
  service, 
  reversed 
}: { 
  service: ServiceDetail; 
  reversed?: boolean;
}) => (
  <FadeIn direction="up" className="mb-16 lg:mb-24">
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>
      {/* Image */}
      <div className={`relative rounded-[32px] overflow-hidden aspect-[4/3] ${reversed ? 'lg:order-2' : ''}`}>
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className={reversed ? 'lg:order-1' : ''}>
        <div className="w-[60px] h-[60px] bg-secondary rounded-full flex items-center justify-center mb-6">
          {service.icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 uppercase tracking-tight">
          {service.title}
        </h3>
        <p className="text-lg font-light text-foreground leading-relaxed mb-6">
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
    </div>
  </FadeIn>
);

const Dienstleistungen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 xl:px-[240px]">
        <FadeIn direction="up" className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-2 bg-secondary border border-border rounded-full text-lg font-light mb-6">
            Unsere Dienstleistungen
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase tracking-tight leading-tight text-foreground mb-6">
            PROFESSIONELLE FACILITY SERVICES FÜR JEDEN BEDARF
          </h1>
          <p className="text-lg md:text-xl font-light text-foreground leading-relaxed">
            Von der klassischen Reinigung bis zu spezialisierten Facility Management-Services – 
            wir bieten ganzheitliche Lösungen für Ihre Immobilie. Qualität, Zuverlässigkeit und 
            persönlicher Service stehen bei uns an erster Stelle.
          </p>
        </FadeIn>
      </section>

      {/* Service Details */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-[240px] pb-16 md:pb-24">
        {serviceDetails.map((service, index) => (
          <ServiceDetailSection 
            key={service.title} 
            service={service} 
            reversed={index % 2 === 1}
          />
        ))}
      </section>

      {/* Target Groups Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 xl:px-[240px] bg-secondary">
        <FadeIn direction="up" className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-2 bg-background border border-border rounded-full text-lg font-light mb-6">
            Zielgruppen
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight leading-tight text-foreground">
            FÜR WEN WIR ARBEITEN
          </h2>
        </FadeIn>

        <StaggerChildren 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {targetGroups.map((group) => (
            <div 
              key={group.title}
              className="bg-background rounded-[24px] p-6 text-center"
            >
              <div className="w-[60px] h-[60px] bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                {group.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {group.title}
              </h3>
              <p className="text-foreground font-light text-sm">
                {group.description}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 xl:px-[240px]">
        <FadeIn direction="up" className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight leading-tight text-foreground mb-6">
            INTERESSE AN UNSEREN DIENSTLEISTUNGEN?
          </h2>
          <p className="text-lg font-light text-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine unverbindliche Beratung und ein massgeschneidertes Angebot 
            für Ihre Anforderungen.
          </p>
          <Link 
            to="/#contact"
            className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-8 py-4 font-medium hover:opacity-90 transition-opacity"
          >
            <span>Jetzt Offerte anfragen</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Dienstleistungen;
