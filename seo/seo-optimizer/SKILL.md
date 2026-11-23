---
name: seo-optimizer
description: >-
  Audit, plan et optimisation SEO complète d'un site : SEO classique, SEO local (Google Business Profile), e-commerce, backlinks, Next.js, et visibilité dans les IA (ChatGPT, Perplexity, Gemini, AEO/GEO). Pose d'abord des questions de cadrage, produit un plan priorisé, attend la validation, puis exécute et vérifie. À utiliser dès que l'utilisateur parle de SEO, référencement, positionnement Google, audit de site, mots-clés, netlinking, backlinks, fiche Google Business, rank and rent, être cité par ChatGPT, GEO ou AEO, ou veut créer ou optimiser un site pour qu'il se classe, même sans prononcer le mot SEO. Use for SEO audits, ranking plans, rank-and-rent site builds, local SEO and AI-search visibility.
---

# SEO Optimizer

Ce skill transforme une demande du type "optimise ce site" ou "crée un site qui se classe" en un travail structuré : cadrage, audit, plan priorisé, validation, exécution, vérification. Sa base de connaissances est dans `references/`, construite à partir de vidéos SEO analysées par NotebookLM (voir `CHANGELOG.md` pour ce qui a été ingéré).

Répondre dans la langue de l'utilisateur. Garder les termes techniques anglais usuels (title, H1, backlink, anchor, GBP).

## Étiquettes de confiance dans les références

- **[A]** confirmé par au moins deux chaînes ou notebooks différents : appliquer par défaut.
- **[B]** une seule source claire : appliquer si le contexte s'y prête, et mesurer.
- **[C]** contredit, daté, invérifiable ou risqué : ne pas appliquer sans l'expliquer à l'utilisateur et obtenir son accord.
- **[ext]** complément de Claude, absent des vidéos (par exemple les seuils Core Web Vitals) : à traiter comme une bonne pratique générale, pas comme un enseignement des vidéos.

Codes des sources : **V1** et **V2** = chaîne Vasco's SEO Tips (deux notebooks), **PV** = Paul Vengeons, **E1** = notebook "SEO to Rank #1" (plusieurs créateurs, dont une agence e-commerce Shopify), **NX** = notebook "le secret du SEO" (Next.js, AEO/GEO, fondamentaux), **GL** = notebook GEO local, **SR** = notebook "serrurier / fiche Google" (20 vidéos françaises de SEO local), **CC** = notebook "seo" (méthode Claude Code : site statique, blogs, pages de service, checklist on-page, Lighthouse, GSC).

## Principes qui guident les décisions

1. **Intention d'achat avant volume.** Un mot-clé à gros volume mais sans intention d'achat apporte du trafic et zéro revenu. Un mot-clé à 10 recherches par mois qui mène à un achat vaut mieux.
2. **Optimiser l'existant fort avant de créer.** Les pages déjà en positions 5 à 20 sont les gains les plus rapides et les moins chers.
3. **Fondations avant agressivité.** Technique et liens de marque d'abord, ancres exactes ensuite, sinon le profil paraît artificiel.
4. **Valider avant d'exécuter.** Une erreur de balises, de redirections ou de robots.txt peut faire chuter un site entier. Une pause de validation coûte une minute.
5. **Sûr par défaut.** Les sources mélangent des méthodes propres et des méthodes qui violent les consignes de Google. Le tri est fait dans `references/techniques-risquees.md` : vert, orange, rouge.
6. **Preuves modestes.** Les sources viennent surtout de créateurs qui vendent un outil ou un service (Arvo, Chat SEO, agences). Les résultats sont auto-déclarés. Ne jamais promettre un classement. Ne pas pousser un outil précis : présenter des alternatives.
7. **Adapter au marché cible.** Beaucoup de seuils (DR 30+, trafic US) viennent du marché américain. Les transposer au pays et à la langue du site (France, Canada, Afrique francophone) au lieu de les copier.
8. **La structure "pour les machines" coûte peu.** Google affirme que le GEO et l'AEO sont du SEO ordinaire et que reformater pour les IA est inutile ; les praticiens mesurent le contraire. Comme appliquer une structure claire (réponse en tête, listes, FAQ) sert aussi les humains, on l'applique, sans la vendre comme une garantie. Voir `references/contradictions.md`.

## Phase 0 : cadrage (questions avant tout)

Poser les questions en un seul message groupé, en sautant celles dont la réponse est déjà connue. Si l'utilisateur répond "décide pour moi", prendre des valeurs par défaut raisonnables et les écrire dans le plan comme hypothèses. Utiliser AskUserQuestion quand c'est disponible.

1. **Mode** : site existant à optimiser (mode A) ou nouveau site à créer (mode B) ? Site client, site personnel ou site destiné à être loué (rank and rent) ?
2. **Site et accès** : URL, technologie (Next.js, WordPress, Shopify, autre), accès au code ou au CMS, Google Search Console, Analytics, Bing Webmaster Tools.
3. **Activité** : services ou produits, lesquels rapportent le plus et lesquels mettre en avant en premier.
4. **Zone et langues** : villes, pays, régions ciblés ; langues ; présence physique réelle (adresse vérifiable) ou service à distance.
5. **Client idéal et objectif** : qui achète, quelle action compte (appel, devis, vente, location du site).
6. **Concurrents** : ceux que l'utilisateur connaît, et ceux qui apparaissent dans les résultats.
7. **Risque accepté** : méthodes sûres uniquement (défaut) ou aussi des méthodes orange avec accord explicite ? Site client (toujours prudent) ou test personnel ?
8. **Ressources** : budget mensuel pour liens et contenu, temps disponible, outils déjà payés, qui valide le plan.

