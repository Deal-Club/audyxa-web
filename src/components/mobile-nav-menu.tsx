"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavItem } from "@/types/content";
import { cn } from "@/lib/utils";

/** Menu du panneau mobile : sous-menus dépliés au clic (slideToggle sur le thème source). */
export function MobileNavMenu({
  items,
  onNavigate,
}: {
  items: NavItem[];
  /** Referme le panneau mobile dès qu'un lien est activé. */
  onNavigate: () => void;
}) {
  return (
    <ul className="navigation clearfix">
      {items.map((item) => (
        <MobileNavItem key={item.label} item={item} onNavigate={onNavigate} />
      ))}
    </ul>
  );
}

function MobileNavItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;

  return (
    <li className={cn("relative border-b border-white/10", hasChildren && "dropdown")}>
      <div className="flex items-center justify-between">
        <Link href={item.href} onClick={onNavigate} className="block flex-1 px-0 py-[10px] text-[15px] font-semibold text-white">
          {item.label}
        </Link>
        {hasChildren ? (
          <button
            type="button"
            aria-label={open ? "Fermer le sous-menu" : "Ouvrir le sous-menu"}
            onClick={() => setOpen((v) => !v)}
            className="dropdown-btn flex h-8 w-8 items-center justify-center text-white"
          >
            <i className={cn("fa fa-angle-down transition-transform duration-300", open && "rotate-180")} />
          </button>
        ) : null}
      </div>

      {hasChildren ? (
        <ul className={cn("overflow-hidden pl-[15px] transition-all duration-300", open ? "max-h-[600px] pb-[10px]" : "max-h-0")}>
          {item.children!.map((child) => (
            <MobileNavItem key={child.label} item={child} onNavigate={onNavigate} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}
