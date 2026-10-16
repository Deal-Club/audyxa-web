import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { AboutSection } from "@/components/about-section";
import { AboutStorySection } from "@/components/about-story-section";
import { AboutMethodSection } from "@/components/about-method-section";
import { AboutServicesContentSection } from "@/components/about-services-content-section";
import { AboutApproachSection } from "@/components/about-approach-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { FaqSection } from "@/components/faq-section";
import { CallToAction } from "@/components/call-to-action";
import { buildFaqJsonLd } from "@/lib/faq-schema";
import { ABOUT_FAQ_ITEMS } from "@/lib/faq-data";
import { SITE_URL } from "@/lib/site-config";

const TITLE = "Notre approche : conseil et exécution digitale";
const DESCRIPTION =
  "Découvrez l'approche Audyxa : diagnostic, priorisation, déploiement et mesure pour réussir la transformation digitale des entreprises.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  // Sans ce bloc, la page hérite des valeurs Open Graph/Twitter de la home
  // (bug sitewide identifié en §2.3 du plan SEO/GEO/AEO) : chaque page doit
  // exporter ses propres title/description ici pour l'aperçu de partage.
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};


export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(ABOUT_FAQ_ITEMS)) }}
      />
      <PageTitle
        title="À propos d'Audyxa"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "À propos" }]}
        currentPath="/about"
      />
      <AboutSection
        subTitle="Qui est Audyxa"
        title="Une équipe qui cadre avant de recommander un outil"
        text="Audyxa aide les entreprises à sortir de la logique d'outils empilés sans lien entre eux. Nous cherchons d'abord ce qui bloque réellement l'activité, puis nous construisons la réponse la plus simple possible."
        listItems={[
          "Un diagnostic honnête avant toute recommandation technique.",
          "Une équipe qui conseille et qui exécute, sans intermédiaire.",
          "Un accompagnement pensé pour durer au-delà du déploiement.",
        ]}
        ctaHref="/contact"
        ctaLabel="Discuter de votre projet"
        logoMode
      />
      <AboutStorySection />
      <AboutMethodSection />
      <AboutServicesContentSection />
      <AboutApproachSection />
      <WhyChooseUs
        subTitle="Ce qui nous distingue"
        title="Une équipe qui reste responsable du résultat, pas seulement du conseil"
        text="Beaucoup de cabinets s'arrêtent à la recommandation. Nous allons jusqu'au déploiement et restons présents pour vérifier que la solution produit vraiment l'effet attendu sur le terrain."
        listItems={[
          "Cadrage clair des priorités avant tout investissement",
          "Exécution directe, sans sous-traitance en cascade",
          "Suivi des résultats après la mise en production",
        ]}
        ctaHref="/contact"
        ctaLabel="Prendre rendez-vous"
      />
      <FaqSection
        subTitle="Questions sur notre approche"
        title="Ce que nos interlocuteurs nous demandent avant de démarrer"
        items={ABOUT_FAQ_ITEMS}
        layout="two-columns"
      />
      <CallToAction
        title={
          <>
            Envie de savoir ce qu&apos;un diagnostic
            <br className="hidden min-[600px]:block" />
            révélerait sur votre organisation ?
          </>
        }
        ctaHref="/contact"
        ctaLabel="Demander un diagnostic"
      />
    </main>
  );
}