Questions supplémentaires en mode B : niche déjà choisie ? modèle (location, affiliation, services propres) ? budget domaine et hébergement ? numéro de suivi d'appels prévu ?

## Phase 1 : audit (mode A)

Lire les références utiles, pas toutes. Ordre :

1. Accès et données : GSC, Analytics, Bing Webmaster Tools. Sans GSC, première action du plan : l'installer.
2. Technique bloquant : `references/audit-technique.md`.
3. Intention, mots-clés, quick wins : `references/mots-cles-intention.md`.
4. Pages qui rapportent : `references/on-page.md` et `references/maillage-et-architecture.md`.
5. Si entreprise de proximité : `references/seo-local.md`.
6. Si boutique en ligne : `references/ecommerce.md`.
7. Autorité (liens et mentions) : `references/backlinks-annuaires.md`.
8. Visibilité dans les IA : tester 10 à 20 prompts clients, voir `references/aeo-geo.md`.
9. Contenu : lacunes, fraîcheur, qualité : `references/contenu-ia.md`.

## Phase 1 bis : étude de marché (mode B)

1. Valider la niche et la demande : `references/rank-and-rent.md`, `references/mots-cles-intention.md`.
2. Concevoir l'architecture avant de construire : un cluster par intention, pages service x lieu, `references/maillage-et-architecture.md`.
3. Construire une "page parfaite" qui sert de template : `references/on-page.md`.
4. Poser les fondations : technique, schema, fiche GBP si l'activité est réelle.
5. Publier à cadence mesurée : `references/contenu-ia.md`.
6. Liens : fondations de marque d'abord, liens puissants ensuite : `references/backlinks-annuaires.md`.
7. Mesurer, puis monétiser.

## Phase 2 : plan priorisé

Utiliser `references/plan-template.md`. Classer chaque action par impact, effort, risque et confiance de la source. Quatre horizons : semaine 1 (technique bloquante et quick wins), mois 1 (on-page, maillage, local), mois 2 à 3 (contenu, liens de fondation puis puissants), continu (avis, posts, mises à jour trimestrielles, suivi IA). Une action de niveau orange apparaît dans une section séparée, avec son risque en une phrase.

## Phase 3 : validation

Présenter le plan en résumé et demander : tout exécuter / exécuter par lots / modifier. Pour les sites personnels de l'utilisateur, il peut renoncer à cette étape ; pour un site client, la garder.

## Phase 4 : exécution

- Travailler sur une copie ou une branche, sauvegarder avant de modifier, un type de changement à la fois (technique, puis on-page, puis maillage).
- Ne jamais supprimer une page ni changer une URL sans redirection 301 et accord. Ne pas toucher aux balises noindex ou à robots.txt sans validation.
- Ne pas inventer de faits : prix, chiffres, noms, avis. Les modèles de langage inventent ; une fausse information détruit la crédibilité [A].
- Cadence de publication d'un site neuf : une page par jour au maximum, et chaque page doit apporter une valeur propre [PV, confirmé par la politique de Google sur le contenu produit en masse [ext]].
- Tenir un journal des changements dans le projet (fichier `SEO-CHANGELOG.md`).
- Notes par technologie : Next.js (voir `references/audit-technique.md`, section Next.js), WordPress (extension SEO, sitemap automatique), Shopify (pages de collections, voir `references/ecommerce.md`).

## Phase 5 : vérification et suivi

Retester vitesse (PageSpeed), données structurées (Rich Results Test), liens cassés, indexation (GSC, Bing). Noter une base de départ (impressions, clics, positions, citations IA) avant les changements. Fixer des points de contrôle à 2, 4 et 12 semaines. Délais à annoncer honnêtement : le SEO classique demande souvent 3 à 6 mois ; les gains IA peuvent apparaître en quelques jours mais varient (voir `references/chiffres-et-seuils.md`). Rédiger un rapport court : fait, constaté, prochaines actions.

## Politique de risque

Lire `references/techniques-risquees.md` avant de recommander une méthode de liens, une astuce de fiche Google ou une automatisation de masse.

- **Vert** : appliquer.
- **Orange** : expliquer le risque, proposer l'alternative sûre, n'exécuter qu'avec accord explicite et jamais sur un site client sans accord écrit.
- **Rouge** : ne pas exécuter ni recommander (faux avis, faux profils, manipulation de clics, réseaux de blogs privés, liens spam). Expliquer pourquoi, en une phrase.

## Carte des références

| Besoin | Fichier |
|---|---|
| Audit technique, seuils, quick wins, Next.js | `references/audit-technique.md` |
| Mots-clés, intention, clusters | `references/mots-cles-intention.md` |
| Règles de page, contenu, schema, E-E-A-T | `references/on-page.md` |
| Maillage, silos, autorité thématique | `references/maillage-et-architecture.md` |
| Google Business Profile, avis, citations | `references/seo-local.md` |
| Boutiques en ligne | `references/ecommerce.md` |
| Backlinks, annuaires, mentions | `references/backlinks-annuaires.md` |
| Citations par ChatGPT, Perplexity, Gemini | `references/aeo-geo.md` |
| Contenu à grande échelle, qualité, IA | `references/contenu-ia.md` |
| Claude Code, MCP, agents | `references/automatisation-claude-code-mcp.md` |
| Location de sites, modèles de prix | `references/rank-and-rent.md` |
| Cas chiffrés et crédibilité | `references/etudes-de-cas.md` |
| Méthodes à risque | `references/techniques-risquees.md` |
| Chiffres, seuils, délais | `references/chiffres-et-seuils.md` |
| Désaccords entre sources | `references/contradictions.md` |
| Trous à combler et prochaines questions | `references/lacunes-a-combler.md` |
| Modèle de plan | `references/plan-template.md` |
