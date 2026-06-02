import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { CheckCircle, Shield, Leaf, Users, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

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

type Department = "leitung" | "backoffice" | "aussendienst";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  department: Department;
}

const teamMembers: TeamMember[] = [
  // Verwaltungsrat / Geschäftsleitung
  {
    name: "Fisnik Dauti",
    position: "Geschäftsführer & Gründer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    department: "leitung",
  },

  // Backoffice
  {
    name: "Sarah Schneider",
    position: "Kundenbetreuung",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    department: "backoffice",
  },
  {
    name: "Lisa Brunner",
    position: "Qualitätsmanagement",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    department: "backoffice",
  },
  {
    name: "Anna Huber",
    position: "HR & Rekrutierung",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    department: "backoffice",
  },

  // Aussendienst
  {
    name: "Maria Müller",
    position: "Leiterin Reinigung",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    department: "aussendienst",
  },
  {
    name: "Thomas Weber",
    position: "Leiter Hauswartung",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    department: "aussendienst",
  },
  {
    name: "Marco Keller",
    position: "Leiter Gartenpflege",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    department: "aussendienst",
  },
  {
    name: "David Meier",
    position: "Technischer Leiter",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    department: "aussendienst",
  },
];

const departments: Array<{
  id: Department;
  label: string;
  description: string;
}> = [
  {
    id: "leitung",
    label: "Verwaltungsrat & Geschäftsleitung",
    description:
      "Strategische Führung und Verantwortung für die Ausrichtung des Unternehmens.",
  },
  {
    id: "backoffice",
    label: "Backoffice",
    description:
      "Organisation, Kundenbetreuung, Qualität und Personalwesen – das Rückgrat im Hintergrund.",
  },
  {
    id: "aussendienst",
    label: "Aussendienst",
    description:
      "Operative Leitung unserer Teams vor Ort – täglich im Einsatz für Ihre Liegenschaft.",
  },
];

const getMembersByDepartment = (dep: Department) =>
  teamMembers.filter((m) => m.department === dep);

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="bg-secondary rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex flex-col items-center text-center">
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
    <p className="text-sm font-light text-foreground/60">{member.position}</p>
  </div>
);

const UeberUnsTeam = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="px-4 md:px-6 pb-6">
        <div className="relative w-full h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden">
          <img
            src="/images/team-anerkennung.jpg"
            alt="BeFi Team"
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
              <div className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90 mb-3">
                Über uns
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight mb-3 md:mb-4">
                UNSER TEAM
              </h1>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-md">
                Lernen Sie die Menschen kennen, die täglich für Ihre Zufriedenheit
                arbeiten – mit Leidenschaft, Fachkompetenz und Teamgeist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section — strukturiert nach Bereichen */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Header */}
          <FadeIn direction="up">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
              <div className="lg:w-2/5">
                <div className="inline-flex items-center px-4 md:px-6 py-2 bg-secondary border border-border rounded-full text-base md:text-lg font-light mb-4 md:mb-6">
                  Das Team
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight leading-tight text-foreground">
                  DIE MENSCHEN HINTER BEFI
                </h2>
              </div>
              <div className="lg:w-3/5 flex items-end">
                <p className="text-base md:text-lg font-light text-foreground leading-relaxed">
                  Unser Team gliedert sich in drei Bereiche – jeder mit einer
                  klaren Aufgabe, die zusammen unseren Service möglich macht.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Department Blocks */}
          <div className="space-y-16 md:space-y-20 lg:space-y-24">
            {departments.map((dep, depIndex) => {
              const members = getMembersByDepartment(dep.id);
              return (
                <div key={dep.id}>
                  <FadeIn direction="up">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-border">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-muted-foreground tabular-nums">
                            {String(depIndex + 1).padStart(2, "0")}
                          </span>
                          <span className="w-8 h-px bg-border" />
                          <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-muted-foreground">
                            Bereich
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-foreground leading-tight">
                          {dep.label}
                        </h3>
                      </div>
                      <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-md">
                        {dep.description}
                      </p>
                    </div>
                  </FadeIn>

                  <StaggerChildren
                    className={`grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 ${
                      members.length === 1
                        ? "lg:grid-cols-4"
                        : members.length <= 3
                          ? "lg:grid-cols-3"
                          : "lg:grid-cols-4"
                    }`}
                    staggerDelay={0.1}
                  >
                    {members.map((member) => (
                      <TeamMemberCard key={member.name} member={member} />
                    ))}
                  </StaggerChildren>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Werte Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-secondary">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
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

      {/* Join Team CTA */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
            <div className="bg-secondary rounded-[24px] md:rounded-[32px] p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
              <div className="w-full lg:w-3/5">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase tracking-tight leading-tight text-foreground mb-3 md:mb-4">
                  WERDEN SIE TEIL UNSERES TEAMS
                </h2>
                <p className="text-base md:text-lg font-light text-foreground leading-relaxed">
                  Wir suchen engagierte Mitarbeiter, die unsere Leidenschaft für
                  Qualität teilen. Entdecken Sie unsere aktuellen Stellenangebote.
                </p>
              </div>
              <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                <Link to="/karriere" className="btn-explore text-sm md:text-base">
                  <span>Karriere bei BeFi</span>
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

export default UeberUnsTeam;
