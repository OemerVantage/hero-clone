// BeFi v2 — Karriere. Ported from Karriere.jsx.
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Header } from "@/v2/components/Header";
import { Footer } from "@/v2/components/Footer";
import { V2Page } from "@/v2/components/V2Page";
import {
  Button,
  CardGrid,
  CtaBand,
  IconCard,
  PageHero,
  Section,
  SectionHead,
  cardCls,
  cardTextCls,
  cardTitleCls,
} from "@/v2/components/primitives";
import { perks, jobs } from "@/v2/data/befi";

export default function Karriere() {
  return (
    <V2Page>
      <Header active="karriere" />
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "Karriere" }]}
        eyebrow="Karriere"
        title="Arbeiten bei BeFi"
        lead="Werden Sie Teil eines eingespielten Schweizer Teams – mit fairer Anstellung, kurzen Wegen und echter Wertschätzung."
      />

      <Section>
        <SectionHead
          eyebrow="Warum BeFi"
          title="Was Sie"
          titleMuted="bei uns erwartet."
          lead="Ein Arbeitgeber, der anpackt – und auf den Sie sich verlassen können."
        />
        <CardGrid>
          {perks.map((p) => (
            <IconCard key={p.title} icon={p.icon} title={p.title} description={p.description} />
          ))}
        </CardGrid>
      </Section>

      <Section tone="sunk">
        <SectionHead
          eyebrow="Offene Stellen"
          title="Aktuelle Vakanzen"
          lead="Keine passende Stelle dabei? Wir freuen uns über Ihre Initiativbewerbung."
        />
        <div className="flex flex-col gap-4">
          {jobs.map((j) => (
            <div
              key={j.title}
              className={cn(cardCls, "flex flex-wrap items-center justify-between gap-5 p-7")}
            >
              <div className="flex-[1_1_360px]">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-befi-brand-tint px-3 py-1 text-[13px] font-semibold text-befi-brand">
                    {j.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[13px] text-befi-muted">
                    <MapPin size={13} />
                    {j.location}
                  </span>
                </div>
                <h3 className={cn(cardTitleCls, "mb-1")}>{j.title}</h3>
                <p className={cardTextCls}>{j.description}</p>
              </div>
              <Button to="/kontakt" className="shrink-0">
                Bewerben
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Werden Sie Teil des Teams"
        text="Auch ohne passende Stelle: Senden Sie uns Ihre Initiativbewerbung – wir melden uns zeitnah."
        primary={{ label: "Initiativ bewerben", href: "/kontakt" }}
      />
      <Footer />
    </V2Page>
  );
}
