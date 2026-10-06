// BeFi v2 — Dienstleistungen (overview, grouped by category).
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Header } from "@/v2/components/Header";
import { Footer } from "@/v2/components/Footer";
import { V2Page } from "@/v2/components/V2Page";
import {
  CardGrid,
  CtaBand,
  PageHero,
  Section,
  SubHead,
  TagList,
  cardCls,
  cardTextCls,
} from "@/v2/components/primitives";
import {
  categories,
  getServicesByCategory,
  type Service,
  type ServiceCategory,
} from "@/v2/data/befi";

export function ServiceGridCard({ s }: { s: Service }) {
  return (
    <Link
      to={`/dienstleistungen/${s.slug}`}
      className={cn(
        cardCls,
        "group flex flex-col overflow-hidden no-underline transition-all duration-500 ease-befi hover:-translate-y-1 hover:shadow-befi-xl",
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={s.image}
          alt={s.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-befi group-hover:scale-105"
        />
        <span className="absolute right-5 top-5 inline-flex h-11 w-11 translate-y-1 items-center justify-center rounded-full bg-befi-brand text-white opacity-0 transition-all duration-300 ease-befi group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="mb-2 mt-0 text-[20px] font-semibold tracking-[-0.01em] text-befi-ink">{s.title}</h3>
        <p className={cn(cardTextCls, "mb-6 flex-1")}>{s.short}</p>
        <TagList items={s.features.slice(0, 3)} />
      </div>
    </Link>
  );
}

function CategoryBlock({ catKey }: { catKey: ServiceCategory }) {
  const cat = categories[catKey];
  return (
    <>
      <SubHead label={cat.short} title={cat.label} text={cat.description} />
      <CardGrid min={280}>
        {getServicesByCategory(catKey).map((s) => (
          <ServiceGridCard key={s.slug} s={s} />
        ))}
      </CardGrid>
    </>
  );
}

export default function Dienstleistungen() {
  return (
    <V2Page>
      <Header active="dienstleistungen" />
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "Dienstleistungen" }]}
        eyebrow="Unsere Leistungen"
        title="Umfassende Facility Services"
        titleMuted="aus einer Hand."
        lead="Reinigung, Hauswartung und Gartenpflege – für Verwaltungen, KMU und Privateigentümer in Winterthur und der Deutschschweiz."
      />
      <Section id="hauswartung">
        <CategoryBlock catKey="hauswartung" />
      </Section>
      <Section id="reinigung" tone="sunk">
        <CategoryBlock catKey="reinigung" />
      </Section>
      <CtaBand />
      <Footer />
    </V2Page>
  );
}
