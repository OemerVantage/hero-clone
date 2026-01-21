import { Eye, Target } from "lucide-react";
import { FadeIn, StaggerChildren } from "@/components/motion";

interface Stat {
  value: string;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: "13", suffix: "+", label: "Jahre Erfahrung" },
  { value: "500", suffix: "+", label: "Zufriedene Kunden" },
  { value: "1000", suffix: "+", label: "Betreute Objekte" },
  { value: "98", suffix: "%", label: "Kundenzufriedenheit" }
];

const StatItem = ({ value, suffix, label }: Stat) => (
  <div>
    <div className="flex items-baseline">
      <span className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
        {value}
      </span>
      <span className="text-xl md:text-2xl font-light text-foreground">
        {suffix}
      </span>
    </div>
    <p className="text-sm text-muted-foreground mt-1">
      {label}
    </p>
  </div>
);

interface VisionMissionCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const VisionMissionCard = ({ icon: Icon, title, description }: VisionMissionCardProps) => (
  <div className="bg-secondary rounded-[32px] p-8">
    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-foreground" />
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-3">
      {title}
    </h3>
    <p className="text-base font-light text-foreground leading-relaxed">
      {description}
    </p>
  </div>
);

const WhoWeAreSection = () => {
  const teamImage = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop";

  return (
    <section className="bg-background py-16 md:py-24 px-6 md:px-12 lg:px-20 xl:px-[240px]">
      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Column - Text & Stats */}
        <FadeIn direction="right" className="lg:w-2/5">
          <span className="inline-flex items-center px-6 py-2 bg-secondary border border-border rounded-full text-lg font-light text-foreground mb-6">
            Über uns
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase tracking-tight text-foreground leading-tight mb-6">
            EXZELLENZ IM
            <br />
            FACILITY MANAGEMENT
            <br />
            SEIT 2011
          </h2>
          
          <p className="text-lg font-light text-foreground leading-relaxed mb-10">
            BeFi Facility Services AG ist ein etabliertes Schweizer Unternehmen mit Sitz in Winterthur. 
            Unter der Leitung von Fisnik Dauti bieten wir ganzheitliche Lösungen für Gebäudebetreuung 
            und -pflege – professionell, zuverlässig und kundenorientiert.
          </p>
          
          {/* Stats Grid 2x2 */}
          <StaggerChildren 
            staggerDelay={0.1} 
            direction="up"
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </StaggerChildren>
        </FadeIn>
        
        {/* Right Column - Team Photo */}
        <FadeIn direction="left" delay={0.2} className="lg:w-3/5">
          <img 
            src={teamImage}
            alt="Our Team"
            className="w-full h-auto rounded-[32px] object-cover"
          />
        </FadeIn>
      </div>

      {/* Vision/Mission Cards - Aligned with right column */}
      <div className="lg:ml-auto lg:w-3/5 mt-6">
        <StaggerChildren 
          staggerDelay={0.15} 
          direction="up"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <VisionMissionCard 
            icon={Eye}
            title="Unsere Vision"
            description="Führend im Schweizer Facility Management mit höchsten Qualitätsstandards und nachhaltigen Methoden."
          />
          <VisionMissionCard 
            icon={Target}
            title="Unsere Mission"
            description="Erstklassige Gebäudedienstleistungen durch Innovation, Nachhaltigkeit und persönlichen Service für jedes Objekt."
          />
        </StaggerChildren>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
