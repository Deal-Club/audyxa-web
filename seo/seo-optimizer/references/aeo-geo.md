# Visibilité dans les IA : AEO et GEO

Sommaire : cadrage, comment les IA choisissent, cartographie des prompts, trois leviers, structure de page, schema et fichiers techniques, plateformes (Reddit, YouTube, parasite), local, petites marques, mesure, sentiment, quick wins 7 jours, plan 30 jours, divergence Google.

## Cadrage [A] V1, NX, GL, E1

Le GEO (generative engine optimization) et l'AEO (answer engine optimization) visent à être mentionné ou cité par ChatGPT, Perplexity, Gemini, Claude, Grok et les AI Overviews de Google. Les IA agrègent des informations trouvées sur le web et les présentent en une réponse ; elles n'inventent pas ces sources. Deux créateurs le résument ainsi : c'est du SEO augmenté, plus structuré et plus orienté intention (NX, GL).

- **Mention** : la marque est nommée, sans lien. **Citation** : référence avec lien cliquable, principale source de trafic qualifié depuis l'IA [B] GL.
- Les IA interrogent des dizaines de sources à la fois ("fan-out") et cherchent un consensus ; plusieurs sources fiables qui disent la même chose augmentent la probabilité d'être citée [B] GL.
- Biais par moteur [B] V1, NX : ChatGPT s'appuie en partie sur Bing ; Gemini sur Google ; Grok sur X ; Perplexity sur les vidéos YouTube et les articles structurés. Pas de corrélation stricte avec la position Google (environ un tiers des marques citées par ChatGPT ne seraient pas en première page, selon une étude Ahrefs rapportée [C]).

## Cartographie des prompts [B] V1, PV, GL

