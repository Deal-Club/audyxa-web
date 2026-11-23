# Mots-clés, intention de recherche, clusters

Sommaire : mots-clés business, volume faible, vraie difficulté, patterns de pages, clusters et cannibalisation, outils.

## Le mot-clé "business" [A] V1, PV, E1

Requête où l'internaute a "la carte bancaire dans la main" : il cherche un prestataire ou un produit à payer. Exemples cités : "où réparer un iPhone" et "combien coûte la réparation d'un iPhone" (achat) contre "comment réparer un iPhone" (bricoleur) ; "tarif", "prix", "à proximité", "meilleur", "alternative à" ; "consultant SEO + ville" ; "location Ferrari Paris".

Matrice utile : axe vertical intention d'achat, axe horizontal volume. Cibler d'abord les deux cadrans à forte intention, même à faible volume.

## Ne pas écarter les volumes faibles ou nuls [A] V1, PV

Les outils ratent souvent la niche : 10 recherches par mois pour "backlink builder software" valent mieux qu'un million de recherches sans achat. Des requêtes à volume 0 dans les outils génèrent des impressions dans GSC : c'est la preuve qu'elles sont tapées. Le long tail (plus de 3 mots) est souvent ignoré par les gros sites.

## La vraie difficulté : "Blood in the Water" [A] V1, V2

Ne pas se fier au score théorique de difficulté. Regarder la SERP : y a-t-il des pages faibles dans le top 3 à 10 ? Signaux :

- mot-clé absent du H1, du title ou de l'URL ;
- page avec 0 à 3 domaines référents ;
- contenu généré par les utilisateurs (Reddit, LinkedIn, forums) ;
- contenu mince, obsolète ou simple page de catégorie générique ;
- un gros domaine (DR 70) qui se classe par accident avec une page non optimisée.

Si l'un d'eux apparaît, une page dédiée ("purpose-built page") peut passer devant. Un mot-clé où aucun concurrent n'a même le terme dans son title est une opportunité rare (PV : "consultant + CMS spécifique") [B].

## Patterns de pages qui capturent l'intention [B] PV, E1

- Service + ville : "Consultant SEO Nantes".
- Service + spécialité : "Consultant SEO Shopify", "Expert SEO Next.js".
- "Meilleur + offre + lieu/niche + année" : pour les requêtes que les IA relancent dans Google avec "meilleur" et l'année en cours afin d'obtenir des informations fraîches (PV).
- "Concurrent A vs Concurrent B", "Alternative à [gros logiciel]" : pour l'utilisateur qui compare avant d'acheter. Marche seulement si le concurrent est fortement recherché (E1).
- Sous-variantes d'une collection (e-commerce) : voir `ecommerce.md`.

## Clusters et cannibalisation [A] V1, E1, NX

1. Regrouper les mots-clés qui répondent au même besoin dans un cluster.
2. Une page cible par cluster ("une page par cluster") : deux URLs du site ne doivent pas viser la même requête.
3. Placer le mot-clé principal et ses variantes dans URL, H1, premier paragraphe, corps, FAQ.
4. Attribuer les clusters commerciaux aux pages de service, de catégorie ou de produit ; les clusters informatifs aux articles et guides.
5. Relier les pages du cluster entre elles et vers la page principale (voir `maillage-et-architecture.md`).

Les sources ne mentionnent aucun logiciel de clustering sémantique : à compléter (`lacunes-a-combler.md`).

## Mots-clés secondaires

Les extraire de la SERP et des concurrents du top 10 pour couvrir les mêmes requêtes sur une page (PV, via un outil connecté à DataForSEO). Alterner les variantes plutôt que de répéter la même chaîne (exemple : "autoblog", "auto blogging", "AI blogging") [A] V1, NX.

## Outils

Google Keyword Planner (volumes, prévisions), Ahrefs, Semrush, SE Ranking, DataForSEO par API, GSC (requêtes réelles), suggestions de Google, People Also Ask. L'intuition métier compte : un prompt réel de client est plus long et plus précis que ce que les outils indiquent [B] V1.

## Méthode de choix, résumé

1. Lister les services par rentabilité. 2. Trouver les requêtes d'achat. 3. Vérifier la SERP (Blood in the Water). 4. Vérifier GSC (déjà des impressions ?). 5. Choisir une bataille gagnable avec l'autorité actuelle du site ; sinon la reporter [B] PV. Choisir ses batailles détermine tout le reste.

## Apports du notebook CC (méthode Semrush + Claude Code) [B]

- **Filtres de départ** (outil Keyword Magic de Semrush) : difficulté (KD) de 30 ou moins, volume de 100 ou plus, intention adaptée. Ces seuils sont ceux du narrateur pour un site neuf, à ajuster selon l'outil et le pays [C].
- Écarter les requêtes qui désignent le nom d'un autre professionnel ou une personne qui veut devenir plombier : elles ne deviennent pas des clients.
- **Trouver les mots-clés d'argent** : trier par coût par clic (CPC). Les motifs "service + ville" ressortent. Le CPC sert d'indice de valeur, pas de volume de leads.
- Onglet Questions : "combien coûte un plombier" (client potentiel) contre "comment devenir plombier" (concurrent).
- Mots-clés adjacents plus hauts dans l'entonnoir (signes qu'il faut changer son chauffe-eau) pour capter l'audience avant l'achat.
- Analyser les mots-clés des concurrents dans l'outil.
- **Grappe (cluster)** : un mot racine plus des variantes secondaires et tertiaires sur la même page.
- **Zip service x ville** : lister les services d'un côté, les villes ou communes de l'autre, une page par couple, avec prudence : pas des milliers de pages, rarement plusieurs centaines, car le contenu se ressemble et Google peut y voir un signal négatif. Voir `maillage-et-architecture.md` pour la différenciation.
- Source SR : copier les questions "Autres questions posées" (PAA) du mot-clé principal ; règle "1 service = 1 page" ; ne pas mettre toutes les pages dans le menu principal (dilution), préférer des liens contextuels.
