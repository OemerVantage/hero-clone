import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { ArrowUpRight, Building, Users } from "lucide-react";
import { Link } from "react-router-dom";

const companyStats = [
  { number: "13", suffix: "+", label: "Jahre Erfahrung" },
  { number: "500", suffix: "+", label: "Zufriedene Kunden" },
  { number: "1000", suffix: "+", label: "Betreute Objekte" },
];

const subPages = [
  {
    icon: <Building className="w-6 h-6 text-foreground" />,
    title: "Unternehmen & Geschichte",
    description: "Entdecken Sie unsere Meilensteine, Vision und Mission – von der Gründung bis heute.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
    link: "/ueber-uns/unternehmen"
  },
  {
    icon: <Users className="w-6 h-6 text-foreground" />,
    title: "Unser Team",
    description: "Lernen Sie die Menschen kennen, die täglich für Ihre Zufriedenheit arbeiten.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    link: "/ueber-uns/team"
  }
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

      {/* Stats Section */}
      <section className="py-8 md:py-10 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {companyStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                    {stat.number}<span className="text-accent">{stat.suffix}</span>
                  </div>
                  <div className="text-sm md:text-base text-foreground/60 mt-1 md:mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sub-Pages Navigation */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center px-4 md:px-6 py-2 bg-secondary border border-border rounded-full text-base md:text-lg font-light mb-4 md:mb-6">
                Mehr erfahren
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight leading-tight text-foreground">
                ENTDECKEN SIE BEFI
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            staggerDelay={0.15}
          >
            {subPages.map((page) => (
              <Link
                key={page.title}
                to={page.link}
                className="group bg-secondary rounded-[24px] md:rounded-[32px] overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={page.image} 
                    alt={page.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-4">
                        {page.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                        {page.title}
                      </h3>
                      <p className="text-foreground/70 font-light text-sm md:text-base leading-relaxed">
                        {page.description}
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
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
                  INTERESSE AN EINER ZUSAMMENARBEIT?
                </h2>
                <p className="text-base md:text-lg font-light text-foreground leading-relaxed">
                  Wir freuen uns darauf, Sie und Ihre Anforderungen kennenzulernen. 
                  Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
                </p>
              </div>
              <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                <Link to="/kontakt" className="btn-explore text-sm md:text-base">
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
      <Footer />
    </div>
  );
};

export default UeberUns;
