"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeBtn } from "@/components/theme-btn";
import { TechMarquee } from "@/components/tech-marquee";
import { cn } from "@/lib/utils";

interface Slide {
  image: string;
  kicker: string;
  keyword: string;
  lines: [string, string];
  text: string;
}

/**
 * Hero Audyxa : 3 slides reprenant la signature de marque
 * "Transformer • Innover • Exceller" (cf. logo), un mot mis en avant en rouge
 * par slide. Défilement et animation de légende repris de la reconstruction
 * du Revolution Slider du thème source (délai 10s, transition fondu/zoom,
 * légende en fade-up décalée).
 */
const SLIDES: Slide[] = [
  {
    image: "/images/main-slider/slide-1.jpg",
    kicker: "Audyxa",
    keyword: "Transformer",
    lines: ["vos processus en", "économies réelles"],
    text:
      "Audyxa aide les entreprises à réduire les pertes de temps, clarifier leurs priorités digitales et déployer des solutions utiles.",
  },
  {
    image: "/images/main-slider/slide-2.jpg",
    kicker: "Audyxa",
    keyword: "Innover",
    lines: ["avec les bons outils,", "pas avec plus de complexité"],
    text:
      "Nous combinons conseil, automatisation, IA et développement pour moderniser votre activité sans créer de nouvelles lourdeurs.",
  },
  {
    image: "/images/main-slider/slide-3.jpg",
    kicker: "Audyxa",
    keyword: "Exceller",
    lines: ["dans l'exécution", "et le pilotage digital"],
    text:
      "Notre approche vise des gains concrets : meilleure productivité, données plus fiables, équipes plus efficaces et décisions mieux pilotées.",
  },
];

const DELAY_MS = 10000;

export function MainSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, DELAY_MS);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => setIndex((i + SLIDES.length) % SLIDES.length);
  const slide = SLIDES[index];

  return (
    <section className="main-slider relative overflow-hidden bg-[#0f0f0f]">
      <div
        className="relative min-h-[480px] w-full"
        style={{ height: "calc(100vh - var(--header-height, 120px))" }}
      >
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-in-out",
              i === index ? "z-10 scale-100 opacity-100" : "z-0 scale-110 opacity-0"
            )}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={i === 0}
              className="rev-slidebg object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>
        ))}

        <div className="auto-container relative z-20 flex h-full items-center">
          <div key={index} className="main-slider-caption max-w-[780px]">
            <span className="animate-[heroCaptionIn_1.5s_1s_both_cubic-bezier(0.19,1,0.22,1)] mb-4 inline-block text-sm font-semibold tracking-[0.2em] text-white/80 uppercase">
              {slide.kicker}
            </span>
            <h1 className="animate-[heroCaptionIn_1.5s_1s_both_cubic-bezier(0.19,1,0.22,1)] text-[44px] leading-[1.1] font-bold text-white [@media(min-width:1200px)]:text-[72px] [@media(min-width:1200px)]:leading-[1.05em]">
              <span className="text-theme-2">{slide.keyword}</span> <br />
              {slide.lines[0]} <br />
              {slide.lines[1]}
            </h1>
            <p className="mt-6 max-w-[640px] animate-[heroCaptionIn_1.5s_1s_both_cubic-bezier(0.19,1,0.22,1)] text-lg leading-8 text-white/90">
              {slide.text}
            </p>
            <div className="btn-box mt-8 animate-[heroCaptionIn_1.5s_1s_both_cubic-bezier(0.19,1,0.22,1)]">
              <ThemeBtn href="/contact" light className="theme-btn min-w-[220px]!">
                Demander un diagnostic
              </ThemeBtn>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Diapositive précédente"
          onClick={() => goTo(index - 1)}
          className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-theme-1 min-[600px]:flex"
        >
          <i className="fa fa-angle-left text-xl" />
        </button>
        <button
          type="button"
          aria-label="Diapositive suivante"
          onClick={() => goTo(index + 1)}
          className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-theme-1 min-[600px]:flex"
        >
          <i className="fa fa-angle-right text-xl" />
        </button>
      </div>
      {/* <TechMarquee /> */}
    </section>
  );
}
