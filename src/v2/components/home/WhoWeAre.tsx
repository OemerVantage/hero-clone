// BeFi v2 — Who we are ("Über uns" home block).
import { cn } from "@/lib/utils";
import { Section, SectionHead, StatBlock, VisionMission, bodyCls, panelRadius } from "@/v2/components/primitives";
import { companyStats } from "@/v2/data/befi";

export function WhoWeAre() {
  return (
    <Section>
      <div className="flex flex-wrap items-start gap-[clamp(32px,4vw,64px)]">
        <div className="flex-[1_1_360px]">
          <SectionHead
            eyebrow="Über uns"
            title="Exzellenz im Facility Management"
            titleMuted="seit 2011."
            className="mb-6"
          />
          <p className={cn(bodyCls, "mb-10")}>
            BeFi Facility Services AG ist ein etabliertes Schweizer Unternehmen mit Sitz in Winterthur.
            Unter der Leitung von Fisnik Dauti bieten wir ganzheitliche Lösungen für Gebäudebetreuung
            und -pflege – professionell, zuverlässig und kundenorientiert.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {companyStats.map((s) => (
              <StatBlock key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="flex-[1_1_480px]">
          <img
            src="/images/team-anerkennung.jpg"
            alt="Unser Team"
            className={cn(panelRadius, "mb-5 h-auto w-full object-cover")}
          />
          <VisionMission />
        </div>
      </div>
    </Section>
  );
}
