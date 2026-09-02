import { Fragment } from "react";

/**
 * Rend un texte contenant des segments `**gras**` (syntaxe légère façon
 * Markdown) en `<strong>` réels — utilisé pour mettre en valeur les mots-clés
 * et chiffres importants dans le contenu éditorial (ex. pages /histoires),
 * sans dépendre d'un parseur Markdown complet ni de `dangerouslySetInnerHTML`.
 */
export function BoldText({
  text,
  className,
  light = false,
}: {
  text: string;
  className?: string;
  /** true = texte affiché sur fond sombre (bascule le <strong> en blanc plutôt qu'en text-theme-1) */
  light?: boolean;
}) {
  const segments = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span className={className}>
      {segments.map((segment, i) => {
        if (segment.startsWith("**") && segment.endsWith("**")) {
          return (
            <strong key={i} className={light ? "font-extrabold text-white" : "font-extrabold text-theme-1"}>
              {segment.slice(2, -2)}
            </strong>
          );
        }
        return <Fragment key={i}>{segment}</Fragment>;
      })}
    </span>
  );
}