- **Prompts de marque** : l'utilisateur nomme déjà la marque. La IA la cite naturellement.
- **Prompts sans marque** (levier principal) : un prospect qui ignore l'existence de la marque exprime un besoin d'achat ("existe-t-il un outil qui construit des backlinks automatiquement ?").
- Générer 10 à 20 (jusqu'à 25 à 50 pour un suivi avancé) prompts clients, avec un agent ou à la main. Prompt type : "Give me a list of prompts I can type into an LLM AI chat that don't mention my brand or product in the prompt, but where you're confident the reply might mention it. Research my website and competitor sites as well as socials."
- Tester en nouvelle conversation ou navigation privée, sur ChatGPT, Gemini, Perplexity, Claude, Grok ; noter si la marque est mentionnée ou citée, quels concurrents apparaissent, quelles sources sont utilisées. Demander à l'IA "Pourquoi as-tu recommandé ces entreprises ?" et "Quelles sources as-tu utilisées ?" [B] GL, E1. Tableau de suivi hebdomadaire.

## Trois leviers par priorité [B] V1 (corroboré en partie par E1, PV, GL)

1. **Se faire inclure dans les sources déjà citées** ("force include") : repérer les articles comparatifs et listes "Top 10" que l'IA cite pour votre prompt, contacter les éditeurs, négocier l'ajout de votre marque (paiement éditorial, partenariat ou échange de mentions). Effet annoncé : citation dès le lendemain. Les mentions dans des listes d'autorité pèseraient 41 % des facteurs de citation sur ChatGPT et jusqu'à 64 % sur Perplexity (E1) [C]. **Risque** : voir ci-dessous.
2. **Créer ses propres sources** : pages très approfondies sur son site ; "linkable assets" (études, statistiques) ; contenu syndiqué sur YouTube, LinkedIn, Reddit, X, Medium. Convertir vidéos en articles et articles en posts [A] V1, PV, E1.
3. **Autorité du domaine et backlinks** : corrélation entre DR élevé et fréquence de citation [B] V1. E1 affirme que les mentions de marque corrèlent plus fortement que le DR [B].

**Risque de la méthode 1 [C]** : l'auto-promotion dans des listes écrites par soi-même ou payées peut être filtrée ; des moteurs intègrent des filtres anti-spam GEO qui affichent des avertissements ou ignorent les sources trop promotionnelles [B] V2. Écrire un classement honnête (critères visibles, concurrents réels) plutôt qu'un classement truqué où l'on se met toujours premier.

## Structure de page citable [A] NX, GL, E1, PV

Réponse directe en tête (moins de 50 mots à 4 phrases), TL;DR, intertitres en questions, blocs autonomes (une idée par section), listes, tableaux comparatifs, FAQ de 40 à 60 mots par réponse, statistiques avec chiffre + date + source, auteur identifié, date de mise à jour visible, contenu en HTML brut. Détails et seuils dans `on-page.md`. Les formats les plus cités : listes "Top 10", comparatifs et tableaux, guides de décision, FAQ, études de cas chiffrées. Pages de service factuelles (services, horaires, tarifs transparents) pour le local.

## Données structurées et fichiers [B]

Organization, Article, Person, Product, LocalBusiness ou Service, FAQPage, HowTo, VideoObject ; champ sameAs pour relier l'entité à ses profils. robots.txt : autoriser GPTBot, PerplexityBot, CCBot, Bingbot. **llms.txt** : fichier à la racine censé servir de carte aux robots IA ; présenté comme standard émergent [B] NX, E1, mais son effet réel n'est pas démontré [ext] : l'ajouter est peu coûteux, ne pas en faire une promesse. Pages "/agents" et API standardisées pour les agents autonomes : idée prospective sans preuve [C].

## Reddit, YouTube et le "parasite SEO" [B] E1, V1, NX

- Reddit apparaîtrait dans 92,8 % des requêtes IA et Perplexity le cite dans environ 45 % de ses réponses [C, chiffres non vérifiés]. Tactique : commentaires utiles et subtils, retours d'expérience avec chiffres ; pas de liens directs en série (bannissement).
- YouTube : source très citée ; transcriptions et sous-titres complets ; transformer des articles en vidéos courtes.
- **Parasite SEO** : publier sur des plateformes à fort DR (Medium, LinkedIn Pulse, Quora, Substack, GitHub) des comparatifs ciblés, en adaptant l'angle à chaque plateforme, puis forcer l'indexation. Marche vite mais dépend de la plateforme hôte (suppression possible) et Google a durci sa politique sur l'abus de réputation de site [ext]. Classé orange dans `techniques-risquees.md`. Les "Claude Artifacts" classés en 5 heures sont une variante de cette tactique [C].
- Mentions inauthentiques (faux avis, commentaires injectés) : contraire aux règles de spam de Google [rouge].

## Local et IA [B] GL, V1

Fiche GBP impeccable (source de confiance majeure pour les IA), avis détaillés, réponses riches en contexte, page d'avis sur le site, précision géographique, schema LocalBusiness avec sameAs, cohérence NAP, études de cas locales, mentions dans les médias de proximité. Détails dans `seo-local.md`. Pour l'IA, un avis texte contextualisé vaut plus qu'une note seule.

## Petites marques contre grandes [B] NX, GL

Les grandes marques ont l'autorité mais publient lentement (6 à 12 mois pour un article). Petits acteurs : publier vite sur des niches négligées, pages "Moi vs le géant" ("Alternative à X"), rapports d'étude originaux en communiqué de presse, parasite SEO, spécialisation (un petit assureur local peut avoir un meilleur "GPT Rich" qu'un grand groupe).

## Mesure [B] GL, V1

- **GPT Rich** : (pages du site citées par ChatGPT / pages indexées sur Google) x 100. Exemple : 280 sur 13 000 = 2,1 %.
- Bing Webmaster Tools, rapport AI Performance (citations Copilot, grounding queries).
- Outils cités : moniteurs de mentions LLM (Arvo, Surfer AI Tracker), Visibility Checker de Netlinking.com ; tableau manuel hebdomadaire sur 20 prompts.
- Prendre une mesure de départ avant d'agir.

## Sentiment [B] V1

Une mention négative nuit. Si une IA déconseille la marque, remonter aux sources citées (forums, avis) pour corriger l'information à la source.

## Quick wins en 7 jours [B] NX, E1

Vérifier robots.txt (robots IA), ajouter un TL;DR sur les 3 pages principales, FAQ de 40 à 60 mots en bas des pages stratégiques, soumettre le site à Bing Webmaster Tools, auditer ce que les IA savent de la marque, uniformiser le NAP.

## Plan à 30 jours (E1, résumé)

Semaine 1 : mots-clés d'achat, SERP et citations IA, audit de visibilité, plan thématique. Semaine 2 : robots.txt, schema, llms.txt, GBP, NAP. Semaine 3 : contenu non-commodité, réponse dans les 30 % supérieurs, preuves visuelles ; parasite SEO si accepté. Semaine 4 : indexation, CTA, workflow IA, rafraîchissement. Les promesses de résultats en heures sont à prendre avec réserve (voir `chiffres-et-seuils.md`).

## Divergence avec Google [B] E1

Google dit que l'AEO et le GEO ne sont que du SEO et que découper le contenu pour les machines est inutile ; les praticiens annoncent un gain de citation jusqu'à 40 % avec une structure fragmentée. Voir `contradictions.md`.

## Apports du notebook CC (réponse IA, 41 sources) [B]

- Position : le SEO classique reste la base de l'AEO ; environ 76 % des citations des Google AI Overviews viendraient de pages déjà dans le top 10 [C]. Le narrateur de la vidéo estime que "AI SEO = SEO" car les IA lancent d'abord une recherche web.
- **Capsule de réponse** : bloc de 20 à 25 mots sous un H2 ou H3, autonome, pour l'extraction.
- Contenu cité en moyenne 25,7 % plus récent : rafraîchir les pages piliers.
- Formats : listes comparatives (environ 43,8 % des sources citées par ChatGPT [C]), FAQ, données chiffrées originales, entités nommées explicitement.
- Mentions de marque tierces (articles comparatifs, forums, presse) jugées plus puissantes que les backlinks classiques.
- YouTube très cité : dire les mots-clés cibles dans l'audio.
- Technique : autoriser GPTBot, OAI-SearchBot, ClaudeBot, Google-Extended ; être indexé sur Bing ; HTML propre sans JavaScript lourd ; rediriger les URL 404 inventées par les IA vers les vraies pages (repérées dans les outils d'analyse).
- SR ne couvre ni l'AEO ni le GEO.
