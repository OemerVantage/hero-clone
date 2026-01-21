import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const contactFaqs = [
  {
    question: "Wie schnell erhalte ich eine Offerte?",
    answer: "In der Regel erhalten Sie innerhalb von 24-48 Stunden eine detaillierte Offerte. Bei dringenden Anfragen können wir oft noch schneller reagieren."
  },
  {
    question: "In welchen Regionen sind Sie tätig?",
    answer: "Unser Hauptgebiet ist Winterthur und die Region Zürich. Wir bedienen aber auch Kunden in der gesamten Deutschschweiz."
  },
  {
    question: "Wie flexibel sind Ihre Einsatzzeiten?",
    answer: "Sehr flexibel! Wir passen uns Ihren Bedürfnissen an. Ob früh morgens, abends oder am Wochenende – wir finden eine Lösung."
  },
  {
    question: "Was kostet eine Erstberatung?",
    answer: "Die Erstberatung und Bedarfsanalyse vor Ort ist bei uns komplett kostenlos und unverbindlich."
  }
];

const ContactInfoCard = () => (
  <div className="bg-secondary rounded-[24px] md:rounded-[32px] p-6 md:p-8 h-full">
    <h3 className="text-xl font-semibold text-foreground mb-6">
      Kontaktinformationen
    </h3>

    <div className="space-y-6">
      {/* Address */}
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center shrink-0">
          <MapPin className="w-5 h-5 text-foreground" />
        </div>
        <div>
          <p className="font-medium text-foreground">Adresse</p>
          <p className="text-foreground/70 text-sm">
            Franz-Burckhardt-Strasse 1
            <br />
            8404 Winterthur
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center shrink-0">
          <Phone className="w-5 h-5 text-foreground" />
        </div>
        <div>
          <p className="font-medium text-foreground">Telefon</p>
          <a
            href="tel:+41525366984"
            className="text-foreground/70 text-sm hover:text-foreground transition-colors"
          >
            +41 52 536 69 84
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center shrink-0">
          <Mail className="w-5 h-5 text-foreground" />
        </div>
        <div>
          <p className="font-medium text-foreground">E-Mail</p>
          <a
            href="mailto:info@befi-fs.ch"
            className="text-foreground/70 text-sm hover:text-foreground transition-colors"
          >
            info@befi-fs.ch
          </a>
        </div>
      </div>

      {/* Opening Hours */}
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center shrink-0">
          <Clock className="w-5 h-5 text-foreground" />
        </div>
        <div>
          <p className="font-medium text-foreground">Öffnungszeiten</p>
          <p className="text-foreground/70 text-sm">
            Mo - Fr: 07:00 - 18:00
            <br />
            Sa: Nach Vereinbarung
          </p>
        </div>
      </div>
    </div>

    {/* Quick Contact CTA */}
    <div className="mt-8 pt-6 border-t border-border">
      <p className="text-sm text-foreground/70 mb-4">
        Für schnelle Anfragen rufen Sie uns direkt an:
      </p>
      <a
        href="tel:+41525366984"
        className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors w-full justify-center"
      >
        <Phone className="w-4 h-4" />
        <span>Jetzt anrufen</span>
      </a>
    </div>
  </div>
);

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Wir werden uns in Kürze bei Ihnen melden."
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="px-4 md:px-6 pb-6">
        <div className="relative w-full h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=800&fit=crop"
            alt="Kontaktieren Sie BeFi"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)"
            }}
          />

          <div className="relative h-full flex flex-col justify-center p-8 md:p-12 lg:p-16 max-w-2xl">
            <span className="inline-flex items-center px-4 md:px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm md:text-base text-white mb-4 md:mb-6 w-fit">
              Kontakt
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-[1.1] tracking-tight mb-4">
              KONTAKTIEREN
              <br />
              SIE UNS
            </h1>
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-md">
              Wir freuen uns auf Ihre Anfrage. Kontaktieren Sie uns für eine kostenlose und unverbindliche Beratung.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="bg-background py-12 md:py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form - 3 columns */}
            <FadeIn direction="right" className="lg:col-span-3">
              <div className="bg-white border border-border rounded-[24px] md:rounded-[32px] p-6 md:p-8 lg:p-10">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                  Schreiben Sie uns
                </h2>
                <p className="text-muted-foreground mb-6">
                  Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Vorname
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Max"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nachname
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Mustermann"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        E-Mail
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="max@beispiel.ch"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefon
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+41 79 123 45 67"
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Ihre Nachricht
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                      required
                      rows={5}
                      className="rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Nachricht senden
                  </Button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info - 2 columns */}
            <FadeIn direction="left" className="lg:col-span-2">
              <ContactInfoCard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <FadeIn>
            <div className="bg-background rounded-[24px] md:rounded-[32px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.5234744694584!2d8.724841776749725!3d47.49799497117839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a999f53e8b8c7%3A0x9d7e7f3c7f7e7f7e!2sFranz-Burckhardt-Strasse%201%2C%208404%20Winterthur!5e0!3m2!1sde!2sch!4v1699999999999!5m2!1sde!2sch"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BeFi Standort Winterthur"
                className="w-full"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background py-12 md:py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Column - Header */}
            <FadeIn direction="right" className="w-full lg:w-1/3">
              <span className="inline-flex items-center px-4 md:px-6 py-2 bg-secondary border border-border rounded-full text-base md:text-lg font-light text-foreground mb-4 md:mb-6">
                Häufige Fragen
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-foreground leading-tight mb-4">
                FRAGEN ZUM
                <br />
                KONTAKT
              </h2>

              <p className="text-base md:text-lg font-light text-foreground leading-relaxed">
                Hier finden Sie Antworten auf die häufigsten Fragen rund um die Kontaktaufnahme und Zusammenarbeit.
              </p>
            </FadeIn>

            {/* Right Column - Accordion */}
            <FadeIn direction="left" className="w-full lg:w-2/3">
              <Accordion type="single" collapsible className="w-full">
                {contactFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="py-6 text-left text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-light text-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
