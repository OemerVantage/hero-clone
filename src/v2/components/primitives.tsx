// BeFi v2 — shared building blocks. Every page and home section is composed from these,
// so headings, cards, stats and buttons look identical site-wide.
import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { getIcon, type IconName } from "@/v2/lib/icons";
import { contact } from "@/v2/data/befi";

/** Content container — the one width used everywhere (header, sections, footer). */
export const wrapIn = "mx-auto w-full max-w-[1400px] px-[clamp(16px,4vw,80px)]";

/* ── Type scale ─────────────────────────────────────────────────────────── */

/** Section title (h2). */
export const titleCls =
  "m-0 text-[clamp(2rem,1.4rem+2.4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-befi-ink";
/** Sub title one level below (in-section h2/h3). */
export const subTitleCls =
  "m-0 text-[clamp(1.5rem,1.25rem+1vw,2rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-befi-ink";
/** Lead paragraph under a title. */
export const leadCls = "m-0 max-w-[600px] text-lg font-light leading-[1.6] text-befi-muted";
/** Running text inside a section. */
export const bodyCls = "m-0 text-base font-light leading-[1.7] text-befi-muted";
/** Card title / text. */
export const cardTitleCls = "m-0 text-[18px] font-semibold leading-[1.25] text-befi-ink";
export const cardTextCls = "m-0 text-[15px] font-light leading-[1.6] text-befi-muted";

/* ── Surfaces ───────────────────────────────────────────────────────────── */

/** Standard card: one radius, one border, white. Add padding via `cardPad`. */
export const cardCls = "rounded-[24px] border border-befi-border bg-befi-white";
export const cardPad = "p-7";
/** Large media / panels (photos, CTA band, tinted panels). */
export const panelRadius = "rounded-[28px]";

/* ── Labels ─────────────────────────────────────────────────────────────── */

/** Pill above a section title — always with dot. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-befi-border bg-befi-surface px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-befi-ink">
      <span className="h-1.5 w-1.5 rounded-full bg-befi-brand" />
      {children}
    </span>
  );
}

/** Small inline dot label (category, group, "Das ist inklusive" …). */
export function Label({ children, onDark }: { children: ReactNode; onDark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em]",
        onDark ? "text-white/70" : "text-befi-brand",
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", onDark ? "bg-befi-accent" : "bg-befi-brand")} />
      {children}
    </span>
  );
}

/** Feature pill. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-befi-border bg-befi-surface px-3 py-1 text-[13px] text-befi-ink">
      {children}
    </li>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
      {items.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </ul>
  );
}

/** Round icon chip that inverts to brand on hover (or when `active`). */
export function Chip({
  name,
  size = 48,
  active,
}: {
  name: IconName;
  size?: number;
  active?: boolean;
}) {
  const Icon = getIcon(name);
  return (
    <span
      style={{ width: size, height: size }}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border transition-all duration-300 ease-befi",
        active
          ? "border-befi-brand bg-befi-brand text-white"
          : "border-befi-border bg-befi-white text-befi-brand hover:border-befi-brand hover:bg-befi-brand hover:text-white",
      )}
    >
      <Icon size={Math.round(size * 0.42)} />
    </span>
  );
}

/* ── Buttons ────────────────────────────────────────────────────────────── */

type BtnVariant = "primary" | "light" | "ghost-light";
type BtnSize = "md" | "lg";

export function buttonCls(variant: BtnVariant = "primary", size: BtnSize = "md", arrow = true) {
  return cn(
    "inline-flex items-center justify-center gap-2.5 rounded-full font-medium no-underline transition-opacity hover:opacity-90",
    size === "md" ? "h-11 text-[14px]" : "h-[52px] text-[15px]",
    arrow ? (size === "md" ? "pl-5 pr-1.5" : "pl-6 pr-2") : size === "md" ? "px-5" : "px-6",
    variant === "primary" && "bg-befi-brand text-white",
    variant === "light" && "bg-white text-befi-ink",
    variant === "ghost-light" && "border border-white/30 text-white",
  );
}

function ArrowDot({ variant, size }: { variant: BtnVariant; size: BtnSize }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full",
        size === "md" ? "h-8 w-8" : "h-9 w-9",
        variant === "light" ? "bg-befi-brand text-white" : "bg-white text-befi-brand",
      )}
    >
      <ArrowUpRight size={size === "md" ? 15 : 16} />
    </span>
  );
}

