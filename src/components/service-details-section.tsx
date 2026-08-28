import { ServiceDetailsSidebar } from "@/components/service-details-sidebar";
import { ServiceDetailsContent } from "@/components/service-details-content";

/**
 * Section `.services-details` de `page-service-details.html` : mise en page
 * deux colonnes (sidebar col-xl-4 / contenu col-xl-8, gouttière ~30px).
 * Aucune règle `.services-details` de padding vertical n'existe dans
 * `style.css` (bootstrap.min.css, absent du dépôt source, gère `.container`
 * seul) — pt-120/pb-120 repris du rythme vertical du reste du thème
 * (ex. `.faqs-section`, `.contact-page-form`), valeur non garantie par la
 * source mais cohérente avec les autres pages internes déjà construites.
 */
export function ServiceDetailsSection() {
  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="auto-container">
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ServiceDetailsSidebar />
          </div>
          <div className="lg:col-span-2">
            <ServiceDetailsContent />
          </div>
        </div>
      </div>
    </section>
  );
}
