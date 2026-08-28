"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import Link from "next/link";
import { ThemeBtn } from "@/components/theme-btn";
import { cn } from "@/lib/utils";

interface CartItem {
  id: string;
  name: string;
  size: string;
  price: number;
}

/**
 * Contenu verbatim de `shop-cart.html` (état de démo statique, 3 lignes
 * hardcodées dans le HTML source) : noms, tailles et prix réels du thème,
 * aucune donnée inventée.
 */
const CART_ITEMS: CartItem[] = [
  { id: "winter-black-jacket", name: "Winter Black Jacket", size: "Medium", price: 36 },
  { id: "swan-crop-v-neck-tee", name: "Swan Crop V-Neck Tee", size: "Small", price: 115 },
  { id: "blue-solid-casual-shirt", name: "Blue Solid Casual Shirt", size: "Large", price: 68 },
];

/**
 * `.cart-total` (encadré "Cart Totals") : valeurs statiques telles quelles
 * dans le HTML source ($180 + $70 ≠ $250 arithmétiquement cohérent avec les
 * 3 lignes du panier, qui totalisent $219 à quantité 1 — incohérence déjà
 * présente dans la démo d'origine, non corrigée ici). Non recalculé au fil
 * des changements de quantité : le thème source n'a aucune logique de total
 * réactif (vérifié dans script.js), hors périmètre de ce clone statique.
 */
const CART_SUBTOTAL = "$180.00";
const SHIPPING_HANDLING = "$70.00";
const ORDER_TOTAL = "$250.00";

function formatPrice(value: number): string {
  return `$${value.toFixed(2)}`;
}

const fieldClass =
  "block w-full border border-[#f4f5f8] bg-[#f4f5f8] px-[30px] py-[14px] text-[0.9rem] text-[#686a6f] outline-none placeholder:text-[#686a6f]";

/**
 * Reproduction manuelle de `.theme-btn.btn-style-one` pour les boutons
 * "Update Cart" / "Update Totals" : de simples `<button type="button">` sans
 * handler dans script.js (aucune navigation, contrairement à "Proceed to
 * Checkout" qui utilise `ThemeBtn` en `<Link>`). Même calque de survol que
 * `theme-btn.tsx`.
 */
function InertThemeButton({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <button
      type="button"
      className={cn(
        "group relative z-0 inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-[10px] bg-theme-2 px-[50px] py-[15px] text-base font-extrabold leading-7 text-white transition-all duration-500",
        className
      )}
    >
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 -z-10 w-6 rounded-[10px] bg-theme-2-dark transition-[width] duration-300 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:w-full"
      />
      <span className="btn-title relative z-[2]">{children}</span>
    </button>
  );
}

/**
 * `.product-details__quantity .quantity-box` : input + boutons +/- empilés
 * à droite. Logique d'incrément/décrément reproduite à l'identique de
 * script.js (`.quantity-box .add`/`.sub`) : borne 1 à 999.
 */
function QuantityStepper({
  value,
  onChange,
}: {
  value: number;
  onChange: (next: number) => void;
}) {
  return (
    <div className="quantity-box relative h-[60px] w-[98px] rounded-[10px]">
      <input
        type="number"
        value={value}
        onChange={(event) => {
          const next = Number(event.target.value);
          if (Number.isFinite(next)) onChange(Math.min(999, Math.max(1, next)));
        }}
        aria-label="Quantity"
        className="h-[60px] w-[98px] rounded-[10px] border border-[#e0e4e8] pl-[30px] text-lg font-medium text-theme-1 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button
        type="button"
        onClick={() => onChange(Math.min(999, value + 1))}
        aria-label="Increase quantity"
        className="absolute top-px right-px flex h-[29px] w-[29px] items-center justify-center rounded-tr-[10px] border-l border-[#e0e4e8] bg-theme-1 text-[8px] text-white transition-all duration-300 hover:bg-theme-2"
      >
        <i className="fa fa-plus" aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        aria-label="Decrease quantity"
        className="absolute right-px bottom-px flex h-[29px] w-[29px] items-center justify-center rounded-br-[10px] border-l border-[#e0e4e8] bg-theme-1 text-[8px] text-white transition-all duration-300 hover:bg-theme-2"
      >
        <i className="fa fa-minus" aria-hidden />
      </button>
    </div>
  );
}

const cellClass = "border-l border-[#e3e3e3] px-[30px] py-5 align-middle text-left";

/**
 * Page `/shop/cart` (`shop-cart.html` côté source) : tableau du panier
 * (`.tbl-shopping-cart`), formulaire de coupon, formulaire "Calculate
 * Shipping" et encadré "Cart Totals". Panier de démo statique — pas de
 * persistance ni de backend réel (hors périmètre) :
 * - Bouton "remove" (×) : inerte, aucune ligne n'est réellement supprimée.
 * - Formulaire coupon / "Calculate Shipping" : `onSubmit` se limite à
 *   `preventDefault`.
 * - Stepper de quantité : seul élément réellement interactif, fidèle au
 *   comportement de script.js. Le sous-total de chaque ligne (colonne
 *   "Total") est recalculé en local (prix × quantité) en plus de ce
 *   comportement source, à titre de simple confort visuel — l'encadré
 *   "Cart Totals" séparé, lui, reste statique comme en source.
 *
 * Images produit (`images/resource/products/1.jpg` etc.) en 404 confirmées
 * sur le miroir source : remplacées par un panneau neutre `bg-theme-3`
 * (même politique que les autres pages, cf. PAGE_TOPOLOGY.md).
 *
 * Mobile : `.table-responsive` source n'ajoute qu'un `overflow-x:auto` (pas
 * de bootstrap breakpoint, pas de repli en cartes empilées) — reproduit tel
 * quel via le wrapper `overflow-x-auto`, les largeurs fixes des colonnes
 * (photo 64px, quantity-box 98px) provoquant naturellement le scroll
 * horizontal sur petit viewport, exactement comme en source.
 */
