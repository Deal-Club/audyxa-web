import type { Metadata } from "next";
import { FounderProfile, type FounderData } from "@/components/founder-profile";
import { buildFaqJsonLd } from "@/lib/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";
import { truncateForMeta } from "@/lib/text-utils";

/**
 * Page auteur de Paul Maxime Dossou, fondateur d'Audyxa (signal E-E-A-T).
 * Faits issus de son site officiel https://www.paulmaximedossou.com/ et des
 * pages Audyxa : aucune certification ni chiffre non publié n'est avancé.
 * JSON-LD via <script> natif pour rester visible aux robots sans JavaScript.
 */

const AUTEUR_TITLE = "Paul Maxime Dossou | Consultant en transformation digitale";
const AUTEUR_DESCRIPTION = truncateForMeta(
  "Paul Maxime Dossou, consultant en transformation digitale et fondateur d'Audyxa : développeur full stack, spécialiste automatisation et IA, auteur du cours Digitalisation des Entreprises."
);

export const metadata: Metadata = {
  title: AUTEUR_TITLE,
  description: AUTEUR_DESCRIPTION,
  alternates: { canonical: "/auteur/paul-maxime-dossou" },
  openGraph: {
    title: AUTEUR_TITLE,
    description: AUTEUR_DESCRIPTION,
    url: `${SITE_URL}/auteur/paul-maxime-dossou`,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: AUTEUR_TITLE,
    description: AUTEUR_DESCRIPTION,
  },
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Paul Maxime Dossou",
  url: `${SITE_URL}/auteur/paul-maxime-dossou`,
  jobTitle: "Consultant en transformation digitale, fondateur d'Audyxa",
  worksFor: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  description:
    "Développeur full stack, spécialiste n8n/Make, SEO/SEA, intégration IA et conseil en transformation digitale. Auteur du cours professionnel « Digitalisation des Entreprises ».",
  knowsAbout: [
    "Transformation digitale",
    "Automatisation",
    "Intelligence artificielle en entreprise",
    "Architecture de système d'information",
    "SEO / GEO / AEO",
  ],
  image: `${SITE_URL}/images/fondateurs/paul-maxime-dossou.jpg`,
  sameAs: ["https://www.paulmaximedossou.com/"],
};

const AUTEUR_FAQ = [
  {
    question: "Qui est Paul Maxime Dossou ?",
    answer:
      "Paul Maxime Dossou est consultant en transformation digitale et fondateur du cabinet Audyxa. Développeur full stack spécialisé en automatisation (n8n, Make), en SEO/SEA et en intégration de l'intelligence artificielle en entreprise, il est l'auteur du cours professionnel « Digitalisation des Entreprises ».",
  },
  {
    question: "Quel est le rôle de Paul Maxime Dossou chez Audyxa ?",
    answer:
      "Il a fondé Audyxa, cabinet de conseil en transformation digitale pour les entreprises d'Afrique de l'Ouest francophone, et y intervient comme consultant sur les missions d'audit, d'automatisation, d'intégration IA et de refonte des processus métier.",
  },
  {
    question: "D'où vient le contenu de la méthode Audyxa publiée sur ce site ?",
    answer:
      "Les 17 chapitres de la méthode publiée sur /methode sont issus et reformulés du cours professionnel « Digitalisation des Entreprises » de Paul Maxime Dossou, édition août 2026, structuré du diagnostic de maturité jusqu'à la restitution devant un comité de direction.",
  },
];

const DATA: FounderData = {
  name: "Paul Maxime Dossou",
  role: "Fondateur d'Audyxa",
  tagline: "Expert en automatisation et digitalisation d'entreprise, basé à Cotonou.",
  intro:
    "Workflows n8n et Make, développement web full stack (Laravel, Next.js) et accompagnement de l'audit de maturité à la mise en production, pour les PME d'Afrique francophone, de France et du Canada.",
  photo: { src: "/images/fondateurs/paul-maxime-dossou.jpg", alt: "Portrait de Paul Maxime Dossou" },
  stats: [
    { value: "5+", label: "Années d'expérience" },
    { value: "50+", label: "Projets réalisés" },
    { value: "48", label: "Clients" },
    { value: "20 h", label: "Gagnées / semaine" },
  ],
  about: [
    "Paul Maxime Dossou est consultant en transformation digitale et fondateur du cabinet Audyxa. Développeur full stack, il est spécialisé dans l'automatisation des processus métier, le SEO/SEA et l'intégration de l'intelligence artificielle en entreprise.",
    "Depuis 2019, il a livré plus de 50 projets pour 48 clients en Afrique francophone, en France et au Canada. Ses clients gagnent en moyenne 20 heures par semaine sur les tâches répétitives.",
    "Il est l'auteur du cours professionnel « Digitalisation des Entreprises » (édition août 2026), qui sert de base à la méthode Audyxa publiée sur ce site, du diagnostic de maturité à la restitution devant un comité de direction.",
  ],
  highlights: [
    {
      label: "Vision orientée ROI",
      text: "Chaque développement et chaque automatisation sert un objectif commercial mesurable, fixé avant le démarrage de la mission.",
    },
    {
      label: "Expertise multi-facettes",
      text: "Du code (Laravel, Next.js) à l'automatisation (n8n, Make) jusqu'à l'acquisition client (SEO local, Google Ads).",
    },
    {
      label: "Accompagnement sur mesure",
      text: "Audit de maturité, feuille de route sur 12 mois, déploiement du socle technique puis transfert de compétences aux équipes.",
    },
  ],
  services: [
    {
      title: "Automatisation des processus",
      items: ["Workflows n8n auto-hébergés", "Scénarios Make.com et Zapier", "Synchronisation CRM / ERP", "Relances et notifications WhatsApp"],
    },
    {
      title: "Développement web full stack",
      items: ["Applications Laravel / PHP", "Interfaces React / Next.js", "APIs REST et GraphQL", "Sites et boutiques e-commerce"],
    },
    {
      title: "IA, Odoo et transformation digitale",
      items: ["Audit des opportunités IA, agents sur mesure", "Déploiement Odoo, comptabilité OHADA", "Audit de maturité digitale", "Formation des équipes, vibe coding"],
    },
    {
      title: "Acquisition client digitale",
      items: ["SEO local et Google Business", "Campagnes Google Ads", "Avis Google automatisés", "Référencement dans les moteurs génératifs"],
    },
  ],
  tools: ["n8n", "Make", "Laravel", "Next.js", "React", "Vue.js", "TypeScript", "PostgreSQL", "Docker", "Odoo", "Shopify", "WordPress", "Twilio", "ElevenLabs"],
  links: [
    { label: "paulmaximedossou.com", href: "https://www.paulmaximedossou.com/", external: true },
    { label: "contact@paulmaximedossou.com", href: "mailto:contact@paulmaximedossou.com" },
    { label: "contact@audyxa.com", href: "mailto:contact@audyxa.com" },
  ],
  faq: AUTEUR_FAQ,
  readMore: [
    { kicker: "La méthode", title: "Les 17 chapitres de la méthode Audyxa", href: "/methode" },
    { kicker: "Chapitre 1", title: "Fondements et maturité numérique", href: "/methode/fondements-et-maturite-numerique" },
    { kicker: "Cofondateur", title: "Richard Salanon", href: "/auteur/richard-salanon" },
  ],
  ctaTitle: "Envie d'échanger directement avec Paul Maxime Dossou ?",
};

export default function AuteurPaulMaximeDossouPage() {
  const faqJsonLd = buildFaqJsonLd(AUTEUR_FAQ);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FounderProfile data={DATA} />
    </>
  );
}
