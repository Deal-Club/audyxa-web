# Automatisation : Claude Code, MCP, agents

Sommaire : MCP en une phrase, connexion du site, workflows, agents autonomes et garde-fous, outils cités, indexation, rythme.

## MCP [A] V1, PV, E1

Le Model Context Protocol relie un agent (Claude Code, Claude Desktop, d'autres) à des logiciels et données : Google Search Console, DataForSEO, Ahrefs, Semrush, CMS (WordPress, Shopify, Webflow), Notion, Stripe. L'agent lit des données réelles et peut agir, sans passer par l'interface. Utile pour donner de vraies métriques au lieu de laisser un modèle "deviner".

## Connecter Claude Code à un site [B] PV

1. Créer une conversation Claude Code dans un dossier de travail.
2. Dire "je veux connecter mon site" ; il pose des questions (accès par dossier local, SSH ou SFTP, API du CMS). Prévoir 10 à 15 minutes.
3. Lui donner un modèle de page (voir `contenu-ia.md`) et un "process SEO" qu'il doit suivre à chaque publication : schema, maillage 3 à 5 liens entrants, hreflang si plusieurs langues, mise à jour du sitemap, bloc auteur.
4. Demander une indexation manuelle dans GSC après publication.
5. Tâches planifiées (routines) possibles pour produire des pages à heures fixes : à limiter selon la cadence recommandée.

Dans ce skill, les mêmes règles s'appliquent déjà : voir Phase 4 de `SKILL.md`.

## Workflows cités

1. **Audit technique et correctifs** : l'agent lit GSC, repère alt manquants, titles trop longs, H1 multiples, applique les corrections sur le CMS [B] V1, V2.
2. **Maillage interne** : l'agent parcourt le site, rapproche les pages par affinité sémantique, propose ancre et justification, applique les liens [B] V1.
3. **Stratégie et rédaction guidées par données** : recherche de volumes, SERP, questions Reddit et YouTube, rédaction pour combler les lacunes [B] V1, PV.
4. **Prospection de backlinks** : dossier avec des fichiers de compétences (skills) pour liens d'ONG et guest posts ; commande en langage naturel ("Build me some NGO charity links for [site]" ou "Run the guest post prompt for [site]") ; requêtes `inurl:"write for us"` et annuaires d'ONG ; filtre par DR et trafic via API ou MCP (exemple : DR supérieur à 30 et plus de 1 000 visites mensuelles de trafic du marché cible) ; sortie en CSV avec URL de soumission, métriques, consignes, e-mails de contact. L'humain envoie le contenu ou fait le don [B] V1, PV.
5. **Suivi IA et négociation de mentions** : surveiller la présence de la marque sur plusieurs LLM ; quand un concurrent est recommandé, extraire les sources citées et préparer le message à l'éditeur [B] V1.
6. **Réponses aux avis Google** : agent connecté à la fiche, brouillons avec ville, service, marque ; approbation humaine [B] V1.
7. **Analyse de concurrents** : Claude Desktop avec un MCP de données (Alloscan cité par PV) pour extraire les mots-clés d'un concurrent [B] PV.
8. **Veille de tendances** : agent qui lit X pour repérer des sujets avant les autres [B] E1.
9. **Rapport hebdomadaire par e-mail** : hausses, baisses, opportunités (fonctionnalité d'un outil de PV) [B].

## Agent autonome d'outreach : garde-fous [C] V1

Schéma décrit : agent sur machine cloud, adresse e-mail dédiée (Fastmail), carte bancaire virtuelle plafonnée (100 à 500 $), connexion MCP à des données SEO, e-mails de prospection et négociation (50 à 100 $ par lien), vérification mensuelle de la mise en ligne, rapport dans un chat.

Garde-fous recommandés [ext] : relecture humaine des e-mails sortants au début, plafond de dépense strict, validation d'un paiement avant envoi, liste de domaines interdits, journal de toutes les actions, aucun envoi de masse. Les e-mails de prospection de masse sont une zone de risque de réputation et de délivrabilité.

## Outils cités (exemples, pas des obligations)

- Claude (modèles de la famille actuelle) : planification, code, rédaction ; Claude Code et Claude Desktop pour agir ; Codex dans VS Code ; Antigravity (plusieurs agents en parallèle) ; ChatGPT en recherche approfondie [B] PV.
- **Chat SEO** (outil de PV) : connecté à GSC, Google Ads, DataForSEO ; mots-clés business, quick wins, audit concurrents, brief et rédaction, schema, maillage, rapport hebdomadaire [B] PV.
- **Arvo** (outil de V1, V2) : contenu avec variables, moniteur de mentions LLM, backlinks automatiques, optimiseur de site en lot, réponses aux avis, posts GBP, auto-blog, convertisseur YouTube vers article.
- Surfer SEO (topical map, AI tracker), Semrush par API, Yext, Bolt.new (annuaires), Tally (quiz), Hunter (e-mails), Firecrawl MCP (analyse de site et concurrents) [B] E1, PV.
- Indexation : Indexional (API) citée comme la plus rapide ; GSC "demander une indexation" sans garantie ; pic de trafic social pour déclencher un re-crawl (technique "SEO Surge", voir `techniques-risquees.md`).

Les créateurs qui citent ces outils les vendent souvent ; présenter des alternatives et laisser l'utilisateur choisir.

## Rythme

Ne pas automatiser plus vite que ce que le site peut absorber (voir `contenu-ia.md`). Automatiser la veille, le reporting, les audits et les brouillons ; garder l'humain sur la validation des faits, des paiements et des envois.
