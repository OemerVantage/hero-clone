// BeFi v2 — brand logo (real lockup, transparent bg). `dark` uses the white
// knock-out for dark surfaces (footer). Height-sized, width auto → never distorted.
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Logo({ dark = false, className = "h-12" }: { dark?: boolean; className?: string }) {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="BeFi Facility Services AG – Startseite">
      <img
        src={dark ? "/images/befi-logo-white.png" : "/images/befi-logo.png"}
        alt="BeFi Facility Services AG"
        className={cn("w-auto", className)}
      />
    </Link>
  );
}
