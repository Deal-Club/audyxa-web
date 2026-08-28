# Comportements globaux — thème Amiso

Extraits de `docs/research/amiso/source/script.js` et vérifiés en direct
(navigateur + console) sur https://www.h-k.com.hk/demo/k/index.html.

## Header

- **Sticky header** : au-delà de `scrollY > 100px`, un second header
  (`.sticky-header`) glisse depuis le haut (`fixed-header slideInDown`) par
  dessus le contenu, fond blanc, `z-index: 99999`. En dessous de 100px, il
  est invisible (`opacity: 0`). Reproduit dans `header.tsx` via un état
  `isSticky` + `window.scrollY`.
- **Dropdown desktop** : sous-menus au survol (`:hover`), pas au clic.
  Reproduit en CSS (`group-hover`).
- **Menu mobile** : bascule sous 1440px de largeur viewport (breakpoint réel
  du thème, `max-width: 1439px` dans `responsive.css`) — PAS un breakpoint
  Tailwind standard, d'où les classes arbitraires `[@media(min-width:1440px)]`
  utilisées dans `header.tsx`. Sous-menus dépliés au clic (accordéon), pas au
  survol.

## Animations au scroll (WOW.js + animate.css)

Seules 4 classes sont réellement utilisées sur la home : `fadeIn`,
`fadeInUp`, `fadeInLeft`, `fadeInRight`. Équivalent reproduit dans
`globals.css` (keyframes) + `src/components/scroll-reveal.tsx`
(IntersectionObserver, déclenchement une seule fois, threshold 0.1).
Certains éléments portent `data-wow-delay` (300ms/600ms) — passer la valeur
en `delay` à `<ScrollReveal>`.

## Carrousels (Owl Carousel → Embla)

Owl Carousel n'est pas fonctionnel sur ce miroir de démo (le fichier
`js/owl.js` chargé n'expose pas `$.fn.owlCarousel` d'après la console), mais
la configuration prévue est présente dans `script.js` et est reproduite à
l'identique via `src/components/carousel.tsx` :

| Carrousel | loop | autoplay | margin | items (breakpoints) |
|---|---|---|---|---|
| `.projects-carousel` | oui | oui (défaut Owl ~5s) | 30px | 0→1, 600→1, 767→2, 1023→3, 1200→4 |
| `.testimonial-carousel` | oui | 5000ms | 30px | 0→1, 991→2 |
| `.clients-carousel` | oui | oui | 10px | 0→1, 480→2, 600→3, 768→4, 1023→5 |

Aucun de ces 3 carrousels n'a `nav: true` dans la config source → pas de
flèches, seulement des points (dots), comme reproduit dans `Carousel`.

## Compteurs et jauges (jQuery Knob / appear.js)

- `.count-box .count-text[data-stop][data-speed]` anime un nombre de 0 à
  `data-stop` sur `data-speed` ms, déclenché à l'apparition dans le
  viewport (`$.appear`). **Seule la section FAQ (jauges circulaires) utilise
  ce mécanisme sur la home** — le "86900+ Work Completed" de
  `.projects-section-two` est un texte statique, pas un compteur (pas de
  `data-stop` dans son HTML).
- Jauges FAQ : `input.dial` (jQuery Knob) — `fgColor #ff3838`,
  `bgColor #f9f9f9`, `width/height 125`, `linecap normal`. Reproduit en SVG
  natif dans `src/components/pie-stat.tsx`.

## Lightbox vidéo (Fancybox)

Le lien `.play-now-two.lightbox-image` de la section "Why choose us" pointe
vers une vidéo YouTube (`https://www.youtube.com/watch?v=Fvae8nxzVz4`) et
s'ouvrait dans une Fancybox. À reproduire avec un composant modal (Radix
Dialog déjà disponible via shadcn) embarquant l'iframe YouTube au clic.

## Assets manquants (voir aussi PAGE_TOPOLOGY.md)

Tout `images/icons/*` et `images/main-slider/bg-pattern*` répond 404 sur le
serveur source. Ne pas les télécharger, ne pas les recréer : les décors
correspondants sont absents du rendu réel du site, donc absents du clone.

## Icônes

Le site source charge Font Awesome **6 Pro** (payant). Le clone utilise
Font Awesome **Free** (`@fortawesome/fontawesome-free`, licence libre) —
glyphes identiques pour toutes les icônes réellement utilisées sur ce thème
(`fa`, `fab`). Les polices `flaticon_agency` (icônes métier du thème) et
`linearicons-free` sont auto-hébergées telles quelles depuis le site source
(`src/styles/vendor/`, binaires dans `public/fonts/`) — usage direct des
classes `flaticon-*` et `lnr-icon-*`, pas de conversion SVG.
