import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle } from "@/components/page-title";
import { SectionTitle } from "@/components/section-title";
import { CallToAction } from "@/components/call-to-action";
import { GUIDES } from "@/lib/guide-content";

export const metadata: Metadata = {
  title: "Guides transformation digitale | Audyxa",
  description:
    "Guides pratiques sur la transformation digitale : maturité numérique, ROI, gouvernance IA, sécurité, conduite du changement, KPI et priorisation de portefeuille.",
  alternates: { canonical: "/guides" },
};

export default function GuidesHubPage() {
  return (
    <main>
      <PageTitle
        title="Guides pratiques"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Guides" }]}
        currentPath="/guides"
      />

      <section className="pt-[90px] pb-[70px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                {GUIDES.length} guides publiés
              </span>
              <h1 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[30px]">
                Des guides pratiques, pas du contenu générique
              </h1>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-[40px]">
              <p className="mb-0 text-[19px] leading-9 text-theme-1">
                Chaque guide développe un point précis de notre{" "}
                <Link href="/methode" className="font-semibold text-theme-2 hover:underline">
                  méthode de transformation digitale
                </Link>{" "}
                sous un angle pratique : comment faire, pas seulement pourquoi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-theme-3 pt-[70px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle subTitle="Tous les guides" title="Parcourir par sujet" className="mb-[40px] max-w-[760px]" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group rounded-[14px] border border-[#e2e2e2] bg-white p-6 transition-all duration-300 hover:-translate-y-[6px] hover:border-theme-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              >
                <h2 className="mb-2 text-[18px] font-extrabold text-theme-1 group-hover:text-theme-2">
                  {guide.title}
                </h2>
                <p className="mb-0 text-sm leading-6 text-body-text">{guide.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title={
          <>
            Un sujet n&apos;est pas couvert
            <br className="hidden min-[600px]:block" />
            dans nos guides ?
          </>
        }
        ctaHref="/contact"
        ctaLabel="Posez la question directement"
      />
    </main>
  );
}
