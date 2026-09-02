# Analyse concurrentielle SEO / GEO / AEO — points forts, points faibles, plan d'action

Synthèse basée sur l'audit des 8 sites concurrents analysés sur "transformation
digitale des entreprises Bénin" ([`veille-benin-transformation-digitale.md`](./veille-benin-transformation-digitale.md))
et sur la veille marchés/secteurs complète ([`veille-marches-secteurs.md`](./veille-marches-secteurs.md)).
Sites couverts : adpme.bj, BMZ Digital.Global, GIZ, ACED Africa, E-YEBOU,
Innovatik Agency, Benin Digital, + observations transversales sur les
concurrents commerciaux type (Yadec Consulting, SENINFLUENCEURS, agences web
génériques).

**Mise à jour** : l'audit initial ne couvrait que le Bénin et la France.
Complété ci-dessous (section 0) par un audit direct des concurrents réels sur
les 14 autres pays du site (`GEO_COUNTRIES`) — 16 pays au total désormais
couverts, ~50 pages concurrentes ouvertes en direct au total.

---

## 0. Audit pays par pays — Afrique de l'Ouest, Afrique centrale/Madagascar, Europe francophone

Méthodologie identique à Bénin/France : recherche Google par pays, ouverture
réelle (WebFetch) de chaque page concurrente, aucun classement sans fetch
réussi, chiffres invérifiables signalés comme tels plutôt que repris.

