import Link from "next/link";

interface OrderItem {
  name: string;
  quantity: number;
  total: string;
}

/**
 * Contenu verbatim de la table `.tbl-shopping-cart` de `shop-checkout.html`
 * (source statique, confirmée identique en direct sur le miroir — voir
 * commentaire dans `checkout-form.tsx` pour la note sur l'écart avec
 * `shop-cart.html`). Les totaux ne s'additionnent pas exactement
 * (36+115+68 ≠ 180) : incohérence réelle du thème, non corrigée ici.
 */
const ORDER_ITEMS: OrderItem[] = [
  { name: "Headphone", quantity: 2, total: "$36.00" },
  { name: "Lagage", quantity: 3, total: "$115.00" },
  { name: "Watch", quantity: 1, total: "$68.00" },
];

const SUMMARY_ROWS: Array<{ label: string; value: string }> = [
  { label: "Cart Subtotal", value: "$180.00" },
  { label: "Shipping and Handling", value: "Free Shipping" },
  { label: "Order Total", value: "$250.00" },
];

const cellClass =
  "border border-[#dee2e6] border-l-[#e3e3e3] px-[30px] py-5 align-middle";

/**
 * Vignette produit `images/resource/products/{1,2,3}.jpg` : 404 confirmé à
 * la fois sur le miroir source (`www.h-k.com.hk`) et sur l'hôte vendeur
 * (`kodesolution.com`) — cf. politique d'assets manquants de
 * `docs/research/PAGE_TOPOLOGY.md`. Remplacée par un simple pictogramme
 * "pas d'image", jamais par une photo inventée.
 */
function MissingProductPhoto() {
  return (
    <div
      aria-hidden
      className="flex h-16 w-16 items-center justify-center bg-theme-3 text-body-text"
    >
      <i className="fa fa-image text-lg" />
    </div>
  );
}

/**
 * Table `.tbl-shopping-cart` (section "Your order") : classes Bootstrap
 * `table table-striped table-bordered` sans règle théme dédiée pour ces
 * utilitaires (`table-striped`/`table-bordered` absentes de `style.css` —
 * valeurs par défaut Bootstrap 5 reproduites à la main : bordure `#dee2e6`,
 * alternance `rgba(0,0,0,.05)` sur les lignes impaires). Seules les règles
 * `table.tbl-shopping-cart th/td` (padding 20px 30px, bordure gauche
 * `#e3e3e3`, vertical-align middle) et `> thead > tr > th` (couleur `#444`)
 * sont propres au thème (style.css:9653-9707).
 */
export function CheckoutOrderSummary() {
  return (
    <div>
      <h3 className="mb-4 text-[36px] leading-[1.2em] font-bold text-theme-1">
        Your order
      </h3>
      <div className="overflow-x-auto">
        <table className="mb-4 w-full border border-[#dee2e6] text-left text-body-text [&>tbody>tr:nth-of-type(odd)]:bg-black/5">
          <thead>
            <tr>
              <th className={`${cellClass} font-bold text-[#444]`}>Photo</th>
              <th className={`${cellClass} font-bold text-[#444]`}>
                Product Name
              </th>
              <th className={`${cellClass} font-bold text-[#444]`}>Total</th>
            </tr>
          </thead>
          <tbody>
            {ORDER_ITEMS.map((item) => (
              <tr key={item.name}>
                <td className={cellClass}>
                  <Link href="/shop/product" aria-label={item.name}>
                    <MissingProductPhoto />
                  </Link>
                </td>
                <td className={cellClass}>
                  <Link href="/shop/product" className="text-theme-1">
                    {item.name}
                  </Link>{" "}
                  x {item.quantity}
                </td>
                <td className={cellClass}>
                  <span className="amount">{item.total}</span>
                </td>
              </tr>
            ))}
            {SUMMARY_ROWS.map((row) => (
              <tr key={row.label}>
                <td className={cellClass}>{row.label}</td>
                <td className={cellClass}>{" "}</td>
                <td className={cellClass}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
