# SEO Changelog : audyxa.com

Journal tenu par le skill `seo-optimizer` (phase 4). Un lot = une branche.

## Base de départ (Search Console, 12 mois, type Web, export du 2026-11-24)

| Mesure | Valeur |
|---|---|
| Clics | 17 |
| Impressions | 2 220 |
| CTR moyen | 0,8 % |
| Position moyenne | 38,3 |
| Premières données | 2026-10-08 (site récent dans Google) |

Pages avec le plus d'impressions et 0 clic (cibles de quick win) :

| Page | Impressions |
|---|---|
| /guides/mesurer-maturite-numerique-entreprise | 236 |
| /services/audit-diagnostic-digital | 189 |
| /guides/cartographier-processus-as-is-to-be | 146 |
| /methode/crm-vente-service-client-omnicanal | 142 |
| /comparatifs/consultant-independant-vs-cabinet-vs-agence-digitale | 93 |
| /comparatifs/automatisation-vs-ia-que-choisir | 91 |
| /pays/suisse/sion | 80 |

Requêtes avec le plus d'impressions : crm omnicanal (95), maturité numérique (73), agence web vs consultant indépendant (69), diagnostic digital entreprise (61), diagnostic transformation digitale (53), audit numérique entreprise (43).

Manque : la colonne Position par requête et par page (à exporter) pour isoler les positions 5 à 20.

Base de départ PageSpeed mobile (rapport de l'utilisateur, 2026-11-11) : performance 75, LCP 5,6 s, accessibilité 100, bonnes pratiques 100, SEO 100.

## Lot 0 (hors skill, déjà en ligne)

- Titles : 121 trop longs corrigés (aucun au-dessus de 60 caractères). Descriptions entre 70 et 160 caractères.
- Fautes de préposition sur les pays (au Belgique, au Suisse, au RD Congo, au Madagascar).
- Page /faq : texte lorem ipsum remplacé par la vraie FAQ + FAQPage.
- Article : dateModified, auteur, logo. WebSite dans le layout. llms.txt généré.
- Performance : CSS inliné, slider allégé, logos WebP. Lighthouse local : 57 → ~76.

## Lot 1 : maillage, titres Hn, résumés « En bref » (branche seo/lot-1-maillage-hn-resume)

- Maillage : `src/lib/related-content.ts` remplace les `slice(0, 3)` fixes (toujours les 3 mêmes guides et comparatifs) par des voisins choisis par thèmes communs, avec départage circulaire.
- Nouveaux blocs de liens contextuels (`RelatedLinks`) : guides liés sur les pages service, guides et comparatifs liés sur les chapitres de méthode, guides liés sur les comparatifs.
- Pages villes : le gabarit riche (villes enrichies) n'avait aucun bloc de villes voisines. Ajouté, avec la ville principale du pays. Voisines circulaires au lieu des 6 premières.
- Grammaire : `countryDe` / `countryLocative` remplacent « du / au {pays} » codés en dur (Belgique, Suisse, RD Congo, Madagascar).
- Hn : titres de cartes h5/h6 passés en h3 (même taille) sur l'accueil, à propos, services, contact.
- AEO : bloc « En bref » en tête de l'accueil et des 7 hubs (services, guides, comparatifs, secteurs, méthode, pays, histoires), avec le texte de leur description réelle.

Mesures (audit local, 374 pages) :

| Indicateur | Avant | Après |
|---|---|---|
| Pages avec moins de 2 liens entrants depuis le contenu | 162 | 2 (/faq et /services/chatbot-whatsapp restent à relier) |
| Pages avec saut de niveau de titres | 4 | 1 |
| Pages avec réponse ou résumé en tête | 292 | 300 |

Points de contrôle : 2, 4 et 12 semaines après mise en ligne (comparer clics, impressions, position dans Search Console).
