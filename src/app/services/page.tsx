import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { ServicesListSection } from "@/components/services-list-section";
import { ServicesSeoSection } from "@/components/services-seo-section";
import { CallToAction } from "@/components/call-to-action";
import { SITE_URL } from "@/lib/site-config";

const SERVICES_TITLE = "Services";
const SERVICES_DESCRIPTION =
  "Audyxa propose des services de diagnostic, automatisation, IA, développement d'outils métier et pilotage de transformation digitale.";

export const metadata: Metadata = {
  title: SERVICES_TITLE,
  description: SERVICES_DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    title: SERVICES_TITLE,
    description: SERVICES_DESCRIPTION,
    url: `${SITE_URL}/services`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SERVICES_TITLE,
    description: SERVICES_DESCRIPTION,
  },
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
