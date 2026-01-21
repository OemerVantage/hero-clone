import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { ArrowUpRight, MapPin, Clock, Briefcase, Wallet, GraduationCap, Users, Shield, Check, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: <Wallet className="w-6 h-6 text-foreground" />,
    title: "Faire Entlohnung",
    description: "Leistungsgerechte Bezahlung und attraktive Sozialleistungen."
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-foreground" />,
    title: "Weiterbildung",
    description: "Regelmässige Schulungen und Unterstützung bei beruflichen Qualifikationen."
  },
  {
    icon: <Users className="w-6 h-6 text-foreground" />,
    title: "Starker Teamgeist",
    description: "Ein kollegiales Umfeld und eine unterstützende Atmosphäre."
  },
  {
    icon: <Shield className="w-6 h-6 text-foreground" />,
    title: "Sicherer Arbeitsplatz",
    description: "Langfristige Perspektiven und Krisensicherheit."
  }
];

const culturePoints = [
  "Wertschätzung & Respekt",
  "Qualitätsanspruch",
  "Teamgeist & Zusammenhalt",
  "Entwicklungsmöglichkeiten"
];

const jobOpenings = [
  {
    id: 1,
    title: "Hauswart / Allrounder (m/w/d)",
    location: "Zürich & Umgebung",
    workload: "100%",
    type: "Unbefristet",
    region: "zurich"
  },
  {
    id: 2,
    title: "Reinigungskraft Gewerbe (m/w/d)",
    location: "Winterthur",
    workload: "40-60% (Abends)",
    type: "Unbefristet",
    region: "zurich"
  },
  {
    id: 3,
    title: "Objektleiter/in Reinigung (m/w/d)",
    location: "Bern City",
    workload: "80-100%",
    type: "Unbefristet",
    region: "bern"
  },
  {
    id: 4,
    title: "Gartenpflege-Mitarbeiter/in (m/w/d)",
    location: "Basel Region",
    workload: "100%",
    type: "Saisonal",
    region: "basel"
  }
];

const regions = [
  { id: "alle", label: "Alle Regionen" },
  { id: "zurich", label: "Zürich" },
  { id: "bern", label: "Bern" },
  { id: "basel", label: "Basel" }
];

