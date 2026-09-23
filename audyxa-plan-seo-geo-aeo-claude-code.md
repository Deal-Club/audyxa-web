# PLAN D'ACTION SEO / GEO / AEO — AUDYXA (v2, enrichi)
### Document de travail pour Claude Code — à exécuter avec plusieurs agents en parallèle

---

## 0. CONTEXTE (à lire avant de commencer)

**Le site :** https://audyxa.com — Next.js (App Router, basé sur les URLs `/_next/image`).
**La marque :** Audyxa, cabinet de conseil en transformation digitale.
**Le fondateur :** Paul Maxime Dossou, basé à Abomey-Calavi, Bénin.
**Le positionnement :** conseil + exécution (audit, automatisation, IA, ERP/CRM, cybersécurité) pour PME et structures en croissance.

**⚠️ RÈGLE DIRECTRICE ABSOLUE — à respecter sur CHAQUE page créée ou modifiée :**

Audyxa ne cible PAS que le Bénin. La cible est **l'Afrique de l'Ouest francophone dans son ensemble**, avec le Bénin comme base d'ancrage (siège) mais pas comme unique marché.

- Les pages **génériques** (accueil, méthode, glossaire, guides, comparatifs, services) doivent parler d'**"Afrique de l'Ouest francophone"** ou de **"PME africaines"**, jamais uniquement de "Bénin".
- La spécificité géographique (Bénin, Côte d'Ivoire, Sénégal, etc.) vit **uniquement** dans les pages pays/villes (Phase 2 et 3).
- Ne jamais réécrire une page générique existante pour y injecter "Bénin" partout.

**⚠️ RÈGLE ABSOLUE N°2 — anti-invention :**

Ne jamais inventer de chiffres, de témoignages, d'avis clients, de classements ou de statistiques macro. Le GEO moderne (voir section 6) repose sur la crédibilité factuelle : une statistique fausse détectée détruit l'E-E-A-T de tout le site. Si une donnée réelle manque, écrire `[À COMPLÉTER PAR L'UTILISATEUR]` plutôt que d'inventer.

**Zone cible complète (Afrique de l'Ouest francophone, priorité UEMOA/CEDEAO) :**
Bénin, Togo, Côte d'Ivoire, Sénégal, Burkina Faso, Mali, Niger, Guinée.

---

## 1. ARCHITECTURE CIBLE DU SITE (vue d'ensemble)

```
/                                  → Accueil (pan-régionale, déjà existante — à corriger, pas recréer)
/about                             → déjà existante
/services                          → déjà existante
/services/[6 sous-pages]           → déjà existantes
/methode/[17 chapitres]            → déjà existante — NE PAS géo-localiser
/glossaire                         → existe mais peu peuplée → À ENRICHIR
/guides                            → existe mais peu peuplée → À ENRICHIR
/comparatifs                       → existe mais peu peuplée → À ENRICHIR
/secteurs                          → existe mais peu peuplée → À ENRICHIR
/pays                              → existe (vue d'ensemble) → À ENRICHIR
/pays/benin ... /pays/guinee       → 8 pages À CRÉER (liste complète en Phase 3)
/pays/benin/cotonou ... etc.       → 15 pages À CRÉER (liste complète en Phase 4)
/auteur/paul-maxime-dossou         → À CRÉER (page autorité fondateur, enrichie E-E-A-T)
/blog/[articles]                   → À CRÉER (structure + 5 premiers articles)
/llms.txt                          → À CRÉER (fichier racine, voir section 2.13)
robots.ts                          → À VÉRIFIER/CORRIGER (voir section 2.6)
sitemap.ts                         → À VÉRIFIER/CORRIGER (voir section 2.7)
opengraph-image.tsx                → À CRÉER si absent (voir section 2.3)
```

Adapter les slugs exacts au routeur Next.js réellement en place (vérifier `app/` ou `pages/` avant de créer).

---

## 2. PHASE 1 — CORRECTIONS TECHNIQUES GLOBALES NEXT.JS

**Agent 1 — "Technique & Meta"**. Peut démarrer immédiatement, en parallèle des autres agents.

### 2.1 Server Components d'abord, "use client" en dernier recours
Règle stricte : la majorité du projet doit rester en Server Components. Googlebot et les crawlers IA (GPTBot, PerplexityBot, ClaudeBot) lisent le HTML déjà généré côté serveur ; un composant client nécessite un téléchargement + exécution JS avant affichage, ce qui nuit au SEO ET au GEO (les IA scannent le HTML brut, pas le JS exécuté).
→ **Audit à faire** : lister tous les fichiers avec `"use client"` en tête et vérifier lesquels pourraient repasser en Server Component (tout ce qui n'a pas besoin d'interactivité — `useState`, `onClick`, formulaires).

### 2.2 HTML sémantique
Remplacer les `<div>` génériques par des balises porteuses de sens partout où c'est pertinent : `<nav>` pour la navigation, `<header>`, `<main>`, `<article>` pour le contenu des chapitres méthode/guides/blog, `<footer>`. Cela aide les robots à comprendre la structure sans effort d'interprétation.

### 2.3 Métadonnées dynamiques par page (`generateMetadata`)
Le problème constaté (Open Graph figé sur les valeurs de la home même sur les chapitres méthode) se corrige avec la fonction `generateMetadata` de Next.js App Router : chaque `page.tsx` doit exporter sa propre fonction générant `title`, `description`, `openGraph`, `twitter` à partir des données réelles de la page (pas de valeurs codées en dur copiées de la home).
→ Créer aussi un fichier `opengraph-image.tsx` si absent, pour générer dynamiquement une image Open Graph par page plutôt que réutiliser le même logo partout — impact direct sur le taux de clic au partage social.

### 2.4 Title de la page d'accueil
Remplacer :
```
Audyxa | Transformation digitale des entreprises
```
Par :
```
Audyxa | Cabinet de conseil en transformation digitale — Afrique de l'Ouest
```

### 2.5 Twitter Card, theme-color, robots meta
- `twitter:card` → `summary_large_image` (au lieu de `summary`) dans la config globale.
- Ajouter `<meta name="theme-color" content="[couleur de marque]">`.
- `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">` globalement (sauf pages `noindex` volontaires).

### 2.6 robots.ts — autoriser explicitement les crawlers IA
Beaucoup de sites bloquent sans le savoir les robots des moteurs de réponse IA. Vérifier/créer `app/robots.ts` pour que la règle par défaut autorise explicitement (pas seulement Googlebot) :
- `GPTBot` (OpenAI/ChatGPT)
- `ChatGPT-User`
- `PerplexityBot`
- `ClaudeBot` / `anthropic-ai`
- `CCBot` (Common Crawl, utilisé pour entraîner plusieurs LLM)
- `Bingbot` (indispensable — ChatGPT utilise l'index Bing pour ses recherches temps réel, voir section 6.3)

Interdire uniquement les zones inutiles (`/admin`, `/api`) pour économiser le budget de crawl. Le sitemap doit être référencé explicitement dans `robots.ts`.
⚠️ Vérifier qu'aucune URL de type `localhost` ne traîne dans la config de production (erreur fréquente).

### 2.7 sitemap.ts dynamique
Créer/corriger `app/sitemap.ts` pour qu'il inclue automatiquement :
- Toutes les routes statiques connues (home, about, services, méthode).
- Toutes les routes dynamiques via une requête interne (guides, glossaire, comparatifs, secteurs, **et surtout les nouvelles pages pays/villes créées en Phase 3-4**).
- Un champ `lastModified` réel par page (pas une date figée) — la fraîcheur perçue est un signal GEO important (voir section 6).

### 2.8 next/image et next/font
- Vérifier que **toutes** les images du site (y compris celles des futures pages pays/villes) passent par le composant `next/image` — redimensionnement automatique à la taille réelle d'affichage + lazy loading. Impact direct sur le LCP (Largest Contentful Paint).
- Vérifier que les polices Google passent par `next/font` plutôt que par un `<link>` externe vers fonts.googleapis.com — cela héberge les polices localement (accélère le chargement ET évite d'envoyer l'IP des visiteurs à Google, point RGPD/loi béninoise de protection des données).

### 2.9 Core Web Vitals — check-list concrète
- **LCP** : `next/image` partout (2.8) + éviter les polices bloquantes.
- **CLS** : toujours définir les dimensions des images ; utiliser `loading.tsx` (Skeleton) plutôt que des sauts de mise en page.
- **INP** : limiter la taille des composants clients, utiliser `React Suspense` / streaming pour afficher le contenu de base pendant que les éléments lourds chargent en arrière-plan.

### 2.10 Balises canoniques
Pour chaque page (surtout les futures pages pays/villes qui pourraient créer du quasi-duplicate si mal gérées), définir la canonical via le champ `alternates.canonical` de l'objet `metadata`, **toujours en URL absolue** (avec nom de domaine complet) pour éviter tout signal de contenu dupliqué.

### 2.11 Dates de publication/modification
Pour chaque page de `/methode/`, `/guides/`, `/blog/`, `/comparatifs/`, `/pays/*` : champ `datePublished` et `dateModified` réels (pas la date du jour du build à chaque déploiement — une vraie date de dernière modification de contenu). Injecter en meta :
```html
<meta property="article:published_time" content="[date]">
<meta property="article:modified_time" content="[date]">
```
Objectif : un rafraîchissement de contenu trimestriel réel sur les pages stratégiques (méthode, guides, comparatifs) — la fraîcheur perçue est corrélée à la fréquence de citation par les IA génératives.

### 2.12 Temps de lecture
Calculer automatiquement (mots ÷ 200) et injecter en `twitter:label1`/`twitter:data1`.

### 2.13 Fichier `llms.txt` — à créer à la racine
Standard émergent qui sert de « carte » pour les agents IA/LLM qui visitent le site, similaire dans l'esprit à `robots.txt` mais orienté contenu plutôt qu'autorisations. Créer `public/llms.txt` (accessible sur `audyxa.com/llms.txt`) avec une structure simple en Markdown :
```markdown
# Audyxa

> Cabinet de conseil en transformation digitale pour les entreprises
> d'Afrique de l'Ouest francophone (Bénin, Togo, Côte d'Ivoire, Sénégal,
> Burkina Faso, Mali, Niger, Guinée). Conseil + exécution : audit,
> automatisation, IA, ERP/CRM, cybersécurité.

## Méthode
- [Fondements et maturité numérique](https://audyxa.com/methode/fondements-et-maturite-numerique)
- [liste des 17 chapitres avec description courte de chacun]

## Guides
- [liste des guides avec description courte]

## Zones d'intervention
- [liste des pages pays avec description courte]

## À propos
- [Fondateur : Paul Maxime Dossou](https://audyxa.com/auteur/paul-maxime-dossou)
- Contact : contact@audyxa.com
```
Ce fichier n'est pas encore un standard universellement adopté par tous les LLM, mais il coûte peu à créer et n'a aucun inconvénient — à traiter en priorité basse mais à ne pas oublier.

### 2.14 Schema.org — Organization / ProfessionalService (site entier)
JSON-LD dans le layout racine :
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Audyxa",
  "url": "https://audyxa.com",
  "logo": "https://audyxa.com/images/logo-full.png",
  "description": "Cabinet de conseil en transformation digitale pour les entreprises d'Afrique de l'Ouest francophone.",
  "areaServed": [
    {"@type": "Country", "name": "Bénin"},
    {"@type": "Country", "name": "Togo"},
    {"@type": "Country", "name": "Côte d'Ivoire"},
    {"@type": "Country", "name": "Sénégal"},
    {"@type": "Country", "name": "Burkina Faso"},
    {"@type": "Country", "name": "Mali"},
    {"@type": "Country", "name": "Niger"},
    {"@type": "Country", "name": "Guinée"},
    {"@type": "Country", "name": "France"}
  ],
  "telephone": "+2290195241540",
  "email": "contact@audyxa.com",
  "sameAs": [
    "[URL LinkedIn Audyxa]",
    "[autres profils sociaux officiels réels]"
  ],
  "founder": {
    "@type": "Person",
    "name": "Paul Maxime Dossou",
    "url": "https://audyxa.com/auteur/paul-maxime-dossou"
  }
}
```
Le champ `sameAs` (liens vers les profils sociaux officiels) aide les IA à relier l'entité Audyxa à travers le web — ne le laisser vide que si aucun profil n'existe réellement, ne jamais inventer une URL.

### 2.15 Schema.org — FAQPage sur les chapitres méthode
Chaque chapitre `/methode/*` a déjà une section FAQ visible (vérifié : 3 questions/réponses sur le chapitre 1). Vérifier si le JSON-LD `FAQPage` est posé en dur ; si absent, le générer automatiquement à partir du contenu FAQ déjà présent dans le CMS/markdown de chaque chapitre.

### 2.16 Schema.org — Article/BlogPosting + Person (E-E-A-T)
Sur chaque chapitre méthode, guide et futur article de blog, ajouter le schema `Article` avec `datePublished`, `dateModified`, et un champ `author` de type `Person` pointant vers `/auteur/paul-maxime-dossou` (voir Phase 6). C'est ce qui permet à Google et aux IA de relier le contenu à une expertise humaine identifiée plutôt qu'à un contenu anonyme — élément central de l'E-E-A-T (Expérience, Expertise, Autorité, Fiabilité).

### 2.17 Schema.org — BreadcrumbList
Sur toutes les pages avec fil d'Ariane visuel existant, ajouter le JSON-LD `BreadcrumbList` correspondant.

---

## 3. PHASE 1bis — MAILLAGE INTERNE (règles précises)

**Rattaché à l'Agent 1**, mais s'applique aussi à tout agent créant du nouveau contenu (Phases 4-5-6). C'est l'un des leviers SEO les plus sous-estimés et les plus puissants — à traiter avec la même rigueur que le contenu lui-même.

### 3.1 Règles quantitatives
- Chaque page stratégique (services, pages pays, guides prioritaires) doit recevoir **au minimum 3 à 5 liens internes entrants** provenant d'autres pages du site.
- Une page qui reçoit moins de 2 liens entrants depuis du contenu (hors menu/footer) est considérée comme sous-optimisée — à corriger.

### 3.2 Qualité avant quantité
- **Un lien placé au cœur d'un paragraphe de texte (lien contextuel) a beaucoup plus de poids qu'un lien dans un méga-menu ou un footer dense.** Le méga-menu actuel d'Audyxa (17 chapitres + 6 services + ressources, tous listés dans la nav) doit continuer d'exister pour la navigation, mais ne doit pas être le seul canal de maillage — chaque chapitre/page doit en plus recevoir des liens contextuels depuis le corps du texte d'autres pages.
- Éviter la dilution : un trop grand nombre de liens sur une seule page réduit la part de "jus SEO" transmise à chacun. Garder les menus de navigation lisibles plutôt que de les surcharger.

### 3.3 Méthode pour identifier les pages à relier entre elles
Avant de publier une nouvelle page, l'agent doit :
1. Scanner le site existant pour repérer les pages traitant d'un sujet proche (ex : via une recherche interne sur les mots-clés de la nouvelle page dans les fichiers markdown/CMS existants).
2. Identifier les 3 à 5 pages les plus pertinentes.
3. Insérer un lien contextuel vers la nouvelle page dans le corps de texte de ces pages existantes (pas juste dans une liste "voir aussi" en bas de page — dans une phrase qui a du sens).
4. La nouvelle page doit elle-même contenir des liens sortants vers les pages liées (maillage bidirectionnel).

### 3.4 Ancres de liens
- L'ancre (le texte cliquable du lien) doit correspondre autant que possible au mot-clé ciblé par la page de destination (ex : lien vers `/pays/senegal` avec l'ancre "transformation digitale au Sénégal", pas juste "cliquez ici" ou "en savoir plus").
- Diversifier légèrement les ancres d'une page à l'autre pour paraître naturel (éviter d'utiliser exactement la même ancre à chaque fois).

### 3.5 Logique de cocon sémantique (hub-and-spoke)
- Une **page mère** (hub) traite un sujet global et lie vers des **pages filles** répondant à des questions spécifiques.
- Les pages filles doivent systématiquement faire un lien retour vers la page mère pour concentrer l'autorité.
- Application concrète pour Audyxa :
  - `/pays` = hub régional → lie vers les 8 pages pays (spokes).
  - Chaque page pays = hub local → lie vers ses pages villes (spokes).
  - Chaque page ville → lien retour vers sa page pays, qui lie retour vers `/pays`.
  - `/methode` = hub méthodologique déjà bien structuré en 17 chapitres liés entre eux (à conserver tel quel, c'est un bon cocon existant).
  - Le glossaire doit lier vers les chapitres méthode et les guides qui utilisent chaque terme, et réciproquement (chapitres/guides → définitions du glossaire).

### 3.6 Automatisation dans le workflow Claude Code
Avant de valider la publication de toute nouvelle page, l'agent doit exécuter une étape de vérification : scanner le site pour trouver les opportunités de liens entrants et sortants (`related pages`), et ne considérer la tâche terminée qu'une fois le maillage (§3.1-3.4) appliqué — pas seulement le contenu rédigé.

---

## 4. PHASE 2 — STRUCTURE GEO/AEO À APPLIQUER SUR TOUT CONTENU LONG

**S'applique à toutes les pages de contenu substantiel créées ou modifiées** (méthode déjà en place à vérifier/renforcer, guides, comparatifs, pages pays/villes, blog). Cette section synthétise les règles de structuration qui maximisent la probabilité d'être cité par ChatGPT, Perplexity, Gemini et repris en extrait par Google.

### 4.1 La règle des "30% supérieurs"
Les IA génératives extraient prioritairement l'information contenue dans le premier tiers de la page. **Chaque page de contenu doit commencer par une réponse directe de 2 à 4 phrases** répondant à la question principale du sujet — avant tout habillage, avant le contexte, avant l'historique. Un bloc "En résumé" ou "TL;DR" juste après le H1 est une bonne pratique pour formaliser cette règle.

Exemple pour une page pays :
> **En résumé.** Audyxa accompagne les entreprises du Sénégal dans leur transformation digitale : audit de maturité, automatisation des processus, intégration IA, CRM/ERP. Diagnostic sur mesure, adapté au contexte fiscal et réglementaire sénégalais.

### 4.2 Format "chunking" — blocs autonomes
Chaque section sous un H2 doit pouvoir être comprise **indépendamment** du reste de la page — c'est ainsi que les IA découpent et extraient le contenu. Concrètement :
- Paragraphes de **2 à 4 lignes maximum**.
- Phrases de **moins de 20 mots** en moyenne.
- Un seul point clé par section (single takeaway) — éviter de mélanger plusieurs idées sous un même H2.
- Titres H2 formulés en questions naturelles quand c'est pertinent (déjà bien fait sur les chapitres méthode — à généraliser sur guides et pages pays/villes).

### 4.3 Formats à privilégier
- **Tableaux comparatifs** — très fortement valorisés par les IA (facilité d'extraction), notamment ChatGPT qui a une préférence marquée pour ce format.
- **Listes à puces/numérotées** plutôt que des paragraphes denses pour toute énumération (étapes, avantages, critères).
- **FAQ en fin de page**, avec le schema `FAQPage` associé (déjà en place sur les chapitres méthode — à généraliser).

### 4.4 La formule de crédibilité pour chaque statistique citée
Chaque affirmation chiffrée doit inclure trois éléments dans le texte brut (pas seulement en note de bas de page) :
```
[Chiffre exact] + [Date précise] + [Source nommée]
```
Exemple correct : *"Selon DataReportal (Digital 2026 Bénin), le taux de pénétration internet au Bénin atteignait 32,2 % fin 2025."*
Exemple à éviter : *"Beaucoup d'entreprises béninoises utilisent internet."*
→ Sources fiables pour l'Afrique de l'Ouest : Banque mondiale, GSMA (mobile money), DataReportal (usage numérique par pays), UEMOA/BCEAO, ARCEP national quand disponible. **Ne jamais citer de chiffre sans avoir vérifié la source réelle** (cf. règle anti-invention en section 0).

### 4.5 Contenu "non-commodité" — ce qui distingue Audyxa d'un contenu générique IA
Éviter le contenu que n'importe quel générateur IA produirait sans expertise (ce que les praticiens appellent le "AI slop", de plus en plus déprécié par Google et les IA). Privilégier :
- Des données propriétaires Audyxa réelles quand elles existent (résultats de missions anonymisés, méthodologie interne).
- Des prises de position argumentées plutôt que des généralités (ex : le chapitre méthode "erreurs de diagnostic les plus fréquentes" est un bon exemple déjà en place — à reproduire sur les guides).
- Des anecdotes ou cas vécus réels quand disponibles, plutôt qu'inventés.

---

## 5. PHASE 3 — PAGES PAYS (8 pages à créer)

**Agent 2 — "Pages Pays"**. Peut travailler en parallèle de l'Agent 1.

### Gabarit de page pays — `/pays/[slug-pays]`

**Title :**
```
Transformation digitale en [Pays] | Conseil, audit et automatisation — Audyxa
```

**Meta description (personnalisée, jamais copier-coller identique d'un pays à l'autre, 150-160 caractères) :**
```
Audyxa accompagne les entreprises [gentilé] dans leur transformation digitale : audit de maturité, automatisation, IA, CRM/ERP. Diagnostic sur mesure.
```

**H1 :**
```
Transformation digitale en [Pays] : conseil et exécution pour vos entreprises
```

**Structure de contenu (appliquer les règles GEO de la section 4 : résumé direct en tête, chunking, formule de crédibilité pour chaque statistique) :**
1. **En résumé** (bloc court, 2-4 phrases, cf. §4.1)
2. **Le contexte digital du pays** (H2) — 150-250 mots, chiffres sourcés (organisme + année, cf. §4.4) : pénétration internet, mobile money dominant (Orange Money/MTN MoMo/Wave selon pays), secteurs porteurs.
3. **Nos services en [Pays]** (H2) — lien vers chacun des 6 services existants, contextualisés en 1-2 phrases (maillage interne contextuel, cf. §3.4).
4. **Secteurs que nous accompagnons en [Pays]** (H2) — lien vers `/secteurs/*`, industries dominantes localement.
5. **Tableau comparatif ou synthèse chiffrée** si pertinent (ex : coûts indicatifs, délais type) — format à privilégier pour l'AEO (cf. §4.3).
6. **Villes d'intervention** (H2) — liens vers les pages villes de ce pays (Phase 4).
7. **FAQ** (H2) — 3 à 5 questions/réponses spécifiques au pays, formulées en langage naturel + schema `FAQPage`.
8. **CTA final** — "Demander un diagnostic" vers `/contact`.

**Schema.org :** `FAQPage`, `BreadcrumbList`, et `Article`/`author` pointant vers la page fondateur (cf. §2.16).

**⚠️ Anti-duplication :** contenu réellement différent par pays. Si les données précises manquent, rédiger plus court mais unique plutôt que dupliquer un gabarit.

**Liste des 8 pages :**
1. `/pays/benin` 2. `/pays/togo` 3. `/pays/cote-divoire` 4. `/pays/senegal`
5. `/pays/burkina-faso` 6. `/pays/mali` 7. `/pays/niger` 8. `/pays/guinee`

---

## 6. PHASE 4 — PAGES VILLES (15 pages à créer)

**Agent 3 — "Pages Villes"**. Peut être subdivisé (ex : 3a Bénin, 3b Côte d'Ivoire/Sénégal, 3c reste) pour paralléliser davantage.

### Gabarit de page ville — `/pays/[slug-pays]/[slug-ville]`

**Title :**
```
Consultant transformation digitale à [Ville] | Audit, automatisation, IA — Audyxa
```

**Meta description (personnalisée par ville) :**
```
Audyxa accompagne les entreprises de [Ville] ([Pays]) : audit digital, automatisation des processus, intégration IA et CRM. Diagnostic gratuit sous 48h.
```

**H1 :**
```
Cabinet de transformation digitale à [Ville]
```

**Structure (400-600 mots, mêmes règles GEO qu'en section 4) :**
1. **En résumé** (2-4 phrases)
2. **[Ville] en un coup d'œil** (H2) — poids économique, secteur dominant local, chiffré et sourcé si possible.
3. **Ce que nous faisons à [Ville]** (H2) — 3 cas d'usage concrets et réalistes adaptés au tissu économique local.
4. **FAQ locale** (H2) — 2-3 questions + schema `FAQPage`.
5. Lien retour vers la page pays parente (maillage bidirectionnel, cf. §3.5) + CTA `/contact`.

**Liste des 15 pages (groupées par pays parent) :**
- *Bénin :* `/pays/benin/cotonou`, `/pays/benin/porto-novo`, `/pays/benin/abomey-calavi`, `/pays/benin/parakou`
- *Togo :* `/pays/togo/lome`
- *Côte d'Ivoire :* `/pays/cote-divoire/abidjan`, `/pays/cote-divoire/yamoussoukro`
- *Sénégal :* `/pays/senegal/dakar`, `/pays/senegal/thies`
- *Burkina Faso :* `/pays/burkina-faso/ouagadougou`, `/pays/burkina-faso/bobo-dioulasso`
- *Mali :* `/pays/mali/bamako`
- *Niger :* `/pays/niger/niamey`
- *Guinée :* `/pays/guinee/conakry`

**⚠️ Même règle anti-duplication.**

---

## 7. PHASE 5 — CONTENU ÉDITORIAL (glossaire, guides, comparatifs, secteurs)

**Agent 4 — "Contenu éditorial"**. Indépendant des Agents 2-3, peut tourner en parallèle complet.

### 7.1 Glossaire (`/glossaire`)
20-30 entrées minimum (idéalement une URL par terme si le CMS le permet : `/glossaire/[terme]`). Termes prioritaires (déjà mentionnés dans les chapitres méthode, maillage interne facile) : Maturité digitale, Digitalisation vs numérisation vs transformation, BPMN, RPA, Low-code, RAG, Agent IA, MCP, ERP, CRM, API, TCO, ROI digital, DevOps, Data Governance, Lean, Change management, Omnicanal, IoT, Cybersécurité (RSSI, MFA, RGPD/loi locale).
Chaque entrée : définition courte (respecter le chunking, §4.2) + lien vers le chapitre méthode correspondant.

### 7.2 Guides pratiques (`/guides`)
5 premiers guides prioritaires :
1. "Comment évaluer la maturité digitale de son entreprise en Afrique de l'Ouest"
2. "n8n vs Make vs Zapier : quel outil d'automatisation choisir pour une PME africaine"
3. "Automatisation IA et mobile money : intégrer WhatsApp, Orange Money, MTN MoMo, Wave"
4. "Digitaliser un cabinet comptable en Afrique francophone : par où commencer"
5. "Cybersécurité pour PME : les 10 vérifications essentielles"

Chaque guide : 1500-2500 mots, structure appliquant intégralement la section 4 (résumé direct, chunking, tableaux, FAQ + schema, statistiques sourcées avec la formule de crédibilité), maillage interne vers le service correspondant.

### 7.3 Comparatifs (`/comparatifs`)
3 premiers comparatifs, au format **tableau comparatif** (le format le plus efficace pour l'AEO, cf. §4.3) :
1. "n8n vs Make vs Zapier — comparatif 2026"
2. "Odoo vs Zoho vs Salesforce — quel ERP/CRM pour une PME ouest-africaine"
3. "Consultant indépendant vs cabinet de conseil vs agence digitale — que choisir"

**Note d'intégrité sur ce format** : une pratique répandue dans le secteur (constatée notamment chez des concurrents automatisant leur SEO) consiste à toujours se citer soi-même en première position dans ce type de comparatif, même sur un sujet où l'entreprise n'est qu'un acteur parmi d'autres — c'est trompeur si le classement n'est pas honnête, et risqué si un lecteur ou une IA détecte l'incohérence avec des sources tierces. Recommandation : sur les comparatifs d'outils tiers (n8n/Make/Zapier, Odoo/Zoho/Salesforce), rester factuel et neutre — c'est aussi ce qui nourrit le positionnement "conseil indépendant, pas de commission fournisseur" déjà revendiqué par Audyxa. Sur le comparatif "Consultant vs Cabinet vs Agence", il est légitime d'argumenter en faveur du modèle Audyxa (conseil + exécution) tant que la description des autres modèles reste honnête et non caricaturale.

### 7.4 Secteurs (`/secteurs`)
Une page par secteur cible (pas de géo ici) :
1. `/secteurs/cabinets-comptables`
2. `/secteurs/import-export-distribution`
3. `/secteurs/ecoles-privees-universites`

Chaque page : problématiques métier spécifiques, 3 cas d'usage, lien vers services concernés, FAQ sectorielle.

---

## 8. PHASE 6 — PAGE AUTORITÉ FONDATEUR (E-E-A-T renforcé)

**Agent 5 — "Autorité personnelle"**.

Créer `/auteur/paul-maxime-dossou` avec un niveau de détail supérieur à une simple bio courte, car c'est la page qui porte tout le signal E-E-A-T du site :
- Bio professionnelle complète (expérience, cours "Digitalisation des Entreprises" déjà mentionné en bas des chapitres méthode, parcours).
- Si disponibles réellement : certifications, formations suivies, années d'expérience précises — **jamais inventées** (cf. règle anti-invention).
- Lien vers LinkedIn (identifiant social réel).
- Décision à prendre par l'utilisateur : relier publiquement à l'activité Dossou Dev ou garder les deux marques distinctes — ne pas trancher automatiquement, laisser `[DÉCISION UTILISATEUR REQUISE]` dans le contenu généré si l'agent hésite.
- Schema `Person` avec le champ `sameAs` listant les profils sociaux réels.

Modifier ensuite chaque chapitre `/methode/*` (mention actuelle : "Contenu issu et reformulé du cours... Paul Maxime Dossou, fondateur d'Audyxa") pour que ce nom devienne un lien cliquable vers `/auteur/paul-maxime-dossou`. Faire de même sur les futurs guides et articles de blog (champ `author` du schema `Article`, cf. §2.16).

---

## 9. PHASE 7 — VISIBILITÉ HORS-SITE ET MENTIONS (à mener en continu, pas une tâche Claude Code ponctuelle)

**Cette phase ne peut pas être automatisée entièrement par des agents de code** — elle nécessite des actions humaines (relations presse, réseaux sociaux, forums). Je la documente ici pour que l'utilisateur sache quoi faire en parallèle du travail technique, mais elle sort du périmètre "Claude Code exécute seul cette nuit".

### 9.1 Pourquoi c'est important
Les mentions de marque sur des sites tiers crédibles (même sans lien cliquable) sont aujourd'hui un facteur de confiance pour les IA génératives au moins aussi important que les liens entrants classiques. Une IA qui doit choisir une source recommandée croise plusieurs sites pour vérifier un consensus — si Audyxa n'apparaît nulle part en dehors de son propre site, la probabilité d'être recommandé reste faible, même avec un site techniquement parfait.

### 9.2 Actions légitimes à prioriser
- **Presse et médias spécialisés africains** (Forbes Afrique, We Are Tech Africa, etc. — déjà identifiés comme citant des acteurs du secteur lors de nos recherches précédentes) : proposer une tribune, un commentaire d'expert, ou une étude de cas.
- **LinkedIn** : publications régulières sous le nom de Paul Maxime Dossou ET/OU la page Audyxa, avec du contenu substantiel (pas de la promotion pure) — construit à la fois la notoriété et le signal "trafic multicanal indépendant de Google" que les moteurs valorisent.
- **Annuaires professionnels sérieux** (CCI Bénin, annuaires sectoriels reconnus) : cohérence stricte du nom/adresse/téléphone (NAP) partout — toute incohérence entre le site, une fiche Google Business Profile éventuelle et un annuaire réduit la confiance algorithmique.
- **Participations à des événements, partenariats visibles** (mentionnés dans les pages pays/villes si réels) : renforce l'autorité "hors-site".

### 9.3 Ce que je ne recommande PAS de faire de façon automatisée
Les sources mentionnent des tactiques comme poster massivement sur Reddit via des bots, ou publier de faux avis/mentions pour simuler une réputation — ce sont des pratiques que Google et les plateformes concernées sanctionnent activement (bannissement, pénalité de spam), et qui, une fois détectées, nuisent davantage à la crédibilité qu'elles ne l'aident. Si Audyxa veut être présent sur Reddit ou des forums, ce doit rester une contribution humaine réelle et utile, jamais un contenu généré en masse et posté automatiquement.

---

## 10. PHASE 8 — MESURER LA VISIBILITÉ IA (méthode d'audit, à faire après déploiement)

**À exécuter par l'utilisateur manuellement une fois les phases précédentes déployées** (pas une tâche pour les agents cette nuit, mais à inclure dans le plan pour la suite).

### 10.1 Le test des "prompts clients"
Identifier 15-20 questions que poseraient de vrais prospects (ex : *"Quel cabinet de conseil en transformation digitale au Sénégal ?"*, *"Comment digitaliser mon cabinet comptable au Bénin ?"*), et les tester régulièrement (idéalement chaque semaine) dans ChatGPT, Gemini et Perplexity **en navigation privée / nouveau chat à chaque fois** pour éviter que l'historique ne fausse le résultat.
- Noter si Audyxa est **mentionné** (nommé sans lien) ou **cité** (avec lien cliquable) — les deux sont utiles mais la citation est plus forte.
- Demander explicitement à l'IA : *"Pourquoi as-tu recommandé ces entreprises ?"* pour comprendre ses critères et repérer les lacunes du site.

### 10.2 Bing Webmaster Tools — l'outil gratuit le plus fiable pour le GEO
Créer un compte Bing Webmaster Tools et y soumettre le sitemap d'Audyxa. C'est pertinent au-delà de Bing lui-même car **ChatGPT s'appuie sur l'index Bing pour ses recherches en temps réel**. Le rapport "AI Performance" de cet outil indique les citations dans Copilot et les "grounding queries" (mots-clés exacts que l'IA a tapés pour trouver le contenu Audyxa) — c'est la donnée la plus concrète disponible gratuitement pour mesurer la progression GEO dans le temps.

### 10.3 Indicateur "taux de pages citées" (à calculer soi-même)
Formule simple à suivre dans le temps :
```
(Nombre de pages Audyxa citées par une IA sur l'échantillon de prompts testés / Nombre total de pages indexées du site) × 100
```
Un site spécialisé et cohérent thématiquement (ce que la structure en cocons sémantiques de ce plan vise à construire) obtient généralement un meilleur ratio qu'un gros site généraliste — c'est un argument de plus en faveur de la profondeur du contenu méthode/guides plutôt que de la dispersion.

---

## 11. QA FINALE (à lancer en dernier, après tous les agents de code)

1. **Aucun lien mort** : tous les liens `/pays/[pays]/[ville]` pointent bien vers une page pays existante.
2. **Aucune meta description dupliquée** entre deux pages (script de contrôle : extraire toutes les `<meta name="description">` et vérifier l'unicité).
3. **Tous les JSON-LD valident** sans erreur de syntaxe (Organization, FAQPage, Article, Person, BreadcrumbList).
4. **`robots.ts`** autorise bien GPTBot/ClaudeBot/PerplexityBot/CCBot/Bingbot en plus de Googlebot (§2.6).
5. **`sitemap.ts` régénéré** avec toutes les nouvelles URLs, `lastModified` réel par page.
6. **`llms.txt` créé et accessible** à `audyxa.com/llms.txt`.
7. **Maillage interne conforme aux règles de la section 3** : chaque page stratégique a bien 3-5 liens entrants contextuels, pas seulement des liens de menu/footer.
8. **Cohérence NAP** (Nom, Adresse, Téléphone) strictement identique sur toutes les pages du site (home, contact, pages pays/villes) — toute variation (ex : format de téléphone différent) nuit à la confiance algorithmique.
9. **Vérifier qu'aucune page générique (home, méthode, glossaire, guides) ne mentionne exclusivement "Bénin"** — relire la règle directrice en section 0.
10. **Vérifier qu'aucun chiffre, témoignage ou avis n'a été inventé** — chercher les occurrences de `[À COMPLÉTER PAR L'UTILISATEUR]` restées dans le contenu final et les lister pour l'utilisateur plutôt que de les laisser silencieusement dans le texte publié.
11. **Core Web Vitals** : vérifier qu'aucune image des nouvelles pages ne contourne `next/image`.

---

## 12. RÉCAPITULATIF — DÉCOUPAGE EN AGENTS PARALLÈLES

| Agent | Tâche | Sections | Dépendances | Démarrage |
|---|---|---|---|---|
| Agent 1 | Technique Next.js globale + maillage interne | §2, §3 | Aucune | ✅ Immédiat |
| Agent 2 | 8 pages pays (avec structure GEO §4 appliquée) | §5 | Aucune | ✅ Immédiat |
| Agent 3 | 15 pages villes (avec structure GEO §4 appliquée) | §6 | Idéalement après Agent 2 pour les liens ; sinon 404 temporaires corrigées en QA | ✅ Immédiat (avec réserve) |
| Agent 4 | Glossaire + guides + comparatifs + secteurs (structure GEO §4) | §7 | Aucune | ✅ Immédiat |
| Agent 5 | Page auteur fondateur + liaison E-E-A-T | §8 | Aucune | ✅ Immédiat |
| QA finale | Vérification globale | §11 | Tous les agents précédents terminés | ❌ Dernier |
| Utilisateur (hors code) | Visibilité hors-site (§9) et mesure GEO (§10) | §9, §10 | Après déploiement | À planifier en continu, pas cette nuit |

Tous les agents 1 à 5 peuvent être lancés simultanément dès le départ, sauf la QA finale qui attend la fin de tous les autres.

---

## 13. CE QU'IL NE FAUT PAS INVENTER (rappel renforcé)

- **Chiffres clés Audyxa** (années d'expérience, nombre de missions, nombre de clients) — `[À COMPLÉTER PAR L'UTILISATEUR]` si inconnu.
- **Témoignages clients ou études de cas** — idem, jamais fabriqués.
- **Statistiques macro-économiques ou sectorielles** — toujours avec organisme réel + année réelle (Banque mondiale, GSMA, DataReportal, UEMOA, BCEAO). Si l'agent ne peut pas vérifier une source en temps réel, ne pas citer de chiffre plutôt que d'en inventer un plausible.
- **Avis clients, notes, classements** — ne jamais simuler une preuve sociale qui n'existe pas.
- **Certifications ou diplômes du fondateur** non confirmés.
- **Profils sociaux (`sameAs`)** — ne lister que des URLs réelles et vérifiées, jamais une URL construite par supposition.

Une fausse statistique ou un faux témoignage détecté (par un lecteur humain, par Google, ou par une IA qui croise les sources) coûte beaucoup plus cher en crédibilité que l'absence temporaire de la donnée.
