"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

interface ContactRow {
  label: string;
  value: string;
}

interface SocialLink {
  icon: string;
  href: string;
}

interface ProgressItem {
  label: string;
  percent: number;
}

const contactRows: ContactRow[] = [
  { label: "Email Address", value: "needhelp@yourdomain.com" },
  { label: "Phone Number", value: "+012-3456-789" },
  { label: "Web Address", value: "www.yourdomain.com" },
];

const socialLinks: SocialLink[] = [
  { icon: "fab fa-twitter", href: "#" },
  { icon: "fab fa-facebook", href: "#" },
  { icon: "fab fa-pinterest-p", href: "#" },
  { icon: "fab fa-instagram", href: "#" },
];

const progressItems: ProgressItem[] = [
  { label: "Tecnology", percent: 90 },
  { label: "Marketing", percent: 80 },
  { label: "Business", percent: 75 },
];

/**
 * Section `.team-details` de page-team-details.html : profil d'un membre de
 * l'équipe (photo, bio, coordonnées, réseaux sociaux) puis bloc "Personal
 * Experience" avec 3 jauges de compétences animées au scroll (remplace le
 * plugin jQuery `.appear()` de script.js par `useInView`, comme `pie-stat.tsx`
 * pour la FAQ de la home).
 *
 * Photo `images/resource/team-details.jpg` en 404 confirmé sur le serveur
 * source ET sur le miroir de secours (team-1.jpg à team-4.jpg testés aussi,
 * tous en 404) : aucune image inventée. Le cadre reste un panneau neutre
 * (bg-theme-3, ratio 3/4) pour préserver la mise en page à deux colonnes
 * sans fabriquer de contenu photographique.
 *
 * Aucune classe `wow` sur cette section en source (contrairement aux
 * sections homepage) : pas de reveal au scroll ajouté ici.
 */
export function TeamDetailsSection() {
  const { ref: progressRef, inView } = useInView<HTMLDivElement>(0.4);

  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="auto-container">
        {/* team-details__top */}
        <div className="mb-[70px] flex flex-wrap -mx-[15px]">
          <div className="w-full px-[15px] [@media(min-width:992px)]:w-1/2">
            <div className="relative mr-[20px]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[30px] bg-theme-3" />
            </div>
          </div>

          <div className="w-full px-[15px] [@media(min-width:992px)]:w-1/2">
            <div className="mt-[70px] ml-0 [@media(min-width:992px)]:mt-0 [@media(min-width:992px)]:ml-[50px]">
              <div className="mt-[-11px]">
                <h3 className="mb-[3px] text-[40px] font-bold leading-[50px] text-theme-1">
                  Aleesha Brown
                </h3>
                <p className="text-base text-theme-2">Managing Director &amp; CEO</p>
                <p className="mb-[30px] text-[30px] font-normal leading-[45px] text-theme-1">
                  I help my clients stand out and they help me grow.
                </p>

                {contactRows.map((row, i) => (
                  <div key={row.label} className={cn(i < contactRows.length - 1 && "mb-[30px]")}>
                    <h5 className="mb-0 text-[22px] font-bold leading-[1.2em] text-theme-1">
                      {row.label}
                    </h5>
                    <p className="text-body-text">{row.value}</p>
                  </div>
                ))}

                <div className="mt-5 mb-7 flex items-center">
                  {socialLinks.map((social) => (
                    <a
                      key={social.icon}
                      href={social.href}
                      className="ml-[10px] flex h-10 w-10 items-center justify-center rounded-full bg-theme-2 text-[15px] text-white transition-colors duration-500 first:ml-0 hover:bg-theme-1"
                    >
                      <i className={social.icon} aria-hidden />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* team-details__bottom */}
        <div className="flex flex-wrap -mx-[15px] border-t border-[#e4e5ea] pt-[110px]">
          <div className="w-full px-[15px] [@media(min-width:992px)]:w-1/2">
            <div className="mr-[70px]">
              <h4 className="text-[36px] font-bold leading-[46px] text-theme-1">
                Personal Experience
              </h4>
              <p className="pt-[30px] text-body-text">
                When an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries architecto dolorem ipsum
                quia
              </p>
            </div>
          </div>

          <div className="w-full px-[15px] [@media(min-width:992px)]:w-1/2">
            <div className="mt-[1px] ml-0 [@media(min-width:992px)]:ml-[70px]">
              <div ref={progressRef}>
                {progressItems.map((item, i) => (
                  <div key={item.label} className="relative block">
                    <h4 className="mb-[6px] text-base font-bold leading-7 text-theme-1">
                      {item.label}
                    </h4>
                    <div
                      className={cn(
                        "relative h-[13px] rounded-[7px] bg-[#eef0f6]",
                        i < progressItems.length - 1 && "mb-[22px]"
                      )}
                    >
                      <div
                        className="relative h-[13px] rounded-[7px] bg-theme-2 transition-[width] duration-[1500ms] ease-linear"
                        style={{ width: inView ? `${item.percent}%` : "0%" }}
                      >
                        <span
                          className={cn(
                            "absolute right-0 bottom-[21px] text-[14px] leading-6 font-medium text-theme-1 transition-opacity duration-500",
                            inView ? "opacity-100" : "opacity-0"
                          )}
                        >
                          {item.percent}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
