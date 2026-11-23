/**
 * Bloc "En bref" placé en tête des pages hub : réponse directe de quelques
 * phrases, en HTML brut, pour les moteurs de recherche et les moteurs IA
 * (AEO/GEO : réponse dans le premier tiers de la page). Le texte vient
 * toujours de la description réelle de la page, jamais d'un contenu ajouté.
 */
export function QuickAnswer({ text }: { text: string }) {
  return (
    <section className="pt-[40px] pb-[10px]">
      <div className="auto-container">
        <div className="mx-auto max-w-[900px] rounded-[14px] border border-[#e2e2e2] bg-white p-6 [@media(min-width:768px)]:p-8">
          <p className="mb-0 text-[17px] leading-8 text-theme-1">
            <strong className="mr-2 text-theme-2">En bref :</strong>
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
