import { motion } from "framer-motion";
import {
  Phone,
  ClipboardList,
  Rocket,
  ShieldCheck,
  Timer,
  Lock,
  Award,
} from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
}

const steps: Step[] = [
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Erstgespräch",
    description:
      "Sie schildern uns Ihre Situation. Wir hören zu, stellen die richtigen Fragen und vereinbaren einen unverbindlichen Termin vor Ort.",
    duration: "Schritt 1",
  },
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: "Analyse & Offerte",
    description:
      "Bestandsaufnahme Ihrer Liegenschaft, transparente Festpreis-Offerte und ein konkreter Leistungsplan – schriftlich und nachvollziehbar.",
    duration: "Schritt 2",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Strukturierter Start",
    description:
      "Sie erhalten ein festes Team, einen persönlichen Ansprechpartner und ein dokumentiertes Übergabeprotokoll. Klare Verantwortlichkeiten ab Tag eins.",
    duration: "Schritt 3",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Laufende Betreuung",
    description:
      "Regelmässige Qualitätskontrollen, dokumentierte Einsätze und kurze Wege bei Anpassungen. Sie bleiben informiert – ohne ständig nachfragen zu müssen.",
    duration: "Schritt 4",
  },
];

interface Guarantee {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
}

const guarantees: Guarantee[] = [
  {
    icon: <Timer className="w-5 h-5" />,
    value: "24h",
    label: "Reaktionszeit",
    description: "Rückmeldung auf Anfragen innerhalb eines Werktages.",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    value: "100%",
    label: "Festpreis-Garantie",
    description: "Was wir offerieren, gilt – keine versteckten Kosten.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    value: "CH",
    label: "Schweizer Standard",
    description: "Geschultes Personal, faire Löhne, dokumentierte Abläufe.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header */}
        <FadeIn direction="up" className="mb-12 md:mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary border border-border rounded-full text-xs md:text-sm font-medium uppercase tracking-wider text-foreground mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                So arbeiten wir
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
                Vom ersten Anruf
                <br />
                <span className="text-muted-foreground italic font-light">
                  bis zur laufenden
                </span>{" "}
                Betreuung.
              </h2>
            </div>
            <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed max-w-md">
              Strukturiert, transparent und ohne Überraschungen. So gewinnen
              Sie einen Partner, der dauerhaft funktioniert.
            </p>
          </div>
        </FadeIn>

        {/* Process Steps — Connected Timeline */}
        <div className="relative mb-16 md:mb-20 lg:mb-24">
          {/* Horizontal connection line (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[68px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 lg:gap-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col"
              >
                {/* Number badge with dot on timeline */}
                <div className="relative flex items-center justify-center mb-6 lg:mb-8">
                  <span className="relative z-10 inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-background border-2 border-border group-hover:border-foreground transition-colors duration-300">
                    <span className="text-lg md:text-xl font-semibold tabular-nums text-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                </div>

                {/* Content card */}
                <div className="relative flex-1 bg-secondary/40 border border-border/60 rounded-2xl md:rounded-3xl p-6 md:p-7 group-hover:border-foreground/20 group-hover:shadow-md transition-all duration-300">
                  <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider font-medium text-muted-foreground mb-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-background border border-border text-foreground group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300">
                      {step.icon}
                    </span>
                    {step.duration}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2.5 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-[15px] font-light text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantee Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl md:rounded-3xl border border-border overflow-hidden"
        >
          <div className="px-6 md:px-8 lg:px-10 py-5 md:py-6 border-b border-border bg-secondary/40">
            <div className="flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-wider font-medium text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Unsere Versprechen
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {guarantees.map((g) => (
              <div
                key={g.label}
                className="flex items-start gap-5 px-6 md:px-8 lg:px-10 py-7 md:py-9 group hover:bg-secondary/30 transition-colors"
              >
                <span className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full bg-secondary border border-border text-foreground group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300">
                  {g.icon}
                </span>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-none">
                      {g.value}
                    </span>
                    <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-muted-foreground">
                      {g.label}
                    </span>
                  </div>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    {g.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
