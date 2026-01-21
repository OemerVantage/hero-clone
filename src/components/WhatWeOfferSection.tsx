import { ChevronLeft, ChevronRight, TreePine } from "lucide-react";
import vacationHomeImage from "@/assets/vacation-home.jpg";

const WhatWeOfferSection = () => {
  return (
    <section className="bg-background py-16 md:py-24 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <span className="section-badge mb-6 inline-block">What We Offer</span>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
            COMPREHENSIVE REAL<br />ESTATE SOLUTIONS
          </h2>
          <p className="text-muted-foreground max-w-md text-sm md:text-base">
            Our comprehensive services encompass property search, negotiation, and closing, 
            ensuring a seamless experience for buyers, sellers, and investors alike.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Info Box */}
          <div className="lg:col-span-3 bg-secondary rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[300px]">
            <div className="w-12 h-12 flex items-center justify-center">
              <TreePine className="w-10 h-10 text-foreground" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Unique Vacation Homes
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Explore our curated collection of unique vacation homes, from charming 
                cottages to lavish estates perfect for your next getaway.
              </p>
            </div>
          </div>

          {/* Middle Navigation */}
          <div className="lg:col-span-2 flex lg:flex-col items-center justify-center gap-4 py-4 lg:py-0">
            {/* Navigation Arrows */}
            <div className="flex lg:flex-col items-center gap-2">
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <div className="w-px h-6 lg:w-6 lg:h-px bg-border" />
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Vertical Labels */}
            <div className="hidden lg:flex flex-row gap-4 mt-8">
              <div className="vertical-text">
                <span className="text-xs font-medium text-foreground tracking-wider">
                  01 LUXURY RESIDENCES
                </span>
              </div>
              <div className="vertical-text">
                <span className="text-xs font-medium text-muted-foreground tracking-wider">
                  02 ECO GREEN BUILDINGS
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[400px]">
              <img
                src={vacationHomeImage}
                alt="Modern vacation home in the forest"
                className="w-full h-full object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4">
                  <span className="text-4xl font-bold text-foreground">03</span>
                  <p className="text-sm font-medium text-foreground mt-1">
                    Unique Vacation<br />Homes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
