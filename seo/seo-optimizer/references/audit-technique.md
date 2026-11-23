# Audit technique et quick wins

Sommaire : ordre de l'audit, checklist avec seuils, outils, quick wins, diagnostic d'une chute, notes Next.js, notes autres CMS.

## Ordre de l'audit [A]

Technique d'abord (indexation, vitesse, erreurs), puis on-page et contenu, puis off-page (liens), enfin diagnostic des chutes éventuelles. Un blocage technique rend inutiles les efforts de contenu.

## Checklist et seuils

| Élément | Bon | Mauvais | Confiance |
|---|---|---|---|
| Temps de chargement | moins de 3 s (idéal 1 à 2,4 s) | plus de 5 s ; 10 à 15 s = rebond massif | [B] V2, V1 |
| Poids de page | moins de 1,5 à 2 Mo | plus de 5 Mo | [B] V2 |
| Requêtes HTTP | moins de 35 à 50 | plus de 80 | [B] V2 |
| HTTPS | certificat valide partout | "Non sécurisé" | [A] V2, GL |
| Mobile | adapté, rien d'illisible | boutons non cliquables | [A] V1, V2 |
| H1 | un seul par page, avec le mot-clé | absent ou multiple | [A] V1, V2, NX |
| Meta title | moins de 60 caractères | tronqué, numéro de téléphone dedans | [A] V1, V2, PV |
| Alt des images | 100 % renseignés, descriptifs | vides ou "screenshot.png" | [A] V1, V2 |
| Données structurées | JSON-LD valide | absentes ou en erreur | [A] V1, V2, NX, E1 |
| Liens internes cassés | 0 | erreurs 404 fréquentes | [A] V1, V2 |
| Canonical | présentes et absolues | doublons de contenu | [B] V1, NX |
| Open Graph | titre, description, image | absentes | [B] V1, NX |
| Sitemap | à jour automatiquement | figé, URLs de test dedans | [B] PV, NX |
| robots.txt | n'interdit pas GPTBot, PerplexityBot, CCBot, Bingbot | bloque les robots IA par erreur | [A] NX, E1 |
| Contenu essentiel | en HTML brut | caché dans du JavaScript ou dans des images sans alt | [A] NX, E1 |
| HTML sémantique | nav, main, article, header | div partout | [B] NX |
| Hiérarchie Hn | H1, H2, H3 sans saut de niveau | niveaux sautés pour le design | [B] E1 |
| hreflang | présent si une page existe en plusieurs langues | absent | [B] PV |
| Hébergement | rapide, indexation fluide | serveur lent | [B] NX |
| Faux texte | aucun "Lorem ipsum" | laissé en production | [B] NX |
| Noms de fichiers | descriptifs (nom-du-sujet.jpg) | image1.png | [B] NX |

**Core Web Vitals [ext]** : les vidéos ne donnent pas de seuils. Repères publiés par Google : LCP 2,5 s ou moins, INP 200 ms ou moins, CLS 0,1 ou moins (mesurés au 75e centile des visites réelles).

**À compléter [ext]** : couverture d'indexation (GSC), redirections 301 et chaînes de redirections, pages orphelines, pagination, hreflang détaillé, rendu JavaScript. Les vidéos ne couvrent pas ces points : les vérifier avec les outils plutôt que de les inventer. Voir `lacunes-a-combler.md`.

## Outils cités

- Google Search Console (indexation, requêtes, CTR) [A].
- Bing Webmaster Tools : ChatGPT s'appuie en partie sur l'index de Bing ; son rapport "AI Performance" donne le nombre de citations Copilot et les "grounding queries" [B] NX, GL.
- PageSpeed Insights, GTmetrix [A].
- Extension Chrome SEO gratuite (Detailed SEO ou équivalent) pour scanner title, H1, canonical, alt, schema, Open Graph [A] V1, PV.
- Rich Results Test de Google pour les données structurées [A].
- Ahrefs, Moz, SEMrush, SpyFu, DataForSEO (par API) pour volumes, domaines référents, concurrents [A].
- Wayback Machine : vérifier qu'un domaine acheté n'a pas un passé de spam (casino, adulte) [B] V1.
- MozBar (autorité de domaine) [B] V1.
- Données dépassées [C] : Barracuda Penguin Tool et Rank Ranger pour diagnostiquer Panda et Penguin. Ces algorithmes sont intégrés au cœur de Google depuis des années [ext] ; préférer GSC et la corrélation avec les dates de mises à jour.

## Quick wins : pages en positions 5 à 20 [A]

Pourquoi : Google leur accorde déjà de la légitimité. Quelques ajustements ciblés suffisent souvent.

