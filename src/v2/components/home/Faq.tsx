// BeFi v2 — FAQ accordion (single-open). Ported from Social.jsx.
import { useState } from "react";
import { Plus } from "lucide-react";
import { Section, SectionHead } from "@/v2/components/primitives";
import { faqs } from "@/v2/data/befi";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <Section tone="sunk">
      <div className="flex flex-wrap items-start gap-[clamp(32px,4vw,64px)]">
        <div className="flex-[1_1_320px]">
          <SectionHead
            eyebrow="Häufige Fragen"
            title="Häufig gestellte"
            titleMuted="Fragen."
            lead="Sie finden Ihre Antwort nicht? Rufen Sie uns an – wir helfen gerne weiter."
            className="mb-0"
          />
        </div>

        <div className="flex-[1_1_520px]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-befi-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left text-[18px] font-medium text-befi-ink"
                >
                  <span>{f.question}</span>
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-befi-border transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-befi"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="m-0 pb-6 text-base font-light leading-[1.7] text-befi-muted">{f.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
