// BeFi v2 — content (German / Swiss High German), ported from the design handoff
// (ui_kits/website/data.jsx → window.BEFI) into a typed module.
// Images resolve from /public/images (already present in this repo).
import type { IconName } from "@/v2/lib/icons";

const IMG = "/images/";

export type ServiceCategory = "hauswartung" | "reinigung";

export interface ContactInfo {
  name: string;
  role: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  address: string;
  image: string;
}

export interface HeroStat {
  value: string;
  suffix: string;
  label: string;
}

export interface ValueProp {
  icon: IconName;
  title: string;
  description: string;
  highlight: string;
}

export interface ServiceTeaser {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface CategoryMeta {
  label: string;
  short: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  short: string;
  description: string;
  image: string;
  features: string[];
  inclusive: string[];
}

export interface ProcessStep {
  icon: IconName;
  title: string;
  description: string;
  duration: string;
}

export interface Guarantee {
  icon: IconName;
  value: string;
  label: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  group: string;
  /** Personenfoto – wird später pro Eintrag ergänzt. */
  image?: string;
}

export interface Job {
  title: string;
  type: string;
  location: string;
  description: string;
}

export interface IconCard {
  icon: IconName;
  title: string;
  description: string;
}

export interface ReferenceProject {
  title: string;
  scope: string;
  services: string[];
  image: string;
}

export interface BefiSoft {
  tagline: string;
  intro: string;
  features: IconCard[];
}

export const contact: ContactInfo = {
  name: "Fisnik Dauti",
  role: "Geschäftsführer",
  phone: "+41 52 536 69 84",
  phoneHref: "tel:+41525366984",
  email: "info@befi-fs.ch",
  emailHref: "mailto:info@befi-fs.ch",
  address: "Franz-Burckhardt-Strasse 1, 8404 Winterthur",
  image: IMG + "team-anerkennung.jpg",
};

export const heroStats: HeroStat[] = [
  { value: "15", suffix: "+", label: "Jahre Erfahrung" },
  { value: "500", suffix: "+", label: "Zufriedene Kunden" },
  { value: "1'000", suffix: "+", label: "Betreute Objekte" },
];

/** Key figures shown in „Über uns“ (Home) and on Referenzen. */
export const companyStats: HeroStat[] = [
  ...heroStats,
  { value: "98", suffix: "%", label: "Kundenzufriedenheit" },
];

export const values: ValueProp[] = [
  { icon: "Handshake", title: "Alles aus einer Hand", description: "Reinigung, Hauswartung und Garten – ein Vertrag, ein Ansprechpartner, ein Qualitätsstandard.", highlight: "1 Partner" },
  { icon: "MapPin", title: "Regional verwurzelt", description: "Aus Winterthur für die Region – schnelle Reaktionszeiten, persönliche Betreuung, keine Konzernstrukturen.", highlight: "Winterthur" },
  { icon: "ShieldCheck", title: "Geprüfte Qualität", description: "Strukturierte Qualitätskontrollen, geschultes Personal und dokumentierte Abläufe nach Schweizer Standard.", highlight: "Swiss made" },
  { icon: "Clock", title: "Verlässlich seit 2011", description: "Über 500 Kunden vertrauen uns mit 1'000 Objekten – von KMU über Verwaltung bis Eigentümer.", highlight: "15+ Jahre" },
];

// Home 3-up teaser
export const services: ServiceTeaser[] = [
  { id: "01", title: "Reinigung & Unterhalt", description: "Professionelle Reinigungsarbeiten für Wohnungen, Büros und Industrieräume. Von der Unterhaltsreinigung bis zur Spezialreinigung – wir sorgen für makellose Sauberkeit.", image: IMG + "treppenreinigung.jpg", features: ["Unterhaltsreinigung", "Spezialreinigung", "Bauendreinigung"] },
  { id: "02", title: "Hauswartung & Technik", description: "Laufende Betreuung und Pflege von Immobilien – technisch und organisatorisch. Wir sorgen für Funktionalität, Sicherheit und Werterhalt Ihrer Liegenschaft.", image: IMG + "hauswartung-technik.jpg", features: ["Technische Wartung", "Hauswartdienste", "Winterdienst"] },
  // Platzhalter (placeholder.svg) – echtes Garten-Foto folgt später.
  { id: "03", title: "Garten & Aussenanlagen", description: "Gartenpflege und Grünflächenbetreuung für gepflegte und einladende Aussenbereiche. Das ganze Jahr über kümmern wir uns um Ihre Grünanlagen.", image: IMG + "placeholder.svg", features: ["Gartenpflege", "Grünflächen", "Pflanzenpflege"] },
];

export const categories: Record<ServiceCategory, CategoryMeta> = {
  hauswartung: { label: "Hauswartung & Technischer Service", short: "Hauswartung", description: "Laufende technische und organisatorische Betreuung Ihrer Liegenschaft – damit Funktionalität, Sicherheit und Werterhalt jederzeit gewährleistet sind." },
  reinigung: { label: "Reinigung & Unterhaltsreinigung", short: "Reinigung", description: "Vom täglichen Unterhalt bis zur anspruchsvollen Spezialreinigung – diskret, gründlich und nach individuell vereinbartem Plan." },
};

export const allServices: Service[] = [
  { slug: "technischer-dienst", title: "Technischer Dienst", category: "hauswartung", short: "Wartung und Instandhaltung technischer Anlagen Ihrer Liegenschaft.", description: "Wir übernehmen die technische Betreuung Ihrer Immobilie – von der regelmässigen Kontrolle bis zur Reparatur. Heizung, Lüftung, Sanitär und Elektrik bleiben in einwandfreiem Zustand, damit Sie sich um nichts kümmern müssen.", image: IMG + "hauswartung-technik.jpg", features: ["Heizungswartung", "Sanitäranlagen", "Elektrokontrollen", "Lüftungstechnik", "24h Notfalldienst"], inclusive: ["Wartung von Heizungs- und Lüftungsanlagen", "Kontrolle und Pflege der Sanitärinstallationen", "Elektro-Sicherheitskontrollen nach NIV", "Koordination und Begleitung von Fremdfirmen", "Dokumentation aller Wartungsarbeiten", "24h Notfallbereitschaft bei Störungen"] },
  { slug: "winterdienst", title: "Winterdienst", category: "hauswartung", short: "Schneeräumung und Eisbekämpfung für sichere Zugänge und Wege.", description: "Sobald der erste Schnee fällt, sind wir vor Ort. Unser Winterdienst sorgt für sichere Eingänge, Parkplätze und Wege – professionell, zuverlässig und auch nachts im Einsatz, damit Ihre Liegenschaft jederzeit zugänglich bleibt.", image: IMG + "hauswartung-heizung.jpg", features: ["Schneeräumung", "Salz- und Splittstreuung", "24/7 Pikettdienst", "Vertragsservice"], inclusive: ["Schneeräumung von Eingängen und Gehwegen", "Räumung von Parkplätzen und Zufahrten", "Salz- und Splittstreuung gegen Glatteis", "Pikettdienst auch nachts und an Feiertagen", "Einsatzdokumentation pro Räumung", "Saisonvertrag mit fixen Konditionen"] },
  { slug: "gartenunterhalt", title: "Gartenunterhalt", category: "hauswartung", short: "Pflege von Grünflächen, Bäumen und Hecken – das ganze Jahr über.", description: "Vom Rasenmähen über Heckenschnitt bis zur Baumpflege – wir halten Ihre Aussenanlagen das ganze Jahr in Bestform. Unsere ausgebildeten Gärtner kennen die optimalen Zeitpunkte für jede Pflegemassnahme.", image: IMG + "placeholder.svg", features: ["Rasenpflege", "Heckenschnitt", "Baumpflege", "Bepflanzung", "Herbstlaubentfernung"], inclusive: ["Regelmässiges Rasenmähen und Vertikutieren", "Heckenschnitt nach Saison und Vorgabe", "Baumpflege und fachgerechter Rückschnitt", "Bepflanzung von Beeten und Rabatten", "Herbstlaubentfernung und Entsorgung", "Wässerung und Düngung nach Bedarf"] },
  { slug: "gebaeudeunterhalt", title: "Gebäudeunterhalt", category: "hauswartung", short: "Laufende Pflege und Wartung Ihrer Immobilie – innen wie aussen.", description: "Ihre Liegenschaft verdient kontinuierliche Aufmerksamkeit. Wir kümmern uns um kleine Reparaturen, Kontrollgänge, Materialbestellungen und alle organisatorischen Aufgaben rund um den Gebäudeunterhalt – damit der Wert Ihrer Immobilie erhalten bleibt.", image: IMG + "fassade-hgc.jpg", features: ["Kontrollgänge", "Kleinreparaturen", "Mängelmanagement", "Hausordnung", "Materialverwaltung"], inclusive: ["Regelmässige Kontrollgänge in der Liegenschaft", "Ausführung von Kleinreparaturen", "Erfassung und Nachverfolgung von Mängeln", "Durchsetzung der Hausordnung", "Material- und Lagerverwaltung", "Ansprechpartner für Mieter und Eigentümer"] },
  { slug: "gewerbereinigung", title: "Gewerbereinigung", category: "reinigung", short: "Professionelle Reinigung für Büros, Praxen und Gewerbeflächen.", description: "Saubere Arbeitsplätze steigern Produktivität und hinterlassen einen positiven Eindruck bei Kunden. Wir reinigen Ihre Geschäftsräume diskret und ausserhalb Ihrer Geschäftszeiten – nach individuell vereinbartem Plan.", image: IMG + "gewerbe-reinigung.jpg", features: ["Büroreinigung", "Praxisreinigung", "Industriereinigung", "Verkaufsflächen", "Sanitärbereiche"], inclusive: ["Büro- und Arbeitsplatzreinigung", "Sanitäranlagen und Küchenbereiche", "Boden-, Oberflächen- und Staubwischen", "Abfallentsorgung und Recycling", "Empfangs- und Konferenzräume", "Individuelle Reinigungspläne nach Bedarf"] },
  { slug: "treppenhausreinigung", title: "Treppenhausreinigung", category: "reinigung", short: "Regelmässige Reinigung gemeinschaftlicher Bereiche in Wohnliegenschaften.", description: "Ein gepflegtes Treppenhaus ist die Visitenkarte jeder Wohnliegenschaft. Wir reinigen Treppen, Lift, Eingangsbereich und Briefkastenanlage in vereinbartem Rhythmus – diskret und gründlich.", image: IMG + "treppenreinigung.jpg", features: ["Wöchentliche Reinigung", "Eingangsbereich", "Liftanlage", "Geländerpflege"], inclusive: ["Treppenstufen und Podeste feucht reinigen", "Geländer und Handläufe desinfizieren", "Lift innen und Tasten reinigen", "Eingangsbereich und Briefkastenanlage", "Spinnweben und Staub entfernen", "Fenster und Glasflächen im Treppenhaus"] },
  { slug: "fensterreinigung", title: "Fensterreinigung", category: "reinigung", short: "Streifenfreie Reinigung innen und aussen, in jeder Höhe.", description: "Klare Sicht und mehr Tageslicht: Unsere Fensterreinigung umfasst Scheiben, Rahmen und Fensterbänke – innen wie aussen. Auch in grosser Höhe arbeiten wir sicher und professionell.", image: IMG + "fenster-innen.jpg", features: ["Innen & Aussen", "Rahmen & Fensterbänke", "Hochreinigung", "Storenreinigung"], inclusive: ["Streifenfreie Reinigung der Glasflächen", "Reinigung von Fensterrahmen und Fensterbänken", "Storen, Lamellen und Rollläden", "Hochreinigung bis 14m mit Teleskopstange", "Reinigung mit reinem Osmosewasser", "Glasdächer und Wintergärten"] },
  { slug: "spezialreinigung", title: "Spezialreinigung", category: "reinigung", short: "Anspruchsvolle Reinigungsaufgaben mit Profi-Geräten und Erfahrung.", description: "Wo Standardreinigung nicht ausreicht, kommen wir ins Spiel. Brand- und Wasserschäden, Graffiti-Entfernung, Teppich-Tiefenreinigung oder hygienische Spezialfälle – wir haben die richtige Methode für jede Herausforderung.", image: IMG + "spezialreinigung-wc.jpg", features: ["Brand- & Wasserschäden", "Graffiti-Entfernung", "Teppich-Tiefenreinigung", "Desinfektion"], inclusive: ["Brand- und Russschadensanierung", "Wasserschaden-Trocknung und -Reinigung", "Graffiti- und Tag-Entfernung", "Teppich- und Polster-Tiefenreinigung", "Hygienische Desinfektion nach Standard", "Geruchsneutralisation mit Ozonbehandlung"] },
  { slug: "umzugsreinigung", title: "Umzugsreinigung", category: "reinigung", short: "Wohnungsabnahme-Reinigung mit Garantie – stressfrei umziehen.", description: "Damit Ihre Wohnungsübergabe reibungslos verläuft, übernehmen wir die komplette Endreinigung. Wir reinigen jede Ecke gemäss Übergabeprotokoll – mit Abnahmegarantie. So sparen Sie Zeit und Nerven beim Umzug.", image: IMG + "kueche-reinigung.jpg", features: ["Abnahmegarantie", "Küche & Bad", "Backofen & Cerankochfeld", "Fenster & Storen"], inclusive: ["Komplette Wohnungsreinigung gemäss Übergabeprotokoll", "Küche inkl. Backofen, Steamer und Kühlschrank", "Badezimmer inkl. Entkalkung und Fugen", "Fenster, Storen und Fensterbänke", "Böden, Wände, Türen und Sockelleisten", "Abnahmegarantie – wir reinigen nach bis Übergabe ok"] },
  { slug: "baureinigung", title: "Baureinigung", category: "reinigung", short: "Grob-, Fein- und Endreinigung nach Bauarbeiten und Renovationen.", description: "Nach Bauabschluss räumen wir auf: Wir entfernen Baustaub, Mörtelreste und Kleberückstände – damit Ihr Objekt bezugsbereit übergeben werden kann. Vom Rohbau bis zur Endabnahme.", image: IMG + "fassade-hgc.jpg", features: ["Grobreinigung", "Bauendreinigung", "Bauschlussreinigung", "Glasreinigung nach Bau"], inclusive: ["Grobreinigung nach Bauabschluss", "Entfernung von Mörtel-, Putz- und Kleberückständen", "Bauendreinigung aller Oberflächen und Böden", "Glasreinigung inkl. Schutzfolien entfernen", "Sanitär- und Küchenanlagen bezugsbereit", "Bauschlussreinigung vor Abnahme"] },
  { slug: "fassadenreinigung", title: "Fassadenreinigung", category: "reinigung", short: "Schonende Reinigung von Fassaden, Putz, Klinker und Glas.", description: "Eine saubere Fassade wertet jedes Gebäude auf. Mit modernen Verfahren entfernen wir Algen, Schmutz und Verschmutzungen materialschonend – von Putz und Klinker bis zu Glas- und Metallfassaden.", image: IMG + "fassade-glas.jpg", features: ["Algenentfernung", "Hochdruckreinigung", "Glasfassaden", "Imprägnierung"], inclusive: ["Algen- und Moosentfernung von Putz und Klinker", "Schonende Hochdruck- und Niederdruckreinigung", "Reinigung von Glas- und Metallfassaden", "Behandlung gegen Wiederbefall (optional)", "Imprägnierung zur Werterhaltung", "Arbeiten mit Hebebühne oder Gerüst sicher und sauber"] },
  { slug: "dachrinnenreinigung", title: "Dachrinnenreinigung", category: "reinigung", short: "Reinigung von Dachrinnen und Fallrohren mit modernster SkyVac-Technik.", description: "Verstopfte Dachrinnen führen zu Wasserschäden. Mit dem SkyVac-System reinigen wir Ihre Dachrinnen vom Boden aus – ohne Gerüst, ohne Risiko und mit Videodokumentation für Ihre Sicherheit.", image: IMG + "dachrinne-skyvac.jpg", features: ["SkyVac-Hochleistungssauger", "Bis 14m Arbeitshöhe", "Kameradokumentation", "Ohne Gerüst"], inclusive: ["Reinigung mit SkyVac-Hochleistungssauger", "Reinigung bis 14m Höhe vom Boden aus", "Live-Kamerakontrolle während der Arbeit", "Videodokumentation als Nachweis", "Entfernung von Laub, Moos und Schlamm", "Funktionscheck der Fallrohre"] },
  { slug: "glasreinigung", title: "Glasreinigung", category: "reinigung", short: "Streifenfreie Reinigung von Glasflächen jeder Art und Grösse.", description: "Glas verdient besondere Pflege. Ob Schaufenster, Glasdach, Wintergarten oder Spiegel – wir reinigen alle Glasflächen streifenfrei und materialschonend, auch in schwer zugänglichen Bereichen.", image: IMG + "fenster-reinigung.jpg", features: ["Schaufenster", "Glasdächer", "Wintergärten", "Reines Osmosewasser"], inclusive: ["Schaufenster innen und aussen", "Glasdächer und Lichtbänder", "Wintergärten und Glasfassaden", "Spiegel und Glastüren", "Glasgeländer und Trennwände", "Reinigung mit reinem Osmosewasser"] },
  { slug: "homeservice", title: "Homeservice", category: "reinigung", short: "Regelmässige Haushaltsreinigung mit festen Bezugspersonen.", description: "Unser Homeservice bringt Profi-Qualität in Ihren privaten Haushalt. Sie erhalten dieselbe Reinigungskraft jede Woche – diskret, zuverlässig und massgeschneidert auf Ihre Wünsche.", image: IMG + "kueche-reinigung.jpg", features: ["Feste Bezugsperson", "Flexible Termine", "Wäscheservice", "Bügelservice"], inclusive: ["Wohnungsreinigung in vereinbartem Rhythmus", "Küche, Bad und Wohnräume", "Wäsche waschen und bügeln (optional)", "Fensterreinigung auf Wunsch", "Diskrete Schlüsselverwaltung", "Feste Bezugsperson jede Woche"] },
];

export const steps: ProcessStep[] = [
  { icon: "Phone", title: "Erstgespräch", description: "Sie schildern uns Ihre Situation. Wir hören zu, stellen die richtigen Fragen und vereinbaren einen unverbindlichen Termin vor Ort.", duration: "Schritt 1" },
  { icon: "ClipboardList", title: "Analyse & Offerte", description: "Bestandsaufnahme Ihrer Liegenschaft, transparente Festpreis-Offerte und ein konkreter Leistungsplan – schriftlich und nachvollziehbar.", duration: "Schritt 2" },
  { icon: "Rocket", title: "Strukturierter Start", description: "Sie erhalten ein festes Team, einen persönlichen Ansprechpartner und ein dokumentiertes Übergabeprotokoll. Klare Verantwortlichkeiten ab Tag eins.", duration: "Schritt 3" },
  { icon: "ShieldCheck", title: "Laufende Betreuung", description: "Regelmässige Qualitätskontrollen, dokumentierte Einsätze und kurze Wege bei Anpassungen. Sie bleiben informiert – ohne ständig nachfragen zu müssen.", duration: "Schritt 4" },
];

export const guarantees: Guarantee[] = [
  { icon: "Timer", value: "24h", label: "Reaktionszeit", description: "Rückmeldung auf Anfragen innerhalb eines Werktages." },
  { icon: "Lock", value: "100%", label: "Festpreis-Garantie", description: "Was wir offerieren, gilt – keine versteckten Kosten." },
  { icon: "Award", value: "CH", label: "Schweizer Standard", description: "Geschultes Personal, faire Löhne, dokumentierte Abläufe." },
];

export const testimonials: Testimonial[] = [
  { quote: "BeFi kümmert sich um unsere 12 Liegenschaften. Die Hauswartung ist einwandfrei und die Kommunikation vorbildlich. Wir sind sehr zufrieden.", name: "Thomas Müller", role: "Immobilienverwaltung" },
  { quote: "Die regelmässige Büroreinigung ist top – unser Team fühlt sich wohl und wir können uns voll auf unser Geschäft konzentrieren.", name: "Sarah Keller", role: "Geschäftsführerin KMU" },
  { quote: "Wir setzen auf BeFi für unsere Industrieanlage. Pünktlich, professionell und sehr flexibel bei Sondereinsätzen. Absolute Empfehlung!", name: "Marco Bernasconi", role: "Facility Manager" },
  { quote: "Die Umzugsreinigung war perfekt. Wohnungsabnahme ohne Beanstandung. Absolut empfehlenswert für jeden Umzug!", name: "Andrea Hofmann", role: "Privatkundin" },
  { quote: "Winterdienst und Gartenpflege das ganze Jahr – BeFi macht einfach alles richtig. Sehr zuverlässig und immer erreichbar.", name: "Peter Zimmermann", role: "Liegenschaftsbesitzer" },
  { quote: "Für unsere Arztpraxis brauchen wir höchste Hygienestandards. BeFi liefert konstant hervorragende Qualität. Sehr professionell.", name: "Claudia Weber", role: "Praxismanagerin" },
];

export const faqs: Faq[] = [
  { question: "Welche Reinigungsleistungen bietet BeFi an?", answer: "Wir bieten Unterhalts-, Grund-, Spezial-, Fenster-, Fassaden-, Bau- und Industriereinigung sowie Umzugs- und Dachrinnenreinigung mit modernster SkyVac-Technik." },
  { question: "In welchen Regionen ist BeFi tätig?", answer: "Unser Hauptsitz ist in Winterthur. Wir bedienen Kunden in Winterthur, Zürich und der gesamten Deutschschweiz – von Privathaushalten bis zu grossen Industrieanlagen." },
  { question: "Können Leistungen individuell kombiniert werden?", answer: "Absolut! Wir erstellen massgeschneiderte Servicepakete nach Ihren spezifischen Anforderungen. Ob nur Reinigung oder ein Komplettpaket – wir passen uns an." },
  { question: "Wie schnell kann BeFi einen Auftrag starten?", answer: "Nach einer kostenlosen Bedarfsanalyse können wir oft innerhalb weniger Tage mit der Arbeit beginnen. Bei dringenden Anfragen sind auch kurzfristige Einsätze möglich." },
];

export const milestones: Milestone[] = [
  { year: "2011", title: "Gründung in Winterthur", description: "Fisnik Dauti gründet BeFi mit dem Anspruch, Facility Services persönlich und verlässlich zu denken." },
  { year: "2015", title: "Ausbau Reinigung & Hauswartung", description: "Erweiterung zum Komplettanbieter – Reinigung, Hauswartung und Gartenpflege aus einer Hand." },
  { year: "2019", title: "SkyVac & moderne Technik", description: "Investition in Dachrinnenreinigung vom Boden aus und dokumentierte Qualitätskontrollen." },
  { year: "2024", title: "Über 1'000 betreute Objekte", description: "Mehr als 500 Kunden und ein eingespieltes Team von über 50 Mitarbeitenden." },
];

// Anzeige-Reihenfolge der Team-Gruppen (von der Aufsicht bis zum Einsatz vor Ort).
export const teamGroups: string[] = [
  "Verwaltungsrat",
  "Geschäftsführung",
  "Backoffice",
  "Teamleiter",
  "Aussendienst",
];

export const team: TeamMember[] = [
  // Personenfotos folgen später (image-Feld pro Eintrag).
  { name: "Fisnik Dauti", role: "Geschäftsführer", group: "Geschäftsführung" },
  { name: "Verwaltungsrat", role: "Strategie & Aufsicht", group: "Verwaltungsrat" },
  { name: "Administration", role: "Offerten, Verträge & Rechnungen", group: "Backoffice" },
  { name: "Kundenbetreuung", role: "Ansprechpartner & Disposition", group: "Backoffice" },
  { name: "Teamleitung Reinigung", role: "Einsatzleitung & Qualität", group: "Teamleiter" },
  { name: "Teamleitung Hauswartung", role: "Einsatzleitung & Qualität", group: "Teamleiter" },
  { name: "Reinigungsteam", role: "Unterhalts- & Spezialreinigung", group: "Aussendienst" },
  { name: "Hauswartung", role: "Technik, Garten & Winterdienst", group: "Aussendienst" },
];

export const jobs: Job[] = [
  { title: "Reinigungskraft Unterhalt", type: "Teilzeit / Vollzeit", location: "Winterthur", description: "Für die laufende Unterhaltsreinigung von Wohn- und Geschäftsliegenschaften." },
  { title: "Hauswart / Allrounder", type: "Vollzeit", location: "Winterthur & Umgebung", description: "Technische Betreuung, Kleinreparaturen und Gartenpflege für betreute Liegenschaften." },
  { title: "Mitarbeiter Spezialreinigung", type: "Vollzeit", location: "Deutschschweiz", description: "Fassaden-, Glas- und Dachrinnenreinigung mit modernem Gerät – auch auf Montage." },
  { title: "Gärtner / Grünpflege", type: "Saison / Vollzeit", location: "Winterthur", description: "Rasen-, Hecken- und Baumpflege für gepflegte Aussenanlagen das ganze Jahr." },
  { title: "Mitarbeiter Winterdienst", type: "Saison", location: "Winterthur", description: "Pikett-Einsätze für Schneeräumung und Eisbekämpfung in der Wintersaison." },
];

export const perks: IconCard[] = [
  { icon: "MapPin", title: "Regional & kurze Wege", description: "Einsätze in Winterthur und Umgebung – keine langen Anfahrten." },
  { icon: "Award", title: "Faire Anstellung", description: "Schweizer Löhne, geregelte Arbeitszeiten und gute Ausrüstung." },
  { icon: "Users", title: "Eingespieltes Team", description: "Festes Team, persönliche Führung, echtes Miteinander." },
  { icon: "Rocket", title: "Entwicklung", description: "Schulungen und Aufstiegschancen zum Teamleiter." },
];

export const clientTypes: IconCard[] = [
  { icon: "Building2", title: "Immobilienverwaltungen", description: "Ganze Portfolios an Wohn- und Geschäftsliegenschaften." },
  { icon: "Briefcase", title: "KMU & Gewerbe", description: "Büros, Praxen, Verkaufsflächen und Industrieanlagen." },
  { icon: "Home", title: "Privateigentümer", description: "Einfamilienhäuser, Stockwerkeigentum und Privathaushalte." },
];

export const referenceProjects: ReferenceProject[] = [
  { title: "Wohnportfolio Winterthur", scope: "12 Liegenschaften", services: ["Hauswartung", "Treppenhausreinigung", "Winterdienst"], image: IMG + "treppenreinigung.jpg" },
  { title: "Industrieanlage Region Zürich", scope: "Gewerbe", services: ["Industriereinigung", "Sonderreinigung"], image: IMG + "gewerbe-reinigung.jpg" },
  { title: "Geschäftshaus mit Glasfassade", scope: "Gewerbe", services: ["Fassadenreinigung", "Glasreinigung"], image: IMG + "fassade-glas.jpg" },
  { title: "Arztpraxis & Bürozentrum", scope: "Praxis / KMU", services: ["Praxisreinigung", "Unterhaltsreinigung"], image: IMG + "fenster-innen.jpg" },
];

export const befiSoft: BefiSoft = {
  tagline: "Facility Management, digital im Griff",
  intro: "BeFi Soft ist unsere digitale Plattform für Einsatzplanung, Qualitätskontrolle und transparente Rapportierung. Sie sehen jederzeit, was wann erledigt wurde – mit Fotonachweis und Online-Zugang.",
  features: [
    { icon: "ClipboardList", title: "Einsatzplanung", description: "Touren, Teams und wiederkehrende Aufträge übersichtlich geplant und disponiert." },
    { icon: "ShieldCheck", title: "Qualitätskontrolle", description: "Checklisten und dokumentierte Kontrollen mit Fotonachweis pro Einsatz." },
    { icon: "Eye", title: "Kundenportal", description: "Transparenter Online-Zugang zu Einsätzen, Rapporten und Dokumenten." },
    { icon: "Timer", title: "Rapport & Abrechnung", description: "Digitale Leistungserfassung – nachvollziehbar von der Stunde bis zur Rechnung." },
  ],
};

export const getServiceBySlug = (slug: string | undefined): Service | undefined =>
  allServices.find((s) => s.slug === slug);

export const getServicesByCategory = (category: ServiceCategory): Service[] =>
  allServices.filter((s) => s.category === category);
