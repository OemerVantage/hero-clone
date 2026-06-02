import { Link } from "react-router-dom";
import { MapPin, Users, Clock, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

interface Service {
  id: number;
  image: string;
  type: "Gewerbe" | "Industrie" | "Privat";
  location: string;
  name: string;
  teamSize?: number;
  interval?: string;
  sqm?: number;
}

const services: Service[] = [
  {
    id: 1,
    image: "/images/gewerbe-reinigung.jpg",
    type: "Gewerbe",
    location: "Winterthur, ZH",
    name: "Büroreinigung",
    teamSize: 3,
    interval: "Täglich",
    sqm: 500,
  },
  {
    id: 2,
    image: "/images/spezialreinigung-wc.jpg",
    type: "Industrie",
    location: "Zürich Region",
    name: "Industriereinigung",
    teamSize: 5,
    interval: "Wöchentlich",
    sqm: 2000,
  },
  {
    id: 3,
    image: "/images/kueche-reinigung.jpg",
    type: "Privat",
    location: "Ganze Schweiz",
    name: "Umzugsreinigung",
    teamSize: 2,
    sqm: 120,
  },
  {
    id: 4,
    image: "/images/dachrinne-skyvac.jpg",
    type: "Gewerbe",
    location: "Winterthur & Umgebung",
    name: "Fassadenreinigung",
    teamSize: 4,
    interval: "Monatlich",
    sqm: 800,
  },
  {
    id: 5,
    image: "/images/hauswartung-heizung.jpg",
    type: "Gewerbe",
    location: "Zürich & Winterthur",
    name: "Hauswartung",
    teamSize: 2,
    interval: "Laufend",
  },
  {
    id: 6,
    image: "/images/garten-heckenschnitt.jpg",
    type: "Privat",
    location: "Winterthur Region",
    name: "Gartenpflege",
    teamSize: 3,
    interval: "Saisonal",
  },
];

const ServiceRow = ({ service, index }: { service: Service; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <Link to="/dienstleistungen" className="group block">
      <div
        className={`flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-6 lg:gap-10 items-center`}
      >
        {/* Image */}
        <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[24px] overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 py-4">
          {/* Type Badge */}
          <span className="inline-block bg-secondary px-4 py-1.5 rounded-full text-sm font-medium text-foreground border border-border mb-4">
            {service.type}
          </span>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{service.location}</span>
          </div>

          {/* Name */}
          <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4 leading-tight">
            {service.name}
          </h3>

          {/* Features */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            {service.teamSize && (
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                {service.teamSize} Mitarbeiter
              </span>
            )}
            {service.interval && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {service.interval}
              </span>
            )}
            {service.sqm && (
              <span className="text-foreground font-medium">
                bis {service.sqm.toLocaleString()} m²
              </span>
            )}
          </div>

          {/* CTA */}
          <span className="inline-flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all">
            Mehr erfahren
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

const FeaturedPropertiesSection = () => {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header */}
        <FadeIn direction="up" className="mb-10 md:mb-16">
          <span className="inline-flex items-center px-4 md:px-6 py-2 bg-secondary border border-border rounded-full text-base md:text-lg font-light text-foreground mb-4 md:mb-6">
            Unsere Kernbereiche
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-foreground leading-tight">
            PROFESSIONELLE DIENSTLEISTUNGEN
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>FÜR JEDES OBJEKT
          </h2>
        </FadeIn>

        {/* Rows (Zigzag) */}
        <div className="space-y-10 md:space-y-16">
          {services.map((service, index) => (
            <FadeIn key={service.id} direction="up" delay={index * 0.1}>
              <ServiceRow service={service} index={index} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
