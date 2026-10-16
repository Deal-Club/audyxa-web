# Prompt à coller dans Claude Code (dossier du site Audyxa Formation)

Avant de lancer : exporte la clé dans le terminal (jamais dans un fichier du dépôt) :
`export SERPAPI_KEY=<ta clé SerpAPI>` puis lance `claude`.

```
Contexte : je veux faire passer https://[DOMAINE-FORMATION] (Audyxa Formation : [décris en 1 phrase l'offre : formations en transformation digitale / IA / ... , publics, pays visés]) devant mes concurrents sur Google, dans les AI Overviews (GEO) et les réponses directes (AEO). Carte blanche : utilise un Workflow multi-agents.

Outil : l'API SerpAPI, clé dans la variable d'environnement SERPAPI_KEY (ne l'écris JAMAIS dans un fichier du dépôt, un commit ou un log). Vérifie d'abord le quota via https://serpapi.com/account.json. Appelle https://serpapi.com/search.json avec hl=fr, num=10 et gl par pays (ci, sn, bj, tg, ml, bf, ne, gn, cm, ga, cd, cg, mg, be, ch, lu, fr, ca selon mes marchés). Budget max ~100 recherches ; écris le script Python dans le scratchpad (pas dans le dépôt) et sauvegarde le JSON brut.

ÉTAPE 1 — Mots-clés actuels : lis le code, le sitemap et seo/page-map.csv s'il existe, et liste les requêtes que je vise (formations, certifications, financement OPCO/FDFP si pertinent, formats inter/intra/e-learning, thèmes, villes/pays, publics, "meilleure formation X", "formation X prix", "formation X certifiante"). Regroupe-les en familles.

ÉTAPE 2 — Données réelles SerpAPI : par requête représentative, récupère top 10 organique, ma position, "Autres questions posées" (related_questions), recherches associées, présence d'AI Overview / answer_box / pack local / ads.

ÉTAPE 3 — Analyse concurrentielle : un agent par famille ouvre (WebFetch) les 3 à 5 pages concurrentes les mieux classées et explique concrètement pourquoi elles rankent (title, H1/H2, longueur, FAQ, schema Course/FAQPage/Organization, programme détaillé, prix, durée, certification, avis, formateurs nommés, preuves, fraîcheur, maillage, autorité) et leurs faiblesses. Ne classe jamais une page non ouverte ; signale l'invérifiable. Mes positions viennent de SerpAPI (géolocalisé), pas d'un outil non géolocalisé.

ÉTAPE 4 — Livrable : seo/analyses/plan-depassement-concurrents-formation.md avec (A) mes positions réelles, (B) domaines qui me dépassent et pourquoi, (C) signaux SERP, (D) banque de mots-clés (principaux, longue traîne, PAA, recherches associées) par famille et intention, (E) plan P0/P1/P2 (technique, contenu, schema Course/FAQ/Organization/Review, AEO/GEO, preuves, netlinking, Google Business Profile) avec quoi / pourquoi / effort / impact / KPI, (F) plan par marché, (G) ce dont tu as besoin de moi, (H) limites.

Important : ne modifie AUCUN fichier du site, ne fais que la recherche et le plan (un autre agent appliquera les optimisations). N'invente aucun chiffre, avis, certification ni cas client : signale ce qui est invérifiable.
```

Remplace `[DOMAINE-FORMATION]` et la description de l'offre avant de lancer.
