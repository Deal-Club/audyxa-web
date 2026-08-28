"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

interface Comment {
  name: string;
  date: string;
  text: string;
}

const DESCRIPTION_LIST = [
  "Nam at elit nec neque suscipit gravida.",
  "Aenean egestas orci eu maximus tincidunt.",
  "Curabitur vel turpis id tellus cursus laoreet.",
];

const COMMENTS: Comment[] = [
  {
    name: "Jon D. William",
    date: "10 Jan, 2023 . 4:00 pm",
    text: "Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo.",
  },
  {
    name: "Aleesha Brown",
    date: "12 Feb, 2023 . 8:00 pm",
    text: "Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo.",
  },
];

const fieldClass =
  "block w-full border border-[#f4f5f8] bg-[#f4f5f8] px-[30px] py-[14px] text-[0.9rem] text-[#686a6f] outline-none placeholder:text-[#686a6f]";

/**
 * `.product-description` (`.product-discription`, faute d'origine conservée
 * uniquement dans le nom de classe CSS source, pas dans le texte affiché) :
 * bloc d'onglets Description / Reviews (`.tabs-box`), reproduit en state
 * React (`activeTab`) — comportement vérifié dans script.js:612-624
 * (`.tab-btn` au clic retire `active-btn`/`active-tab` de tous les onglets
 * du même `.tabs-box`, les rajoute sur la cible, classe `fadeIn` réutilisée
 * telle quelle depuis `globals.css`).
 *
 * Section sans règle top-level dédiée dans style.css (seulement des
 * sélecteurs `.product-discription …`) : `pt-0 pb-90` du HTML source est la
 * même classe fantôme documentée dans BEHAVIORS.md, ignorée au profit de la
 * règle générique `section > .container` (120px haut ET bas).
 *
 * Onglet Reviews : formulaire `#contact_form` responsable de l'erreur
 * console connue sur cette page (`$(...).validate is not a function`,
 * shop-product-details.html:737 — jquery.validate.min.js ne s'expose pas
 * sur ce miroir de démo). Reproduit avec la validation HTML5 native
 * (`required`, `type="email"`) plutôt qu'avec le plugin manquant ;
 * `onSubmit` se contente d'un `preventDefault`, sans back-end ni avis
 * fictif posté. Champ `form_botcheck` (honeypot anti-spam du back-end PHP
 * source, `includes/sendmail.php`) omis : sans back-end réel dans ce clone,
 * il n'a aucune fonction. Étoiles `.review-box .rating` (5x `far fa-star`,
 * contour) : purement décoratives dans la source — aucun gestionnaire de
 * clic dans script.js ne leur est associé — reproduites non interactives,
 * sans note de survol inventée.
 */
