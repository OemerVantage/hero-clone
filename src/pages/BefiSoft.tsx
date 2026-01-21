import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { FadeIn, StaggerChildren } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  Clock,
  Bell,
  Ruler,
  ClipboardCheck,
  Camera,
  PenTool,
  Zap,
  Eye,
  Award,
  Lightbulb,
  ArrowRight,
  Monitor,
  Smartphone,
} from "lucide-react";

const planningFeatures = [
  {
    icon: Calendar,
    title: "Einsatzplanung",
    description: "Intelligente Planung und Zuweisung von Aufträgen an Mitarbeiter mit optimierten Routen.",
  },
  {
    icon: Users,
    title: "Mitarbeiterzuweisung",
    description: "Übersichtliche Verwaltung von Teams und deren Verfügbarkeit in Echtzeit.",
  },
  {
    icon: Clock,
    title: "Zeiterfassung",
    description: "Präzise Arbeitszeiterfassung mit digitalen Arbeitsnachweisen.",
  },
  {
    icon: Bell,
    title: "Benachrichtigungen",
    description: "Automatische Alerts bei Änderungen, Terminen und wichtigen Updates.",
  },
];

const qmFeatures = [
  {
    icon: Ruler,
    title: "QM-Erfassung",
    description: "Exakte Quadratmeter-Erfassung pro Objekt für präzise Kalkulation.",
  },
  {
    icon: ClipboardCheck,
    title: "Qualitätsprotokolle",
    description: "Digitale Checklisten und Protokolle für lückenlose Qualitätssicherung.",
  },
  {
    icon: Camera,
    title: "Fotodokumentation",
    description: "Bildbasierte Dokumentation von Zuständen vor und nach der Ausführung.",
  },
  {
    icon: PenTool,
    title: "Digitale Unterschriften",
    description: "Rechtssichere digitale Signaturen für Abnahmen und Bestätigungen.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Effizienz",
    description: "Weniger Papierkram und deutlich schnellere Prozesse durch digitale Workflows.",
  },
  {
    icon: Eye,
    title: "Transparenz",
    description: "Echtzeit-Überblick für Kunden und Management über alle laufenden Aufträge.",
  },
  {
    icon: Award,
    title: "Qualität",
    description: "Lückenlose Dokumentation gewährleistet höchste Servicequalität.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Stetige Weiterentwicklung basierend auf Praxiserfahrung und Kundenfeedback.",
  },
];

