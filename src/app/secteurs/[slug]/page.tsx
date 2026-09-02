import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { PageTitle } from "@/components/page-title";
import { SectionTitle } from "@/components/section-title";
import { ThemeBtn } from "@/components/theme-btn";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CallToAction } from "@/components/call-to-action";
import { SECTOR_PAGES, getSectorPage } from "@/lib/sector-content";
import { SERVICES_DETAIL } from "@/lib/services-content";
import { SITE_URL } from "@/lib/site-config";

export function generateStaticParams() {
  return SECTOR_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorPage(slug);
  if (!sector) return {};

  return {
    title: `Transformation digitale ${sector.name} | Audyxa`,
    description: sector.directAnswer,
    alternates: { canonical: `/secteurs/${sector.slug}` },
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSectorPage(slug);
  if (!sector) notFound();

  const relevantServices = sector.relevantServiceSlugs
    .map((s) => SERVICES_DETAIL.find((service) => service.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const otherSectors = SECTOR_PAGES.filter((s) => s.slug !== sector.slug).slice(0, 3);
  const sectorNameLower = sector.name.toLowerCase();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sector.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Transformation digitale pour ${sectorNameLower}`,
    description: sector.directAnswer,
    provider: { "@type": "Organization", name: "Audyxa", url: SITE_URL },
    areaServed: ["France", "Afrique francophone"],
    audience: { "@type": "Audience", audienceType: sector.name },
    url: `${SITE_URL}/secteurs/${sector.slug}`,
  };

  return (
    <main>
      <Script
        id="sector-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="sector-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Bannière */}
      <PageTitle
        title={`Transformation digitale — ${sector.name}`}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Secteurs", href: "/secteurs" },
          { label: sector.name },
        ]}
        currentPath={`/secteurs/${sector.slug}`}
      />

      {/* 2. Réponse directe — asymétrique */}
      <section className="pt-[90px] pb-[60px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                {sector.tagline}
              </span>
              <h1 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[30px]">
                Transformation digitale {sectorNameLower}
              </h1>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-[40px]">
              <p className="mb-6 text-[19px] leading-9 text-theme-1">{sector.directAnswer}</p>
              <ThemeBtn href="/contact">Demander un diagnostic</ThemeBtn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Défis du secteur */}
      <section className="bg-theme-3 pt-[60px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Ce que nous observons"
            title={`Les défis récurrents du secteur ${sectorNameLower}`}
            className="mb-[40px] max-w-[820px]"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {sector.challenges.map((challenge, index) => (
              <ScrollReveal
                key={challenge}
                animation="fadeInUp"
                delay={`${index * 150}ms`}
                className="rounded-[14px] bg-white p-7"
              >
                <span className="mb-4 block text-[32px] font-bold leading-none text-[#e2e2e2]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mb-0 text-base leading-7 text-body-text">{challenge}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3bis. Contexte marché sourcé */}
      {sector.marketContext ? (
        <section className="pt-[90px] pb-[70px]">
          <div className="auto-container">
            <div className="flex flex-wrap gap-y-8">
              <div className="w-full lg:w-4/12 lg:pr-[40px]">
                <SectionTitle
                  subTitle="État du marché"
                  title={`Ce que disent les études sur ${sectorNameLower}`}
                  className="mb-0"
                />
              </div>
              <div className="w-full lg:w-8/12">
                <p className="mb-8 text-base leading-8 text-body-text">{sector.marketContext.intro}</p>
                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {sector.marketContext.stats.map((stat) => (
                    <div key={stat.label} className="rounded-[14px] border border-[#e2e2e2] bg-theme-3 p-5">
                      <div className="mb-2 text-[26px] font-extrabold leading-none text-theme-2">{stat.value}</div>
                      <p className="mb-2 text-sm leading-6 text-theme-1">{stat.label}</p>
                      <p className="mb-0 text-xs italic text-body-text">{stat.source}</p>
                    </div>
                  ))}
                </div>
                {sector.marketContext.obstacle ? (
                  <p className="mb-0 border-l-[3px] border-theme-2 bg-theme-3 px-5 py-4 text-sm leading-7 text-theme-1">
                    {sector.marketContext.obstacle}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* 4. Notre approche pour ce secteur — asymétrique */}
      <section className="pt-[90px] pb-[70px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[40px]">
              <SectionTitle
                subTitle="Notre approche"
                title="Comment nous adaptons la méthode à ce secteur"
                className="mb-0"
              />
            </div>
            <div className="w-full lg:w-8/12">
              <p className="mb-0 text-base leading-8 text-body-text">{sector.approach}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. En résumé — section riche en contenu */}
      <section className="bg-theme-3 pt-[70px] pb-[70px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-y-8">
            <div className="w-full lg:w-5/12 lg:pr-[40px]">
              <SectionTitle
                subTitle="En résumé"
                title={`Pourquoi la transformation digitale ${sectorNameLower} passe par un diagnostic sur mesure`}
                className="mb-0"
              />
            </div>
            <div className="w-full lg:w-7/12">
              <p className="mb-4 text-base leading-8 text-body-text">
                Chaque secteur a ses propres contraintes réglementaires, ses cycles d&apos;activité et
                ses types de données à protéger. C&apos;est pour cette raison qu&apos;Audyxa ne propose
                jamais une solution standardisée pour {sectorNameLower} : le diagnostic de maturité
                numérique reste la première étape, quel que soit le secteur d&apos;activité.
              </p>
              <p className="mb-0 text-base leading-8 text-body-text">
                Les services les plus fréquemment mobilisés pour {sectorNameLower} —{" "}
                {relevantServices.map((s, i) => (
                  <span key={s.slug}>
                    {i > 0 ? (i === relevantServices.length - 1 ? " et " : ", ") : ""}
                    <Link href={`/services/${s.slug}`} className="font-semibold text-theme-2 hover:underline">
                      {s.title.toLowerCase()}
                    </Link>
                  </span>
                ))}{" "}
                — s&apos;inscrivent dans notre méthode complète de transformation digitale, présentée
                en détail sur notre <Link href="/methode" className="font-semibold text-theme-2 hover:underline">page méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Services pertinents pour ce secteur */}
      <section className="bg-theme-1 pt-[70px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle
            light
            subTitle="Services associés"
            title="Ce qui s'applique le plus souvent"
            className="mb-[40px] max-w-[760px]"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {relevantServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-[14px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-[6px] hover:bg-white"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-theme-2 transition-colors group-hover:bg-theme-1">
                  <i className={`${service.icon} text-[24px] text-white`} />
                </div>
                <span className="font-semibold text-white group-hover:text-theme-1">{service.title}</span>
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
            title={`Ce qu'on nous demande dans le secteur ${sectorNameLower}`}
            className="mb-[50px] max-w-[820px]"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
            {sector.faq.map((item) => (
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

      {/* 8. Autres secteurs */}
      <section className="bg-theme-3 pt-[70px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Voir aussi"
            title="D'autres secteurs accompagnés"
            className="mb-[40px] max-w-[760px]"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherSectors.map((other) => (
              <Link
                key={other.slug}
                href={`/secteurs/${other.slug}`}
                className="group rounded-[14px] border border-[#e2e2e2] bg-white p-6 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              >
                <span className="font-semibold text-theme-1 group-hover:text-theme-2">{other.name}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/secteurs" className="font-semibold text-theme-2 hover:underline">
              Voir tous les secteurs accompagnés →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. CTA final */}
      <CallToAction
        title={
          <>
            Votre secteur a ses propres contraintes,
            <br className="hidden min-[600px]:block" />
            parlons de votre contexte réel.
          </>
        }
        ctaHref="/contact"
        ctaLabel="Demander un diagnostic"
      />
    </main>
  );
}
