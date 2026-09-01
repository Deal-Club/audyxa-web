"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NAVIGATION } from "@/lib/nav-data";
import { NavMenu } from "@/components/nav-menu";
import { MobileNavMenu } from "@/components/mobile-nav-menu";

/**
 * Header du thème Amiso (header-style-one) : barre du haut + nav principale,
 * plus un clone "sticky" qui glisse depuis le haut passé 100px de scroll
 * (site source : js/script.js, fonction headerStyle()).
 */
export function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-visible", mobileOpen);
  }, [mobileOpen]);


  return (
    <>
      <header className="main-header header-style-one absolute inset-x-0 top-0 z-30">
        <div className="header-top hidden lg:block">
          <div className="auto-container flex items-center justify-between py-[8px]">
            <div className="top-left">
              <ul className="flex items-center">
                <li className="mr-5 flex items-center gap-2 text-sm text-[#8f8f8f]">
                  <i className="fa fa-envelope text-theme-2" />
                  <Link href="/contact" className="text-[#8f8f8f] hover:text-white">
                    Demander un diagnostic
                  </Link>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#8f8f8f]">
                  <i className="fa fa-map-marker text-theme-2" />
                  France et Afrique francophone
                </li>
              </ul>
            </div>

            <div className="top-right flex items-center">
              <ul className="flex items-center gap-5 text-sm">
                <li><Link href="/about" className="text-[#8f8f8f] hover:text-white">Approche</Link></li>
                <li><Link href="/services" className="text-[#8f8f8f] hover:text-white">Services</Link></li>
                <li><Link href="/contact" className="text-[#8f8f8f] hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-lower">
          <div className="auto-container">
            <div className="main-box flex h-[68px] items-center justify-between [@media(min-width:1440px)]:h-[80px]">
              <div className="logo-box">
                <Link href="/" className="logo block w-[154px]">
                  <Image src="/images/logo-full-white.png" alt="Audyxa" width={154} height={40} priority className="h-[40px] w-[154px]" />
                </Link>
              </div>

              <div className="nav-outer hidden [@media(min-width:1440px)]:block">
                <NavMenu items={NAVIGATION} />
              </div>

              <div className="outer-box flex items-center gap-[15px]">
                <Link
                  href="tel:+2290195241540"
                  className="info-btn hidden items-center gap-2 text-sm text-white [@media(min-width:1440px)]:flex"
                >
                  <i className="fa fa-phone text-theme-2" />
                  <span>
                    <small className="block text-xs text-[#8f8f8f]">Audyxa</small>
                    2290195241540
                  </span>
                </Link>

                <button
                  type="button"
                  aria-label="Ouvrir le menu"
                  onClick={() => setMobileOpen(true)}
                  className="mobile-nav-toggler text-2xl text-white [@media(min-width:1440px)]:hidden"
                >
                  <i className="fa fa-bars" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "sticky-header fixed inset-x-0 top-0 z-[99999] bg-white opacity-0 shadow-[0_0_20px_rgba(0,0,0,0.05)] transition-all duration-300",
            isSticky && "translate-y-0 opacity-100"
          )}
          style={{ transform: isSticky ? "translateY(0)" : "translateY(-100%)" }}
        >
          <div className="auto-container">
            <div className="inner-container flex items-center justify-between py-[6px]">
              <Link href="/" className="logo block w-[154px]">
                <Image src="/images/logo-full.png" alt="Audyxa" width={154} height={40} className="h-[40px] w-[154px]" />
              </Link>
              <div className="hidden [@media(min-width:1440px)]:block">
                <StickyNav />
              </div>
              <button
                type="button"
                aria-label="Ouvrir le menu"
                onClick={() => setMobileOpen(true)}
                className="mobile-nav-toggler text-2xl text-theme-1 [@media(min-width:1440px)]:hidden"
              >
                <i className="fa fa-bars" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile (off-canvas) */}
      <div
        className={cn(
          "mobile-menu fixed inset-0 z-[999999]",
          mobileOpen ? "visible" : "invisible"
        )}
      >
        <div
          className={cn(
            "menu-backdrop absolute inset-0 bg-black/60 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className={cn(
            "menu-box absolute inset-y-0 right-0 w-[300px] max-w-[85vw] overflow-y-auto bg-theme-1 px-6 py-8 transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="upper-box mb-6 flex items-center justify-between">
            <Link href="/" className="nav-logo block w-[123px]" onClick={() => setMobileOpen(false)}>
              <Image src="/images/logo-full-white.png" alt="Audyxa" width={123} height={32} className="h-[32px] w-[123px]" />
            </Link>
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setMobileOpen(false)}
              className="close-btn text-2xl text-white"
            >
              <i className="fa fa-times" />
            </button>
          </div>

          <MobileNavMenu items={NAVIGATION} onNavigate={() => setMobileOpen(false)} />

          <ul className="contact-list-one mt-6 space-y-4 border-t border-white/10 pt-6">
            <li className="contact-info-box">
              <i className="lnr-icon-phone-handset mr-2 text-theme-2" />
              <span className="title mr-1 text-white/70">Telephone</span>
              <a href="tel:+2290195241540" className="text-white">2290195241540</a>
            </li>
            <li className="contact-info-box">
              <i className="lnr-icon-envelope1 mr-2 text-theme-2" />
              <span className="title mr-1 text-white/70">Zone</span>
              <span className="text-white">France et Afrique francophone</span>
            </li>
            <li className="contact-info-box text-white/70">
              <i className="lnr-icon-clock mr-2 text-theme-2" />
              <span className="title mr-1">Contact</span>
              Diagnostic et cadrage sur rendez-vous
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

function StickyNav() {
  return <NavMenu items={NAVIGATION} theme="light" />;
}
