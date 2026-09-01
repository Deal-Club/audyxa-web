import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle } from "@/components/page-title";
import { SectionTitle } from "@/components/section-title";
import { CallToAction } from "@/components/call-to-action";
import { SECTOR_PAGES } from "@/lib/sector-content";

export const metadata: Metadata = {
  title: "Transformation digitale par secteur | Audyxa",
  description:
    "Découvrez comment Audyxa adapte son approche de transformation digitale à votre secteur d'activité : banque, retail, santé, industrie, secteur public et plus.",
  alternates: { canonical: "/secteurs" },
};

export default function SectorsHubPage() {
  return (
    <main>
      <PageTitle
        title="Transformation digitale par secteur"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Secteurs" }]}
        currentPath="/secteurs"
      />

      <section className="pt-[90px] pb-[70px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                {SECTOR_PAGES.length} secteurs accompagnés
              </span>
              <h1 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[30px]">
                Une méthode identique, adaptée à chaque secteur
              </h1>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-[40px]">
              <p className="mb-0 text-[19px] leading-9 text-theme-1">
                Chaque secteur a ses propres contraintes réglementaires, ses cycles d&apos;activité et
                ses types de données à protéger. Nous appliquons la même{" "}
                <Link href="/methode" className="font-semibold text-theme-2 hover:underline">
                  méthode de diagnostic
                </Link>{" "}
                partout, en l&apos;adaptant au contexte réel de votre secteur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-theme-3 pt-[70px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle subTitle="Tous les secteurs" title="Parcourir par secteur d'activité" className="mb-[40px] max-w-[760px]" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECTOR_PAGES.map((sector) => (
              <Link
                key={sector.slug}
                href={`/secteurs/${sector.slug}`}
                className="group rounded-[14px] border border-[#e2e2e2] bg-white p-6 transition-all duration-300 hover:-translate-y-[6px] hover:border-theme-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              >
                <h2 className="mb-2 text-[18px] font-extrabold text-theme-1 group-hover:text-theme-2">
                  {sector.name}
                </h2>
                <p className="mb-0 text-sm leading-6 text-body-text">{sector.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title={
          <>
            Votre secteur n&apos;est pas listé
            <br className="hidden min-[600px]:block" />
            ou a des besoins spécifiques ?
          </>
        }
        ctaHref="/contact"
        ctaLabel="Parlons de votre contexte"
      />
    </main>
  );
}