const SoftwareMockup = ({ variant }: { variant: "desktop" | "mobile" }) => {
  if (variant === "mobile") {
    return (
      <div className="relative mx-auto w-[280px] h-[560px] bg-foreground rounded-[40px] p-3 shadow-2xl">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full z-10" />
        <div className="w-full h-full bg-background rounded-[32px] overflow-hidden">
          {/* Status Bar */}
          <div className="h-12 bg-secondary flex items-center justify-between px-6">
            <span className="text-xs text-muted-foreground">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
              <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
            </div>
          </div>
          {/* Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-accent font-bold text-sm">BF</span>
              </div>
              <div>
                <div className="h-3 w-24 bg-foreground/80 rounded" />
                <div className="h-2 w-16 bg-muted-foreground/30 rounded mt-1" />
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="p-4 space-y-3">
            <div className="bg-secondary rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-accent/20 rounded-lg" />
                <div className="h-3 w-20 bg-foreground/60 rounded" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-muted-foreground/20 rounded" />
                <div className="h-2 w-3/4 bg-muted-foreground/20 rounded" />
              </div>
            </div>
            <div className="bg-secondary rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg" />
                <div className="h-3 w-24 bg-foreground/60 rounded" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-muted-foreground/20 rounded" />
                <div className="h-2 w-2/3 bg-muted-foreground/20 rounded" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-accent/10 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-accent">24</div>
                <div className="text-xs text-muted-foreground">Aufträge</div>
              </div>
              <div className="bg-primary/10 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-xs text-muted-foreground">Qualität</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-foreground rounded-xl p-2 shadow-2xl">
      {/* Browser Chrome */}
      <div className="bg-secondary rounded-t-lg px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-background rounded-md px-4 py-1.5 text-xs text-muted-foreground flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent/50" />
            app.befisoft.ch
          </div>
        </div>
      </div>
      {/* Dashboard Content */}
      <div className="bg-background rounded-b-lg p-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
              <span className="text-accent font-bold">BF</span>
            </div>
            <div>
              <div className="h-4 w-32 bg-foreground/80 rounded" />
              <div className="h-2 w-20 bg-muted-foreground/30 rounded mt-1" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-secondary rounded-lg" />
            <div className="w-8 h-8 bg-secondary rounded-lg" />
            <div className="w-8 h-8 bg-accent rounded-lg" />
          </div>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: "Aktive Aufträge", value: "127", color: "accent" },
            { label: "Heute erledigt", value: "43", color: "primary" },
            { label: "QM-Prüfungen", value: "98%", color: "accent" },
            { label: "Team Online", value: "24", color: "primary" },
          ].map((stat, i) => (
            <div key={i} className="bg-secondary rounded-xl p-4">
              <div className={`text-2xl font-bold ${stat.color === "accent" ? "text-accent" : "text-primary"}`}>
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* Content Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-secondary rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="h-4 w-32 bg-foreground/60 rounded" />
              <div className="h-6 w-20 bg-accent/20 rounded-full" />
            </div>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg" />
                  <div className="flex-1">
                    <div className="h-3 w-40 bg-foreground/50 rounded" />
                    <div className="h-2 w-24 bg-muted-foreground/30 rounded mt-1" />
                  </div>
                  <div className="h-6 w-16 bg-accent/20 rounded-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-secondary rounded-xl p-4">
            <div className="h-4 w-24 bg-foreground/60 rounded mb-4" />
            <div className="space-y-2">
              {[85, 72, 95, 60].map((width, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Task {i + 1}</span>
                    <span>{width}%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BefiSoft = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent)) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, hsl(var(--primary)) 0%, transparent 50%)`,
          }} />
        </div>
        <div className="relative z-10 section-container text-center">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Technologie
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4">
              BEFI SOFT
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto">
              Unsere hauseigene Software für effiziente Facility Services
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="aspect-[4/3] bg-secondary rounded-[32px] overflow-hidden flex items-center justify-center p-8">
                  <div className="flex items-center gap-4">
                    <Monitor className="w-16 h-16 text-accent" />
                    <Smartphone className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Swiss Made</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <span className="inline-block px-4 py-1.5 bg-secondary text-foreground rounded-full text-sm font-medium mb-6">
                Über BeFi Soft
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Entwickelt aus der Praxis, für die Praxis
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                BeFi Soft ist unsere massgeschneiderte Softwarelösung, die wir speziell für die 
                Anforderungen im Facility Management entwickelt haben. Geboren aus jahrelanger 
                Erfahrung im Tagesgeschäft, optimiert sie jeden Aspekt unserer Arbeit.
              </p>
              <p className="text-muted-foreground mb-8">
                Von der Auftragsplanung über die Ausführung bis zur Qualitätssicherung – 
                BeFi Soft ermöglicht uns, höchste Standards effizient einzuhalten und 
                unseren Kunden maximale Transparenz zu bieten.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">1000+</div>
                  <div className="text-sm text-muted-foreground">Objekte erfasst</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">Aktive Nutzer</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">5+</div>
                  <div className="text-sm text-muted-foreground">Jahre Entwicklung</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Planning Features */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <FadeIn>
                <span className="inline-block px-4 py-1.5 bg-background text-foreground rounded-full text-sm font-medium mb-6">
                  Auftragsplanung & Ausführung
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Intelligente Einsatzplanung
                </h2>
              </FadeIn>
              <StaggerChildren className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
                {planningFeatures.map((feature) => (
                  <Card key={feature.title} className="bg-background border-0">
                    <CardContent className="p-5">
                      <feature.icon className="w-8 h-8 text-accent mb-3" />
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </StaggerChildren>
            </div>
            <FadeIn direction="right" className="order-1 lg:order-2">
              <SoftwareMockup variant="desktop" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* QM Features */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
              <SoftwareMockup variant="mobile" />
            </FadeIn>
            <div>
              <FadeIn>
                <span className="inline-block px-4 py-1.5 bg-secondary text-foreground rounded-full text-sm font-medium mb-6">
                  QM-Erfassung & Dokumentation
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Lückenlose Qualitätssicherung
                </h2>
              </FadeIn>
              <StaggerChildren className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
                {qmFeatures.map((feature) => (
                  <Card key={feature.title} className="bg-secondary border-0">
                    <CardContent className="p-5">
                      <feature.icon className="w-8 h-8 text-accent mb-3" />
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="section-container">
          <FadeIn className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-background text-foreground rounded-full text-sm font-medium mb-6">
              Ihre Vorteile
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Warum BeFi Soft?
            </h2>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="bg-background border-0 text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="section-container text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interessiert an unserer digitalen Arbeitsweise?
            </h2>
            <p className="text-background/70 text-lg max-w-2xl mx-auto mb-8">
              Erfahren Sie mehr darüber, wie BeFi Soft unsere Dienstleistungen 
              effizienter und transparenter macht.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link to="/kontakt">
                Kontakt aufnehmen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default BefiSoft;
