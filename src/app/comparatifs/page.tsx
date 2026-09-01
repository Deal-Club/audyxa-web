import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle } from "@/components/page-title";
import { SectionTitle } from "@/components/section-title";
import { CallToAction } from "@/components/call-to-action";
import { DECISION_PAGES } from "@/lib/decision-content";

export const metadata: Metadata = {
  title: "Comparatifs et guides de décision | Audyxa",
  description:
    "Consultant vs agence, freelance vs cabinet, automatisation vs IA : des comparatifs transparents pour vous aider à choisir votre approche de transformation digitale.",
  alternates: { canonical: "/comparatifs" },
};

export default function DecisionsHubPage() {
  return (
    <main>
      <PageTitle
        title="Comparatifs et guides de décision"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Comparatifs" }]}
        currentPath="/comparatifs"
      />

      <section className="pt-[90px] pb-[70px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                {DECISION_PAGES.length} comparatifs
              </span>
              <h1 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[30px]">
                Des critères transparents, jamais un classement fabriqué
              </h1>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-[40px]">
              <p className="mb-0 text-[19px] leading-9 text-theme-1">
                Chaque comparatif présente une méthodologie claire, un tableau de critères factuels et
                les limites de la comparaison — pas un classement où Audyxa se place premier sans
                justification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-theme-3 pt-[70px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle subTitle="Tous les comparatifs" title="Parcourir par question" className="mb-[40px] max-w-[760px]" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DECISION_PAGES.map((page) => (
              <Link
                key={page.slug}
                href={`/comparatifs/${page.slug}`}
                className="group rounded-[14px] border border-[#e2e2e2] bg-white p-6 transition-all duration-300 hover:-translate-y-[6px] hover:border-theme-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              >
                <h2 className="mb-2 text-[18px] font-extrabold text-theme-1 group-hover:text-theme-2">
                  {page.title}
                </h2>
                <p className="mb-0 text-sm leading-6 text-body-text">{page.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title={
          <>
            Votre situation ne correspond
            <br className="hidden min-[600px]:block" />
            à aucun de ces cas ?
          </>
        }
        ctaHref="/contact"
        ctaLabel="Échangeons directement"
      />
    </main>
  );
}
