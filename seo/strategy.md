# Stratégie SEO / AEO / GEO — Audyxa

Document vivant. Sert de référence pour toute nouvelle page créée sur ce site.
Basé sur le guide maître universel SEO/AEO/GEO fourni par l'utilisateur, adapté au projet réel.

## 1. Audit du projet (constat)

**Stack** : Next.js 16 (App Router), Server Components par défaut, `next/image`, Tailwind. Bon point de
départ technique : le contenu est déjà rendu serveur, pas de dépendance JS lourde qui nuirait au crawl.

**Pages actuelles** (routes réelles Audyxa, hors pages de démo du thème non pertinentes — shop, team,
news, projects, testimonial) :
- `/` — home (hero, à propos, services, méthode, pourquoi Audyxa, FAQ, contact, CTA)
- `/about` — approche, mission, méthode, FAQ dédiée
- `/services` — liste des 6 services + section riche SEO/GEO/AEO (sommaire, détail par service, FAQ + JSON-LD `FAQPage`)
- `/services/details` — détail service (générique, pas encore décliné par service)
- `/contact` — formulaire + coordonnées

**Manques techniques confirmés** (pas de supposition, vérifiés dans le repo) :
- Aucun `sitemap.ts` ni `robots.ts` à la racine de `src/app`.
- Aucune balise `canonical` explicite trouvée dans les métadonnées de page.
- Un seul schema JSON-LD existant (`FAQPage` sur `/services`) — aucun `Organization`, `Service`,
  `BreadcrumbList`, `Person`, `Article`.
- Navigation principale limitée à 4 liens (Accueil, À propos, Services, Contact) — pas de hub blog/guides,
  pas de pages locales, pas de pages comparatives.
- Formulaire de contact sans backend réel (`preventDefault()` seul) — aucune conversion n'est
  actuellement mesurable côté serveur.

**Actif E-E-A-T réel identifié** (à exploiter, pas à inventer) :
Paul Maxime Dossou — fondateur, auteur publié de *Digitalisation des Entreprises* (paulmaximedossou.com,
édition août 2026, 17 chapitres), méthodologie documentée : grille de maturité numérique en 10
dimensions, formules ROI/TCO/payback, cadre "5 questions avant tout projet". C'est une preuve d'expertise
vérifiable et citable — à faire apparaître sur une page auteur/méthodologie, pas juste en mention vague.

## 2. Classification du projet

- **Type de site** : service B2B (conseil + exécution) — proche "service local/national" hybride avec
  du contenu SaaS-like sur les cas d'usage IA/automatisation.
- **Modèle économique** : lead generation (diagnostic, prise de contact).
- **Conversion réelle** : demande de diagnostic / prise de rendez-vous via `/contact`.
- **Couverture géographique** : multi-pays — France + Afrique francophone. *Statut actuel : zone de
  service revendiquée dans les textes, mais aucune ville/pays précis confirmé, aucune fiche Google
  Business Profile détectée dans le repo.* → à traiter en `LocalBusiness`/pages locales seulement une
  fois les zones précises confirmées (voir §7 questions ouvertes).
- **Corpus programmatique disponible** : 6 services (Audit, Refonte processus, Automatisation,
  IA en entreprise, Dev d'outils métier, Pilotage/déploiement) — base suffisante pour un premier niveau
  de pages dédiées par service, avant tout croisement service × ville.

## 3. Familles de pages à construire

Priorisées selon `valeur business × donnée disponible × coût de production`, pas par volume.

### Priorité 1 — Pages service dédiées (Blueprint A)
Une URL par service (`/services/[slug]`) au lieu du `/services/details` générique actuel.
6 pages : audit-diagnostic, refonte-processus, automatisation-integrations, ia-entreprise,
developpement-outils-metier, pilotage-deploiement.
Chacune : réponse directe, problèmes traités, méthode (referme au cadre 5 questions de Paul Maxime
Dossou), preuves disponibles, FAQ propre, CTA. Corrige aussi la cannibalisation actuelle entre
`ServicesListSection`, `ServicesSeoSection` et `/services/details` qui traitent tous du même corpus sans
URLs dédiées.

### Priorité 2 — Page méthodologie / auteur (Blueprint I + J)
Une page `/methode` ou `/a-propos/paul-maxime-dossou` qui documente réellement la grille de maturité
10 dimensions et les formules (ROI, TCO, payback) issues du cours. C'est l'actif GEO le plus fort du
site : contenu propriétaire, vérifiable, non générique — exactement ce que le guide décrit comme
"gain d'information". Schema `Person` + `Organization`.

### Priorité 3 — Pages de décision / comparatives (Blueprint G)
Format `[Approche Audyxa] vs [alternative]` ou `Comment choisir un consultant en transformation
digitale` — cible les requêtes "meilleur consultant [service] 2026" citées dans les sources GEO fournies.
À ne construire qu'avec des critères vérifiables, jamais un classement où Audyxa se cite artificiellement
sans méthode transparente.

### Priorité 4/5 — Pages géographiques (Blueprint B)

Zone validée par l'utilisateur, élargie à **16 pays** francophones (Afrique de l'Ouest, Afrique
centrale, Europe) et **10 villes par pays** (160 villes au total) :

