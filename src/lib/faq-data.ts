import type { FaqItem } from "@/lib/faq-schema";

/**
 * Contenu verbatim de la section FAQ source (3 réponses identiques dans le
 * thème d'origine, contenu de démo réel, on ne diversifie pas).
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Par où commencer quand tout semble prioritaire ?",
    answer:
      "Nous commençons par un diagnostic pour distinguer ce qui relève d'un vrai blocage métier, d'un problème de processus, de donnée ou d'outil. Cela évite de lancer des projets inutiles.",
  },
  {
    question: "Est-ce que vous intervenez seulement sur le conseil ?",
    answer:
      "Non. Audyxa combine conseil et exécution : audit, priorisation, automatisation, intégration IA, développement d'outils métier, accompagnement au déploiement et suivi des résultats.",
  },
  {
    question: "Comment savoir si un projet digital sera rentable ?",
    answer:
      "Nous relions chaque chantier à des indicateurs concrets : temps gagné, erreurs évitées, capacité libérée, meilleure qualité de donnée, gain commercial ou meilleure visibilité sur l'activité.",
  },
  {
    question: "Travaillez-vous avec des entreprises en France et en Afrique francophone ?",
    answer:
      "Oui. Notre positionnement est pensé pour accompagner des entreprises des deux marchés avec un langage simple, des solutions pragmatiques et une logique forte de retour sur investissement.",
  },
];

/** Questions de la page À propos (réutilisées sur /faq). */
export const ABOUT_FAQ_ITEMS: FaqItem[] = [
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

/** FAQ de la page /faq : questions générales + déroulé de mission, sans doublon. */
export const FAQ_PAGE_ITEMS: FaqItem[] = [...FAQ_ITEMS, ...ABOUT_FAQ_ITEMS];
