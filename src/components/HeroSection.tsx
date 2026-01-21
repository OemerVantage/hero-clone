import { ArrowUpRight } from "lucide-react";
import heroCover from "@/assets/hero-cover.jpg";

const HeroSection = () => {
  const stats = [
    { number: "13", suffix: "+", label: "Jahre Erfahrung" },
    { number: "500", suffix: "+", label: "Zufriedene Kunden" },
    { number: "1000", suffix: "+", label: "Betreute Objekte" },
  ];

  return (
    <section className="px-4 md:px-6 pb-6">
      <div className="relative w-full h-[calc(100vh-100px)] min-h-[600px] rounded-2xl md:rounded-3xl overflow-hidden">
        {/* Background Image */}
        <img
          src={heroCover}
          alt="Professionelles Facility Management Team bei der Arbeit"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.25) 50%, transparent 100%)",
          }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-8 md:p-12 lg:p-16">
          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-6">
              IHR SCHWEIZER PARTNER
              <br />
              FÜR FACILITY SERVICES
            </h1>

            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Wir bieten ganzheitliche Lösungen für Reinigung, Hauswartung und Gebäudemanagement – 
              professionell, zuverlässig und massgeschneidert für Ihre Bedürfnisse.
            </p>

            <button className="btn-explore w-fit">
              <span>Unsere Dienstleistungen</span>
              <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 md:gap-12 mt-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="stat-number">
                  {stat.number}
                  <sup className="text-lg md:text-xl align-super">{stat.suffix}</sup>
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
