import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

interface ServiceItem {
  icon: string;
  title: string;
  text: string;
  bullets: string[];
}

const services: ServiceItem[] = [
  {
    icon: "flaticon-color-sample",
    title: "Audit et diagnostic digital",
    text: "Nous clarifions votre niveau de maturité, vos blocages métier, vos outils existants et les chantiers à plus fort retour.",
    bullets: ["Maturité digitale", "Cartographie des irritants", "Priorités à fort impact"],
  },
  {
    icon: "flaticon-front-end",
    title: "Refonte des processus",
    text: "Nous simplifions les étapes inutiles, les doubles saisies et les ruptures de flux avant toute automatisation.",
    bullets: ["AS-IS / TO-BE", "Réduction des frictions", "Processus plus simples"],
  },
  {
    icon: "flaticon-online-shopping",
    title: "Automatisation et intégrations",
    text: "Nous connectons vos outils, vos données et vos workflows pour gagner du temps utile et réduire les erreurs.",
    bullets: ["n8n / Make", "API et synchronisations", "Workflows métier"],
  },
  {
    icon: "flaticon-front-end",
    title: "IA en entreprise",
    text: "Nous déployons des cas d'usage IA concrets : assistants internes, qualification, synthèse, recherche documentaire et support.",
    bullets: ["Assistants métier", "RAG et bases de connaissance", "Garde-fous et validation"],
  },
  {
    icon: "flaticon-color-sample",
    title: "Développement d'outils métier",
    text: "Nous concevons les interfaces, portails et tableaux de bord qui manquent à votre pilotage opérationnel.",
    bullets: ["Apps web sur mesure", "Dashboards", "Portails internes et clients"],
  },
  {
    icon: "flaticon-online-shopping",
    title: "Pilotage et déploiement",
    text: "Nous accompagnons la mise en œuvre, l'adoption terrain, les indicateurs et la montée en charge de la transformation.",
    bullets: ["Roadmap", "Conduite du changement", "KPI et ROI"],
  },
];

/**
 * Section unique de `page-services.html` (`<section class="">` sans classe
 * propre, donc pas de scope `.services-section` : la grille utilise le
 * gouttière Bootstrap générique, pas l'override `.services-section .row`
 * à 8px vu sur la home). `<div class="container pb-90">` : `.pb-90` n'a
 * AUCUNE règle dans style.css, responsive.css, bootstrap.min.css ni les
 * CSS utilitaires du thème (vérifié exhaustivement) — classe fantôme, sans
 * effet. Seule la règle générique `section > .container { padding-top/
 * bottom: var(--container-pt) }` (style.css:320-324, 120px) s'applique,
 * confirmé aussi via getComputedStyle en direct sur /page-projects.html
 * (même motif `container` sans override réel).
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
    <section className="relative z-1 pt-[120px] pb-[120px]">
      <div className="auto-container">
        <div className="mx-auto mb-[50px] max-w-[860px] text-center">
          <span className="mb-4 inline-block text-[15px] font-semibold tracking-[0.18em] text-theme-2 uppercase">
            Conseil + services
          </span>
          <h2 className="mb-4 text-theme-1">
            Un accompagnement complet pour transformer vos opérations sans perdre du temps sur les mauvais chantiers
          </h2>
          <p className="mb-0 text-base leading-[30px] text-body-text">
            Audyxa intervient en France et en Afrique francophone pour aider les entreprises à diagnostiquer, prioriser, automatiser, développer et piloter leur transformation numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal
              key={`${service.title}-${service.icon}-${index}`}
              animation="fadeInUp"
              className="relative z-1"
            >
              <div className="group relative overflow-hidden rounded-[14px] border border-[#e2e2e2] bg-white p-[34px_24px_34px_30px] text-center transition-all duration-300 ease-[ease] hover:-translate-y-[10px] hover:shadow-[0_10px_60px_rgba(0,0,0,0.1)] md:text-left">
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
                <div className="relative mb-5 text-body-text">
                  {service.text}
                </div>
                <ul className="relative mb-7 space-y-2 text-sm leading-7 text-body-text">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <i className="fa fa-check mt-[7px] text-theme-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/details"
                  className="relative inline-flex items-center rounded-[10px] text-body-text transition-all duration-100 ease-linear"
                >
                  <span className="mr-5 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-white text-base text-theme-1 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-100 ease-linear group-hover:bg-theme-2 group-hover:text-white">
                    <i className="fa fa-long-arrow-alt-right" />
                  </span>
                  Voir le détail
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-[40px] rounded-[18px] bg-theme-1 px-8 py-8 text-white md:flex md:items-center md:justify-between">
          <div className="max-w-[760px]">
            <h3 className="mb-3 text-[30px] leading-[1.2em] text-white">
              Nous ne digitalisons pas pour faire moderne.
            </h3>
            <p className="mb-0 text-white/75">
              Notre approche vise des économies réelles, une meilleure productivité, des décisions plus fiables et une exécution plus fluide.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center rounded-full bg-theme-2 px-7 py-4 text-base font-bold text-white transition-colors hover:bg-theme-2-dark md:mt-0"
          >
            Parler à Audyxa
          </Link>
        </div>
      </div>
    </section>
  );
}
