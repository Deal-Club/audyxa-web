import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PageTitle } from "@/components/page-title";
import { SectionTitle } from "@/components/section-title";
import { CallToAction } from "@/components/call-to-action";
import { GLOSSARY_TERMS } from "@/lib/glossary-content";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Glossaire de la transformation digitale | Audyxa",
  description:
    "Les termes clés de la transformation digitale, de l'automatisation et de l'IA en entreprise, définis simplement : ROI, TCO, RAG, MCP, BPMN, RGPD, KYC, MFA et plus.",
  alternates: { canonical: "/glossaire" },
};

export default function GlossaryPage() {
  const sorted = [...GLOSSARY_TERMS].sort((a, b) => a.term.localeCompare(b.term, "fr"));
  const letters = Array.from(new Set(sorted.map((t) => t.term[0].toUpperCase()))).sort();

  const definedTermSetJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glossaire de la transformation digitale — Audyxa",
    url: `${SITE_URL}/glossaire`,
    hasDefinedTerm: sorted.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      url: `${SITE_URL}/glossaire#${t.slug}`,
    })),
  };

  return (
    <main>
      <Script
        id="glossary-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetJsonLd) }}
      />

      {/* 1. Bannière */}
      <PageTitle
        title="Glossaire de la transformation digitale"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Glossaire" }]}
        currentPath="/glossaire"
      />

      {/* 2. Intro */}
      <section className="pt-[90px] pb-[60px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                {sorted.length} termes définis
              </span>
              <h1 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[30px]">
                Le vocabulaire de la transformation digitale, sans jargon inutile
              </h1>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-[40px]">
              <p className="mb-0 text-[19px] leading-9 text-theme-1">
                Ces définitions sont extraites de notre{" "}
                <Link href="/methode" className="font-semibold text-theme-2 hover:underline">
                  méthode complète
                </Link>{" "}
                de transformation digitale : chaque terme est réellement utilisé dans nos missions,
                pas une liste générique copiée d&apos;ailleurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Navigation alphabétique */}
      <section className="bg-theme-3 pt-[30px] pb-[30px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-2">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-theme-1 transition-colors hover:bg-theme-2 hover:text-white"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Glossaire complet */}
      <section className="pt-[70px] pb-[70px]">
        <div className="auto-container">
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2">
            {sorted.map((item, index) => {
              const isFirstOfLetter =
                index === 0 || sorted[index - 1].term[0].toUpperCase() !== item.term[0].toUpperCase();
              return (
                <div key={item.slug} id={item.slug} className="scroll-mt-[120px]">
                  {isFirstOfLetter ? (
                    <span
                      id={`letter-${item.term[0].toUpperCase()}`}
                      className="mb-2 block text-[13px] font-bold tracking-[0.14em] text-theme-2 uppercase"
                    >
                      {item.term[0].toUpperCase()}
                    </span>
                  ) : null}
                  <h3 className="mb-2 text-[19px] font-extrabold text-theme-1">{item.term}</h3>
                  <p className="mb-0 text-base leading-7 text-body-text">{item.definition}</p>
                  {item.relatedMethodSlug ? (
                    <Link
                      href={`/methode/${item.relatedMethodSlug}`}
                      className="mt-2 inline-block text-sm font-semibold text-theme-2 hover:underline"
                    >
                      Approfondir dans la méthode →
                    </Link>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Liens connexes */}
      <section className="bg-theme-3 pt-[70px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Aller plus loin"
            title="Voir aussi"
            className="mb-[30px] max-w-[760px]"
          />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/methode"
              className="rounded-full border border-[#e2e2e2] bg-white px-5 py-2 text-sm font-semibold text-theme-1 transition-colors hover:border-theme-2 hover:text-theme-2"
            >
              Notre méthode complète →
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-[#e2e2e2] bg-white px-5 py-2 text-sm font-semibold text-theme-1 transition-colors hover:border-theme-2 hover:text-theme-2"
            >
              Nos services →
            </Link>
            <Link
              href="/guides"
              className="rounded-full border border-[#e2e2e2] bg-white px-5 py-2 text-sm font-semibold text-theme-1 transition-colors hover:border-theme-2 hover:text-theme-2"
            >
              Nos guides pratiques →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CallToAction
        title={
          <>
            Un terme technique freine votre projet ?
            <br className="hidden min-[600px]:block" />
            Parlons-en directement.
          </>
        }
        ctaHref="/contact"
        ctaLabel="Demander un diagnostic"
      />
    </main>
  );
}
