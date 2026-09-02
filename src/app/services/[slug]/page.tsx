import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { PageTitle } from "@/components/page-title";
import { SectionTitle } from "@/components/section-title";
import { ThemeBtn } from "@/components/theme-btn";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CallToAction } from "@/components/call-to-action";
import { SERVICES_DETAIL, getServiceDetail } from "@/lib/services-content";
import { METHOD_CHAPTERS } from "@/lib/methode-content";
import { SITE_URL } from "@/lib/site-config";

export function generateStaticParams() {
  return SERVICES_DETAIL.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return {};

  return {
    title: `${service.title} pour entreprises | Audyxa`,
    description: service.directAnswer,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();

  const relatedChapters = service.relatedMethodSlugs
    .map((s) => METHOD_CHAPTERS.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c?.sections?.length));

  const otherServices = SERVICES_DETAIL.filter((s) => s.slug !== service.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.directAnswer,
    provider: { "@type": "Organization", name: "Audyxa", url: SITE_URL },
    areaServed: ["France", "Afrique francophone"],
    url: `${SITE_URL}/services/${service.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Notre méthode pour ${service.title.toLowerCase()}`,
    description: service.directAnswer,
    step: service.approachSteps.map((step) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.text,
    })),
  };

  return (
    <main>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="service-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="service-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      {/* 1. Bannière */}
      <PageTitle
        title={service.title}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        currentPath={`/services/${service.slug}`}
      />

      {/* 2. Réponse directe — asymétrique pleine largeur */}
      <section className="pt-[90px] pb-[70px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-10">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-theme-3">
                <i className={`${service.icon} text-[38px] text-theme-2`} />
              </div>
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                {service.tagline}
              </span>
              <h1 className="mb-0 text-[26px] font-extrabold leading-[1.2em] text-theme-1 [@media(min-width:768px)]:text-[32px]">
                {service.title} pour entreprises en France et en Afrique francophone
              </h1>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-[40px]">
              <p className="mb-8 text-[19px] leading-9 text-theme-1">{service.directAnswer}</p>
              <div className="flex flex-wrap items-center gap-4">
                <ThemeBtn href="/contact">Demander un diagnostic</ThemeBtn>
                <Link href="/methode" className="font-semibold text-theme-2 hover:underline">
                  Voir la méthode complète →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problèmes résolus */}
      <section className="bg-theme-3 pt-[70px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Pour qui"
            title={`Les situations que résout notre service ${service.title.toLowerCase()}`}
            className="mb-[50px] max-w-[820px]"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.problems.map((problem, index) => (
              <ScrollReveal
                key={problem}
                animation="fadeInUp"
                delay={`${index * 150}ms`}
                className="rounded-[14px] bg-white p-7"
              >
                <span className="mb-4 block text-[32px] font-bold leading-none text-[#e2e2e2]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mb-0 text-base leading-7 text-body-text">{problem}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3bis. Contexte marché sourcé */}
      {service.marketContext ? (
        <section className="pt-[90px] pb-[20px]">
          <div className="auto-container">
            <div className="flex flex-wrap gap-y-8">
              <div className="w-full lg:w-4/12 lg:pr-[40px]">
                <SectionTitle
                  subTitle="État du marché"
                  title={`Ce que disent les études sur ${service.title.toLowerCase()}`}
                  className="mb-0"
                />
              </div>
              <div className="w-full lg:w-8/12">
                <p className="mb-8 text-base leading-8 text-body-text">{service.marketContext.intro}</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.marketContext.stats.map((stat) => (
                    <div key={stat.label} className="rounded-[14px] border border-[#e2e2e2] bg-theme-3 p-5">
                      <div className="mb-2 text-[26px] font-extrabold leading-none text-theme-2">{stat.value}</div>
                      <p className="mb-2 text-sm leading-6 text-theme-1">{stat.label}</p>
                      <p className="mb-0 text-xs italic text-body-text">{stat.source}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* 4. Notre approche — colonne latérale + étapes pleine largeur */}
      <section className="pt-[90px] pb-[70px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-y-10">
            <div className="w-full lg:w-4/12 lg:pr-[40px]">
              <SectionTitle
                subTitle="Notre approche"
                title="Comment nous traitons ce sujet"
                text={`Notre méthode de ${service.title.toLowerCase()} s'appuie sur un cadre documenté, pas sur des recommandations génériques.`}
                className="mb-0"
              />
            </div>
            <div className="w-full lg:w-8/12">
              <div className="space-y-8">
                {service.approachSteps.map((step, index) => (
                  <ScrollReveal
                    key={step.title}
                    animation="fadeInUp"
                    delay={`${index * 150}ms`}
                    className="flex gap-6 border-b border-[#e2e2e2] pb-8 last:border-b-0 last:pb-0"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-theme-2 text-lg font-extrabold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h2 className="mb-2 text-[20px] font-extrabold text-theme-1">{step.title}</h2>
                      <p className="mb-0 text-base leading-7 text-body-text">{step.text}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. En résumé — section riche en contenu, pleine largeur */}
      <section className="bg-theme-3 pt-[70px] pb-[70px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-y-10">
            <div className="w-full lg:w-5/12 lg:pr-[40px]">
              <SectionTitle
                subTitle="En résumé"
                title={`Pourquoi choisir Audyxa pour ${service.title.toLowerCase()}`}
                className="mb-0"
              />
            </div>
            <div className="w-full lg:w-7/12">
              <p className="mb-4 text-base leading-8 text-body-text">
                {service.title} n&apos;est jamais traité isolément chez Audyxa : ce service
                s&apos;inscrit dans une méthode complète de transformation digitale, du diagnostic de
                maturité jusqu&apos;au pilotage des résultats après déploiement. Cette continuité entre
                conseil et exécution évite la rupture fréquente entre la recommandation et sa mise en
                œuvre réelle.
              </p>
              <p className="mb-0 text-base leading-8 text-body-text">
                Que votre entreprise soit basée en France ou en Afrique francophone, notre équipe
                applique la même rigueur méthodologique : comprendre le résultat métier visé avant de
                choisir un outil, mesurer plutôt que supposer, et rester impliqué jusqu&apos;à ce que le
                bénéfice attendu soit réellement constaté.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Ce que ça couvre */}
      <section className="bg-theme-1 pt-[70px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle
            light
            subTitle="Périmètre"
            title="Ce que couvre ce service"
            className="mb-[50px] max-w-[760px]"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {service.bullets.map((bullet) => (
              <div key={bullet} className="rounded-[14px] border border-white/10 bg-white/[0.03] p-6">
                <i className="fa fa-check-circle mb-3 text-[22px] text-theme-2" />
                <p className="mb-0 text-sm leading-6 text-white/85">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Approfondir la méthode */}
      {relatedChapters.length > 0 ? (
        <section className="pt-[70px] pb-[70px]">
          <div className="auto-container">
            <SectionTitle
              subTitle="Pour aller plus loin"
              title="Approfondir dans la méthode Audyxa"
              className="mb-[50px] max-w-[760px]"
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedChapters.map((chapter) => (
                <Link
                  key={chapter.slug}
                  href={`/methode/${chapter.slug}`}
                  className="group rounded-[14px] border border-[#e2e2e2] bg-white p-6 transition-all duration-300 hover:-translate-y-[6px] hover:border-theme-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                >
                  <span className="mb-2 block text-[13px] font-bold tracking-[0.14em] text-theme-2 uppercase">
                    Chapitre {chapter.number}
                  </span>
                  <h3 className="mb-0 text-[18px] font-extrabold text-theme-1">{chapter.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 8. FAQ — deux colonnes */}
      <section className="bg-theme-3 pt-[90px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Questions fréquentes"
            title="Ce qu'on nous demande le plus sur ce service"
            className="mb-[50px] max-w-[820px]"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
            {service.faq.map((item) => (
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

      {/* 9. Autres services */}
      <section className="pt-[70px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Voir aussi"
            title="Les autres services Audyxa"
            className="mb-[50px] max-w-[760px]"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group flex items-center gap-4 rounded-[14px] border border-[#e2e2e2] bg-white p-5 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-theme-3 transition-colors group-hover:bg-theme-2">
                  <i className={`${other.icon} text-[20px] text-theme-2 transition-colors group-hover:text-white`} />
                </div>
                <span className="font-semibold text-theme-1 group-hover:text-theme-2">{other.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA final */}
      <CallToAction
        title={
          <>
            Ce service correspond à un besoin
            <br className="hidden min-[600px]:block" />
            que vous n&apos;avez pas encore cadré ?
          </>
        }
        ctaHref="/contact"
        ctaLabel="Demander un diagnostic"
      />
    </main>
  );
}