- **Afrique de l'Ouest** : Bénin, Côte d'Ivoire, Sénégal, Togo, Burkina Faso, Mali, Niger, Guinée
- **Afrique centrale** : Cameroun, Gabon, RD Congo, Congo-Brazzaville, Madagascar
- **Europe francophone** : Belgique, Suisse, Luxembourg (France déjà couverte par le site générique)

Trois niveaux de profondeur pour éviter le contenu dupliqué à l'identique (interdit par le guide) :

1. **Hub pays** (`/pays/[pays]`) — 16 pages. Contexte marché, zone desservie à distance, renvoi vers
   les villes et services.
2. **Ville phare × service** (`/services/[slug]/[pays]/[ville]`) — la plus grande ville de chaque pays
   reçoit les 6 pages service complètes = 16 × 6 = 96 pages. C'est là que se concentre le volume de
   recherche réel.
3. **Villes secondaires** (`/pays/[pays]/[ville]`) — 9 villes restantes par pays en page hub légère
   (pas de déclinaison par service) = 144 pages. Contenu réel mais plus court : zone desservie,
   pas de faux chantier ni de fausse implantation locale.

Total géo : 16 + 96 + 144 = **256 pages**.

Ne pas utiliser `LocalBusiness` (implique une adresse physique) tant qu'aucun bureau réel n'existe dans
ces pays — utiliser `Service` avec `areaServed` à la place.

Liste complète des pays/villes et mapping des URLs : voir `seo/page-map.csv`.

### Priorité 6 — Hub contenu / guides + glossaire (Blueprint F)

