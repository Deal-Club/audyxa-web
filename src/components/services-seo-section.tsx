import Link from "next/link";
import Script from "next/script";
import { DECISION_PAGES } from "@/lib/decision-content";
import { SECTOR_PAGES } from "@/lib/sector-content";
import { GEO_COUNTRIES } from "@/lib/geo-content";

interface ServiceDetail {
  id: string;
  title: string;
  paragraphs: string[];
}

/** id (local à cette section) -> slug réel de la page /services/[slug]. */
const SERVICE_SLUG_MAP: Record<string, string> = {
  "audit-diagnostic": "audit-diagnostic-digital",
  "refonte-processus": "refonte-processus",
  "automatisation-integrations": "automatisation-integrations",
  "ia-entreprise": "ia-entreprise",
  "outils-metier": "developpement-outils-metier",
  "pilotage-deploiement": "pilotage-deploiement",
};

const DECISION_LINKS = DECISION_PAGES.slice(0, 4).map((d) => ({ slug: d.slug, title: d.title }));
const SECTOR_LINKS = SECTOR_PAGES.slice(0, 8).map((s) => ({ slug: s.slug, name: s.name }));
const COUNTRY_LINKS = GEO_COUNTRIES.map((c) => ({ slug: c.slug, name: c.name }));

const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "audit-diagnostic",
    title: "Audit et diagnostic digital",
    paragraphs: [
      "Avant toute recommandation d'outil, nous cartographions le fonctionnement réel de l'entreprise : processus en place, outils déjà utilisés, points de friction et zones de perte de temps. Ce diagnostic évite les investissements technologiques qui ne répondent à aucun besoin vérifié.",
      "L'objectif est de faire ressortir un nombre limité de chantiers prioritaires, classés selon leur impact opérationnel et leur faisabilité, plutôt qu'une liste exhaustive de recommandations difficiles à mettre en œuvre.",
    ],
  },
  {
    id: "refonte-processus",
    title: "Refonte des processus métier",
    paragraphs: [
      "Beaucoup de lenteurs viennent de processus jamais remis à plat : étapes redondantes, doubles saisies, validations qui n'apportent plus rien. Nous analysons le fonctionnement actuel (AS-IS) avant de concevoir une version simplifiée (TO-BE).",
      "Cette étape précède toujours l'automatisation : automatiser un processus inefficace ne fait que reproduire le problème plus vite. Simplifier d'abord, automatiser ensuite.",
    ],
  },
  {
    id: "automatisation-integrations",
    title: "Automatisation et intégrations d'outils",
    paragraphs: [
      "Nous connectons les outils existants (CRM, ERP, messagerie, tableurs, plateformes métier) pour supprimer les transferts manuels de données et les tâches répétitives, via des outils comme n8n ou Make, ou des intégrations API sur mesure.",
      "Chaque automatisation est reliée à un objectif concret : réduire un délai, éviter une erreur récurrente, libérer du temps pour des tâches à plus forte valeur ajoutée.",
    ],
  },
  {
    id: "ia-entreprise",
    title: "Intelligence artificielle en entreprise",
    paragraphs: [
      "Nous déployons des cas d'usage IA ciblés sur des besoins réels : assistants internes pour répondre aux questions récurrentes, recherche documentaire dans une base de connaissance, synthèse de contenus longs, qualification de demandes entrantes.",
      "Chaque déploiement inclut des garde-fous et un point de validation humaine : l'IA accélère l'exécution, elle ne remplace pas le contrôle sur les décisions sensibles.",
    ],
  },
  {
    id: "outils-metier",
    title: "Développement d'outils métier",
    paragraphs: [
      "Quand aucun logiciel du marché ne correspond exactement au besoin, nous développons l'interface, le tableau de bord ou le portail qui manque : suivi d'activité, portail client, outil de pilotage interne.",
      "Ces outils sont conçus pour rester simples à utiliser et à maintenir, en priorité sur la fonctionnalité réellement utile plutôt que sur l'accumulation de fonctionnalités secondaires.",
    ],
  },
  {
    id: "pilotage-deploiement",
    title: "Pilotage et déploiement de la transformation",
    paragraphs: [
      "Une solution qui n'est pas adoptée sur le terrain n'a aucune valeur. Nous accompagnons la mise en œuvre, la formation des équipes et le suivi des premiers usages pour sécuriser l'adoption réelle.",
      "Le pilotage s'appuie sur des indicateurs définis en amont : temps gagné, erreurs évitées, qualité de la donnée, retour sur investissement du chantier engagé.",
    ],
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const SEO_FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quels types d'entreprises Audyxa accompagne-t-elle ?",
    answer:
      "Des PME et structures en croissance, en France et en Afrique francophone, qui veulent structurer leurs opérations, automatiser des tâches répétitives ou intégrer l'IA sans multiplier les outils inutiles.",
  },
  {
    question: "Par quel service commence-t-on généralement ?",
    answer:
      "Par un audit et diagnostic digital. C'est cette étape qui permet de savoir si le besoin réel relève d'une refonte de processus, d'une automatisation, d'un développement d'outil ou d'un cas d'usage IA.",
  },
  {
    question: "L'automatisation et l'IA sont-elles proposées séparément ?",
    answer:
      "Elles peuvent l'être, mais elles sont le plus souvent complémentaires : l'automatisation fluidifie les flux de données, l'IA intervient sur les tâches qui demandent une forme de compréhension ou de rédaction.",
  },
  {
    question: "Qui s'occupe du déploiement une fois la solution choisie ?",
    answer:
      "La même équipe qui a réalisé le diagnostic et la recommandation. Conseil et exécution restent réunis, sans intermédiaire ni passation vers un prestataire tiers.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SEO_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

/**
 * Section riche en contenu, positionnée sous la grille de services de
 * /services : sommaire sticky, développement détaillé de chaque service
 * (H2/H3) et FAQ avec balisage FAQPage JSON-LD, pour couvrir le SEO
 * classique et la visibilité dans les moteurs de réponse IA (AEO/GEO).
 */
export function ServicesSeoSection() {
  return (
    <section className="relative bg-theme-3 pt-[80px] pb-[90px]">
      <Script
        id="services-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <div className="auto-container">
        <div className="mx-auto mb-[60px] max-w-[860px] text-center">
          <span className="mb-4 inline-block text-[15px] font-semibold tracking-[0.18em] text-theme-2 uppercase">
            Comprendre nos services
          </span>
          <h2 className="mb-4 text-[26px] text-theme-1 [@media(min-width:600px)]:text-[34px] [@media(min-width:992px)]:text-[46px]">
            Le détail de chaque service de transformation digitale Audyxa
          </h2>
          <p className="mb-0 text-base leading-[30px] text-body-text">
            Chaque service ci-dessous s&apos;inscrit dans la même logique :
            comprendre le contexte avant de recommander, puis rester
            impliqué jusqu&apos;au résultat mesuré. Pour situer ces services
            dans notre démarche globale, consultez{" "}
            <Link href="/about" className="font-semibold text-theme-2 hover:underline">
              notre approche de la transformation digitale
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-wrap gap-y-10">
          {/* Sommaire sticky */}
          <div className="w-full lg:w-3/12 lg:pr-[30px]">
            <nav className="lg:sticky lg:top-[120px]" aria-label="Sommaire des services">
              <span className="mb-4 block text-sm font-extrabold tracking-[0.08em] text-theme-1 uppercase">
                Sommaire
              </span>
              <ul className="space-y-3 border-l-2 border-[#e2e2e2] text-sm leading-6">
                {SERVICE_DETAILS.map((service) => (
                  <li key={service.id}>
                    <a
                      href={`#${service.id}`}
                      className="block pl-4 text-body-text transition-colors hover:text-theme-2"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#questions-frequentes"
                    className="block pl-4 text-body-text transition-colors hover:text-theme-2"
                  >
                    Questions fréquentes
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contenu détaillé */}
          <div className="w-full lg:w-9/12">
            <div className="space-y-[50px]">
              {SERVICE_DETAILS.map((service) => (
                <div key={service.id} id={service.id} className="scroll-mt-[120px]">
                  <h3 className="mb-4 text-[22px] font-extrabold text-theme-1 [@media(min-width:600px)]:text-[28px] [@media(min-width:992px)]:text-[36px]">{service.title}</h3>
                  {service.paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-4 text-base leading-[30px] text-body-text last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-[50px]">
              <h3 className="mb-5 text-[18px] font-extrabold text-theme-1">
                Aller plus loin sur chaque service
              </h3>
              <div className="flex flex-wrap gap-3">
                {SERVICE_DETAILS.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${SERVICE_SLUG_MAP[service.id]}`}
                    className="rounded-full border border-[#e2e2e2] bg-white px-5 py-2 text-sm font-semibold text-theme-1 transition-colors hover:border-theme-2 hover:text-theme-2"
                  >
                    {service.title} →
                  </Link>
                ))}
              </div>
              <h3 className="mt-8 mb-5 text-[18px] font-extrabold text-theme-1">
                Des questions pour vous aider à choisir
              </h3>
              <div className="flex flex-wrap gap-3">
                {DECISION_LINKS.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/comparatifs/${d.slug}`}
                    className="rounded-full border border-[#e2e2e2] bg-white px-5 py-2 text-sm font-semibold text-theme-1 transition-colors hover:border-theme-2 hover:text-theme-2"
                  >
                    {d.title} →
                  </Link>
                ))}
              </div>
              <h3 className="mt-8 mb-5 text-[18px] font-extrabold text-theme-1">
                Par secteur d&apos;activité
              </h3>
              <div className="flex flex-wrap gap-3">
                {SECTOR_LINKS.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/secteurs/${s.slug}`}
                    className="rounded-full border border-[#e2e2e2] bg-white px-5 py-2 text-sm font-semibold text-theme-1 transition-colors hover:border-theme-2 hover:text-theme-2"
                  >
                    {s.name} →
                  </Link>
                ))}
              </div>
              <h3 className="mt-8 mb-5 text-[18px] font-extrabold text-theme-1">
                Zones desservies
              </h3>
              <div className="flex flex-wrap gap-3">
                {COUNTRY_LINKS.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/pays/${c.slug}`}
                    className="rounded-full border border-[#e2e2e2] bg-white px-5 py-2 text-sm font-semibold text-theme-1 transition-colors hover:border-theme-2 hover:text-theme-2"
                  >
                    {c.name} →
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-[50px] rounded-[16px] bg-white px-7 py-7 text-center shadow-[0_10px_60px_rgba(0,0,0,0.05)]">
              <p className="mb-4 text-base leading-7 text-theme-1">
                Un besoin ne correspond pas exactement à ces intitulés ? Discutons-en
                directement.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-[10px] bg-theme-2 px-[36px] py-[15px] text-base font-extrabold text-white transition-colors hover:bg-theme-2-dark"
              >
                Demander un diagnostic
              </Link>
            </div>

            {/* FAQ */}
            <div id="questions-frequentes" className="mt-[60px] scroll-mt-[120px]">
              <h3 className="mb-6 text-[22px] font-extrabold text-theme-1 [@media(min-width:600px)]:text-[28px] [@media(min-width:992px)]:text-[36px]">
                Questions fréquentes sur nos services
              </h3>
              <div className="space-y-4">
                {SEO_FAQ_ITEMS.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-[10px] border border-[#e2e2e2] bg-white px-6 py-5 open:shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
                  >
                    <summary className="cursor-pointer list-none text-[17px] font-bold text-theme-1 marker:content-none">
                      <span className="flex items-center justify-between gap-4">
                        {item.question}
                        <i className="fa fa-angle-down shrink-0 text-theme-2 transition-transform duration-300 group-open:rotate-180" />
                      </span>
                    </summary>
                    <p className="mt-3 mb-0 text-base leading-7 text-body-text">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
