import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { ServiceDetailsSection } from "@/components/service-details-section";

export const metadata: Metadata = {
  title: "Détail service | Audyxa",
  description:
    "Découvrez comment Audyxa structure une mission de transformation digitale : cadrage, priorisation, automatisation, IA et pilotage des résultats.",
};
export default function ServiceDetailsPage() {
  return (
    <main>
      <PageTitle
        title="Détail service"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Détail service" },
        ]}
      />
      <ServiceDetailsSection />
    </main>
  );
}
