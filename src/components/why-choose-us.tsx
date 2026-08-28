"use client";

import { useState } from "react";
import Image from "next/image";
import { ThemeBtn } from "@/components/theme-btn";
import { SectionTitle } from "@/components/section-title";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// Id de la vidéo YouTube ouverte par le lien "Watch our few minautes video"
// (https://www.youtube.com/watch?v=Fvae8nxzVz4 dans le HTML source, servie
// via Fancybox à l'origine).
const YOUTUBE_VIDEO_ID = "Fvae8nxzVz4";

// `.overlay-anim` du thème : un voile blanc translucide grandit du haut vers
// le bas au survol (height 0 -> 100%) tout en s'estompant (opacity 1 -> 0),
// puis disparaît instantanément à la sortie (pas de transition hors hover
// dans le CSS source — comportement reproduit à l'identique).
const overlayAnim =
  "relative overflow-hidden rounded-[10px] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:z-[9] after:h-0 after:bg-white/30 after:opacity-100 after:content-[''] hover:after:h-full hover:after:opacity-0 hover:after:transition-all hover:after:duration-400 hover:after:ease-linear";

/**
 * Section `.why-choose-us` du thème Amiso. Colonne texte (citation +
 * lien vidéo + CTA) et colonne images en composition superposée
 * (benefit-1/2/3 + badge logo). Le fond `.bg-pattern-2` et le halo
 * `.bg-shape` (images/icons/shape-1.png) sont en 404 sur le serveur
 * source (cf. BEHAVIORS.md) : ni recréés ni substitués.
 */
export function WhyChooseUs() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative py-[70px] pt-[120px]">
      <div className="auto-container">
        <div className="flex flex-wrap">
          {/* Content column — col-xl-6 col-lg-7 col-md-12, order-2 à partir de lg
              (le lien vidéo passe alors visuellement à droite de la colonne image) */}
          <ScrollReveal
            as="div"
            animation="fadeInRight"
            delay="600ms"
            className="relative z-1 mb-[50px] w-full lg:order-2 lg:w-7/12 xl:w-1/2"
          >
            <div className="relative lg:pl-[70px]">
              <SectionTitle
                subTitle="Company Benefits"
                title="We’re more than an agency"
                text="There are many variations of passages of available but the majority have suffered. Alteration in some form, lipsum is simply free text by injected humou or randomised words even believable."
                className="mb-10"
              />

              <blockquote className="relative mb-[50px] bg-white px-10 py-5 text-base leading-[30px] font-bold text-[#242323] shadow-[0_10px_60px_rgba(0,0,0,0.1)] before:absolute before:inset-y-[10px] before:left-0 before:w-1 before:rounded-[5px] before:bg-theme-2 before:content-['']">
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
              </blockquote>

              <div className="flex flex-col items-start gap-y-[30px] sm:flex-row sm:items-center sm:gap-y-0">
                {/* .play-now-two : order 2 dans le CSS source, alors qu'il précède
                    le theme-btn dans le DOM — il s'affiche donc après lui. */}
                <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="group order-2 flex cursor-pointer appearance-none items-center border-0 bg-transparent p-0 text-base leading-[23px] font-extrabold text-theme-1 transition-colors duration-300 hover:text-theme-2"
                    >
                      <i className="fa fa-play mr-5 flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-theme-2-dark pl-[5px] text-sm text-white transition-colors duration-300 group-hover:bg-theme-1" />
                      <span>
                        Watch our <br />
                        few minautes video
                      </span>
                    </button>
                  </DialogTrigger>
                  <DialogContent
                    showCloseButton
                    className="w-full max-w-3xl border-none bg-black p-0 sm:max-w-3xl"
                  >
                    <DialogTitle className="sr-only">
                      Amiso — few minautes video
                    </DialogTitle>
                    <div className="aspect-video w-full overflow-hidden rounded-xl">
                      {videoOpen ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                          title="Amiso video presentation"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="h-full w-full"
                        />
                      ) : null}
                    </div>
                  </DialogContent>
                </Dialog>

                <ThemeBtn href="/services/details" className="mr-[30px]">
                  Explore now
                </ThemeBtn>
              </div>
            </div>
          </ScrollReveal>

          {/* Image column — col-xl-6 col-lg-5 col-md-12 */}
          <div className="relative mb-[50px] w-full lg:w-5/12 xl:w-1/2">
            <ScrollReveal
              as="div"
              animation="fadeInLeft"
              className="relative lg:mr-[-10px]"
            >
              <div className="relative">
                <ScrollReveal
                  as="figure"
                  animation="fadeInUp"
                  className={cn(
                    "m-0 mb-5 w-full lg:w-[280px]",
                    overlayAnim
                  )}
                >
                  <Image
                    src="/images/resource/benefit-1.jpg"
                    alt=""
                    width={280}
                    height={277}
                    className="h-auto w-full rounded-[10px]"
                  />
                </ScrollReveal>

                <ScrollReveal
                  as="figure"
                  animation="fadeInRight"
                  className={cn("m-0 w-full lg:w-[280px]", overlayAnim)}
                >
                  <Image
                    src="/images/resource/benefit-2.jpg"
                    alt=""
                    width={280}
                    height={277}
                    className="h-auto w-full rounded-[10px]"
                  />
                </ScrollReveal>

                <ScrollReveal
                  as="figure"
                  animation="fadeInRight"
                  className={cn(
                    "m-0 mt-5 w-full lg:absolute lg:top-[70px] lg:right-0 lg:mt-0 lg:w-[280px]",
                    overlayAnim
                  )}
                >
                  <Image
                    src="/images/resource/benefit-3.jpg"
                    alt=""
                    width={280}
                    height={423}
                    className="h-auto w-full rounded-[10px]"
                  />
                </ScrollReveal>

                {/* .logo : masqué sous 1200px dans le CSS source (responsive.css) */}
                <figure className="m-0 hidden xl:absolute xl:top-[185px] xl:left-[170px] xl:block">
                  <Image
                    src="/images/resource/fav-icon.png"
                    alt=""
                    width={190}
                    height={157}
                  />
                </figure>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
