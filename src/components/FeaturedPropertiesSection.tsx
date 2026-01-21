import { MapPin, Users, Clock } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";

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
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop",
    type: "Gewerbe",
    location: "Winterthur, ZH",
    name: "Büroreinigung",
    teamSize: 3,
    interval: "Täglich",
    sqm: 500
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=450&fit=crop",
    type: "Industrie",
    location: "Zürich Region",
    name: "Industriereinigung",
    teamSize: 5,
    interval: "Wöchentlich",
    sqm: 2000
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop",
    type: "Privat",
    location: "Ganze Schweiz",
    name: "Umzugsreinigung",
    teamSize: 2,
    sqm: 120
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=450&fit=crop",
    type: "Gewerbe",
    location: "Winterthur & Umgebung",
    name: "Fassadenreinigung",
    teamSize: 4,
    interval: "Monatlich",
    sqm: 800
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1558618047-f4b511e4e65c?w=600&h=450&fit=crop",
    type: "Gewerbe",
    location: "Zürich & Winterthur",
    name: "Hauswartung",
    teamSize: 2,
    interval: "Laufend"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=450&fit=crop",
    type: "Privat",
    location: "Winterthur Region",
    name: "Gartenpflege",
    teamSize: 3,
    interval: "Saisonal"
  }
];

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="group cursor-pointer">
    {/* Image Container */}
    <div className="relative rounded-[32px] overflow-hidden mb-4 aspect-[4/3]">
      <img 
        src={service.image} 
        alt={service.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      
      {/* Type Badge */}
      <span className="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-sm font-medium text-foreground border border-border">
        {service.type}
      </span>
    </div>
    
    {/* Location */}
    <div className="flex items-center gap-1.5 text-foreground mb-2">
      <MapPin className="w-4 h-4" />
      <span className="text-sm font-light">{service.location}</span>
    </div>
    
    {/* Name */}
    <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
      {service.name}
    </h3>
    
    {/* Features */}
    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
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
    </div>
    
    {/* Area */}
    {service.sqm && (
      <p className="text-lg font-semibold text-foreground">
        bis {service.sqm.toLocaleString()} m²
      </p>
    )}
  </div>
);

const FeaturedPropertiesSection = () => {
  return (
    <section className="bg-background py-16 md:py-24 px-6 md:px-12 lg:px-20 xl:px-[240px]">
      {/* Header - Left aligned */}
      <FadeIn direction="up" className="mb-12">
        <span className="inline-flex items-center px-6 py-2 bg-secondary border border-border rounded-full text-lg font-light text-foreground mb-6">
          Unsere Kernbereiche
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight text-foreground leading-tight">
          PROFESSIONELLE DIENSTLEISTUNGEN
          <br />
          FÜR JEDES OBJEKT
        </h2>
      </FadeIn>

      {/* 3x2 Service Grid */}
      <StaggerChildren 
        staggerDelay={0.1} 
        direction="up"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </StaggerChildren>
    </section>
  );
};

export default FeaturedPropertiesSection;
