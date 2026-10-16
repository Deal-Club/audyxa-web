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

  const window = clean.slice(0, maxLength);
  const MIN_USEFUL = 90;

  const lastSentenceEnd = Math.max(
    window.lastIndexOf(". "),
    window.lastIndexOf("! "),
    window.lastIndexOf("? "),
    window.endsWith(".") || window.endsWith("!") || window.endsWith("?") ? window.length - 1 : -1
  );
  const sentenceCut = lastSentenceEnd > 40 ? clean.slice(0, lastSentenceEnd + 1).trim() : null;
  if (sentenceCut && sentenceCut.length >= MIN_USEFUL) return sentenceCut;

  // Une première phrase trop courte donne une description pauvre : on préfère
  // alors couper à la dernière virgule qui garde une description utile.
  const lastComma = window.slice(0, maxLength - 1).lastIndexOf(", ");
  if (lastComma >= MIN_USEFUL) {
    return clean.slice(0, lastComma).trim() + ".";
  }
  if (sentenceCut) return sentenceCut;
  if (lastComma > 40) {
    return clean.slice(0, lastComma).trim() + ".";
  }

  const lastSpace = window.slice(0, maxLength - 1).lastIndexOf(" ");
  const cut = lastSpace > 40 ? lastSpace : maxLength - 1;
  return clean.slice(0, cut).trim().replace(/[,;:]$/, "") + ".";
}

/**
 * Meta description à partir d'un texte principal. Si le principal est trop
 * court pour une description utile (< 90 caractères), on lui ajoute un texte
 * complémentaire réel de la même page, sans dépasser `maxLength`.
 */
export function buildMetaDescription(primary: string, secondary = "", maxLength = 160): string {
  const main = primary.trim();
  if (main.length >= 90 || !secondary.trim()) return truncateForMeta(main, maxLength);
  const room = maxLength - main.length - 1;
  const extra = truncateForMeta(secondary, room);
  return extra.length > 0 && extra.length <= room ? `${main} ${extra}` : main;
}
