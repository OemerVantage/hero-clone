import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
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
    <section className="bg-background py-12 md:py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <span className="inline-flex items-center px-4 md:px-6 py-2 bg-secondary border border-border rounded-full text-base md:text-lg font-light text-foreground mb-4 md:mb-6">
            Unsere Leistungen
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-foreground mb-3 md:mb-4 leading-tight">
            UMFASSENDE FACILITY SERVICES
          </h2>
          <p className="text-base md:text-lg font-light text-foreground leading-relaxed max-w-[727px]">
            Unsere Dienstleistungen umfassen professionelle Reinigung, technische Hauswartung und Grünflächenpflege – alles aus einer Hand.
          </p>
        </div>

        {/* Mobile Tabs */}
        <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeIndex === index
                  ? 'bg-foreground text-background'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-4">
          {/* Left Info Box - Mobile: below tabs, Desktop: 30% */}
          <div className="order-2 lg:order-1 lg:col-span-3 flex flex-col justify-end lg:h-[450px] xl:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4">
                  <svg viewBox="0 0 48 48" className="w-full h-full text-foreground" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M24 8L24 40M16 16L24 8L32 16" />
                    <path d="M12 28C12 28 16 24 24 24C32 24 36 28 36 28" />
                    <circle cx="24" cy="36" r="4" />
                  </svg>
                </div>
                
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                  {activeService.title}
                </h3>
                
                <p className="text-base md:text-lg font-light text-foreground leading-relaxed max-w-[388px]">
                  {activeService.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Middle Image - Mobile: first, Desktop: 40% */}
          <div className="order-1 lg:order-2 lg:col-span-4 relative">
            <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] rounded-[24px] md:rounded-[32px] overflow-hidden">
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
                  className="absolute -top-8 md:-top-10 right-0 w-8 h-8 md:w-10 md:h-10" 
                  viewBox="0 0 40 40"
                >
                  <path d="M40 0 L40 40 L0 40 Q40 40 40 0" fill="hsl(var(--background))" />
                </svg>
                
                {/* Left corner curve */}
                <svg 
                  className="absolute top-0 -left-8 md:-left-10 w-8 h-8 md:w-10 md:h-10" 
                  viewBox="0 0 40 40"
                >
                  <path d="M0 40 L40 40 L40 0 Q40 40 0 40" fill="hsl(var(--background))" />
                </svg>
                
                {/* Text Badge */}
                <div className="bg-background rounded-tl-[24px] md:rounded-tl-[32px] px-4 md:px-6 py-4 md:py-5 min-w-[140px] md:min-w-[187px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-3xl md:text-5xl font-light text-foreground block">{activeService.id}</span>
                      <p className="text-base md:text-lg font-semibold text-foreground">{activeService.title}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Right Vertical Navigation - Hidden on Mobile, Desktop: 30% */}
          <div className="hidden lg:flex order-3 lg:col-span-3 flex-col lg:h-[450px] xl:h-[500px]">
            {/* Navigation Arrows at top */}
            <div className="flex justify-end gap-3 pr-6 mb-3">
              <ArrowLeft className="w-4 h-4 text-muted-foreground/50" />
              <ArrowLeft className="w-4 h-4 text-muted-foreground/50" />
            </div>
            
            {/* Only show INACTIVE tabs */}
            <div className="flex-1 flex">
              {services
                .map((service, originalIndex) => ({ service, originalIndex }))
                .filter(({ originalIndex }) => originalIndex !== activeIndex)
                .map(({ service, originalIndex }) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveIndex(originalIndex)}
                    className="flex-1 flex items-center justify-center border-l border-border/50 hover:bg-secondary/20 transition-colors"
                  >
                    <div className="-rotate-90 whitespace-nowrap flex items-center gap-3">
                      <span className="text-5xl xl:text-6xl font-light text-muted-foreground/30">
                        {service.id}
                      </span>
                      <span className="text-sm xl:text-base font-semibold uppercase tracking-wider text-muted-foreground/50">
                        {service.title}
                      </span>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