export function CartPageContent() {
  const [quantities, setQuantities] = useState<Record<string, number>>(() =>
    Object.fromEntries(CART_ITEMS.map((item) => [item.id, 1]))
  );

  const handleCouponSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleShippingSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="relative">
      <div className="auto-container py-[120px]">
        <div className="tbl-shopping-cart overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className={cn(cellClass, "text-[#444]")} />
                <th className={cn(cellClass, "text-[#444]")}>Photo</th>
                <th className={cn(cellClass, "text-[#444]")}>Product Name</th>
                <th className={cn(cellClass, "text-[#444]")}>Price</th>
                <th className={cn(cellClass, "text-[#444]")}>Quantity</th>
                <th className={cn(cellClass, "text-[#444]")}>Total</th>
              </tr>
            </thead>
            <tbody>
              {CART_ITEMS.map((item, index) => {
                const quantity = quantities[item.id] ?? 1;
                return (
                  <tr key={item.id} className={index % 2 === 0 ? "bg-black/5" : "bg-white"}>
                    <td className={cellClass}>
                      <button
                        type="button"
                        title="Remove this item"
                        aria-label="Remove this item"
                        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#757575] text-center text-white transition-colors duration-300 hover:bg-theme-2"
                      >
                        ×
                      </button>
                    </td>
                    <td className={cellClass}>
                      <Link
                        href="/shop/product"
                        aria-label={item.name}
                        className="block h-16 w-16 bg-theme-3"
                      />
                    </td>
                    <td className={cellClass}>
                      <Link href="/shop/product" className="text-theme-1 transition-colors hover:text-theme-2">
                        {item.name}
                      </Link>
                      <ul className="variation mt-1 list-none text-[0.9rem] text-body-text">
                        <li>
                          Size: <span>{item.size}</span>
                        </li>
                      </ul>
                    </td>
                    <td className={cellClass}>{formatPrice(item.price)}</td>
                    <td className={cellClass}>
                      <QuantityStepper
                        value={quantity}
                        onChange={(next) =>
                          setQuantities((prev) => ({ ...prev, [item.id]: next }))
                        }
                      />
                    </td>
                    <td className={cellClass}>{formatPrice(item.price * quantity)}</td>
                  </tr>
                );
              })}
              <tr className="bg-white">
                <td colSpan={3} className={cellClass}>
                  <form onSubmit={handleCouponSubmit} className="coupon-form flex flex-wrap items-center gap-4">
                    <input
                      type="text"
                      name="coupon_code"
                      placeholder="Coupon code"
                      className={cn(fieldClass, "w-auto min-w-[200px]")}
                    />
                    <button
                      type="submit"
                      className="apply-button bg-[#f4f5f4] px-[29px] py-[15px] text-[#1e2434] uppercase transition-colors duration-500 hover:bg-theme-2 hover:text-white"
                    >
                      <span className="btn-title">Apply Coupon</span>
                    </button>
                  </form>
                </td>
                <td colSpan={2} className={cellClass}>
                  &nbsp;
                </td>
                <td className={cellClass}>
                  <InertThemeButton>Update Cart</InertThemeButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-[30px] grid grid-cols-1 gap-x-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <h4 className="mb-4 text-2xl leading-[1.2em] font-bold tracking-[-0.04em] text-theme-1">
              Calculate Shipping
            </h4>
            <form onSubmit={handleShippingSubmit}>
              <div className="mb-[10px]">
                <select className={fieldClass}>
                  <option>Select Country</option>
                  <option>Australia</option>
                  <option>UK</option>
                  <option>USA</option>
                </select>
              </div>
              <div className="mb-[10px]">
                <input type="text" placeholder="State/country" className={fieldClass} />
              </div>
              <div className="mb-[10px]">
                <input type="text" placeholder="Postcod/zip" className={fieldClass} />
              </div>
              <div className="mb-[30px]">
                <InertThemeButton>Update Totals</InertThemeButton>
              </div>
            </form>
          </div>

          <div className="hidden md:col-span-2 md:block" />

          <div className="md:col-span-5">
            <h4 className="mb-4 text-2xl leading-[1.2em] font-bold tracking-[-0.04em] text-theme-1">
              Cart Totals
            </h4>
            <table className="cart-total mb-[30px] w-full border-collapse border border-[#e3e3e3]">
              <tbody>
                <tr className="border-b border-[#e3e3e3]">
                  <td className={cellClass}>Cart Subtotal</td>
                  <td className={cellClass}>{CART_SUBTOTAL}</td>
                </tr>
                <tr className="border-b border-[#e3e3e3]">
                  <td className={cellClass}>Shipping and Handling</td>
                  <td className={cellClass}>{SHIPPING_HANDLING}</td>
                </tr>
                <tr>
                  <td className={cellClass}>Order Total</td>
                  <td className={cellClass}>{ORDER_TOTAL}</td>
                </tr>
              </tbody>
            </table>
            <ThemeBtn href="/shop/checkout">Proceed to Checkout</ThemeBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
