// BeFi v2 — shared enquiry form (underline fields + confirm-on-submit).
// No real backend (matches handoff): the button shows a 3s confirmation state.
// Wire real submit logic where marked.
import { useState, type ChangeEvent, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { buttonCls } from "@/v2/components/primitives";

type Fields = { firstName: string; lastName: string; email: string; phone: string; message: string };
const EMPTY: Fields = { firstName: "", lastName: "", email: "", phone: "", message: "" };

const inputCls =
  "h-12 w-full border-b border-befi-border bg-transparent px-1 text-[15px] text-befi-ink outline-none transition-colors placeholder:text-befi-muted focus:border-befi-ink";

export function EnquiryForm({
  variant = "home",
  heading,
}: {
  variant?: "home" | "page";
  heading?: string;
}) {
  const [f, setF] = useState<Fields>(EMPTY);
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: connect real submit (e.g. API route / email service) here.
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const set = (key: keyof Fields) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((prev) => ({ ...prev, [key]: e.target.value }));

  const rows = variant === "page" ? 4 : 3;

  return (
    <form
      onSubmit={submit}
      className={cn(
        "w-full rounded-[24px] bg-white",
        variant === "page"
          ? "border border-befi-border p-[clamp(24px,3vw,36px)] shadow-befi-md"
          : "max-w-[560px] p-[clamp(24px,3vw,32px)] shadow-befi-lg",
      )}
    >
      {heading && <h2 className="mb-5 mt-0 text-[20px] font-semibold text-befi-ink">{heading}</h2>}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <input className={inputCls} name="firstName" placeholder="Vorname" value={f.firstName} onChange={set("firstName")} />
        <input className={inputCls} name="lastName" placeholder="Nachname" value={f.lastName} onChange={set("lastName")} />
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <input className={inputCls} type="email" name="email" placeholder="E-Mail" value={f.email} onChange={set("email")} />
        <input className={inputCls} type="tel" name="phone" placeholder="Telefon" value={f.phone} onChange={set("phone")} />
      </div>
      <textarea
        name="message"
        rows={rows}
        placeholder="Wie können wir Ihnen helfen?"
        value={f.message}
        onChange={set("message")}
        className="mb-8 w-full resize-none border-b border-befi-border bg-transparent px-1 py-3 text-[15px] leading-[1.6] text-befi-ink outline-none transition-colors placeholder:text-befi-muted focus:border-befi-ink"
      />
      <button
        type="submit"
        className={cn(
          buttonCls("primary", "lg", false),
          "w-full transition-colors duration-300",
          sent && "bg-befi-accent",
        )}
      >
        {sent ? "✓ Nachricht gesendet" : "Anfrage senden"}
      </button>
    </form>
  );
}
