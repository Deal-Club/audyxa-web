"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type WowAnimation = "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight";

interface ScrollRevealProps {
  animation: WowAnimation;
  delay?: string;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

/**
 * Équivalent de WOW.js + animate.css du site source : l'élément est
 * invisible (visibility: hidden) jusqu'à ce qu'il entre dans le viewport,
 * puis joue l'animation "fadeIn*" une seule fois.
 */
export function ScrollReveal({
  animation,
  delay,
  as: Tag = "div",
  className,
  children,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const setRef = (node: HTMLElement | null) => {
    elementRef.current = node;
  };

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={setRef}
      className={cn("wow", visible && ["animated", animation], className)}
      style={delay ? { animationDelay: delay } : undefined}
    >
      {children}
    </Tag>
  );
}
