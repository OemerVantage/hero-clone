// BeFi v2 — icon registry. The data layer references icons by name (string);
// this maps those names to lucide-react components (the handoff's inline SVGs).
import {
  Handshake,
  MapPin,
  ShieldCheck,
  Clock,
  Phone,
  Mail,
  ClipboardList,
  Rocket,
  Timer,
  Lock,
  Award,
  Building2,
  Briefcase,
  Home,
  Users,
  Eye,
  Target,
  type LucideIcon,
} from "lucide-react";

export const ICONS = {
  Handshake,
  MapPin,
  ShieldCheck,
  Clock,
  Phone,
  Mail,
  ClipboardList,
  Rocket,
  Timer,
  Lock,
  Award,
  Building2,
  Briefcase,
  Home,
  Users,
  Eye,
  Target,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

export const getIcon = (name: IconName): LucideIcon => ICONS[name];
