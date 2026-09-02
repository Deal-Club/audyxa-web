import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { PageTitle } from "@/components/page-title";
import { SectionTitle } from "@/components/section-title";
import { ThemeBtn } from "@/components/theme-btn";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CallToAction } from "@/components/call-to-action";
import { DECISION_PAGES, getDecisionPage } from "@/lib/decision-content";
import { SITE_URL } from "@/lib/site-config";

export function generateStaticParams() {
  return DECISION_PAGES.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getDecisionPage(slug);
  if (!page) return {};

  return {
    title: `${page.title} | Audyxa`,
    description: page.conclusion,
    alternates: { canonical: `/comparatifs/${page.slug}` },
  };
}

export default async function DecisionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getDecisionPage(slug);
  if (!page) notFound();

  const otherPages = DECISION_PAGES.filter((d) => d.slug !== page.slug).slice(0, 3);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.conclusion,
    author: { "@type": "Person", name: "Paul Maxime Dossou" },
    publisher: { "@type": "Organization", name: "Audyxa" },
    mainEntityOfPage: `${SITE_URL}/comparatifs/${page.slug}`,
  };

  return (
    <main>
      <Script
        id="decision-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id="decision-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Bannière */}
      <PageTitle
        title={page.title}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Comparatifs", href: "/comparatifs" },
          { label: page.title },
        ]}
        currentPath={`/comparatifs/${page.slug}`}
      />

      {/* 2. Conclusion courte — asymétrique */}
      <section className="pt-[60px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                {page.tagline}
              </span>
              <h1 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[30px]">
                {page.title}
              </h1>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-[40px]">
              <p className="mb-6 text-[19px] leading-9 text-theme-1">{page.conclusion}</p>
              <ThemeBtn href="/contact">Échanger sur votre situation</ThemeBtn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tableau comparatif — pleine largeur */}
      <section className="bg-theme-3 pt-[50px] pb-[50px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Méthode de comparaison"
            title="Critère par critère"
            className="mb-[40px] max-w-[820px]"
          />
          <div className="overflow-x-auto rounded-[14px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#e2e2e2] bg-theme-1">
                  <th className="px-5 py-4 font-semibold text-white/70">Critère</th>
                  <th className="px-5 py-4 font-extrabold text-white">{page.optionALabel}</th>
                  <th className="px-5 py-4 font-extrabold text-white/85">{page.optionBLabel}</th>
                </tr>
              </thead>
              <tbody>
                {page.criteria.map((row) => (
                  <tr key={row.label} className="border-b border-[#e2e2e2] last:border-b-0">
                    <td className="px-5 py-4 font-semibold text-theme-1">{row.label}</td>
                    <td className="px-5 py-4 text-body-text">{row.a}</td>
                    <td className="px-5 py-4 text-body-text">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4 & 5. Analyse option par option — pleine largeur */}
      <section className="pt-[60px] pb-[50px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Analyse détaillée"
            title="Ce que chaque option implique concrètement"
            className="mb-[40px] max-w-[820px]"
          />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <ScrollReveal animation="fadeInRight" className="rounded-[14px] border border-[#e2e2e2] bg-white p-8">
              <span className="mb-4 inline-block rounded-full bg-theme-2 px-4 py-1 text-xs font-bold text-white">
                {page.optionALabel}
              </span>
              {page.optionAText.map((paragraph, i) => (
                <p key={i} className="mb-4 text-base leading-7 text-body-text last:mb-0">
                  {paragraph}
                </p>
              ))}
            </ScrollReveal>
            <ScrollReveal animation="fadeInLeft" className="rounded-[14px] border border-[#e2e2e2] bg-white p-8">
              <span className="mb-4 inline-block rounded-full bg-theme-3 px-4 py-1 text-xs font-bold text-theme-1">
                {page.optionBLabel}
              </span>
              {page.optionBText.map((paragraph, i) => (
                <p key={i} className="mb-4 text-base leading-7 text-body-text last:mb-0">
                  {paragraph}
                </p>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. Comment Audyxa se positionne */}
      <section className="bg-theme-1 pt-[50px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <SectionTitle
                light
                subTitle="Notre positionnement"
                title="Comment Audyxa applique ce choix"
                className="mb-0"
              />
            </div>
            <div className="w-full lg:w-8/12">
              <p className="mb-0 text-base leading-8 text-white/85">{page.limits}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ — deux colonnes */}
      <section className="pt-[60px] pb-[50px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Questions fréquentes"
            title="Ce qu'on nous demande sur ce sujet"
            className="mb-[50px] max-w-[820px]"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
            {page.faq.map((item) => (
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

      {/* 8. Autres comparatifs */}
      <section className="bg-theme-3 pt-[50px] pb-[50px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Voir aussi"
            title="D'autres questions de décision"
            className="mb-[40px] max-w-[760px]"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherPages.map((other) => (
              <Link
                key={other.slug}
                href={`/comparatifs/${other.slug}`}
                className="group rounded-[14px] border border-[#e2e2e2] bg-white p-6 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              >
                <span className="font-semibold text-theme-1 group-hover:text-theme-2">{other.title}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/comparatifs" className="font-semibold text-theme-2 hover:underline">
              Voir tous les comparatifs →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. CTA final */}
      <CallToAction
        title={
          <>
            Besoin d&apos;éclaircir votre propre situation
            <br className="hidden min-[600px]:block" />
            avant de décider ?
          </>
        }
        ctaHref="/contact"
        ctaLabel="Demander un diagnostic"
      />
    </main>
  );
}
