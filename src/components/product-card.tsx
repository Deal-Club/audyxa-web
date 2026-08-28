import Image from "next/image";
import Link from "next/link";

export interface Product {
  /** Identifiant stable pour la clé React (nom de fichier source, ex. "1"). */
  id: string;
  /** Chemin public de l'image, ou `null` si l'image source est en 404
   *  (voir politique des assets manquants — panneau `bg-theme-3` à la place). */
  image: string | null;
  title: string;
  /** Prix formaté verbatim depuis la source (ex. "$32.00") — jamais recalculé. */
  price: string;
  /** Page de destination des liens titre/image/like (fiche produit générique). */
  href: string;
}

const RATING_STARS = 5;

/**
 * `.product-block` du thème Amiso (`shop-products.html`). Carte produit
 * générique et autonome : image (ou panneau neutre si l'image source est en
 * 404), titre, prix, notation (toujours 5 étoiles pleines dans la source —
 * aucune donnée de notation réelle par produit dans le thème, purement
 * décoratif), et deux actions visuelles (favori / ajouter au panier) qui
 * apparaissent au survol de la carte, exactement comme `.icon-box` en
 * source (opacity/visibility 0 → 1, décalage vertical, delay 300ms).
 *
 * Volontairement sans état interne (pas de "use client") : composant de
 * présentation pur, réutilisable tel quel par toute grille/filtre appelant
 * (ex. `/shop/sidebar`), qui n'a qu'à lui fournir sa propre liste de
 * `Product`.
 */
export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-block relative mb-[30px]">
      <div className="inner-box group relative overflow-hidden rounded-[10px] border-2 border-[#e4e1d5] bg-white text-center transition-all duration-300 ease-in-out hover:border-theme-1 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1)]">
        <div className="image relative flex items-center justify-center overflow-hidden">
          <Link href={product.href} className="relative block aspect-square w-full">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-90"
              />
            ) : (
              // Image source en 404 (vérifié via curl) : panneau neutre,
              // pas de photo inventée — cf. politique des assets manquants.
              <span className="block h-full w-full bg-theme-3" />
            )}
          </Link>
          {/* Reflet diagonal de `.image:before` (dégradé blanc balayant la
              carte au survol, 1000ms) : purement décoratif en source. */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 z-1 -translate-x-full bg-gradient-to-r from-white/0 to-white opacity-30 transition-transform duration-1000 ease-in-out group-hover:translate-x-full"
          />
        </div>

        <div className="content relative px-[30px] py-[30px]">
          <h4 className="mb-[5px] text-[22px] font-bold">
            <Link
              href={product.href}
              className="text-theme-2 transition-colors duration-300 ease-in-out hover:text-theme-1"
            >
              {product.title}
            </Link>
          </h4>
          <span className="price block text-base leading-[26px] font-semibold text-body-text">
            {product.price}
          </span>
          <span className="rating flex items-center justify-center gap-[1px] text-sm text-[#ffc737]">
            {Array.from({ length: RATING_STARS }).map((_, i) => (
              <i key={i} className="fa fa-star" aria-hidden />
            ))}
          </span>
        </div>

        <div className="icon-box invisible absolute top-[30px] right-5 flex flex-col opacity-0 transition-all duration-300 ease-in-out group-hover:top-5 group-hover:visible group-hover:opacity-100 group-hover:delay-300">
          <Link
            href={product.href}
            aria-label="Ajouter aux favoris"
            className="ui-btn mb-[10px] flex h-10 w-10 items-center justify-center rounded-full bg-theme-1 text-sm text-white transition-colors duration-300 ease-in-out hover:bg-theme-2"
          >
            <i className="fa fa-heart" aria-hidden />
          </Link>
          <Link
            href="/shop/cart"
            aria-label="Ajouter au panier"
            className="ui-btn flex h-10 w-10 items-center justify-center rounded-full bg-theme-1 text-sm text-white transition-colors duration-300 ease-in-out hover:bg-theme-2"
          >
            <i className="fa fa-shopping-cart" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
