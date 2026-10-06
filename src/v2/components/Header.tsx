// BeFi v2 — Header (sticky nav + services mega-menu + mobile sheet). Ported from Header.jsx.
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/v2/components/Logo";
import { Button, wrapIn } from "@/v2/components/primitives";

export type ActivePage =
  | "home"
  | "dienstleistungen"
  | "ueber-uns"
  | "befi-soft"
  | "referenzen"
  | "karriere"
  | "kontakt";

const SERVICE_MENU: { cat: string; items: [string, string][] }[] = [
  {
    cat: "Hauswartung",
    items: [
      ["Technischer Dienst", "technischer-dienst"],
      ["Winterdienst", "winterdienst"],
      ["Gartenunterhalt", "gartenunterhalt"],
      ["Gebäudeunterhalt", "gebaeudeunterhalt"],
    ],
  },
  {
    cat: "Reinigung",
    items: [
      ["Gewerbereinigung", "gewerbereinigung"],
      ["Treppenhausreinigung", "treppenhausreinigung"],
      ["Fensterreinigung", "fensterreinigung"],
      ["Spezialreinigung", "spezialreinigung"],
      ["Umzugsreinigung", "umzugsreinigung"],
      ["Fassadenreinigung", "fassadenreinigung"],
    ],
  },
];

const NAV: { label: string; to: string; key: ActivePage }[] = [
  { label: "Home", to: "/", key: "home" },
  { label: "Über uns", to: "/ueber-uns", key: "ueber-uns" },
  { label: "BeFi Soft", to: "/befi-soft", key: "befi-soft" },
  { label: "Referenzen", to: "/referenzen", key: "referenzen" },
  { label: "Karriere", to: "/karriere", key: "karriere" },
];

function navLink(isActive: boolean) {
  return cn(
    "rounded-full border border-transparent px-3 py-1.5 text-[14px] font-medium no-underline transition-colors",
    isActive ? "text-befi-brand" : "text-befi-ink/80 hover:text-befi-ink",
  );
}

export function Header({ active }: { active?: ActivePage }) {
  const [menu, setMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-befi-border bg-befi-white">
      <div className={cn(wrapIn, "flex items-center justify-between py-[18px]")}>
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 min-[860px]:flex">
          <Link to="/" className={navLink(active === "home")}>
            Home
          </Link>

          {/* Dienstleistungen + mega-menu */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/dienstleistungen"
              className={cn(
                navLink(active === "dienstleistungen"),
                "inline-flex items-center gap-1",
                (servicesOpen || active === "dienstleistungen") && "border-befi-brand",
              )}
            >
              Dienstleistungen
              <ChevronDown
                size={14}
                className={cn("transition-transform duration-200", servicesOpen && "rotate-180")}
              />
            </Link>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <div className="w-[560px] max-w-[90vw] overflow-hidden rounded-[16px] border border-befi-border bg-white shadow-befi-2xl">
                  <div className="grid grid-cols-2 gap-7 p-7">
                    {SERVICE_MENU.map(({ cat, items }) => (
                      <div key={cat}>
                        <h4 className="mb-3.5 mt-0 text-[11px] font-semibold uppercase tracking-[0.08em] text-befi-muted">
                          {cat}
                        </h4>
                        <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                          {items.map(([title, slug]) => (
                            <li key={slug}>
                              <Link
                                to={`/dienstleistungen/${slug}`}
                                onClick={() => setServicesOpen(false)}
                                className="-mx-3 block rounded-lg px-3 py-2 text-[15px] text-befi-ink no-underline transition-colors hover:bg-befi-surface"
                              >
                                {title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-befi-border px-7 py-4">
                    <Link
                      to="/dienstleistungen"
                      onClick={() => setServicesOpen(false)}
                      className="inline-flex items-center gap-1.5 text-[14px] font-medium text-befi-ink no-underline hover:opacity-70"
                    >
                      Alle Dienstleistungen im Überblick <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/ueber-uns" className={navLink(active === "ueber-uns")}>
            Über uns
          </Link>
          <Link to="/befi-soft" className={navLink(active === "befi-soft")}>
            BeFi Soft
          </Link>
          <Link to="/referenzen" className={navLink(active === "referenzen")}>
            Referenzen
          </Link>
          <Link to="/karriere" className={navLink(active === "karriere")}>
            Karriere
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Button to="/kontakt" className="hidden min-[860px]:inline-flex">
          Jetzt anfragen
        </Button>

        {/* Burger */}
        <button
          type="button"
          onClick={() => setMenu(true)}
          aria-label="Menü"
          className="inline-flex p-1 text-befi-ink min-[860px]:hidden"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile sheet */}
      {menu && (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            aria-label="Menü schliessen"
            onClick={() => setMenu(false)}
            className="absolute inset-0 bg-black/30"
          />
          <div className="absolute bottom-0 right-0 top-0 flex w-[320px] max-w-[85vw] flex-col bg-white">
            <div className="flex items-center justify-between border-b border-befi-border p-6">
              <Logo className="h-10" />
              <button
                type="button"
                onClick={() => setMenu(false)}
                aria-label="Schliessen"
                className="text-befi-ink"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-6">
              <Link to="/" onClick={() => setMenu(false)} className="rounded-lg px-4 py-3 text-[18px] font-medium text-befi-ink no-underline hover:bg-befi-surface">
                Home
              </Link>
              <Link to="/dienstleistungen" onClick={() => setMenu(false)} className="rounded-lg px-4 py-3 text-[18px] font-medium text-befi-ink no-underline hover:bg-befi-surface">
                Dienstleistungen
              </Link>
              {NAV.filter((n) => n.key !== "home").map((n) => (
                <Link key={n.key} to={n.to} onClick={() => setMenu(false)} className="rounded-lg px-4 py-3 text-[18px] font-medium text-befi-ink no-underline hover:bg-befi-surface">
                  {n.label}
                </Link>
              ))}
              <Link to="/kontakt" onClick={() => setMenu(false)} className="rounded-lg px-4 py-3 text-[18px] font-medium text-befi-ink no-underline hover:bg-befi-surface">
                Kontakt
              </Link>
            </nav>
            <div className="border-t border-befi-border p-6">
              <Button to="/kontakt" size="lg" onClick={() => setMenu(false)} className="w-full">
                Jetzt anfragen
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
