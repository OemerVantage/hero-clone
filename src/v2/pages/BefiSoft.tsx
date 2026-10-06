// BeFi v2 — BeFi Soft (product page · concept). Ported from BefiSoft.jsx.
import { ClipboardList, ShieldCheck, Timer, type LucideIcon } from "lucide-react";
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
  SubHead,
  cardCls,
} from "@/v2/components/primitives";
import { befiSoft } from "@/v2/data/befi";

function Bar({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div className="mb-3">
      <div className="mb-1.5 flex justify-between text-[12px] text-befi-muted">
        <span>{label}</span>
        <span className="font-semibold text-befi-ink">{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-befi-surface">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}

const statusRows: { title: string; Icon: LucideIcon; color: string; ref: number }[] = [
  { title: "Erledigt", Icon: ShieldCheck, color: "var(--befi-accent)", ref: 42 },
  { title: "Geplant", Icon: ClipboardList, color: "var(--befi-brand)", ref: 17 },
  { title: "Rapport offen", Icon: Timer, color: "var(--befi-muted-fg)", ref: 63 },
];

function SoftMock() {
  return (
    <div className={cn(cardCls, "overflow-hidden shadow-befi-xl")}>
      <div className="flex items-center gap-2 border-b border-befi-border bg-befi-surface-30 px-[18px] py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e0564f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e8b84b]" />
        <span className="h-2.5 w-2.5 rounded-full bg-befi-accent" />
        <span className="ml-2.5 text-[13px] font-semibold text-befi-muted">BeFi Soft · Dashboard</span>
      </div>
      <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-4 p-[18px]">
        <div className="flex flex-col gap-3.5">
          <div className="rounded-[16px] bg-befi-brand p-[18px] text-white">
            <p className="mb-0.5 mt-0 text-[12px] text-white/70">Heute geplant</p>
            <p className="m-0 text-[26px] font-semibold">24 Einsätze</p>
          </div>
          <div className="rounded-[16px] border border-befi-border bg-befi-surface-30 p-[18px]">
            <p className="mb-3.5 mt-0 text-[13px] font-semibold text-befi-ink">Qualitätskontrolle</p>
            <Bar label="Treppenhausreinigung" pct={96} color="var(--befi-brand)" />
            <Bar label="Unterhalt Bürohaus" pct={88} color="var(--befi-brand)" />
            <Bar label="Winterdienst Pikett" pct={100} color="var(--befi-accent)" />
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          {statusRows.map(({ title, Icon, color, ref }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-[14px] border border-befi-border bg-befi-surface-30 px-3.5 py-3"
            >
              <span
                className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-befi-border bg-white"
                style={{ color }}
              >
                <Icon size={16} />
              </span>
              <div>
                <p className="m-0 text-[13px] font-semibold text-befi-ink">{title}</p>
                <p className="m-0 text-[12px] text-befi-muted">Liegenschaft #{ref}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BefiSoft() {
  return (
    <V2Page>
      <Header active="befi-soft" />
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "BeFi Soft" }]}
        eyebrow="BeFi Soft"
        title="Facility Management,"
        titleMuted="digital im Griff."
        lead={befiSoft.intro}
      />

      <Section>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-[clamp(32px,4vw,64px)]">
          <div>
            <SubHead
              label={befiSoft.tagline}
              title="Transparenz vom Auftrag bis zur Rechnung"
              text="Jeder Einsatz wird geplant, dokumentiert und nachvollziehbar abgerechnet – mit Fotonachweis und transparentem Online-Zugang für unsere Kunden."
            />
            <Button to="/kontakt" size="lg">
              Demo anfragen
            </Button>
          </div>
          <SoftMock />
        </div>
      </Section>

      <Section tone="sunk">
        <SectionHead eyebrow="Funktionen" title="Alles, was BeFi" titleMuted="digital begleitet." />
        <CardGrid>
          {befiSoft.features.map((ft) => (
            <IconCard key={ft.title} icon={ft.icon} title={ft.title} description={ft.description} />
          ))}
        </CardGrid>
      </Section>

      <CtaBand
        title="Neugierig auf BeFi Soft?"
        text="Vereinbaren Sie eine unverbindliche Demo – wir zeigen Ihnen die Plattform live."
        primary={{ label: "Demo anfragen", href: "/kontakt" }}
      />
      <Footer />
    </V2Page>
  );
}
