import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { getPublishedMethodChapters } from "@/lib/methode-content";
import { SERVICES_DETAIL } from "@/lib/services-content";
import { DECISION_PAGES } from "@/lib/decision-content";
import { SECTOR_PAGES } from "@/lib/sector-content";
import { GEO_COUNTRIES, getFlagshipCity } from "@/lib/geo-content";
import { GUIDES } from "@/lib/guide-content";

/**
 * Sitemap des pages réelles Audyxa (hors pages de démo du thème non liées
 * au site — shop, team, news, projects, testimonial).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/methode",
    "/services/chatbot-whatsapp",
    "/glossaire",
    "/guides",
    "/secteurs",
    "/comparatifs",
    "/pays",
  ];
  const guideRoutes = GUIDES.map((g) => `/guides/${g.slug}`);
  const chapterRoutes = getPublishedMethodChapters().map((c) => `/methode/${c.slug}`);
  const serviceRoutes = SERVICES_DETAIL.map((s) => `/services/${s.slug}`);
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
    ...staticRoutes,
    ...chapterRoutes,
    ...serviceRoutes,
    ...decisionRoutes,
    ...sectorRoutes,
    ...countryHubRoutes,
    ...secondaryCityRoutes,
    ...flagshipServiceRoutes,
    ...guideRoutes,
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
