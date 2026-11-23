# Maillage interne, architecture, autorité thématique

Sommaire : principes, méthode PV, règles d'ancres, architecture en cocon, autorité thématique, pages service x lieu, pièges.

## Principe [A] V1, PV, NX, E1

Un lien interne fait circuler l'autorité (le "jus de lien") entre l'accueil, les pages qui vendent (money pages) et les articles. Un backlink reçu par une page se redistribue aux pages qui lui sont reliées. Beaucoup de sites perdent de l'autorité parce que le menu ou le pied de page contient des centaines de liens qui diluent chaque destination (NX cite un méga-menu de 1 200 liens) [B]. L'affirmation "un lien contextuel pèse 100 fois plus qu'un lien de pied de page" est une exagération non vérifiée [C] : retenir seulement que le lien dans le texte est plus pertinent.

## Méthode de PV pour relier une nouvelle page [B]

1. Chercher dans Google `site:mondomaine.fr [sujet de la page cible]` pour lister les pages déjà indexées sur un sujet proche.
2. Ouvrir les 5 pages les plus pertinentes et y insérer un lien contextuel vers la nouvelle page.
3. Objectif : au moins 3 à 5 liens entrants internes depuis des pages thématiquement proches ("related pages"). Une page business avec moins de 2 liens entrants depuis du contenu est une carence à corriger en audit.
4. Les liens se placent dans le texte, pas seulement dans le menu ou les barres latérales.
5. Les pages les plus stratégiques sont aussi liées depuis le menu principal ou le pied de page, pour recevoir un lien depuis chaque URL du site.

## Ancres [A]

- Interne : ancre contextuelle et explicite sur la page cible ("agence SEO Rouen"), avec des variantes (exacte, partielle) pour rester naturel. Les ancres exactes sont normales en interne ; elles sont risquées en externe (voir `backlinks-annuaires.md`).
- Typologie : marque, URL brute, générique ("cliquez ici"), correspondance partielle, correspondance exacte.

## Architecture en cocon et clusters [A] V1, PV, NX, E1

- Une page mère (pilier) sur un sujet global ; des pages filles sur des questions précises, qui renvoient toutes vers la page mère.
- Relier les pages d'un même cluster entre elles ; ne pas relier des clusters différents sans raison (le contenu "montres" ne pointe pas vers le contenu "bracelets") [B] E1.
- Une seule page cible par cluster pour éviter la cannibalisation.

## Autorité thématique (topical authority) [B]

Prouver qu'on couvre un sujet sous tous ses angles. Importance forte en santé, bien-être et finance (YMYL) ; E1 a constaté qu'elle compte encore en 2026 pour ces niches. Méthode E1 :

1. Lister les concurrents, repérer leurs pages de soutien qui ont du trafic (Ahrefs ou équivalent).
2. Pour chaque sujet, produire une version meilleure, pas une copie : la source suggère de "copier et recréer" ; la bonne pratique est de s'en inspirer et d'ajouter des données propres, sinon le contenu est dérivé [ext].
3. Chercher les mots-clés de soutien que les concurrents n'ont pas couverts.
4. Faire un plan thématique avec un modèle de langage, puis le compléter avec la recherche humaine (les prompts de "topical map" seuls laissent des trous).
5. Chaque page doit être "rankable" : meilleure que ce qui est déjà classé (images, tableaux, prix, longueur utile) ; une page de 500 mots face à des pages de 3 000 mots ne marche pas.
6. Liens externes vers des sources accréditées (études, institutions) dans les sujets sensibles.

## Pages service x lieu (SEO local à grande échelle) [B] PV, E1

Créer une "page parfaite" manuelle servant de modèle, puis la dupliquer sur d'autres villes ou quartiers en adaptant vraiment le texte (points de repère, cas locaux, prix, délais), jamais en changeant seulement le nom de la ville. Chaque page : H1 spécifique, contenu local, carte intégrée, schema LocalBusiness. Ordre : sa propre ville d'abord, puis les grandes villes, puis les petites à faible concurrence (PV). Voir `seo-local.md` et le risque de contenu en masse dans `contenu-ia.md`.

## Collections e-commerce

Sous-collections qui renvoient toutes vers la collection principale, et la collection principale vers certaines sous-collections : voir `ecommerce.md`.

## Pièges

Page orpheline ; menu surchargé ; deux pages sur le même cluster ; ancres toutes identiques ; liens uniquement en pied de page ; liens qui sautent d'un cluster à l'autre ; pages dupliquées avec seulement la ville changée.
