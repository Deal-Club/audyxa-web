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
  const [searchOpen, setSearchOpen] = useState(false);

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
      <header className="main-header header-style-one relative z-30">
        <div className="header-top hidden bg-theme-1 lg:block">
          <div className="inner-container mx-auto flex max-w-none items-center justify-between px-5 py-0 [@media(min-width:1440px)]:px-20">
            <div className="top-left">
              <ul className="flex items-center">
                <li className="mr-5 flex items-center gap-2 text-sm text-[#8f8f8f]">
                  <i className="fa fa-envelope text-theme-2" />
                  <a href="mailto:needhelp@company.com" className="text-[#8f8f8f] hover:text-white">
                    needhelp@company.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#8f8f8f]">
                  <i className="fa fa-map-marker text-theme-2" />
                  88 Broklyn Golden Street. New York
                </li>
              </ul>
            </div>

            <div className="top-right flex items-center">
              <ul className="flex items-center gap-5 text-sm">
                <li><a href="#" className="text-[#8f8f8f] hover:text-white">Help</a></li>
                <li><a href="#" className="text-[#8f8f8f] hover:text-white">Support</a></li>
                <li><a href="#" className="text-[#8f8f8f] hover:text-white">Contact</a></li>
              </ul>
              <ul className="ml-[35px] flex items-center gap-4">
                <li><a href="#" className="text-[#8f8f8f] hover:text-theme-2"><i className="fab fa-twitter" /></a></li>
                <li><a href="#" className="text-[#8f8f8f] hover:text-theme-2"><i className="fab fa-facebook-square" /></a></li>
                <li><a href="#" className="text-[#8f8f8f] hover:text-theme-2"><i className="fab fa-pinterest-p" /></a></li>
                <li><a href="#" className="text-[#8f8f8f] hover:text-theme-2"><i className="fab fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-lower bg-theme-1">
          <div className="mx-auto px-5 [@media(min-width:1440px)]:px-20">
            <div className="main-box flex h-[90px] items-center justify-between [@media(min-width:1440px)]:h-[115px]">
              <div className="logo-box">
                <Link href="/" className="logo block w-[140px]">
                  <Image src="/images/logo.png" alt="Amiso" width={140} height={35} priority className="h-[35px] w-[140px]" />
                </Link>
              </div>

              <div className="nav-outer hidden [@media(min-width:1440px)]:block">
                <NavMenu items={NAVIGATION} />
              </div>

              <div className="outer-box flex items-center gap-[15px]">
                <button
                  type="button"
                  aria-label="Ouvrir la recherche"
                  onClick={() => setSearchOpen(true)}
                  className="search-btn flex h-[30px] w-[30px] items-center justify-center text-[22px] text-white transition-colors hover:text-theme-2"
                >
                  <i className="lnr-icon-search" />
                </button>

                <a
                  href="tel:+92(8800)9806"
                  className="info-btn hidden items-center gap-2 text-sm text-white [@media(min-width:1440px)]:flex"
                >
                  <i className="fa fa-phone text-theme-2" />
                  <span>
                    <small className="block text-xs text-[#8f8f8f]">Call Anytime</small>
                    + 88 ( 9800 ) 6802-00
                  </span>
                </a>

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
            <div className="inner-container flex items-center justify-between py-[10px]">
              <Link href="/" className="logo block w-[110px]">
                <Image src="/images/logo-2.png" alt="Amiso" width={110} height={28} className="h-[28px] w-[110px]" />
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

      {/* Recherche */}
      <div
        className={cn(
          "search-popup fixed inset-0 z-[999999] flex items-center justify-center bg-black/90 transition-opacity duration-300",
          searchOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <button
          type="button"
          aria-label="Fermer la recherche"
          onClick={() => setSearchOpen(false)}
          className="close-search absolute right-8 top-8 text-3xl text-white"
        >
          <i className="fa fa-times" />
        </button>
        <div className="search-inner w-full max-w-[700px] px-5">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="form-group flex border-b-2 border-white pb-3"
          >
            <input
              type="search"
              name="search-field"
              placeholder="Search..."
              required
              className="w-full bg-transparent text-2xl text-white placeholder:text-white/50 focus:outline-none"
            />
            <button type="submit" aria-label="Rechercher" className="text-2xl text-white">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
      </div>

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
            <Link href="/" className="nav-logo block w-[110px]" onClick={() => setMobileOpen(false)}>
              <Image src="/images/logo.png" alt="Amiso" width={110} height={28} className="h-[28px] w-[110px]" />
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

          <MobileNavMenu items={NAVIGATION} />

          <ul className="contact-list-one mt-6 space-y-4 border-t border-white/10 pt-6">
            <li className="contact-info-box">
              <i className="lnr-icon-phone-handset mr-2 text-theme-2" />
              <span className="title mr-1 text-white/70">Call Now</span>
              <a href="tel:+92880098670" className="text-white">+92 (8800) - 98670</a>
            </li>
            <li className="contact-info-box">
              <i className="lnr-icon-envelope1 mr-2 text-theme-2" />
              <span className="title mr-1 text-white/70">Send Email</span>
              <a href="mailto:help@company.com" className="text-white">help@company.com</a>
            </li>
            <li className="contact-info-box text-white/70">
              <i className="lnr-icon-clock mr-2 text-theme-2" />
              <span className="title mr-1">Send Email</span>
              Mon - Sat 8:00 - 6:30, Sunday - CLOSED
            </li>
          </ul>

          <ul className="social-links mt-6 flex gap-4">
            <li><a href="#" className="text-white hover:text-theme-2"><i className="fab fa-twitter" /></a></li>
            <li><a href="#" className="text-white hover:text-theme-2"><i className="fab fa-facebook-f" /></a></li>
            <li><a href="#" className="text-white hover:text-theme-2"><i className="fab fa-pinterest" /></a></li>
            <li><a href="#" className="text-white hover:text-theme-2"><i className="fab fa-instagram" /></a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

function StickyNav() {
  return <NavMenu items={NAVIGATION} theme="light" />;
}
