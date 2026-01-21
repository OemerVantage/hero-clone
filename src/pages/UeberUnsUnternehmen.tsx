import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { Eye, Target, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const companyStats = [
  { number: "13", suffix: "+", label: "Jahre Erfahrung" },
  { number: "500", suffix: "+", label: "Zufriedene Kunden" },
  { number: "1000", suffix: "+", label: "Betreute Objekte" },
];

const milestones = [
  {
    year: "2011",
    title: "Gründung in Winterthur",
    description: "Fisnik Dauti gründet BeFi als kleines Reinigungsunternehmen mit einer Vision für exzellenten Service."
  },
  {
    year: "2015",
    title: "Erste Grosskunden",
    description: "Erweiterung des Kundenportfolios um gewerbliche und industrielle Auftraggeber."
  },
  {
    year: "2018",
    title: "Qualitätszertifizierung",
    description: "ISO 9001 Zertifizierung und Einführung standardisierter Qualitätsprozesse."
  },
  {
    year: "2022",
    title: "Wachstum & Expansion",
    description: "50 Mitarbeiter stark, Ausbau der Dienstleistungen auf die ganze Deutschschweiz."
  },
  {
    year: "2025",
    title: "Digitale Transformation",
    description: "Einführung digitaler Tools für effizientere Abläufe und bessere Kundenbetreuung."
  }
];

const UeberUnsUnternehmen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="px-4 md:px-6 pb-6">
        <div className="relative w-full h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80"
            alt="BeFi Firmengebäude"
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
              <div className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90 mb-3">
                Über uns
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight mb-3 md:mb-4">
                UNTERNEHMEN & GESCHICHTE
              </h1>

              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-md">
                Von der Gründung bis heute – entdecken Sie die Entwicklung von 
                BeFi Facility Services AG und unsere Vision für die Zukunft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unternehmensgeschichte Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="w-full lg:w-[45%] flex justify-center">
                <div className="rounded-[20px] md:rounded-[24px] overflow-hidden max-w-[500px] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="BeFi Team bei der Arbeit"
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

      {/* Timeline Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-secondary">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
            {/* Centered Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 md:px-6 py-2 bg-background border border-border rounded-full text-base md:text-lg font-light mb-4 md:mb-6">
                Unsere Meilensteine
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight leading-tight text-foreground mb-4">
                DIE ENTWICKLUNG VON BEFI
              </h2>
              <p className="text-base md:text-lg font-light text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                Von der Gründung bis heute – entdecken Sie die wichtigsten 
                Meilensteine unserer Unternehmensgeschichte.
              </p>
            </div>
          </FadeIn>

          {/* Premium Timeline */}
          <StaggerChildren
            className="flex flex-col"
            staggerDelay={0.12}
          >
            {milestones.map((milestone, index) => (
              <div key={milestone.year}>
                {/* Timeline Card */}
                <div className="bg-background rounded-[20px] md:rounded-[24px] p-6 md:p-8 lg:p-10 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row gap-5 md:gap-8">
                    {/* Year Badge */}
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-foreground text-background rounded-2xl text-xl md:text-2xl font-bold group-hover:scale-105 transition-transform duration-300">
                        {milestone.year}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-0.5 bg-primary" />
                        <h3 className="text-base md:text-lg font-semibold uppercase tracking-wide text-foreground">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < milestones.length - 1 && (
                  <div className="flex justify-center py-3 md:py-4">
                    <div className="w-0.5 h-8 md:h-12 bg-gradient-to-b from-border via-primary/30 to-border rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-12 md:py-16 lg:py-24">
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
                  LERNEN SIE UNSER TEAM KENNEN
                </h2>
                <p className="text-base md:text-lg font-light text-foreground leading-relaxed">
                  Entdecken Sie die Menschen hinter BeFi – unser engagiertes Team 
                  und die Werte, die uns antreiben.
                </p>
              </div>
              <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                <Link to="/ueber-uns/team" className="btn-explore text-sm md:text-base">
                  <span>Zum Team</span>
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

export default UeberUnsUnternehmen;
