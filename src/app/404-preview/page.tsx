import type { Metadata } from "next";
import { ErrorPageContent } from "@/components/error-page-content";

export const metadata: Metadata = {
  title: "Page Not Found | Amiso",
  description:
    "Amiso - agence de design web et applications. Clone fidèle du thème Amiso.",
};

/**
 * Route `/404-preview` (`page-404.html` côté source) : aperçu volontaire du
 * design 404 personnalisé du thème, à une URL normale — ce n'est PAS le
 * mécanisme `not-found.tsx` de Next.js (non touché ici). Voir
 * `error-page-content.tsx` pour le détail des écarts de fidélité (asset
 * manquant, classes fantômes).
 */
export default function NotFoundPreviewPage() {
  return (
    <main>
      <ErrorPageContent />
    </main>
  );
}
