import type { FaqItem } from "@/lib/faq-schema";

/**
 * Contenu verbatim de la section FAQ source (3 réponses identiques dans le
 * thème d'origine — contenu de démo réel, on ne diversifie pas).
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
