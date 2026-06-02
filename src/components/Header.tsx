import { useState } from "react";
import { ArrowUpRight, Building2, ChevronDown, Menu, Users, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  getServicesByCategory,
  serviceCategories,
} from "@/data/services";

const aboutItems = [
  {
    icon: Building2,
    title: "Unternehmen & Geschichte",
    description: "Wer wir sind und wie BeFi entstand.",
    path: "/ueber-uns/unternehmen",
  },
  {
    icon: Users,
    title: "Unser Team",
    description: "Die Menschen hinter BeFi.",
    path: "/ueber-uns/team",
  },
] as const;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "BeFi Soft", path: "/befi-soft" },
    { label: "Karriere", path: "/karriere" },
    { label: "Referenzen", path: "/referenzen" },
    { label: "Kontakt", path: "/kontakt" },
  ];

  const hauswartung = getServicesByCategory("hauswartung");
  const reinigung = getServicesByCategory("reinigung");

  return (
    <header className="relative w-full py-5 px-4 md:px-6 lg:px-12 flex items-center justify-between bg-background z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground"
        >
          <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2.5" />
          <path d="M4 14H28" stroke="currentColor" strokeWidth="2" />
          <path d="M10 14V24" stroke="currentColor" strokeWidth="2" />
          <path d="M22 14V24" stroke="currentColor" strokeWidth="2" />
        </svg>
        <span className="text-lg font-semibold tracking-tight">BEFI</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8">
        <Link to="/" className="nav-link">Home</Link>

        {/* Dienstleistungen with Mega Menu */}
        <div
          className="relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <Link
            to="/dienstleistungen"
            className={`nav-link inline-flex items-center gap-1 px-3 py-1.5 rounded-full border transition-colors ${
              servicesOpen ? "border-foreground" : "border-transparent"
            }`}
          >
            Dienstleistungen
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                servicesOpen ? "rotate-180" : ""
              }`}
            />
          </Link>

          {servicesOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
              <div className="bg-background border border-border rounded-2xl shadow-2xl w-[640px] max-w-[90vw] overflow-hidden">
                <div className="grid grid-cols-2 gap-8 p-8">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      {serviceCategories.hauswartung.label}
                    </h4>
                    <ul className="space-y-1">
                      {hauswartung.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to={`/dienstleistungen/${s.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="block px-3 py-2 -mx-3 rounded-lg text-[15px] text-foreground hover:bg-secondary transition-colors"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      {serviceCategories.reinigung.label}
                    </h4>
                    <ul className="space-y-1">
                      {reinigung.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to={`/dienstleistungen/${s.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="block px-3 py-2 -mx-3 rounded-lg text-[15px] text-foreground hover:bg-secondary transition-colors"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border-t border-border px-8 py-4">
                  <Link
                    to="/dienstleistungen"
                    onClick={() => setServicesOpen(false)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:opacity-70"
                  >
                    Alle Dienstleistungen im Überblick
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Über uns with Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <button
            type="button"
            className={`nav-link inline-flex items-center gap-1 px-3 py-1.5 rounded-full border transition-colors ${
              aboutOpen ? "border-foreground" : "border-transparent"
            }`}
          >
            Über uns
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                aboutOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {aboutOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
              <div className="bg-background border border-border rounded-2xl shadow-2xl w-[420px] max-w-[90vw] overflow-hidden">
                <ul className="p-3">
                  {aboutItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={() => setAboutOpen(false)}
                          className="group flex items-start gap-4 px-4 py-3 rounded-xl hover:bg-secondary transition-colors"
                        >
                          <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary border border-border text-foreground group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all">
                            <Icon className="w-4 h-4" />
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="text-[15px] font-medium text-foreground mb-0.5 flex items-center gap-1.5">
                              {item.title}
                              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>

        {navLinks
          .filter((l) => l.label !== "Home" && l.label !== "Kontakt")
          .map((link) => (
            <Link key={link.label} to={link.path} className="nav-link">
              {link.label}
            </Link>
          ))}
      </nav>

      {/* Contact Button - Desktop */}
      <button className="hidden sm:inline-flex btn-contact">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span className="hidden lg:inline">Jetzt anfragen</span>
        <span className="lg:hidden">Anfragen</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <button className="p-2 -mr-2" aria-label="Menü öffnen">
            <Menu className="w-6 h-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[360px] p-0">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-foreground"
                >
                  <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M4 14H28" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 14V24" stroke="currentColor" strokeWidth="2" />
                  <path d="M22 14V24" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span className="text-base font-semibold tracking-tight">BEFI</span>
              </div>
              <SheetClose asChild>
                <button className="p-2 -mr-2" aria-label="Menü schliessen">
                  <X className="w-5 h-5" />
                </button>
              </SheetClose>
            </div>

            <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-1">
              <SheetClose asChild>
                <Link to="/" className="py-3 px-4 text-lg font-medium text-foreground hover:bg-secondary rounded-lg transition-colors">
                  Home
                </Link>
              </SheetClose>

              {/* Mobile Services & About Accordion */}
              <Accordion type="multiple" className="w-full">
                {/* Dienstleistungen */}
                <AccordionItem value="services" className="border-none">
                  <AccordionTrigger className="py-3 px-4 text-lg font-medium text-foreground hover:bg-secondary rounded-lg hover:no-underline data-[state=open]:bg-secondary">
                    Dienstleistungen
                  </AccordionTrigger>
                  <AccordionContent className="pb-0 pt-2">
                    <div className="pl-4 space-y-4">
                      <div>
                        <h5 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 px-4">
                          {serviceCategories.hauswartung.short}
                        </h5>
                        <ul className="space-y-0.5">
                          {hauswartung.map((s) => (
                            <li key={s.slug}>
                              <SheetClose asChild>
                                <Link
                                  to={`/dienstleistungen/${s.slug}`}
                                  className="block py-2 px-4 text-sm text-foreground hover:bg-secondary rounded-md"
                                >
                                  {s.title}
                                </Link>
                              </SheetClose>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 px-4">
                          {serviceCategories.reinigung.short}
                        </h5>
                        <ul className="space-y-0.5">
                          {reinigung.map((s) => (
                            <li key={s.slug}>
                              <SheetClose asChild>
                                <Link
                                  to={`/dienstleistungen/${s.slug}`}
                                  className="block py-2 px-4 text-sm text-foreground hover:bg-secondary rounded-md"
                                >
                                  {s.title}
                                </Link>
                              </SheetClose>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <SheetClose asChild>
                        <Link
                          to="/dienstleistungen"
                          className="flex items-center gap-1.5 py-2 px-4 text-sm font-medium text-foreground border-t border-border mt-2 pt-3"
                        >
                          Alle Dienstleistungen im Überblick
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </SheetClose>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Über uns */}
                <AccordionItem value="about" className="border-none">
                  <AccordionTrigger className="py-3 px-4 text-lg font-medium text-foreground hover:bg-secondary rounded-lg hover:no-underline data-[state=open]:bg-secondary">
                    Über uns
                  </AccordionTrigger>
                  <AccordionContent className="pb-0 pt-2">
                    <ul className="pl-4 space-y-0.5">
                      {aboutItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.path}>
                            <SheetClose asChild>
                              <Link
                                to={item.path}
                                className="flex items-center gap-3 py-2.5 px-4 text-sm text-foreground hover:bg-secondary rounded-md"
                              >
                                <Icon className="w-4 h-4 text-muted-foreground" />
                                {item.title}
                              </Link>
                            </SheetClose>
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {navLinks
                .filter((l) => l.label !== "Home")
                .map((link) => (
                  <SheetClose asChild key={link.label}>
                    <Link
                      to={link.path}
                      className="py-3 px-4 text-lg font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
            </nav>

            <div className="p-6 border-t border-border">
              <SheetClose asChild>
                <Link
                  to="/kontakt"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-foreground text-background rounded-full font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span>Jetzt anfragen</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
