import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PageTitle } from "@/components/page-title";
import { CallToAction } from "@/components/call-to-action";
import {
  ChapterCard,
  FaqAccordion,
  MetaRail,
  SectionHead,
} from "@/components/methode/method-ui";
import { METHOD_CHAPTERS, getPublishedMethodChapters } from "@/lib/methode-content";
import { METHOD_EXTRAS, PILLARS } from "@/lib/methode-extras";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Notre méthode | Audyxa",
  description:
    "La méthode Audyxa pour la transformation digitale des entreprises : diagnostic de maturité, business case, architecture, automatisation, IA et pilotage — issue du cours de référence de Paul Maxime Dossou.",
  alternates: { canonical: "/methode" },
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Paul Maxime Dossou",
  jobTitle: "Consultant en transformation digitale, fondateur d'Audyxa",
  url: `${SITE_URL}/methode`,
  worksFor: { "@type": "Organization", name: SITE_NAME },
  knowsAbout: [
    "Transformation digitale",
    "Automatisation",
    "Intelligence artificielle en entreprise",
    "Architecture de système d'information",
    "SEO / GEO / AEO",
  ],
  description:
    "Développeur full stack, spécialiste n8n/Make, SEO/SEA, intégration IA et conseil en transformation digitale. Auteur du cours professionnel \"Digitalisation des Entreprises\".",
};

/** Les trois niveaux distincts, chapitre 1. */
const NIVEAUX = [
  {
    label: "Numériser",
    text: "Convertir une information ou une opération analogique en forme numérique : scanner un dossier, dématérialiser un formulaire, remplacer un registre par une base de données.",
  },
  {
    label: "Digitaliser",
    text: "Revoir l'exécution d'un processus avec des capacités numériques : un formulaire qui alimente le CRM, déclenche une vérification et notifie un responsable change le fonctionnement, pas seulement le support.",
  },
  {
    label: "Transformer",
    text: "Faire évoluer ensemble modèle opérationnel, responsabilités, expérience client, données, architecture, compétences et gouvernance. L'unité de mesure reste le résultat métier.",
  },
];

/** Les six étapes de mission, chapitre 2. */
const ETAPES = [
  { titre: "Cadrer", detail: "Objectifs, périmètre, sponsor, critères de succès, accès nécessaires." },
  { titre: "Diagnostiquer", detail: "Processus réels, outils, données, risques — appuyés sur des preuves." },
  { titre: "Prioriser", detail: "Valeur, effort, risque et dépendances, comparés sur une grille commune." },
  { titre: "Concevoir", detail: "Architecture cible, processus TO-BE, business cases avec plusieurs options." },
  { titre: "Déployer", detail: "Pilotes à critères Go / No-Go, migration, formation et adoption." },
  { titre: "Mesurer", detail: "KPI, ROI réel contre business case, transfert et amélioration continue." },
];

/** Les cinq questions préalables, chapitre 1. */
const QUESTIONS = [
  "Quel résultat métier voulons-nous modifier ?",
  "Comment ce résultat est-il produit aujourd'hui ?",
  "Quelles données permettent de mesurer la situation actuelle ?",
  "Quelles contraintes limitent les options possibles ?",
  "Qui devra changer sa façon de travailler ?",
];

/** Feuille de route de référence, chapitres 2 et 16. */
const JALONS = [
  {
    periode: "Jours 1 à 30",
    titre: "Comprendre et sécuriser",
    detail:
      "Cadrage, diagnostic, inventaire applicatif, cartographie des processus prioritaires, baseline KPI, risques critiques, quick wins sûrs et gouvernance de mission.",
  },
  {
    periode: "Jours 31 à 60",
    titre: "Simplifier et connecter",
    detail:
      "Processus TO-BE, intégrations prioritaires, qualité des données, premier tableau de bord, mesures de sécurité prioritaires, pilotes d'automatisation et d'IA, plan d'adoption.",
  },
  {
    periode: "Jours 61 à 90",
    titre: "Prouver et industrialiser",
    detail:
      "Évaluation des pilotes, décisions Go / No-Go, documentation, support, architecture cible validée, business cases majeurs, feuille de route 12 mois et budget.",
  },
];

const METHODE_FAQ = [
  {
    question: "Sur quoi repose la méthode Audyxa ?",
    answer:
      "Sur une méthodologie écrite et publiée : le cours professionnel « Digitalisation des Entreprises » de Paul Maxime Dossou, fondateur d'Audyxa, structuré en 17 chapitres qui vont du diagnostic de maturité à la restitution devant un comité de direction.",
  },
  {
    question: "Par quoi commence une mission de digitalisation ?",
    answer:
      "Par un cadrage puis un diagnostic factuel. Aucune technologie n'entre dans le périmètre avant que le résultat métier visé, le processus réel, les données disponibles et les risques associés soient clairs.",
  },
  {
    question: "Combien de temps faut-il pour voir des résultats ?",
    answer:
      "La séquence de référence produit des quick wins sûrs dans les 30 premiers jours, des pilotes mesurés entre 31 et 60 jours, puis des décisions Go / No-Go et une feuille de route à 12 mois autour du 90e jour.",
  },
  {
    question: "La méthode s'applique-t-elle aux petites structures ?",
    answer:
      "Oui. La profondeur des livrables s'ajuste à la taille : sur une mission courte, un diagramme en couloirs remplace une modélisation BPMN complète, et le portefeuille se limite à deux ou trois initiatives comparées sur la même grille.",
  },
];

