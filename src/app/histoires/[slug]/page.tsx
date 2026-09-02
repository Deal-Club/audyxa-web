import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { PageTitle } from "@/components/page-title";
import { SectionTitle } from "@/components/section-title";
import { ThemeBtn } from "@/components/theme-btn";
import { CallToAction } from "@/components/call-to-action";
import { BoldText } from "@/components/bold-text";
import { HISTOIRES, getHistoire } from "@/lib/histoires-content";
import { getServiceDetail } from "@/lib/services-content";
import { SITE_URL } from "@/lib/site-config";

export function generateStaticParams() {
  return HISTOIRES.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const histoire = getHistoire(slug);
  if (!histoire) return {};

  return {
    title: `${histoire.title} | Histoires | Audyxa`,
    description: histoire.summary,
    alternates: { canonical: `/histoires/${histoire.slug}` },
  };
}

export default async function HistoireDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const histoire = getHistoire(slug);
  if (!histoire) notFound();

  const isEchec = histoire.type === "echec";
  const otherHistoires = HISTOIRES.filter((h) => h.slug !== histoire.slug).slice(0, 3);
  const relatedService = getServiceDetail(histoire.relatedServiceSlug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: histoire.title,
    description: histoire.summary,
    about: { "@type": "Organization", name: histoire.company },
    author: { "@type": "Organization", name: "Audyxa", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Audyxa", url: SITE_URL },
    url: `${SITE_URL}/histoires/${histoire.slug}`,
    citation: histoire.sources.map((s) => s.url),
  };

  return (
    <main>
      <Script
        id="histoire-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* 1. Bannière */}
      <PageTitle
        title={histoire.title}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Histoires", href: "/histoires" },
          { label: histoire.company },
        ]}
        currentPath={`/histoires/${histoire.slug}`}
      />

      {/* 2. Image mise en avant, pleine largeur */}
      <section className="pt-[70px]">
        <div className="auto-container">
          <div
            className={`relative flex h-[220px] items-center justify-center overflow-hidden rounded-[18px] sm:h-[280px] ${
              isEchec ? "bg-gradient-to-br from-red-500 to-rose-700" : "bg-gradient-to-br from-theme-2 to-theme-1"
            }`}
          >
            <i className={`${histoire.icon} text-[80px] text-white/90 sm:text-[110px]`} />
            <span className="absolute top-6 left-6 rounded-full bg-white/15 px-4 py-2 text-[12px] font-bold tracking-[0.1em] text-white uppercase backdrop-blur-sm">
              {isEchec ? "Occasion manquée" : "Virage réussi"}
            </span>
            <span className="absolute right-6 bottom-6 text-[13px] font-bold tracking-[0.15em] text-white/80 uppercase">
              {histoire.company}
            </span>
          </div>
        </div>
      </section>

      {/* 3. Intro + disclaimer */}
      <section className="pt-[50px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <h1 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[30px]">
                {histoire.tagline}
              </h1>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-[40px]">
              <p className="mb-4 text-[19px] leading-9 text-theme-1">{histoire.summary}</p>
              <p className="mb-0 flex items-start gap-3 rounded-[10px] border-l-[3px] border-theme-2 bg-theme-3 px-5 py-4 text-sm leading-7 text-theme-1">
                <i className="fa fa-info-circle mt-1 shrink-0 text-theme-2" />
                <span>
                  {histoire.company} n&apos;est pas un client d&apos;Audyxa. Cette page est une étude de cas
                  externe, construite à partir de sources publiques citées en bas de page — elle sert
                  d&apos;illustration pédagogique, pas de référence commerciale.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contexte avant */}
      <section className="bg-theme-3 pt-[70px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-y-6">
            <div className="w-full lg:w-4/12 lg:pr-[40px]">
              <span className="mb-3 flex items-center gap-2 text-[13px] font-bold tracking-[0.15em] text-theme-2 uppercase">
                <i className="fa fa-flag" /> Le contexte de départ
              </span>
            </div>
            <div className="w-full lg:w-8/12 rounded-[14px] bg-white p-7">
              <p className="mb-0 text-base leading-7 text-body-text">
                <BoldText text={histoire.contextBefore} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4bis. Chronologie détaillée des actions */}
      <section className="bg-theme-3 pt-[10px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Ce qui a été fait, précisément"
            title="La chronologie détaillée des décisions"
            className="mb-[40px] max-w-[820px]"
          />
          <ol className="relative space-y-8 border-l-2 border-theme-2/25 pl-8">
            {histoire.actions.map((action) => (
              <li key={`${action.when}-${action.text.slice(0, 20)}`} className="relative">
                <span className="absolute top-1 -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-theme-2">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <span className="mb-2 inline-block rounded-full bg-theme-1 px-3 py-1 text-[12px] font-extrabold tracking-[0.05em] text-white">
                  {action.when}
                </span>
                <p className="mb-0 mt-2 text-base leading-7 text-body-text">
                  <BoldText text={action.text} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4ter. Ce qui s'est passé après */}
      <section className="pt-[70px] pb-[70px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-y-6">
            <div className="w-full lg:w-4/12 lg:pr-[40px]">
              <span className="mb-3 flex items-center gap-2 text-[13px] font-bold tracking-[0.15em] text-theme-2 uppercase">
                <i className="fa fa-chart-line" /> Ce qui s&apos;est passé après
              </span>
            </div>
            <div className="w-full lg:w-8/12 rounded-[14px] border border-[#e2e2e2] bg-theme-3 p-7">
              <p className="mb-0 text-base leading-7 text-body-text">
                <BoldText text={histoire.aftermath} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Chiffres clés */}
      <section className="pt-[90px] pb-[50px]">
        <div className="auto-container">
          <SectionTitle subTitle="Chiffres clés" title="Ce que montrent les chiffres, sourcés" className="mb-[40px] max-w-[760px]" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {histoire.stats.map((stat) => (
              <div key={stat.label} className="rounded-[14px] border border-[#e2e2e2] bg-theme-3 p-6">
                <div className="mb-2 text-[30px] font-extrabold leading-none text-theme-2">{stat.value}</div>
                <p className="mb-0 text-sm leading-6 text-theme-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Point de vigilance factuel, si applicable */}
      {histoire.caveat ? (
        <section className="pb-[50px]">
          <div className="auto-container">
            <div className="flex items-start gap-4 rounded-[14px] border border-amber-200 bg-amber-50 p-6">
              <i className="fa fa-triangle-exclamation mt-1 shrink-0 text-lg text-amber-600" />
              <div>
                <span className="mb-2 block text-[13px] font-bold tracking-[0.1em] text-amber-700 uppercase">
                  Point de vigilance
                </span>
                <p className="mb-0 text-sm leading-7 text-amber-900">{histoire.caveat}</p>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* 7. La leçon — mise en avant forte */}
      <section className="pt-[10px] pb-[40px]">
        <div className="auto-container">
          <div className="relative overflow-hidden rounded-[18px] bg-theme-1 px-8 py-12 sm:px-14 sm:py-16">
            <i className="fa fa-quote-right absolute top-6 right-8 text-[90px] text-white/5" />
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-theme-2/20 px-4 py-2 text-[12px] font-bold tracking-[0.15em] text-theme-2 uppercase">
              <i className="fa fa-lightbulb" /> La leçon à retenir
            </span>
            <p className="relative z-[1] mb-0 max-w-[820px] text-[22px] leading-[1.6em] font-semibold text-white [@media(min-width:768px)]:text-[26px]">
              <BoldText text={histoire.lesson} />
            </p>
          </div>
        </div>
      </section>

      {/* 7bis. CTA lié au service Audyxa pertinent */}
      {relatedService ? (
        <section className="pt-[10px] pb-[70px]">
          <div className="auto-container">
            <div className="flex flex-wrap items-center gap-8 rounded-[18px] border-2 border-theme-2 bg-white px-8 py-10 sm:px-12">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-theme-2">
                <i className={`${relatedService.icon} text-[26px] text-white`} />
              </div>
              <div className="flex-1">
                <span className="mb-2 inline-block text-[12px] font-bold tracking-[0.15em] text-theme-2 uppercase">
                  Ce que ça change pour vous
                </span>
                <p className="mb-0 text-[17px] leading-8 text-theme-1">{histoire.serviceCta}</p>
              </div>
              <ThemeBtn href={`/services/${relatedService.slug}`} className="shrink-0">
                Découvrir {relatedService.title.toLowerCase()}
              </ThemeBtn>
            </div>
          </div>
        </section>
      ) : null}

      {/* 8. Sources */}
      <section className="pt-[20px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle subTitle="Sources" title="D'où viennent ces informations" className="mb-[30px] max-w-[760px]" />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {histoire.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-[10px] border border-[#e2e2e2] bg-white px-5 py-4 font-semibold text-theme-1 transition-colors hover:border-theme-2 hover:text-theme-2"
                >
                  <i className="fa fa-external-link-alt text-xs text-theme-2" />
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Autres histoires */}
      <section className="bg-theme-3 pt-[70px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle subTitle="Voir aussi" title="D'autres histoires" className="mb-[40px] max-w-[760px]" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherHistoires.map((other) => (
              <Link
                key={other.slug}
                href={`/histoires/${other.slug}`}
                className="group flex items-center gap-4 rounded-[14px] border border-[#e2e2e2] bg-white p-5 transition-all duration-300 hover:-translate-y-[4px] hover:border-theme-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                    other.type === "echec" ? "bg-red-50 text-red-500" : "bg-green-50 text-green-600"
                  }`}
                >
                  <i className={`${other.icon} text-[18px]`} />
                </div>
                <span className="font-semibold text-theme-1 group-hover:text-theme-2">{other.title}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/histoires" className="font-semibold text-theme-2 hover:underline">
              Voir toutes les histoires →
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CTA final */}
      <CallToAction
        title={
          <>
            Ne laissez pas le temps décider
            <br className="hidden min-[600px]:block" />
            à votre place.
          </>
        }
        ctaHref="/contact"
        ctaLabel="Demander un diagnostic"
      />
    </main>
  );
}
