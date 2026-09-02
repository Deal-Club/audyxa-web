import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { PageTitle } from "@/components/page-title";
import { SectionTitle } from "@/components/section-title";
import { ThemeBtn } from "@/components/theme-btn";
import { CallToAction } from "@/components/call-to-action";
import { GEO_COUNTRIES, getCountry, getFlagshipCity } from "@/lib/geo-content";
import { SERVICES_DETAIL, getServiceDetail } from "@/lib/services-content";
import { SITE_URL } from "@/lib/site-config";

export function generateStaticParams() {
  return GEO_COUNTRIES.flatMap((country) => {
    const flagship = getFlagshipCity(country);
    return SERVICES_DETAIL.map((service) => ({
      slug: service.slug,
      pays: country.slug,
      ville: flagship.slug,
    }));
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; pays: string; ville: string }>;
}): Promise<Metadata> {
  const { slug, pays } = await params;
  const country = getCountry(pays);
  const service = getServiceDetail(slug);
  if (!country || !service) return {};
  const city = getFlagshipCity(country);

  return {
    title: `${service.title} à ${city.name} | Audyxa`,
    description: `${service.title} pour les entreprises de ${city.name} (${country.name}) : ${service.directAnswer}`,
    alternates: { canonical: `/services/${service.slug}/${country.slug}/${city.slug}` },
  };
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ slug: string; pays: string; ville: string }>;
}) {
  const { slug, pays, ville } = await params;
  const country = getCountry(pays);
  const service = getServiceDetail(slug);
  if (!country || !service) notFound();
  const city = getFlagshipCity(country);
  if (city.slug !== ville) notFound();

  const otherServices = SERVICES_DETAIL.filter((s) => s.slug !== service.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} à ${city.name}`,
    description: service.directAnswer,
    provider: { "@type": "Organization", name: "Audyxa", url: SITE_URL },
    areaServed: `${city.name}, ${country.name}`,
    url: `${SITE_URL}/services/${service.slug}/${country.slug}/${city.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.slice(0, 2).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main>
      <Script
        id="service-city-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="service-city-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Bannière */}
      <PageTitle
        title={`${service.title} à ${city.name}`}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: country.name, href: `/pays/${country.slug}` },
          { label: `${service.title} à ${city.name}` },
        ]}
        currentPath={`/services/${service.slug}/${country.slug}/${city.slug}`}
      />

      {/* 2. Réponse directe — asymétrique */}
      <section className="pt-[60px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-theme-3">
                <i className={`${service.icon} text-[38px] text-theme-2`} />
              </div>
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                {city.name} — {country.name}
              </span>
              <h1 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[30px]">
                {service.title} à {city.name}
              </h1>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-[40px]">
              <p className="mb-6 text-[19px] leading-9 text-theme-1">
                {service.directAnswer} Notre équipe intervient à distance auprès des entreprises de{" "}
                {city.name}, avec la même méthode que sur nos autres marchés.
              </p>
              <ThemeBtn href="/contact">Demander un diagnostic</ThemeBtn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problèmes résolus */}
      <section className="bg-theme-3 pt-[50px] pb-[50px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Pour qui"
            title={`Les situations que résout ce service à ${city.name}`}
            className="mb-[40px] max-w-[820px]"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.problems.map((problem, index) => (
              <div key={problem} className="rounded-[14px] bg-white p-7">
                <span className="mb-4 block text-[32px] font-bold leading-none text-[#e2e2e2]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mb-0 text-base leading-7 text-body-text">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Notre approche — colonne latérale + étapes */}
      <section className="pt-[60px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[40px]">
              <SectionTitle subTitle="Notre approche" title="Comment nous traitons ce sujet" className="mb-0" />
            </div>
            <div className="w-full lg:w-8/12">
              <div className="space-y-6">
                {service.approachSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-6 border-b border-[#e2e2e2] pb-6 last:border-b-0 last:pb-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-theme-2 text-lg font-extrabold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h2 className="mb-2 text-[18px] font-extrabold text-theme-1">{step.title}</h2>
                      <p className="mb-0 text-base leading-7 text-body-text">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. En résumé — section riche en contenu */}
      <section className="bg-theme-3 pt-[50px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-y-8">
            <div className="w-full lg:w-5/12 lg:pr-[40px]">
              <SectionTitle
                subTitle="En résumé"
                title={`${service.title} pour les entreprises de ${city.name}`}
                className="mb-0"
              />
            </div>
            <div className="w-full lg:w-7/12">
              <p className="mb-4 text-base leading-8 text-body-text">
                Ce que couvre ce service : {service.bullets.join(", ").toLowerCase()}. Chaque mission
                commence par un cadrage précis du besoin métier, quelle que soit la ville ou le pays
                d&apos;intervention.
              </p>
              <p className="mb-0 text-base leading-8 text-body-text">
                Pour {city.name} comme pour le reste du {country.name}, ce service s&apos;inscrit dans
                notre méthode complète de transformation digitale — voir aussi{" "}
                <Link href={`/pays/${country.slug}`} className="font-semibold text-theme-2 hover:underline">
                  notre couverture au {country.name}
                </Link>{" "}
                et{" "}
                <Link href={`/services/${service.slug}`} className="font-semibold text-theme-2 hover:underline">
                  la page complète de ce service
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Intervention à distance */}
      <section className="bg-theme-1 pt-[50px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[40px]">
              <SectionTitle
                light
                subTitle="Comment nous intervenons"
                title={`${service.title} à distance`}
                className="mb-0"
              />
            </div>
            <div className="w-full lg:w-8/12">
              <p className="mb-0 text-base leading-8 text-white/85">
                Audyxa n&apos;a pas de bureau physique à {city.name} : notre intervention se fait à
                distance, avec des points réguliers organisés selon la disponibilité de vos équipes.
                Cette approche nous permet d&apos;appliquer la même méthode et les mêmes standards de
                qualité que sur nos autres marchés, en {country.region.toLowerCase()} comme en France.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ (extrait) */}
      <section className="pt-[60px] pb-[50px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Questions fréquentes"
            title="Ce qu'on nous demande le plus"
            className="mb-[40px] max-w-[820px]"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
            {service.faq.slice(0, 2).map((item) => (
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
          <div className="mt-8">
            <Link href={`/services/${service.slug}`} className="font-semibold text-theme-2 hover:underline">
              Voir toutes les questions sur ce service →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Autres services dans cette ville */}
      <section className="bg-theme-3 pt-[50px] pb-[50px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Voir aussi"
            title={`Nos autres services à ${city.name}`}
            className="mb-[40px] max-w-[760px]"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}/${country.slug}/${city.slug}`}
                className="group flex items-center gap-4 rounded-[14px] border border-[#e2e2e2] bg-white p-5 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-theme-3 transition-colors group-hover:bg-theme-2">
                  <i className={`${other.icon} text-[20px] text-theme-2 transition-colors group-hover:text-white`} />
                </div>
                <span className="font-semibold text-theme-1 group-hover:text-theme-2">{other.title}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href={`/pays/${country.slug}`} className="font-semibold text-theme-2 hover:underline">
              Voir toute notre couverture au {country.name} →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. CTA final */}
      <CallToAction
        title={
          <>
            Prêt à cadrer ce chantier
            <br className="hidden min-[600px]:block" />
            {`depuis ${city.name} ?`}
          </>
        }
        ctaHref="/contact"
        ctaLabel="Demander un diagnostic"
      />
    </main>
  );
}
