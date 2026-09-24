"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavItem } from "@/types/content";
import { cn } from "@/lib/utils";
import { getMethodMegaMenuColumns, type MegaMenuColumn } from "@/lib/mega-menu-content";
import { METHOD_CHAPTERS } from "@/lib/methode-content";

interface NavMenuProps {
  items: NavItem[];
  /** "dark" = header-lower (fond sombre, texte blanc). "light" = sticky-header (fond blanc, texte sombre). */
  theme?: "dark" | "light";
}

/**
 * Panneaux ouverts au survol, comme le thème source, avec ouverture aussi au
 * focus clavier (`group-focus-within`) pour ne pas rendre les sous-menus
 * inaccessibles au clavier.
 */
const PANEL_TRANSITION =
  "invisible translate-y-[14px] opacity-0 transition-[opacity,transform,visibility] duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100";

/** Menu desktop : sous-menus affichés au survol (`:hover`), comme le thème source. */
export function NavMenu({ items, theme = "dark" }: NavMenuProps) {
  return (
    <ul className="navigation flex items-center">
      {items.map((item) => (
        <NavMenuItem key={item.label} item={item} theme={theme} />
      ))}
    </ul>
  );
}

function NavMenuItem({ item, theme }: { item: NavItem; theme: "dark" | "light" }) {
  const hasChildren = !!item.children?.length;
  const isMegaMenu = item.label === "Méthode" && hasChildren;
  /**
   * Les panneaux s'ouvrent au `:hover`. Après un clic sur un lien, le curseur
   * reste sur l'item : le panneau resterait donc ouvert par-dessus la nouvelle
   * page. On le retire jusqu'à ce que le pointeur quitte l'item.
   */
  const [dismissed, setDismissed] = useState(false);

  const closeAfterClick = () => {
    setDismissed(true);
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  };

  return (
    <li
      className={cn("group relative mr-[55px] py-[25px] last:mr-0", hasChildren && "dropdown")}
      onMouseLeave={() => setDismissed(false)}
    >
      <Link
        href={item.href}
        onClick={closeAfterClick}
        className={cn(
          "relative flex items-center gap-[6px] text-base font-bold transition-colors duration-300",
          theme === "dark" ? "text-white hover:text-white" : "text-theme-1 hover:text-theme-2"
        )}
      >
        {item.label}
        {hasChildren ? (
          <i
            className="fa fa-chevron-down text-[10px] transition-transform duration-300 group-hover:rotate-180"
            aria-hidden
          />
        ) : null}
      </Link>

      {dismissed ? null : isMegaMenu ? (
        <MethodMegaPanel onNavigate={closeAfterClick} />
      ) : hasChildren ? (
        <ul
          className={cn(
            "absolute left-0 top-full z-50 w-[250px] overflow-hidden rounded-[12px] border border-[#ececec] bg-white py-[8px] shadow-[0_24px_60px_-18px_rgba(0,0,0,0.28)]",
            PANEL_TRANSITION
          )}
        >
          {item.children!.map((child) => (
            <li key={child.label} className="group/sub relative">
              <Link
                href={child.href}
                onClick={closeAfterClick}
                className="flex items-center justify-between gap-3 px-[20px] py-[10px] text-sm font-semibold text-theme-1 transition-colors duration-200 hover:bg-[#faf8f4] hover:text-theme-2"
              >
                {child.label}
                {child.children?.length ? (
                  <i className="fa fa-angle-right text-[12px] opacity-40" aria-hidden />
                ) : null}
              </Link>
              {child.children?.length ? (
                <ul className="invisible absolute left-full top-0 w-[230px] translate-x-[12px] overflow-hidden rounded-[12px] border border-[#ececec] bg-white py-[8px] opacity-0 shadow-[0_24px_60px_-18px_rgba(0,0,0,0.28)] transition-all duration-300 group-focus-within/sub:visible group-focus-within/sub:translate-x-0 group-focus-within/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100">
                  {child.children.map((grandchild) => (
                    <li key={grandchild.label}>
                      <Link
                        href={grandchild.href}
                        onClick={closeAfterClick}
                        className="block px-[20px] py-[10px] text-sm font-semibold text-theme-1 transition-colors duration-200 hover:bg-[#faf8f4] hover:text-theme-2"
                      >
                        {grandchild.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

/**
 * Méga menu de "Méthode" : panneau compact ancré sous l'item, contenant les
 * 17 chapitres du cours groupés en blocs thématiques. Volontairement dense
 * (trois colonnes, groupées par rangées de trois blocs) pour ne pas
 * recouvrir la page, avec un liseré de marque, une barre d'en-tête, des
 * séparateurs entre colonnes/rangées pour guider la lecture, des numéros en
 * badge (langage déjà utilisé sur /methode), et un pied de maillage interne
 * qui distingue le CTA principal des liens secondaires.
 */
function MethodMegaPanel({ onNavigate }: { onNavigate: () => void }) {
  const columns = getMethodMegaMenuColumns();
  // Regroupe les colonnes par rangée de 3 (== grid-cols-3) pour pouvoir
  // insérer un séparateur horizontal net entre les rangées.
  const rows: MegaMenuColumn[][] = [];
  for (let i = 0; i < columns.length; i += 3) rows.push(columns.slice(i, i + 3));

  const footerLinks = [
    { label: "Nos services", href: "/services", icon: "fa-briefcase" },
    { label: "Notre approche", href: "/about", icon: "fa-compass" },
    { label: "Questions fréquentes", href: "/faq", icon: "fa-question-circle" },
  ];

  return (
    <div
      className={cn(
        // Ancré à droite de l'item et borné au viewport : "Méthode" se trouve
        // à droite du centre, un panneau centré déborderait sur la gauche.
        "absolute right-0 top-full z-50 w-[min(760px,calc(100vw-32px))] overflow-hidden rounded-[14px] border border-[#e9e6e0] bg-white shadow-[0_28px_70px_-26px_rgba(0,0,0,0.4)]",
        PANEL_TRANSITION
      )}
    >
      <div className="h-[3px] w-full bg-theme-2" aria-hidden />

      {/* En-tête : rappel du parcours + accès à la vue d'ensemble */}
      <div className="flex items-center justify-between gap-4 border-b border-[#ececec] bg-[#faf8f4] px-5 py-3">
        <span className="flex items-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.16em] text-theme-2">
          <i className="fa fa-graduation-cap text-[13px]" aria-hidden />
          La méthode · {METHOD_CHAPTERS.length} chapitres
        </span>
        <Link
          href="/methode"
          onClick={onNavigate}
          className="group/cta flex items-center gap-[6px] text-[12.5px] font-bold text-theme-1 transition-colors duration-200 hover:text-theme-2"
        >
          Vue d&apos;ensemble
          <i
            className="fa fa-arrow-right text-[10px] transition-transform duration-200 group-hover/cta:translate-x-[3px]"
            aria-hidden
          />
        </Link>
      </div>

      <div className="px-5 py-5">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={cn(
              "grid grid-cols-3 gap-x-5",
              rowIndex > 0 && "mt-5 border-t border-[#ececec] pt-5"
            )}
          >
            {row.map((column, colIndex) => (
              <div key={column.title} className={cn(colIndex > 0 && "border-l border-[#ececec] pl-3")}>
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#a9a39a]">
                  {column.title}
                </span>
                <ul className="flex flex-col">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onNavigate}
                        title={link.summary}
                        className="group/link flex items-start gap-2 rounded-[6px] px-2 py-[6px] transition-colors duration-200 hover:bg-[#faf8f4]"
                      >
                        <span className="mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-light-bg text-[10px] font-extrabold tabular-nums text-[#a9a39a] transition-colors duration-200 group-hover/link:bg-theme-2-cta group-hover/link:text-white">
                          {String(link.number).padStart(2, "0")}
                        </span>
                        <span className="pt-[2px] text-[12.5px] font-semibold leading-[1.35] text-theme-1 transition-colors duration-200 group-hover/link:text-theme-2">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Pied : maillage secondaire à gauche, CTA principal détaché à droite. */}
      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 border-t border-[#ececec] bg-[#faf8f4] px-5 py-3">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className="flex items-center gap-[7px] text-[12.5px] font-semibold text-body-text transition-colors duration-200 hover:text-theme-2"
            >
              <i className={cn("fa text-[11px] opacity-60", link.icon)} aria-hidden />
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          onClick={onNavigate}
          className="inline-flex items-center gap-2 rounded-full bg-theme-2-cta px-4 py-[7px] text-[12.5px] font-bold text-white transition-colors duration-200 hover:bg-theme-2-cta-dark"
        >
          Demander un diagnostic
          <i className="fa fa-arrow-right text-[10px]" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
