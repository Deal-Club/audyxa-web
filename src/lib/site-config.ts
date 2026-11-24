/**
 * Domaine canonique du site. "https://audyxa.com" (sans www) redirige en
 * 308 vers "https://www.audyxa.com" : toutes les URLs absolues (canonical,
 * sitemap, robots, JSON-LD, Open Graph) doivent utiliser directement le
 * domaine www pour éviter un saut de redirection inutile.
 */
export const SITE_URL = "https://www.audyxa.com";
export const SITE_NAME = "Audyxa";
/**
 * Profils officiels d'Audyxa (fournis par le propriétaire). Utilisés dans le
 * schema `sameAs` de l'organisation pour relier l'entité à ses comptes.
 */
export const SOCIAL_PROFILES = [
  "https://www.linkedin.com/in/audyxa-transformation-digitale-288241445/",
  "https://www.youtube.com/@AudyxaTransformationdigitale",
  "https://www.facebook.com/profile.php?id=61595472573878",
  "https://www.instagram.com/audyxatransforme",
  "https://www.tiktok.com/@audyxa.transforma",
  "https://x.com/AudyxaTransform",
  "https://www.threads.com/@audyxatransforme",
  "https://bsky.app/profile/audyxa.bsky.social",
  "https://mastodon.social/@audyxa",
  "https://fr.pinterest.com/atransformationdigitale",
  "https://www.tumblr.com/audyxa",
  "https://about.me/audyxa",
  "https://gravatar.com/policeclassy78b1c37d05",
  "https://stackoverflow.com/users/33218219/audyxa-transformation-digitale",
] as const;

export const SITE_LOGO_URL = `${SITE_URL}/images/logo-full.png`;
export const AUTHOR_URL = `${SITE_URL}/auteur/paul-maxime-dossou`;

/**
 * Dernière modification réelle du contenu éditorial (guides, comparatifs,
 * histoires, secteurs, pays) : réutilisée par le sitemap (`lastmod`) et les
 * schemas Article (`dateModified`). À mettre à jour à chaque révision du
 * contenu, jamais à la date du build.
 */
export const CONTENT_LAST_MODIFIED = "2026-10-16";

/**
 * Dernière révision connue du contenu méthode (mentionnée dans le contenu
 * lui-même : "édition août 2026"). Utilisée pour les champs datePublished /
 * dateModified réels des chapitres méthode, faute d'un système de dates de
 * contenu par article dans le CMS actuel.
 */
export const METHODE_LAST_REVISION = "2026-08-01";
