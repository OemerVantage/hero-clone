// BeFi v2 — shared Footer (petrol surface). Ported from Contact.jsx.
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { contact } from "@/v2/data/befi";
import { Logo } from "@/v2/components/Logo";
import { wrapIn } from "@/v2/components/primitives";

// Same order as the header navigation.
const NAV_LINKS: [string, string][] = [
  ["Home", "/"],
  ["Dienstleistungen", "/dienstleistungen"],
  ["Über uns", "/ueber-uns"],
  ["BeFi Soft", "/befi-soft"],
  ["Referenzen", "/referenzen"],
  ["Karriere", "/karriere"],
  ["Kontakt", "/kontakt"],
];

const SERVICE_LINKS: [string, string][] = [
  ["Hauswartung & Technik", "/dienstleistungen#hauswartung"],
  ["Reinigung & Unterhalt", "/dienstleistungen#reinigung"],
  ["Gartenunterhalt", "/dienstleistungen/gartenunterhalt"],
  ["Winterdienst", "/dienstleistungen/winterdienst"],
];

const headCls = "mb-4 mt-0 text-[14px] font-semibold uppercase tracking-[0.04em] text-white";
const linkCls = "text-[14px] text-white/70 no-underline transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="bg-befi-footer-bg py-[clamp(48px,4vw,64px)] text-white">
      <div className={wrapIn}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-10">
          <div className="flex flex-col gap-4">
            <Logo dark className="h-16" />
            <p className="m-0 text-[14px] leading-[1.6] text-white/70">
              Ihr Partner für professionelles Facility Management in der Region Winterthur. Qualität,
              Zuverlässigkeit und Kundenzufriedenheit seit über 15 Jahren.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className={headCls}>Navigation</h4>
            {NAV_LINKS.map(([label, to]) => (
              <Link key={label} to={to} className={linkCls}>
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className={headCls}>Dienstleistungen</h4>
            {SERVICE_LINKS.map(([label, to]) => (
              <Link key={label} to={to} className={linkCls}>
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className={headCls}>Kontakt</h4>
            <div className="flex gap-3 text-[14px] text-white/70">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span className="whitespace-pre-line">{contact.address.replace(", ", "\n")}</span>
            </div>
            <a href={contact.phoneHref} className="flex items-center gap-3 text-[14px] text-white/70 no-underline hover:text-white">
              <Phone size={16} className="shrink-0" />
              <span>{contact.phone}</span>
            </a>
            <a href={contact.emailHref} className="flex items-center gap-3 text-[14px] text-white/70 no-underline hover:text-white">
              <Mail size={16} className="shrink-0" />
              <span>{contact.email}</span>
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-7 text-center">
          <p className="m-0 text-[14px] text-white/50">
            © {new Date().getFullYear()} BeFi Facility Services AG. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
