import { ArrowUpRight } from "lucide-react";

const Header = () => {
  const navLinks = ["Home", "Services", "Properties", "About", "Agents"];

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
          <path
            d="M4 24L10 8L16 20L22 8L28 24"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 24H25"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-lg font-semibold tracking-tight">VISTAHAVEN</span>
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
        <span>Contact Us Now</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </header>
  );
};

export default Header;
