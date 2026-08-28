"use client";

import { useState } from "react";
import { ThemeBtn } from "@/components/theme-btn";
import { cn } from "@/lib/utils";

const GALLERY_COUNT = 3;

const SOCIAL_LINKS = [
  { icon: "fab fa-twitter", label: "Twitter" },
  { icon: "fab fa-facebook-f", label: "Facebook" },
  { icon: "fab fa-pinterest", label: "Pinterest" },
  { icon: "fab fa-instagram", label: "Instagram" },
];

/**
 * `.product-details` (shop-product-details.html) : galerie bxslider (image
 * principale + 3 vignettes) et bloc d'informations produit (titre, prix,
 * avis, description, sélecteur de quantité, boutons, partage).
 *
 * `<section class="product-details"><div class="container pb-70">` — comme
 * `.product-details`/`.product-description`/`.related-product` n'ont aucune
 * règle de section top-level dans style.css (seulement des sélecteurs
 * descendants), la règle générique `section > .container { padding: 120px
 * 0 }` (style.css:321-324) s'applique seule : `pb-70` (classe fantôme, même
 * piège que documenté dans BEHAVIORS.md) est ignorée, 120px haut ET bas.
 *
 * Photos `images/resource/products/product-details{,2,3}.jpg` en 404
 * confirmé (serveur source ET miroir de démo, vérifié via curl sur les deux
 * domaines) : panneaux neutres `bg-theme-3`, comme `team-details-section.tsx`.
 *
 * bxslider ne s'initialise pas sur ce miroir de démo — vérifié en direct :
 * `.bx-wrapper` (généré par le plugin) est absent du DOM, les 3
 * `.slider-content` restent empilées verticalement (display:block) au lieu
 * d'être gérées en slides, et `.thumb-box` (flottant sans clearfix) s'
 * effondre à 0px de hauteur. Comme pour Owl Carousel/MixItUp déjà documentés
 * dans BEHAVIORS.md, c'est un échec de chargement du plugin propre à ce
 * mirroir de démo, pas un bug de style.css : le comportement RÉELLEMENT
 * prévu (une image principale + 3 vignettes cliquables qui la remplacent)
 * est reproduit ici en state React pur (`activeIndex`), prêt à recevoir les
 * vraies photos.
 *
 * `.thumb-box li a:before` (indicateur "actif" prévu par le thème) n'a ni
 * `background` ni `color` déclarés dans style.css — vérifié en direct
 * (`getComputedStyle` : background transparent, opacity 1) : cet indicateur
 * est un bug mort du thème, sans aucun effet visuel réel même sur le site
 * source. Plutôt que de reproduire une galerie sans aucun retour visuel, un
 * `ring-2 ring-theme-2` non prévu par la source est ajouté ici sur la
 * vignette active — déviation mineure et volontaire, documentée.
 */
