import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import luxuryResidenceImage from "@/assets/luxury-residence.jpg";

const WhatWeOfferSection = () => {
  return (
    <section className="bg-background py-16 md:py-24 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <span className="section-badge mb-6 inline-block">What We Offer</span>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
            COMPREHENSIVE REAL ESTATE SOLUTIONS
          </h2>
          <p className="text-muted-foreground max-w-md text-sm md:text-base lg:text-right">
            Our comprehensive services encompass luxury property sales, sustainable green building investments, and premium vacation rentals.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Info Box */}
          <div className="lg:col-span-3 flex flex-col justify-start pt-4">
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <Home className="w-10 h-10 text-foreground" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Luxury Residences
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Experience unparalleled elegance in our luxury residences, featuring exquisite design, premium amenities, and prime locations for the most discerning tastes.
              </p>
            </div>
          </div>

          {/* Middle Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[420px]">
              <img
                src={luxuryResidenceImage}
                alt="Modern luxury residence with glass facade"
                className="w-full h-full object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4">
                  <span className="text-4xl font-bold text-foreground">01</span>
                  <p className="text-sm font-medium text-foreground mt-1">
                    Luxury<br />Residences
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Vertical Navigation */}
          <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start justify-center gap-4 py-4 lg:py-0">
            {/* Navigation Arrows */}
            <div className="flex items-center gap-2 mb-6">
              <button className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Vertical Labels */}
            <div className="flex lg:flex-row gap-4">
              <div className="vertical-text">
                <span className="text-xs font-medium text-muted-foreground tracking-wider">
                  02 ECO GREEN BUILDINGS
                </span>
              </div>
              <div className="vertical-text">
                <span className="text-xs font-medium text-muted-foreground/60 tracking-wider">
                  03 UNIQUE VACATION HOMES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
