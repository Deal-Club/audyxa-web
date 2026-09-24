/**
 * Tronque un texte pour l'utiliser comme meta description (balise
 * <meta name="description">, og:description, twitter:description), sans
 * jamais inventer de mot : coupe uniquement le texte réel déjà écrit.
 *
 * Le texte source (résumé, conclusion, réponse directe) reste volontairement
 * plus long sur la page elle-même (règle des "30% supérieurs", §4.1 du plan
 * SEO/GEO/AEO) : cette fonction ne sert qu'à produire la version courte
 * destinée aux moteurs de recherche, qui tronquent de toute façon au-delà
 * d'environ 155-160 caractères.
 *
 * Priorité de coupe : fin de phrase (. ! ?) la plus proche sans dépasser
 * `maxLength`, sinon dernière virgule, sinon dernier espace. Ne laisse
 * jamais de ponctuation orpheline en fin de chaîne.
 */
export function truncateForMeta(text: string, maxLength = 160): string {
  const clean = text.trim();
  if (clean.length <= maxLength) return clean;

  const window = clean.slice(0, maxLength + 1);

  const lastSentenceEnd = Math.max(
    window.lastIndexOf(". "),
    window.lastIndexOf("! "),
    window.lastIndexOf("? "),
    window.endsWith(".") || window.endsWith("!") || window.endsWith("?") ? window.length - 1 : -1
  );
  if (lastSentenceEnd > 40) {
    return clean.slice(0, lastSentenceEnd + 1).trim();
  }

  const lastComma = window.lastIndexOf(", ");
  if (lastComma > 40) {
    return clean.slice(0, lastComma).trim() + ".";
  }

  const lastSpace = window.slice(0, maxLength).lastIndexOf(" ");
  const cut = lastSpace > 40 ? lastSpace : maxLength;
  return clean.slice(0, cut).trim().replace(/[,;:]$/, "") + ".";
}
