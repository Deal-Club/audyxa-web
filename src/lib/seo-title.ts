import { SITE_NAME } from "@/lib/site-config";

/** Longueur au-delà de laquelle Google tronque généralement un title. */
export const TITLE_MAX = 60;

const BRAND_SUFFIX = ` | ${SITE_NAME}`;

/**
 * Titres courts (SEO) pour les pages dont le titre éditorial dépasse la
 * longueur affichable. Clé = chemin de la page. Le titre éditorial (H1)
 * reste inchangé sur la page : seule la balise <title> est raccourcie.
 */
const SEO_TITLE_OVERRIDES: Record<string, string> = {
  "/guides/mesurer-maturite-numerique-entreprise": "Mesurer la maturité numérique de votre entreprise",
  "/guides/cartographier-processus-as-is-to-be": "Cartographier un processus métier : AS-IS / TO-BE",
  "/guides/calculer-roi-tco-payback-projet-digital": "Calculer ROI, TCO et payback d'un projet digital",
  "/guides/gouvernance-ia-entreprise-guide": "Gouvernance de l'IA en entreprise : guide pratique",
  "/guides/acheter-configurer-integrer-developper": "Acheter, configurer, intégrer ou développer ?",
  "/guides/construire-business-case-transformation-digitale": "Construire un business case de projet digital",
  "/guides/conduite-changement-projet-digital": "Conduite du changement d'un projet digital",
  "/guides/prioriser-portefeuille-initiatives-digitales": "Prioriser un portefeuille d'initiatives digitales",
  "/guides/erreurs-frequentes-diagnostic-transformation-digitale": "Diagnostic digital : les erreurs fréquentes",
  "/guides/structurer-crm-eviter-saisie-inutile": "Structurer un CRM pour éviter la saisie inutile",
  "/guides/kpi-piloter-transformation-digitale": "KPI pour piloter une transformation digitale",
  "/guides/choisir-infrastructure-cloud-sans-dette": "Choisir son infrastructure cloud sans dette",
  "/guides/concevoir-parcours-client-reduire-frictions": "Concevoir un parcours client sans frictions",
  "/guides/mesurer-efficacite-strategie-marketing-digital": "Mesurer l'efficacité du marketing digital",
  "/guides/digitaliser-operations-erp-stocks-iot": "Digitaliser vos opérations sans complexité inutile",
  "/guides/tester-nouveau-modele-economique-numerique": "Tester un nouveau modèle économique numérique",
  "/guides/evaluer-maturite-digitale-pme-afrique-ouest": "Évaluer la maturité digitale en Afrique de l'Ouest",
  "/guides/n8n-vs-make-vs-zapier-automatisation-pme-africaine": "n8n, Make ou Zapier pour une PME africaine ?",
  "/guides/automatiser-whatsapp-orange-money-mtn-momo-wave": "Automatiser WhatsApp, Orange Money, MTN MoMo, Wave",
  "/guides/digitaliser-cabinet-comptable-afrique-francophone": "Digitaliser un cabinet comptable : par où commencer",
  "/guides/cybersecurite-pme-10-verifications-essentielles": "Cybersécurité PME : 10 vérifications essentielles",
  "/comparatifs/agence-locale-vs-prestataire-a-distance": "Agence locale ou prestataire à distance ?",
  "/comparatifs/odoo-vs-zoho-vs-salesforce": "Odoo, Zoho ou Salesforce pour une PME africaine ?",
  "/comparatifs/consultant-independant-vs-cabinet-vs-agence-digitale": "Consultant, cabinet ou agence digitale : que choisir ?",
  "/histoires/dominos-pizza": "Domino's Pizza, la pizza devenue tech company",
  "/histoires/adobe": "Adobe : du logiciel en boîte à l'abonnement",
  "/histoires/wave-senegal": "Wave : bousculer les opérateurs télécoms",
  "/histoires/jumia": "Jumia : l'e-commerce panafricain et son redressement",
  "/histoires/mpesa-safaricom": "M-Pesa : le mobile money devenu infrastructure",
  "/histoires/anip-benin": "ANIP Bénin : digitaliser l'identité",
  "/methode/mission-de-lexpert": "Mission de l'expert : du 1er rendez-vous au suivi",
  "/methode/ia-rag-agents-mcp": "IA, RAG, agents, MCP et gouvernance en entreprise",
};

/**
 * Titre final de la balise <title> (à passer en `title: { absolute }`).
 *
 * - garde le titre complet avec la marque s'il tient en 60 caractères ;
 * - sinon retire d'abord les segments secondaires (parts suivantes) ;
 * - sinon publie le titre sans la marque s'il tient en 60 caractères ;
 * - en dernier recours coupe sur un mot entier (jamais de point de suspension).
 *
 * `parts` = segments du plus important au moins important, joints par " | ".
 * `path` = chemin de la page, pour appliquer un titre court éditorial.
 */
export function seoTitle(parts: string | string[], path?: string): string {
  const override = path ? SEO_TITLE_OVERRIDES[path] : undefined;
  const list = override ? [override] : Array.isArray(parts) ? parts : [parts];

  for (let k = list.length; k >= 1; k--) {
    const candidate = list.slice(0, k).join(" | ");
    if (candidate.length + BRAND_SUFFIX.length <= TITLE_MAX) return candidate + BRAND_SUFFIX;
  }
  for (let k = list.length; k >= 1; k--) {
    const candidate = list.slice(0, k).join(" | ");
    if (candidate.length <= TITLE_MAX) return candidate;
  }

  const words = list[0].split(" ");
  let out = "";
  for (const w of words) {
    if ((out ? out + " " + w : w).length > TITLE_MAX) break;
    out = out ? out + " " + w : w;
  }
  return out.replace(/[\s,;:|–-]+$/, "").replace(/\s(de|du|des|la|le|les|un|une|et|ou|pour|en|à|d')$/i, "");
}
