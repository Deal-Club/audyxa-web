import Image from "next/image";
import Link from "next/link";
import { SectionHead } from "@/components/methode/method-ui";

const FOUNDERS = [
  {
    name: "Paul Maxime Dossou",
    role: "Fondateur",
    text: "Automatisation, développement full stack et méthode de digitalisation d'entreprise.",
    href: "/auteur/paul-maxime-dossou",
    photo: "/images/fondateurs/paul-maxime-dossou.jpg",
  },
  {
    name: "Richard Salanon",
    role: "Cofondateur",
    text: "Développement logiciel, automatisation, IA, Odoo et formations.",
    href: "/auteur/richard-salanon",
    photo: "/images/fondateurs/richard-salanon.webp",
  },
];

/** Section « Les fondateurs » : lien vers les deux pages /auteur/*. */
export function FoundersSection() {
  return (
    <section className="bg-white py-[80px]">
      <div className="auto-container">
        <SectionHead kicker="L'équipe" title="Les fondateurs d'Audyxa" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {FOUNDERS.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group flex items-center gap-6 rounded-[16px] border border-[#e6e3dc] bg-white p-5 transition-all duration-300 hover:border-theme-2 hover:shadow-[0_14px_44px_rgba(0,0,0,0.07)]"
            >
              <span className="relative h-[110px] w-[110px] shrink-0 overflow-hidden rounded-[14px] bg-[#1c1c1c]">
                <Image
                  src={f.photo}
                  alt={`Portrait de ${f.name}`}
                  fill
                  sizes="110px"
                  className="object-cover"
                />
              </span>
              <span>
                <span className="mb-1 block text-[12px] font-bold uppercase tracking-[0.14em] text-theme-2">
                  {f.role}
                </span>
                <span className="block text-[22px] font-extrabold text-theme-1 group-hover:text-theme-2">
                  {f.name}
                </span>
                <span className="mt-1 block text-[15px] leading-7 text-body-text">{f.text}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
