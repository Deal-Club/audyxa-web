# Topologie — Home (index.html)

Source : https://www.h-k.com.hk/demo/k/index.html (thème Amiso, Home Page 01).
HTML brut : `docs/research/amiso/source/index.html`. CSS : `style.css` /
`responsive.css` dans le même dossier. Blocs CSS déjà isolés par section :
`docs/research/amiso/css-blocks-home.txt`.

Le menu source propose 9 variantes de home (boxed/single/RTL/index-2/3) —
seule `index.html` est clonée, sur demande explicite. Le menu "Home" du clone
est donc un lien simple, pas un sous-menu (voir `src/lib/nav-data.ts`).

## Ordre des sections (de haut en bas)

| # | Section (classe source) | Composant cible | Statut |
|---|---|---|---|
| — | `header.main-header` | `src/components/header.tsx` | ✅ fait |
| 1 | `.main-slider` (Revolution Slider) | `src/components/main-slider.tsx` | ✅ fait |
| 2 | `.about-section` | `src/components/about-section.tsx` | à construire |
| 3 | `.services-section` | `src/components/services-section.tsx` | à construire |
| 4 | `.features-section` | `src/components/features-section.tsx` | à construire |
| 5 | `.projects-section-two` | `src/components/projects-showcase.tsx` | à construire |
| 6 | `.why-choose-us` | `src/components/why-choose-us.tsx` | à construire |
| 7 | `.faqs-section` | `src/components/faq-section.tsx` | à construire |
| 8 | `.clients-section` | `src/components/clients-section.tsx` | à construire |
| 9 | `.testimonial-section` | `src/components/testimonial-section.tsx` | à construire |
| 10 | `.news-section` | `src/components/news-section.tsx` | à construire |
| 11 | `.contact-section` | `src/components/contact-section.tsx` | à construire |
| 12 | `.call-to-action` | `src/components/call-to-action.tsx` | à construire |
| — | `footer.main-footer` | `src/components/footer.tsx` | ✅ fait |

Aucune section n'est `sticky`/`fixed` sauf le header (voir BEHAVIORS.md).
Empilement vertical simple, une seule colonne de sections pleine largeur,
chacune avec son propre `.auto-container` (1200px) sauf le hero et
`.projects-section-two` qui sont `p-0` (image de fond pleine largeur).

## Modèle d'interaction par section

- **Hero** : autoplay temporel (10s/slide, aucun clic requis), flèches au clic.
- **About** : statique + reveal au scroll (wow) + badge "experience" en
  rebond continu (`bounce-y`, sans doclencheur — anime en permanence).
- **Services / Features / News** : statique + reveal au scroll.
- **Projects showcase** : carrousel Owl → Embla, autoplay, boucle, pas de
  déclenchement utilisateur requis ; chiffre "86900+" est du texte statique
  (PAS un compteur animé — vérifié dans script.js, seul `.count-text[data-stop]`
  anime, absent ici).
- **Why choose us** : reveal au scroll + lien vidéo Fancybox (lightbox
  YouTube) déclenché au clic.
- **FAQ** : accordéon au clic (1 item ouvert par défaut) + 2 jauges
  circulaires animées au scroll (IntersectionObserver, pas au clic).
- **Clients / Testimonial** : carrousel Owl → Embla, autoplay.
- **Contact** : formulaire statique (pas de backend réel — hors périmètre).
- **Call to action** : statique + reveal au scroll.

## Assets manquants sur le site source (404 confirmé)

Toutes les images `images/icons/*` (patterns, shapes, dots, preloader) et
`images/main-slider/bg-pattern*` sont en 404 sur le serveur source lui-même.
Elles ne sont **pas téléchargées ni recréées** — les décors qu'elles
produisaient (patterns de fond `.bg-pattern-N`, `::before` de shape sur
`.about-section`, `.image-column:before`) sont donc absents, exactement
comme sur le site en ligne. Ne pas les inventer.