export function ProductDetailsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((q) => (q < 999 ? q + 1 : q));
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : q));

  return (
    <section className="relative overflow-hidden">
      <div className="auto-container pt-[120px] pb-[120px]">
        <div className="flex flex-wrap -mx-[15px]">
          {/* col-lg-6 col-xl-6 : galerie */}
          <div className="w-full px-[15px] [@media(min-width:992px)]:w-1/2">
            <div className="mr-0 [@media(min-width:992px)]:mr-[30px]">
              <figure className="relative mb-[10px] block aspect-square w-full overflow-hidden bg-theme-3">
                <span className="sr-only">Photo {activeIndex + 1} du produit</span>
              </figure>
              <ul className="flex flex-wrap">
                {Array.from({ length: GALLERY_COUNT }, (_, index) => (
                  <li key={index} className="mr-[10px] mb-[15px] h-[100px] w-[100px] last:mr-0">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Voir la photo ${index + 1}`}
                      aria-pressed={activeIndex === index}
                      className={cn(
                        "block h-full w-full bg-theme-3 transition-all duration-500 ease-in-out",
                        activeIndex === index && "ring-2 ring-theme-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* col-lg-6 col-xl-6 product-info */}
          <div className="w-full px-[15px] [@media(min-width:992px)]:w-1/2">
            <div className="relative mt-[-8px]">
              <h3 className="m-0 text-[40px] leading-[44px] font-bold text-theme-1">
                Smart Watch{" "}
                <span className="ml-5 inline-block text-[20px] leading-[26px] font-bold tracking-normal text-theme-1">
                  $76.00
                </span>
              </h3>
            </div>

            <div className="mt-[22px] mb-[31px] flex items-center border-b border-[#e0e4e8] pb-5">
              {Array.from({ length: 5 }, (_, i) => (
                <i key={i} className={cn("fa fa-star text-[16px] text-theme-2", i > 0 && "ml-1")} aria-hidden />
              ))}
              <span className="relative top-px ml-[18px] text-[16px] leading-none text-theme-1">
                2 Customer Reviews
              </span>
            </div>

            <div>
              <p className="text-body-text">
                Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris
                commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel
                pellentesque neque.
              </p>
              <p className="text-body-text">
                <strong className="text-theme-1">REF.</strong> 4231/406 <br />
                Available in store
              </p>
            </div>

            <div className="mt-5 flex items-center">
              <h3 className="mr-5 text-[20px] leading-[30px] font-bold text-[#222]">
                Choose quantity
              </h3>
              <div className="relative h-[60px] w-[98px] rounded-[10px]">
                <input
                  type="number"
                  min={1}
                  max={999}
                  value={quantity}
                  onChange={(event) => {
                    const next = Number(event.target.value);
                    if (Number.isFinite(next) && next >= 1 && next <= 999) setQuantity(next);
                  }}
                  className="h-[60px] w-[98px] rounded-[10px] border border-[#e0e4e8] pl-[30px] text-[18px] font-medium text-theme-1 outline-none"
                />
                <button
                  type="button"
                  onClick={increment}
                  aria-label="Augmenter la quantité"
                  className="absolute top-px right-px flex h-[29px] w-[29px] items-center justify-center rounded-tr-[10px] border-l border-[#e0e4e8] bg-theme-1 text-[8px] text-white transition-all duration-300 ease-in-out hover:bg-theme-2"
                >
                  <i className="fa fa-plus" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={decrement}
                  aria-label="Diminuer la quantité"
                  className="absolute right-px bottom-px flex h-[29px] w-[29px] items-center justify-center rounded-br-[10px] border-l border-[#e0e4e8] bg-theme-1 text-[8px] text-white transition-all duration-300 ease-in-out hover:bg-theme-2"
                >
                  <i className="fa fa-minus" aria-hidden />
                </button>
              </div>
            </div>

            <div className="mt-10 mb-[30px] flex flex-col items-start gap-[10px] [@media(min-width:768px)]:flex-row [@media(min-width:768px)]:items-center">
              <ThemeBtn href="/shop/cart">Add to Cart</ThemeBtn>
              <ThemeBtn href="/shop/product">Add to Wishlist</ThemeBtn>
            </div>

            {/*
              `.social-icon-one li a { color: #fff }` (style.css:1029-1039) est
              une règle réelle du thème, réutilisée telle quelle ici — sur ce
              fond blanc, les icônes sont donc invisibles (blanc sur blanc).
              Vérifié en direct (getComputedStyle sur le site source :
              color rgb(255,255,255), fond de section rgb(255,255,255)) :
              contrairement au bug bxslider/mixItUp ci-dessus (échec de plugin
              propre au miroir de démo), celui-ci vient d'une règle CSS bien
              réelle du thème — reproduit à l'identique, sans invention d'une
              couleur "corrigée".
            */}
            <div className="flex flex-col items-baseline [@media(min-width:768px)]:flex-row [@media(min-width:768px)]:items-center">
              <h3 className="text-[20px] leading-[20px] font-bold text-[#222]">
                Share with friends
              </h3>
              <ul className="ml-0 flex flex-wrap [@media(min-width:768px)]:ml-[30px]">
                {SOCIAL_LINKS.map((social, index) => (
                  <li key={social.icon} className={cn(index > 0 && "ml-[27px]")}>
                    <a
                      href="#"
                      aria-label={social.label}
                      className="relative block h-10 text-center text-[14px] leading-10 text-white transition-colors duration-300 ease-in-out hover:text-theme-2"
                    >
                      <i className={social.icon} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
