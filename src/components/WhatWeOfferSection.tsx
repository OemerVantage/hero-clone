import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Reinigung & Unterhalt",
    description:
      "Professionelle Reinigungsarbeiten für Wohnungen, Büros und Industrieräume. Von der Unterhaltsreinigung bis zur Spezialreinigung – wir sorgen für makellose Sauberkeit.",
    image: "/images/treppenreinigung.jpg",
    features: ["Unterhaltsreinigung", "Spezialreinigung", "Bauendreinigung"],
  },
  {
    id: "02",
    title: "Hauswartung & Technik",
    description:
      "Laufende Betreuung und Pflege von Immobilien – technisch und organisatorisch. Wir sorgen für Funktionalität, Sicherheit und Werterhalt Ihrer Liegenschaft.",
    image: "/images/hauswartung-technik.jpg",
    features: ["Technische Wartung", "Hauswartdienste", "Winterdienst"],
  },
  {
    id: "03",
    title: "Garten & Aussenanlagen",
    description:
      "Gartenpflege und Grünflächenbetreuung für gepflegte und einladende Aussenbereiche. Das ganze Jahr über kümmern wir uns um Ihre Grünanlagen.",
    image: "/images/garten-rasenmaehen.jpg",
    features: ["Gartenpflege", "Grünflächen", "Pflanzenpflege"],
  },
];

const WhatWeOfferSection = () => {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-4 py-1.5 bg-secondary border border-border rounded-full text-xs md:text-sm font-medium uppercase tracking-wider text-foreground mb-5">
              Unsere Leistungen
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
              Umfassende
              <br />
              <span className="text-muted-foreground">Facility Services.</span>
            </h2>
          </div>
          <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed max-w-md">
            Professionelle Reinigung, technische Hauswartung und
            Grünflächenpflege – alles aus einer Hand.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col bg-secondary/30 rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 hover:border-border transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 md:top-5 md:left-5">
                  <span className="inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-background/95 backdrop-blur-sm text-sm md:text-base font-semibold text-foreground">
                    {service.id}
                  </span>
                </div>

                {/* Arrow Button */}
                <div className="absolute top-4 right-4 md:top-5 md:right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <span className="inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary text-white">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-7 lg:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="flex flex-wrap gap-2 pt-5 border-t border-border/60">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-xs md:text-sm px-3 py-1 rounded-full bg-background text-foreground/80 border border-border/60"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
