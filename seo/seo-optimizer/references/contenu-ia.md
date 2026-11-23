# Contenu à grande échelle et IA

Sommaire : position de Google, qualité (non-commodité, information gain), pipeline, cadence, programmatique, actualités, vidéo vers articles, watermark, erreurs, résultats cités.

## Position de Google et du marché [A] V1, V2, PV, E1

Google ne juge pas qui a écrit (humain, IA, agent) ; il juge si la page satisfait l'intention de recherche. Le "watermark" invisible que certains modèles ajoutent n'est pas une cause de pénalité. Le vrai danger est le contenu générique sans données propres, appelé "AI slop".

**Garde-fou [ext]** : depuis 2024, Google a une politique sur le contenu produit en masse sans valeur ("scaled content abuse"). Publier des centaines ou milliers d'articles IA sans apport propre est une zone à risque. C'est cohérent avec le conseil de PV : un site neuf ne publie pas plus d'une page par jour ; il faut des années et une vraie marque pour accélérer. Traiter les promesses de milliers d'articles comme orange.

## Qualité : contenu non-commodité et information gain [B] E1, V1, PV

- Non-commodité : un point de vue ou une expertise que n'importe quel modèle ne produit pas (exemple : "pourquoi nous avons renoncé à l'inspection et économisé de l'argent" plutôt que "7 conseils pour un premier achat").
- Information gain : apporter une information nouvelle plutôt que répéter les faits connus.
- Techniques : données propriétaires, tests personnels, captures d'écran originales, opinion à contre-courant appuyée sur des données, variables imposées dans le modèle de rédaction ("l'erreur à éviter", "ce que je dis à chaque client").
- Méthode **FACT** [B] V2 : Facts, Attitude, Creativity, Tune-up, SEO, pour vérifier l'exactitude, adapter le ton de la marque, ajouter de la créativité, retoucher, optimiser.
- Donner à l'IA des données réelles (GSC, SERP concurrentes, mots-clés) au lieu de lui faire écrire "à vide" [A] V1, PV.

## Pipeline éditorial recommandé [B] V1, V2, PV, E1

1. Opportunité : mot-clé d'achat, SERP, GSC (voir `mots-cles-intention.md`).
2. Brief : title, H1, structure Hn, mots-clés secondaires, questions de la SERP, éléments à inclure (PV).
3. Veille avant rédaction : recherches web et lecture de pages pour des infos à jour (PV, via un outil connecté).
4. Rédaction avec preuves : auteur et LinkedIn, sources d'autorité, tableau, FAQ, images originales, "mon avis".
5. Contrôle qualité : vérifier chaque fait, prix, chiffre (E1 a trouvé des prix et points de douleur inventés par un modèle).
6. Optimisation : title, H1 unique, alt, schema, maillage 3 à 5 liens entrants (voir `on-page.md`).
7. Publication via le CMS (WordPress, Shopify, Webflow, Ghost) ou un dépôt de code, mise à jour du sitemap.
8. Indexation : demande dans GSC ; API d'indexation de tiers (Indexional) cités pour des résultats en moins de 24 heures [B] E1.
9. Suivi : positions, citations IA, mise à jour trimestrielle.

## Template de page "parfaite" [B] PV

Créer à la main (ou à partir du code source d'une page qu'on aime, par exemple faite avec Elementor) une page modèle : H1 et hero, classement ou tableau comparatif, quiz, FAQ, title et meta en gabarits, bloc auteur. L'IA reçoit ce modèle et doit le respecter à chaque nouvelle page. Adapter selon le mot-clé : par exemple le classement n'a de sens que pour les requêtes "meilleur".

## Pages programmatiques [B] V2, PV

Patterns répétitifs à forte intention : "IQ de [célébrité]" (cas cité), "Meilleur [outil] pour [niche]", "Alternative à [concurrent]", ville x service. **Condition** : chaque page doit être réellement différente et utile ; changer seulement le nom de la ville produit des pages quasi dupliquées. Commencer par une première page parfaite, la tester, puis décliner par lots limités.

