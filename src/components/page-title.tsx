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
 */
export function PageTitle({ title, breadcrumbs }: PageTitleProps) {
  return (
    <section
      className="page-title relative bg-cover bg-center pt-[120px] pb-[60px] min-h-[160px] [@media(min-width:769px)]:pt-[140px]"
      style={{ backgroundImage: "url(/page-title-bg.png)" }}
    >
      <div className="absolute inset-0 bg-[#131313] opacity-60" />
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
