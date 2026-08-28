"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import { ThemeBtn } from "@/components/theme-btn";

interface CommentItem {
  name: string;
  text: string;
}

/**
 * Les deux commentaires de démo de `.comment-one` : contenu réel du thème
 * (texte identique aux paragraphes de l'article), reproduit verbatim — ce
 * n'est pas un commentaire réellement posté, juste le contenu placeholder
 * déjà présent dans le gabarit source.
 */
const COMMENTS: CommentItem[] = [
  {
    name: "Kevin Martin",
    text: "Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.",
  },
  {
    name: "Sarah Albert",
    text: "Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.",
  },
];

const fieldClass =
  "block h-[63px] w-full border border-[#f4f5f8] bg-[#f4f5f8] px-[30px] py-[14px] text-[0.9rem] text-[#686a6f] outline-none placeholder:text-[#686a6f]";

/**
 * Colonne gauche de `.blog-details` (news-details.html) : image d'en-tête +
 * pastille date, méta (auteur/commentaires), titre, corps d'article,
 * tags + réseaux sociaux, navigation prev/next, liste des 2 commentaires de
 * démo, puis formulaire "Leave a Comment".
 *
 * `images/resource/news-details.jpg` (image d'en-tête) et
 * `images/resource/thumb-1.jpg` / `thumb-2.jpg` (avatars des commentaires)
 * répondent tous 404 sur le miroir source (h-k.com.hk/demo/k) : remplacés
 * par des panneaux neutres `bg-theme-3`, sans photo inventée. Le ratio 16/9
 * du panneau d'en-tête est une estimation (le CSS source ne contraint que
 * `width:100%`, la hauteur suit l'image absente) — cohérent avec les autres
 * gabarits d'en-tête du thème.
 *
 * Formulaire de commentaire sans backend réel (hors périmètre du clone) :
 * `onSubmit` se limite à `preventDefault`, aucun commentaire n'est ajouté à
 * la liste.
 */
