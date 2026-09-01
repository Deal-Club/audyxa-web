import Link from "next/link";

/**
 * Briques de mise en page communes aux pages /methode et /methode/[slug].
 * Toutes sont des composants serveur : l'accordéon FAQ utilise <details>
 * natif, aucun JavaScript client n'est nécessaire.
 */

/** En-tête de section : oeil rouge "//" + kicker + titre + chapô. */
export function SectionHead({
  kicker,
  title,
  intro,
  center = false,
  light = false,
  as: As = "h2",
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  center?: boolean;
  light?: boolean;
  as?: "h2" | "h3";
}) {
  return (
    <div className={`mb-[38px] ${center ? "mx-auto max-w-[760px] text-center" : "max-w-[820px]"}`}>
      <span
        className={`relative inline-block pl-5 text-[15px] font-semibold uppercase tracking-[0.12em] before:absolute before:left-0 before:top-0 before:tracking-[0.2em] before:text-theme-2 before:content-['//'] ${
          light ? "text-[#9a9a9a]" : "text-body-text"
        }`}
      >
        {kicker}
      </span>
      <As
        className={`mt-2 mb-0 text-[26px] font-extrabold leading-[1.18] [@media(min-width:768px)]:text-[34px] ${
          light ? "text-white" : "text-theme-1"
        }`}
      >
        {title}
      </As>
      {intro ? (
        <p
          className={`mt-4 mb-0 text-base leading-8 ${light ? "text-[#b5b5b5]" : "text-body-text"}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

/** Bandeau de métadonnées (chapitre, nombre de sections, temps de lecture). */
export function MetaRail({ items }: { items: { label: string; value: string }[] }) {
  return (
    <ul className="mb-10 flex flex-wrap items-stretch gap-px overflow-hidden rounded-[12px] border border-[#e6e3dc] bg-[#e6e3dc]">
      {items.map((item) => (
        <li key={item.label} className="flex-1 min-w-[150px] bg-white px-6 py-5">
          <span className="block text-[12px] font-bold uppercase tracking-[0.14em] text-theme-2">
            {item.label}
          </span>
          <span className="mt-1 block text-[17px] font-extrabold text-theme-1">{item.value}</span>
        </li>
      ))}
    </ul>
  );
}

/** Trois cartes "points clés", numérotées. */
export function KeyPointCards({
  points,
}: {
  points: { label: string; text: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {points.map((point, i) => (
        <article
          key={point.label}
          className="relative rounded-[14px] border border-[#e6e3dc] bg-white p-7 transition-shadow duration-300 hover:shadow-[0_14px_44px_rgba(0,0,0,0.07)]"
        >
          <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-theme-2 text-[15px] font-extrabold text-white">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mb-2 text-[19px] font-extrabold leading-snug text-theme-1">{point.label}</h3>
          <p className="mb-0 text-[15px] leading-7 text-body-text">{point.text}</p>
        </article>
      ))}
    </div>
  );
}

/** Sommaire ancré, généré à partir des titres de section. */
export function TableOfContents({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return (
    <nav aria-label="Sommaire du chapitre">
      <ol className="grid grid-cols-1 gap-x-8 gap-y-px overflow-hidden rounded-[12px] border border-[#e6e3dc] bg-[#e6e3dc] md:grid-cols-2">
        {items.map((item, i) => (
          <li key={item.id} className="bg-white">
            <a
              href={`#${item.id}`}
              className="group flex items-center gap-4 px-6 py-4 transition-colors duration-200 hover:bg-[#faf8f4]"
            >
              <span className="text-[13px] font-extrabold tabular-nums text-theme-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] font-semibold leading-6 text-theme-1 group-hover:text-theme-2">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Liste "à retenir" : coches rouges sur fond sombre. */
export function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-4 rounded-[12px] p-6 ${
            light ? "bg-[#1b1b1b]" : "border border-[#e6e3dc] bg-white"
          }`}
        >
          <span
            aria-hidden="true"
            className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-theme-2 text-[13px] font-bold text-white"
          >
            ✓
          </span>
          <span className={`text-[15px] leading-7 ${light ? "text-[#c9c9c9]" : "text-body-text"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Liste des pièges : barre rouge à gauche. */
export function PitfallList({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-r-[10px] border-l-[3px] border-theme-2 bg-white py-5 pl-6 pr-6 shadow-[0_2px_18px_rgba(0,0,0,0.04)]"
        >
          <p className="mb-0 text-[15px] leading-7 text-body-text">{item}</p>
        </li>
      ))}
    </ul>
  );
}

/** Accordéon FAQ natif, sans JavaScript. Classe `faq-item` conservée. */
export function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="faq-accordion overflow-hidden rounded-[12px] border border-[#e6e3dc] bg-[#e6e3dc]">
      {items.map((item, i) => (
        <details key={item.question} className="faq-item group bg-white" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 text-[17px] font-extrabold text-theme-1 marker:hidden [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className="mt-1 shrink-0 text-[18px] font-normal leading-none text-theme-2 transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="faq-answer px-6 pb-6">
            <p className="mb-0 text-[15px] leading-7 text-body-text">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

/** Carte chapitre réutilisée sur l'index et en fin de chapitre. */
export function ChapterCard({
  href,
  number,
  title,
  summary,
  pillarLabel,
}: {
  href: string;
  number: number;
  title: string;
  summary: string;
  pillarLabel?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-[14px] border border-[#e6e3dc] bg-white p-7 transition-all duration-300 hover:-translate-y-[6px] hover:border-theme-2 hover:shadow-[0_14px_44px_rgba(0,0,0,0.08)]"
    >
      <span className="mb-3 flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.14em]">
        <span className="text-theme-2">Chapitre {number}</span>
        {pillarLabel ? <span className="text-[#b3aea3]">{pillarLabel}</span> : null}
      </span>
      <h3 className="mb-3 text-[19px] font-extrabold leading-snug text-theme-1 group-hover:text-theme-2">
        {title}
      </h3>
      <p className="mb-0 text-[15px] leading-7 text-body-text">{summary}</p>
      <span className="mt-5 text-[14px] font-bold text-theme-1 group-hover:text-theme-2">
        Lire le chapitre →
      </span>
    </Link>
  );
}
