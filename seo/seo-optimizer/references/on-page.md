# On-page : règles de page, contenu, schema, E-E-A-T

Sommaire : balises, placement, contenu et structure, E-E-A-T, schema, images, conversion, erreurs.

## Balises

- **Title** : moins de 60 caractères, mot-clé principal, un hook ("Guide complet", "Top 10"), l'année pour les requêtes "meilleur" (PV). Exemple : "Dallas Plumber Services - 24/7 Availability". Pas de numéro de téléphone dedans. [A]
- **Meta description** : attractive, orientée clic (disponibilité, ville, urgence). Google met en gras les termes recherchés. Son poids direct sur le classement est faible (PV la juge secondaire), son poids sur le CTR est réel. [A]
- **H1** : un seul, avec le mot-clé principal. **H2 et H3** : sections logiques, idéalement formulées comme les questions des prospects ("Combien coûte un consultant SEO ?"). [A]
- **URL** : mot-clé principal dans le slug. [A]
- **Alt text** : descriptif de l'image ; y inclure le mot-clé quand c'est naturel. Contradiction : V2 demande le mot-clé sur 100 % des images, V1 demande un texte descriptif. Arbitrage : descriptif d'abord, mot-clé seulement si naturel [ext]. Voir `contradictions.md`.

## Placement du mot-clé [A] V1, PV

Mot-clé principal et variantes dans : URL, H1, premier paragraphe, corps du texte, FAQ. Alterner les expressions pour éviter le bourrage.

## Contenu et structure

- **Déconstruire la SERP** : taper le mot-clé, ouvrir le top 10, noter format (article, liste, comparatif), Hn, images, vidéos, liens internes, longueur. Produire une page plus complète et mieux structurée. Aucune longueur minimale universelle ; Google juge la satisfaction de l'intention [A] V1, E1.
- **Réponse en tête** : réponse directe de moins de 50 mots à 4 phrases au début de la page, puis un résumé "En résumé" ou TL;DR. PV le formule "Selon [Nom]..." pour favoriser les extraits et la reprise par les IA. Environ 44 % des citations IA viendraient du premier tiers de la page (chiffre à vérifier [C]). [A] NX, GL, E1, PV
- **Lisibilité machine** : paragraphes de 2 à 4 lignes, phrases de moins de 20 mots, listes à puces, tableaux comparatifs, une idée par section pour faciliter le "chunking". [B] E1, NX ; Google estime ce reformatage inutile [C], mais il sert aussi les lecteurs pressés.
- **Table des matières avec liens d'ancre** (jump links) pour aider les extraits de liste [B] E1.
- **FAQ** : reprendre les "People Also Ask", répondre en 40 à 60 mots, sous la page stratégique [B] NX, E1.
- **Convertir un sujet informatif** : guide en 4 étapes puis une étape 5 qui propose l'offre (consultation, PDF payant, coupon) [B] V1.
- **Pages de service** : répondre à toutes les questions de la recherche : résultat attendu, délai, prix, pourquoi vous, pourquoi pas une agence ou un freelance [B] PV.
- **Vidéo intégrée** avec transcription ou sous-titres si la SERP en contient [B] V1, E1.
- **Quiz interactif** (Tally ou équivalent) en haut de page : fait interagir et qualifie le prospect ; l'effet sur le classement via le temps de session est une hypothèse [B] PV, NX.

## E-E-A-T et signaux d'originalité [A] PV, NX, E1

- Encart auteur : nom réel, photo, bio, lien LinkedIn, schema Person ; lien vers les profils sociaux de l'entité.
- Preuves d'expérience : captures d'écran originales, photos réelles de chantiers ou de tests, anecdotes, "mon avis" assumé.
- Données propriétaires et tests personnels : par exemple faire analyser 8 produits par un laboratoire tiers.
- Statistiques avec la formule **chiffre exact + date + source en texte brut** [B] E1.
- Liens sortants vers des sources d'autorité (sites officiels, études évaluées par des pairs), indispensables en santé et finance (YMYL) [A] V2, PV, E1.
- Date de publication et date de dernière mise à jour visibles ; rafraîchissement trimestriel des pages importantes [A] NX, E1.
- Témoignages clients sur les pages commerciales (gain de conversion annoncé : 34 %, chiffre non vérifié [C]).
- Pages auteur détaillées pour les sujets sensibles [B] NX.

## Données structurées (JSON-LD)

Prioritaires : Article ou BlogPosting, Organization (page d'accueil, avec sameAs), Person (auteur), Product (e-commerce), LocalBusiness ou Service (local), BreadcrumbList, ItemList ou ListItem (classements), FAQPage, HowTo, VideoObject. [A] V1, NX, E1, PV, GL

Attention [C] [ext] : Google a fortement restreint les résultats enrichis FAQ et HowTo (2023). Garder ces balises pour la structure et la compréhension par les IA, mais ne pas promettre d'extraits enrichis. Le chiffre "60 % des réponses IA viennent de pages avec schema FAQ" (NX, GL) n'est pas vérifié.

## Images

Fichiers nommés de façon descriptive, alt renseigné, bonnes dimensions, format léger ; sur Next.js, `next/image`. Captures originales plutôt que banque d'images pour l'E-E-A-T.

## Conversion

CTA visible dès le haut de page ("above the fold"), puis répété. Le trafic n'a de valeur que s'il convertit [B] E1, PV.

## Erreurs à éviter

Title de plus de 60 caractères ; plusieurs H1 ; bourrage de mots-clés ; images sans alt ; contenu isolé sans maillage ; texte publié sans analyse de l'intention ; page-brochure sans détails ; réponse enfouie en bas de page ; chiffres non vérifiés ; "AI slop" (voir `contenu-ia.md`).

## Apports des notebooks CC et SR

**CC [B]** : checklist de plus de 80 signaux on-page appliquée à chaque page par l'agent ; exemples de règles : 3 à 5 liens internes et 2 à 3 liens externes, mot-clé principal dans les 100 premiers mots, un seul H1, 4 à 8 questions (FAQ) par article, meta title et description générés. Le contenu doit rester agréable à lire : un article optimisé mais ennuyeux fait rebondir et ne monte pas.

**Voix et personnalité [B]** : fournir à l'agent des fichiers de références (voix, humour, opinions, statistiques, anecdotes de chantiers) tirés de vos vrais messages, publications ou transcriptions, pour éviter le ton générique. L'humour est un choix du narrateur, pas une règle ; à adapter au secteur et à la marque.

**Méthode "voler au moteur" [B]** : analyser les trois premiers résultats non-forums, relever longueur moyenne, nombre de H2 et d'images, sujets couverts, puis construire sa propre structure sur cette moyenne. Reste une base : ajouter ce qu'ils n'ont pas (données propres, expérience).

**SR [B/C]** : Title avec mot-clé principal, ville et élément de réassurance (format "Mot-clé - Ville | Réassurance"), une longueur de "14 à 40 caractères" annoncée [C : trop court par rapport au repère de moins de 60 caractères de `audit-technique.md`, ne pas l'appliquer tel quel] ; titre sous forme de question avec meilleur CTR annoncé [C] ; la meta description n'influence pas le classement direct, ne pas recopier le title, Google peut la réécrire ; 500 mots au moins pour une page de niche ; images professionnelles, lumineuses, liées au métier ; H1 = cœur de métier, H2 = catégories de services, H3 = sous-services ; maillage en toile : accueil vers catégories (ancre = mot-clé), catégories vers services, services vers catégorie mère ; liens depuis les pages qui ont le plus de trafic vers les pages plus faibles.