const Karriere = () => {
  const { toast } = useToast();
  const [selectedRegion, setSelectedRegion] = useState("alle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const [fileName, setFileName] = useState<string | null>(null);

  const filteredJobs = selectedRegion === "alle" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.region === selectedRegion);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bewerbung eingegangen",
      description: "Vielen Dank für Ihre Bewerbung. Wir melden uns in Kürze bei Ihnen.",
    });
    setFormData({ firstName: "", lastName: "", email: "", phone: "" });
    setFileName(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="px-4 md:px-6 pb-6">
        <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
            alt="BeFi Karriere"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.25) 50%, transparent 100%)",
            }}
          />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="max-w-xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight mb-3 md:mb-4">
                IHRE KARRIERE BEI BEFI
              </h1>

              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-md">
                Werden Sie Teil eines engagierten Teams und gestalten Sie mit uns 
                die Zukunft der Facility Services in der Schweiz.
              </p>

              <a href="#stellen" className="btn-explore w-fit text-sm md:text-base">
                <span>Offene Stellen ansehen</span>
                <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Image */}
            <FadeIn direction="right" className="w-full lg:w-[45%]">
              <div className="rounded-[24px] md:rounded-[32px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="BeFi Team Kultur"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </FadeIn>

            {/* Text Content */}
            <FadeIn direction="left" className="w-full lg:w-[55%]">
              <div className="inline-flex items-center px-4 md:px-6 py-2 bg-secondary border border-border rounded-full text-base md:text-lg font-light mb-4 md:mb-6">
                Unsere Kultur
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                WAS UNS AUSZEICHNET
              </h2>

              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 md:mb-8">
                Bei BeFi sind wir mehr als nur Kollegen – wir sind ein Team, das gemeinsam 
                für höchste Qualität steht. Respekt, Vertrauen und gegenseitige Unterstützung 
                prägen unseren Arbeitsalltag.
              </p>

              {/* Culture Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {culturePoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-secondary">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
            {/* Two-Column Header */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
              <div className="lg:w-2/5">
                <div className="inline-flex items-center px-4 md:px-6 py-2 bg-background border border-border rounded-full text-base md:text-lg font-light mb-4 md:mb-6">
                  Ihre Vorteile
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight leading-tight text-foreground">
                  WARUM BEFI?
                </h2>
              </div>
              <div className="lg:w-3/5 flex items-end">
                <p className="text-base md:text-lg font-light text-foreground leading-relaxed">
                  Als Arbeitgeber bieten wir Ihnen nicht nur einen Job, sondern 
                  echte Perspektiven und ein Umfeld, in dem Sie sich wohlfühlen werden.
                </p>
              </div>
            </div>
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            staggerDelay={0.1}
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-background rounded-[24px] md:rounded-[32px] p-6 md:p-8"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary rounded-full flex items-center justify-center mb-4 md:mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-foreground font-light text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="stellen" className="py-12 md:py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn direction="up">
            {/* Two-Column Header */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
              <div className="lg:w-2/5">
                <div className="inline-flex items-center px-4 md:px-6 py-2 bg-secondary border border-border rounded-full text-base md:text-lg font-light mb-4 md:mb-6">
                  Offene Stellen
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight leading-tight text-foreground">
                  AKTUELLE STELLENANGEBOTE
                </h2>
              </div>
              <div className="lg:w-3/5 flex items-end">
                <p className="text-base md:text-lg font-light text-foreground leading-relaxed">
                  Entdecken Sie unsere aktuellen Stellenangebote und finden Sie 
                  Ihre neue berufliche Herausforderung bei BeFi.
                </p>
              </div>
            </div>

            {/* Region Filter */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                    selectedRegion === region.id
                      ? "bg-foreground text-background"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {region.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Job Cards */}
          <StaggerChildren className="flex flex-col gap-4" staggerDelay={0.1}>
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-background border border-border rounded-[20px] md:rounded-[24px] p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 md:gap-4 text-sm text-foreground/70">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {job.workload}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors whitespace-nowrap"
                >
                  Details & Bewerben
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </StaggerChildren>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/60">Keine Stellen in dieser Region gefunden.</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-secondary">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
            {/* Left Content */}
            <FadeIn direction="right" className="w-full lg:w-2/5">
              <div className="inline-flex items-center px-4 md:px-6 py-2 bg-background border border-border rounded-full text-base md:text-lg font-light mb-4 md:mb-6">
                Initiativbewerbung
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                SPONTANBEWERBUNG
              </h2>

              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 md:mb-8">
                Keine passende Stelle gefunden? Bewerben Sie sich initiativ – wir freuen uns 
                über motivierte Talente und melden uns, sobald eine passende Position frei wird.
              </p>

              {/* HR Contact */}
              <div className="bg-background rounded-[20px] p-5 md:p-6 flex items-center gap-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" 
                    alt="HR Kontakt"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Ihr HR Kontakt</p>
                  <p className="font-semibold text-foreground">Sarah Müller</p>
                  <p className="text-sm text-foreground/70">jobs@befi-fs.ch</p>
                </div>
              </div>
            </FadeIn>

            {/* Right Form */}
            <FadeIn direction="left" className="w-full lg:w-3/5">
              <form onSubmit={handleSubmit} className="bg-background rounded-[24px] md:rounded-[32px] p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <Input
                    name="firstName"
                    placeholder="Vorname"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="h-12 rounded-xl border-border"
                    required
                  />
                  <Input
                    name="lastName"
                    placeholder="Nachname"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="h-12 rounded-xl border-border"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <Input
                    name="email"
                    type="email"
                    placeholder="E-Mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 rounded-xl border-border"
                    required
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Telefon"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12 rounded-xl border-border"
                  />
                </div>

                {/* File Upload */}
                <label className="block border-2 border-dashed border-border rounded-xl p-6 md:p-8 text-center cursor-pointer hover:border-foreground/30 transition-colors mb-6">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Upload className="w-8 h-8 mx-auto mb-2 text-foreground/50" />
                  {fileName ? (
                    <p className="text-sm text-foreground font-medium">{fileName}</p>
                  ) : (
                    <>
                      <p className="text-sm text-foreground/70">
                        Klicken zum Hochladen oder Datei hierher ziehen
                      </p>
                      <p className="text-xs text-foreground/50 mt-1">PDF, max. 10MB</p>
                    </>
                  )}
                </label>

                <Button type="submit" className="w-full h-12 rounded-full text-base font-medium">
                  Bewerbung absenden
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Karriere;
