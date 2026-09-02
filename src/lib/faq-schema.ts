export interface FaqItem {
  question: string;
  answer: string;
}

/** Construit le JSON-LD FAQPage à partir d'une liste de questions/réponses réelles. */
export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
