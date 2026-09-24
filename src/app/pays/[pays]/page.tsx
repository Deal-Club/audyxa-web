import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageTitle } from "@/components/page-title";
import { SectionTitle } from "@/components/section-title";
import { ThemeBtn } from "@/components/theme-btn";
import { CallToAction } from "@/components/call-to-action";
import {
  GEO_COUNTRIES,
  getCountry,
  getFlagshipCity,
  getCountriesByRegion,
} from "@/lib/geo-content";
import { SERVICES_DETAIL } from "@/lib/services-content";
import { SITE_URL } from "@/lib/site-config";
import { buildFaqJsonLd } from "@/lib/faq-schema";

export function generateStaticParams() {
  return GEO_COUNTRIES.map((c) => ({ pays: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pays: string }>;
}): Promise<Metadata> {
  const { pays } = await params;
  const country = getCountry(pays);
  if (!country) return {};

  const preposition = country.preposition ?? "au";
  const description =
    country.metaDescription ??
    `Audyxa accompagne les entreprises ${preposition} ${country.name} en conseil, automatisation, IA et développement d'outils métier, avec la même méthode appliquée partout en Afrique francophone.`;

  const title = `Transformation digitale ${preposition} ${country.name} | Conseil, audit et automatisation`;
  return {
    title,
    description,
    alternates: { canonical: `/pays/${country.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/pays/${country.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** Date de dernière relecture éditoriale de ce gabarit pays (contenu, sources, FAQ). */
const LAST_REVIEWED = "2026-09-24";

export default async function CountryPage({
  params,
}: {
  params: Promise<{ pays: string }>;
}) {
  const { pays } = await params;
  const country = getCountry(pays);
  if (!country) notFound();

  const preposition = country.preposition ?? "au";
  // Heuristique valable pour les 8 pays d'Afrique de l'Ouest francophone couverts :
  // les noms précédés de "en" (Côte d'Ivoire, Guinée) sont féminins, les autres masculins.
  const articleLe = preposition === "en" ? "la" : "le";
  const articleDu = preposition === "en" ? "de la" : "du";
  const metaDescription =
    country.metaDescription ??
    `Audyxa accompagne les entreprises ${preposition} ${country.name} en conseil, automatisation, IA et développement d'outils métier.`;

  const flagship = getFlagshipCity(country);
  const secondaryCities = country.cities.filter((c) => !c.isFlagship);
  const sameRegion = getCountriesByRegion(country.region).filter((c) => c.slug !== country.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Transformation digitale ${preposition} ${country.name}`,
    provider: { "@type": "Organization", name: "Audyxa", url: SITE_URL },
    areaServed: country.name,
    url: `${SITE_URL}/pays/${country.slug}`,
  };

  // Schema Article/author (E-E-A-T) : le champ author.url cible la page fondateur prévue par
  // le plan SEO/GEO/AEO (§8, Agent 5). Si cette page n'existe pas encore au moment du build,
  // corriger ce lien une fois /auteur/paul-maxime-dossou publiée.
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Transformation digitale ${preposition} ${country.name}`,
    description: metaDescription,
    datePublished: LAST_REVIEWED,
    dateModified: LAST_REVIEWED,
    author: {
      "@type": "Person",
      name: "Paul Maxime Dossou",
      url: `${SITE_URL}/auteur/paul-maxime-dossou`,
    },
    publisher: { "@type": "Organization", name: "Audyxa", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/pays/${country.slug}`,
  };

  const faqItems = [
    {
      question: `Audyxa a-t-il une équipe présente ${preposition} ${country.name} ?`,
      answer:
        "Non, nous intervenons à distance depuis notre équipe centrale, avec la même méthode que sur nos autres marchés. Cela nous permet de garantir une qualité constante sans multiplier les partenaires locaux.",
    },
    {
      question: `Dans quelle monnaie sont établis les devis pour ${articleLe} ${country.name} ?`,
      answer: `Nous en discutons directement avec vous selon votre contexte : ${articleLe} ${country.name} utilise le ${country.currency}, ce point est cadré dès le premier échange.`,
    },
    {
      question: `Intervenez-vous dans toutes les villes ${articleDu} ${country.name} ?`,
      answer: `Notre intervention à distance couvre l'ensemble ${articleDu} ${country.name}, avec un point de référence sur ${flagship.name} où se concentre le plus de demandes.`,
    },
    {
      question: "Par quel service commencer ?",
      answer:
        "Généralement par un audit et diagnostic digital, qui permet de savoir si le besoin réel relève d'une automatisation, d'un développement d'outil ou d'un cas d'usage IA.",
    },
    ...(country.mobileMoney
      ? [
          {
            question: `Quelle solution de mobile money faut-il prendre en compte ${preposition} ${country.name} ?`,
            answer: `${country.mobileMoney.text} (Source : ${country.mobileMoney.source}.) Nous en tenons compte dès le cadrage de toute intégration paiement, CRM ou ERP.`,
          },
        ]
      : []),
  ];

  const faqJsonLd = buildFaqJsonLd(faqItems);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Bannière */}
      <PageTitle
        title={`Transformation digitale ${preposition} ${country.name}`}
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Zones d'intervention", href: "/pays" }, { label: country.name }]}
        currentPath={`/pays/${country.slug}`}
      />

      {/* 2. Réponse directe (résumé, cf. §4.1 du plan GEO/AEO) */}
      <section className="pt-[60px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                {country.region} - {country.currency}
              </span>
              <h2 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[30px]">
                {`Transformation digitale ${preposition} ${country.name} : conseil et exécution pour vos entreprises`}
              </h2>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-[40px]">
              <p className="mb-6 text-[19px] leading-9 text-theme-1">
                {`En résumé : `}Audyxa accompagne les entreprises {preposition} {country.name} dans leur
                transformation digitale : audit de maturité, automatisation des processus,
                intégration de l&apos;intelligence artificielle, CRM/ERP. Notre équipe intervient à
                distance, avec un diagnostic sur mesure adapté au contexte économique local.
              </p>
              <ThemeBtn href="/contact">Demander un diagnostic</ThemeBtn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Zone couverte, sans fausse implantation */}
      <section className="bg-theme-3 pt-[50px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[40px]">
              <SectionTitle subTitle="Zone couverte" title={`Comment nous intervenons ${preposition} ${country.name}`} className="mb-0" />
            </div>
            <div className="w-full lg:w-8/12">
              <p className="mb-0 text-base leading-8 text-body-text">
                Audyxa n&apos;a pas de bureau physique {preposition} {country.name} : notre
                intervention se fait à distance, avec la possibilité d&apos;échanges ponctuels
                organisés selon les besoins de la mission. Cette approche nous permet
                d&apos;appliquer la même méthode et les mêmes standards de qualité sur
                l&apos;ensemble des marchés que nous couvrons, sans dépendre d&apos;un partenaire
                local différent à chaque pays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3bis. Contexte digital du pays : chiffres sourcés (cf. §4.4) + mobile money */}
      {country.marketContext ? (
        <section className="pt-[60px] pb-[50px]">
          <div className="auto-container">
            <div className="flex flex-wrap gap-y-8">
              <div className="w-full lg:w-4/12 lg:pr-[40px]">
                <SectionTitle
                  subTitle="Contexte digital"
                  title={`Ce que disent les études sur ${articleLe} ${country.name}`}
                  className="mb-0"
                />
              </div>
              <div className="w-full lg:w-8/12">
                <p className="mb-8 text-base leading-8 text-body-text">{country.marketContext.intro}</p>

                {/* Tableau comparatif des indicateurs sourcés (format privilégié pour l'AEO, cf. §4.3) */}
                <div className="mb-8 overflow-x-auto rounded-[14px] border border-[#e2e2e2]">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-theme-1 text-white">
                        <th scope="col" className="px-5 py-4 font-semibold">Indicateur</th>
                        <th scope="col" className="px-5 py-4 font-semibold">Valeur</th>
                        <th scope="col" className="px-5 py-4 font-semibold">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {country.marketContext.stats.map((stat, i) => (
                        <tr key={stat.label} className={i % 2 === 0 ? "bg-white" : "bg-theme-3"}>
                          <td className="px-5 py-4 align-top text-theme-1">{stat.label}</td>
                          <td className="px-5 py-4 align-top font-extrabold whitespace-nowrap text-theme-2">{stat.value}</td>
                          <td className="px-5 py-4 align-top text-xs italic text-body-text">{stat.source}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {country.marketContext.obstacle ? (
                  <p className="mb-0 border-l-[3px] border-theme-2 bg-theme-3 px-5 py-4 text-sm leading-7 text-theme-1">
                    {country.marketContext.obstacle}
                  </p>
                ) : null}

                {country.mobileMoney ? (
                  <p className="mt-6 mb-0 text-base leading-8 text-body-text">
                    <strong className="text-theme-1">Mobile money : </strong>
                    {country.mobileMoney.text} (Source : {country.mobileMoney.source}.)
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* 4. Nos services : recap riche en contenu, lien contextuel vers chacun des 6 services */}
      <section className="pt-[60px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[40px]">
              <SectionTitle
                subTitle="Nos services"
                title={`Ce que nous proposons aux entreprises ${preposition} ${country.name}`}
                className="mb-0"
              />
            </div>
            <div className="w-full lg:w-8/12">
              <p className="mb-0 text-base leading-8 text-body-text">
                {preposition === "en" ? "En" : "Au"} {country.name} comme sur nos autres marchés, notre
                accompagnement couvre l&apos;{" "}
                <Link href="/services/audit-diagnostic-digital" className="font-semibold text-theme-2 hover:underline">audit et diagnostic digital</Link>,
                {" "}la <Link href="/services/refonte-processus" className="font-semibold text-theme-2 hover:underline">refonte des processus métier</Link>,
                {" "}l&apos;<Link href="/services/automatisation-integrations" className="font-semibold text-theme-2 hover:underline">automatisation et les intégrations</Link>,
                {" "}l&apos;<Link href="/services/ia-entreprise" className="font-semibold text-theme-2 hover:underline">intelligence artificielle en entreprise</Link>,
                {" "}le <Link href="/services/developpement-outils-metier" className="font-semibold text-theme-2 hover:underline">développement d&apos;outils métier</Link> et
                {" "}le <Link href="/services/pilotage-deploiement" className="font-semibold text-theme-2 hover:underline">pilotage et déploiement</Link> de la transformation.
                Chaque mission commence par le même diagnostic, détaillé dans notre{" "}
                <Link href="/methode" className="font-semibold text-theme-2 hover:underline">méthode complète</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4bis. Secteurs accompagnés : maillage vers /secteurs/*, contextualisé par pays */}
      {country.sectorHighlights ? (
        <section className="bg-theme-3 pt-[50px] pb-[50px]">
          <div className="auto-container">
            <SectionTitle
              subTitle="Nos secteurs"
              title={`Secteurs que nous accompagnons ${preposition} ${country.name}`}
              className="mb-[40px] max-w-[820px]"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-[14px] border border-[#e2e2e2] bg-white p-6">
                <h3 className="mb-3 text-[18px] font-extrabold text-theme-1">
                  <Link href="/secteurs/banque-et-finance" className="hover:text-theme-2">
                    Banque et finance
                  </Link>
                </h3>
                <p className="mb-0 text-sm leading-6 text-body-text">{country.sectorHighlights.comptables}</p>
              </div>
              <div className="rounded-[14px] border border-[#e2e2e2] bg-white p-6">
                <h3 className="mb-3 text-[18px] font-extrabold text-theme-1">
                  <Link href="/secteurs/retail-et-distribution" className="hover:text-theme-2">
                    Retail et distribution
                  </Link>
                </h3>
                <p className="mb-0 text-sm leading-6 text-body-text">{country.sectorHighlights.importExport}</p>
              </div>
              <div className="rounded-[14px] border border-[#e2e2e2] bg-white p-6">
                <h3 className="mb-3 text-[18px] font-extrabold text-theme-1">
                  <Link href="/secteurs/education-et-formation" className="hover:text-theme-2">
                    Éducation et formation
                  </Link>
                </h3>
                <p className="mb-0 text-sm leading-6 text-body-text">{country.sectorHighlights.education}</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/secteurs" className="font-semibold text-theme-2 hover:underline">
                Voir tous les secteurs accompagnés par Audyxa →
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {/* 5. Ville phare */}
      <section className={country.sectorHighlights ? "pt-[60px] pb-[50px]" : "bg-theme-3 pt-[50px] pb-[50px]"}>
        <div className="auto-container">
          <SectionTitle
            subTitle="Ville principale"
            title={`Nos services à ${flagship.name}`}
            className="mb-[40px] max-w-[760px]"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_DETAIL.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/${country.slug}/${flagship.slug}`}
                className="group flex items-center gap-4 rounded-[14px] border border-[#e2e2e2] bg-white p-5 transition-all duration-300 hover:-translate-y-[4px] hover:border-theme-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-theme-3 transition-colors group-hover:bg-theme-2">
                  <i className={`${service.icon} text-[20px] text-theme-2 transition-colors group-hover:text-white`} />
                </div>
                <span className="font-semibold text-theme-1 group-hover:text-theme-2">{service.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Villes d'intervention (autres villes du pays) */}
      <section className="bg-theme-1 pt-[50px] pb-[50px]">
        <div className="auto-container">
          <SectionTitle
            light
            subTitle="Villes d'intervention"
            title={`Les autres villes ${articleDu} ${country.name} que nous couvrons`}
            className="mb-[40px] max-w-[760px]"
          />
          <div className="flex flex-wrap gap-3">
            {secondaryCities.map((city) => (
              <Link
                key={city.slug}
                href={`/pays/${country.slug}/${city.slug}`}
                className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/85 transition-colors hover:border-theme-2 hover:text-theme-2"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ : 3 à 5 questions spécifiques au pays + schema FAQPage natif */}
      <section className="pt-[60px] pb-[50px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Questions fréquentes"
            title={`Travailler avec Audyxa ${preposition} ${country.name}`}
            className="mb-[50px] max-w-[820px]"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group h-fit rounded-[10px] border border-[#e2e2e2] bg-white px-6 py-5 open:shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
              >
                <summary className="cursor-pointer list-none text-[17px] font-bold text-theme-1 marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <i className="fa fa-angle-down shrink-0 text-theme-2 transition-transform duration-300 group-open:rotate-180" />
                  </span>
                </summary>
                <p className="mt-3 mb-0 text-base leading-7 text-body-text">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Autres pays de la région (maillage bidirectionnel, cf. §3.5) */}
      {sameRegion.length > 0 ? (
        <section className="bg-theme-3 pt-[50px] pb-[50px]">
          <div className="auto-container">
            <SectionTitle
              subTitle="Voir aussi"
              title={`D'autres pays d'intervention en ${country.region}`}
              className="mb-[40px] max-w-[760px]"
            />
            <div className="flex flex-wrap gap-3">
              {sameRegion.map((other) => (
                <Link
                  key={other.slug}
                  href={`/pays/${other.slug}`}
                  className="rounded-full border border-[#e2e2e2] bg-white px-5 py-2 text-sm font-semibold text-theme-1 transition-colors hover:text-theme-2"
                >
                  {other.name}
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/pays" className="font-semibold text-theme-2 hover:underline">
                Voir toutes nos zones d&apos;intervention →
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {/* 9. CTA final */}
      <CallToAction
        title={
          <>
            Prêt à cadrer votre transformation digitale
            <br className="hidden min-[600px]:block" />
            {`${preposition} ${country.name} ?`}
          </>
        }
        ctaHref="/contact"
        ctaLabel="Demander un diagnostic"
      />
    </main>
  );
}
