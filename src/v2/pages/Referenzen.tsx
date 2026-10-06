// BeFi v2 — Referenzen. Ported from Referenzen.jsx.
import { cn } from "@/lib/utils";
import { Header } from "@/v2/components/Header";
import { Footer } from "@/v2/components/Footer";
import { V2Page } from "@/v2/components/V2Page";
import {
  CardGrid,
  CtaBand,
  IconCard,
  PageHero,
  Section,
  SectionHead,
  StatBlock,
  TagList,
  TestimonialCard,
  cardCls,
  cardTitleCls,
} from "@/v2/components/primitives";
import { clientTypes, companyStats, referenceProjects, testimonials } from "@/v2/data/befi";

export default function Referenzen() {
  return (
    <V2Page>
      <Header active="referenzen" />
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "Referenzen" }]}
        eyebrow="Referenzen"
        title="Vertrauen Sie"
        titleMuted="auf unsere Expertise."
        lead="Über 500 Kunden vertrauen uns mit mehr als 1'000 Objekten – von Verwaltungen über KMU bis zu Privateigentümern."
      />

      <Section>
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {companyStats.map((s) => (
            <StatBlock key={s.label} {...s} />
          ))}
        </div>

        <SectionHead eyebrow="Wen wir betreuen" title="Partner für" titleMuted="jede Liegenschaft." />
        <CardGrid>
          {clientTypes.map((c) => (
            <IconCard key={c.title} icon={c.icon} title={c.title} description={c.description} />
          ))}
        </CardGrid>
      </Section>

      <Section tone="sunk">
        <SectionHead
          eyebrow="Ausgewählte Projekte"
          title="Einblicke"
          titleMuted="in unsere Arbeit."
          lead="Eine Auswahl betreuter Objekte – stellvertretend für viele."
        />
        <CardGrid min={300}>
          {referenceProjects.map((p) => (
            <article key={p.title} className={cn(cardCls, "overflow-hidden")}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-[13px] font-semibold text-befi-ink">
                  {p.scope}
                </span>
              </div>
              <div className="p-7">
                <h3 className={cn(cardTitleCls, "mb-4")}>{p.title}</h3>
                <TagList items={p.services} />
              </div>
            </article>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionHead eyebrow="Kundenstimmen" title="Was unsere" titleMuted="Kunden sagen." />
        <CardGrid min={340}>
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </CardGrid>
      </Section>

      <CtaBand title="Werden Sie unsere nächste Referenz" />
      <Footer />
    </V2Page>
  );
}
