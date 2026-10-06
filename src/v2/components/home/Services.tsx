// BeFi v2 — Services 3-up teaser ("Unsere Leistungen").
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CardGrid, Section, SectionHead, TagList, cardCls, cardTextCls } from "@/v2/components/primitives";
import { services, type ServiceTeaser } from "@/v2/data/befi";

function ServiceTile({ s }: { s: ServiceTeaser }) {
  return (
    <Link
      to="/dienstleistungen"
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
        <span className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[15px] font-semibold text-befi-ink">
          {s.id}
        </span>
        <span className="absolute right-5 top-5 inline-flex h-11 w-11 translate-y-1 items-center justify-center rounded-full bg-befi-brand text-white opacity-0 transition-all duration-300 ease-befi group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="mb-2 mt-0 text-[20px] font-semibold tracking-[-0.01em] text-befi-ink">{s.title}</h3>
        <p className={cn(cardTextCls, "mb-6 flex-1")}>{s.description}</p>
        <TagList items={s.features} />
      </div>
    </Link>
  );
}

export function Services() {
  return (
    <Section tone="sunk">
      <SectionHead
        eyebrow="Unsere Leistungen"
        title="Umfassende"
        titleMuted="Facility Services."
        lead="Professionelle Reinigung, technische Hauswartung und Grünflächenpflege – alles aus einer Hand."
      />
      <CardGrid min={300}>
        {services.map((s) => (
          <ServiceTile key={s.id} s={s} />
        ))}
      </CardGrid>
    </Section>
  );
}
