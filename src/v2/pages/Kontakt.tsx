// BeFi v2 — Kontakt (info cards + contact person + enquiry form). Ported from Kontakt.jsx.
import { Header } from "@/v2/components/Header";
import { Footer } from "@/v2/components/Footer";
import { V2Page } from "@/v2/components/V2Page";
import { cn } from "@/lib/utils";
import { Label, PageHero, Section, cardCls } from "@/v2/components/primitives";
import { EnquiryForm } from "@/v2/components/EnquiryForm";
import { getIcon, type IconName } from "@/v2/lib/icons";
import { contact } from "@/v2/data/befi";

const info: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "MapPin", label: "Adresse", value: contact.address.replace(", ", "\n") },
  { icon: "Phone", label: "Telefon", value: contact.phone, href: contact.phoneHref },
  { icon: "Mail", label: "E-Mail", value: contact.email, href: contact.emailHref },
  { icon: "Clock", label: "Erreichbarkeit", value: "Mo–Fr 07:30–17:30\n24h Pikett bei Notfällen" },
];

export default function Kontakt() {
  return (
    <V2Page>
      <Header active="kontakt" />
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "Kontakt" }]}
        eyebrow="Kontakt"
        title="Lassen Sie uns über Ihre"
        titleMuted="Anforderungen sprechen."
        lead="Fragen oder eine unverbindliche Offerte? Unser Team in Winterthur berät Sie gerne persönlich."
      />

      <Section>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-[clamp(32px,4vw,64px)]">
          <div>
            <div className="mb-5 grid grid-cols-2 gap-5">
              {info.map((it) => {
                const Icon = getIcon(it.icon);
                return (
                  <div key={it.label} className={cn(cardCls, "p-6")}>
                    <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-befi-brand-tint text-befi-brand">
                      <Icon size={18} />
                    </span>
                    <p className="mb-1 mt-0 text-[11px] font-semibold uppercase tracking-[0.08em] text-befi-muted">
                      {it.label}
                    </p>
                    {it.href ? (
                      <a href={it.href} className="text-[15px] font-medium text-befi-ink no-underline">
                        {it.value}
                      </a>
                    ) : (
                      <p className="m-0 whitespace-pre-line text-[15px] leading-[1.5] text-befi-ink">{it.value}</p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-5 rounded-[24px] bg-befi-brand p-7 text-white">
              <img
                src={contact.image}
                alt={contact.name}
                className="h-16 w-16 shrink-0 rounded-full object-cover"
              />
              <div>
                <div className="mb-1">
                  <Label onDark>Ihr Ansprechpartner</Label>
                </div>
                <p className="m-0 text-[18px] font-semibold">{contact.name}</p>
                <p className="m-0 text-[14px] text-white/70">{contact.role}</p>
              </div>
            </div>
          </div>

          <EnquiryForm variant="page" heading="Anfrage senden" />
        </div>
      </Section>

      <Footer />
    </V2Page>
  );
}
