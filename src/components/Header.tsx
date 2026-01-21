import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Dienstleistungen", path: "/dienstleistungen" },
    { label: "Über uns", path: "/ueber-uns" },
    { label: "Referenzen", path: "/#testimonials" },
    { label: "Kontakt", path: "/#contact" }
  ];

  return (
    <header className="w-full py-5 px-4 md:px-6 lg:px-12 flex items-center justify-between bg-background">
      {/* Logo */}
      <div className="flex items-center gap-2">
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
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8">
        {navLinks.map((link) => (
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
        <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
          <div className="flex flex-col h-full">
            {/* Header */}
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

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
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

            {/* CTA Button */}
            <div className="p-6 border-t border-border">
              <SheetClose asChild>
                <Link
                  to="/#contact"
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
