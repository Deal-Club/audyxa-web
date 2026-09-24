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
  "/faq",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOWED_PATHS,
      },
      // Crawlers IA à autoriser explicitement (moteurs de réponse GEO/AEO).
      { userAgent: "GPTBot", allow: "/", disallow: DISALLOWED_PATHS },
      { userAgent: "ChatGPT-User", allow: "/", disallow: DISALLOWED_PATHS },
      { userAgent: "PerplexityBot", allow: "/", disallow: DISALLOWED_PATHS },
      { userAgent: "ClaudeBot", allow: "/", disallow: DISALLOWED_PATHS },
      { userAgent: "anthropic-ai", allow: "/", disallow: DISALLOWED_PATHS },
      { userAgent: "CCBot", allow: "/", disallow: DISALLOWED_PATHS },
      { userAgent: "Google-Extended", allow: "/", disallow: DISALLOWED_PATHS },
      // ChatGPT s'appuie sur l'index Bing pour ses recherches en temps réel.
      { userAgent: "Bingbot", allow: "/", disallow: DISALLOWED_PATHS },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
