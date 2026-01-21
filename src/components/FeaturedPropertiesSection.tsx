import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Users, Clock, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

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
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=450&fit=crop",
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

type VariantType = "cards" | "rows" | "gallery";

// Temporary Variant Switcher
const VariantSwitcher = ({ 
  activeVariant, 
  setActiveVariant 
}: { 
  activeVariant: VariantType; 
  setActiveVariant: (v: VariantType) => void;
}) => (
  <div className="flex justify-center gap-2 mb-8">
    {[
      { id: "cards" as const, label: "Karten" },
      { id: "rows" as const, label: "Zeilen" },
      { id: "gallery" as const, label: "Galerie" }
    ].map((variant) => (
      <button
        key={variant.id}
        onClick={() => setActiveVariant(variant.id)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          activeVariant === variant.id
            ? "bg-foreground text-background"
            : "bg-secondary text-foreground hover:bg-muted"
        }`}
      >
        {variant.label}
      </button>
    ))}
  </div>
);

// ===== VARIANT A: Cards Layout =====
const ServiceCardA = ({ service }: { service: Service }) => (
  <Link to="/dienstleistungen" className="group block">
    <div className="bg-secondary rounded-[32px] overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Type Badge */}
        <span className="absolute top-4 right-4 bg-background px-4 py-1.5 rounded-full text-sm font-medium text-foreground border border-border">
          {service.type}
        </span>
      </div>
      
      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{service.location}</span>
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
    </div>
  </Link>
);

// ===== VARIANT B: Rows Layout (Zigzag) =====
const ServiceRowB = ({ service, index }: { service: Service; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <Link 
      to="/dienstleistungen" 
      className="group block"
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-10 items-center`}>
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

// ===== VARIANT C: Gallery Layout with Overlay =====
const ServiceGalleryC = ({ service }: { service: Service }) => (
  <Link to="/dienstleistungen" className="group block">
    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden">
      {/* Image */}
      <img 
        src={service.image} 
        alt={service.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Type Badge */}
      <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-white border border-white/30">
        {service.type}
      </span>
      
      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-white/80 mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{service.location}</span>
        </div>
        
        {/* Name + Arrow */}
        <div className="flex items-end justify-between gap-4">
          <h3 className="text-xl lg:text-2xl font-semibold text-white leading-tight">
            {service.name}
          </h3>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black" />
          </div>
        </div>
        
        {/* Features (visible on hover) */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/70 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {service.teamSize && (
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              {service.teamSize} MA
            </span>
          )}
          {service.interval && (
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {service.interval}
            </span>
          )}
          {service.sqm && (
            <span>bis {service.sqm.toLocaleString()} m²</span>
          )}
        </div>
      </div>
    </div>
  </Link>
);

const FeaturedPropertiesSection = () => {
  const [activeVariant, setActiveVariant] = useState<VariantType>("cards");
  const isMobile = useIsMobile();

  return (
    <section className="bg-background py-12 md:py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header */}
        <FadeIn direction="up" className="mb-8 md:mb-12">
          <span className="inline-flex items-center px-4 md:px-6 py-2 bg-secondary border border-border rounded-full text-base md:text-lg font-light text-foreground mb-4 md:mb-6">
            Unsere Kernbereiche
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-foreground leading-tight">
            PROFESSIONELLE DIENSTLEISTUNGEN
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>FÜR JEDES OBJEKT
          </h2>
        </FadeIn>

        {/* Temporary Variant Switcher */}
        <VariantSwitcher 
          activeVariant={activeVariant} 
          setActiveVariant={setActiveVariant} 
        />

        {/* VARIANT A: Cards Grid */}
        {activeVariant === "cards" && (
          <StaggerChildren 
            staggerDelay={0.1} 
            direction="up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service) => (
              <ServiceCardA key={service.id} service={service} />
            ))}
          </StaggerChildren>
        )}

        {/* VARIANT B: Rows (Zigzag) */}
        {activeVariant === "rows" && (
          <div className="space-y-10 md:space-y-16">
            {services.map((service, index) => (
              <FadeIn key={service.id} direction="up" delay={index * 0.1}>
                <ServiceRowB service={service} index={index} />
              </FadeIn>
            ))}
          </div>
        )}

        {/* VARIANT C: Gallery */}
        {activeVariant === "gallery" && (
          <>
            {/* Mobile: Carousel */}
            {isMobile ? (
              <Carousel 
                opts={{ align: "start", loop: true }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {services.map((service) => (
                    <CarouselItem key={service.id} className="pl-4 basis-[85%] sm:basis-1/2">
                      <ServiceGalleryC service={service} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            ) : (
              /* Desktop: Grid */
              <StaggerChildren 
                staggerDelay={0.1} 
                direction="up"
                className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {services.map((service) => (
                  <ServiceGalleryC key={service.id} service={service} />
                ))}
              </StaggerChildren>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
