import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { ServicesListSection } from "@/components/services-list-section";

export const metadata: Metadata = {
  title: "Services | Audyxa",
  description:
    "Audyxa — agence de transformation digitale. Transformer, innover, exceller.",
};

/**
 * Page `/services` (`page-services.html` côté source) : liste complète des
 * 6 services, à la différence de la teaser à 3 cartes de la home
 * (`services-section.tsx`, réutilisée telle quelle sur `/about`). Une seule
 * section après la bannière de titre, voir `services-list-section.tsx`
 * pour le détail des écarts de fidélité responsive avec la variante home.
 */
export default function ServicesPage() {
  return (
    <main>
      <PageTitle
        title="Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pages" }, { label: "Services" }]}
      />
      <ServicesListSection />
    </main>
  );
}
