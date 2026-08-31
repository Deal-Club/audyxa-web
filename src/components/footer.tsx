"use client";

import Link from "next/link";
import Image from "next/image";

/** Footer du thème Amiso : formulaire newsletter + 4 colonnes de widgets + bas de page. */
export function Footer() {
  return (
    <footer className="main-footer relative bg-[#181818] pt-[30px]">
      <div className="subscribe-form auto-container flex flex-col items-center justify-between gap-6 bg-theme-1 px-[30px] py-8 md:flex-row md:px-[60px]">
        <div className="title-column">
          <h5 className="title flex items-center gap-2 text-white">
            <i className="flaticon-open-envelope text-theme-2" />
            Echangeons sur vos priorites
            <br />
            de transformation digitale
          </h5>
        </div>
        <div className="form-column w-full md:w-auto">
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-[400px]">
            <input
              type="email"
              name="email"
              placeholder="Votre adresse email"
              required
              className="w-full rounded-l-[10px] border border-white/10 bg-transparent px-5 py-3 text-white placeholder:text-white/50 focus:outline-none"
            />
            <button
              type="button"
              aria-label="S'inscrire"
              className="theme-btn flex items-center justify-center rounded-r-[10px] bg-theme-2 px-5 text-white transition-colors hover:bg-theme-2-dark"
            >
              <i className="fa fa-paper-plane" />
            </button>
          </form>
        </div>
      </div>

      <div className="widgets-section py-[60px]">
        <div className="auto-container grid grid-cols-1 gap-x-8 gap-y-[50px] sm:grid-cols-2 xl:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="footer-column">
            <div className="footer-widget about-widget">
              <div className="logo mb-[25px]">
                <Link href="/">
                  <Image src="/images/logo-full-white.png" alt="Audyxa" width={154} height={40} className="h-[40px] w-[154px]" />
                </Link>
              </div>
              <div className="text mb-5 text-[15px] leading-[30px] text-[#8f8f8f]">
                Audyxa accompagne les entreprises qui veulent structurer leur croissance, mieux piloter leurs operations et transformer les pertes de temps en gains concrets.
              </div>
              <div className="rounded-[10px] border border-white/10 px-5 py-4 text-sm leading-7 text-[#8f8f8f]">
                Conseil, automatisation, IA, developpement d&apos;outils metier et accompagnement au deploiement.
              </div>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-widget links-widget">
              <h6 className="widget-title mb-[15px] font-semibold text-white">Navigation</h6>
              <ul className="user-links space-y-[10px] text-[15px] text-[#8f8f8f]">
                {[
                  { label: "Accueil", href: "/" },
                  { label: "A propos", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[#8f8f8f] hover:text-theme-2">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-widget gallery-widget">
              <h6 className="widget-title mb-[15px] font-semibold text-white">Interventions</h6>
              <ul className="space-y-[10px] text-[15px] leading-7 text-[#8f8f8f]">
                <li>Audit et diagnostic digital</li>
                <li>Cartographie et optimisation des processus</li>
                <li>Automatisation et integrations API</li>
                <li>IA en entreprise et outils metier</li>
                <li>Pilotage, adoption et mesure ROI</li>
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-widget contacts-widget">
              <h6 className="widget-title mb-[15px] font-semibold text-white">Perimetre</h6>
              <div className="text mb-[15px] text-[15px] text-[#8f8f8f]">
                France et Afrique francophone
              </div>
              <ul className="contact-info space-y-[10px] text-[15px] text-[#8f8f8f]">
                <li className="flex items-center gap-2">
                  <i className="fa fa-envelope text-theme-2" />
                  <a href="mailto:contact@audyxa.com" className="text-[#8f8f8f] hover:text-theme-2">contact@audyxa.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa fa-phone-square text-theme-2" />
                  <span>Conseil + execution sur la meme mission</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa fa-map-marker-alt text-theme-2" />
                  <span>Intervention a distance et accompagnement structure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom border-t border-white/10">
        <div className="auto-container">
          <div className="inner-container py-6 text-center">
            <div className="copyright-text text-sm text-[#8f8f8f]">
              © 2026 <Link href="/" className="text-[#8f8f8f] hover:text-theme-2">Audyxa</Link>. Transformation digitale des entreprises.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
