// BeFi v2 — Value props ("Was bringt BeFi Ihnen?").
import { CardGrid, IconCard, Section, SectionHead } from "@/v2/components/primitives";
import { values } from "@/v2/data/befi";

export function ValueProps() {
  return (
    <Section>
      <SectionHead
        eyebrow="Was bringt BeFi Ihnen?"
        title="Vier Gründe, warum"
        titleMuted="Unternehmen uns vertrauen."
        lead="Seit über 15 Jahren betreuen wir Liegenschaften in Winterthur und Umgebung – zuverlässig, regional und mit echtem Servicegedanken."
      />
      <CardGrid>
        {values.map((v) => (
          <IconCard key={v.title} icon={v.icon} title={v.title} description={v.description} />
        ))}
      </CardGrid>
    </Section>
  );
}
