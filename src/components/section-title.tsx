import { cn } from "@/lib/utils";

interface SectionTitleProps {
  subTitle: string;
  title: React.ReactNode;
  text?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

/**
 * .sec-title du thème Amiso. Le sous-titre porte un "//" décoratif rouge
 * (--theme-color2) généré par ::before, jamais une icône.
 */
export function SectionTitle({
  subTitle,
  title,
  text,
  center = false,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("relative z-2 mb-[50px]", center && "text-center", className)}>
      <span
        className={cn(
          "relative top-[-8px] inline-block pl-5 text-[18px] font-medium leading-[1.2em] before:absolute before:left-0 before:top-0 before:tracking-[0.2em] before:text-theme-2 before:content-['//']",
          light ? "text-[#8f8f8f]" : "text-body-text"
        )}
      >
        {subTitle}
      </span>
      <h2
        className={cn(
          "relative mt-[-5px] mb-0 text-[46px] font-bold",
          light ? "text-white" : "text-theme-1"
        )}
      >
        {title}
      </h2>
      {text ? (
        <div className={cn("mt-4 text-base", light ? "text-[#8f8f8f]" : "text-body-text")}>
          {text}
        </div>
      ) : null}
    </div>
  );
}