1. Extraire de GSC les requêtes et pages en position 5 à 20 (PV : 5 à 15) avec beaucoup d'impressions et peu de clics. Aussi dans Ahrefs ou un outil connecté à GSC.
2. Garder les mots-clés à intention d'achat. Ne pas écarter un mot-clé que les outils donnent à volume 0 s'il génère des impressions dans GSC [B] PV, V1.
3. Optimiser la page existante plutôt que d'en créer une : mot-clé et variantes dans H1, premier paragraphe, corps, FAQ.
4. Maillage : ajouter 3 à 5 liens contextuels depuis des pages qui ont déjà de l'autorité ou du trafic, avec ancres descriptives (voir `maillage-et-architecture.md`).
5. CTR : réécrire title (moins de 60 caractères) et meta description avec le mot-clé, un chiffre, un terme incitatif ("Meilleurs", "Comparatif 2026").
6. Rafraîchir le contenu obsolète, ajouter une FAQ. Le balisage FAQPage reste utile pour la structure mais ne garantit plus d'extrait enrichi [C].
7. Si utile, 1 à 3 backlinks puissants et pertinents vers l'URL ; l'effet est parfois fort sur une page déjà en 5 à 20 [B] V1, E1.
8. Demander l'indexation dans GSC après modification [B] PV.

## Diagnostic d'une chute brutale

Comparer la date de la chute aux dates de mises à jour de Google, vérifier GSC (actions manuelles, indexation, erreurs), l'historique du domaine, le profil de liens (domaines toxiques, ratio liens/domaines anormal) et les changements récents du site. Étude de cas de sortie de pénalité : `etudes-de-cas.md`.

## Notes Next.js (App Router) [B] NX

- Majorité en Server Components ; abuser de "use client" force Googlebot à exécuter du JavaScript. Récupérer les données dans les Server Components pour que le contenu soit dans le HTML initial.
- Métadonnées : `generateMetadata` pour titre et description uniques par route dynamique ; modèle de titre (`%s | Marque`) dans le layout racine ; ne pas copier les métadonnées globales sur toutes les pages. Champs `openGraph` et `twitter`, image via `opengraph-image.tsx`.
- Canonical : champ `alternates` des metadata, URL absolue.
- Rendu : SSG avec `generateStaticParams` pour les routes dynamiques stables ; SSR seulement pour les données très changeantes.
- `app/sitemap.ts` (routes statiques plus routes dynamiques avec `lastModified`) et `app/robots.ts` (interdire /admin et /api, pointer vers le sitemap). Piège fréquent : URLs `localhost` restées dans robots ou sitemap ; utiliser une variable d'environnement de production.
- `next/image` (redimensionnement, lazy loading, dimensions imposées donc moins de CLS) ; `next/font` (polices hébergées en local, moins de requêtes externes, meilleur pour le RGPD) ; `loading.tsx` et Suspense pour le streaming ; composant `Link` pour la navigation.
- HTML sémantique (nav, main, article, header). JSON-LD dans la page.

## Notes autres plateformes [ext]

WordPress : extension SEO pour title, meta, sitemap automatique, schema ; vérifier que le sitemap se met à jour (PV a constaté qu'il ne le faisait plus après avoir quitté son extension). Shopify : voir `ecommerce.md`.

## Apports du notebook CC (technique) [B]

- **Rendu** : privilégier la génération statique (page prête à l'avance) ; éviter le rendu côté client seul où Google reçoit une page vide. Cohérent avec NX pour Next.js.
- **Sitemap.xml et robots.txt** : générer les deux, interdire seulement l'administration et les pages sans valeur, soumettre le sitemap dans Google Search Console.
- **Lighthouse** (Chrome, outils de développement) : score sur SEO, accessibilité, bonnes pratiques et performance ; coller le rapport à l'agent pour corriger. L'objectif 100/100 est celui du narrateur : viser surtout de bons Core Web Vitals (seuils en [ext]) plutôt que le 100 à tout prix.
- **Search Console** : ajouter la propriété, vérifier par balise HTML, soumettre le sitemap, utiliser l'inspection d'URL puis "demander une indexation" ; limite annoncée d'environ 10 demandes par jour [C]. Indexation annoncée en un jour au lieu de semaines [C].
- Mettre en place Google Analytics ; tester plusieurs pages d'atterrissage et reprendre la meilleure comme modèle.
- **SR** : commande `site:domaine.com` pour compter les pages indexées ; Google Analytics ou Ubersuggest pour repérer les pages qui ont déjà du trafic ; quick wins par Search Console (positions 5 à 20, retravailler title et meta pour le CTR) ; vitesse : 32 % des visiteurs partent entre 1 et 3 s, 90 % entre 3 et 5 s [C, chiffres repris d'études de Google, formulation douteuse] ; SR ne donne pas de grille détaillée pour sitemap, robots.txt ou mobile.
