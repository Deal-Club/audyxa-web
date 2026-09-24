import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageTitle } from "@/components/page-title";
import { SectionTitle } from "@/components/section-title";
import { ThemeBtn } from "@/components/theme-btn";
import { CallToAction } from "@/components/call-to-action";
import { GEO_COUNTRIES, getCountry, getCity, getFlagshipCity } from "@/lib/geo-content";
import { SERVICES_DETAIL } from "@/lib/services-content";
import { SITE_URL } from "@/lib/site-config";
import { buildFaqJsonLd } from "@/lib/faq-schema";
import { VILLES_CONTENT, getVilleContent } from "./villes-content";

/**
 * Page ville `/pays/[pays]/[ville]` : Phase 4 du plan SEO/GEO/AEO (Agent 3).
 *
 * Deux chemins de rendu :
 * - Les 14 villes listées dans `villes-content.ts` reçoivent le gabarit riche
 *   de la section 6 du plan (résumé direct, coup d'œil chiffré et sourcé,
 *   cas d'usage locaux, FAQ, lien retour vers la page pays).
 * - Les autres villes du catalogue `geo-content.ts` conservent le gabarit
 *   générique existant, non modifié dans son contenu (hors périmètre de
 *   cet agent).
 *
 * Tout le JSON-LD de ce fichier est injecté via une balise <script> native
 * (jamais via le composant <Script> de next/script, invisible aux robots
 * qui n'exécutent pas JavaScript). `PageTitle` est appelé sans `currentPath`
 * pour éviter son propre BreadcrumbList (généré via next/script) : le
 * BreadcrumbList natif ci-dessous le remplace pour cette page.
 */

