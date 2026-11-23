import { GUIDES, type Guide } from "@/lib/guide-content";
import { DECISION_PAGES, type DecisionPage } from "@/lib/decision-content";

function overlap(a: readonly string[], b: readonly string[]): number {
  return a.filter((x) => b.includes(x)).length;
}

/**
 * Choisit `count` éléments voisins de `current` : d'abord ceux qui partagent le
 * plus de thèmes (score), puis, à score égal, les plus proches dans la liste en
 * ordre circulaire. Ce départage répartit les liens entre toutes les pages
 * (un `slice(0, 3)` fixe renverrait toujours les trois mêmes).
 */
function pickRelated<T extends { slug: string }>(
  list: readonly T[],
  current: T,
  score: (other: T) => number,
  count: number
): T[] {
  const index = list.findIndex((item) => item.slug === current.slug);
  return list
    .filter((item) => item.slug !== current.slug)
    .map((item) => ({
      item,
      score: score(item),
      distance: (list.indexOf(item) - index + list.length) % list.length,
    }))
    .sort((a, b) => b.score - a.score || a.distance - b.distance)
    .slice(0, count)
    .map((entry) => entry.item);
}

export function relatedGuides(guide: Guide, count = 3): Guide[] {
  return pickRelated(
    GUIDES,
    guide,
    (other) =>
      overlap(guide.relatedMethodSlugs, other.relatedMethodSlugs) +
      overlap(guide.relatedServiceSlugs, other.relatedServiceSlugs),
    count
  );
}

export function relatedDecisionPages(page: DecisionPage, count = 3): DecisionPage[] {
  return pickRelated(
    DECISION_PAGES,
    page,
    (other) => overlap(page.relatedMethodSlugs ?? [], other.relatedMethodSlugs ?? []),
    count
  );
}

export function guidesForService(serviceSlug: string): Guide[] {
  return GUIDES.filter((g) => g.relatedServiceSlugs.includes(serviceSlug));
}

export function guidesForChapter(chapterSlug: string): Guide[] {
  return GUIDES.filter((g) => g.relatedMethodSlugs.includes(chapterSlug));
}

export function decisionPagesForChapter(chapterSlug: string): DecisionPage[] {
  return DECISION_PAGES.filter((d) => (d.relatedMethodSlugs ?? []).includes(chapterSlug));
}
