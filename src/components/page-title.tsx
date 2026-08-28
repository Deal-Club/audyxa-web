import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface PageTitleProps {
  title: string;
  breadcrumbs: Crumb[];
}

/**
 * Bannière `.page-title` répétée en tête des 18 pages internes du thème.
 * Le fond `images/background/page-title.jpg` est en 404 sur le site source
 * ET sur le site vendeur (kodesolution.com) — le calque sombre `::before`
 * (80% opacité) reste seul visible, comme sur le site réel.
 */
export function PageTitle({ title, breadcrumbs }: PageTitleProps) {
  return (
    <section className="page-title relative bg-cover bg-center pt-[200px] pb-[110px] min-h-[250px] [@media(min-width:769px)]:pt-[230px]">
      <div className="absolute inset-0 bg-[#131313] opacity-80" />
      <div className="auto-container relative">
        <div className="title-outer">
          <h1 className="title mb-[17px] text-[40px] text-white [@media(min-width:600px)]:text-[64px]">
            {title}
          </h1>
          <ul className="page-breadcrumb mt-[5px] flex flex-wrap items-center">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.label} className="mr-3 flex items-center text-sm text-white">
                {crumb.href ? (
                  <Link href={crumb.href} className="font-medium text-theme-2 transition-colors hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="capitalize">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 ? (
                  <i className="fa fa-chevron-right ml-3 text-xs text-white" aria-hidden />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
