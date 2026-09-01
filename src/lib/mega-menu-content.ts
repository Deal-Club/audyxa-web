import { METHOD_CHAPTERS } from "@/lib/methode-content";

interface MegaMenuGroup {
  title: string;
  chapterSlugs: string[];
}

/**
 * Regroupement des 17 chapitres selon l'architecture du cours (table
 * "Architecture générale du parcours", cf. PDF source) : Diagnostic, Socle
 * numérique, Automatisation et IA, Client et croissance, Opérations et
 * modèle, Exécution, Certification.
 */
const GROUPS: MegaMenuGroup[] = [
  {
    title: "Diagnostic",
    chapterSlugs: [
      "fondements-et-maturite-numerique",
      "mission-de-lexpert",
      "processus-bpmn-lean-refonte",
    ],
  },
  {
    title: "Socle numérique",
    chapterSlugs: [
      "architecture-systeme-information",
      "strategie-data-bi-gouvernance",
      "cloud-infrastructure-devops-couts",
    ],
  },
  {
    title: "Automatisation et IA",
    chapterSlugs: [
      "automatisation-api-rpa-low-code",
      "ia-rag-agents-mcp",
      "cybersecurite-confidentialite-resilience",
    ],
  },
  {
    title: "Client et croissance",
    chapterSlugs: [
      "ux-produit-experience-client",
      "marketing-digital-et-mesure",
      "crm-vente-service-client-omnicanal",
    ],
  },
  {
    title: "Opérations et modèle",
    chapterSlugs: ["operations-erp-supply-chain-iot", "modeles-affaires-numeriques"],
  },
  {
    title: "Exécution",
    chapterSlugs: [
      "conduite-du-changement-gouvernance-delivery",
      "roi-kpi-portefeuille-feuille-de-route",
      "mission-complete-de-digitalisation",
    ],
  },
];

/**
 * Libellés courts pour le méga menu : les titres complets des chapitres
 * (jusqu'à sept mots) passeraient sur trois lignes dans une colonne de menu.
 * Le titre complet reste affiché en `title` au survol et sur la page.
 */
const MENU_LABELS: Record<string, string> = {
  "fondements-et-maturite-numerique": "Fondements et maturité",
  "mission-de-lexpert": "Déroulé d'une mission",
  "processus-bpmn-lean-refonte": "Processus et refonte",
  "architecture-systeme-information": "Architecture du SI",
  "strategie-data-bi-gouvernance": "Data, BI et gouvernance",
  "cloud-infrastructure-devops-couts": "Cloud et infrastructure",
  "automatisation-api-rpa-low-code": "Automatisation et API",
  "ia-rag-agents-mcp": "IA, RAG et agents",
  "cybersecurite-confidentialite-resilience": "Cybersécurité",
  "ux-produit-experience-client": "UX et expérience client",
  "marketing-digital-et-mesure": "Marketing digital",
  "crm-vente-service-client-omnicanal": "CRM et service client",
  "operations-erp-supply-chain-iot": "ERP et supply chain",
  "modeles-affaires-numeriques": "Modèles d'affaires",
  "conduite-du-changement-gouvernance-delivery": "Conduite du changement",
  "roi-kpi-portefeuille-feuille-de-route": "ROI, KPI et roadmap",
  "mission-complete-de-digitalisation": "Mission complète",
};

export interface MegaMenuColumn {
  title: string;
  links: { label: string; href: string; number: number; summary: string }[];
}

export function getMethodMegaMenuColumns(): MegaMenuColumn[] {
  return GROUPS.map((group) => ({
    title: group.title,
    links: group.chapterSlugs
      .map((slug) => METHOD_CHAPTERS.find((c) => c.slug === slug))
      .filter((c): c is NonNullable<typeof c> => Boolean(c?.sections?.length))
      .map((c) => ({
        label: MENU_LABELS[c.slug] ?? c.title,
        href: `/methode/${c.slug}`,
        number: c.number,
        summary: c.title,
      })),
  })).filter((column) => column.links.length > 0);
}
