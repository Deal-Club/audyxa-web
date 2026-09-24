import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle } from "@/components/page-title";
import { CallToAction } from "@/components/call-to-action";
import {
  CheckList,
  FaqAccordion,
  MetaRail,
  SectionHead,
} from "@/components/methode/method-ui";
import { buildFaqJsonLd } from "@/lib/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

/**
 * Page auteur de Paul Maxime Dossou, fondateur d'Audyxa : page qui porte le
 * signal E-E-A-T du site (Expérience, Expertise, Autorité, Fiabilité).
 *
 * Règle de contenu stricte appliquée ici : chaque fait biographique visible
 * sur cette page provient d'une mention déjà publiée ailleurs sur le site
 * (voir `src/app/methode/page.tsx` : PERSON_JSON_LD, section FAQ et section
 * « La source », ainsi que `src/app/methode/[slug]/page.tsx`). Aucune
 * certification, aucun diplôme, aucune année d'expérience précise et aucun
 * nombre de missions n'est avancé : ces informations restent marquées
 * `[À COMPLÉTER PAR L'UTILISATEUR]` tant qu'elles ne sont pas confirmées.
 * Le JSON-LD Person est injecté via une balise <script> native (pas le
 * composant <Script> de next/script) pour rester visible aux robots qui
 * n'exécutent pas JavaScript.
 */

const AUTEUR_TITLE = "Paul Maxime Dossou | Consultant en transformation digitale";
const AUTEUR_DESCRIPTION =
  "Paul Maxime Dossou, consultant en transformation digitale et fondateur d'Audyxa : développeur full stack, spécialiste automatisation et IA, auteur du cours Digitalisation des Entreprises.";

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
  // sameAs : à compléter avec les URLs de profils sociaux réels une fois
  // confirmées (LinkedIn notamment). Voir le placeholder visible dans le
  // contenu de la page ci-dessous. Ne jamais construire une URL par
  // supposition (règle anti-invention).
};

const COMPETENCES = [
  "Transformation digitale : diagnostic de maturité, cadrage, business case",
  "Automatisation de processus avec n8n et Make",
  "Intégration de l'intelligence artificielle en entreprise",
  "SEO / SEA et référencement pour PME",
  "Architecture de système d'information et intégrations",
];

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

