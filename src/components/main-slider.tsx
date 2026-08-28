"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeBtn } from "@/components/theme-btn";
import { cn } from "@/lib/utils";

interface Slide {
  image: string;
}

/**
 * Reconstruction du Revolution Slider du site source (plugins/revolution +
 * js/main-slider-script.js) : 2 slides identiques en contenu (seul le fond
 * change, comme sur le site), délai de 10s, transition "zoomout", légende en
 * fade-up (Power3.easeInOut, 1.5s, départ décalé de 1s — reproduit ici via
 * une keyframe CSS locale). Pas de Ken Burns : aucun data-kenburns n'est
 * défini sur les slides source.
 */
const SLIDES: Slide[] = [
  { image: "/images/main-slider/1.jpg" },
  { image: "/images/main-slider/2.jpg" },
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
      <div className="relative h-[800px] w-full [@media(min-width:1200px)]:h-[870px]">
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
          <div key={index} className="main-slider-caption max-w-[750px]">
            <h1 className="animate-[heroCaptionIn_1.5s_1s_both_cubic-bezier(0.19,1,0.22,1)] text-[56px] leading-[1.05] font-bold text-white [@media(min-width:1200px)]:text-[90px] [@media(min-width:1200px)]:leading-[1em]">
              Website <span className="text-theme-2">&amp;</span> <br />
              applications <br />
              design agency
            </h1>
            <div className="btn-box mt-8 animate-[heroCaptionIn_1.5s_1s_both_cubic-bezier(0.19,1,0.22,1)]">
              <ThemeBtn href="/about" light className="theme-btn min-w-[200px]!">
                Explore now
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
    </section>
  );
}
