import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

/**
 * Zones à ne pas explorer : routes techniques (API) et pages de démo du
 * thème d'origine, jamais listées dans le sitemap et sans intérêt SEO/GEO
 * (voir le commentaire de app/sitemap.ts). On économise ainsi le budget de
 * crawl sans jamais bloquer une page réelle du site.
 */
const DISALLOWED_PATHS = [
  "/api/",
  "/shop",
  "/shop/",
  "/team",
  "/team/",
  "/news",
  "/news/",
  "/projects",
  "/projects/",
  "/testimonial",
  "/404-preview",
];

export default function robots(): MetadataRoute.Robots {
  // Un seul bloc suffit : les crawlers IA (GPTBot, OAI-SearchBot, PerplexityBot,
  // ClaudeBot, Google-Extended, Bingbot...) suivent le bloc "*" et sont donc
  // tous autorisés. Ajouter un bloc dédié seulement pour traiter un robot
  // différemment (ex. refuser GPTBot / Google-Extended, qui concernent
  // l'entraînement, sans bloquer OAI-SearchBot / PerplexityBot).
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOWED_PATHS,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
