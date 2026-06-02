import { motion } from "framer-motion";
import { Handshake, MapPin, ShieldCheck, Clock } from "lucide-react";

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
}

const values: Value[] = [
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Alles aus einer Hand",
    description:
      "Reinigung, Hauswartung und Garten – ein Vertrag, ein Ansprechpartner, ein Qualitätsstandard.",
    highlight: "1 Partner",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Regional verwurzelt",
    description:
      "Aus Winterthur für die Region – schnelle Reaktionszeiten, persönliche Betreuung, keine Konzernstrukturen.",
    highlight: "Winterthur",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Geprüfte Qualität",
    description:
      "Strukturierte Qualitätskontrollen, geschultes Personal und dokumentierte Abläufe nach Schweizer Standard.",
    highlight: "Swiss made",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Verlässlich seit 2011",
    description:
      "Über 500 Kunden vertrauen uns mit 1'000 Objekten – von KMU über Verwaltung bis Eigentümer.",
    highlight: "15+ Jahre",
  },
];

const ValuePropositionSection = () => {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary border border-border rounded-full text-xs md:text-sm font-medium uppercase tracking-wider text-foreground mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Was bringt BeFi Ihnen?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
              Vier Gründe, warum
              <br />
              <span className="text-muted-foreground">Unternehmen uns vertrauen.</span>
            </h2>
          </div>
          <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed max-w-md">
            Seit über 15 Jahren betreuen wir Liegenschaften in Winterthur und Umgebung –
            zuverlässig, regional und mit echtem Servicegedanken.
          </p>
        </motion.div>

        {/* 4 Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative flex flex-col bg-secondary/40 border border-border/60 rounded-2xl md:rounded-3xl p-6 md:p-7 lg:p-8 overflow-hidden hover:border-foreground/20 hover:shadow-md transition-all duration-500"
            >
              {/* Icon */}
              <div className="relative mb-12 md:mb-16">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border text-foreground group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300">
                  {value.icon}
                </span>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2.5 leading-tight">
                  {value.title}
                </h3>
                <p className="text-sm md:text-[15px] font-light text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Bottom progress line (decorative) */}
              <div className="relative mt-6 pt-5 border-t border-border/60">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-medium text-foreground/60">
                  <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1 h-px bg-border" />
                  <span>{value.highlight}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
