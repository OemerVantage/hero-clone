// BeFi v2 — Testimonials ("Kundenstimmen").
import { CardGrid, Section, SectionHead, TestimonialCard } from "@/v2/components/primitives";
import { testimonials } from "@/v2/data/befi";

export function Testimonials() {
  return (
    <Section>
      <SectionHead
        eyebrow="Kundenstimmen"
        title="Vertrauen Sie"
        titleMuted="auf unsere Expertise."
        lead="Unsere Kunden schätzen unsere Zuverlässigkeit, Qualität und persönliche Betreuung. Lesen Sie, was sie über die Zusammenarbeit mit BeFi sagen."
      />
      <CardGrid min={340}>
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </CardGrid>
    </Section>
  );
}
