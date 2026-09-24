import { Fragment } from "react";
import Link from "next/link";

/**
 * Rend un texte contenant des liens Markdown légers `[ancre](/chemin)` en
 * vrais <Link> Next.js (maillage interne contextuel dans le corps des
 * chapitres méthode, guides et pages secteurs), sur le même principe que
 * `BoldText` pour le gras : pas de JSX stocké dans les fichiers de contenu
 * (.ts), pas de `dangerouslySetInnerHTML`. Le texte sans lien est rendu tel
 * quel, inchangé.
 */
export function RichText({ text, className }: { text: string; className?: string }) {
  const segments = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <span className={className}>
      {segments.map((segment, i) => {
        const match = segment.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (match) {
          const [, label, href] = match;
          return (
            <Link key={i} href={href} className="font-semibold text-theme-2 hover:underline">
              {label}
            </Link>
          );
        }
        return <Fragment key={i}>{segment}</Fragment>;
      })}
    </span>
  );
}