export function NewsDetailsContent() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="w-full px-[15px] [@media(min-width:992px)]:w-[58.3333%] [@media(min-width:1200px)]:w-[66.6667%]">
      {/* blog-details__img */}
      <div className="relative rounded-[10px]">
        <div className="relative aspect-video overflow-hidden rounded-[10px] bg-theme-3" />
        <div className="absolute right-0 bottom-0 flex flex-col items-center rounded-tl-[10px] rounded-br-[10px] bg-theme-1 px-[24px] pt-[21px] pb-[20px]">
          <span className="text-base leading-4 font-bold text-white">28</span>
          <span className="text-[10px] leading-3 font-bold text-white uppercase">Aug</span>
        </div>
      </div>

      {/* blog-details__content */}
      <div className="mt-[22px]">
        <ul className="flex list-none items-center">
          <li>
            <Link href="/news/details" className="text-[15px] font-medium text-[#777] transition-colors duration-500 hover:text-theme-1">
              <i className="fas fa-user-circle mr-[6px] text-theme-1" aria-hidden /> Admin
            </Link>
          </li>
          <li className="ml-[18px]">
            <Link href="/news/details" className="text-[15px] font-medium text-[#777] transition-colors duration-500 hover:text-theme-1">
              <i className="fas fa-comments mr-[6px] text-theme-1" aria-hidden /> 02 Comments
            </Link>
          </li>
        </ul>

        <h3 className="mt-3 mb-[21px] text-[30px] leading-[40px] font-bold">
          Delivering the best web design agency
        </h3>

        <p className="mb-[15px] text-body-text">
          Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis
          purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec,
          feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat.
          Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl
          pellentesque semper.
        </p>
        <p className="mb-[15px] text-body-text">
          Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis
          purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec,
          feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat.
          Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl
          pellentesque semper.
        </p>
        <p className="text-body-text">
          Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis
          purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec,
          feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat.
          Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl
          pellentesque semper.
        </p>
      </div>

      {/* blog-details__bottom */}
      <div className="mt-[49px] flex flex-wrap items-center justify-between gap-[30px] border-t border-[#ece9e0] py-[30px]">
        <p className="m-0">
          <span className="mr-[14px] text-xl font-bold text-[#0e2207]">Tags</span>
          <Link
            href="/news/details"
            className="ml-[6px] inline-block rounded-[35px] bg-theme-2 px-[30px] py-[5px] text-xs font-bold text-white transition-all duration-500 hover:bg-theme-1"
          >
            Business
          </Link>
          <Link
            href="/news/details"
            className="ml-[6px] inline-block rounded-[35px] bg-theme-2 px-[30px] py-[5px] text-xs font-bold text-white transition-all duration-500 hover:bg-theme-1"
          >
            Agency
          </Link>
        </p>
        <div className="flex items-center">
          {[
            { icon: "fab fa-twitter" },
            { icon: "fab fa-facebook" },
            { icon: "fab fa-pinterest-p" },
            { icon: "fab fa-instagram" },
          ].map((social) => (
            <Link
              key={social.icon}
              href="/news/details"
              className="ml-[10px] flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#f8f6f1] text-[15px] text-theme-1 transition-all duration-500 first:ml-0 hover:bg-theme-2 hover:text-white"
            >
              <i className={social.icon} aria-hidden />
            </Link>
          ))}
        </div>
      </div>

      {/* nav-links */}
      <div className="mb-[53px] flex flex-col gap-5 [@media(min-width:768px)]:flex-row [@media(min-width:768px)]:justify-between">
        <div className="[@media(min-width:768px)]:w-[calc(50%-15px)]">
          <Link
            href="/news/details"
            rel="prev"
            className="inline-block w-full rounded-[10px] bg-[#f8f6f1] p-[30px] text-xl leading-[1.637] font-bold break-words text-theme-1 transition-all duration-500 hover:bg-theme-1 hover:text-white [@media(min-width:768px)]:p-[52px_50px]"
          >
            Bring to the table win-win survival strategies
          </Link>
        </div>
        <div className="[@media(min-width:768px)]:w-[calc(50%-15px)]">
          <Link
            href="/news/details"
            rel="next"
            className="inline-block w-full rounded-[10px] bg-[#f8f6f1] p-[30px] text-xl leading-[1.637] font-bold break-words text-theme-1 transition-all duration-500 hover:bg-theme-1 hover:text-white [@media(min-width:768px)]:p-[52px_50px]"
          >
            How to lead a healthy &amp; well-balanced life
          </Link>
        </div>
      </div>

      {/* comment-one */}
      <div>
        <h3 className="mb-[30px] text-2xl font-bold">2 Comments</h3>

        {COMMENTS.map((comment) => (
          <div
            key={comment.name}
            className="mb-[60px] flex flex-col border-b border-[#ece9e0] pb-[60px] [@media(min-width:768px)]:flex-row"
          >
            <div className="relative shrink-0">
              <div className="h-[100px] w-[100px] rounded-full bg-theme-3" />
            </div>
            <div className="relative mt-5 ml-0 [@media(min-width:768px)]:mt-0 [@media(min-width:768px)]:ml-[45px]">
              <h3 className="mb-6 text-xl">{comment.name}</h3>
              <p className="text-base font-medium text-body-text">{comment.text}</p>
              <ThemeBtn
                href="/news/details"
                className="absolute top-0 right-0 px-[30px] py-[5px] text-sm"
              >
                Reply
              </ThemeBtn>
            </div>
          </div>
        ))}

        {/* comment-form */}
        <div>
          <h3 className="-mt-[7px] mb-[30px] text-2xl font-bold">Leave a Comment</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-[30px] gap-y-3 [@media(min-width:576px)]:grid-cols-2">
              <input name="form_name" type="text" placeholder="Enter Name" className={fieldClass} />
              <input
                name="form_email"
                type="email"
                placeholder="Enter Email"
                className={fieldClass}
              />
            </div>
            <textarea
              name="form_message"
              placeholder="Enter Message"
              rows={5}
              className={`${fieldClass} mt-3 h-auto resize-none py-[15px]`}
            />
            <button
              type="submit"
              className="group relative z-0 mt-3 inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-[10px] bg-theme-2 px-[50px] py-[15px] text-base font-extrabold leading-7 text-white transition-all duration-500"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 -z-10 w-6 rounded-[10px] bg-theme-2-dark transition-[width] duration-300 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:w-full"
              />
              <span className="relative z-[2]">Submit Comment</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
