export interface ServiceDetail {
  slug: string;
  title: string;
  category: "hauswartung" | "reinigung";
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  /** 6 individuelle Punkte für die "Das ist inklusive"-Sektion */
  inclusiveItems: string[];
  /** Service-spezifischer Lead-Satz für die Ansprechpartner-Sektion */
  contactIntro: string;
}

export const companyContact = {
  name: "Fisnik Dauti",
  position: "Geschäftsführer",
  phone: "+41 52 536 69 84",
  phoneHref: "tel:+41525366984",
  email: "info@befi-fs.ch",
  emailHref: "mailto:info@befi-fs.ch",
  image: "/images/team-anerkennung.jpg",
} as const;

export const serviceCategories = {
  hauswartung: {
    label: "Hauswartung & Technischer Service",
    short: "Hauswartung",
  },
  reinigung: {
    label: "Reinigung & Unterhaltsreinigung",
    short: "Reinigung",
  },
} as const;

export const services: ServiceDetail[] = [
  // === HAUSWARTUNG & TECHNISCHER SERVICE ===
  {
    slug: "technischer-dienst",
    title: "Technischer Dienst",
    category: "hauswartung",
    shortDescription:
      "Wartung und Instandhaltung technischer Anlagen Ihrer Liegenschaft.",
    description:
      "Wir übernehmen die technische Betreuung Ihrer Immobilie – von der regelmässigen Kontrolle bis zur Reparatur. Heizung, Lüftung, Sanitär und Elektrik bleiben in einwandfreiem Zustand, damit Sie sich um nichts kümmern müssen.",
    image: "/images/hauswartung-technik.jpg",
    features: [
      "Heizungswartung",
      "Sanitäranlagen",
      "Elektrokontrollen",
      "Lüftungstechnik",
      "24h Notfalldienst",
    ],
    inclusiveItems: [
      "Wartung von Heizungs- und Lüftungsanlagen",
      "Kontrolle und Pflege der Sanitärinstallationen",
      "Elektro-Sicherheitskontrollen nach NIV",
      "Koordination und Begleitung von Fremdfirmen",
      "Dokumentation aller Wartungsarbeiten",
      "24h Notfallbereitschaft bei Störungen",
    ],
    contactIntro:
      "Sie haben Fragen zum technischen Dienst oder möchten ein Wartungskonzept erstellen lassen? Fisnik Dauti steht Ihnen persönlich zur Verfügung und berät Sie kompetent.",
  },
  {
    slug: "winterdienst",
    title: "Winterdienst",
    category: "hauswartung",
    shortDescription:
      "Schneeräumung und Eisbekämpfung für sichere Zugänge und Wege.",
    description:
      "Sobald der erste Schnee fällt, sind wir vor Ort. Unser Winterdienst sorgt für sichere Eingänge, Parkplätze und Wege – professionell, zuverlässig und auch nachts im Einsatz, damit Ihre Liegenschaft jederzeit zugänglich bleibt.",
    image: "/images/hauswartung-heizung.jpg",
    features: [
      "Schneeräumung",
      "Salz- und Splittstreuung",
      "24/7 Pikettdienst",
      "Vertragsservice",
    ],
    inclusiveItems: [
      "Schneeräumung von Eingängen und Gehwegen",
      "Räumung von Parkplätzen und Zufahrten",
      "Salz- und Splittstreuung gegen Glatteis",
      "Pikettdienst auch nachts und an Feiertagen",
      "Einsatzdokumentation pro Räumung",
      "Saisonvertrag mit fixen Konditionen",
    ],
    contactIntro:
      "Sie haben Fragen zu unserem Winterdienst oder möchten ein unverbindliches Angebot für die nächste Saison? Fisnik Dauti steht Ihnen persönlich zur Verfügung und berät Sie kompetent.",
  },
  {
    slug: "gartenunterhalt",
    title: "Gartenunterhalt",
    category: "hauswartung",
    shortDescription:
      "Pflege von Grünflächen, Bäumen und Hecken – das ganze Jahr über.",
    description:
      "Vom Rasenmähen über Heckenschnitt bis zur Baumpflege – wir halten Ihre Aussenanlagen das ganze Jahr in Bestform. Unsere ausgebildeten Gärtner kennen die optimalen Zeitpunkte für jede Pflegemassnahme.",
    image: "/images/garten-rasenmaehen.jpg",
    features: [
      "Rasenpflege",
      "Heckenschnitt",
      "Baumpflege",
      "Bepflanzung",
      "Herbstlaubentfernung",
    ],
    inclusiveItems: [
      "Regelmässiges Rasenmähen und Vertikutieren",
      "Heckenschnitt nach Saison und Vorgabe",
      "Baumpflege und fachgerechter Rückschnitt",
      "Bepflanzung von Beeten und Rabatten",
      "Herbstlaubentfernung und Entsorgung",
      "Wässerung und Düngung nach Bedarf",
    ],
    contactIntro:
      "Sie haben Fragen zum Gartenunterhalt oder wünschen einen individuellen Pflegeplan für Ihre Aussenanlagen? Fisnik Dauti steht Ihnen persönlich zur Verfügung und berät Sie kompetent.",
  },
  {
    slug: "gebaeudeunterhalt",
    title: "Gebäudeunterhalt",
    category: "hauswartung",
    shortDescription:
      "Laufende Pflege und Wartung Ihrer Immobilie – innen wie aussen.",
    description:
      "Ihre Liegenschaft verdient kontinuierliche Aufmerksamkeit. Wir kümmern uns um kleine Reparaturen, Kontrollgänge, Materialbestellungen und alle organisatorischen Aufgaben rund um den Gebäudeunterhalt – damit der Wert Ihrer Immobilie erhalten bleibt.",
    image: "/images/fassade-hgc.jpg",
    features: [
      "Kontrollgänge",
      "Kleinreparaturen",
      "Mängelmanagement",
      "Hausordnung",
      "Materialverwaltung",
    ],
    inclusiveItems: [
      "Regelmässige Kontrollgänge in der Liegenschaft",
      "Ausführung von Kleinreparaturen",
      "Erfassung und Nachverfolgung von Mängeln",
      "Durchsetzung der Hausordnung",
      "Material- und Lagerverwaltung",
      "Ansprechpartner für Mieter und Eigentümer",
    ],
    contactIntro:
      "Sie haben Fragen zum Gebäudeunterhalt oder möchten Ihre Liegenschaft langfristig betreuen lassen? Fisnik Dauti steht Ihnen persönlich zur Verfügung und berät Sie kompetent.",
  },

  // === REINIGUNG & UNTERHALTSREINIGUNG ===
  {
    slug: "gewerbereinigung",
    title: "Gewerbereinigung",
    category: "reinigung",
    shortDescription:
      "Professionelle Reinigung für Büros, Praxen und Gewerbeflächen.",
    description:
      "Saubere Arbeitsplätze steigern Produktivität und hinterlassen einen positiven Eindruck bei Kunden. Wir reinigen Ihre Geschäftsräume diskret und ausserhalb Ihrer Geschäftszeiten – nach individuell vereinbartem Plan.",
    image: "/images/gewerbe-reinigung.jpg",
    features: [
      "Büroreinigung",
      "Praxisreinigung",
      "Industriereinigung",
      "Verkaufsflächen",
      "Sanitärbereiche",
    ],
    inclusiveItems: [
      "Büro- und Arbeitsplatzreinigung",
      "Sanitäranlagen und Küchenbereiche",
      "Boden-, Oberflächen- und Staubwischen",
      "Abfallentsorgung und Recycling",
      "Empfangs- und Konferenzräume",
      "Individuelle Reinigungspläne nach Bedarf",
    ],
    contactIntro:
      "Sie haben Fragen zu unserer Gewerbereinigung oder möchten ein unverbindliches Angebot? Fisnik Dauti steht Ihnen persönlich zur Verfügung und berät Sie kompetent.",
  },
  {
    slug: "treppenhausreinigung",
    title: "Treppenhausreinigung",
    category: "reinigung",
    shortDescription:
      "Regelmässige Reinigung gemeinschaftlicher Bereiche in Wohnliegenschaften.",
    description:
      "Ein gepflegtes Treppenhaus ist die Visitenkarte jeder Wohnliegenschaft. Wir reinigen Treppen, Lift, Eingangsbereich und Briefkastenanlage in vereinbartem Rhythmus – diskret und gründlich.",
    image: "/images/treppenreinigung.jpg",
    features: [
      "Wöchentliche Reinigung",
      "Eingangsbereich",
      "Liftanlage",
      "Geländer- und Handlaufpflege",
    ],
    inclusiveItems: [
      "Treppenstufen und Podeste feucht reinigen",
      "Geländer und Handläufe desinfizieren",
      "Lift innen und Tasten reinigen",
      "Eingangsbereich und Briefkastenanlage",
      "Spinnweben und Staub entfernen",
      "Fenster und Glasflächen im Treppenhaus",
    ],
    contactIntro:
      "Sie haben Fragen zur Treppenhausreinigung oder verwalten eine Liegenschaft und suchen einen verlässlichen Partner? Fisnik Dauti steht Ihnen persönlich zur Verfügung und berät Sie kompetent.",
  },
  {
    slug: "fensterreinigung",
    title: "Fensterreinigung",
    category: "reinigung",
    shortDescription: "Streifenfreie Reinigung innen und aussen, in jeder Höhe.",
    description:
      "Klare Sicht und mehr Tageslicht: Unsere Fensterreinigung umfasst Scheiben, Rahmen und Fensterbänke – innen wie aussen. Auch in grosser Höhe arbeiten wir sicher und professionell.",
    image: "/images/fenster-innen.jpg",
    features: [
      "Innen- und Aussenreinigung",
      "Rahmen und Fensterbänke",
      "Hochreinigung",
      "Storenreinigung",
    ],
    inclusiveItems: [
      "Streifenfreie Reinigung der Glasflächen",
      "Reinigung von Fensterrahmen und Fensterbänken",
      "Storen, Lamellen und Rollläden",
      "Hochreinigung bis 14m mit Teleskopstange",
      "Reinigung mit reinem Osmosewasser",
      "Glasdächer und Wintergärten",
    ],
    contactIntro:
      "Sie haben Fragen zur Fensterreinigung oder möchten einen regelmässigen Reinigungsturnus vereinbaren? Fisnik Dauti steht Ihnen persönlich zur Verfügung und berät Sie kompetent.",
  },
  {
    slug: "spezialreinigung",
    title: "Spezialreinigung",
    category: "reinigung",
    shortDescription:
      "Anspruchsvolle Reinigungsaufgaben mit Profi-Geräten und Erfahrung.",
    description:
      "Wo Standardreinigung nicht ausreicht, kommen wir ins Spiel. Brand- und Wasserschäden, Graffiti-Entfernung, Teppich-Tiefenreinigung oder hygienische Spezialfälle – wir haben die richtige Methode für jede Herausforderung.",
    image: "/images/spezialreinigung-wc.jpg",
    features: [
      "Brand- und Wasserschäden",
      "Graffiti-Entfernung",
      "Teppich-Tiefenreinigung",
      "Desinfektion",
    ],
    inclusiveItems: [
      "Brand- und Russschadensanierung",
      "Wasserschaden-Trocknung und -Reinigung",
      "Graffiti- und Tag-Entfernung",
      "Teppich- und Polster-Tiefenreinigung",
      "Hygienische Desinfektion nach Standard",
      "Geruchsneutralisation mit Ozonbehandlung",
    ],
    contactIntro:
      "Sie haben einen Schadenfall oder benötigen eine Spezialreinigung kurzfristig? Fisnik Dauti steht Ihnen persönlich zur Verfügung und berät Sie kompetent.",
  },
  {
    slug: "umzugsreinigung",
    title: "Umzugsreinigung",
    category: "reinigung",
    shortDescription:
      "Wohnungsabnahme-Reinigung mit Garantie – stressfrei umziehen.",
    description:
      "Damit Ihre Wohnungsübergabe reibungslos verläuft, übernehmen wir die komplette Endreinigung. Wir reinigen jede Ecke gemäss Übergabeprotokoll – mit Abnahmegarantie. So sparen Sie Zeit und Nerven beim Umzug.",
    image: "/images/kueche-reinigung.jpg",
    features: [
      "Abnahmegarantie",
      "Küche und Bad",
      "Backofen und Cerankochfeld",
      "Fenster und Storen",
    ],
    inclusiveItems: [
      "Komplette Wohnungsreinigung gemäss Übergabeprotokoll",
      "Küche inkl. Backofen, Steamer und Kühlschrank",
      "Badezimmer inkl. Entkalkung und Fugen",
      "Fenster, Storen und Fensterbänke",
      "Böden, Wände, Türen und Sockelleisten",
      "Abnahmegarantie – wir reinigen nach bis Übergabe ok",
    ],
    contactIntro:
      "Sie haben einen Umzug geplant und möchten eine stressfreie Wohnungsübergabe? Fisnik Dauti steht Ihnen persönlich zur Verfügung und berät Sie kompetent.",
  },
  {
    slug: "baureinigung",
    title: "Baureinigung",
    category: "reinigung",
    shortDescription:
      "Grob-, Fein- und Endreinigung nach Bauarbeiten und Renovationen.",
    description:
      "Nach Bauabschluss räumen wir auf: Wir entfernen Baustaub, Mörtelreste und Kleberückstände – damit Ihr Objekt bezugsbereit übergeben werden kann. Vom Rohbau bis zur Endabnahme.",
    image: "/images/kueche-reinigung.jpg",
    features: [
      "Grobreinigung",
      "Bauendreinigung",
      "Bauschlussreinigung",
      "Glasreinigung nach Bau",
    ],
    inclusiveItems: [
      "Grobreinigung nach Bauabschluss",
      "Entfernung von Mörtel-, Putz- und Kleberückständen",
      "Bauendreinigung aller Oberflächen und Böden",
      "Glasreinigung inkl. Schutzfolien entfernen",
      "Sanitär- und Küchenanlagen bezugsbereit",
      "Bauschlussreinigung vor Abnahme",
    ],
    contactIntro:
      "Sie planen eine Baustelle und benötigen eine professionelle Baureinigung? Fisnik Dauti steht Ihnen persönlich zur Verfügung und berät Sie kompetent.",
  },
  {
    slug: "fassadenreinigung",
    title: "Fassadenreinigung",
    category: "reinigung",
    shortDescription:
      "Schonende Reinigung von Fassaden, Putz, Klinker und Glas.",
    description:
      "Eine saubere Fassade wertet jedes Gebäude auf. Mit modernen Verfahren entfernen wir Algen, Schmutz und Verschmutzungen materialschonend – von Putz und Klinker bis zu Glas- und Metallfassaden.",
    image: "/images/fassade-glas.jpg",
    features: [
      "Algenentfernung",
      "Hochdruckreinigung",
      "Glasfassaden",
      "Imprägnierung",
    ],
    inclusiveItems: [
      "Algen- und Moosentfernung von Putz und Klinker",
      "Schonende Hochdruck- und Niederdruckreinigung",
      "Reinigung von Glas- und Metallfassaden",
      "Behandlung gegen Wiederbefall (optional)",
      "Imprägnierung zur Werterhaltung",
      "Arbeiten mit Hebebühne oder Gerüst sicher und sauber",
    ],
    contactIntro:
      "Sie haben Fragen zur Fassadenreinigung oder benötigen ein Angebot für Ihr Gebäude? Fisnik Dauti steht Ihnen persönlich zur Verfügung und berät Sie kompetent.",
  },
  {
    slug: "dachrinnenreinigung",
    title: "Dachrinnenreinigung",
    category: "reinigung",
    shortDescription:
      "Reinigung von Dachrinnen und Fallrohren mit modernster SkyVac-Technik.",
    description:
      "Verstopfte Dachrinnen führen zu Wasserschäden. Mit dem SkyVac-System reinigen wir Ihre Dachrinnen vom Boden aus – ohne Gerüst, ohne Risiko und mit Videodokumentation für Ihre Sicherheit.",
    image: "/images/dachrinne-skyvac.jpg",
    features: [
      "SkyVac-Hochleistungssauger",
      "Bis 14m Arbeitshöhe",
      "Kameradokumentation",
      "Ohne Gerüst",
    ],
    inclusiveItems: [
      "Reinigung mit SkyVac-Hochleistungssauger",
      "Reinigung bis 14m Höhe vom Boden aus",
      "Live-Kamerakontrolle während der Arbeit",
      "Videodokumentation als Nachweis",
      "Entfernung von Laub, Moos und Schlamm",
      "Funktionscheck der Fallrohre",
    ],
    contactIntro:
      "Sie haben Fragen zur Dachrinnenreinigung oder möchten Wasserschäden vorbeugen? Fisnik Dauti steht Ihnen persönlich zur Verfügung und berät Sie kompetent.",
  },
  {
    slug: "glasreinigung",
    title: "Glasreinigung",
    category: "reinigung",
    shortDescription:
      "Streifenfreie Reinigung von Glasflächen jeder Art und Grösse.",
    description:
      "Glas verdient besondere Pflege. Ob Schaufenster, Glasdach, Wintergarten oder Spiegel – wir reinigen alle Glasflächen streifenfrei und materialschonend, auch in schwer zugänglichen Bereichen.",
    image: "/images/fenster-reinigung.jpg",
    features: [
      "Schaufenster",
      "Glasdächer",
      "Wintergärten",
      "Reines Osmosewasser",
    ],
    inclusiveItems: [
      "Schaufenster innen und aussen",
      "Glasdächer und Lichtbänder",
      "Wintergärten und Glasfassaden",
      "Spiegel und Glastüren",
      "Glasgeländer und Trennwände",
      "Reinigung mit reinem Osmosewasser",
    ],
    contactIntro:
      "Sie haben Fragen zur Glasreinigung oder möchten einen Wartungsvertrag für Ihre Glasflächen? Fisnik Dauti steht Ihnen persönlich zur Verfügung und berät Sie kompetent.",
  },
  {
    slug: "homeservice",
    title: "Homeservice",
    category: "reinigung",
    shortDescription:
      "Regelmässige Haushaltsreinigung mit festen Bezugspersonen.",
    description:
      "Unser Homeservice bringt Profi-Qualität in Ihren privaten Haushalt. Sie erhalten dieselbe Reinigungskraft jede Woche – diskret, zuverlässig und massgeschneidert auf Ihre Wünsche.",
    image: "/images/kueche-reinigung.jpg",
    features: [
      "Feste Bezugsperson",
      "Flexible Termine",
      "Wäscheservice",
      "Bügelservice",
    ],
    inclusiveItems: [
      "Wohnungsreinigung in vereinbartem Rhythmus",
      "Küche, Bad und Wohnräume",
      "Wäsche waschen und bügeln (optional)",
      "Fensterreinigung auf Wunsch",
      "Diskrete Schlüsselverwaltung",
      "Feste Bezugsperson jede Woche",
    ],
    contactIntro:
      "Sie möchten unseren Homeservice für Ihren Privathaushalt nutzen oder haben Fragen zu den Modalitäten? Fisnik Dauti steht Ihnen persönlich zur Verfügung und berät Sie kompetent.",
  },
];

export const getServiceBySlug = (slug: string): ServiceDetail | undefined =>
  services.find((s) => s.slug === slug);

export const getServicesByCategory = (
  category: ServiceDetail["category"],
): ServiceDetail[] => services.filter((s) => s.category === category);
