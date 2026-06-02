import { MapPin } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";

const companyStats = [
  { value: "15", suffix: "+", label: "Jahre Erfahrung" },
  { value: "500", suffix: "+", label: "Zufriedene Kunden" },
  { value: "1000", suffix: "+", label: "Betreute Objekte" },
  { value: "50", suffix: "+", label: "Mitarbeitende" },
];

const CompanyIntroSection = () => {
  return (
    <section className="px-4 md:px-6 py-6 md:py-8">
      <div className="relative bg-[#0B1729] text-white rounded-2xl md:rounded-3xl overflow-hidden">
        {/* Decorative gradient orbs */}
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(96,165,250,0.5) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-14 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Text */}
            <FadeIn direction="up" className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-xs md:text-sm font-medium uppercase tracking-wider text-white/90 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Über BeFi Facility Services
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05] mb-6">
                Ein Schweizer Familien­unternehmen
                <br />
                <span className="text-blue-300/90 font-light italic">
                  aus Winterthur.
                </span>
              </h2>
              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-xl font-light">
                Seit 2011 betreuen wir Liegenschaften in Winterthur und der
                Deutschschweiz – mit ganzheitlichen Lösungen für Reinigung,
                Hauswartung und Gartenpflege. Was uns auszeichnet: persönliche
                Verantwortung, kurze Wege und ein Team, das anpackt.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4" />
                <span>
                  Hauptsitz Winterthur · Aktiv in der gesamten Deutschschweiz
                </span>
              </div>
            </FadeIn>

            {/* Right: Stats Grid 2x2 */}
            <div className="lg:col-span-5">
              <StaggerChildren
                staggerDelay={0.1}
                direction="up"
                className="grid grid-cols-2 gap-4 md:gap-5"
              >
                {companyStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-baseline mb-1.5">
                      <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-lg md:text-xl font-light text-blue-300 ml-0.5">
                        {stat.suffix}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-white/60 font-medium leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroSection;