### Constat commun aux 14 pays (le plus important)
Sur les **~50 pages concurrentes ouvertes avec succès** dans cet audit élargi,
**aucune n'a de schema markup JSON-LD détectable** (`Organization`, `Service`,
`FAQPage`), et une seule (Niane Technologies, Sénégal) a une vraie FAQ en
accordéon HTML — sans schema associé. La quasi-totalité des chiffres affichés
par ces concurrents (taux de satisfaction, nombre de projets, années
d'expérience) sont publiés **sans source ni méthodologie**. C'est un écart
structurel exploitable simultanément sur les 14 marchés : implémenter
`Organization` + `Service` + `FAQPage` en JSON-LD sur des FAQ réellement
structurées, avec des chiffres sourcés et des cas clients nommés et
quantifiés, suffit à dépasser l'ensemble de l'échantillon concurrentiel
observé — sans avoir besoin de surenchérir en volume de contenu.

### Tableau de synthèse par pays

| Pays | Maturité du marché concurrent | Concurrent le plus sérieux identifié | Priorité n°1 pour Audyxa |
|---|---|---|---|
| Côte d'Ivoire | Faible-moyenne, forces dispersées entre 3 acteurs | Cabinet Carrée (données macro sourcées + FAQ) | Combiner macro sourcée + cas clients chiffrés + schema — aucun concurrent ne cumule les trois |
| Sénégal | La plus mature de l'échantillon élargi | Niane Technologies (cas institutionnels nommés/datés, FAQ accordéon, prix publics) | Égaler ce niveau puis ajouter le JSON-LD qu'aucun n'a |
| Togo | Faible, marché non structuré | First Digital Impact (chiffre en tête, non sourcé) | FAQ balisée + 1 cas client togolais chiffré + JSON-LD : gain quasi gratuit |
| Mali | Faible-moyenne | TechmaCorporation (preuve sociale nominative) | Cas clients chiffrés + métriques sur témoignages |
| Burkina Faso | Faible, agences généralistes | Sabma Digital (FAQ 12 questions, sans schema) | Dépasser cette FAQ avec FAQPage JSON-LD + chiffres macro sourcés (Banque mondiale, BCEAO) |
| Niger | Faible, mais 1 concurrent très proche du positionnement Audyxa | **DIGUI** (conseil+IA, "diagnostic gratuit" — même mécanique qu'Audyxa) | Occuper "diagnostic gratuit transformation digitale Niamey" avec un contenu plus profond et sourcé |
| Guinée | La plus faible, aucun signal structurel | ZE-TECK (mais crédibilité fragile — adresse "Washington Ave" incohérente, logos TotalEnergies/BNP Paribas invraisemblables) | Schema + FAQ + cohérence NAP stricte (Conakry) : différenciation immédiate |
| Cameroun | Faible, discours corporate générique partout | Alivaon (ancrage local Douala le plus travaillé) | Chiffrer + nommer des cas clients — aucun concurrent ne le fait |
| Gabon | Peu structuré, 2 seules pages substantielles trouvées | Kikun Digital (8 clients nommés, seule vraie preuve sociale du marché) | SEO local (Google Business Profile) probablement plus rentable que le contenu pur à court terme |
| RD Congo | Peu mature | Kadea Software (clients prestigieux : Vodacom, Rawbank, UNICEF) | Chiffrer + cas clients avec résultats mesurables, pas juste des logos |
| Congo-Brazzaville | Peu structuré | Ceso Entreprise (seule FAQ accordéon du marché, sans schema) | Combiner accordéon HTML + FAQPage JSON-LD — aucun concurrent ne coche les deux |
| Madagascar | Faible, dominé par des agences web généralistes | Softibox (témoignages nommés + logos, chiffres non sourcés) | Chiffres sourcés + cas client détaillé (contexte/actions/résultat), format inédit sur ce segment |
| Belgique | Fragmenté, 1 acteur plus structuré | Nubios (FAQ, ~20 logos dont grands comptes, cas chiffré +30% conversion) | Ajouter le levier "aides régionales" (hub.brussels, Digital Wallonia) — absent partout |
| Suisse | Le marché le plus mature et exigeant en preuve de tout l'échantillon | Webie (notes Google vérifiables liées, tarifs affichés, cas chiffrés) | Afficher note Google vérifiable + se positionner explicitement contre les Big Four sur le tarif |
| Luxembourg | Le plus faible en preuve des 3 pays européens | IALUX (seul à citer des sources externes : WEF, Vena — mais mal exécuté) | Mentionner l'éligibilité au label "Fit 4 Digital" (accréditation officielle, cofinancement gouvernemental) |

### Points d'attention transversaux détectés
- **Chiffres suspects de type "compteur non rempli" (0+, 0%)** repérés chez
  plusieurs concurrents (SmartVision Congo-Brazzaville, Dakar Digital,
  TechmaCorporation Mali, Retis Luxembourg) — bug technique fréquent sur ce
  segment de marché, à ne jamais reproduire.
- **Incohérence NAP (Name/Address/Phone) détectée chez ZE-TECK (Guinée)** :
  adresse "Washington Ave, United States" affichée sur un site positionné
  Conakry/Afrique, avec des logos de multinationales françaises peu
  plausibles — signal d'alerte sur la fiabilité de ce concurrent, et rappel
  pour Audyxa de maintenir une cohérence NAP stricte par page pays.
- **Leviers locaux spécifiques identifiés en Europe francophone**, absents du
  contenu Afrique/France déjà produit : primes régionales belges (jusqu'à 70%
  des coûts), label "Fit 4 Digital" luxembourgeois, positionnement anti-Big
  Four en Suisse — trois angles de contenu à ajouter spécifiquement à ces 3
  pages pays.
- **Un concurrent structurellement proche du positionnement Audyxa identifié
  au Niger (DIGUI)** — conseil + IA + design + tech, diagnostic gratuit en CTA
  — à surveiller particulièrement sur ce marché précis.

---

## 1. Points forts constatés chez la concurrence

### SEO (référencement classique)
- **adpme.bj / GIZ / ACED** : contenu adossé à des études primaires réelles
  (enquêtes terrain datées et méthodologiquement décrites), ce qui produit
  naturellement des pages profondes en mots-clés longue traîne ("entrepreneuriat
  digital Bénin", "maturité digitale PME") sans effort de rédaction SEO
  artificiel — le contenu factuel EST le contenu SEO.
- **E-YEBOU / Innovatik** : structure en table des matières et longueur
  généreuse (2500-3000 mots), ce qui capte davantage de requêtes connexes et
  augmente le temps de lecture — un signal de qualité pour Google même si le
  fond est faible.
- **Innovatik** : angle "solutions concrètes + erreurs à éviter", qui répond
  à des intentions de recherche variées (informationnelle ET transactionnelle)
  sur une seule page — bonne couverture de mots-clés sans dupliquer le contenu.
- **GIZ / BMZ** : autorité de domaine et de marque très forte (organismes
  internationaux connus, backlinks institutionnels naturels) — un actif que le
  contenu seul ne peut pas répliquer, mais qui peut être neutralisé par du
  contenu plus complet et mieux structuré.

### GEO (visibilité dans les réponses IA génératives)
- **adpme.bj** est la source la plus citable pour une IA générative répondant à
  "digitalisation PME Bénin" car elle contient des chiffres précis, datés et
  attribués (102 entreprises, 48% Cotonou, etc.) — c'est exactement le type de
  contenu que les modèles de langage privilégient en citation directe.
  C'est un point fort GEO fort et à égaler, pas à copier.
- Les pages institutionnelles (GIZ, ACED, BMZ) bénéficient d'un effet de
  confiance de marque qui influence positivement leur probabilité de citation
  par les IA (signal d'autorité perçue), même quand leur contenu est court.

### AEO (réponses directes / featured snippets / assistants vocaux)
- Aucun des 8 sites analysés ne structure explicitement son contenu en
  question-réponse (pas de FAQ balisée, pas de réponse directe en tête de
  page) — **c'est un point faible généralisé plus qu'un point fort**, mais
  E-YEBOU et Innovatik s'en approchent avec leurs intertitres formulés comme
  des questions implicites ("par où commencer ?").

---

## 2. Points faibles constatés chez la concurrence

### SEO
- **Zéro donnée chiffrée** chez E-YEBOU, Benin Digital et la majorité des
  agences commerciales — contenu qualitatif générique, facilement dépassable
  par du contenu factuel même plus court.
- **Absence de maillage inter-pages** : aucun des sites analysés ne propose de
  hub thématique reliant pays/secteur/méthode comme le fait déjà audyxa.com
  (`/pays`, `/secteurs`, `/comparatifs`, `/methode`) — c'est un vrai avantage
  structurel déjà en place côté Audyxa, à ne pas perdre de vue.
- **Contenu daté non rafraîchi** : GIZ (page projet, chiffres 2022), ACED
  (étude 2023 jamais mise à jour publiquement), Benin Digital (chiffres "0+"
  non remplis, bug visible) — un contenu qui vieillit mal signale une
  négligence à Google (freshness signal faible).
- **Aucun schema markup structuré détecté au-delà du minimum** sur les pages
  commerciales (E-YEBOU, Innovatik, Benin Digital) — pas de `FAQPage`, pas de
  `Article`, pas de `Organization` complet avec `sameAs`.

### GEO
- **Chiffres non sourcés ou invérifiables** : cette veille a détecté et écarté
  plusieurs statistiques largement diffusées en ligne qui se sont révélées
  fausses ou introuvables à la source (ex. "96%/8%" assurance CIMA, "67%
  priorité digitale BPI France", deux séries e-commerce Luxembourg
  contradictoires) — un contenu génératif entraîné sur ces pages risque de
  halluciner ces mêmes chiffres, ce qui est un problème pour ces sites, pas
  pour Audyxa s'il reste rigoureux.
- **Pas de citation de sources primaires avec lien direct** chez les agences
  commerciales — un contenu qui affirme sans sourcer est moins susceptible
  d'être choisi comme référence par un moteur IA qui privilégie la
  traçabilité.
- **Contenu non structuré en blocs extractibles** (pas de listes à puces
  numérotées avec un fait par ligne, pas de tableaux comparatifs) — les IA
  génératives extraient plus facilement l'information de contenus structurés
  que de blocs de prose continue, ce que quasiment aucun concurrent
  n'exploite.

### AEO
- **Aucune FAQ en accordéon avec balisage `FAQPage`** détectée chez les 8
  sites — alors que c'est précisément le format que Google et les assistants
  vocaux privilégient pour les réponses directes.
- **Pas de réponse directe en première phrase** (paragraphe de type "answer
  box") — tous les sites analysés démarrent par du contexte ou de la mise en
  situation avant de répondre à la question posée par la requête, ce qui
  retarde ou empêche l'extraction en featured snippet.
- **Titres H2/H3 non formulés en questions** — un frein direct à la captation
  des positions "People Also Ask" et des réponses vocales.

---

## 3. Solutions — ce qu'Audyxa doit faire pour dépasser ces points forts et
   exploiter ces points faibles

### Pour dépasser les points forts adverses
1. **Égaler puis dépasser adpme/GIZ en densité factuelle** : chaque page
   `/pays/[pays]` doit contenir des chiffres réels, datés, sourcés avec lien
   — c'est déjà fait pour les 16 pays via `marketContext` (implémenté dans ce
   fil). Reste à faire la même chose sur `/secteurs/[secteur]`.
2. **Compenser l'absence d'autorité de marque institutionnelle** par de la
   preuve sociale réelle dès qu'elle existe (cas clients, avis) — chantier
   déjà identifié comme prioritaire E-E-A-T, pas encore réalisé faute de
   matière (zéro fait inventé).
3. **Répliquer et dépasser la longueur/structure** des pages Innovatik/E-YEBOU
   sans tomber dans le remplissage — déjà en bonne voie avec la structure en
   9 sections des pages service/pays du site.

### Pour exploiter les points faibles adverses
4. **Sourcer systématiquement** chaque chiffre avec organisme + année + lien
   — fait sur `/pays/*`, à répliquer sur `/secteurs/*` avec les données du
   bloc "Secteurs A/B/C" de `veille-marches-secteurs.md`.
5. **Structurer le contenu en blocs extractibles pour le GEO** : convertir les
   paragraphes de statistiques en listes/tableaux courts avec un fait par
   ligne (déjà fait pour `/pays/*` sous forme de cartes stat) — à généraliser.
6. **Ajouter du contenu réellement daté et vivant** (mention explicite de
   l'année des données, mise à jour visible) — évite l'effet "page figée
   depuis 2022" observé chez GIZ/ACED.
7. **Combler le vide AEO quasi total du marché** :
   - Reformuler systématiquement les H2 de sections factuelles en questions
     implicites ou explicites ("Quel est le niveau de digitalisation des
     PME au Bénin ?").
   - Ajouter un paragraphe de réponse directe (40-60 mots) en tête de chaque
     section factuelle, avant le détail — format "answer box" repris par les
     IA génératives et les featured snippets.
   - Généraliser les FAQ en accordéon `<details>/<summary>` avec balisage
     `FAQPage` (déjà standard sur le site via les composants existants) sur
     toutes les pages `/pays/*` et `/secteurs/*`, pas seulement celles qui en
     ont déjà une.
8. **Ne jamais publier un chiffre 🔴 non vérifié** — c'est en soi un avantage
   E-E-A-T différenciant : un contenu rigoureux et signé (source citée à
   chaque chiffre) se démarque nettement d'un marché où plusieurs statistiques
   largement reprises se sont révélées fausses ou introuvables.

---

## 3bis. Marché France — audit dédié (marché prioritaire, non couvert initialement)

L'audit initial ne portait que sur le Bénin. Complément réalisé sur le marché
français, en auditant en direct (WebFetch) 6 concurrents comparables en
taille/positionnement à Audyxa : Feel and Clic, ISIIA, LBKE, Koïno AI,
Nocode Factory, Optimia.

**Limite technique assumée** : aucun accès direct à ChatGPT/Perplexity/Google
AI Overviews n'est disponible dans cet environnement — le classement de
citabilité ci-dessous est une **estimation raisonnée** basée sur le contenu
réellement audité (structure, sourçage, profondeur), pas un test réel de
citation. À ne jamais présenter comme une mesure GEO effective.

### Constat le plus important
**Aucun des 7 sites audités (Audyxa compris) n'a de schema markup JSON-LD
visible** — c'est un angle mort collectif du marché français PME/transformation
digitale, donc une vraie fenêtre d'opportunité GEO/SEO pour Audyxa
(`Organization`, `Service`, `FAQPage`), premier arrivé = premier avantage.

### Par concurrent
- **Feel and Clic** : meilleure FAQ du panel (8 questions en accordéon), mais
  zéro chiffre sourcé, preuve sociale générique.
- **ISIIA** : positionnement le plus proche d'Audyxa (PME 5-50 personnes,
  automatisation, délai 6 semaines) — chiffres plausibles mais non sourcés,
  aucun client nommé. Le concurrent le plus directement comparable.
- **LBKE** : contenu le plus faible du panel — peu de risque concurrentiel.
- **Koïno AI** : discours commercial le plus agressif ("98% de
  recommandation", "-3 à 5x vs Big Four") mais 100% auto-déclaratif, aucune
  source externe — vulnérable si Audyxa publie du chiffré réellement sourcé.
- **Nocode Factory** : meilleure preuve sociale visuelle (logos clients réels
  et reconnaissables : Ubisoft, Universal, Swibeco) mais aucun résultat
  chiffré associé et zéro FAQ.
- **Optimia** : seul concurrent à citer des sources externes nommées et datées
  (Accenture 2026, WEF, Fast Company) + angle réglementaire différenciant
  (AI Act, obligation de formation IA) — le plus sérieux en potentiel GEO,
  mais desservi par un bug d'affichage sur ses propres chiffres (0% affichés).

### Où se situe Audyxa aujourd'hui sur ce marché
FAQ en accordéon présente (4 questions) mais aucune donnée chiffrée sourcée,
aucun cas client nommé, pas de schema markup détecté — un positionnement
("audit + automatisation + IA pour PME") déjà occupé par ISIIA, Optimia et
Koïno AI avec un contenu comparable ou plus développé. Le marché français est
**plus dense en discours marketing** que le marché africain francophone, mais
**tout aussi faible en preuve factuelle vérifiable** — la fenêtre de
différenciation reste ouverte, mais il faut jouer sur les deux tableaux à la
fois (volume de contenu structuré ET crédibilité sourcée), car plusieurs
concurrents ont déjà l'un des deux isolément.

### Angles de niche non occupés identifiés
- Sectoriel précis (santé, BTP, logistique — Optimia commence à peine à le
  faire avec un seul client cité).
- Réglementaire (AI Act, conformité RGPD sur les automatisations IA — angle
  qu'Optimia occupe partiellement, encore peu développé ailleurs sur ce
  segment PME).
- Taille très précise d'entreprise (TPE de moins de 10 salariés — segment
  encore peu revendiqué explicitement).

---

## 3ter. Audit technique GEO d'audyxa.com

- 🟢 `robots.ts` autorise déjà explicitement les principaux crawlers IA :
  GPTBot, PerplexityBot, CCBot, Google-Extended, Bingbot — bon point
  technique déjà en place, à ne pas casser lors de futurs changements.
- 🔴 **Aucun `llms.txt` présent sur le site.** C'est un standard émergent (pas
  encore universellement adopté par tous les moteurs IA, mais lu par
  certains, dont Perplexity) qui liste les pages clés à privilégier pour un
  crawler IA — à créer, effort faible, bénéfice incertain mais non nul.
- 🔴 Confirmé par l'audit France : **pas de schema markup `Organization` /
  `Service` visible en JSON-LD sur les pages d'accueil/service auditées** du
  panel entier, Audyxa inclus sur certaines pages — à vérifier page par page
  (le site utilise déjà `Script`+JSON-LD sur plusieurs templates comme
  `/pays/[pays]`, mais pas confirmé partout).

---

## 4. Plan d'action complet d'implémentation

Ordre proposé, du plus rapide/impact au plus long terme. Chaque étape est
indépendante et testable.

### Phase 1 — Compléter ce qui est à moitié fait (rapide)
- [x] `marketContext` sourcé sur les 16 pages `/pays/[pays]` — **fait dans ce
  fil**.
- [ ] Répliquer le même principe sur `/secteurs/[secteur]` : ajouter un champ
  `marketContext` à `SECTOR_PAGES` (`sector-content.ts`) avec les données
  vérifiées des sections 4, 5, 6 de `veille-marches-secteurs.md` (Banque,
  Industrie, Retail, Transport, Télécoms, Énergie, Santé, Éducation, BTP,
  Hôtellerie, Immobilier, Assurance, Agroalimentaire, ONG, Secteur public —
  tous déjà documentés et sourcés).
- [ ] Reformuler les H2/H3 des sections factuelles existantes (`/pays/*`,
  `/methode/*`) en intitulés-questions quand c'est naturel, sans forcer.

### Phase 2 — AEO structurel (impact fort, effort moyen)
- [ ] Ajouter un paragraphe de réponse directe (40-60 mots) en tête de la
  section "État du marché" sur `/pays/*` et de son équivalent futur sur
  `/secteurs/*`.
- [ ] Étendre le balisage `FAQPage` déjà utilisé ailleurs sur le site aux
  nouvelles sections factuelles.
- [ ] Vérifier que chaque page `/pays/*` et `/secteurs/*` a bien un extrait
  meta description qui répond directement à la requête principale (audit
  rapide de `generateMetadata`).

### Phase 3 — GEO renforcé (impact moyen-fort, effort moyen)
- [ ] Ajouter un bloc "Sources" visible en fin de section factuelle sur
  chaque page concernée, avec liens sortants vers les organismes cités
  (GIZ, Banque mondiale, GSMA, DREES, Eurostat...) — renforce la
  traçabilité perçue par les moteurs IA et l'E-E-A-T humain.
- [ ] Vérifier/compléter les données marquées "à vérifier avant publication"
  dans la section 8 de `veille-marches-secteurs.md` avant de les intégrer
  en dur dans le code (actuellement, seules les données 🟢/🟡 déjà classées
  fiables ont été codées dans `geo-content.ts`).
- [ ] Lancer une recherche complémentaire dédiée sur les secteurs/pays encore
  peu documentés en Afrique francophone (énergie, BTP, retail — angles morts
  identifiés dans la synthèse transversale).

### Phase 4 — SEO de fond (impact durable, effort variable)
- [ ] Chantier E-E-A-T déjà identifié : premiers cas clients/avis réels dès
  qu'ils existent (bloqué tant qu'aucune donnée réelle n'est disponible — ne
  pas fabriquer).
- [ ] Connecter Google Search Console + Bing Webmaster Tools (déjà identifié
  comme action utilisateur, pas codable).
- [ ] Compléter les 4 livrables `seo/` mandatés par le guide maître mais pas
  encore créés : `internal-links.csv`, `sources.md`, `qa-report.md`,
  `measurement-plan.md`.
- [ ] Reprendre les 103 guides restants (sur 120 visés), en s'appuyant
  désormais sur la matière factuelle collectée dans cette veille pour éviter
  le blocage initial "pas de données réelles disponibles".

### Phase 5 — Réseaux sociaux et influence (contenu + repositionnement)
- [ ] Utiliser les chiffres de la section 6bis (`veille-marches-secteurs.md`)
  pour enrichir une page "pourquoi les réseaux sociaux ne suffisent pas" —
  angle différenciant validé par la recherche (46% des PME africaines sans
  présence sociale ; 96% des PME françaises sans influence marketing).
  Cette page n'existe pas encore dans le plan `page-map.csv` — à ajouter si
  validé.

### Phase 6 — Marché France (priorité stratégique, nouveau)
- [ ] **Implémenter le schema markup `Organization`/`Service`/`FAQPage` en
  JSON-LD sur les pages clés** (accueil, `/services/*`) — aucun des 7 sites
  audités (Audyxa compris sur certaines pages) ne le fait, premier arrivé =
  premier avantage GEO sur ce segment précis (le pattern `Script`+JSON-LD est
  déjà utilisé sur `/pays/[pays]`, à généraliser).
- [ ] Sourcer 2-3 statistiques françaises réelles et datées (France Num,
  Bpifrance Le Lab, INSEE, baromètre CCI) sur les pages service/accueil —
  un seul concurrent (Optimia) le fait, et mal (bug d'affichage) : fenêtre
  ouverte.
- [ ] Étoffer la FAQ actuelle d'audyxa.com (4 questions) pour dépasser le
  meilleur du panel (Feel and Clic, 8 questions) — viser 8-10 questions en
  langage naturel ("combien coûte...", "combien de temps...").
- [ ] Choisir un angle de niche non occupé sur le marché français plutôt que
  de rester sur le positionnement générique déjà saturé (ISIIA, Optimia,
  Koïno AI) : sectoriel précis, réglementaire (AI Act/RGPD sur l'IA), ou
  segment de taille très précis (TPE < 10 salariés) — décision à prendre
  avec toi avant d'écrire le contenu.
- [ ] Créer un `llms.txt` à la racine du site (effort faible, standard
  émergent, bénéfice incertain mais non nul).

**Limite à retenir** : aucun test réel de citation par ChatGPT/Perplexity/AI
Overviews n'a été fait (accès non disponible dans cet environnement) — tout
le volet "citabilité GEO" de ce document reste une estimation raisonnée basée
sur l'analyse de contenu, jamais une mesure vérifiée. Si un accès à ces outils
devient disponible, ce test réel serait la vérification la plus utile à faire
en premier.

**Prochaine étape immédiate proposée** : Phase 1, point 2 (répliquer
`marketContext` sur `/secteurs/*`) reste la suite la plus rapide à enchaîner
(donnée déjà prête). Mais vu l'audit France, la **Phase 6 (schema markup +
FAQ étoffée)** a probablement un impact plus fort à court terme sur le marché
prioritaire. Je peux l'enchaîner directement si tu
valides.
