import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle } from "@/components/page-title";
import { SectionTitle } from "@/components/section-title";
import { CallToAction } from "@/components/call-to-action";
import { GEO_COUNTRIES, getCountriesByRegion } from "@/lib/geo-content";

export const metadata: Metadata = {
  title: "Zones d'intervention | Audyxa",
  description:
    "Audyxa accompagne les entreprises en France, en Afrique de l'Ouest, en Afrique centrale et en Europe francophone, avec la même méthode de transformation digitale partout.",
  alternates: { canonical: "/pays" },
};

const REGIONS: Array<"Afrique de l'Ouest" | "Afrique centrale" | "Europe francophone"> = [
  "Afrique de l'Ouest",
  "Afrique centrale",
  "Europe francophone",
];

export default function CountriesHubPage() {
  return (
    <main>
      <PageTitle
        title="Nos zones d'intervention"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Zones d'intervention" }]}
        currentPath="/pays"
      />

      <section className="pt-[60px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                {GEO_COUNTRIES.length} pays couverts
              </span>
              <h1 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[30px]">
                France, Afrique francophone et Europe francophone
              </h1>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-[40px]">
              <p className="mb-0 text-[19px] leading-9 text-theme-1">
                Audyxa intervient à distance sur l&apos;ensemble de ces marchés, avec la même méthode
                de transformation digitale partout — pas de partenaire local différent selon le pays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {REGIONS.map((region, index) => {
        const countries = getCountriesByRegion(region);
        return (
          <section key={region} className={index % 2 === 0 ? "bg-theme-3 pt-[50px] pb-[50px]" : "pt-[50px] pb-[50px]"}>
            <div className="auto-container">
              <SectionTitle subTitle="Zone" title={region} className="mb-[40px] max-w-[760px]" />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {countries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/pays/${country.slug}`}
                    className="group rounded-[14px] border border-[#e2e2e2] bg-white p-6 transition-all duration-300 hover:-translate-y-[6px] hover:border-theme-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                  >
                    <h2 className="mb-1 text-[18px] font-extrabold text-theme-1 group-hover:text-theme-2">
                      {country.name}
                    </h2>
                    <p className="mb-0 text-sm leading-6 text-body-text">{country.currency}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CallToAction
        title={
          <>
            Votre pays n&apos;est pas encore listé ?
          </>
        }
        ctaHref="/contact"
        ctaLabel="Contactez-nous quand même"
      />
    </main>
  );
}
