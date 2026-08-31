import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { FaqPageAccordion } from "@/components/faq-page-accordion";

export const metadata: Metadata = {
  title: "FAQ | Audyxa",
  description:
    "Audyxa — agence de transformation digitale. Transformer, innover, exceller.",
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
      <PageTitle
        title="FAQ"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pages" }, { label: "FAQ" }]}
      />
      <FaqPageAccordion />
    </main>
  );
}
