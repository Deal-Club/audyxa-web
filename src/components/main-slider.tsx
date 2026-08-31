"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeBtn } from "@/components/theme-btn";
import { cn } from "@/lib/utils";

interface Slide {
  image: string;
  kicker: string;
  title: string;
  highlight: string;
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
    image: "/images/main-slider/1.jpg",
    kicker: "Agence Audyxa",
    title: "Transformer votre vision en réalité",
    highlight: "Transformer",
  },
  {
    image: "/images/main-slider/2.jpg",
    kicker: "Agence Audyxa",
    title: "Innover pour rester en avance",
    highlight: "Innover",
  },
  {
    image: "/images/background/2.jpg",
    kicker: "Agence Audyxa",
    title: "Exceller dans chaque projet",
    highlight: "Exceller",
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

  return (
    <section className="main-slider relative overflow-hidden">
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
          {SLIDES.map(
            (slide, i) =>
              i === index && (
                <div key={i} className="main-slider-caption max-w-[750px]">
                  <span
                    className="animate-[heroCaptionIn_1.5s_1s_both_cubic-bezier(0.19,1,0.22,1)] mb-4 inline-block text-sm font-semibold tracking-[0.2em] text-theme-2 uppercase"
                  >
                    {slide.kicker}
                  </span>
                  <h1 className="animate-[heroCaptionIn_1.5s_1s_both_cubic-bezier(0.19,1,0.22,1)] text-[44px] leading-[1.1] font-bold text-white [@media(min-width:1200px)]:text-[64px] [@media(min-width:1200px)]:leading-[1.1em]">
                    {slide.title.split(slide.highlight).map((part, partIndex, arr) => (
                      <span key={partIndex}>
                        {part}
                        {partIndex < arr.length - 1 ? (
                          <span className="text-theme-2">{slide.highlight}</span>
                        ) : null}
                      </span>
                    ))}
                  </h1>
                  <div className="btn-box mt-8 animate-[heroCaptionIn_1.5s_1s_both_cubic-bezier(0.19,1,0.22,1)]">
                    <ThemeBtn href="/about" light className="theme-btn min-w-[200px]!">
                      Explore now
                    </ThemeBtn>
                  </div>
                </div>
              )
          )}
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
    </section>
  );
}
