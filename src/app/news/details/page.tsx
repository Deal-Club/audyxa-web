import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { NewsDetailsSection } from "@/components/news-details-section";

export const metadata: Metadata = {
  title: "News Details | Audyxa",
  description:
    "Audyxa — agence de transformation digitale. Transformer, innover, exceller.",
  robots: { index: false, follow: false },
};

/**
 * Page `/news/details` (`news-details.html` côté source). Le fil
 * d'Ariane réel n'a que 2 maillons ("Home" / "News", sans item "Pages"
 * intermédiaire) — confirmé dans le markup `.page-breadcrumb` de la source,
 * à la différence de `/services/details` ou `/team/details`.
 */
export default function NewsDetailsPage() {
  return (
    <main>
      <PageTitle
        title="News Details"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      />
      <NewsDetailsSection />
    </main>
  );
}