**Glossaire — réalisé, avec un changement de plan documenté.** Au lieu de 50 pages séparées
(risque de contenu fin, chacune ne portant qu'une définition de quelques lignes), le glossaire est
livré comme **une page unique `/glossaire`** avec 51 définitions ancrées (`id` + navigation
alphabétique), schema `DefinedTermSet`. Chaque définition est dérivée du contenu réel des 17
chapitres méthode (aucun terme inventé), avec lien de maillage vers le chapitre concerné. C'est le
format recommandé par le guide pour ce cas : consolider quand plusieurs entrées courtes répondent
mieux réunies que dispersées sur des URLs distinctes.

**Guides — 17/120 réalisés (2 lots pilotes).** Faute d'accès à un outil de mots-clés réel (Search
Console non connecté), les sujets n'ont pas été choisis par volume de recherche mais par
**query fan-out** : décomposition des intentions déjà réelles et publiées (méthode, services,
comparatifs) en sous-questions pratiques légitimes ("comment faire X", pas de duplication avec les
pages déjà en ligne). Contenu synthétisé et reformulé à partir du cours déjà vérifié — aucun fait
nouveau inventé, aucune statistique fabriquée. Longueur ~600-900 mots par guide (format "comment
faire" pragmatique), en dessous du repère 2500-4000 mots du guide pour les longs articles éditoriaux
— un choix assumé : mieux vaut un contenu court et dense que du remplissage pour atteindre un
quota de mots. `/guides` (hub) + 17 guides publiés, schema `Article` + `FAQPage` sur chaque page.
Les 17 guides couvrent désormais 16 des 17 chapitres méthode (seul le chapitre 17, la synthèse
finale, n'a pas de guide dédié — il n'apporte pas d'angle "comment faire" nouveau par rapport aux
16 autres).
**103 guides restants** : au-delà de cette couverture par chapitre méthode, la suite nécessite une
vraie recherche de mots-clés (Search Console, ou audit manuel SERP) pour identifier des sujets
supplémentaires légitimes — combinaisons service × secteur, questions non encore couvertes,
variantes de longue traîne — plutôt que de continuer à deviner par fan-out sans données.

### Priorité 7 — Page chatbot WhatsApp (non prioritaire)
Une seule page service `/services/chatbot-whatsapp` (pas un cluster), en tout dernier. Confirmé par
l'utilisateur : sujet secondaire, ne doit pas détourner l'effort des services de transformation
digitale qui restent le cœur de l'offre.

### Décompte total

| Bloc | Pages | Statut |
|---|---|---|
| Services cœur | 6 | dans `page-map.csv` |
| Méthodologie (hub + 17 chapitres) | 18 | dans `page-map.csv` |
| Pages de décision | 10 | dans `page-map.csv` |
| Secteurs | 15 | dans `page-map.csv` |
| Géo (pays + ville phare×service + villes secondaires) | 256 | dans `page-map.csv` |
| Chatbot WhatsApp | 1 | dans `page-map.csv` |
| Glossaire (1 page, 51 définitions) | 1 | publié |
| Hub guides + 17 guides | 18 | dans `page-map.csv` |
| **Total publié à ce jour** | **325** | 325/325 publiés |
| Guides restants | 103 | sujets à définir (recherche mots-clés réelle nécessaire) |
| **Total cible final** | **~428** | (glossaire consolidé en 1 page au lieu de 50, cf. note ci-dessus) |

## 4. Technique — corrections avant toute production de contenu

Ordre d'exécution recommandé par le guide : corrections techniques bloquantes avant hubs/pages.

1. Créer `src/app/sitemap.ts` et `src/app/robots.ts` (natifs Next.js, cf. §28 du guide).
2. Ajouter `canonical` absolue dans les `metadata` de chaque page indexable.
3. Ajouter schema `Organization` (site-wide, dans `layout.tsx`) avec les infos réelles disponibles
   (nom, logo, `sameAs` vers les réseaux réels — à confirmer).
4. Ajouter schema `Service` sur chaque future page `/services/[slug]`.
5. Ajouter `BreadcrumbList` en cohérence avec le fil d'Ariane déjà affiché par `PageTitle`.
6. Vérifier `robots.txt` autorise explicitement les bots IA (`GPTBot`, `PerplexityBot`, `CCBot`,
   `Google-Extended`) — actuellement aucun fichier n'existe donc rien n'est bloqué, mais rien n'est
   non plus explicite.

## 5. AEO / GEO — règles à appliquer sur chaque nouvelle page

Reprises du guide fourni, adaptées :
- Réponse directe dans les 3-4 premières phrases sous chaque H2 qui pose une question.
- FAQ uniquement quand elle ajoute de vraies questions distinctes (déjà bien fait sur `/services`,
  à répliquer sur les futures pages service et sur `/methode`).
- Chaque donnée chiffrée doit avoir : chiffre exact + date + source (ex. les stats du cours, déjà
  sourcées [R1], [R2]... dans le PDF — les reprendre avec leur source, jamais sans attribution).
- Auteur identifiable (Paul Maxime Dossou) sur le contenu éditorial long — lien vers la page
  méthodologie/auteur.
- Ne jamais promettre une citation par un moteur IA — mesurer, pas promettre (§6).

## 6. Mesure

À mettre en place dès que possible (aucune donnée fabriquée en attendant) :
- Google Search Console + Bing Webmaster Tools sur le domaine — statut actuel inconnu, à confirmer.
- Sitemap soumis une fois `sitemap.ts` créé.
- Panel de 10-20 prompts GEO réels à tester manuellement en navigation privée sur ChatGPT/Perplexity/
  Gemini (ex. "meilleur consultant transformation digitale [pays]", "chatbot WhatsApp entreprise
  [pays]" si confirmé comme axe réel) — cadence mensuelle, résultats consignés dans
  `seo/measurement-plan.md`.

## 7. Réponses de cadrage obtenues

1. **Chatbot WhatsApp** : confirmé secondaire — une seule page en priorité 6, pas un axe structurant.
2. **Zone géographique** : Afrique de l'Ouest francophone en priorité + quelques pays d'Europe
   francophone pour commencer. Niveau pays, pas ville pour l'instant (voir §3 priorité 4).
3. **Preuves E-E-A-T** : rien de disponible au-delà du cours de Paul Maxime Dossou pour le moment. La
   page méthodologie/auteur (§3 priorité 2) reste donc la preuve d'expertise principale du site tant
   qu'aucune étude de cas ou avis client réel n'est fourni — ne jamais combler ce manque en inventant.

## Questions encore ouvertes (non bloquantes pour démarrer)

4. **Liste exacte des pays d'Europe** à cibler (France déjà couverte ; Belgique/Suisse romande
   proposées par défaut, à valider).
5. **Volume de production souhaité** : quel rythme de publication est réaliste (qui rédige/valide) ?
6. **Accès mesure** : Search Console / Bing Webmaster Tools déjà connectés au domaine `audyxa.com` ?

## 8. Ordre d'implémentation recommandé

1. Corrections techniques (§4).
2. Page méthodologie/auteur (§3 priorité 2) — contenu déjà disponible, aucune dépendance.
3. Pages service dédiées `/services/[slug]` (§3 priorité 1) — première page modèle, QA, puis les 5
   autres. Cœur de l'offre, prioritaire sur tout le reste.
4. Pages de décision (§3 priorité 3).
5. Pages locales Afrique de l'Ouest francophone (§3 priorité 4) — niveau pays, en s'appuyant sur les
   6 pages service déjà créées à l'étape 3.
6. Hub guides (§3 priorité 5) — alimente le maillage vers tout ce qui précède.
7. Page chatbot WhatsApp (§3 priorité 6) — en dernier, non structurant.

Pays d'Europe précis (au-delà de la France) à confirmer avant l'étape 5 (question §7.4).
