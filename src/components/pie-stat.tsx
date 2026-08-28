"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

interface PieStatProps {
  percent: number;
  label: React.ReactNode;
  speed?: number;
  size?: number;
  strokeWidth?: number;
  fgColor?: string;
  bgColor?: string;
}

/**
 * Équivalent du plugin jQuery Knob utilisé dans la section FAQ du site
 * source (input.dial data-fgColor="#ff3838" data-bgColor="#f9f9f9"
 * data-width="125" data-linecap="normal") + du compteur .count-text
 * (data-stop / data-speed) qui l'accompagne.
 */
export function PieStat({
  percent,
  label,
  speed = 2000,
  size = 125,
  strokeWidth = 10,
  fgColor = "#ff3838",
  bgColor = "#f9f9f9",
}: PieStatProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const [count, setCount] = useState(0);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / speed, 1);
      setCount(Math.floor(progress * percent));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, percent, speed]);

  return (
    <div ref={ref} className="text-center">
      <div className="relative inline-block" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={bgColor}
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={fgColor}
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - (inView ? percent : 0) / 100)}
            style={{ transition: `stroke-dashoffset ${speed}ms linear` }}
          />
        </svg>
        <div className="txt absolute inset-0 flex items-center justify-center text-lg font-bold text-theme-1">
          {count}%
        </div>
      </div>
      <h6 className="title mt-2">{label}</h6>
    </div>
  );
}
