import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { CheckCircle, Shield, Leaf, Users, Eye, Target, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const companyStats = [
  { number: "13", suffix: "+", label: "Jahre Erfahrung" },
  { number: "500", suffix: "+", label: "Zufriedene Kunden" },
  { number: "1000", suffix: "+", label: "Betreute Objekte" },
];

const values = [
  {
    icon: <CheckCircle className="w-6 h-6 text-foreground" />,
    title: "Qualität",
    description: "Höchste Standards bei allen unseren Dienstleistungen – ohne Kompromisse."
  },
  {
    icon: <Shield className="w-6 h-6 text-foreground" />,
    title: "Zuverlässigkeit",
    description: "Pünktlich, verlässlich und immer erreichbar – darauf können Sie zählen."
  },
  {
    icon: <Leaf className="w-6 h-6 text-foreground" />,
    title: "Nachhaltigkeit",
    description: "Umweltbewusste Reinigungsmittel und ressourcenschonende Arbeitsweisen."
  },
  {
    icon: <Users className="w-6 h-6 text-foreground" />,
    title: "Kundenorientierung",
    description: "Individuelle Lösungen, die exakt auf Ihre Bedürfnisse zugeschnitten sind."
  }
];

const teamMembers = [
  {
    name: "Fisnik Dauti",
    position: "Geschäftsführer & Gründer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Maria Müller",
    position: "Leiterin Reinigung",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Thomas Weber",
    position: "Leiter Hauswartung",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Sarah Schneider",
    position: "Kundenbetreuung",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

const UeberUns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="px-4 md:px-6 pb-6">
        <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
            alt="BeFi Facility Services Team"
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
            <div className="max-w-xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight mb-3 md:mb-4">
                ÜBER UNS
              </h1>

              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-md">
                Lernen Sie BeFi Facility Services AG kennen – Ihr verlässlicher Partner 
                für professionelle Gebäudebetreuung in der Schweiz seit 2011.
              </p>

              <Link to="/dienstleistungen" className="btn-explore w-fit text-sm md:text-base">
                <span>Unsere Dienstleistungen</span>
                <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Unternehmensgeschichte Section */}
      <section className="py-8 md:py-10 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="w-full lg:w-[45%] flex justify-center">
                <div className="rounded-[20px] md:rounded-[24px] overflow-hidden max-w-[500px] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
                    alt="BeFi Firmengebäude"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-[55%]">
                <div className="inline-flex items-center px-4 md:px-6 py-2 bg-secondary border border-border rounded-full text-base md:text-lg font-light mb-4 md:mb-6">
                  Unsere Geschichte
                </div>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                  SEIT 2011 IHR PARTNER
                </h2>

                <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 md:mb-8">
                  Die BeFi Facility Services AG wurde 2011 von Fisnik Dauti in Winterthur gegründet. 
                  Was als kleines Reinigungsunternehmen begann, ist heute ein etablierter Partner 
                  für ganzheitliche Facility Services in der gesamten Deutschschweiz. Mit Leidenschaft, 
                  Fachkompetenz und einem engagierten Team betreuen wir Privatkunden, Gewerbebetriebe 
                  und Industrieunternehmen.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {companyStats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        {stat.number}<span className="text-accent">{stat.suffix}</span>
                      </div>
                      <div className="text-xs md:text-sm text-foreground/60 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Werte Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-secondary">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
            {/* Two-Column Header */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
              <div className="lg:w-2/5">
                <div className="inline-flex items-center px-4 md:px-6 py-2 bg-background border border-border rounded-full text-base md:text-lg font-light mb-4 md:mb-6">
                  Unsere Werte
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight leading-tight text-foreground">
                  WOFÜR WIR STEHEN
                </h2>
              </div>
              <div className="lg:w-3/5 flex items-end">
                <p className="text-base md:text-lg font-light text-foreground leading-relaxed">
                  Unsere Arbeit basiert auf klaren Werten, die wir täglich leben. 
                  Sie sind das Fundament für langfristige Partnerschaften und 
                  erstklassige Ergebnisse.
                </p>
              </div>
            </div>
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            staggerDelay={0.1}
          >
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-background rounded-[24px] md:rounded-[32px] p-6 md:p-8"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary rounded-full flex items-center justify-center mb-4 md:mb-6">
                  {value.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground font-light text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
            {/* Two-Column Header */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
              <div className="lg:w-2/5">
                <div className="inline-flex items-center px-4 md:px-6 py-2 bg-secondary border border-border rounded-full text-base md:text-lg font-light mb-4 md:mb-6">
                  Unser Team
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight leading-tight text-foreground">
                  DIE MENSCHEN HINTER BEFI
                </h2>
              </div>
              <div className="lg:w-3/5 flex items-end">
                <p className="text-base md:text-lg font-light text-foreground leading-relaxed">
                  Lernen Sie die Menschen kennen, die täglich für Ihre Zufriedenheit 
                  arbeiten. Unser erfahrenes Team vereint Fachkompetenz mit Leidenschaft.
                </p>
              </div>
            </div>
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            staggerDelay={0.1}
          >
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-secondary rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-4 md:mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-light text-foreground/60">
                  {member.position}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-8 md:py-10 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="w-full lg:w-[40%]">
                <div className="inline-flex items-center px-4 md:px-6 py-2 bg-secondary border border-border rounded-full text-base md:text-lg font-light mb-4 md:mb-6">
                  Vision & Mission
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                  UNSER WEG IN DIE ZUKUNFT
                </h2>

                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  Mit klarer Vision und starker Mission gestalten wir die Zukunft 
                  der Facility Services – nachhaltig, innovativ und immer nah am Kunden.
                </p>
              </div>

              {/* Vision & Mission Cards */}
              <div className="w-full lg:w-[60%] flex flex-col gap-4 md:gap-6">
                <div className="bg-secondary rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-background rounded-full flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">Vision</h3>
                    <p className="text-sm md:text-base text-foreground font-light leading-relaxed">
                      Der führende Anbieter für nachhaltige Facility Services in der Schweiz zu sein – 
                      bekannt für Qualität, Innovation und Kundenzufriedenheit.
                    </p>
                  </div>
                </div>

                <div className="bg-secondary rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-background rounded-full flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">Mission</h3>
                    <p className="text-sm md:text-base text-foreground font-light leading-relaxed">
                      Wir schaffen saubere, sichere und gepflegte Umgebungen, in denen Menschen 
                      gerne leben und arbeiten – mit Kompetenz, Engagement und persönlicher Betreuung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
            <div className="bg-secondary rounded-[24px] md:rounded-[32px] p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
              <div className="w-full lg:w-3/5">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase tracking-tight leading-tight text-foreground mb-3 md:mb-4">
                  INTERESSE AN EINER ZUSAMMENARBEIT?
                </h2>
                <p className="text-base md:text-lg font-light text-foreground leading-relaxed">
                  Wir freuen uns darauf, Sie und Ihre Anforderungen kennenzulernen. 
                  Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
                </p>
              </div>
              <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                <Link to="/#contact" className="btn-explore text-sm md:text-base">
                  <span>Jetzt Kontakt aufnehmen</span>
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
    </div>
  );
};

export default UeberUns;
