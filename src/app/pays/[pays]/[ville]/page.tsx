import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { PageTitle } from "@/components/page-title";
import { SectionTitle } from "@/components/section-title";
import { ThemeBtn } from "@/components/theme-btn";
import { CallToAction } from "@/components/call-to-action";
import { GEO_COUNTRIES, getCountry, getCity, getFlagshipCity } from "@/lib/geo-content";
import { SERVICES_DETAIL } from "@/lib/services-content";
import { SITE_URL } from "@/lib/site-config";
import { buildFaqJsonLd } from "@/lib/faq-schema";

export function generateStaticParams() {
  return GEO_COUNTRIES.flatMap((country) =>
    country.cities.filter((c) => !c.isFlagship).map((city) => ({ pays: country.slug, ville: city.slug }))
  );
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

  return {
    title: `Transformation digitale à ${city.name} | Audyxa`,
    description: `Audyxa accompagne les entreprises à ${city.name} (${country.name}) en conseil, automatisation, IA et développement d'outils métier, à distance, avec la même méthode qu'ailleurs.`,
    alternates: { canonical: `/pays/${country.slug}/${city.slug}` },
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

  const flagship = getFlagshipCity(country);
  const otherCities = country.cities.filter((c) => c.slug !== city.slug && !c.isFlagship).slice(0, 6);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Transformation digitale à ${city.name}`,
    provider: { "@type": "Organization", name: "Audyxa", url: SITE_URL },
    areaServed: `${city.name}, ${country.name}`,
    url: `${SITE_URL}/pays/${country.slug}/${city.slug}`,
  };

  const faqJsonLd = buildFaqJsonLd([
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
      <Script
        id="city-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="city-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Bannière */}
      <PageTitle
        title={`Transformation digitale à ${city.name}`}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: country.name, href: `/pays/${country.slug}` },
          { label: city.name },
        ]}
        currentPath={`/pays/${country.slug}/${city.slug}`}
      />

      {/* 2. Réponse directe — asymétrique */}
      <section className="pt-[90px] pb-[60px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                {country.name} — {country.region}
              </span>
              <h1 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[30px]">
                Transformation digitale à {city.name}
              </h1>
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
      <section className="bg-theme-3 pt-[60px] pb-[70px]">
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

      {/* 4. Pourquoi passer par le hub pays — asymétrique */}
      <section className="pt-[90px] pb-[70px]">
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
                className="inline-flex items-center rounded-[10px] bg-theme-2 px-[36px] py-[15px] text-base font-extrabold text-white transition-colors hover:bg-theme-2-dark"
              >
                Voir la page {country.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="bg-theme-3 pt-[70px] pb-[70px]">
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
        <section className="pt-[70px] pb-[70px]">
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
