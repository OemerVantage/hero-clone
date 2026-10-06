// BeFi v2 — page shell: petrol page background + Geist + scroll-reset / anchor jump on navigation.
import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

export function V2Page({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Jump to an in-page anchor (e.g. /dienstleistungen#reinigung), otherwise start at the top.
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return <div className="min-h-screen bg-befi-bg font-sans text-befi-ink">{children}</div>;
}
