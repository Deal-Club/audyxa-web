import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { NewsGridSection } from "@/components/news-grid-section";

export const metadata: Metadata = {
  title: "News Grid | Audyxa",
  description:
    "Audyxa — agence de transformation digitale. Transformer, innover, exceller.",
  robots: { index: false, follow: false },
};

/**
 * Page `/news` (`news-grid.html` côté source). Le h1 de la bannière est
 * "News Grid" ; le fil d'Ariane source ne comporte que 2 maillons (Home,
 * News), sans le maillon "Pages" intercalaire présent sur `/about`,
 * `/faq`, `/team` ou `/services` — vérifié directement dans le HTML
 * source, pas une omission. Une seule section après la bannière : la
 * grille des 3 articles (voir `news-grid-section.tsx`).
 */
export default function NewsPage() {
  return (
    <main>
      <PageTitle
        title="News Grid"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      />
      <NewsGridSection />
    </main>
  );
}
