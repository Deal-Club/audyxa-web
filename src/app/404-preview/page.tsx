import type { Metadata } from "next";
import { ErrorPageContent } from "@/components/error-page-content";

export const metadata: Metadata = {
  title: "Page Not Found | Audyxa",
  description:
    "Audyxa — agence de transformation digitale. Transformer, innover, exceller.",
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
