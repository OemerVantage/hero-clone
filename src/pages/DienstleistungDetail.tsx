import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  companyContact,
  getServiceBySlug,
  getServicesByCategory,
  serviceCategories,
} from "@/data/services";
import NotFound from "@/pages/NotFound";

const DienstleistungDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <NotFound />;

  const related = getServicesByCategory(service.category)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="px-4 md:px-6 pb-6">
        <div className="relative w-full min-h-[420px] md:min-h-[520px] rounded-2xl md:rounded-3xl overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0,0,0,0.2) 100%)",
            }}
          />

          <div className="relative h-full flex flex-col justify-end p-8 md:p-12 lg:p-16 min-h-[420px] md:min-h-[520px]">
            <Link
              to="/dienstleistungen"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white mb-6 w-fit"
            >
              <ArrowLeft className="w-4 h-4" />
              Alle Dienstleistungen
            </Link>

            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs md:text-sm font-medium text-white mb-5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {serviceCategories[service.category].label}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.05] max-w-3xl">
              {service.title}
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mt-5 max-w-2xl font-light">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Description */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center px-4 py-1.5 bg-secondary border border-border rounded-full text-xs md:text-sm font-medium uppercase tracking-wider text-foreground mb-5">
              Über diese Leistung
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground leading-tight mb-6">
              Was wir für Sie tun.
            </h2>
            <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed mb-8">
              {service.description}
            </p>

            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium text-sm md:text-base hover:opacity-90 transition-opacity w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              Unverbindlich anfragen
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Features */}
          <div className="lg:col-span-5">
            <div className="bg-secondary/40 border border-border rounded-2xl md:rounded-3xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-5">
                Im Leistungsumfang
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-foreground text-background mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-sm md:text-base text-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DAS IST INKLUSIVE — 6 individuelle Karten */}
      <section className="bg-secondary/40 py-16 md:py-20 lg:py-24">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center px-4 py-1.5 bg-background border border-border rounded-full text-xs md:text-sm font-medium uppercase tracking-wider text-foreground mb-5">
              Leistungsumfang
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase tracking-tight text-foreground">
              Das ist inklusive
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {service.inclusiveItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 bg-background border border-border/60 rounded-full pl-5 pr-6 py-4 md:py-5 hover:border-foreground/30 transition-colors"
              >
                <span className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-xs font-semibold text-muted-foreground tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm md:text-base text-foreground leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IHR ANSPRECHPARTNER */}
      <section className="bg-background py-16 md:py-20 lg:py-24">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <span className="inline-flex items-center px-4 py-1.5 bg-secondary border border-border rounded-full text-xs md:text-sm font-medium uppercase tracking-wider text-foreground mb-5">
                Persönliche Beratung
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase tracking-tight text-foreground leading-tight mb-6">
                Ihr Ansprechpartner
              </h2>
              <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed mb-8 max-w-xl">
                {service.contactIntro}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={companyContact.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background rounded-full font-medium text-sm md:text-base hover:opacity-90 transition-opacity"
                >
                  <Phone className="w-4 h-4" />
                  Jetzt anrufen
                </a>
                <a
                  href={companyContact.emailHref}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-secondary border border-border text-foreground rounded-full font-medium text-sm md:text-base hover:bg-secondary/70 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  E-Mail schreiben
                </a>
              </div>
            </div>

            {/* Right — Contact Card */}
            <div className="lg:justify-self-end w-full max-w-md">
              <div className="bg-secondary/50 border border-border rounded-3xl p-8 md:p-10 text-center">
                <div className="w-32 h-32 md:w-36 md:h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-background shadow-md">
                  <img
                    src={companyContact.image}
                    alt={companyContact.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1">
                  {companyContact.name}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-6">
                  {companyContact.position}
                </p>
                <div className="space-y-2 pt-6 border-t border-border">
                  <a
                    href={companyContact.phoneHref}
                    className="flex items-center justify-center gap-2 text-sm md:text-base text-foreground hover:opacity-70"
                  >
                    <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                    {companyContact.phone}
                  </a>
                  <a
                    href={companyContact.emailHref}
                    className="flex items-center justify-center gap-2 text-sm md:text-base text-foreground hover:opacity-70"
                  >
                    <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                    {companyContact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-secondary/30 py-16 md:py-20 lg:py-24">
          <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
                Weitere Leistungen in dieser Kategorie
              </h2>
              <Link
                to="/dienstleistungen"
                className="text-sm md:text-base font-medium text-foreground hover:opacity-70 inline-flex items-center gap-1"
              >
                Alle Dienstleistungen
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  to={`/dienstleistungen/${s.slug}`}
                  className="group flex flex-col bg-background rounded-2xl overflow-hidden border border-border/60 hover:border-border transition-all hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-1.5 flex items-center gap-2">
                      {s.title}
                      <ArrowUpRight className="w-4 h-4 -translate-y-0.5 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-sm font-light text-muted-foreground leading-relaxed line-clamp-2">
                      {s.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default DienstleistungDetail;
