import Link from "next/link";
import { cn } from "@/lib/utils";

interface ThemeBtnProps {
  href: string;
  children: React.ReactNode;
  variant?: "one" | "two";
  light?: boolean;
  className?: string;
}

/**
 * Bouton .theme-btn.btn-style-one du thème Amiso : au survol, un calque
 * `--bg-theme-color2-dark` s'étend de 24px à 100% de largeur depuis la
 * gauche (cubic-bezier(0.785,0.135,0.15,0.86), 300ms).
 */
export function ThemeBtn({
  href,
  children,
  variant = "one",
  light = false,
  className,
}: ThemeBtnProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative z-0 inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-[10px] px-[50px] py-[15px] text-base font-extrabold leading-7 transition-all duration-500",
        variant === "one" && [
          light
            ? "bg-white text-theme-1"
            : "bg-theme-2 text-white",
        ],
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-y-0 left-0 -z-10 w-6 rounded-[10px] transition-[width] duration-300 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:w-full",
          light ? "bg-[#e8e8e8]" : "bg-theme-2-dark"
        )}
      />
      <span className="btn-title relative z-[2] transition-colors duration-300">
        {children}
      </span>
    </Link>
  );
}