/** One button: internal link (`to`) or external/tel/mail link (`href`). */
export function Button({
  to,
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = true,
  icon,
  className,
  onClick,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: BtnVariant;
  size?: BtnSize;
  arrow?: boolean;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const cls = cn(buttonCls(variant, size, arrow), className);
  const inner = (
    <>
      {icon}
      {children}
      {arrow && <ArrowDot variant={variant} size={size} />}
    </>
  );
  return to ? (
    <Link to={to} onClick={onClick} className={cls}>
      {inner}
    </Link>
  ) : (
    <a href={href} onClick={onClick} className={cls}>
      {inner}
    </a>
  );
}

/* ── Layout ─────────────────────────────────────────────────────────────── */

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({ trail }: { trail: Crumb[] }) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-2 text-[13px] text-befi-muted">
      {trail.map((t, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="opacity-50">/</span>}
          {t.href ? (
            <Link to={t.href} className="text-befi-muted no-underline transition-colors hover:text-befi-ink">
              {t.label}
            </Link>
          ) : (
            <span className="text-befi-ink">{t.label}</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}

/** Title with optional muted second line (never italic). */
function TwoToneTitle({ title, titleMuted }: { title: ReactNode; titleMuted?: ReactNode }) {
  return (
    <>
      {title}
      {titleMuted && (
        <>
          <br />
          <span className="text-befi-muted">{titleMuted}</span>
        </>
      )}
    </>
  );
}

/** Page header band: breadcrumb + eyebrow + title + lead (below), on brand tint. */
export function PageHero({
  eyebrow,
  title,
  titleMuted,
  lead,
  trail,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  titleMuted?: ReactNode;
  lead?: ReactNode;
  trail?: Crumb[];
}) {
  return (
    <section className="border-b border-befi-border bg-befi-brand-tint py-[clamp(40px,2rem+4vw,80px)]">
      <div className={wrapIn}>
        {trail && <Breadcrumb trail={trail} />}
        {eyebrow && (
          <div className="mb-5">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        )}
        <h1 className="m-0 max-w-[880px] text-[clamp(2.25rem,1.5rem+3vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-befi-ink">
          <TwoToneTitle title={title} titleMuted={titleMuted} />
        </h1>
        {lead && <p className={cn(leadCls, "mt-6")}>{lead}</p>}
      </div>
    </section>
  );
}

export function Section({
  children,
  tone = "page",
  id,
  className,
}: {
  children: ReactNode;
  tone?: "page" | "tint" | "sunk";
  id?: string;
  className?: string;
}) {
  const bg = tone === "tint" ? "bg-befi-brand-tint" : tone === "sunk" ? "bg-befi-surface" : "";
  return (
    <section id={id} className={cn("scroll-mt-24 py-[clamp(56px,2.5rem+5vw,112px)]", bg, className)}>
      <div className={wrapIn}>{children}</div>
    </section>
  );
}

/** Section head: eyebrow → title (+ muted 2nd line) → lead below. */
export function SectionHead({
  eyebrow,
  title,
  titleMuted,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  titleMuted?: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("mb-12 max-w-[720px]", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <div className="mb-5">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className={titleCls}>
        <TwoToneTitle title={title} titleMuted={titleMuted} />
      </h2>
      {lead && <p className={cn(leadCls, "mt-5", align === "center" && "mx-auto")}>{lead}</p>}
    </div>
  );
}

/** Sub head one level below a section head (optional dot label + title + text). */
export function SubHead({
  label,
  title,
  text,
  className,
}: {
  label?: ReactNode;
  title: ReactNode;
  text?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-8 max-w-[640px]", className)}>
      {label && (
        <div className="mb-3">
          <Label>{label}</Label>
        </div>
      )}
      <h2 className={subTitleCls}>{title}</h2>
      {text && <p className={cn(bodyCls, "mt-3")}>{text}</p>}
    </div>
  );
}

/* ── Cards ──────────────────────────────────────────────────────────────── */

export function CardGrid({ children, min = 240 }: { children: ReactNode; min?: number }) {
  return (
    <div
      className="grid gap-5"
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}px, 100%), 1fr))` }}
    >
      {children}
    </div>
  );
}

/** Icon card — values, features, client types, perks. */
export function IconCard({ icon, title, description }: { icon: IconName; title: string; description: string }) {
  return (
    <div className={cn(cardCls, cardPad, "flex flex-col")}>
      <div className="mb-8">
        <Chip name={icon} />
      </div>
      <h3 className={cn(cardTitleCls, "mb-2")}>{title}</h3>
      <p className={cardTextCls}>{description}</p>
    </div>
  );
}

const visionMission: { icon: IconName; title: string; description: string }[] = [
  { icon: "Eye", title: "Unsere Vision", description: "Führend im Schweizer Facility Management mit höchsten Qualitätsstandards und nachhaltigen Methoden." },
  { icon: "Target", title: "Unsere Mission", description: "Erstklassige Gebäudedienstleistungen durch Innovation, Nachhaltigkeit und persönlichen Service für jedes Objekt." },
];

/** Vision + Mission tinted cards (Home „Über uns“ and Über-uns page). */
export function VisionMission() {
  return (
    <CardGrid min={220}>
      {visionMission.map((c) => {
        const Icon = getIcon(c.icon);
        return (
          <div key={c.title} className="rounded-[24px] bg-befi-brand-tint p-8">
            <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-befi-brand">
              <Icon size={24} />
            </span>
            <h3 className="mb-2 mt-0 text-[20px] font-semibold text-befi-ink">{c.title}</h3>
            <p className="m-0 text-base font-light leading-[1.6] text-befi-ink">{c.description}</p>
          </div>
        );
      })}
    </CardGrid>
  );
}

export function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div className={cn(cardCls, cardPad, "flex flex-col")}>
      <div className="mb-4 flex gap-1 text-befi-brand">
        {Array.from({ length: 5 }).map((_, s) => (
          <Star key={s} size={16} className="fill-current" />
        ))}
      </div>
      <p className="mb-6 mt-0 flex-1 text-base font-light leading-[1.6] text-befi-ink">„{quote}“</p>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-befi-border bg-befi-surface text-[15px] font-semibold text-befi-brand">
          {name.charAt(0)}
        </span>
        <div>
          <p className="m-0 text-[14px] font-semibold text-befi-ink">{name}</p>
          <p className="m-0 text-[14px] text-befi-muted">{role}</p>
        </div>
      </div>
    </div>
  );
}

/** One way to show a key figure. `onDark` for photo/brand backgrounds. */
export function StatBlock({
  value,
  suffix,
  label,
  onDark,
}: {
  value: string;
  suffix?: string;
  label: string;
  onDark?: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline">
        <span
          className={cn(
            "text-[clamp(2rem,1.5rem+2vw,3.25rem)] font-light leading-none tracking-[-0.02em]",
            onDark ? "text-white" : "text-befi-ink",
          )}
        >
          {value}
        </span>
        {suffix && (
          <span
            className={cn(
              "ml-0.5 text-[clamp(1.1rem,0.9rem+1vw,1.75rem)] font-light",
              onDark ? "text-white" : "text-befi-brand",
            )}
          >
            {suffix}
          </span>
        )}
      </div>
      <p className={cn("mb-0 mt-2 text-[14px]", onDark ? "text-white/70" : "text-befi-muted")}>{label}</p>
    </div>
  );
}

/* ── CTA band ───────────────────────────────────────────────────────────── */

/** Brand CTA band used at the bottom of inner pages. */
export function CtaBand({
  title = "Bereit, Ihre Liegenschaft in gute Hände zu geben?",
  text = "Fordern Sie eine unverbindliche Offerte an – wir melden uns innerhalb eines Werktages.",
  primary = { label: "Jetzt anfragen", href: "/kontakt" },
}: {
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
}) {
  return (
    <section className="py-[clamp(24px,2vw,40px)]">
      <div className={wrapIn}>
        <div
          className={cn(
            panelRadius,
            "flex flex-wrap items-center justify-between gap-8 bg-befi-brand px-[clamp(28px,4vw,72px)] py-[clamp(40px,4vw,72px)] text-white",
          )}
        >
          <div className="max-w-[640px]">
            <div className="mb-4">
              <Label onDark>Kontakt aufnehmen</Label>
            </div>
            <h2 className="mb-3 mt-0 text-[clamp(1.5rem,1.25rem+1vw,2rem)] font-semibold leading-[1.15] tracking-[-0.01em]">
              {title}
            </h2>
            <p className="m-0 text-lg font-light leading-[1.6] text-white/80">{text}</p>
          </div>
          <div className="flex flex-col gap-3">
            <Button to={primary.href} variant="light" size="lg">
              {primary.label}
            </Button>
            <Button href={contact.phoneHref} variant="ghost-light" size="lg" arrow={false} icon={<Phone size={16} />}>
              {contact.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
