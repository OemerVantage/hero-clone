import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              {/* Logo SVG */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="8" className="fill-background" />
                <path
                  d="M10 12h8c3.5 0 6 2 6 5s-2.5 5-6 5h-8v-10z"
                  className="fill-foreground"
                />
                <path d="M10 22h8l6 8h-6l-4-4-4 4h-6l6-8z" className="fill-foreground" />
              </svg>
              <span className="text-lg font-semibold text-background">BEFI</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Ihr Partner für professionelles Facility Management in der Region Winterthur. 
              Qualität, Zuverlässigkeit und Kundenzufriedenheit seit über 15 Jahren.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide text-sm text-background">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link 
                to="/" 
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Home
              </Link>
              <Link 
                to="/dienstleistungen" 
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Dienstleistungen
              </Link>
              <Link 
                to="/ueber-uns" 
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Über uns
              </Link>
              <Link 
                to="/karriere" 
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Karriere
              </Link>
              <Link 
                to="/referenzen" 
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Referenzen
              </Link>
              <Link 
                to="/kontakt" 
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Dienstleistungen */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide text-sm text-background">
              Dienstleistungen
            </h4>
            <nav className="flex flex-col gap-3">
              <Link 
                to="/dienstleistungen" 
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Reinigung & Unterhalt
              </Link>
              <Link 
                to="/dienstleistungen" 
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Hauswartung & Technik
              </Link>
              <Link 
                to="/dienstleistungen" 
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Garten & Aussenanlagen
              </Link>
            </nav>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide text-sm text-background">
              Kontakt
            </h4>
            <address className="not-italic text-background/70 text-sm space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-background/70" />
                <span>
                  Franz-Burckhardt-Strasse 1
                  <br />
                  8404 Winterthur
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-background/70" />
                <a 
                  href="tel:+41525366984" 
                  className="hover:text-background transition-colors"
                >
                  +41 52 536 69 84
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-background/70" />
                <a 
                  href="mailto:info@befi-fs.ch" 
                  className="hover:text-background transition-colors"
                >
                  info@befi-fs.ch
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-background/20 mt-10 md:mt-12 pt-6 md:pt-8">
          <p className="text-background/50 text-sm text-center">
            © {new Date().getFullYear()} BeFi Facility Services AG. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
