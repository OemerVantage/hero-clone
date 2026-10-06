// BeFi v2 — Service detail (by :slug). Ported from ServiceDetail.jsx (?slug= → router param).
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowUpRight, Check, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Header } from "@/v2/components/Header";
import { Footer } from "@/v2/components/Footer";
import { V2Page } from "@/v2/components/V2Page";
import {
  Button,
  CardGrid,
  CtaBand,
  Label,
  PageHero,
  Section,
  SectionHead,
  TagList,
  bodyCls,
  cardCls,
  panelRadius,
  subTitleCls,
} from "@/v2/components/primitives";
import { allServices, categories, contact, getServiceBySlug, type Service } from "@/v2/data/befi";

function ContactPersonCard() {
  return (
    <div className="flex flex-wrap items-center gap-5 rounded-[24px] bg-befi-brand p-7 text-white">
      <img
        src={contact.image}
        alt={contact.name}
        className="h-[72px] w-[72px] shrink-0 rounded-full object-cover object-center"
      />
      <div className="min-w-[180px] flex-1">
        <div className="mb-1">
          <Label onDark>Ihr Ansprechpartner</Label>
        </div>
        <p className="m-0 text-[18px] font-semibold">{contact.name}</p>
        <p className="mb-4 mt-0 text-[14px] text-white/70">{contact.role}</p>
        <div className="flex flex-wrap gap-2.5">
          <Button href={contact.phoneHref} variant="light" arrow={false} icon={<Phone size={15} />}>
            {contact.phone}
          </Button>
          <Button href={contact.emailHref} variant="ghost-light" arrow={false} icon={<Mail size={15} />}>
            E-Mail
          </Button>
        </div>
      </div>
    </div>
  );
}

function RelatedCard({ s }: { s: Service }) {
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
      </div>
      <div className="flex items-center justify-between gap-3 px-7 py-5">
        <span className="text-[20px] font-semibold tracking-[-0.01em] text-befi-ink">{s.title}</span>
        <span className="text-befi-brand">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = getServiceBySlug(slug);
  if (!s) return <Navigate to="/dienstleistungen" replace />;

  const cat = categories[s.category];
  const related = allServices.filter((x) => x.category === s.category && x.slug !== s.slug).slice(0, 3);

  return (
    <V2Page>
      <Header active="dienstleistungen" />
      <PageHero
        trail={[
          { label: "Home", href: "/" },
          { label: "Dienstleistungen", href: "/dienstleistungen" },
          { label: s.title },
        ]}
        eyebrow={cat.short}
        title={s.title}
        lead={s.short}
      />

      <Section>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-[clamp(32px,4vw,64px)]">
          <div>
            <img src={s.image} alt={s.title} className={cn(panelRadius, "aspect-[4/3] w-full object-cover")} />
            <div className="mt-5">
              <ContactPersonCard />
            </div>
          </div>
          <div>
            <h2 className={cn(subTitleCls, "mb-4")}>Was Sie erwarten dürfen</h2>
            <p className={cn(bodyCls, "mb-6")}>{s.description}</p>
            <div className="mb-10">
              <TagList items={s.features} />
            </div>
            <div className="mb-4">
              <Label>Das ist inklusive</Label>
            </div>
            <ul className="m-0 grid list-none gap-0.5 p-0">
              {s.inclusive.map((it) => (
                <li key={it} className="flex items-start gap-3.5 border-b border-befi-border py-3.5">
                  <span className="mt-px inline-flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-befi-brand-tint text-befi-brand">
                    <Check size={15} />
                  </span>
                  <span className="text-[15px] font-light leading-[1.5] text-befi-ink">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="sunk">
        <SectionHead eyebrow="Weitere Leistungen" title={`Mehr aus ${cat.short}`} />
        <CardGrid min={280}>
          {related.map((r) => (
            <RelatedCard key={r.slug} s={r} />
          ))}
        </CardGrid>
      </Section>

      <CtaBand title={`Interesse an ${s.title}?`} />
      <Footer />
    </V2Page>
  );
}
