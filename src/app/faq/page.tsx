import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { FaqPageAccordion } from "@/components/faq-page-accordion";
import { FAQ_PAGE_ITEMS } from "@/lib/faq-data";
import { buildFaqJsonLd } from "@/lib/faq-schema";

export const metadata: Metadata = {
  title: "FAQ : questions fréquentes sur Audyxa",
  description:
    "Réponses aux questions fréquentes sur Audyxa : conseil, audit, automatisation, IA, déroulé d'une mission et zones d'intervention.",
  alternates: { canonical: "/faq" },
};

/**
 * Page `/faq` (`page-faq.html` côté source). Une seule section : un
 * accordéon de 4 questions/réponses, sans colonne image ni jauges
 * circulaires (contrairement à la teaser FAQ de la home). Le fond de
 * `.page-title` (`images/background/page-title.jpg`) est en 404 sur le site
 * source et le site vendeur — déjà géré par `PageTitle` (calque sombre seul).
 */
export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(FAQ_PAGE_ITEMS)) }}
      />
      <PageTitle
        title="FAQ"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "FAQ" }]}
        currentPath="/faq"
      />
      <FaqPageAccordion items={FAQ_PAGE_ITEMS} />
    </main>
  );
}
