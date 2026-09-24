/**
 * Domaine canonique du site. "https://audyxa.com" (sans www) redirige en
 * 308 vers "https://www.audyxa.com" : toutes les URLs absolues (canonical,
 * sitemap, robots, JSON-LD, Open Graph) doivent utiliser directement le
 * domaine www pour éviter un saut de redirection inutile.
 */
export const SITE_URL = "https://www.audyxa.com";
export const SITE_NAME = "Audyxa";

/**
 * Dernière révision connue du contenu méthode (mentionnée dans le contenu
 * lui-même : "édition août 2026"). Utilisée pour les champs datePublished /
 * dateModified réels des chapitres méthode, faute d'un système de dates de
 * contenu par article dans le CMS actuel.
 */
export const METHODE_LAST_REVISION = "2026-08-01";
