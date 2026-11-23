import Link from "next/link";
import { SectionTitle } from "@/components/section-title";

export interface RelatedLinkItem {
  href: string;
  title: string;
  /** Petite étiquette au-dessus du titre ("Guide", "Comparatif"...). */
  label: string;
}

/** Bloc de liens contextuels vers des guides ou comparatifs liés (maillage interne). */
export function RelatedLinks({
  subTitle,
  title,
  items,
}: {
  subTitle: string;
  title: string;
  items: RelatedLinkItem[];
}) {
  if (items.length === 0) return null;
  return (
    <section className="pt-[50px] pb-[50px]">
      <div className="auto-container">
        <SectionTitle subTitle={subTitle} title={title} className="mb-[40px] max-w-[760px]" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-[14px] border border-[#e2e2e2] bg-white p-6 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            >
              <span className="mb-2 block text-[13px] font-bold tracking-[0.14em] text-theme-2 uppercase">
                {item.label}
              </span>
              <span className="font-semibold text-theme-1 group-hover:text-theme-2">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
