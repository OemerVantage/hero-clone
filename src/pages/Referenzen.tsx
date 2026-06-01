import { useState } from "react";
import { MapPin, ArrowUpRight, Building2, Factory, Home, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeIn, StaggerChildren } from "@/components/motion";

type Category = "all" | "gewerbe" | "industrie" | "privat" | "hauswartung";

interface Project {
  id: number;
  title: string;
  location: string;
  category: Category;
  service: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Bürokomplex Technopark",
    location: "Winterthur",
    category: "gewerbe",
    service: "Büroreinigung",
    image: "/images/gewerbe-reinigung.jpg"
  },
  {
    id: 2,
    title: "Produktionshalle Meyer AG",
    location: "Zürich",
    category: "industrie",
    service: "Industriereinigung",
    image: "/images/fenster-reinigung.jpg"
  },
  {
    id: 3,
    title: "Wohnanlage Sonnenhof",
    location: "Kloten",
    category: "hauswartung",
    service: "Hauswartung",
    image: "/images/garten-rasenmaehen.jpg"
  },
  {
    id: 4,
    title: "Einfamilienhaus Familie Müller",
    location: "Winterthur",
    category: "privat",
    service: "Umzugsreinigung",
    image: "/images/hauswartung-technik.jpg"
  },
  {
    id: 5,
    title: "Logistikzentrum PostLogistics",
    location: "Zürich-Flughafen",
    category: "industrie",
    service: "Industriereinigung",
    image: "/images/treppenreinigung.jpg"
  },
  {
    id: 6,
    title: "Arztpraxis Gesundheit Plus",
    location: "Winterthur",
    category: "gewerbe",
    service: "Praxisreinigung",
    image: "/images/spezialreinigung-wc.jpg"
  },
  {
    id: 7,
    title: "Mehrfamilienhaus Rosenweg",
    location: "Effretikon",
    category: "hauswartung",
    service: "Hauswartung & Gartenpflege",
    image: "/images/garten-heckenschnitt.jpg"
  },
  {
    id: 8,
    title: "Penthouse Zürichberg",
    location: "Zürich",
    category: "privat",
    service: "Fensterreinigung",
    image: "/images/fenster-innen.jpg"
  },
  {
    id: 9,
    title: "Geschäftshaus Zentrum",
    location: "Winterthur",
    category: "gewerbe",
    service: "Fassadenreinigung",
    image: "/images/fassade-hgc.jpg"
  }
];

const stats = [
  { number: "500+", label: "Zufriedene Kunden" },
  { number: "1000+", label: "Betreute Objekte" },
  { number: "15+", label: "Jahre Erfahrung" },
  { number: "98%", label: "Zufriedenheit" }
];

const filters: { key: Category; label: string; icon: React.ElementType }[] = [
  { key: "all", label: "Alle", icon: Building2 },
  { key: "gewerbe", label: "Gewerbe", icon: Building2 },
  { key: "industrie", label: "Industrie", icon: Factory },
  { key: "privat", label: "Privat", icon: Home },
  { key: "hauswartung", label: "Hauswartung", icon: Wrench }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const categoryLabels: Record<Category, string> = {
    all: "Alle",
    gewerbe: "Gewerbe",
    industrie: "Industrie",
    privat: "Privat",
    hauswartung: "Hauswartung"
  };

  return (
    <div className="group bg-white border border-border rounded-[24px] overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="p-5 md:p-6">
        {/* Category Badge */}
        <span className="inline-flex px-3 py-1 bg-secondary text-foreground text-xs font-medium rounded-full mb-3">
          {categoryLabels[project.category]}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {project.title}
        </h3>

        {/* Location & Service */}
        <p className="text-sm text-muted-foreground flex items-center gap-1.5 mb-1">
          <MapPin className="w-3.5 h-3.5" />
          {project.location}
        </p>
        <p className="text-sm text-muted-foreground">{project.service}</p>
      </div>
    </div>
  );
};

const Referenzen = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="px-4 md:px-6 pb-6">
        <div className="relative w-full h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden">
          <img
            src="/images/gewerbe-reinigung.jpg"
            alt="BeFi Referenzen"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)"
            }}
          />

          <div className="relative h-full flex flex-col justify-center p-8 md:p-12 lg:p-16 max-w-2xl">
            <span className="inline-flex items-center px-4 md:px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm md:text-base text-white mb-4 md:mb-6 w-fit">
              Unsere Projekte
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-[1.1] tracking-tight mb-4">
              UNSERE
              <br />
              REFERENZEN
            </h1>
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-md">
              Einblicke in erfolgreich abgeschlossene Projekte. Qualität und Zuverlässigkeit, die überzeugt.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-8 md:py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
                    {stat.number}
                  </span>
                  <p className="text-sm md:text-base text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="bg-background py-12 md:py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Header */}
          <FadeIn className="mb-8 md:mb-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <span className="inline-flex items-center px-4 md:px-6 py-2 bg-secondary border border-border rounded-full text-base md:text-lg font-light text-foreground mb-4">
                  Projekt-Galerie
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-foreground">
                  ERFOLGREICHE PROJEKTE
                </h2>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeFilter === filter.key
                        ? "bg-foreground text-background"
                        : "bg-secondary text-foreground hover:bg-foreground/10"
                    }`}
                  >
                    <filter.icon className="w-4 h-4" />
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Projects Grid */}
          <StaggerChildren
            staggerDelay={0.1}
            direction="up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-12 md:py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn>
            <div className="bg-foreground rounded-[24px] md:rounded-[32px] p-8 md:p-12 lg:p-16 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-background mb-4">
                INTERESSE AN EINER ZUSAMMENARBEIT?
              </h2>
              <p className="text-background/70 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Kontaktieren Sie uns für eine kostenlose und unverbindliche Beratung. Wir freuen uns darauf, auch Ihr Projekt zum Erfolg zu führen.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-background text-foreground rounded-full font-medium hover:bg-background/90 transition-colors"
              >
                <span>Jetzt Offerte anfragen</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Referenzen;
