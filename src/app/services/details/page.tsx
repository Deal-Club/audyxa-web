import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { ServiceDetailsSection } from "@/components/service-details-section";

export const metadata: Metadata = {
  title: "Service Details | Audyxa",
  description:
    "Audyxa — agence de transformation digitale. Transformer, innover, exceller.",
};

/**
 * Page `/services/details` (`page-service-details.html` côté source). Le
 * H1 réel de la bannière est bien "Service Details" (générique), pas le nom
 * d'un service précis : le thème n'a qu'un seul gabarit de détail statique,
 * partagé par toutes les entrées de la sidebar `.sidebar-service-list`.
 */
export default function ServiceDetailsPage() {
  return (
    <main>
      <PageTitle
        title="Service Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages" },
          { label: "Services" },
        ]}
      />
      <ServiceDetailsSection />
    </main>
  );
}
