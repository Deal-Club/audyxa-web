/**
 * Affiche l'intitulé d'une source ; en lien vers la page d'origine quand une
 * URL vérifiée existe (E-E-A-T : liens sortants vers des sources d'autorité).
 * Sans URL vérifiée, le texte reste affiché tel quel : on ne devine jamais
 * une adresse.
 */
export function SourceLink({ source, url }: { source: string; url?: string }) {
  if (!url) return <>{source}</>;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-dotted underline-offset-2 hover:text-theme-2"
    >
      {source}
    </a>
  );
}
