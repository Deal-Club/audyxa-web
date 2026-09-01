import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
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

  return {
    title: `Transformation digitale ${country.name} | Audyxa`,
    description: `Audyxa accompagne les entreprises au ${country.name} en conseil, automatisation, IA et développement d'outils métier, avec la même méthode appliquée partout en Afrique francophone et en Europe francophone.`,
    alternates: { canonical: `/pays/${country.slug}` },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ pays: string }>;
}) {
  const { pays } = await params;
  const country = getCountry(pays);
  if (!country) notFound();

  const flagship = getFlagshipCity(country);
  const secondaryCities = country.cities.filter((c) => !c.isFlagship);
  const sameRegion = getCountriesByRegion(country.region).filter((c) => c.slug !== country.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Transformation digitale au ${country.name}`,
    provider: { "@type": "Organization", name: "Audyxa", url: SITE_URL },
    areaServed: country.name,
    url: `${SITE_URL}/pays/${country.slug}`,
  };

  return (
    <main>
      <Script
        id="country-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* 1. Bannière */}
      <PageTitle
        title={`Transformation digitale au ${country.name}`}
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Zones d'intervention", href: "/pays" }, { label: country.name }]}
        currentPath={`/pays/${country.slug}`}
      />

      {/* 2. Réponse directe — asymétrique */}
      <section className="pt-[90px] pb-[60px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                {country.region} — {country.currency}
              </span>
              <h1 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[30px]">
                Transformation digitale au {country.name}
              </h1>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-[40px]">
              <p className="mb-6 text-[19px] leading-9 text-theme-1">
                Audyxa accompagne les entreprises au {country.name} avec la même méthode qu&apos;en
                France : diagnostic de maturité, automatisation, intelligence artificielle et
                développement d&apos;outils métier. Notre équipe intervient à distance, avec des points
                réguliers organisés selon le fuseau horaire et la disponibilité de vos équipes.
              </p>
              <ThemeBtn href="/contact">Demander un diagnostic</ThemeBtn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Zone couverte, sans fausse implantation — asymétrique */}
      <section className="bg-theme-3 pt-[60px] pb-[70px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[40px]">
              <SectionTitle subTitle="Zone couverte" title={`Comment nous intervenons au ${country.name}`} className="mb-0" />
            </div>
            <div className="w-full lg:w-8/12">
              <p className="mb-0 text-base leading-8 text-body-text">
                Audyxa n&apos;a pas de bureau physique au {country.name} : notre intervention se fait à
                distance, avec la possibilité d&apos;échanges ponctuels organisés selon les besoins de la
                mission. Cette approche nous permet d&apos;appliquer la même méthode et les mêmes standards
                de qualité sur l&apos;ensemble des marchés que nous couvrons, sans dépendre d&apos;un
                partenaire local différent à chaque pays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Nos services — recap riche en contenu */}
      <section className="pt-[90px] pb-[70px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[40px]">
              <SectionTitle
                subTitle="Nos services"
                title={`Ce que nous proposons aux entreprises du ${country.name}`}
                className="mb-0"
              />
            </div>
            <div className="w-full lg:w-8/12">
              <p className="mb-0 text-base leading-8 text-body-text">
                Au {country.name} comme sur nos autres marchés, notre accompagnement couvre l&apos;{" "}
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

      {/* 5. Ville phare */}
      <section className="bg-theme-3 pt-[70px] pb-[70px]">
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

      {/* 6. Autres villes */}
      <section className="bg-theme-1 pt-[70px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle
            light
            subTitle="Zone desservie"
            title={`Autres villes du ${country.name}`}
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

      {/* 7. FAQ — deux colonnes */}
      <section className="pt-[90px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Questions fréquentes"
            title={`Travailler avec Audyxa au ${country.name}`}
            className="mb-[50px] max-w-[820px]"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
            <details className="group h-fit rounded-[10px] border border-[#e2e2e2] bg-white px-6 py-5 open:shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <summary className="cursor-pointer list-none text-[17px] font-bold text-theme-1 marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {`Audyxa a-t-il une équipe présente au ${country.name} ?`}
                  <i className="fa fa-angle-down shrink-0 text-theme-2 transition-transform duration-300 group-open:rotate-180" />
                </span>
              </summary>
              <p className="mt-3 mb-0 text-base leading-7 text-body-text">
                {`Non, nous intervenons à distance depuis notre équipe centrale, avec la même méthode que sur nos autres marchés. Cela nous permet de garantir une qualité constante sans multiplier les partenaires locaux.`}
              </p>
            </details>
            <details className="group h-fit rounded-[10px] border border-[#e2e2e2] bg-white px-6 py-5 open:shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <summary className="cursor-pointer list-none text-[17px] font-bold text-theme-1 marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {`Dans quelle monnaie sont établis les devis pour le ${country.name} ?`}
                  <i className="fa fa-angle-down shrink-0 text-theme-2 transition-transform duration-300 group-open:rotate-180" />
                </span>
              </summary>
              <p className="mt-3 mb-0 text-base leading-7 text-body-text">
                {`Nous en discutons directement avec vous selon votre contexte — le ${country.name} utilise le ${country.currency}, ce point est cadré dès le premier échange.`}
              </p>
            </details>
            <details className="group h-fit rounded-[10px] border border-[#e2e2e2] bg-white px-6 py-5 open:shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <summary className="cursor-pointer list-none text-[17px] font-bold text-theme-1 marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {`Intervenez-vous dans toutes les villes du ${country.name} ?`}
                  <i className="fa fa-angle-down shrink-0 text-theme-2 transition-transform duration-300 group-open:rotate-180" />
                </span>
              </summary>
              <p className="mt-3 mb-0 text-base leading-7 text-body-text">
                {`Notre intervention à distance couvre l'ensemble du ${country.name}, avec un point de référence sur ${flagship.name} où se concentre le plus de demandes.`}
              </p>
            </details>
            <details className="group h-fit rounded-[10px] border border-[#e2e2e2] bg-white px-6 py-5 open:shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <summary className="cursor-pointer list-none text-[17px] font-bold text-theme-1 marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  Par quel service commencer ?
                  <i className="fa fa-angle-down shrink-0 text-theme-2 transition-transform duration-300 group-open:rotate-180" />
                </span>
              </summary>
              <p className="mt-3 mb-0 text-base leading-7 text-body-text">
                Généralement par un audit et diagnostic digital, qui permet de savoir si le besoin réel
                relève d&apos;une automatisation, d&apos;un développement d&apos;outil ou d&apos;un cas
                d&apos;usage IA.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 8. Autres pays de la région */}
      {sameRegion.length > 0 ? (
        <section className="bg-theme-3 pt-[70px] pb-[70px]">
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
            {`au ${country.name} ?`}
          </>
        }
        ctaHref="/contact"
        ctaLabel="Demander un diagnostic"
      />
    </main>
  );
}
