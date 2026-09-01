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

export const metadata: Metadata = {
  title: "Notre approche | Audyxa",
  description:
    "Découvrez l'approche Audyxa : diagnostic, priorisation, déploiement et mesure pour réussir la transformation digitale des entreprises.",
  alternates: { canonical: "/about" },
};

const ABOUT_FAQ_ITEMS = [
  {
    question: "Comment se déroule une première prise de contact ?",
    answer:
      "Nous échangeons d'abord sur votre contexte, vos priorités et vos irritants du quotidien. Cet échange permet de savoir si un diagnostic plus poussé est pertinent, sans engagement de votre part.",
  },
  {
    question: "Combien de temps dure un diagnostic ?",
    answer:
      "Cela dépend de la taille de l'organisation et du nombre de processus concernés. Le diagnostic reste ciblé : il vise à identifier rapidement les priorités, pas à produire un audit exhaustif interminable.",
  },
  {
    question: "Restez-vous impliqués après le déploiement d'une solution ?",
    answer:
      "Oui. Une transformation qui n'est pas suivie finit souvent par ne pas être adoptée. Nous accompagnons la période d'adoption et ajustons ce qui doit l'être une fois la solution en usage réel.",
  },
  {
    question: "Votre approche s'adapte-t-elle aux petites structures ?",
    answer:
      "Oui, notre méthode est pensée pour rester proportionnée : on ne propose pas la même ampleur d'intervention à une PME et à un grand groupe, mais la même rigueur de diagnostic s'applique à toutes les tailles.",
  },
  {
    question: "Que se passe-t-il si le diagnostic ne révèle pas de besoin clair ?",
    answer:
      "Nous le disons simplement. Si aucun chantier ne justifie un investissement à ce moment-là, nous préférons le dire plutôt que de proposer une solution qui ne servirait pas votre activité.",
  },
  {
    question: "Faut-il déjà avoir des outils en place pour vous solliciter ?",
    answer:
      "Non. Nous intervenons aussi bien pour structurer une organisation qui démarre que pour clarifier un environnement déjà équipé mais devenu difficile à piloter.",
  },
];

export default function AboutPage() {
  return (
    <main>
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
