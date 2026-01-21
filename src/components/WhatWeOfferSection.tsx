import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import luxuryResidenceImage from "@/assets/luxury-residence.jpg";
import vacationHomeImage from "@/assets/vacation-home.jpg";
import heroCoverImage from "@/assets/hero-cover.jpg";

const services = [
  {
    id: "01",
    title: "Reinigung & Unterhalt",
    description: "Professionelle Reinigungsarbeiten für Wohnungen, Büros und Industrieräume. Von der Unterhaltsreinigung bis zur Spezialreinigung – wir sorgen für makellose Sauberkeit.",
    image: luxuryResidenceImage,
  },
  {
    id: "02",
    title: "Hauswartung & Technik",
    description: "Laufende Betreuung und Pflege von Immobilien – technisch und organisatorisch. Wir sorgen für Funktionalität, Sicherheit und Werterhalt Ihrer Liegenschaft.",
    image: vacationHomeImage,
  },
  {
    id: "03",
    title: "Garten & Aussenanlagen",
    description: "Gartenpflege und Grünflächenbetreuung für gepflegte und einladende Aussenbereiche. Das ganze Jahr über kümmern wir uns um Ihre Grünanlagen.",
    image: heroCoverImage,
  },
];

const WhatWeOfferSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="bg-background py-16 md:py-24 px-6 md:px-12 lg:px-20 xl:px-[240px]">
      {/* Header */}
      <div className="mb-12">
        <span className="inline-flex items-center px-6 py-2 bg-secondary border border-border rounded-full text-lg font-light text-foreground mb-6">
          Unsere Leistungen
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight text-foreground mb-4 leading-tight">
          UMFASSENDE FACILITY SERVICES
        </h2>
        <p className="text-lg font-light text-foreground leading-relaxed max-w-[727px]">
          Unsere Dienstleistungen umfassen professionelle Reinigung, technische Hauswartung und Grünflächenpflege – alles aus einer Hand.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12">
        {/* Left Info Box - 30% */}
        <div className="lg:col-span-3 flex flex-col justify-end lg:h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4">
                <svg viewBox="0 0 48 48" className="w-full h-full text-foreground" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M24 8L24 40M16 16L24 8L32 16" />
                  <path d="M12 28C12 28 16 24 24 24C32 24 36 28 36 28" />
                  <circle cx="24" cy="36" r="4" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {activeService.title}
              </h3>
              
              <p className="text-lg font-light text-foreground leading-relaxed max-w-[388px]">
                {activeService.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Middle Image - 50% */}
        <div className="lg:col-span-5 relative">
          <div className="relative h-[400px] lg:h-[500px] rounded-[32px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
            
            {/* Corner Curve Overlay */}
            <div className="absolute bottom-0 right-0">
              {/* Top corner curve */}
              <svg 
                className="absolute -top-10 right-0 w-10 h-10" 
                viewBox="0 0 40 40"
              >
                <path d="M40 0 L40 40 L0 40 Q40 40 40 0" fill="hsl(var(--background))" />
              </svg>
              
              {/* Left corner curve */}
              <svg 
                className="absolute top-0 -left-10 w-10 h-10" 
                viewBox="0 0 40 40"
              >
                <path d="M0 40 L40 40 L40 0 Q40 40 0 40" fill="hsl(var(--background))" />
              </svg>
              
              {/* Text Badge */}
              <div className="bg-background rounded-tl-[32px] px-6 py-5 min-w-[187px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-5xl font-light text-foreground block">{activeService.id}</span>
                    <p className="text-lg font-semibold text-foreground">{activeService.title}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Right Vertical Navigation - 20% */}
        <div className="lg:col-span-2 flex lg:flex-row gap-4 lg:h-[500px]">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const canGoUp = index > 0;
            const canGoDown = index < services.length - 1;
            
            return (
              <button
                key={service.id}
                onClick={() => setActiveIndex(index)}
                className={`flex-1 lg:border-l border-border flex flex-col items-center relative transition-all duration-300 hover:bg-secondary/50 ${
                  isActive ? 'bg-secondary/30' : ''
                }`}
              >
                <div className="p-2">
                  {canGoUp ? (
                    <ChevronUp 
                      className={`w-6 h-6 transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground/60'}`} 
                    />
                  ) : (
                    <div className="w-6 h-6" />
                  )}
                </div>
                
                <div className="flex-1 flex items-center justify-center">
                  <div className="lg:-rotate-90 whitespace-nowrap flex items-center gap-4">
                    <span className={`text-4xl lg:text-5xl font-light transition-colors ${
                      isActive ? 'text-foreground' : 'text-muted-foreground/60'
                    }`}>
                      {service.id}
                    </span>
                    <span className={`text-xl lg:text-2xl font-semibold uppercase tracking-wide transition-colors ${
                      isActive ? 'text-foreground' : 'text-muted-foreground/60'
                    }`}>
                      {service.title}
                    </span>
                  </div>
                </div>
                
                <div className="p-2">
                  {canGoDown ? (
                    <ChevronDown 
                      className={`w-6 h-6 transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground/60'}`} 
                    />
                  ) : (
                    <div className="w-6 h-6" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
