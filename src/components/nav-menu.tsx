import Link from "next/link";
import type { NavItem } from "@/types/content";
import { cn } from "@/lib/utils";

interface NavMenuProps {
  items: NavItem[];
  /** "dark" = header-lower (fond sombre, texte blanc). "light" = sticky-header (fond blanc, texte sombre). */
  theme?: "dark" | "light";
}

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

  return (
    <li className={cn("group relative mr-[55px] py-[25px] last:mr-0", hasChildren && "dropdown")}>
      <Link
        href={item.href}
        className={cn(
          "relative flex items-center gap-[6px] text-base font-bold transition-colors duration-300",
          theme === "dark" ? "text-white hover:text-white" : "text-theme-1 hover:text-theme-2"
        )}
      >
        {item.label}
        {hasChildren ? <i className="fa fa-chevron-down text-[10px]" aria-hidden /> : null}
      </Link>

      {hasChildren ? (
        <ul className="invisible absolute left-0 top-full z-50 w-[230px] translate-y-[10px] rounded-b-[10px] bg-white py-[10px] opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          {item.children!.map((child) => (
            <li key={child.label} className="group/sub relative">
              <Link
                href={child.href}
                className="block px-[20px] py-[10px] text-sm font-semibold text-theme-1 transition-colors duration-300 hover:text-theme-2"
              >
                {child.label}
              </Link>
              {child.children?.length ? (
                <ul className="invisible absolute left-full top-0 w-[220px] translate-x-[10px] rounded-[10px] bg-white py-[10px] opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100">
                  {child.children.map((grandchild) => (
                    <li key={grandchild.label}>
                      <Link
                        href={grandchild.href}
                        className="block px-[20px] py-[10px] text-sm font-semibold text-theme-1 transition-colors duration-300 hover:text-theme-2"
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
