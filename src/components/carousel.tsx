"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode[];
  /** Reproduit les breakpoints `responsive` d'Owl Carousel : { largeurMin: nbItems }. */
  responsive: Record<number, number>;
  gap?: number;
  loop?: boolean;
  /** ms entre les slides, ou false pour désactiver l'autoplay. */
  autoplayMs?: number | false;
  nav?: boolean;
  dots?: boolean;
  className?: string;
}

function useItemsPerView(responsive: Record<number, number>) {
  const breakpoints = Object.keys(responsive)
    .map(Number)
    .sort((a, b) => a - b);

  const compute = useCallback(() => {
    if (typeof window === "undefined") return responsive[breakpoints[0]];
    const width = window.innerWidth;
    let current = responsive[breakpoints[0]];
    for (const bp of breakpoints) {
      if (width >= bp) current = responsive[bp];
    }
    return current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(responsive)]);

  const [items, setItems] = useState(compute);

  useEffect(() => {
    const onResize = () => setItems(compute());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [compute]);

  return items;
}

/**
 * Remplace Owl Carousel (bibliothèque jQuery du site source, non chargée sur
 * ce miroir de démo) par un carrousel équivalent en Embla : mêmes options
 * (loop, autoplay, marges, points de rupture) que la config `owlCarousel`
 * d'origine trouvée dans js/script.js.
 */
export function Carousel({
  children,
  responsive,
  gap = 30,
  loop = true,
  autoplayMs = false,
  nav = false,
  dots = true,
  className,
}: CarouselProps) {
  const itemsPerView = useItemsPerView(responsive);
  const plugins = autoplayMs
    ? [Autoplay({ delay: autoplayMs, stopOnInteraction: false })]
    : [];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align: "start" }, plugins);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex" style={{ marginLeft: -gap / 2 }}>
          {children.map((child, i) => (
            <div
              key={i}
              className="min-w-0 shrink-0 grow-0"
              style={{
                flexBasis: `${100 / itemsPerView}%`,
                paddingLeft: gap / 2,
                paddingRight: gap / 2,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {nav ? (
        <>
          <button
            type="button"
            aria-label="Précédent"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute top-1/2 left-2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-theme-1 shadow transition-colors hover:bg-theme-2 hover:text-white"
          >
            <i className="fa fa-long-arrow-alt-left" />
          </button>
          <button
            type="button"
            aria-label="Suivant"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute top-1/2 right-2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-theme-1 shadow transition-colors hover:bg-theme-2 hover:text-white"
          >
            <i className="fa fa-long-arrow-alt-right" />
          </button>
        </>
      ) : null}

      {dots ? (
        <div className="mt-8 flex justify-center gap-2.5">
          {children.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Aller à la diapositive ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-colors",
                i === selectedIndex ? "bg-theme-2" : "bg-[#e2e2e2]"
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
