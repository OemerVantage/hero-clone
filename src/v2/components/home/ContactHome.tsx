// BeFi v2 — Home contact section (form over photo).
import { SectionHead, wrapIn } from "@/v2/components/primitives";
import { EnquiryForm } from "@/v2/components/EnquiryForm";

export function ContactHome() {
  return (
    <section id="befi-contact" className="relative py-[clamp(56px,2.5rem+5vw,112px)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/fassade-hgc.jpg')" }}
      />
      <div className="absolute inset-0 bg-white/85" />
      <div className={`relative flex flex-col items-center ${wrapIn}`}>
        <SectionHead
          align="center"
          eyebrow="Kontakt"
          title="Lassen Sie uns über Ihre"
          titleMuted="Anforderungen sprechen."
          lead="Haben Sie Fragen oder möchten Sie eine unverbindliche Offerte? Unser Team in Winterthur berät Sie gerne persönlich."
        />
        <EnquiryForm variant="home" />
      </div>
    </section>
  );
}
