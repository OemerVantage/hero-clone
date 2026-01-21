import * as React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import FadeIn from "@/components/motion/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Welche Reinigungsleistungen bietet BeFi an?",
    answer: "Wir bieten Unterhalts-, Grund-, Spezial-, Fenster-, Fassaden-, Bau- und Industriereinigung sowie Umzugs- und Dachrinnenreinigung mit modernster SkyVac-Technik."
  },
  {
    question: "In welchen Regionen ist BeFi tätig?",
    answer: "Unser Hauptsitz ist in Winterthur. Wir bedienen Kunden in Winterthur, Zürich und der gesamten Deutschschweiz – von Privathaushalten bis zu grossen Industrieanlagen."
  },
  {
    question: "Bietet BeFi auch Hauswartungsdienste an?",
    answer: "Ja, wir übernehmen die technische und organisatorische Betreuung von Immobilien inklusive Wartung der Haustechnik, Koordination von Fremdfirmen und Notdienst."
  },
  {
    question: "Wie funktioniert der Winterdienst?",
    answer: "Wir bieten Schneeräumung und Eisbekämpfung mit Pikett-Bereitschaft, damit Ihre Zugänge immer sicher sind – auch an Wochenenden und Feiertagen."
  },
  {
    question: "Können Leistungen individuell kombiniert werden?",
    answer: "Absolut! Wir erstellen massgeschneiderte Servicepakete nach Ihren spezifischen Anforderungen. Ob nur Reinigung oder ein Komplettpaket – wir passen uns an."
  },
  {
    question: "Wie schnell kann BeFi einen Auftrag starten?",
    answer: "Nach einer kostenlosen Bedarfsanalyse können wir oft innerhalb weniger Tage mit der Arbeit beginnen. Bei dringenden Anfragen sind auch kurzfristige Einsätze möglich."
  },
  {
    question: "Verwendet BeFi umweltfreundliche Reinigungsmittel?",
    answer: "Ja, wir setzen auf schonende Methoden und umweltfreundliche Produkte wo immer möglich. Nachhaltigkeit ist uns wichtig – für Mensch und Umwelt."
  },
  {
    question: "Wie erreiche ich BeFi für eine Offerte?",
    answer: "Rufen Sie uns an unter +41 52 536 69 84 oder schreiben Sie an info@befi-fs.ch. Wir erstellen Ihnen gerne eine kostenlose und unverbindliche Offerte."
  }
];

const FAQAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between py-6 text-left text-lg font-medium transition-all",
        className
      )}
      {...props}
    >
      {children}
      <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0 ml-4">
        <Plus className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-45" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
FAQAccordionTrigger.displayName = "FAQAccordionTrigger";

const FAQSection = () => {
  return (
    <section className="bg-background py-16 md:py-24 px-6 md:px-12 lg:px-20 xl:px-[240px]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Column - Header */}
        <FadeIn direction="right" className="lg:w-1/3">
          <span className="inline-flex items-center px-6 py-2 bg-secondary border border-border rounded-full text-lg font-light text-foreground mb-6">
            Häufige Fragen
          </span>
          
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight text-foreground leading-tight">
            HÄUFIG GESTELLTE
            <br />
            FRAGEN
          </h2>
        </FadeIn>
        
        {/* Right Column - Accordion */}
        <div className="lg:w-2/3 w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-border"
              >
                <FAQAccordionTrigger>
                  {faq.question}
                </FAQAccordionTrigger>
                <AccordionContent className="text-base font-light text-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
      </div>
    </section>
  );
};

export default FAQSection;
