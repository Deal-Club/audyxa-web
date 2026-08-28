import Link from "next/link";

interface RelatedProduct {
  name: string;
  price: string;
}

/**
 * Contenu verbatim de `shop-product-details.html` (4 blocs) — "Lagage"
 * (faute d'origine, pas "Luggage") conservé tel quel, comme les autres
 * fautes déjà préservées ailleurs dans le clone (ex. `team-section.tsx`).
 */
const RELATED_PRODUCTS: RelatedProduct[] = [
  { name: "Headphone", price: "$32.00" },
  { name: "Lagage", price: "$32.00" },
  { name: "Watch", price: "$32.00" },
  { name: "SD Card", price: "$32.00" },
];

const PRODUCT_HREF = "/shop/product";

/**
 * `.related-product` (`.mixitup-gallery`) : grille des 4 blocs produit de
 * `shop-product-details.html`. Le HTML source n'a AUCUN bouton de filtre
 * (`.filter-list` enveloppe directement les 4 `.product-block`, pas de
 * `<ul class="filter-nav">` avant) : grille statique, sans MixItUp.
 *
 * Vérifié en direct sur le miroir de démo : la console lève
 * `TypeError: $(...).mixItUp is not a function` (plugin non chargé) — les 4
 * blocs, tous `class="... mix ..."` (`.product-block.mix{display:none}`
 * tant que le plugin ne les révèle pas), restent donc invisibles sur le
 * site réel. Comme pour Owl Carousel déjà documenté dans BEHAVIORS.md,
 * c'est un échec de plugin propre à ce miroir de démo — le comportement
 * RÉELLEMENT prévu (les 4 produits visibles, MixItUp les affichant tous par
 * défaut sous le filtre "all") est reproduit ici en grille simple.
 *
 * Photos `images/resource/products/{1,2,3,8}.jpg` en 404 confirmé (serveur
 * source ET miroir de démo, vérifié via curl) : panneaux neutres
 * `bg-theme-3`, comme `team-details-section.tsx`. Aucune dimension fournie
 * par la source (pas de width/height sur les `<img>`, `.product-block
 * .image img{width:auto}` sans hauteur fixe) : ratio carré retenu comme
 * vignette produit plausible, non garanti par la source.
 */
export function RelatedProductsSection() {
  return (
    <section className="relative">
      <div className="auto-container pt-[120px] pb-[120px]">
        <h3 className="mb-[30px] text-theme-1">Related Products</h3>
        <div className="grid grid-cols-1 gap-[30px] [@media(min-width:768px)]:grid-cols-2 [@media(min-width:992px)]:grid-cols-4">
          {RELATED_PRODUCTS.map((product) => (
            <ProductBlock key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductBlock({ name, price }: RelatedProduct) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-[10px] border-2 border-[#e4e1d5] bg-white text-center transition-all duration-300 ease-in-out group-hover:border-theme-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
        <div className="relative flex items-center justify-center overflow-hidden">
          <Link href={PRODUCT_HREF} className="block aspect-square w-full bg-theme-3" />
        </div>

        <div className="p-[30px]">
          <h4 className="mb-[5px] text-[22px] font-bold">
            <Link href={PRODUCT_HREF} className="text-theme-2 transition-colors duration-300 ease-in-out hover:text-theme-1">
              {name}
            </Link>
          </h4>
          <span className="block text-[16px] leading-[26px] font-semibold text-body-text">{price}</span>
          <span className="flex items-center justify-center text-[14px] text-[#ffc737]">
            {Array.from({ length: 5 }, (_, i) => (
              <i key={i} className={i > 0 ? "fa fa-star ml-1" : "fa fa-star"} aria-hidden />
            ))}
          </span>
        </div>

        <div className="absolute top-[30px] right-5 flex flex-col opacity-0 invisible transition-all duration-300 ease-in-out group-hover:top-5 group-hover:opacity-100 group-hover:visible group-hover:delay-300">
          <Link
            href={PRODUCT_HREF}
            aria-label={`Ajouter ${name} aux favoris`}
            className="mb-[10px] flex h-10 w-10 items-center justify-center rounded-full bg-theme-1 text-[14px] text-white transition-colors duration-300 ease-in-out hover:bg-theme-2"
          >
            <i className="fa fa-heart" aria-hidden />
          </Link>
          <Link
            href="/shop/cart"
            aria-label={`Ajouter ${name} au panier`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-theme-1 text-[14px] text-white transition-colors duration-300 ease-in-out hover:bg-theme-2"
          >
            <i className="fa fa-shopping-cart" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
