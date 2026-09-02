import type { NavItem } from "@/types/content";
import { METHOD_CHAPTERS } from "@/lib/methode-content";

export const NAVIGATION: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Méthode",
    href: "/methode",
    children: METHOD_CHAPTERS.filter((c) => c.sections?.length).map((c) => ({
      label: `${c.number}. ${c.title}`,
      href: `/methode/${c.slug}`,
    })),
  },
  { label: "Histoires", href: "/histoires" },
  { label: "Contact", href: "/contact" },
];
