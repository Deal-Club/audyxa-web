import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

interface ServiceItem {
  icon: string;
  title: string;
  text: string;
}

/**
 * Contenu verbatim de la grille `.service-block` de `page-services.html`
 * (6 blocs) : icônes, titres et texte de démo sont répétés à l'identique
 * dans le HTML source (ex. "Web application" / flaticon-online-shopping
 * apparaît deux fois, "Web designing" et "Web development" ne portent pas
 * toujours la même icône selon le bloc) — contenu réel du thème, non
 * dédupliqué ni corrigé ici.
 */
const services: ServiceItem[] = [
  {
    icon: "flaticon-color-sample",
    title: "Web designing",
    text: "Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.",
  },
  {
    icon: "flaticon-front-end",
    title: "Web development",
    text: "Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.",
  },
  {
    icon: "flaticon-online-shopping",
    title: "Web application",
    text: "Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.",
  },
  {
    icon: "flaticon-online-shopping",
    title: "Web application",
    text: "Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.",
  },
  {
    icon: "flaticon-color-sample",
    title: "Web development",
    text: "Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.",
  },
  {
    icon: "flaticon-online-shopping",
    title: "Web designing",
    text: "Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.",
  },
];

/**
 * Section unique de `page-services.html` (`<section class="">` sans classe
 * propre, donc pas de scope `.services-section` : la grille utilise le
 * gouttière Bootstrap générique, pas l'override `.services-section .row`
 * à 8px vu sur la home). `<div class="container pb-90">` : le padding-top
 * 120px vient de la règle générique `section > .container { padding:
 * var(--container-pt) 0 }` (style.css:320-324, --container-pt:120px),
 * et `pb-90` surcharge uniquement le padding-bottom à 90px — même lecture
 * que `contact-page-form.tsx` pour `.container.pb-100`.
 *
 * Carte `.service-block` : même design que `services-section.tsx` (home)
 * mais avec la fidélité responsive complète documentée dans
 * responsive.css, absente de la variante home simplifiée :
 * - >=1200px : icon-box 210x210, décalé -52px/-52px, icône 72px (valeurs
 *   par défaut de style.css).
 * - 768-1199px : icon-box 150x150, décalé -50px/-50px, icône 48px
 *   (responsive.css, media max-width:1199px).
 * - <768px : icon-box repasse en flux (position relative, centré,
 *   100x100, sans décalage), inner-box centré, icône toujours 48px
 *   (aucune surcharge de taille dans le bloc max-width:767px : la valeur
 *   48px du palier 1199px reste active) (responsive.css, media
 *   max-width:767px).
 * Le décor `::before` en pointillés (dots.png) de `.inner-box` n'a pas
 * d'asset source disponible (404 confirmé, cf. PAGE_TOPOLOGY.md) et n'est
 * pas reproduit, comme sur `services-section.tsx`.
 */
export function ServicesListSection() {
  return (
    <section className="relative z-1 pt-[120px] pb-[90px]">
      <div className="auto-container">
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal
              key={`${service.title}-${service.icon}-${index}`}
              animation="fadeInUp"
              className="relative z-1"
            >
              <div className="group relative overflow-hidden rounded-[10px] border border-[#e2e2e2] bg-white p-[50px_30px] text-center transition-all duration-300 ease-[ease] hover:-translate-y-[15px] hover:shadow-[0_10px_60px_rgba(0,0,0,0.1)] md:p-[45px_25px_50px_50px] md:text-left">
                <div className="relative mx-auto mb-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-theme-3 p-0 transition-all duration-300 ease-[ease] group-hover:bg-theme-2 md:absolute md:top-auto md:-right-[50px] md:-bottom-[50px] md:mx-0 md:mb-0 md:h-[150px] md:w-[150px] md:p-[35px] min-[1200px]:-right-[52px] min-[1200px]:-bottom-[52px] min-[1200px]:h-[210px] min-[1200px]:w-[210px] min-[1200px]:p-[40px_50px]">
                  <i
                    className={cn(
                      service.icon,
                      "text-[48px] text-theme-2 transition-all duration-300 ease-[ease] group-hover:text-white min-[1200px]:text-[72px]"
                    )}
                  />
                </div>

                <h5 className="relative mb-[14px] font-extrabold">
                  <Link
                    href="/services/details"
                    className="transition-colors hover:text-theme-2"
                  >
                    {service.title}
                  </Link>
                </h5>
                <div className="relative mb-[60px] text-body-text">
                  {service.text}
                </div>
                <Link
                  href="/services/details"
                  className="relative inline-flex items-center rounded-[10px] text-body-text transition-all duration-100 ease-linear"
                >
                  <i className="fa fa-long-arrow-alt-right mr-5 flex h-[52px] w-[52px] items-center justify-center rounded-full text-base text-theme-1 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-100 ease-linear group-hover:bg-theme-2 group-hover:text-white" />
                  Read more
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
