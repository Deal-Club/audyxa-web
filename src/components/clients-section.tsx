import Image from "next/image";
import { Carousel } from "@/components/carousel";

/**
 * .clients-section du thème Amiso : bande de logos clients en carrousel.
 * Source : 5x le même fichier images/resource/client.png (duplication réelle
 * du HTML d'origine, reproduite telle quelle).
 * Carrousel (script.js) : loop, autoplay, margin 10px, nav: false,
 * dots par défaut (Owl Carousel), breakpoints 0/480/600/768/1023 → 1/2/3/4/5 items.
 */
export function ClientsSection() {
  const clients = [1, 2, 3, 4, 5];

  return (
    <section className="clients-section relative py-[75px]">
      <div className="auto-container">
        <div className="sponsors-outer">
          <Carousel
            responsive={{ 0: 1, 480: 2, 600: 3, 768: 4, 1023: 5 }}
            gap={10}
            loop
            autoplayMs={5000}
            nav={false}
          >
            {clients.map((client) => (
              <li
                key={client}
                className="slide-item relative list-none overflow-hidden text-center transition-all duration-300 ease-in-out"
              >
                <a
                  href="#"
                  className="relative block transition-colors duration-300 ease-in-out hover:bg-white/10"
                >
                  <Image
                    src="/images/resource/client.png"
                    alt=""
                    width={130}
                    height={30}
                    className="inline-block h-auto w-auto max-w-full opacity-30 transition-opacity duration-300 ease-in-out hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
