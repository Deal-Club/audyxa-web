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
 * au site : shop, team, news, projects, testimonial, 404-preview).
 *
 * `lastModified` = date de dernière modification réelle du contenu (dernier
 * commit touchant la source de chaque groupe de pages), jamais la date du
 * build. `priority` et `changeFrequency` sont omis : Google les ignore.
 * À remplacer par un champ `updatedAt` par page quand chaque module de
 * contenu l'exposera.
 */
const CONTENT_DATE = new Date("2026-09-24");
const HOME_DATE = new Date("2026-10-09");
const FAQ_DATE = new Date("2026-08-31");
const METHODE_DATE = new Date(METHODE_LAST_REVISION);

function toSitemapEntries(routes: string[], lastModified: Date): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/about",
    "/services",
    "/contact",
    "/services/chatbot-whatsapp",
    "/glossaire",
    "/histoires",
    "/guides",
    "/secteurs",
    "/comparatifs",
    "/pays",
  ];

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
    ...toSitemapEntries([""], HOME_DATE),
    ...toSitemapEntries(["/faq"], FAQ_DATE),
    ...toSitemapEntries(methodeRoutes, METHODE_DATE),
    ...toSitemapEntries(
      [
        ...staticRoutes,
        ...serviceRoutes,
        ...histoireRoutes,
        ...guideRoutes,
        ...decisionRoutes,
        ...sectorRoutes,
        ...countryHubRoutes,
        ...secondaryCityRoutes,
        ...flagshipServiceRoutes,
      ],
      CONTENT_DATE
    ),
  ];
}