export default function AuteurPaulMaximeDossouPage() {
  const faqJsonLd = buildFaqJsonLd(AUTEUR_FAQ);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageTitle
        title="Paul Maxime Dossou"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Paul Maxime Dossou" }]}
        currentPath="/auteur/paul-maxime-dossou"
      />

      {/* 1. En résumé */}
      <section className="bg-white pt-[70px] pb-[60px]">
        <div className="auto-container">
          <MetaRail
            items={[
              { label: "Rôle", value: "Fondateur d'Audyxa" },
              { label: "Cours", value: "Digitalisation des Entreprises" },
              { label: "Chapitres", value: "17" },
              { label: "Édition", value: "Août 2026" },
            ]}
          />
          <SectionHead
            kicker="En résumé"
            title="Consultant en transformation digitale, fondateur d'Audyxa"
            intro={
              <>
                Paul Maxime Dossou est consultant en transformation digitale et fondateur
                d&apos;Audyxa, cabinet de conseil en transformation digitale pour les entreprises
                d&apos;Afrique de l&apos;Ouest francophone. Développeur full stack, spécialiste de
                l&apos;automatisation (n8n, Make), du SEO/SEA et de l&apos;intégration de
                l&apos;intelligence artificielle en entreprise, il est l&apos;auteur du cours
                professionnel « Digitalisation des Entreprises », qui sert de base à la{" "}
                <Link href="/methode" className="font-semibold text-theme-2 hover:underline">
                  méthode Audyxa
                </Link>{" "}
                publiée sur ce site.
              </>
            }
          />
        </div>
      </section>

      {/* 2. Domaines de compétence */}
      <section className="bg-light-bg py-[60px]">
        <div className="auto-container">
          <SectionHead
            kicker="Expertise"
            title="Domaines de compétence"
            intro="Les domaines listés ici correspondent à ceux déjà documentés sur les pages du site consacrées à la méthode Audyxa."
          />
          <CheckList items={COMPETENCES} />
        </div>
      </section>

      {/* 3. Parcours */}
      <section className="bg-white py-[70px]">
        <div className="auto-container max-w-[820px]">
          <SectionHead kicker="Parcours" title="Formation, expérience et certifications" />
          <p className="mb-4 text-[15px] leading-8 text-body-text">
            Les années d&apos;expérience précises, les diplômes, les certifications et le nombre de
            missions réalisées ne sont pas encore documentés de façon vérifiable sur ce site.
            Conformément à la règle anti-invention appliquée à l&apos;ensemble du contenu Audyxa,
            aucun chiffre ni aucune certification n&apos;est avancé ici tant qu&apos;il n&apos;est
            pas confirmé.
          </p>
          <p className="mb-0 text-[15px] leading-8 text-body-text">
            [À COMPLÉTER PAR L&apos;UTILISATEUR : parcours détaillé, formations suivies,
            certifications, années d&apos;expérience précises, nombre de missions réalisées.]
          </p>
        </div>
      </section>

      {/* 4. Autres activités professionnelles */}
      <section className="bg-light-bg py-[70px]">
        <div className="auto-container max-w-[820px]">
          <SectionHead
            kicker="Autres activités"
            title="Lien avec d'autres activités professionnelles"
          />
          <p className="mb-0 text-[15px] leading-8 text-body-text">
            [DÉCISION UTILISATEUR REQUISE : relier ou non à Dossou Dev]
          </p>
        </div>
      </section>

      {/* 5. Profils et vérifiabilité */}
      <section className="bg-white py-[70px]">
        <div className="auto-container max-w-[820px]">
          <SectionHead
            kicker="Vérifiabilité"
            title="Profils professionnels"
            intro="Seuls des profils réels et vérifiés sont listés ici : aucune URL n'est construite par supposition."
          />
          <ul className="mb-0 flex flex-col gap-3 text-[15px] leading-8 text-body-text">
            <li>
              LinkedIn : [À COMPLÉTER PAR L&apos;UTILISATEUR : URL LinkedIn réelle]
            </li>
            <li>
              Contact professionnel :{" "}
              <a href="mailto:contact@audyxa.com" className="font-semibold text-theme-2 hover:underline">
                contact@audyxa.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-light-bg py-[70px]">
        <div className="auto-container">
          <SectionHead kicker="Questions fréquentes" title="Ce qu'on nous demande sur l'auteur" />
          <div className="max-w-[880px]">
            <FaqAccordion items={AUTEUR_FAQ} />
          </div>
        </div>
      </section>

      {/* 7. Poursuivre la lecture */}
      <section className="bg-white py-[70px]">
        <div className="auto-container">
          <SectionHead kicker="Poursuivre" title="En lire plus" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <Link
              href="/methode"
              className="group rounded-[12px] border border-[#e6e3dc] bg-white px-7 py-6 transition-colors duration-300 hover:border-theme-2"
            >
              <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.14em] text-theme-2">
                La méthode
              </span>
              <span className="text-[17px] font-extrabold text-theme-1 group-hover:text-theme-2">
                Les 17 chapitres de la méthode Audyxa
              </span>
            </Link>
            <Link
              href="/methode/fondements-et-maturite-numerique"
              className="group rounded-[12px] border border-[#e6e3dc] bg-white px-7 py-6 transition-colors duration-300 hover:border-theme-2"
            >
              <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.14em] text-theme-2">
                Chapitre 1
              </span>
              <span className="text-[17px] font-extrabold text-theme-1 group-hover:text-theme-2">
                Fondements et maturité numérique
              </span>
            </Link>
            <Link
              href="/about"
              className="group rounded-[12px] border border-[#e6e3dc] bg-white px-7 py-6 transition-colors duration-300 hover:border-theme-2"
            >
              <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.14em] text-theme-2">
                Audyxa
              </span>
              <span className="text-[17px] font-extrabold text-theme-1 group-hover:text-theme-2">
                Qui est derrière Audyxa
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CallToAction
        title={
          <>
            Envie d&apos;échanger directement
            <br className="hidden min-[600px]:block" />
            avec Paul Maxime Dossou ?
          </>
        }
        ctaHref="/contact"
        ctaLabel="Prendre contact"
      />
    </main>
  );
}
