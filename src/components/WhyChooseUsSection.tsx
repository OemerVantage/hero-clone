import { Sparkles, SprayCan, Wrench, Snowflake, Trees, Settings } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Sparkles className="w-7 h-7 text-foreground" />,
    title: "Unterhaltsreinigung",
    description: "Regelmässige Reinigung für Büros, Wohnungen und Gewerberäume nach höchsten Standards."
  },
  {
    icon: <SprayCan className="w-7 h-7 text-foreground" />,
    title: "Grundreinigung",
    description: "Tiefenreinigung, Spezialreinigung und Bauendreinigung für makellose Ergebnisse."
  },
  {
    icon: <Wrench className="w-7 h-7 text-foreground" />,
    title: "Hauswartung",
    description: "Technische Betreuung, Wartung und Überwachung Ihrer Immobilie rund ums Jahr."
  },
  {
    icon: <Snowflake className="w-7 h-7 text-foreground" />,
    title: "Winterdienst",
    description: "Schneeräumung und Eisbekämpfung für sichere Zugänge und Wege."
  },
  {
    icon: <Trees className="w-7 h-7 text-foreground" />,
    title: "Gartenpflege",
    description: "Grünflächenbetreuung, Rasenpflege und professioneller Heckenschnitt."
  },
  {
    icon: <Settings className="w-7 h-7 text-foreground" />,
    title: "Massgeschneiderte Lösungen",
    description: "Individuelle Servicepakete nach Ihren spezifischen Bedürfnissen."
  }
];

const ServiceCard = ({ icon, title, description }: Service) => (
  <div className="bg-secondary rounded-[32px] p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    {/* Icon Container */}
    <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center mb-20">
      {icon}
    </div>
    
    {/* Title */}
    <h3 className="text-[26px] font-semibold text-foreground mb-3 leading-tight">
      {title}
    </h3>
    
    {/* Description */}
    <p className="text-lg font-light text-foreground leading-relaxed">
      {description}
    </p>
  </div>
);

const WhyChooseUsSection = () => {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header - Centered */}
        <FadeIn direction="up" className="text-center mb-8 md:mb-12">
          <span className="inline-flex items-center px-4 md:px-6 py-2 bg-secondary border border-border rounded-full text-base md:text-lg font-light text-foreground mb-4 md:mb-6">
            Warum BeFi?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-foreground leading-tight">
            ENTDECKEN SIE UNSERE
            <br />
            PROFESSIONELLEN FACILITY SERVICES
          </h2>
        </FadeIn>

        {/* 3x2 Service Grid */}
        <StaggerChildren 
          staggerDelay={0.1} 
          direction="up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
