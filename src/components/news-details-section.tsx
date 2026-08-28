import { NewsDetailsContent } from "@/components/news-details-content";
import { NewsDetailsSidebar } from "@/components/news-details-sidebar";

/**
 * Section `.blog-details` de `news-details.html` : deux colonnes bootstrap
 * (`col-xl-8 col-lg-7` / `col-xl-4 col-lg-5`, empilées sous 992px).
 * `bootstrap.min.css` (`.container`/`.row`/`.col-*`) est absent du dépôt
 * source — comme pour `service-details-section.tsx` et
 * `team-details-section.tsx`, la grille est reproduite en flex/pourcentages
 * Tailwind plutôt qu'en classes bootstrap littérales.
 *
 * Aucune règle `.blog-details` de padding vertical dans style.css (le
 * bootstrap `.container` gère l'espacement, absent du dépôt) : pt-120/pb-120
 * repris du rythme vertical des autres pages internes déjà construites.
 */
export function NewsDetailsSection() {
  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="auto-container">
        <div className="flex flex-wrap -mx-[15px]">
          <NewsDetailsContent />
          <NewsDetailsSidebar />
        </div>
      </div>
    </section>
  );
}
