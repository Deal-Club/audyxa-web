"use client";

import Link from "next/link";
import Image from "next/image";

const PORTFOLIO_THUMBS = [1, 2, 3, 4, 5, 6].map(
  (n) => `/images/resource/project-thumb-${n}.jpg`
);

/** Footer du thème Amiso : formulaire newsletter + 4 colonnes de widgets + bas de page. */
export function Footer() {
  return (
    <footer className="main-footer relative bg-[#181818] pt-[30px]">
      <div className="subscribe-form auto-container flex flex-col items-center justify-between gap-6 bg-theme-1 px-[30px] py-8 md:flex-row md:px-[60px]">
        <div className="title-column">
          <h5 className="title flex items-center gap-2 text-white">
            <i className="flaticon-open-envelope text-theme-2" />
            Subscribe now to get <br />
            latest updates
          </h5>
        </div>
        <div className="form-column w-full md:w-auto">
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-[400px]">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
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
                  <Image src="/images/logo.png" alt="Amiso" width={140} height={35} className="h-[35px] w-[140px]" />
                </Link>
              </div>
              <div className="text mb-5 text-[15px] leading-[30px] text-[#8f8f8f]">
                Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do eiusmod tempor
                incididunt ut labore.
              </div>
              <ul className="social-icon-two flex gap-3">
                {[
                  ["fa-twitter", "#"],
                  ["fa-facebook", "#"],
                  ["fa-pinterest", "#"],
                  ["fa-instagram", "#"],
                ].map(([icon, href]) => (
                  <li key={icon}>
                    <a
                      href={href}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-theme-2 hover:border-theme-2"
                    >
                      <i className={`fab ${icon}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-widget links-widget">
              <h6 className="widget-title mb-[15px] font-semibold text-white">Explore</h6>
              <ul className="user-links space-y-[10px] text-[15px] text-[#8f8f8f]">
                {["About Company", "Meet the Team", "News & Media", "Our Projects", "Contact"].map(
                  (label) => (
                    <li key={label}>
                      <a href="#" className="hover:text-theme-2">{label}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-widget gallery-widget">
              <h6 className="widget-title mb-[15px] font-semibold text-white">Portfolio</h6>
              <div className="outer -mx-[5px] flex flex-wrap pt-[5px]">
                {PORTFOLIO_THUMBS.map((src) => (
                  <figure key={src} className="image mb-[10px] w-1/3 px-[5px]">
                    <a href="#" className="block overflow-hidden rounded-[10px]">
                      <Image src={src} alt="" width={100} height={100} className="h-full w-full object-cover" />
                    </a>
                  </figure>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-widget contacts-widget">
              <h6 className="widget-title mb-[15px] font-semibold text-white">Contact</h6>
              <div className="text mb-[15px] text-[15px] text-[#8f8f8f]">
                66 Road Broklyn Street, 600 New York, USA
              </div>
              <ul className="contact-info space-y-[10px] text-[15px] text-[#8f8f8f]">
                <li className="flex items-center gap-2">
                  <i className="fa fa-envelope text-theme-2" />
                  <a href="mailto:needhelp@potisen.com" className="hover:text-theme-2">needhelp@company.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa fa-phone-square text-theme-2" />
                  <a href="tel:+926668880000" className="hover:text-theme-2">+92 666 888 0000</a>
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
              © Copyright 2023 by <Link href="/" className="hover:text-theme-2">Company.com</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
