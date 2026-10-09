import type { NextConfig } from "next";

/**
 * Pays sans page dédiée : leur hub et toutes leurs pages ville sont
 * redirigés vers l'index /pays (voir KEPT_COUNTRY_SLUGS dans geo-content.ts).
 */
const REMOVED_COUNTRIES = [
  "burkina-faso",
  "mali",
  "niger",
  "guinee",
  "cameroun",
  "gabon",
  "rd-congo",
  "congo-brazzaville",
  "madagascar",
  "suisse",
  "luxembourg",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...REMOVED_COUNTRIES.flatMap((pays) => [
        { source: `/pays/${pays}`, destination: "/pays", permanent: true },
        { source: `/pays/${pays}/:ville`, destination: "/pays", permanent: true },
      ]),
      // Pages ville des pays conservés : retour vers la page pays.
      { source: "/pays/:pays/:ville", destination: "/pays/:pays", permanent: true },
      // Pages service x pays x ville : retour vers la page service.
      { source: "/services/:slug/:pays/:ville", destination: "/services/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