## Cadence [B] PV, V2

PV : une page par jour au maximum pour un site neuf ; cinq pages par jour seulement pour une vraie marque ancienne avec autorité. Le même PV mentionne des routines Claude Code qui créent 3 pages par jour : contradiction interne, voir `contradictions.md`. Les outils d'auto-blogging cités publient de 1 à 20 articles par jour [C].

## Section actualités sur autopilote [B] V1, V2

Une section "news" liée à la niche, alimentée par des agents qui lisent les grands médias et rédigent des articles originaux (exemples : e-commerce de pièces auto avec actualités Tesla ; plombier ou comptable avec actualités de leur domaine). Attire des lecteurs qui sont des clients potentiels. Cas extrême cité : média d'actualité chaude passé de 0 à 30 000 visites par mois en 12 à 24 heures, avec 2 200 $ de valeur de trafic (auto-déclaré [C]). Attention à la fiabilité et à l'originalité (voir garde-fou).

## Vidéo vers article, article vers social [A] V1, E1

Convertir chaque vidéo YouTube en article avec la vidéo intégrée, tableaux, liens (exemple : un utilisateur a converti des vidéos anglaises en articles français et gagné environ 6 000 visites mensuelles, cas auto-déclaré). Créditer l'auteur d'origine si le contenu n'est pas le vôtre. Faire l'inverse : article vers LinkedIn, X, Facebook.

## Erreurs [A]

Texte générique sans structure, tableaux, images ni maillage ; faits non vérifiés ; aucune preuve d'expérience ; publication en rafale sur un site neuf ; reformuler 30 fois le même article sans valeur ; copier les pages des concurrents ; oublier la mise à jour des dates.

## Résultats cités (pour mémoire, auto-déclarés) [C]

De 0 à 44 000 / 45 000 visiteurs mensuels avec un travail on-page IA ciblé ; 38 % de leads en plus venant des LLM ; mentions IA de 0 à 70 % en 24 heures. Voir `etudes-de-cas.md` pour le contexte et la crédibilité.

## Apports du notebook CC (production avec Claude Code) [B]

- Mettre le site sur un dossier avec un fichier de consignes (CLAUDE.md) qui impose génération statique, structure et standards. Le narrateur utilise Antigravity avec l'extension Claude Code ; le principe vaut pour tout éditeur.
- Donner une maquette de référence (capture d'un site de design) pour éviter un rendu générique.
- Flux de page : mot-clé tiré du CSV, grappe de mots-clés, images libres de droits par API (Pexels), voix et style, analyse des trois premiers résultats, checklist on-page, métadonnées, maillage.
- Emballer le flux dans un skill (`/blog`) qui évite de reprendre un mot-clé déjà utilisé ; il peut tourner à heure fixe.
- **Cadence** : montée progressive (ex. 1 article au jour 1, 2 au jour 3, 3 au jour 5, 4 au jour 8), jamais des centaines d'un coup, sous peine de signal de spam. Confirme la règle de `contenu-ia.md`.
- **Pages de service** : deux tactiques cumulées, articles de blog (autorité thématique, "la marée qui lève tous les bateaux") et pages de service (mots-clés d'argent). Chaque page de service reprend la mise en page de l'accueil pour la conversion ; le narrateur annonce 20 % de conversion sur sa meilleure page issue de tests Google Ads [C, auto-déclaré].
- SR met en garde contre une mise à jour de Google qui pénalise le contenu IA en série tiré des PAA sans valeur ajoutée ni réécriture humaine [B] ; aucune notion de "watermark" n'y figure.
- **Parti pris** : CC présente le SEO comme "fonction du contenu"; comprendre Google comme voulant servir du contenu qui fait revenir les gens est une simplification du narrateur.
