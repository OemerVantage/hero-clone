import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { ArrowUpRight, Wrench, Snowflake, Key, Settings, ClipboardCheck, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Wrench className="w-6 h-6 text-foreground" />,
    title: "Technische Wartung",
    description: "Regelmässige Inspektion und Wartung von Heizung, Lüftung, Sanitär und elektrischen Anlagen."
  },
  {
    icon: <Snowflake className="w-6 h-6 text-foreground" />,
    title: "Winterdienst",
    description: "Zuverlässige Schneeräumung und Eisbeseitigung für sichere Zugänge bei jedem Wetter."
  },
  {
    icon: <Key className="w-6 h-6 text-foreground" />,
    title: "Schlüsselverwaltung",
    description: "Sichere Aufbewahrung und Verwaltung von Schlüsseln für Notfälle und Handwerker-Zugänge."
  },
  {
    icon: <Settings className="w-6 h-6 text-foreground" />,
    title: "Kleinreparaturen",
    description: "Schnelle Behebung von kleinen Defekten und Schäden vor Ort – ohne lange Wartezeiten."
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 text-foreground" />,
    title: "Kontrollgänge",
    description: "Regelmässige Überprüfung der Liegenschaft auf Schäden, Sicherheitsrisiken und Ordnung."
  },
  {
    icon: <Phone className="w-6 h-6 text-foreground" />,
    title: "Notfall-Service",
    description: "24/7 Erreichbarkeit für dringende Anliegen und schnelle Reaktion bei Notfällen."
  }
];

const benefits = [
  { title: "Zuverlässigkeit", description: "Termingerechte und gewissenhafte Betreuung" },
  { title: "Erfahrung", description: "Langjährige Expertise im Facility Management" },
  { title: "Flexibilität", description: "Individuelle Betreuungskonzepte nach Ihren Wünschen" },
  { title: "Erreichbarkeit", description: "Kurze Reaktionszeiten bei Anfragen und Notfällen" }
];

const DienstleistungenHauswartung = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="px-4 md:px-6 pb-6">
        <div className="relative w-full h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden">
          <img
            src="/images/hauswartung-heizung.jpg"
            alt="Hauswartung und technischer Service"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.25) 50%, transparent 100%)",
            }}
          />
          <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="max-w-xl">
              <p className="text-white/70 text-sm md:text-base mb-2">Dienstleistungen</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight mb-3 md:mb-4">
                HAUSWARTUNG &<br />TECHNISCHER SERVICE
              </h1>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-md">
                Laufende Betreuung und Pflege von Immobilien – technisch und organisatorisch. 
                Für Funktionalität, Sicherheit und Werterhalt.
              </p>
              <Link to="/kontakt" className="btn-explore w-fit text-sm md:text-base">
                <span>Offerte anfragen</span>
                <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
              <div className="lg:w-2/5">
                <div className="inline-flex items-center px-4 md:px-6 py-2 bg-secondary border border-border rounded-full text-base md:text-lg font-light mb-4 md:mb-6">
                  Unsere Leistungen
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight leading-tight text-foreground">
                  HAUSWARTUNG IM ÜBERBLICK
                </h2>
              </div>
              <div className="lg:w-3/5 flex items-end">
                <p className="text-base md:text-lg font-light text-foreground leading-relaxed">
                  Umfassende technische Betreuung und Pflege Ihrer Liegenschaft – 
                  von der Wartung bis zum Notfall-Service.
                </p>
              </div>
            </div>
          </FadeIn>

          <StaggerChildren 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            staggerDelay={0.1}
          >
            {services.map((service) => (
              <div 
                key={service.title}
                className="bg-secondary rounded-[24px] md:rounded-[32px] p-6 md:p-8"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-background rounded-full flex items-center justify-center mb-4 md:mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground font-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-secondary">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight leading-tight text-foreground mb-4">
                WARUM BEFI HAUSWARTUNG?
              </h2>
              <p className="text-base md:text-lg font-light text-foreground leading-relaxed max-w-2xl mx-auto">
                Ihr zuverlässiger Partner für die professionelle Betreuung Ihrer Liegenschaft.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            staggerDelay={0.1}
          >
            {benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="bg-background rounded-[24px] md:rounded-[32px] p-6 md:p-8 text-center"
              >
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-foreground font-light text-sm leading-relaxed">
                  {benefit.description}
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
                  INTERESSE AN UNSEREN HAUSWARTUNGSSERVICES?
                </h2>
                <p className="text-base md:text-lg font-light text-foreground leading-relaxed">
                  Kontaktieren Sie uns für eine unverbindliche Beratung und ein massgeschneidertes Angebot.
                </p>
              </div>
              <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                <Link to="/kontakt" className="btn-explore text-sm md:text-base">
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

      <ContactSection />
      <Footer />
    </div>
  );
};

export default DienstleistungenHauswartung;
