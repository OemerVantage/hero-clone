import { ArrowUpRight } from "lucide-react";

const Header = () => {
  const navLinks = ["Home", "Dienstleistungen", "Über uns", "Referenzen", "Kontakt"];

  return (
    <header className="w-full py-5 px-6 md:px-12 flex items-center justify-between bg-background">
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

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a key={link} href="#" className="nav-link">
            {link}
          </a>
        ))}
      </nav>

      {/* Contact Button */}
      <button className="btn-contact">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span>Jetzt anfragen</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </header>
  );
};

export default Header;
