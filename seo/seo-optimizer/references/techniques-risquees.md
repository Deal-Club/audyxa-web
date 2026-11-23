# Techniques à risque : tri vert, orange, rouge

Ce fichier existe pour reconnaître et expliquer ces pratiques, pas pour les exécuter. Les sources les présentent souvent comme des "cheat codes" ; plusieurs violent les consignes de Google, d'autres sont tolérées mais fragiles. Ne jamais appliquer une technique orange sans accord explicite et informé de l'utilisateur, et jamais sur un site client sans accord écrit. Les techniques rouges ne sont ni recommandées ni exécutées.

Les descriptions restent volontairement au niveau de la reconnaissance : pas de mode opératoire pour les pratiques rouges.

## Rouge : ne pas exécuter ni recommander

| Pratique | Ce que c'est | Pourquoi c'est rouge |
|---|---|---|
| Faux avis ou avis achetés | Avis rédigés par de faux clients ou des comptes payés | Violation des règles de Google et des lois de protection des consommateurs dans de nombreux pays ; sanctions, suspension, atteinte à la réputation [A] V2, E1 |
| Faux profils Google Business | Fiches à des adresses fictives ou de proches pour simuler une présence locale | Violation flagrante ; signalements par les concurrents ; suspension définitive [A] V2, E1 |
| Manipulation du CTR | Clics et visites simulés (logiciels, micro-travailleurs, proxys) pour tromper l'algorithme | Simulation de trafic ; pénalité ou désindexation si détectée ; coûteux [B] V2 |
| Réseaux de blogs privés (PBN) | Réseau de sites créés pour envoyer des liens vers son site | Black hat reconnu ; empreintes détectables ; désindexation du réseau et du site cible [A] V1, V2 |
| Paquets de liens spam | Milliers de liens à bas prix (Fiverr) | Aucun bénéfice, signaux de spam, ratio liens/domaines anormal [A] V1, V2 |
| Mentions inauthentiques | Faux commentaires, commentaires injectés sur Reddit ou YouTube | Contraire aux règles de spam de Google ; bannissement [B] E1 |

## Orange : seulement avec accord explicite, risque expliqué en une phrase

| Pratique | Risque | Alternative plus sûre |
|---|---|---|
| Mot-clé et ville dans le nom de la fiche GBP | Doit refléter le nom réel ; signalement et suspension possibles. Le contournement par un nom commercial légal enregistré (E1) n'est sûr que si c'est vraiment le nom sous lequel l'entreprise opère [C] | Optimiser catégorie, services, avis, pages locales |
| Domaine à correspondance exacte (EMD) | Avantage ancien, peu de risque en soi ; devient problématique avec de fausses adresses | Domaine de marque plus contenu fort |
| Achat de guest posts ou niche edits | Liens achetés à marquer en `rel="sponsored"` selon Google [ext] ; le marché les pratique | Liens d'associations, relations presse, contenus à valeur de lien |
| Domaines expirés avec redirection 301 | Passé de spam transmis au site cible [B] V2 | Vérifier l'historique (Wayback Machine), sinon éviter |
| Parasite SEO (Medium, LinkedIn, Reddit, Claude Artifacts) | Dépendance à la plateforme ; Google a durci sa politique sur l'abus de réputation de site [ext] ; contenu supprimé pour spam [B] V2 | Contenu sur son propre domaine ; présence réelle et utile sur ces plateformes |
| Auto-citation et "force include" payant | Filtres anti-spam des IA qui affichent des avertissements ou ignorent les sources trop promotionnelles [B] V2 ; classement truqué où l'on se met premier [B] PV | Classement honnête, critères visibles, mentions gagnées |
| "SEO Surge" : pic de trafic de 300 à 350 visiteurs en 10 à 15 minutes | Si les visiteurs ne sont pas réels, c'est de la manipulation ; même réels, effet non démontré [C] E1 | Promotion réelle (newsletter, réseaux) sans promesse d'effet |
| Pools d'échange automatique de liens | Schéma de liens détectable [C] | Échanges manuels, ciblés, thématiques |
| Astuces d'annuaires type "powering up citations" (liens externes artificiels vers les pages d'images d'un annuaire) | Réseau de liens artificiel (V2) | Soumission propre à des annuaires réels |
| Contenu IA en masse (centaines ou milliers de pages) | Politique de Google contre le contenu produit en masse sans valeur [ext] | Cadence mesurée, valeur propre par page (voir `contenu-ia.md`) |
| Pages dupliquées par simple changement de ville ou de nom | Quasi-doublons ; pages sans valeur | Contenu réellement local |
| Copier les articles de concurrents "et en faire une autre version" | Contenu dérivé ; risque de contenu faible [ext] | S'inspirer et ajouter des données propres |
| E-mails de prospection de masse par agent autonome | Réputation, délivrabilité, droit de la prospection [ext] | Prospection ciblée, relue par un humain |

## Vert : à appliquer

Optimisation on-page, schema, vitesse, maillage interne, quick wins sur pages existantes, avis réels et réponses utiles, publications GBP réelles, citations NAP cohérentes, dons à de vraies associations pour un soutien réel, relations presse, contenu avec données propres, présence honnête sur Reddit et YouTube, classement ou comparatif honnête.

## Comment en parler à l'utilisateur

En expert : nommer la pratique, le gain annoncé, le risque réel en une phrase, l'alternative sûre. Ne pas dire oui à une pratique rouge parce qu'un client le demande ; proposer la version propre qui apporte la plupart du bénéfice.
