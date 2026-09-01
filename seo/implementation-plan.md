# Plan d'implémentation — Audyxa SEO/AEO/GEO

Référence : `seo/strategy.md` (stratégie et décompte), `seo/page-map.csv` (306 URLs planifiées).

Règle non négociable héritée du guide fourni : **1 template → lot pilote de 5-10 URLs → QA → seulement
ensuite le reste du lot**. Aucune génération en masse sans validation préalable.

---

## Lot 0 — Fondations techniques (bloquant, avant toute page de contenu)

Aucune dépendance aux données géo/contenu. À faire en premier.

1. `src/app/sitemap.ts` — génère dynamiquement le sitemap depuis la structure de routes (statique pour
   les pages fixes, dynamique une fois les routes géo/services créées).
2. `src/app/robots.ts` — autorise explicitement `Googlebot`, `Bingbot`, `GPTBot`, `PerplexityBot`,
   `CCBot`, `Google-Extended` ; bloque les routes techniques si besoin.
3. `canonical` absolue dans les `metadata` de chaque page existante (`/`, `/about`, `/services`,
   `/contact`).
4. Schema `Organization` dans `layout.tsx` (nom, logo, `sameAs` — réseaux réels à confirmer).
5. Composant `BreadcrumbList` JSON-LD réutilisable, branché sur le fil d'Ariane déjà affiché par
   `PageTitle`.
6. Vérifier Search Console / Bing Webmaster Tools connectés au domaine (action hors code, côté
   utilisateur).

**Sortie attendue** : build qui passe, `tsc --noEmit` propre, sitemap/robots accessibles en local.

---

## Lot 1 — Page méthodologie/auteur (pas de dépendance, contenu déjà disponible)

1. `/methode` — hub. Présente la méthode Audyxa en s'appuyant explicitement sur le cadre du cours
   (5 questions avant tout projet, grille de maturité 10 dimensions, formules ROI/TCO/payback). Schema
   `Person` (Paul Maxime Dossou) + `Organization`.
2. 17 pages piliers `/methode/[chapitre]` — un chapitre du cours = une page, reformulée pour le web
   (pas un copier-coller du PDF), avec réponse directe en tête, exemples du cours, lien retour vers
   `/methode` et vers les pages service concernées.

**QA avant publication du lot complet** : créer et valider `/methode` + 2 chapitres pilotes, vérifier
maillage, lisibilité, absence de contenu dupliqué avec le PDF source (reformulation, pas copie).

---

## Lot 2 — 6 pages service dédiées (cœur de l'offre, priorité absolue)

1. Créer le template `/services/[slug]/page.tsx` (route dynamique ou 6 fichiers statiques selon
   préférence technique — à trancher à l'implémentation).
2. Contenu par le Blueprint A du guide : réponse directe, problèmes traités, méthode (lien vers
   `/methode`), preuves disponibles, FAQ propre avec schema `FAQPage`, schema `Service`, CTA.
3. Rediriger/fusionner `/services/details` vers les nouvelles pages dédiées (éviter la cannibalisation
   actuelle — décision à documenter dans `page-map.csv`, colonne statut).
4. Mettre à jour `ServicesListSection` (accueil + `/services`) pour lier vers les nouvelles URLs
   dédiées au lieu de `/services/details`.

**QA** : 1 page pilote complète, validée (contenu, maillage, schema, responsive), avant de dupliquer
sur les 5 autres.

---

## Lot 3 — Pages de décision (10 pages)

Blueprint G. Un template partagé : conclusion courte, méthodologie de comparaison, tableau factuel,
analyse option par option, limites, FAQ de décision. Lien systématique vers les pages service et
`/methode` concernées.

**Point de vigilance** : les pages type "Meilleur consultant transformation digitale 2026" doivent
suivre une méthode de classement transparente et publiée — jamais un classement où Audyxa se place
premier sans critère explicite (règle du guide §22).

---

## Lot 4 — Pages secteurs (15 pages)

Blueprint A adapté. Un template : le secteur, ses contraintes spécifiques (génériques mais réelles :
réglementation, cycle de vente, contraintes data), comment les 6 services s'y appliquent, FAQ.
Maillage systématique vers les 6 pages service.

---

## Lot 5 — Pages géographiques (256 pages, le plus gros lot — séquencé en 3 sous-lots)

### 5a — 16 hubs pays
Template : contexte marché (zone desservie à distance, pas d'implantation fictive), renvoi vers la
ville phare et les 6 services, FAQ générique adaptée au marché francophone. Schema `Service` avec
`areaServed`, pas `LocalBusiness`.

**Pilote** : 2 pays (1 Afrique de l'Ouest, 1 Europe) avant de dupliquer sur les 14 autres.

### 5b — 96 pages ville phare × service
Le point le plus sensible du plan : 96 pages qui combinent 2 dimensions (service + ville). Chaque page
doit avoir une raison réelle d'exister au-delà du remplacement du nom de ville — cf. règle du guide
§8.1. Contenu minimal différenciant par page : reformulation contextualisée du service (pas le même
texte que la page service générique), zone couverte précise, FAQ locale distincte.

**Pilote obligatoire** : 3 combinaisons (ex. Audit à Cotonou, Automatisation à Abidjan, IA à Genève)
avant de lancer les 93 autres. Si le template pilote produit du contenu perçu comme faible ou trop
similaire à la page service générique, revoir la profondeur avant de continuer.

### 5c — 144 hubs villes secondaires
Contenu plus léger (pas de déclinaison par service), mais réel : zone desservie, lien vers la ville
phare et le hub pays.

**Séquencement recommandé** : traiter pays par pays (hub pays → ville phare×6 services → 9 villes
secondaires) plutôt que par dimension, pour garder chaque lot cohérent et testable.

---

## Lot 6 — Guides + glossaire (170 pages, sujets à définir)

**Préalable obligatoire, hors code** : recherche de mots-clés réelle (Search Console une fois
accessible, ou audit manuel des SERP/prompts IA comme décrit dans `seo/strategy.md` §6) pour définir
les 120 titres de guides et 50 termes de glossaire. Ne pas générer de titres à partir de rien — le
guide interdit explicitement de fabriquer des sujets sans base réelle.

Une fois les sujets définis : ajouter les lignes correspondantes à `page-map.csv`, puis appliquer la
même logique lot pilote (5-10) → QA → scale.

---

## Lot 7 — Page chatbot WhatsApp (1 page, en dernier)

Confirmé non prioritaire par l'utilisateur. Blueprint A standard, une seule page.

---

## Ordre d'exécution résumé

```
Lot 0 (technique)
   ↓
Lot 1 (méthode) ──┐
Lot 2 (services)  ├── peuvent être menés en parallèle, aucune dépendance croisée
                  ↓
Lot 3 (décision) — dépend de Lot 2 (liens vers pages service)
Lot 4 (secteurs) — dépend de Lot 2
   ↓
Lot 5 (géo, 256 pages) — dépend de Lot 2 (les pages ville×service pointent vers les pages service)
   ↓
Lot 6 (guides/glossaire) — dépend de Lot 5 pour le maillage vers les pages géo, nécessite recherche
mots-clés préalable
   ↓
Lot 7 (chatbot)
```

## Suivi

Chaque URL publiée doit être :
1. Ajoutée/mise à jour dans `seo/page-map.csv` (statut : à créer → en cours → publié).
2. Maillée dans `seo/internal-links.csv` (à créer au démarrage du Lot 1).
3. Contrôlée via la checklist QA du guide fourni avant publication.
