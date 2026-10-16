import { SITE_URL } from "@/lib/site-config";
import { GUIDES } from "@/lib/guide-content";
import { DECISION_PAGES } from "@/lib/decision-content";
import { SECTOR_PAGES } from "@/lib/sector-content";
import { GEO_COUNTRIES } from "@/lib/geo-content";
import { HISTOIRES } from "@/lib/histoires-content";
import { SERVICES_DETAIL } from "@/lib/services-content";
import { getPublishedMethodChapters } from "@/lib/methode-content";

export const dynamic = "force-static";

/** Une ligne de lien Markdown : "- [titre](url) : résumé court". */
function line(title: string, path: string, summary?: string): string {
  const text = summary ? ` : ${summary.replace(/\s+/g, " ").trim()}` : "";
  return `- [${title}](${SITE_URL}${path})${text}`;
}

/**
 * /llms.txt généré depuis les modules de contenu : la liste des pages suit
 * automatiquement le site (plus de fichier statique à maintenir à la main).
 */
export function GET() {
  const body = [
    "# Audyxa",
    "",
    "> Audyxa accompagne les entreprises en France et en Afrique francophone (16 pays) : audit et diagnostic digital, refonte des processus, automatisation et intégrations, intelligence artificielle en entreprise, développement d'outils métier, pilotage et déploiement de la transformation digitale. Conseil et exécution sur la même mission, intervention à distance avec les mêmes standards sur tous les marchés.",
    "",
    "Fondateur : Paul Maxime Dossou. Contact : contact@audyxa.com. Langue : français. Les chiffres cités dans les pages renvoient à leurs sources ; les cas illustratifs sont signalés comme tels.",
    "",
    "## Services",
    ...SERVICES_DETAIL.map((s) => line(s.title, `/services/${s.slug}`)),
    line("Chatbot WhatsApp pour entreprise", "/services/chatbot-whatsapp"),
    "",
    "## Méthode (chapitres)",
    line("Méthode complète", "/methode"),
    ...getPublishedMethodChapters().map((c) => line(c.title, `/methode/${c.slug}`, c.summary)),
    "",
    "## Guides pratiques",
    line("Tous les guides", "/guides"),
    ...GUIDES.map((g) => line(g.title, `/guides/${g.slug}`, g.summary)),
    "",
    "## Comparatifs et aide à la décision",
    line("Tous les comparatifs", "/comparatifs"),
    ...DECISION_PAGES.map((d) => line(d.title, `/comparatifs/${d.slug}`, d.conclusion)),
    "",
    "## Secteurs",
    line("Tous les secteurs", "/secteurs"),
    ...SECTOR_PAGES.map((s) => line(`Transformation digitale ${s.name}`, `/secteurs/${s.slug}`, s.directAnswer)),
    "",
    "## Zones d'intervention",
    line("Toutes les zones", "/pays"),
    ...GEO_COUNTRIES.map((c) => line(c.name, `/pays/${c.slug}`)),
    "",
    "## Histoires de transformation (études de cas externes et sourcées)",
    line("Toutes les histoires", "/histoires"),
    ...HISTOIRES.map((h) => line(h.title, `/histoires/${h.slug}`, h.summary)),
    "",
    "## Référence",
    line("Glossaire", "/glossaire", "définitions des termes techniques (RAG, MCP, BPMN, ROI, TCO...)"),
    line("FAQ", "/faq"),
    line("À propos", "/about"),
    line("Fondateur : Paul Maxime Dossou", "/auteur/paul-maxime-dossou"),
    line("Contact", "/contact"),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
