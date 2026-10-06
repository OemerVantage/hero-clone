// BeFi v2 — Über uns. 1:1-Nachbau aus BeFi-UeberUns-navy.html (Navy-Palette).
// Inline-Styles → unsere Konvention (befi-* Design-Tokens als Tailwind-Klassen).
import { UserRound } from "lucide-react";
import { Header } from "@/v2/components/Header";
import { Footer } from "@/v2/components/Footer";
import { V2Page } from "@/v2/components/V2Page";
import { cn } from "@/lib/utils";
import {
  CardGrid,
  CtaBand,
  IconCard,
  Label,
  PageHero,
  Section,
  SectionHead,
  StatBlock,
  VisionMission,
  bodyCls,
  cardCls,
  cardTextCls,
  cardTitleCls,
  panelRadius,
  subTitleCls,
} from "@/v2/components/primitives";
import { milestones, team, teamGroups, values, type Milestone } from "@/v2/data/befi";

const stats = [
  { value: "15", suffix: "+", label: "Jahre Erfahrung" },
  { value: "500", suffix: "+", label: "Zufriedene Kunden" },
  { value: "1'000", suffix: "+", label: "Betreute Objekte" },
  { value: "50", suffix: "+", label: "Mitarbeitende" },
];

/** Horizontale Timeline mit nummerierten Kreis-Markern + Verbindungslinie (Desktop);
 *  bricht auf < md zu vertikalen Zeilen um. */
function Timeline({ items }: { items: Milestone[] }) {
  return (
    <div className="relative">
      {/* Verbindungslinie – nur Desktop */}
      <div
        className="absolute left-[8%] right-[8%] top-[33px] hidden h-0.5 md:block"
        style={{
          background:
            "linear-gradient(to right, var(--befi-brand) 0%, var(--befi-brand) 75%, var(--befi-border) 100%)",
        }}
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        {items.map((m, i) => (
          <div
            key={m.year}
            className="relative flex flex-col items-center text-center max-md:flex-row max-md:items-stretch max-md:gap-4 max-md:text-left"
          >
            {/* Marker */}
            <div className="relative z-[1] mb-[22px] flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border-2 border-befi-brand bg-befi-white shadow-[0_6px_18px_hsla(184,70%,18%,0.12)] max-md:mb-0">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-befi-brand text-[14px] font-semibold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            {/* Karte */}
            <div className={cn(cardCls, "w-full flex-1 p-7")}>
              <span className="mb-4 inline-block rounded-full bg-befi-brand-tint px-3 py-1 text-[15px] font-semibold text-befi-brand">
                {m.year}
              </span>
              <h3 className={cn(cardTitleCls, "mb-2")}>{m.title}</h3>
              <p className={cardTextCls}>{m.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Fotobasiertes Team-Raster, gruppiert nach teamGroups (von der Aufsicht
 *  bis zum Einsatz vor Ort). Personenfotos kommen später ins image-Feld. */
function TeamGrid() {
  return (
    <div className="flex flex-col gap-12">
      {teamGroups.map((group) => {
        const members = team.filter((m) => m.group === group);
        if (!members.length) return null;
        return (
          <div key={group}>
            <div className="mb-5 flex items-center gap-3">
              <Label>{group}</Label>
              <span className="h-px flex-1 bg-befi-border" />
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(min(220px,100%),1fr))] gap-5">
              {members.map((m) => (
                <figure
                  key={m.name}
                  className={cn(cardCls, "m-0 overflow-hidden")}
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-befi-brand-tint">
                    {m.image ? (
                      <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-befi-brand">
                        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-befi-white">
                          <UserRound size={30} strokeWidth={1.8} />
                        </span>
                        <span className="text-[11px] font-medium tracking-[0.04em] text-befi-muted">
                          Foto folgt
                        </span>
                      </div>
                    )}
                  </div>
                  <figcaption className="px-6 py-5">
                    <p className={cn(cardTitleCls, "mb-1")}>{m.name}</p>
                    <p className="m-0 text-[14px] font-light text-befi-muted">{m.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function UeberUns() {
  return (
    <V2Page>
      <Header active="ueber-uns" />
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "Über uns" }]}
        eyebrow="Über uns"
        title="Exzellenz im Facility Management"
        titleMuted="seit 2011."
        lead="Ein Schweizer Familienunternehmen aus Winterthur – mit persönlicher Verantwortung, kurzen Wegen und einem Team, das anpackt."
      />

      {/* Wer wir sind + Stats */}
      <Section>
        <div className="flex flex-wrap items-start gap-[clamp(32px,4vw,64px)]">
          <div className="flex-[1_1_360px]">
            <h2 className={cn(subTitleCls, "mb-5")}>Wer wir sind</h2>
            <p className={cn(bodyCls, "mb-4")}>
              BeFi Facility Services AG ist ein etabliertes Schweizer Unternehmen mit Sitz in Winterthur.
              Unter der Leitung von Fisnik Dauti bieten wir ganzheitliche Lösungen für Gebäudebetreuung
              und -pflege – professionell, zuverlässig und kundenorientiert.
            </p>
            <p className={cn(bodyCls, "mb-10")}>
              Was uns auszeichnet: ein persönlicher Ansprechpartner, klare Verantwortlichkeiten und ein
              Qualitätsanspruch nach Schweizer Standard – für jedes Objekt, das wir betreuen.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((s) => (
                <StatBlock key={s.label} {...s} />
              ))}
            </div>
          </div>
          <div className="flex-[1_1_420px]">
            <img
              src="/images/team-anerkennung.jpg"
              alt="BeFi Team"
              className={cn(panelRadius, "w-full object-cover")}
            />
          </div>
        </div>
      </Section>

      {/* Unser Weg — Timeline */}
      <Section tone="sunk">
        <SectionHead
          eyebrow="Unser Weg"
          title="Vom Start-up"
          titleMuted="zum Komplettanbieter."
          lead="Über ein Jahrzehnt stetiges Wachstum – nah an den Kunden geblieben."
        />
        <Timeline items={milestones} />
      </Section>

      {/* Vision / Mission + Werte */}
      <Section>
        <SectionHead eyebrow="Wofür wir stehen" title="Vision, Mission" titleMuted="und unsere Werte." />
        <div className="mb-5">
          <VisionMission />
        </div>
        <CardGrid min={220}>
          {values.map((v) => (
            <IconCard key={v.title} icon={v.icon} title={v.title} description={v.description} />
          ))}
        </CardGrid>
      </Section>

      {/* Unser Team — gruppiertes Foto-Raster */}
      <Section tone="sunk">
        <SectionHead
          eyebrow="Unser Team"
          title="Die Menschen"
          titleMuted="hinter BeFi."
          lead="Klare Verantwortlichkeiten – von der Aufsicht bis zum Einsatz vor Ort."
        />
        <TeamGrid />
      </Section>

      <CtaBand title="Lernen Sie uns persönlich kennen" />
      <Footer />
    </V2Page>
  );
}
