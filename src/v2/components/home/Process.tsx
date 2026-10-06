// BeFi v2 — Process ("So arbeiten wir") + guarantee bar.
import { cn } from "@/lib/utils";
import {
  CardGrid,
  Chip,
  Label,
  Section,
  SectionHead,
  cardCls,
  cardPad,
  cardTextCls,
  cardTitleCls,
} from "@/v2/components/primitives";
import { steps, guarantees } from "@/v2/data/befi";

export function Process() {
  return (
    <Section tone="tint">
      <SectionHead
        eyebrow="So arbeiten wir"
        title="Vom ersten Anruf"
        titleMuted="bis zur laufenden Betreuung."
        lead="Strukturiert, transparent und ohne Überraschungen. So gewinnen Sie einen Partner, der dauerhaft funktioniert."
      />

      <div className="mb-12">
        <CardGrid>
          {steps.map((step) => (
            <div key={step.title} className={cn(cardCls, cardPad)}>
              <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.08em] text-befi-muted">
                <Chip name={step.icon} size={28} />
                {step.duration}
              </div>
              <h3 className={cn(cardTitleCls, "mb-2")}>{step.title}</h3>
              <p className={cardTextCls}>{step.description}</p>
            </div>
          ))}
        </CardGrid>
      </div>

      <div className={cn(cardCls, "overflow-hidden")}>
        <div className="border-b border-befi-border bg-befi-surface-30 px-7 py-5">
          <Label>Unsere Versprechen</Label>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {guarantees.map((g, i) => (
            <div key={g.label} className={cn("flex gap-5 p-7", i > 0 && "border-l border-befi-border")}>
              <Chip name={g.icon} size={44} />
              <div>
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="text-[clamp(1.75rem,1.4rem+1vw,2.25rem)] font-semibold leading-none tracking-[-0.02em] text-befi-ink">
                    {g.value}
                  </span>
                  <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-befi-muted">
                    {g.label}
                  </span>
                </div>
                <p className="m-0 text-[14px] font-light leading-[1.6] text-befi-muted">{g.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
