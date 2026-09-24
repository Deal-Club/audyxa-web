import type { MetadataRoute } from "next";
import { SITE_URL, METHODE_LAST_REVISION } from "@/lib/site-config";
import { getPublishedMethodChapters } from "@/lib/methode-content";
import { SERVICES_DETAIL } from "@/lib/services-content";
import { DECISION_PAGES } from "@/lib/decision-content";
import { SECTOR_PAGES } from "@/lib/sector-content";
import { GEO_COUNTRIES, getFlagshipCity } from "@/lib/geo-content";
import { GUIDES } from "@/lib/guide-content";
import { HISTOIRES } from "@/lib/histoires-content";

/**
 * Sitemap des pages réelles Audyxa (hors pages de démo du thème non liées
 * au site : shop, team, news, projects, testimonial, faq, 404-preview).
 *
 * `lastModified` : évite la date de build recalculée à chaque déploiement
 * (signal de fraîcheur trompeur pour le GEO). On fige une date réelle par
 * groupe de contenu :
 * - Pages revues techniquement le 2026-09-24 (corrections Phase 1 : schéma
 *   JSON-LD, titres, H1, canonical) : REVISION_DATE ci-dessous.
 * - Chapitres méthode : date de l'édition mentionnée dans le contenu lui-même
 *   (METHODE_LAST_REVISION).
 * - Contenus gérés par d'autres agents en parallèle (guides, comparatifs,
 *   secteurs, pays/villes) : pas de date de modification réelle disponible
 *   dans le CMS actuel ; à corriger quand chaque module de contenu exposera
 *   son propre champ `lastModified`/`updatedAt` (voir résumé de l'agent 1).
 */
const REVISION_DATE = new Date("2026-09-24");
const METHODE_DATE = new Date(METHODE_LAST_REVISION);

function toSitemapEntries(
  routes: string[],
  lastModified: Date,
  priority: number
): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const reviewedStaticRoutes = [
    "/about",
    "/services",
    "/contact",
    "/services/chatbot-whatsapp",
    "/glossaire",
    "/histoires",
  ];
  const pendingStaticRoutes = ["/guides", "/secteurs", "/comparatifs", "/pays"];

  const methodeRoutes = ["/methode", ...getPublishedMethodChapters().map((c) => `/methode/${c.slug}`)];
  const serviceRoutes = SERVICES_DETAIL.map((s) => `/services/${s.slug}`);
  const histoireRoutes = HISTOIRES.map((h) => `/histoires/${h.slug}`);

  const guideRoutes = GUIDES.map((g) => `/guides/${g.slug}`);
  const decisionRoutes = DECISION_PAGES.map((d) => `/comparatifs/${d.slug}`);
  const sectorRoutes = SECTOR_PAGES.map((s) => `/secteurs/${s.slug}`);
  const countryHubRoutes = GEO_COUNTRIES.map((c) => `/pays/${c.slug}`);
  const secondaryCityRoutes = GEO_COUNTRIES.flatMap((country) =>
    country.cities.filter((c) => !c.isFlagship).map((city) => `/pays/${country.slug}/${city.slug}`)
  );
  const flagshipServiceRoutes = GEO_COUNTRIES.flatMap((country) => {
    const flagship = getFlagshipCity(country);
    return SERVICES_DETAIL.map((s) => `/services/${s.slug}/${country.slug}/${flagship.slug}`);
  });

  return [
    ...toSitemapEntries([""], REVISION_DATE, 1),
    ...toSitemapEntries(reviewedStaticRoutes, REVISION_DATE, 0.8),
    ...toSitemapEntries(serviceRoutes, REVISION_DATE, 0.8),
    ...toSitemapEntries(histoireRoutes, REVISION_DATE, 0.8),
    ...toSitemapEntries(methodeRoutes, METHODE_DATE, 0.8),
    // Groupes non révisés par cet agent (contenu détenu par d'autres agents
    // en parallèle) : date de build conservée en l'absence de date réelle.
    ...toSitemapEntries(
      [
        ...pendingStaticRoutes,
        ...guideRoutes,
        ...decisionRoutes,
        ...sectorRoutes,
        ...countryHubRoutes,
        ...secondaryCityRoutes,
        ...flagshipServiceRoutes,
      ],
      new Date(),
      0.8
    ),
  ];
}
