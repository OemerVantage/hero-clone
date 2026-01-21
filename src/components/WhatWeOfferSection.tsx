import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Wrench, Trees, ArrowRight } from "lucide-react";
import { FadeIn, StaggerChildren } from "@/components/motion";
import luxuryResidenceImage from "@/assets/luxury-residence.jpg";
import vacationHomeImage from "@/assets/vacation-home.jpg";
import heroCoverImage from "@/assets/hero-cover.jpg";

const services = [
  {
    id: "01",
    title: "Reinigung & Unterhalt",
    shortTitle: "Reinigung",
    description: "Professionelle Reinigungsarbeiten für Wohnungen, Büros und Industrieräume. Von der Unterhaltsreinigung bis zur Spezialreinigung – wir sorgen für makellose Sauberkeit.",
    image: luxuryResidenceImage,
    icon: Sparkles,
  },
  {
    id: "02",
    title: "Hauswartung & Technik",
    shortTitle: "Hauswartung",
    description: "Laufende Betreuung und Pflege von Immobilien – technisch und organisatorisch. Wir sorgen für Funktionalität, Sicherheit und Werterhalt Ihrer Liegenschaft.",
    image: vacationHomeImage,
    icon: Wrench,
  },
  {
    id: "03",
    title: "Garten & Aussenanlagen",
    shortTitle: "Garten",
    description: "Gartenpflege und Grünflächenbetreuung für gepflegte und einladende Aussenbereiche. Das ganze Jahr über kümmern wir uns um Ihre Grünanlagen.",
    image: heroCoverImage,
    icon: Trees,
  },
];

type VariantType = 'cards' | 'rows' | 'gallery';

// Variante A: 3 Karten nebeneinander
const CardsVariant = () => (
  <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
    {services.map((service) => {
      const Icon = service.icon;
      return (
        <motion.div
          key={service.id}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <Link
            to="/dienstleistungen"
            className="group block h-full bg-secondary rounded-[24px] md:rounded-[32px] p-6 md:p-8 hover:bg-secondary/80 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Icon & Number */}
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-background rounded-2xl flex items-center justify-center">
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
              </div>
              <span className="text-4xl md:text-5xl font-light text-foreground/20">
                {service.id}
              </span>
            </div>
            
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              {service.title}
            </h3>
            
            {/* Description */}
            <p className="text-base font-light text-foreground/80 leading-relaxed mb-6">
              {service.description}
            </p>
            
            {/* Link */}
            <div className="flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all">
              <span>Mehr erfahren</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </motion.div>
      );
    })}
  </StaggerChildren>
);

// Variante B: Vertikale Abschnitte (Zickzack)
const RowsVariant = () => (
  <div className="space-y-8 md:space-y-12">
    {services.map((service, index) => {
      const Icon = service.icon;
      const isReversed = index % 2 === 1;
      
      return (
        <FadeIn key={service.id} direction="up" delay={index * 0.1}>
          <Link
            to="/dienstleistungen"
            className={`group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center ${
              isReversed ? 'md:direction-rtl' : ''
            }`}
          >
            {/* Image */}
            <div className={`relative overflow-hidden rounded-[24px] md:rounded-[32px] ${isReversed ? 'md:order-2' : ''}`}>
              <div className="aspect-[4/3] md:aspect-[3/2]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Number Badge */}
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-lg font-semibold text-foreground">{service.id}</span>
              </div>
            </div>
            
            {/* Content */}
            <div className={`${isReversed ? 'md:order-1 md:text-right' : ''}`}>
              <div className={`flex items-center gap-3 mb-4 ${isReversed ? 'md:justify-end' : ''}`}>
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-base md:text-lg font-light text-foreground/80 leading-relaxed mb-6 max-w-lg">
                {service.description}
              </p>
              
              <div className={`flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all ${isReversed ? 'md:justify-end' : ''}`}>
                <span>Mehr erfahren</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </FadeIn>
      );
    })}
  </div>
);

// Variante C: Bildbasierte Übersicht (Galerie)
const GalleryVariant = () => (
  <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
    {services.map((service) => (
      <motion.div
        key={service.id}
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 }
        }}
      >
        <Link
          to="/dienstleistungen"
          className="group relative block overflow-hidden rounded-[24px] md:rounded-[32px] aspect-[3/4] md:aspect-[2/3]"
        >
          {/* Background Image */}
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            {/* Number */}
            <span className="text-5xl md:text-6xl font-light text-background/30 mb-2">
              {service.id}
            </span>
            
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-background mb-2">
              {service.title}
            </h3>
            
            {/* Description - visible on hover */}
            <p className="text-sm text-background/80 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
              {service.description}
            </p>
            
            {/* Arrow */}
            <div className="flex items-center gap-2 text-background font-medium">
              <span>Entdecken</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </motion.div>
    ))}
  </StaggerChildren>
);

const WhatWeOfferSection = () => {
  const [variant, setVariant] = useState<VariantType>('cards');

  return (
    <section className="bg-background py-12 md:py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header */}
        <FadeIn direction="up" className="mb-8 md:mb-12">
          <span className="inline-flex items-center px-4 md:px-6 py-2 bg-secondary border border-border rounded-full text-base md:text-lg font-light text-foreground mb-4 md:mb-6">
            Unsere Leistungen
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-foreground mb-3 md:mb-4 leading-tight">
            UNSERE KERNBEREICHE
          </h2>
          <p className="text-base md:text-lg font-light text-foreground leading-relaxed max-w-[727px]">
            Drei Säulen für den reibungslosen Betrieb Ihrer Immobilie – professionell, zuverlässig und aus einer Hand.
          </p>
        </FadeIn>

        {/* Variant Switcher (temporary for comparison) */}
        <div className="flex flex-wrap gap-2 mb-8 p-4 bg-secondary/50 rounded-2xl">
          <span className="text-sm text-foreground/60 mr-2 self-center">Layout wählen:</span>
          <button
            onClick={() => setVariant('cards')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              variant === 'cards'
                ? 'bg-foreground text-background'
                : 'bg-background text-foreground hover:bg-background/80'
            }`}
          >
            A: Karten
          </button>
          <button
            onClick={() => setVariant('rows')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              variant === 'rows'
                ? 'bg-foreground text-background'
                : 'bg-background text-foreground hover:bg-background/80'
            }`}
          >
            B: Zeilen
          </button>
          <button
            onClick={() => setVariant('gallery')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              variant === 'gallery'
                ? 'bg-foreground text-background'
                : 'bg-background text-foreground hover:bg-background/80'
            }`}
          >
            C: Galerie
          </button>
        </div>

        {/* Render selected variant */}
        {variant === 'cards' && <CardsVariant />}
        {variant === 'rows' && <RowsVariant />}
        {variant === 'gallery' && <GalleryVariant />}
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
