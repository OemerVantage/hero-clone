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
        <div className="flex-1 flex flex-col justify-center max-w-xl lg:max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-4 md:mb-6">
            IHR SCHWEIZER PARTNER
            <br />
            FÜR FACILITY SERVICES
          </h1>

          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-md">
            Wir bieten ganzheitliche Lösungen für Reinigung, Hauswartung und Gebäudemanagement – 
            professionell, zuverlässig und massgeschneidert für Ihre Bedürfnisse.
          </p>

          <button className="btn-explore w-fit text-sm md:text-base">
            <span>Unsere Dienstleistungen</span>
            <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary flex items-center justify-center">
              <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-6 md:mt-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col min-w-[70px]">
              <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
                {stat.number}
                <sup className="text-sm sm:text-lg md:text-xl align-super">{stat.suffix}</sup>
              </span>
              <span className="text-xs md:text-sm text-white/70 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