export function ProductDescriptionTabs() {
  const [activeTab, setActiveTab] = useState<"tab-1" | "tab-2">("tab-1");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="relative">
      <div className="auto-container pt-[120px] pb-[120px]">
        <div className="tabs-box relative">
          <div className="relative mb-[60px] w-full text-center">
            <div className="absolute inset-x-0 top-[28px] h-px bg-[#e1e8e4]" aria-hidden />
            <ul className="relative z-[1] inline-flex flex-wrap justify-center">
              {(
                [
                  { id: "tab-1", label: "Description" },
                  { id: "tab-2", label: "Reviews" },
                ] as const
              ).map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <li key={tab.id} className="mx-[8.5px] mb-[15px] last:mb-0">
                    <button
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      aria-pressed={isActive}
                      className={cn(
                        "inline-block cursor-pointer border border-[#e1e8e4] px-[30px] py-[14px] text-[14px] tracking-wide text-[#1e2434] uppercase transition-all duration-500 ease-in-out",
                        isActive ? "bg-theme-1 text-white" : "bg-white"
                      )}
                    >
                      {tab.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative w-full">
            {activeTab === "tab-1" ? (
              <div className="fadeIn">
                <h3 className="mb-[27px] text-[30px] font-bold text-theme-1">Description</h3>
                <p className="text-body-text">
                  Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are
                  many variations of passages of Lorem Ipsum available, but the majority have
                  alteration in some injected or words which don&apos;t look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum, you need to be
                  sure there isn&apos;t anything embarrang hidden in the middle of text.
                </p>
                <div className="mt-[30px] mb-[30px]">
                  <ul>
                    {DESCRIPTION_LIST.map((item) => (
                      <li key={item} className="mb-[2px] last:mb-0">
                        <p className="m-0 font-semibold text-theme-1">
                          <span className="relative top-[2px] mr-[11px] inline-block text-[17px] leading-[17px] text-theme-1">
                            <i className="fa fa-arrow-right" aria-hidden />
                          </span>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-body-text">
                  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                  as necessary, making this the first true generator on the Internet. It uses a
                  dictionary of over 200 Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                </p>
              </div>
            ) : (
              <div className="fadeIn">
                <div className="mb-[60px] grid grid-cols-1 gap-[30px] [@media(min-width:768px)]:grid-cols-2">
                  {COMMENTS.map((comment) => (
                    <div key={comment.name} className="relative bg-[#f4f5f4] py-[34px] pr-[30px] pl-[125px]">
                      <figure className="absolute top-[40px] left-[30px] h-[80px] w-[80px] overflow-hidden rounded-full bg-theme-3" />
                      <div>
                        <ul className="mb-[2px] flex">
                          {Array.from({ length: 5 }, (_, i) => (
                            <li key={i} className={cn("text-[12px] text-[#fdc009]", i > 0 && "ml-1")}>
                              <i className="fas fa-star" aria-hidden />
                            </li>
                          ))}
                        </ul>
                        <h5 className="mb-4 text-[16px] leading-[26px] font-semibold text-theme-1 uppercase">
                          {comment.name}, <span className="font-normal normal-case">{comment.date}</span>
                        </h5>
                        <p className="m-0 text-body-text">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-[30px] shadow-[0_0_30px_0_rgba(0,0,0,0.1)] [@media(min-width:768px)]:px-[60px] [@media(min-width:768px)]:pt-[51px] [@media(min-width:768px)]:pb-[60px]">
                  <h3 className="mb-[23px] text-[24px] leading-[34px] font-semibold text-theme-1 uppercase">
                    Add Your Comments
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-[15px]">
                      <textarea
                        name="form_message"
                        rows={7}
                        required
                        placeholder="Enter Message"
                        className={cn(fieldClass, "h-auto resize-none py-[15px]")}
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-[15px] [@media(min-width:576px)]:grid-cols-2">
                      <input name="form_name" type="text" placeholder="Enter Name" className={fieldClass} />
                      <input
                        name="form_email"
                        type="email"
                        required
                        placeholder="Enter Email"
                        className={fieldClass}
                      />
                    </div>

                    <div className="mt-[15px]">
                      <p className="float-left mr-[10px] mb-0">Your Review</p>
                      <ul className="float-left flex">
                        {Array.from({ length: 5 }, (_, i) => (
                          <li key={i} className={cn("text-[14px] leading-[28px] text-[#fdc009]", i > 0 && "ml-1")}>
                            <i className="far fa-star" aria-hidden />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="clear-both mt-[15px]">
                      <label className="flex cursor-pointer items-start gap-[10px] text-body-text">
                        <input type="checkbox" className="mt-1" />
                        <span>
                          Save my name, email, and website in this browser for the next time I
                          comment.
                        </span>
                      </label>
                    </div>

                    <div className="mt-[15px]">
                      <button
                        type="submit"
                        className="group relative z-0 inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-[10px] bg-theme-2 px-[50px] py-[15px] text-base font-extrabold leading-7 text-white transition-all duration-500"
                      >
                        <span
                          aria-hidden
                          className="absolute inset-y-0 left-0 -z-10 w-6 rounded-[10px] bg-theme-2-dark transition-[width] duration-300 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:w-full"
                        />
                        <span className="relative z-[2]">Submit Comment</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
