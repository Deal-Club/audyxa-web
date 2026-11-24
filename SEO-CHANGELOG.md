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

Base de départ Bing Webmaster Tools (2026-11-24, rapport AI Performance, 3 mois) : 0 citation Microsoft Copilot, 0 page citée, aucune grounding query. Propriétés ajoutées : www.audyxa.com et formation.audyxa.com.

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

## IndexNow (branche seo/indexnow, préparé, pas encore envoyé)

- Clé publique `public/d78b11e0018a739c8cc892842a75b68a.txt` (preuve de propriété du domaine pour Bing et partenaires).
- `scripts/indexnow.mjs` + `npm run indexnow` : simulation par défaut (affiche les URLs, n'envoie rien). `-- --send` envoie vraiment, après vérification que la clé est en ligne. Chemins précis possibles : `npm run indexnow -- --send /faq /guides/x`.
- Ordre : déployer d'abord le fichier clé, puis lancer l'envoi.

## Lot 2 : quick wins sur 3 pages à impressions sans clic (branche seo/lot-2-quick-wins)

Pages ciblées (impressions Search Console, 0 clic) et requêtes réelles visées :

| Page | Impressions | Requêtes visées |
|---|---|---|
| /guides/mesurer-maturite-numerique-entreprise | 236 | maturité numérique, test maturité numérique, diagnostic maturité numérique, maturité digitale |
| /services/audit-diagnostic-digital | 189 | diagnostic digital entreprise, audit numérique entreprise, diagnostic transformation digitale |
| /methode/crm-vente-service-client-omnicanal | 142 | crm omnicanal, système omnicanal ia, interaction client omnicanale ia |

Changements (aucun chiffre ni fait ajouté : chaque réponse reprend un contenu déjà présent sur la page) :

- Title SEO réécrit autour de la requête exacte (H1 inchangé) : « Maturité numérique : comment la mesurer en entreprise », « Audit numérique et diagnostic digital d'entreprise », « CRM omnicanal : vente, service client et IA ».
- Réponse en tête : définition explicite de « maturité numérique » (guide), « audit numérique » et « diagnostic digital d'entreprise » (service), « CRM omnicanal » (résumé du chapitre).
- FAQ : 6 questions par page (3 à 4 ajoutées, formulées comme les requêtes réelles), visibles sur la page et dans le schema FAQPage.
- Maillage : le guide renvoie vers le service d'audit et le chapitre « Fondements et maturité numérique ».
- Description du service réécrite avec « audit et diagnostic digital d'entreprise ».

Vérifié en local : 374 pages sans title au-dessus de 60 caractères ni description hors de 70 à 160 caractères.

À mesurer : clics, impressions et position de ces 3 pages et de leurs requêtes à 2, 4 et 12 semaines (base : 0 clic ; 236, 189 et 142 impressions).

## Lot 3 : sources liées (branche seo/lot-3-sources-liees)

81 citations de sources (71 uniques) sur les pays, secteurs et services ont été recherchées par 6 agents. Règle : un lien n'est ajouté que si la page a été ouverte et contient le chiffre, et si le lien correspond à la source nommée (page primaire, ou relais cité explicitement).

- **23 liens appliqués** (composant `SourceLink`, `rel="noopener noreferrer"`).
- **22 citations vérifiées mais non liées** : le lien contredirait ou nuancerait le texte du site (voir tableau 1, à décider par le propriétaire).
- **36 citations non vérifiées** : source vague, page inaccessible (403, délai dépassé, PDF illisible) ou chiffre introuvable (tableau 2). Aucune URL n'a été devinée.

### Tableau 1 : écarts entre le site et la source (à corriger ou à nuancer)

| Id | Chiffre | Source citée sur le site | Écart constaté |
|---|---|---|---|
| 2 | 48 % | ADPME Bénin, étude ACED-ACUMEN 2023 | Étude publiée par la GIZ (réalisée par ACED & ACUMEN, 2023). L'ADPME n'est pas l'éditeur : elle est seulement citée dans le rapport ; l'attribution 'ADPME Bénin' est à corriger en 'GIZ / ACE |
| 3 | 93 % | ADPME Bénin, étude ACED-ACUMEN 2023 | Même étude GIZ / ACED-ACUMEN 2023 ; l'ADPME n'en est pas l'auteur. Attention : le rapport 'Transformation numérique au Bénin' donne aussi 93% mais pour la localisation dans le sud, pas le fi |
| 7 | 42/100 | Étude Econuma | Relais IT Mobile Afrique ; publication originale Econuma non retrouvée (le PDF econuma.com 'transformation digitale TPE/PME' n'a pas été ouvert). Formulation 'autour de 42/100'. |
| 11 | 2,81 % | Thèse A. S. Kaboré, Université Thomas Sankara, 2026, citée par Burkina | Article Burkina24 sur la thèse de A. S. Kaboré (UTS, juin 2026). Le 75 % est un taux mondial estimé pour 2025 ('loin du taux mondial estimé à 75 % en 2025'), pas un objectif : à reformuler. |
| 19 | 82 Md FCFA | Ministère de l'Économie numérique du Gabon, via Agence Ecofin | Article Ecofin non retrouvé; relais Gabonreview. Il s'agit d'un budget demandé au Parlement (PLF 2026, 19/10/2025), base de comparaison 32 Md en 2024 (pas 2025). |
| 27 | 1 facture sur 10 | Baromètre TPE/PME Moore Belgium x Trends x OECCBB, octobre 2025 | Blog OECCBB; l'article cite le Baromètre PME/Experts-comptables 2025 de Trends-Tendances (oct. 2025, enquête sept. 2025) mais n'attribue pas explicitement le chiffre à Moore Belgium; attribu |
| 28 | 82 % vs 36 % | Étude PME Digital Pulse 2025, localsearch x HES-SO Lucerne | Étude KMU Digital Pulse 2025 (localsearch x HSLU). Nuance: la page dit 36 % des PME ont un site web (pas 'adéquat'); formulation du site à ajuster. Lecture via résumé de page. |
| 32 |  | Données BCEAO citées par Sikafinance et Koaci, 2025 | Chiffres exacts, mais Lesafriques les attribue a l'ARTCI (regulateur telecoms), pas a la BCEAO, et parle d'abonnements. Sikafinance/Koaci non ouverts. Adapter la mention de source. |
| 34 |  | Togo First, 2024 | Donnee ARCEP T1 2024 relayee par Togo First (24 juillet 2024). Il s'agit de la part des ABONNES, pas du marche en valeur; a preciser dans le texte du site. |
| 42 | 11 % | FEVAD, 2025 | Relais du bilan annuel Fevad 2024; la page ne precise pas les exclusions (carburant, pharmacie). A noter: la Fevad estime 12 % pour 2025 (fevad.com), donc 11 % = 2024 correct. 'seulement' es |
| 43 | 31 % | FEVAD, 2025 | Chiffre exact retrouvé via relais (page fevad.com du bilan 2024 ne mentionne pas les marketplaces; étude complète réservée aux membres). Attention: 31 % est la donnée 2024 (publiée en 2025); |
| 45 | 8 sur 10 | DREES/Insee, février 2026 | Page ouverte. 'Plus de huit sur dix' et 'plus de six sur dix' (pas '60 %' exact; formulation à ajuster). Opinions issues du Baromètre d'opinion DREES 2023, pas de 2024. |
| 47 | 56/100 | UIT, ICT Development Index 2025 | Seul relais trouvé (La Vie Éco). Page UIT IDI 2025 ouverte mais ne donne pas la moyenne Afrique; PDF UIT illisible par l'outil. Source primaire non confirmée directement. |
| 49 | 89 % / 82 % | UNESCO, communiqué du 21 avril 2020 | Relais citant l'UNESCO (infographie du 21 avril 2020, données UIT). Page UNESCO primaire non ouverte. |
| 58 | 45,0 % → 22,4 % | ONU DESA, UN E-Government Survey 2024 | Note: le chapitre 3 du rapport donnerait 23,7 % (incoherence interne signalee par une recherche, non verifiee par ouverture). |
| 66 | 350 M€/an | Enedis / CRE | Article de dec. 2021: projection, pas un constat 'depuis 2025'; relaie Enedis/CRE. Formulation du site ('gains generes') plus affirmative que la source. |
| 67 | 2018 | OHADA, Acte uniforme adopté le 26 janvier 2017, publié au Journal offi | Site officiel OHADA. Dates 26/01/2017 et JO 15/02/2017 vues dans resultats de recherche, non ouvertes une a une. |
| 68 | 17 États | OHADA, Acte uniforme relatif au droit comptable et à l'information fin | Source: page OHADA des Etats membres (l'application du referentiel comptable par les 17 est une inference raisonnable, non textuelle). |
| 74 | ~1 %/an | McKinsey Global Institute, 2017 | Relais (Construction Dive) du rapport McKinsey Global Institute 2017; page mckinsey.com non ouvrable (timeout). Le '20 ans / par an' n'est pas explicite dans la phrase relevée. |
| 75 | 1 600 Md$ | McKinsey Global Institute, 2017 | Relais (Construction Dive) du rapport MGI 2017; page McKinsey primaire non ouvrable (timeout). Formulation 'value added annuelle' non confirmée sur cette page. |
| 76 | 26 % | France Num, Baromètre du numérique dans les TPE-PME, 6ᵉ édition, 2025 | Relais; la page primaire DGE (entreprises.gouv.fr/espace-presse/france-num-presente-la-6e-edition-de-son-barometre-annuel-sur-la-transformation) confirme 26 % 'doublé' sans citer 13 %. |
| 78 | 26 % | France Num, Baromètre du numérique dans les TPE-PME, 6ᵉ édition, 2025 | Idem 76; primaire DGE confirme 26 % doublé. |

### Tableau 2 : citations non vérifiées (aucun lien ajouté)

| Id | Chiffre | Source citée sur le site | Pourquoi |
|---|---|---|---|
| 8 | 56,9 % | Données citées par plusieurs médias spécialisés, à recouper | Chiffres 56,9 % (zone urbaine de Dakar) / 15,9 % (rural) attribués par une recherche à un blog PNUD Sénégal citant l'ANSD (EHCVM), mais la page undp.org/fr/senegal/blog/le-senegal-en-passe-d |
| 13 | 65 % | Banque mondiale, Global Findex | Chiffres 65 % (2021) / 21 % (2015) du PIB malien en transactions mobiles introuvables : le diagnostic Banque mondiale Mali ouvert ne les contient pas, les recherches n'ont rien donné. Ne cor |
| 17 | 57 % vs 23 % | Données ITU Afrique 2025, recoupées par plusieurs médias | Introuvable. DataReportal Cameroun 2026 ne donne pas de split urbain/rural d'usage internet (60,6 % urbain / 39,4 % rural = répartition de population, 41,9 % de pénétration globale). Source  |
| 24 | 18 Md ariary | Unité de Gouvernance Digitale malgache, via L'Express Madagascar | Aucune source trouvée pour '18 Md ariary' ni pour l'Unité de Gouvernance Digitale. Les articles trouvés (L'Express 2021, Newsmada 2026) indiquent au contraire un recul de la digitalisation d |
| 26 | 84 % | Eurostat, Digitalisation in Europe, 2025 | Eurostat 'Digitalisation in Europe' 2026 donne UE 71 % (données 2025) mais pas de chiffre Belgique. 83,7 % Belgique (arrondi 84 %) vient du rapport Digital Decade 2025 de la Commission (UE 7 |
| 29 | 54 % | Eurostat, Digitalisation in Europe, 2024 | Page Eurostat 'Digitalisation in Europe' ouverte: seule la valeur UE (73 % des PME au niveau de base) est donnee, aucune valeur Luxembourg 54 % / UE 55 % retrouvee. Chiffre non verifie. |
| 30 | 20-28 % | Eurostat / STATEC, 2024 (fourchette à confirmer) | Aucune valeur Eurostat/STATEC 2024 pour le Luxembourg retrouvee sur page ouverte (UE 2024: 13,5 %; Luxembourg 2023: 14,4 % selon recherche, non ouvert). Fourchette 20-28 % non confirmee. |
| 31 |  | La Marina Bénin, mai 2026 | Ecart: PDF ARCEP Benin T2 2025 (https://arcep.bj/wp-content/uploads/2025/10/Tableau-de-bord-SFM-T2_2025.pdf, ouvert): 8,24 % = part de Moov en VALEUR des transactions (pas en comptes actifs) |
| 33 |  | Presse spécialisée (Seneweb, Riverpe), 2025, à recouper avec les donné | Source vague (presse specialisee, a recouper). Aucune page ouverte confirmant que Wave est le plus utilise au Senegal; seules des recherches indirectes (tarif 1 %). |
| 35 |  | Presse spécialisée (Fiitsa, Yiri), 2024-2025, à recouper avec les donn | Source vague (presse specialisee, a recouper). Chiffres 5,2 M / 2 M utilisateurs actifs Burkina introuvables; recherche donne d'autres valeurs (plus de 10 M comptes actifs). |
| 36 |  | Agence Ecofin, 2024 | Ecart: page Osiris/Agence Ecofin (22 nov 2024, https://www.osiris.sn/mali-orange-a-renforce-son-leadership-dans-le-mobile-money-entre-2020-et-2023.html, ouverte): 62 % = part Orange en telep |
| 37 |  | Agence Ecofin et Agence Nigérienne de Presse, 2024 | Aucun article Agence Ecofin / ANP precis ouvert; seule la liste BCEAO (sept 2024) confirme les services Orange Money, Moov Flooz, Airtel Money au Niger, sans classement ni mention du frein d |
| 38 |  | Agence Ecofin et Guinéenews, décembre 2024 | Guineenews (31 dec 2024, ouverte) confirme le rachat de 75 % au franc symbolique mais ne mentionne ni Areeba ni Orange Money. Ecofin 403 / non ouvert. Rachat confirme, nom Areeba et leadersh |
| 40 | 1,2 milliard | GSMA, State of the Industry Report on Mobile Money, 2025 | Ecart: rapport GSMA 2025 (PDF ouvert) donne 1,1 Md de comptes enregistres pour 'Africa' (donnees 2024) et 66 % de la valeur mondiale; pas 1,2 Md. Pas de mention 'subsaharienne et du Nord'. U |
| 46 | 6,2 M€ | ANIA, communiqué officiel | Écart: AGRA (agra.fr/agra-innovation/num-alim-future-alternative-aux-applications-nutritionnelles) cite le DG du FFAS: 'Nous chiffrons le développement de Num-Alim à 6,5 millions d'euros', f |
| 48 | 75 % | GSMA, The Mobile Economy Africa 2025 | Pages GSMA (Mobile Economy Africa 2025) renvoient 403 et PDF illisible: non ouvert. Une recherche affirme 64 % usage gap et ~75 % non connectés, mais non vérifié sur page. Les articles trouv |
| 50 | 180,1 Md€ | Ministère de l'Éducation nationale, édition 2024 | Page DEPP (180 milliards d'euros ... 2022, 6,8 % du PIB) et RERS en 403, non ouvertes. Insee Portrait social 2024 (ouvert) donne 6,8 % pour 2022 mais 181,3 Md€ (série révisée) au lieu de 180 |
| 51 | 67 % | Deloitte, Digital Insurance Maturity 2025, juillet 2025 | Pages Deloitte ouvertes (gr, es): aucune mention de 67 %, 52,3 % EMEA ni 4e en UX pour la France. Chiffres par pays probablement dans le rapport PDF complet, non accessible. Non vérifié. |
| 52 | 84 % | Deloitte, juillet 2025 | Aucun 84 % trouvé sur les pages Deloitte ouvertes ni dans les recherches. Non vérifié. |
| 53 | 3 M€ | France 2030 / DGE, feuille de route Logistique et transport de marchan | Pages DGE (feuille de route logistique, guide IA) ouvertes: aucune mention de 3 M€ sur 2 ans ni de 2,5 Md€. PDF de la feuille de route illisible par l'outil. Non vérifié. |
| 54 | 1,208 million | Notaires de France / Observatoire de la Proptech, cités par Septeo | Écart: 1,208 million = total sur 12 mois glissants à fin août 2021 (logements anciens, Notaires), pas le total annuel 2021 (~1,178 million fin déc. 2021). Le 46 % et le lien Septeo/Observato |
| 55 | 100 M€ | FNAIM / French Proptech, décembre 2024 | Écart: mysweetimmo (12/12/2024, ouvert) indique 'un premier closing début 2025 à hauteur de 15 Millions d'euros'; aucun objectif de 100 M€ trouvé pour le fonds Propulse (100 M€ concerne un a |
| 56 | 26 % | France Num, Baromètre du numérique dans les TPE-PME, 6ᵉ édition, 2025 | Partiel: 26 % des TPE-PME utilisent l'IA en 2025 confirmé sur entreprises.gouv.fr (cette proportion a doublé, donc ~13 % en 2024, implicite), mais les 42 % (50-249 sal.) et 23 % (1-4 sal.) n |
| 57 | 1 sur 4 | La Fabrique de l'industrie / McKinsey, novembre 2025 | Etude McKinsey/La Fabrique/Ipsos (nov. 2025, 1198 PMI-ETI FR/IT/DE) identifiee, mais PDF non lisible et aucune page ouverte ne contient '1 sur 4' PME / ~60 % ETI pour l'usine connectee. |
| 59 | 24 % / 26 % | Cour des comptes, 2024 | Chiffres 24 %/26 % introuvables. Sources vues: panorama/Senat 26,6 % de retard et 36,6 % de depassement (non ouvert); rapport Cour des comptes 2020 (vie-publique) et article LMI ouverts sans |
| 60 | 47 % / 23 % | Baromètre Solidatech x Recherches & Solidarités, 5ᵉ édition, novembre  | Le 47 % 'en bonne voie' existe d'apres un extrait de recherche (communique Solidatech/R&S) mais le 23 % 'eloignes' n'a pas pu etre confirme; PDFs non lisibles a l'ouverture. |
| 62 | 75 % / 41 % | Étude HES-SO Valais-Wallis, 1 500+ hôtels dans 6 pays européens, août  | 41 % et 68 % trouves, mais l'enquete IA porte sur plus de 1 000 hotels dans 5 pays (AT, FR, DE, IT, CH). Le 75 % PMS vient d'une autre enquete (1 500 hotels, 6 pays): https://www.hospitality |
| 63 | 72 % / 33-56 % | Baromètre numérique et BIM, ministère de la Transition écologique, 202 | Page ecologie.gouv.fr/politiques-publiques/batiment-numerique ouverte: methodologie (2 005 acteurs, Majors Consultants, fev-avr 2024) mais pas 72 % ni 33-56 %; resultats dans un PDF non trou |
| 64 | ~1 %/an | McKinsey Global Institute, 2017 | Chiffres (1 %/an vs 2,8 %, 1,6 Md$) vus dans un extrait de recherche attribue au rapport MGI Reinventing Construction (fev. 2017), mais pages McKinsey en timeout, donc non ouvertes. |
| 65 | 95-97 % | Enedis / CRE | Aucune page ouverte ne confirme 95-97 % ni l'objectif 100 % fin 2026 (une reponse ministerielle AN indiquerait 95 %, PDF illisible). Que Choisir (dec. 2021) parle de 10 % restant. |
| 70 | depuis 2000 | UEMOA, e-docucenter | Entree en application du TEC UEMOA en janvier 2000 evoquee par sources secondaires (FERDI PDF illisible, memoires); aucune page e-docucenter ouverte ne le confirme. Page WIPO ouverte = Code  |
| 71 | 62 % / 69 % | Rapport GEM 2026 de l'UNESCO, cité par Forbes Afrique, 21 septembre 20 | Article Forbes Afrique et tableaux du rapport GEM 2026 introuvables; 62 %/69 % non retrouvés. |
| 77 | 42 % vs 23 % | France Num, Baromètre 2025 | Ventilation par taille (42 % vs 23 %) absente de toutes les pages ouvertes (DGE 2025, Blog du Modérateur, LMI); non retrouvée. |
| 79 | 20-28 % | Eurostat / STATEC, 2024 | Fourchette 20-28 % non retrouvée. Trouvé: Eurostat 2023 14,4 % (10+ sal.); LISER via Paperjam 2024: 23 % (14,3 % corrigé), https://paperjam.lu/article/le-luxembourg-en-tete-de-lusage-de-lia- |
| 80 | 1 sur 4 | La Fabrique de l'industrie / McKinsey, novembre 2025 | Étude La Fabrique/McKinsey/Ipsos nov. 2025 existe, mais PDF illisibles via les outils; '1 sur 4' et '~60 %' non confirmés. |
| 81 | 24 % / 26 % | Cour des comptes, 2024 | 24 %/26 % non retrouvés. Un document Sénat cite retard moyen 26,6 % et dépassement 36,6 % (autre valeur, non daté 2024); rapport Cour des comptes non ouvert. |

Non traité dans ce lot : les 160 citations des pages villes (90 sources uniques), à vérifier dans un lot suivant.

## Lot 4 : sources des pages villes (branche seo/lot-4-sources-villes)

160 chiffres de pages villes (90 sources uniques), recherchés par 7 agents (un groupe de pays chacun). Même règle que le lot 3 : lien seulement si la page a été ouverte, contient le chiffre exact et correspond à la source nommée.

- **33 liens appliqués.**
- **40 chiffres confirmés sur une page de relais sans réserve, non liés** : la citation nomme un institut (INSEED, INS, ANSD, INSAE...) mais le chiffre n'a été retrouvé que sur citypopulation.de (53 cas) ou un autre relais. Option à décider : afficher « via citypopulation.de » avec le lien.
- **54 chiffres avec une réserve ou un écart** (tableau 1).
- **33 chiffres non vérifiés** (tableau 2).

### Tableau 1 : réserves et écarts constatés (non liés)

| Id | Pays | Chiffre | Source citée | Réserve |
|---|---|---|---|---|
| 1 | belgique | 1 255 795 | Statbel (Registre national), population au 1er janvier 2025 | Mini-Bru 2026 (IBSA/perspective.brussels), chiffre de la RBC au 1er janvier 2025 ; reprend Statbel. Page Statbel inaccessible (captcha). |
| 3 | belgique | 197 323 | Statbel (Registre national), population au 1er janvier 2025, | Fiche IWEPS T003-POP.URB (juin 2026) reprenant Statbel ; chiffre de la commune centrale. Page Statbel directe inaccessible (captcha). |
| 5 | belgique | 205 763 | Statbel (Registre national), population au 1er janvier 2025, | Fiche IWEPS T003-POP.URB (juin 2026) reprenant Statbel ; chiffre de la commune centrale. Page Statbel directe inaccessible (captcha). |
| 6 | belgique | 54,8 % | IWEPS (Walstat) pour Charleroi 2023, cité par La Dernière He | 54,8 % en 2023 confirmé (L'Avenir, 28/02/2025, chiffres IWEPS) ; ce n'est PAS l'article DH de juillet 2025 cité par le site (introuvable). Tranche 20-64 ans non confirmée par  |
| 7 | belgique | 115 029 | Statbel (Registre national), population au 1er janvier 2025, | Fiche IWEPS T003-POP.URB (juin 2026) reprenant Statbel ; chiffre de la commune centrale. Page Statbel directe inaccessible (captcha). |
| 8 | belgique | 97 120 | Statbel (Registre national), population au 1er janvier 2025, | Fiche IWEPS T003-POP.URB (juin 2026) reprenant Statbel ; chiffre de la commune centrale. Page Statbel directe inaccessible (captcha). |
| 9 | belgique | 68 991 | Statbel (Registre national), population au 1er janvier 2025, | Fiche IWEPS T003-POP.URB (juin 2026) reprenant Statbel ; chiffre de la commune centrale. Page Statbel directe inaccessible (captcha). |
| 11 | belgique | 81 060 | chiffre du 1er janvier 2024 rapporté par L'Avenir, à vérifie | Chiffre de presse ; UVCW/IWEPS donnent 81 241 au 1.1.2024, donc écart avec les sources officielles. Libellé du site déjà prudent. |
| 12 | belgique | 56 127 | Statbel (Registre national), population au 1er janvier 2025, | Fiche IWEPS T003-POP.URB (juin 2026) reprenant Statbel ; chiffre de la commune centrale. Page Statbel directe inaccessible (captcha). |
| 15 | benin | 267 812 | recensement RGPH4, Institut National de la Statistique et de | Recensement 2013 (RGPH4) confirmé sur citypopulation.de (source INSAE) ; page INSAE non ouverte. Autres éléments du libellé (taux de croissance, part départementale, rang) non |
| 16 | benin | 171 781 | recensement RGPH4, INSAE, 2013 (plaquette du département du  | Recensement 2013 (RGPH4) confirmé sur citypopulation.de (source INSAE) ; page INSAE non ouverte. Autres éléments du libellé (taux de croissance, part départementale, rang) non |
| 17 | benin | 179 290 | recensement RGPH4, INSAE, 2013 | Recensement 2013 (RGPH4) confirmé sur citypopulation.de (source INSAE) ; page INSAE non ouverte. Autres éléments du libellé (taux de croissance, part départementale, rang) non |
| 18 | benin | 104 961 | recensement RGPH4, INSAE, 2013 (plaquette du département du  | Recensement 2013 (RGPH4) confirmé sur citypopulation.de (source INSAE) ; page INSAE non ouverte. Autres éléments du libellé (taux de croissance, part départementale, rang) non |
| 19 | benin | 162 034 | recensement RGPH4, INSAE, 2013 (plaquette du département de  | Recensement 2013 (RGPH4) confirmé sur citypopulation.de (source INSAE) ; page INSAE non ouverte. Autres éléments du libellé (taux de croissance, part départementale, rang) non |
| 20 | benin | 92 266 | recensement RGPH4, INSAE, 2013 (plaquette du département du  | Recensement 2013 (RGPH4) confirmé sur citypopulation.de (source INSAE) ; page INSAE non ouverte. Autres éléments du libellé (taux de croissance, part départementale, rang) non |
| 29 | cameroun | 1993 | Wikipédia EN, article University of Ngaoundéré (consulté en  | L'infobox indique 19 July 1993 (incohérent) mais le texte et la référence donnent bien 1993 / décret 93/028. |
| 33 | cameroun | 78 300 | BUCREP, 3e recensement général de la population et de l'habi | 64 761 + 13 539 = 78 300 ; relais citypopulation.de du recensement 2005 BUCREP (page BUCREP primaire non ouverte). |
| 35 | cameroun | 73 759 t → 34 431 t | Chambre des comptes de la Cour suprême, rapport d'audit sur  | Chiffres présents dans EcoMatin mais l'article ne les attribue pas explicitement à la Chambre des comptes ; page de l'audit sur chambredescomptes.cm ouverte sans ces chiffres. |
| 38 | cameroun | 70 565 habitants | BUCREP/INS Cameroun, recensement général 2005, via Wikipédia | 29 886 + 40 679 = 70 565 (recensement 2005) ; citypopulation.de, pas la page Wikipédia citée par le site (non ouverte). |
| 39 | cameroun | 101 385 habitants | Bureau central des recensements et des études de population  | 101 385 confirmé. ATTENTION : 63 161 (zone urbaine) introuvable ; citypopulation (page villes) donne 63 838 pour la ville de Dschang en 2005. |
| 41 | cameroun | 5 548 à 26 829 tonnes | AGRI-STATS (annuaire des statistiques agricoles du Cameroun) | Mémoire sur la tomate à Dschang (memoireonline) ; la mention AGRI-STATS et l'appartenance ENS Yaoundé non confirmées dans le texte lu (début de page seulement). |
| 42 | congo-brazzaville | 2 138 236 | Institut National de la Statistique (INS) du Congo, recensem | Chiffres commune et departement presents. Part nationale 34,9 % et relais DG Tresor non verifies. |
| 43 | congo-brazzaville | 1 398 812 | INS Congo, recensement RGPH-5, 2023, relayé par citypopulati | Commune verifiee. Le chiffre departement 1 420 612 et la part 23,1 % non retrouves explicitement. |
| 87 | luxembourg | +222 | STATEC, population en chiffres 2025 (données 2024) | Parmi les soldes migratoires les plus élevés (Hesperange +280, Differdange +269, Sanem +262, Mersch +253, Strassen +240, Ettelbruck +222...), STATEC 2025, données 2024. |
| 101 | mali | environ 435 000 | estimation citypopulation.de, fondée sur les résultats corri | Page citypopulation.de (villes du Mali), estimation 2023 = 434 717 ; le site arrondit ('environ'). Relais, pas la page INSTAT. |
| 102 | mali | environ 194 000 | estimation citypopulation.de, fondée sur les résultats corri | Page citypopulation.de (villes du Mali), estimation 2023 = 194 273 ; le site arrondit ('environ'). Relais, pas la page INSTAT. |
| 104 | mali | environ 133 000 | estimation citypopulation.de, fondée sur les résultats corri | Page citypopulation.de (villes du Mali), estimation 2023 = 132 668 (statut 'USett' pour Mopti) ; le site arrondit ('environ'). Relais, pas la page INSTAT. |
| 105 | mali | environ 214 000 | estimation citypopulation.de, fondée sur les résultats corri | Page citypopulation.de (villes du Mali), estimation 2023 = 214 271 ; le site arrondit ('environ'). Relais, pas la page INSTAT. |
| 107 | mali | environ 218 000 | estimation citypopulation.de, fondée sur les résultats corri | Page citypopulation.de (villes du Mali), estimation 2023 = 217 943 ; le site arrondit ('environ'). Relais, pas la page INSTAT. |
| 109 | mali | environ 142 000 | estimation citypopulation.de, fondée sur les résultats corri | Page citypopulation.de (villes du Mali), estimation 2023 = 141 929 ; le site arrondit ('environ'). Relais, pas la page INSTAT. |
| 110 | mali | environ 186 000 | estimation citypopulation.de, fondée sur les résultats corri | Page citypopulation.de (villes du Mali), estimation 2023 = 185 954 ; le site arrondit ('environ'). Relais, pas la page INSTAT. |
| 111 | mali | environ 85 000 | estimation citypopulation.de, fondée sur les résultats corri | Page citypopulation.de (villes du Mali), estimation 2023 = 84 821 ; le site arrondit ('environ'). Relais, pas la page INSTAT. |
| 112 | mali | environ 120 000 | estimation citypopulation.de, fondée sur les résultats corri | Page citypopulation.de (villes du Mali), estimation 2023 = 119 681 ; le site arrondit ('environ'). Relais, pas la page INSTAT. |
| 121 | rd-congo | 2 892 000 | CIA World Factbook, estimation 2023, relayée par l'article W | Page Wikipedia de Mbuji-Mayi ; relais du CIA World Factbook (page CIA non ouverte). |
| 131 | senegal | 298 904 | recensement RGPH-5, ANSD, 2023 | Relais citypopulation.de (recensement 2023, commune) ; page ANSD inaccessible. |
| 132 | senegal | 284 189 | recensement RGPH-5, ANSD, 2023 | Relais citypopulation.de (recensement 2023, commune) ; page ANSD inaccessible. |
| 133 | senegal | 254 171 | recensement RGPH-5, ANSD, 2023 | Relais citypopulation.de (recensement 2023, commune) ; page ANSD inaccessible. |
| 135 | senegal | 295 459 | recensement RGPH-5, ANSD, 2023 | Relais citypopulation.de (recensement 2023, commune) ; page ANSD inaccessible. |
| 136 | senegal | 214 874 | recensement RGPH-5, ANSD, 2023 | Relais citypopulation.de (recensement 2023, commune) ; page ANSD inaccessible. |
| 137 | senegal | 157 554 | recensement RGPH-5, ANSD, 2023 | Relais citypopulation.de (recensement 2023, commune) ; page ANSD inaccessible. |
| 139 | senegal | 113 365 | recensement RGPH-5, ANSD, 2023 | Relais citypopulation.de (recensement 2023, commune) ; page ANSD inaccessible. |
| 144 | suisse | 45 305 | Service de statistique du canton de Neuchâtel, Mémento stati | Communiqué de la Ville de Neuchâtel (titre); la source du site cite le Mémento du Service de statistique, non ouvert. |
| 145 | suisse | 179 449 | Service de statistique du canton de Neuchâtel, communiqué su | Article RTN relayant le recensement cantonal; communiqué ne.ch d'origine non retrouvé (ne.ch/medias liste sans 2024). |
| 149 | suisse | 1967 | Britannica et Wikipédia (article Montreux Jazz Festival), co | Année 1967 et trois jours confirmés; le Casino de Montreux pour 1967 n'est PAS mentionné dans la page; Britannica non ouvert. |
| 150 | suisse | 30 332 | Statistique Vaud, VD en chiffres 2024-2026 ; Ville d'Yverdon | 30'332 confirmé (Ville); le 30 755 du registre communal n'apparaît nulle part; Statistique Vaud non ouvert. |
| 152 | togo | 240 360 | recensement RGPH-5, Institut National de la Statistique et d | citypopulation.de relaie le RGPH-5 (INSEED); page INSEED primaire non ouverte. |
| 153 | togo | 283 738 | recensement RGPH-5, INSEED, 2022 | citypopulation.de relaie le RGPH-5 (INSEED); page INSEED primaire non ouverte. |
| 154 | togo | 145 986 | recensement RGPH-5, INSEED, 2022 | citypopulation.de relaie le RGPH-5 (INSEED); page INSEED primaire non ouverte. |
| 155 | togo | 253 467 | recensement RGPH-5, INSEED, 2022 | citypopulation.de relaie le RGPH-5 (INSEED); page INSEED primaire non ouverte. |
| 156 | togo | 388 775 | recensement RGPH-5, INSEED, 2022 | citypopulation.de relaie le RGPH-5 (INSEED); page INSEED primaire non ouverte. |
| 157 | togo | 500 032 | recensement RGPH-5, INSEED, 2022 | citypopulation.de relaie le RGPH-5 (INSEED); page INSEED primaire non ouverte. |
| 158 | togo | 241 247 | recensement RGPH-5, INSEED, 2022 | citypopulation.de relaie le RGPH-5 (INSEED); page INSEED primaire non ouverte. |
| 159 | togo | 152 065 | recensement RGPH-5, INSEED, 2022 | citypopulation.de relaie le RGPH-5 (INSEED); page INSEED primaire non ouverte. |
| 160 | togo | 124 848 | recensement RGPH-5, INSEED, 2022 | citypopulation.de relaie le RGPH-5 (INSEED); page INSEED primaire non ouverte. |

### Tableau 2 : non vérifiés (aucune URL ajoutée)

| Id | Pays | Chiffre | Source citée | Pourquoi |
|---|---|---|---|---|
| 37 | cameroun | 12,7 millions de tonnes | Port autonome de Kribi, comptes 2024 relayés par EcoMatin et | Le chiffre 12,7 Mt est celui de 2025 (+19 % vs 2024), pas 2024. Pour 2024, EcoMatin donne 10 844 415 t (2023 : 10 837 304 t). L'affirmation du site (12,7 Mt en 2024 vs 10,7 Mt |
| 45 | congo-brazzaville | 178 172 | INS Congo, recensement RGPH-5, 2023, relayé par citypopulati | Chiffre communal introuvable sur citypopulation.de (pages pays et departements ouvertes) ; seul le total du district incluant la commune est publie : 209,889 (Louvakou). Valeu |
| 46 | congo-brazzaville | 104 083 | INS Congo, recensement RGPH-5, 2023, relayé par citypopulati | Chiffre communal introuvable sur citypopulation.de (pages pays et departements ouvertes) ; seul le total du district incluant la commune est publie : 114,622 (Kayes). Valeur d |
| 47 | congo-brazzaville | 75 095 | INS Congo, recensement RGPH-5, 2023, relayé par citypopulati | Chiffre communal introuvable sur citypopulation.de (pages pays et departements ouvertes) ; seul le total du district incluant la commune est publie : 108,808 (Mokeko). Valeur  |
| 48 | congo-brazzaville | 48 642 | INS Congo, recensement RGPH-5, 2023, relayé par citypopulati | Chiffre communal introuvable sur citypopulation.de (pages pays et departements ouvertes) ; seul le total du district incluant la commune est publie : 64,358 (district Owando ; |
| 49 | congo-brazzaville | 33 887 | INS Congo, recensement RGPH-5, 2023, relayé par citypopulati | Chiffre communal introuvable sur citypopulation.de (pages pays et departements ouvertes) ; seul le total du district incluant la commune est publie : 54,254 (district Sibiti ; |
| 50 | congo-brazzaville | 38 240 | INS Congo, recensement RGPH-5, 2023, relayé par citypopulati | Chiffre communal introuvable sur citypopulation.de (pages pays et departements ouvertes) ; seul le total du district incluant la commune est publie : 54,789. Valeur du site no |
| 51 | congo-brazzaville | 43 787 | INS Congo, recensement RGPH-5, 2023, relayé par citypopulati | Chiffre communal introuvable sur citypopulation.de (pages pays et departements ouvertes) ; seul le total du district incluant la commune est publie : 81,254 (departement Bouen |
| 52 | congo-brazzaville | 15 003 | INS Congo, recensement RGPH-5, 2023, relayé par citypopulati | Chiffre communal introuvable sur citypopulation.de (pages pays et departements ouvertes) ; seul le total du district incluant la commune est publie : 22,936 (Moutamba). Valeur |
| 86 | luxembourg | 10 149 | STATEC, population au 1er janvier 2025 | Ettelbruck 10 149 non retrouvé sur une page ouverte (le PDF STATEC 2025 ne liste pas ces communes en texte; la carte PDF par commune n'est pas extractible). Recherche web: Wik |
| 88 | luxembourg | 7 336 | STATEC, population au 1er janvier 2025 | Diekirch 7 336 non retrouvé sur une page ouverte (le PDF STATEC 2025 ne liste pas ces communes en texte; la carte PDF par commune n'est pas extractible). citypopulation.de act |
| 89 | luxembourg | 8 310 | STATEC, population au 1er janvier 2025 | Wiltz 8 310 non retrouvé sur une page ouverte (le PDF STATEC 2025 ne liste pas ces communes en texte; la carte PDF par commune n'est pas extractible). citypopulation.de actuel |
| 90 | luxembourg | 5 936 | STATEC, population au 1er janvier 2025 | Echternach 5 936 non retrouvé sur une page ouverte (le PDF STATEC 2025 ne liste pas ces communes en texte; la carte PDF par commune n'est pas extractible). citypopulation.de a |
| 92 | luxembourg | 5 735 | STATEC, population au 1er janvier 2025 | Rumelange 5 735 non retrouvé sur une page ouverte (le PDF STATEC 2025 ne liste pas ces communes en texte; la carte PDF par commune n'est pas extractible). citypopulation.de ac |
| 93 | luxembourg | 11 628 | STATEC, population au 1er janvier 2025 | Bettembourg 11 628 non retrouvé sur une page ouverte (le PDF STATEC 2025 ne liste pas ces communes en texte; la carte PDF par commune n'est pas extractible). citypopulation.de |
| 97 | madagascar | près de 80 % | L'Express de Madagascar, février 2026 | Citation L'Express de Madagascar non recherchée/ouverte ; estimation média non vérifiée. |
| 103 | mali | environ 100 000 ha | ministère malien de l'Agriculture, selon les sources consult | Source vague (ministère, 'selon les sources consultées') ; non vérifiée. |
| 106 | mali | 656 679 t | ministère malien de l'Agriculture, annonce rapportée par Reu | 656 679 t trouvé seulement via un relais presse FR non ouvert ; d'autres sources (PR-PICA) donnent 656 751 t ; aucune page Reuters/ministère retrouvée avec ce chiffre. |
| 108 | mali | 32 % | étude de l'IRD sur la diaspora malienne, ancienneté à vérifi | Étude IRD non identifiée, ancienneté signalée à vérifier ; non vérifiée. |
| 113 | niger | 20 000 | presse économique nigériane (TheCable, ICIR), citant le mini | Non recherchée ; sources presse nigériane non ouvertes. |
| 114 | niger | 2013 | UNESCO, Centre du patrimoine mondial, bien n° 1268 | UNESCO whc.unesco.org renvoie 403 au fetch ; résultats de recherche indiquent 2013 (décision 37 COM 8B.22, bien 1268) mais page non ouverte, donc non vérifié par ouverture. |
| 115 | niger | 3 327 260 | Tahoua en chiffres, édition 2013, INS Niger (direction régio | PDF stat-niger.org/wp-content/uploads/tahoua/Tahoua_en_chiffres_edition_2013.pdf existe mais texte illisible (PDF compressé), chiffre 3 327 260 non retrouvé. Éditions ultérieu |
| 116 | niger | 39 % | HCR Niger, carte de la population relevant de la compétence  | Carte HCR Diffa juillet 2026 non recherchée ; non vérifié. |
| 117 | niger | 2 722 482 | Dépliant démographique Tillabéri, INS Niger, d'après le rece | PDF stat-niger.org/wp-content/uploads/tillaberi/Depliant_Demographique_Tillaberi_2014.pdf existe (une recherche le dit contenir 2 722 482) mais texte du PDF illisible chez moi |
| 118 | niger | 1968 | Orano, communiqué relayé par World Nuclear News, 2025 | Communiqué Orano / World Nuclear News non recherché ; non vérifié. |
| 119 | rd-congo | environ 17 millions | projections des Nations unies (World Urbanization Prospects) | Page Macrotrends Kinshasa inaccessible (403). Recherche : ~17,03 M en 2024 (17 032 000) sur Macrotrends, mais page non ouverte. |
| 120 | rd-congo | 1 158 051 | Jean Omasombo Tshonda, Haut-Katanga, tome 2, Musée royal de  | Livre Omasombo (MRAC 2018) non consultable en ligne ; chiffre 1 158 051 introuvable. |
| 134 | senegal | 2 décembre 2000 | Centre du patrimoine mondial de l'UNESCO, 24e session du Com | Page UNESCO whc.unesco.org/en/list/956 renvoie 403 ; Wikipedia donne 2000 sans le jour. |
| 140 | suisse | 530 246 | OCSTAT (Office cantonal de la statistique de Genève), situat | 530 246 confirmé par 20min.ch (relais de l'OCSTAT: 'comptait très exactement 530'246 habitants à la fin de l'année passée') mais la part 41,5 % d'étrangers n'y figure pas; la  |
| 143 | suisse | 346 674 | Service de la statistique et de la donnée du canton de Fribo | 346 674 non trouvé sur une page ouverte: fr.ch affiche 350'918 fin 2025 (+4244, +1,2 %), 346 674 n'est qu'implicite par soustraction; OFS provisoire 346 589, population légale |
| 147 | suisse | 2009 | UNESCO, Comité du patrimoine mondial, session de Séville, ju | Page UNESCO (whc.unesco.org/fr/list/1302) renvoie 403, non vérifié. |
| 148 | suisse | 1867 | Wikipédia (article Nestlé), consulté le 9 octobre 2026 | Page Wikipédia Nestlé ouverte (partiellement): ne mentionne pas 1867 dans la partie lue (infobox 1866, vente 1873); non vérifié. |
| 151 | suisse | 250 000 | Keystone-SDA, relayé par blue News, bilan de l'édition 2024, | Article Keystone-SDA/blue News introuvable; 250 000 visiteurs seulement vu dans des résumés de recherche (RTS), pages non ouvertes. |

## sameAs : profils officiels dans le schema (branche seo/sameas)

- Action 7 du plan (confiance A). 14 profils fournis par le propriétaire ajoutés au `sameAs` du schema Organization (`@id` …/#organization) : LinkedIn, YouTube, Facebook, Instagram, TikTok, X, Threads, Bluesky, Mastodon, Pinterest, Tumblr, about.me, Gravatar, Stack Overflow.
- Constante `SOCIAL_PROFILES` dans `src/lib/site-config.ts` (réutilisable pour le pied de page).
- Contrôle : 11 des 14 adresses répondent 200 ; LinkedIn (999) et Stack Overflow (403) refusent les robots, ce qui est attendu. Les URLs sont celles données par le propriétaire.
- Vérifié dans le HTML : 14 profils dans le schema sur l'accueil, un service et une page pays.
