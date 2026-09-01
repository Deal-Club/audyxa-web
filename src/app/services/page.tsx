import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { ServicesListSection } from "@/components/services-list-section";
import { ServicesSeoSection } from "@/components/services-seo-section";
import { CallToAction } from "@/components/call-to-action";

export const metadata: Metadata = {
  title: "Services | Audyxa",
  description:
    "Audyxa propose des services de diagnostic, automatisation, IA, développement d'outils métier et pilotage de transformation digitale.",
  alternates: { canonical: "/services" },
};
export default function ServicesPage() {
  return (
    <main>
      <PageTitle
        title="Nos services"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Services" }]}
        currentPath="/services"
      />
      <ServicesListSection />
      <ServicesSeoSection />
      <CallToAction />
    </main>
  );
}