export default function MethodePage() {
  const published = getPublishedMethodChapters();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: METHODE_FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
      />
      <Script
        id="methode-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageTitle
        title="Notre méthode"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Méthode" }]}
        currentPath="/methode"
      />

      {/* 1. Le principe directeur */}
      <section className="bg-white pt-[70px] pb-[60px]">
        <div className="auto-container">
          <MetaRail
            items={[
              { label: "Chapitres", value: `${METHOD_CHAPTERS.length} publiés` },
              { label: "Piliers", value: `${PILLARS.length} domaines` },
              { label: "Séquence", value: "6 étapes" },
              { label: "Horizon", value: "30-60-90 jours" },
            ]}
          />
          <SectionHead
            kicker="Une méthode documentée, pas un slogan"
            title="Un expert en digitalisation ne commence jamais par choisir un logiciel"
            intro="Notre approche s'appuie sur une méthodologie écrite et publiée : « Digitalisation des Entreprises », le cours professionnel de Paul Maxime Dossou, fondateur d'Audyxa. Chaque chapitre développe une étape concrète de la démarche, avec ses livrables et ses points de contrôle."
          />
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="rounded-[14px] bg-theme-1 p-9">
              <h2 className="mb-4 text-[20px] font-extrabold text-white">Le principe directeur</h2>
              <p className="mb-0 text-[15px] leading-8 text-[#c9c9c9]">
                Il commence par comprendre les résultats attendus, les processus, les données, les
                contraintes et les risques. Le choix technologique vient ensuite — et il se justifie
                par le coût total de possession, l&apos;exportabilité des données et le niveau de
                contrôle nécessaire, pas par la préférence de l&apos;intervenant.
              </p>
            </div>
            <div className="rounded-[14px] border border-[#e6e3dc] bg-white p-9">
              <h2 className="mb-4 text-[20px] font-extrabold text-theme-1">
                Les cinq questions avant tout projet
              </h2>
              <ol className="mb-0 flex flex-col gap-3">
                {QUESTIONS.map((question, i) => (
                  <li key={question} className="flex gap-4">
                    <span className="text-[13px] font-extrabold tabular-nums text-theme-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-7 text-body-text">{question}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trois niveaux distincts */}
      <section className="bg-light-bg py-[70px]">
        <div className="auto-container">
          <SectionHead
            kicker="Le vocabulaire"
            title="Numériser, digitaliser, transformer : trois choses différentes"
            intro="Confondre ces trois niveaux conduit à surdimensionner un projet — ou à croire qu'un document scanné constitue une transformation."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {NIVEAUX.map((niveau, i) => (
              <article key={niveau.label} className="rounded-[14px] bg-white p-8">
                <span className="mb-5 block text-[38px] font-extrabold leading-none tabular-nums text-[#e6e3dc]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 text-[20px] font-extrabold text-theme-1">{niveau.label}</h3>
                <p className="mb-0 text-[15px] leading-7 text-body-text">{niveau.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. La séquence de mission */}
      <section className="bg-white py-[70px]">
        <div className="auto-container">
          <SectionHead
            kicker="La séquence"
            title="Six étapes, en boucle plutôt qu'en ligne droite"
            intro="Les résultats mesurés à la dernière étape réalimentent la priorisation suivante. Une technologie n'entre dans la mission qu'après clarification du résultat métier, du processus, des données et du risque."
          />
          <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-[#e6e3dc] bg-[#e6e3dc] sm:grid-cols-2 lg:grid-cols-3">
            {ETAPES.map((etape, i) => (
              <li key={etape.titre} className="bg-white p-8">
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-theme-2 text-[14px] font-extrabold text-theme-2">
                  {i + 1}
                </span>
                <h3 className="mb-2 text-[19px] font-extrabold text-theme-1">{etape.titre}</h3>
                <p className="mb-0 text-[15px] leading-7 text-body-text">{etape.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. Les quatre piliers */}
      <section className="bg-theme-1 py-[70px]">
        <div className="auto-container">
          <SectionHead
            kicker="Les piliers"
            title="Quatre domaines, dix-sept chapitres"
            intro="Les chapitres sont regroupés par pilier : chacun couvre une famille de capacités qu'une entreprise doit maîtriser pour que la suivante tienne."
            light
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {PILLARS.map((pillar) => {
              const count = published.filter(
                (chapter) => METHOD_EXTRAS[chapter.slug]?.pillar === pillar.key
              ).length;
              return (
                <article key={pillar.key} className="rounded-[14px] bg-[#1b1b1b] p-8">
                  <span className="mb-3 block text-[12px] font-bold uppercase tracking-[0.14em] text-theme-2">
                    {pillar.label} · {count} chapitres
                  </span>
                  <h3 className="mb-3 text-[21px] font-extrabold text-white">{pillar.title}</h3>
                  <p className="mb-0 text-[15px] leading-7 text-[#a9a9a9]">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Les 17 chapitres, groupés par pilier */}
      <section className="bg-white py-[70px]">
        <div className="auto-container">
          <SectionHead
            kicker="Le contenu"
            title="Les 17 chapitres de la méthode"
            intro="Chaque page développe un chapitre : sa question centrale, ses points clés, le détail de la démarche, les pièges les plus fréquents et les questions qui reviennent en mission."
          />
          <div className="flex flex-col gap-[50px]">
            {PILLARS.map((pillar) => {
              const chapters = published.filter(
                (chapter) => METHOD_EXTRAS[chapter.slug]?.pillar === pillar.key
              );
              if (!chapters.length) return null;
              return (
                <div key={pillar.key}>
                  <div className="mb-6 flex flex-wrap items-baseline gap-4 border-b border-[#e6e3dc] pb-4">
                    <h3 className="mb-0 text-[21px] font-extrabold text-theme-1">{pillar.title}</h3>
                    <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-theme-2">
                      {pillar.label}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {chapters.map((chapter) => (
                      <ChapterCard
                        key={chapter.slug}
                        href={`/methode/${chapter.slug}`}
                        number={chapter.number}
                        title={chapter.title}
                        summary={chapter.summary}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. La feuille de route 30-60-90 */}
      <section className="bg-light-bg py-[70px]">
        <div className="auto-container">
          <SectionHead
            kicker="Le calendrier"
            title="Ce qui se passe dans les 90 premiers jours"
            intro="Cette trame sert de référence : elle s'ajuste au budget réel, à la capacité des équipes et aux contraintes de continuité d'activité."
          />
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {JALONS.map((jalon, i) => (
              <article
                key={jalon.periode}
                className="relative rounded-[14px] border border-[#e6e3dc] bg-white p-8"
              >
                <span className="absolute right-7 top-7 text-[34px] font-extrabold leading-none tabular-nums text-[#efece6]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mb-3 block text-[12px] font-bold uppercase tracking-[0.14em] text-theme-2">
                  {jalon.periode}
                </span>
                <h3 className="mb-3 text-[20px] font-extrabold text-theme-1">{jalon.titre}</h3>
                <p className="mb-0 text-[15px] leading-7 text-body-text">{jalon.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-white py-[70px]">
        <div className="auto-container">
          <SectionHead kicker="Questions fréquentes" title="Ce qu'on nous demande sur la méthode" />
          <div className="max-w-[880px]">
            <FaqAccordion items={METHODE_FAQ} />
          </div>
        </div>
      </section>

      {/* 8. La source */}
      <section className="bg-light-bg py-[70px]">
        <div className="auto-container">
          <div className="grid grid-cols-1 items-center gap-8 rounded-[14px] bg-white p-9 lg:grid-cols-[minmax(0,1fr)_260px]">
            <div>
              <SectionHead
                kicker="La source"
                title="Une méthodologie écrite, signée et vérifiable"
                as="h2"
              />
              <p className="mb-0 text-[15px] leading-8 text-body-text">
                Les 17 chapitres publiés ici sont issus et reformulés du cours professionnel
                « Digitalisation des Entreprises », Paul Maxime Dossou, édition août 2026, fondateur
                d&apos;Audyxa. Les exemples chiffrés, les grilles de notation et les formules
                proviennent du cours — rien n&apos;y est ajouté pour les besoins de la page.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/about"
                className="rounded-[6px] border border-[#e6e3dc] px-6 py-3 text-center text-[14px] font-bold text-theme-1 transition-colors duration-200 hover:border-theme-2 hover:text-theme-2"
              >
                Qui est derrière Audyxa
              </Link>
              <Link
                href="/services"
                className="rounded-[6px] bg-theme-2 px-6 py-3 text-center text-[14px] font-bold text-white transition-colors duration-200 hover:bg-theme-2-dark"
              >
                Voir nos services
              </Link>
              <Link
                href="/glossaire"
                className="rounded-[6px] border border-[#e6e3dc] px-6 py-3 text-center text-[14px] font-bold text-theme-1 transition-colors duration-200 hover:border-theme-2 hover:text-theme-2"
              >
                Consulter le glossaire
              </Link>
              <Link
                href="/guides"
                className="rounded-[6px] border border-[#e6e3dc] px-6 py-3 text-center text-[14px] font-bold text-theme-1 transition-colors duration-200 hover:border-theme-2 hover:text-theme-2"
              >
                Voir les guides pratiques
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title={
          <>
            Envie d&apos;appliquer cette méthode
            <br className="hidden min-[600px]:block" />
            à votre organisation ?
          </>
        }
        ctaHref="/contact"
        ctaLabel="Demander un diagnostic"
      />
    </main>
  );
}