export function generateStaticParams() {
  const generic = GEO_COUNTRIES.flatMap((country) =>
    country.cities.filter((c) => !c.isFlagship).map((city) => ({ pays: country.slug, ville: city.slug }))
  );
  const seen = new Set(generic.map((g) => `${g.pays}/${g.ville}`));
  const curated = VILLES_CONTENT.map((v) => ({ pays: v.paysSlug, ville: v.villeSlug })).filter(
    (v) => !seen.has(`${v.pays}/${v.ville}`)
  );
  return [...generic, ...curated];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pays: string; ville: string }>;
}): Promise<Metadata> {
  const { pays, ville } = await params;
  const country = getCountry(pays);
  const city = country ? getCity(country, ville) : undefined;
  if (!country || !city) return {};

  const curated = getVilleContent(pays, ville);

  if (curated) {
    const title = `Consultant en transformation digitale à ${city.name} | Audit, automatisation, IA`;
    return {
      title,
      description: curated.metaDescription,
      alternates: { canonical: `/pays/${country.slug}/${city.slug}` },
      openGraph: {
        title,
        description: curated.metaDescription,
        url: `${SITE_URL}/pays/${country.slug}/${city.slug}`,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: curated.metaDescription,
      },
    };
  }

  const genericTitle = `Transformation digitale à ${city.name}`;
  const genericDescription = `Audyxa accompagne les entreprises à ${city.name} (${country.name}) en conseil, automatisation, IA et développement d'outils métier, à distance, avec la même méthode qu'ailleurs.`;
  return {
    title: genericTitle,
    description: genericDescription,
    alternates: { canonical: `/pays/${country.slug}/${city.slug}` },
    openGraph: {
      title: genericTitle,
      description: genericDescription,
      url: `${SITE_URL}/pays/${country.slug}/${city.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: genericTitle,
      description: genericDescription,
    },
  };
}

export default async function CityHubPage({
  params,
}: {
  params: Promise<{ pays: string; ville: string }>;
}) {
  const { pays, ville } = await params;
  const country = getCountry(pays);
  const city = country ? getCity(country, ville) : undefined;
  if (!country || !city) notFound();

  const curated = getVilleContent(pays, ville);

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: country.name, href: `/pays/${country.slug}` },
    { label: city.name },
  ];
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: `${SITE_URL}${crumb.href ?? `/pays/${country.slug}/${city.slug}`}`,
    })),
  };

  // ------------------------------------------------------------ GABARIT RICHE
  if (curated) {
    const serviceJsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Transformation digitale à ${city.name}`,
      provider: { "@type": "Organization", name: "Audyxa", url: SITE_URL },
      areaServed: `${city.name}, ${country.name}`,
      url: `${SITE_URL}/pays/${country.slug}/${city.slug}`,
    };
    const faqJsonLd = buildFaqJsonLd(curated.faq);

    return (
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* 1. Bannière */}
        <PageTitle title={`Cabinet de transformation digitale à ${city.name}`} breadcrumbs={breadcrumbs} />

        {/* 2. En résumé (réponse directe, règle des "30% supérieurs") */}
        <section className="pt-[60px] pb-[50px]">
          <div className="auto-container">
            <div className="flex flex-wrap items-center gap-y-8">
              <div className="w-full lg:w-4/12 lg:pr-[30px]">
                <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                  {city.name}, {country.name}
                </span>
                <h2 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[30px]">
                  Cabinet de transformation digitale à {city.name}
                </h2>
              </div>
              <div className="w-full lg:w-8/12 lg:pl-[40px]">
                <div className="rounded-[14px] border border-[#e2e2e2] bg-theme-3 px-6 py-5">
                  <span className="mb-2 inline-block text-[12px] font-bold tracking-[0.15em] text-theme-2 uppercase">
                    En résumé
                  </span>
                  <p className="mb-0 text-[17px] leading-8 text-theme-1">{curated.resume}</p>
                </div>
                <div className="mt-6">
                  <ThemeBtn href="/contact">Demander un diagnostic</ThemeBtn>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. [Ville] en un coup d'œil */}
        <section className="bg-theme-3 pt-[50px] pb-[50px]">
          <div className="auto-container">
            <div className="flex flex-wrap gap-y-8">
              <div className="w-full lg:w-4/12 lg:pr-[40px]">
                <SectionTitle subTitle="Contexte local" title={`${city.name} en un coup d'œil`} className="mb-0" />
              </div>
              <div className="w-full lg:w-8/12">
                {curated.coupDoeil.map((paragraph, i) => (
                  <p key={i} className="mb-4 text-base leading-8 text-body-text last:mb-0">
                    {paragraph}
                  </p>
                ))}
                {curated.faits.length > 0 ? (
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {curated.faits.map((fait) => (
                      <div key={fait.label} className="rounded-[14px] border border-[#e2e2e2] bg-white p-5">
                        <div className="mb-2 text-[26px] font-extrabold leading-none text-theme-2">{fait.value}</div>
                        <p className="mb-2 text-sm leading-6 text-theme-1">{fait.label}</p>
                        <p className="mb-0 text-xs italic text-body-text">{fait.source}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Ce que nous faisons à [Ville] */}
        <section className="pt-[60px] pb-[50px]">
          <div className="auto-container">
            <SectionTitle
              subTitle="Nos missions locales"
              title={`Ce que nous faisons à ${city.name}`}
              className="mb-[40px] max-w-[820px]"
            />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {curated.casUsage.map((uc) => (
                <div key={uc.titre} className="rounded-[14px] border border-[#e2e2e2] bg-white p-6">
                  <h3 className="mb-3 text-[18px] font-bold text-theme-1">{uc.titre}</h3>
                  <p className="mb-0 text-sm leading-7 text-body-text">
                    {uc.texte}{" "}
                    <Link href={`/services/${uc.serviceSlug}`} className="font-semibold text-theme-2 hover:underline">
                      {uc.serviceAnchor}
                    </Link>
                    {uc.sectorSlug ? (
                      <>
                        {" "}
                        et notre expertise en{" "}
                        <Link
                          href={`/secteurs/${uc.sectorSlug}`}
                          className="font-semibold text-theme-2 hover:underline"
                        >
                          {uc.sectorAnchor}
                        </Link>
                        .
                      </>
                    ) : uc.methodeSlug ? (
                      <>
                        {" "}
                        détaillé dans notre chapitre méthode{" "}
                        <Link
                          href={`/methode/${uc.methodeSlug}`}
                          className="font-semibold text-theme-2 hover:underline"
                        >
                          {uc.methodeAnchor}
                        </Link>
                        .
                      </>
                    ) : (
                      "."
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FAQ locale */}
        <section className="bg-theme-3 pt-[50px] pb-[50px]">
          <div className="auto-container">
            <SectionTitle
              subTitle="Questions fréquentes"
              title={`Travailler avec Audyxa à ${city.name}`}
              className="mb-[40px] max-w-[820px]"
            />
            <div className="grid grid-cols-1 gap-4">
              {curated.faq.map((item) => (
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

        {/* 6. Lien retour vers la page pays parente + CTA */}
        <section className="pt-[60px] pb-[50px]">
          <div className="auto-container">
            <div className="flex flex-wrap items-center gap-y-8 rounded-[14px] bg-theme-1 p-8 lg:p-10">
              <div className="w-full lg:w-7/12 lg:pr-[30px]">
                <h2 className="mb-4 text-[22px] font-extrabold text-white [@media(min-width:768px)]:text-[26px]">
                  Retrouvez le détail complet pour le {country.name}
                </h2>
                <p className="mb-0 text-base leading-7 text-white/80">
                  Notre approche pour {city.name} s&apos;inscrit dans notre zone de couverture{" "}
                  {country.name}, présentée en détail sur notre page{" "}
                  <Link href={`/pays/${country.slug}`} className="font-semibold text-theme-2 hover:underline">
                    transformation digitale au {country.name}
                  </Link>
                  , avec un service par service et le reste des villes couvertes dans le pays.
                </p>
              </div>
              <div className="w-full lg:w-5/12 lg:pl-[20px]">
                <Link
                  href={`/pays/${country.slug}`}
                  className="inline-flex items-center rounded-[10px] bg-theme-2-cta px-[36px] py-[15px] text-base font-extrabold text-white transition-colors hover:bg-theme-2-cta-dark"
                >
                  Voir la page {country.name}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CallToAction
          title={
            <>
              Discutons de votre contexte
              <br className="hidden min-[600px]:block" />
              {`à ${city.name}.`}
            </>
          }
          ctaHref="/contact"
          ctaLabel="Demander un diagnostic"
        />
      </main>
    );
  }

  // --------------------------------------------------------- GABARIT GÉNÉRIQUE
  // Villes hors périmètre de l'agent "Pages Villes" (hors des 14 listées dans
  // le plan) : contenu inchangé, uniquement le vecteur JSON-LD est corrigé
  // (balise <script> native au lieu de next/script, cf. règle non négociable).
  const flagship = getFlagshipCity(country);
  const otherCities = country.cities.filter((c) => c.slug !== city.slug && !c.isFlagship).slice(0, 6);

  const genericServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Transformation digitale à ${city.name}`,
    provider: { "@type": "Organization", name: "Audyxa", url: SITE_URL },
    areaServed: `${city.name}, ${country.name}`,
    url: `${SITE_URL}/pays/${country.slug}/${city.slug}`,
  };

  const genericFaqJsonLd = buildFaqJsonLd([
    {
      question: `Comment se déroule une mission à ${city.name} ?`,
      answer: `Exactement comme sur nos autres marchés : un diagnostic à distance, une note de cadrage, puis un déploiement suivi de points réguliers, sans nécessiter de présence physique à ${city.name}.`,
    },
    {
      question: `Pourquoi consulter la page ${country.name} en plus de celle-ci ?`,
      answer: `La page ${country.name} détaille chaque service individuellement pour ${flagship.name} ; cette page-ci sert de point d'entrée pour ${city.name} et le reste de la zone desservie.`,
    },
  ]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(genericServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(genericFaqJsonLd) }}
      />

      {/* 1. Bannière */}
      <PageTitle title={`Transformation digitale à ${city.name}`} breadcrumbs={breadcrumbs} />

      {/* 2. Réponse directe (asymétrique) */}
      <section className="pt-[60px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                {country.name}, {country.region}
              </span>
              <h2 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[30px]">
                Transformation digitale à {city.name}
              </h2>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-[40px]">
              <p className="mb-6 text-[19px] leading-9 text-theme-1">
                Audyxa accompagne les entreprises de {city.name} à distance, avec la même méthode de
                diagnostic et de déploiement appliquée sur l&apos;ensemble de notre zone
                d&apos;intervention : audit, automatisation, intelligence artificielle et développement
                d&apos;outils métier.
              </p>
              <ThemeBtn href="/contact">Demander un diagnostic</ThemeBtn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Nos services */}
      <section className="bg-theme-3 pt-[50px] pb-[50px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Nos services"
            title={`Ce que nous proposons aux entreprises de ${city.name}`}
            className="mb-[40px] max-w-[820px]"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_DETAIL.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
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

      {/* 4. Pourquoi passer par le hub pays (asymétrique) */}
      <section className="pt-[60px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8 rounded-[14px] bg-theme-1 p-8 lg:p-10">
            <div className="w-full lg:w-7/12 lg:pr-[30px]">
              <h2 className="mb-4 text-[22px] font-extrabold text-white [@media(min-width:768px)]:text-[26px]">
                Retrouvez le détail complet pour le {country.name}
              </h2>
              <p className="mb-0 text-base leading-7 text-white/80">
                Notre approche pour {city.name} s&apos;inscrit dans notre zone de couverture{" "}
                {country.name}, présentée en détail sur notre page pays, avec un focus service par
                service sur {flagship.name}, la ville où se concentre le plus de demandes.
              </p>
            </div>
            <div className="w-full lg:w-5/12 lg:pl-[20px]">
              <Link
                href={`/pays/${country.slug}`}
                className="inline-flex items-center rounded-[10px] bg-theme-2-cta px-[36px] py-[15px] text-base font-extrabold text-white transition-colors hover:bg-theme-2-cta-dark"
              >
                Voir la page {country.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="bg-theme-3 pt-[50px] pb-[50px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Questions fréquentes"
            title={`Travailler avec Audyxa à ${city.name}`}
            className="mb-[50px] max-w-[820px]"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
            <details className="group h-fit rounded-[10px] border border-[#e2e2e2] bg-white px-6 py-5 open:shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <summary className="cursor-pointer list-none text-[17px] font-bold text-theme-1 marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {`Comment se déroule une mission à ${city.name} ?`}
                  <i className="fa fa-angle-down shrink-0 text-theme-2 transition-transform duration-300 group-open:rotate-180" />
                </span>
              </summary>
              <p className="mt-3 mb-0 text-base leading-7 text-body-text">
                {`Exactement comme sur nos autres marchés : un diagnostic à distance, une note de cadrage, puis un déploiement suivi de points réguliers, sans nécessiter de présence physique à ${city.name}.`}
              </p>
            </details>
            <details className="group h-fit rounded-[10px] border border-[#e2e2e2] bg-white px-6 py-5 open:shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <summary className="cursor-pointer list-none text-[17px] font-bold text-theme-1 marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  Pourquoi consulter la page {country.name} en plus de celle-ci ?
                  <i className="fa fa-angle-down shrink-0 text-theme-2 transition-transform duration-300 group-open:rotate-180" />
                </span>
              </summary>
              <p className="mt-3 mb-0 text-base leading-7 text-body-text">
                {`La page ${country.name} détaille chaque service individuellement pour ${flagship.name} ; cette page-ci sert de point d'entrée pour ${city.name} et le reste de la zone desservie.`}
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 6. Autres villes du pays */}
      {otherCities.length > 0 ? (
        <section className="pt-[50px] pb-[50px]">
          <div className="auto-container">
            <SectionTitle
              subTitle="Zone desservie"
              title={`D'autres villes du ${country.name}`}
              className="mb-[40px] max-w-[760px]"
            />
            <div className="flex flex-wrap gap-3">
              {otherCities.map((other) => (
                <Link
                  key={other.slug}
                  href={`/pays/${country.slug}/${other.slug}`}
                  className="rounded-full border border-[#e2e2e2] bg-white px-5 py-2 text-sm font-semibold text-theme-1 transition-colors hover:text-theme-2"
                >
                  {other.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 7. CTA final */}
      <CallToAction
        title={
          <>
            Discutons de votre contexte
            <br className="hidden min-[600px]:block" />
            {`à ${city.name}.`}
          </>
        }
        ctaHref="/contact"
        ctaLabel="Demander un diagnostic"
      />
    </main>
  );
}
