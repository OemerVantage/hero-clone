// BeFi v2 — Hero (inset rounded panel over documentary photo).
import { heroStats } from "@/v2/data/befi";
import { Button, StatBlock, panelRadius } from "@/v2/components/primitives";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="px-[clamp(16px,4vw,24px)] pb-6 pt-4">
      <div
        className={cn(
          panelRadius,
          "relative h-[calc(100vh-160px)] max-h-[760px] min-h-[560px] w-full overflow-hidden",
        )}
      >
        <img
          src="/images/gewerbe-reinigung.jpg"
          alt="Professionelles Facility Management Team"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)",
          }}
        />
        {/* Mobile: text spans the full photo width, so darken evenly. */}
        <div className="absolute inset-0 bg-black/30 min-[860px]:hidden" />
        <div className="relative flex h-full flex-col justify-between p-[clamp(28px,5vw,64px)]">
          <div className="flex max-w-[680px] flex-1 flex-col justify-center">
            <h1 className="mb-6 mt-0 text-[clamp(2.25rem,1.5rem+3vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
              Ihr Schweizer Partner
              <br />
              <span className="text-white/70">für Facility Services.</span>
            </h1>
            <p className="mb-8 mt-0 max-w-[480px] text-lg font-light leading-[1.6] text-white/80">
              Wir bieten ganzheitliche Lösungen für Reinigung, Hauswartung und Gebäudemanagement –
              professionell, zuverlässig und massgeschneidert für Ihre Bedürfnisse.
            </p>
            <div>
              <Button to="/dienstleistungen" variant="light" size="lg">
                Unsere Dienstleistungen
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-[clamp(24px,5vw,64px)]">
            {heroStats.map((s) => (
              <StatBlock key={s.label} {...s} onDark />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
