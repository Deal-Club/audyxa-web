import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle } from "@/components/page-title";
import { SectionTitle } from "@/components/section-title";
import { CallToAction } from "@/components/call-to-action";
import { HISTOIRES, getHistoiresByType } from "@/lib/histoires-content";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Histoires de transformation digitale | Audyxa",
  description:
    "Des entreprises connues qui ont perdu leur place faute de digitalisation à temps, et d'autres qui ont pris de l'avance : Blockbuster, Kodak, Nokia, Toys R Us, Netflix, Domino's Pizza, Adobe, LEGO. Études de cas publiques et sourcées.",
  alternates: { canonical: "/histoires" },
};

function HistoireCard({ histoire }: { histoire: (typeof HISTOIRES)[number] }) {
  const isEchec = histoire.type === "echec";
  return (
    <Link
      href={`/histoires/${histoire.slug}`}
      className="group flex flex-col overflow-hidden rounded-[14px] border border-[#e2e2e2] bg-white transition-all duration-300 hover:-translate-y-[6px] hover:border-theme-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
    >
      {/* Image mise en avant (icône stylisée, pas de photo/logo de marque tierce) */}
      <div
        className={`relative flex h-[150px] items-center justify-center ${
          isEchec ? "bg-gradient-to-br from-red-500 to-rose-700" : "bg-gradient-to-br from-theme-2 to-theme-1"
        }`}
      >
        <i className={`${histoire.icon} text-[52px] text-white/90`} />
        <span className="absolute top-4 left-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold tracking-[0.1em] text-white uppercase backdrop-blur-sm">
          {isEchec ? "Occasion manquée" : "Virage réussi"}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h2 className="mb-2 text-[19px] font-extrabold text-theme-1 group-hover:text-theme-2">{histoire.title}</h2>
        <p className="mb-4 text-sm font-semibold text-theme-2">{histoire.tagline}</p>
        <p className="mb-4 text-sm leading-6 text-body-text">{histoire.summary}</p>
        <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-theme-2">
          Lire l&apos;histoire <i className="fa fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function HistoiresHubPage() {
  const echecs = getHistoiresByType("echec");
  const reussites = getHistoiresByType("reussite");

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Histoires de transformation digitale",
    description: metadata.description,
    url: `${SITE_URL}/histoires`,
    hasPart: HISTOIRES.map((h) => ({
      "@type": "Article",
      headline: h.title,
      about: h.company,
      url: `${SITE_URL}/histoires/${h.slug}`,
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <PageTitle
        title="Histoires de transformation digitale"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Histoires" }]}
        currentPath="/histoires"
      />

      {/* Intro + disclaimer explicite */}
      <section className="pt-[90px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                {HISTOIRES.length} histoires documentées
              </span>
              <h1 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[30px]">
                Ce que le temps a fait aux entreprises qui n&apos;ont pas pris le virage à temps
              </h1>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-[40px]">
              <p className="mb-4 text-[19px] leading-9 text-theme-1">
                Certaines entreprises ont perdu leur position dominante faute d&apos;avoir pris la
                transformation digitale au sérieux à temps. D&apos;autres ont vite compris et en ont fait
                un avantage décisif. Ces histoires sont publiques et largement documentées dans la presse
                économique — sources citées sur chaque page.
              </p>
              <p className="mb-0 rounded-[10px] border-l-[3px] border-theme-2 bg-theme-3 px-5 py-4 text-sm leading-7 text-theme-1">
                Il ne s&apos;agit pas de missions ou de clients d&apos;Audyxa : ce sont des exemples
                externes, utilisés ici à titre d&apos;illustration pédagogique, avec leurs sources d&apos;origine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Échecs */}
      <section className="bg-theme-3 pt-[50px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Occasions manquées"
            title="Des entreprises qui ont perdu leur place"
            className="mb-[40px] max-w-[760px]"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {echecs.map((histoire) => (
              <HistoireCard key={histoire.slug} histoire={histoire} />
            ))}
          </div>
        </div>
      </section>

      {/* Réussites */}
      <section className="pt-[90px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Virages réussis"
            title="Des entreprises qui ont pris de l'avance"
            className="mb-[40px] max-w-[760px]"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reussites.map((histoire) => (
              <HistoireCard key={histoire.slug} histoire={histoire} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title={
          <>
            La leçon vaut aussi pour vous —
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
