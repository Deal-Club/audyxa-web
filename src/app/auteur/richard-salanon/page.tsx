import type { Metadata } from "next";
import { FounderProfile, type FounderData } from "@/components/founder-profile";
import { buildFaqJsonLd } from "@/lib/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";
import { truncateForMeta } from "@/lib/text-utils";

/**
 * Page auteur de Richard Salanon, cofondateur d'Audyxa. Faits issus de son
 * site officiel https://richardsalanon.com/ : aucun chiffre non publié.
 */

const TITLE = "Richard Salanon | Cofondateur d'Audyxa, développement et IA";
const DESCRIPTION = truncateForMeta(
  "Richard Salanon, cofondateur d'Audyxa : consultant en digitalisation et développeur logiciel à Cotonou. Sites, applications, automatisation, IA, Odoo et formations."
);

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/auteur/richard-salanon" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/auteur/richard-salanon`,
    type: "profile",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://richardsalanon.com/#person",
  name: "Richard Salanon",
  url: `${SITE_URL}/auteur/richard-salanon`,
  image: `${SITE_URL}/images/fondateurs/richard-salanon.webp`,
  jobTitle: "Consultant en digitalisation et développeur logiciel, cofondateur d'Audyxa",
  worksFor: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  description:
    "Consultant en digitalisation et développeur logiciel basé à Cotonou : sites, applications, automatisation, intégration d'IA, Odoo, Dolibarr et formations.",
  knowsAbout: ["Développement logiciel", "Automatisation n8n", "Intelligence artificielle", "Odoo", "SEO"],
  sameAs: ["https://richardsalanon.com"],
};

const FAQ = [
  {
    question: "Qui est Richard Salanon ?",
    answer:
      "Richard Salanon est consultant en digitalisation et développeur logiciel basé à Cotonou, au Bénin, et cofondateur d'Audyxa. Il crée des sites, des applications web et mobiles, des automatisations et des intégrations d'IA, déploie Odoo et Dolibarr, et forme les équipes.",
  },
  {
    question: "Quel est son rôle chez Audyxa ?",
    answer:
      "Cofondateur d'Audyxa, cabinet de formation et de transformation digitale, il intervient sur le développement, l'automatisation et le SEO.",
  },
  {
    question: "Dans quels pays intervient-il ?",
    answer:
      "Sur place à Cotonou et à distance partout ailleurs : Afrique francophone, Europe et Canada, dans 34 pays au total.",
  },
  {
    question: "Quels services propose Richard Salanon ?",
    answer:
      "Sites vitrines et e-commerce, applications web et mobiles, automatisation n8n et Make, agents IA et chatbot WhatsApp, référencement SEO et GEO, intégration d'Odoo et de Dolibarr, et formations pour les équipes.",
  },
];

const DATA: FounderData = {
  name: "Richard Salanon",
  role: "Cofondateur d'Audyxa",
  tagline: "Consultant en digitalisation et développeur logiciel, basé à Cotonou.",
  intro:
    "Sites, applications, automatisations, IA, ERP Odoo et Dolibarr, formations : des outils qui font gagner du temps et des clients aux entreprises d'Afrique francophone, d'Europe et du Canada.",
  photo: { src: "/images/fondateurs/richard-salanon.webp", alt: "Portrait de Richard Salanon" },
  stats: [
    { value: "50+", label: "Projets livrés" },
    { value: "100+", label: "Clients accompagnés" },
    { value: "200+", label: "Personnes formées" },
    { value: "34", label: "Pays servis" },
  ],
  about: [
    "Richard Salanon est consultant en digitalisation et développeur logiciel, basé à Cotonou, au Bénin. Il compte 6 ans de développement logiciel et a été formé à EPITECH.",
    "Il est le fondateur de Wapy, assistant WhatsApp à intelligence artificielle pour les entreprises d'Afrique francophone, qu'il a conçu, développé et fait évoluer lui-même.",
    "Cofondateur d'Audyxa, il propose un interlocuteur unique, du cadrage gratuit à la mise en ligne : maquette validée, développement par étapes, référencement et suivi.",
  ],
  highlights: [
    { label: "Relier plutôt que remplacer", text: "WhatsApp, tableur, cahier : ses automatisations connectent les outils existants pour supprimer les ressaisies." },
    { label: "Méthode en 4 étapes", text: "Cadrage gratuit, proposition détaillée, réalisation par étapes, mise en ligne et suivi." },
    { label: "Praticien et formateur", text: "Formations sur vos outils et vos documents réels : IA, n8n, Odoo, vibe coding, référencement." },
  ],
  services: [
    { title: "Sites et boutiques", items: ["Site vitrine professionnel", "Site e-commerce, landing page", "Refonte et migration", "Maintenance et support"] },
    { title: "Applications et IA", items: ["Application web sur mesure et mobile", "Automatisation n8n et Make", "Agents IA et chatbot WhatsApp", "SaaS et espace client"] },
    { title: "Visibilité et conseil", items: ["Référencement naturel SEO et GEO", "SEO local et Google Business", "Audit SEO complet", "Consultant en digitalisation"] },
    { title: "ERP et gestion", items: ["Intégration Odoo", "Intégration Dolibarr", "Réservation en ligne", "Audit et étude de projet"] },
  ],
  zones: ["Bénin", "Côte d'Ivoire", "Sénégal", "Togo", "Cameroun", "Burkina Faso", "Mali", "Niger", "France", "Belgique", "Suisse", "Canada", "Luxembourg", "Maroc", "Madagascar"],
  links: [
    { label: "richardsalanon.com", href: "https://richardsalanon.com", external: true },
    { label: "contact@richardsalanon.com", href: "mailto:contact@richardsalanon.com" },
    { label: "contact@audyxa.com", href: "mailto:contact@audyxa.com" },
  ],
  faq: FAQ,
  readMore: [
    { kicker: "Fondateur", title: "Paul Maxime Dossou", href: "/auteur/paul-maxime-dossou" },
    { kicker: "La méthode", title: "Les 17 chapitres de la méthode Audyxa", href: "/methode" },
    { kicker: "Audyxa", title: "Qui est derrière Audyxa", href: "/about" },
  ],
  ctaTitle: "Envie d'échanger directement avec Richard Salanon ?",
};

export default function AuteurRichardSalanonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(FAQ)) }}
      />
      <FounderProfile data={DATA} />
    </>
  );
}
