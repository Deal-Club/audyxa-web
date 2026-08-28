"use client";

import type { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PostItem {
  image: string;
  title: string;
}

type CommentEntry =
  | { kind: "plain"; line1: string; line2: string }
  | { kind: "named"; name: string; suffix: string; sub: string };

const LATEST_POSTS: PostItem[] = [
  { image: "/images/resource/news-1.jpg", title: "Top crypto exchange influencers" },
  { image: "/images/resource/news-2.jpg", title: "Necessity may give us best virtual court" },
  { image: "/images/resource/news-3.jpg", title: "You should know about business plan" },
];

const CATEGORIES = [
  "Business",
  "Digital Agency",
  "Introductions",
  "New Technologies",
  "Parallax Effects",
  "Web Development",
];

const TAGS = ["Consulting", "Agency", "Business", "Digital", "Experience", "Technology"];

/**
 * Contenu de démo verbatim de `.sidebar__comments-list` : deux gabarits de
 * markup alternés — un placeholder générique déjà présent dans le thème
 * source (proche du "A WordPress Commenter" par défaut de WordPress), pas
 * un commentaire réel ni un contenu inventé pour ce clone.
 */
const RECENT_COMMENTS: CommentEntry[] = [
  { kind: "plain", line1: "A wordpress commenter on", line2: "launch new mobile app" },
  { kind: "named", name: "John Doe", suffix: "on template:", sub: "comments" },
  { kind: "plain", line1: "A wordpress commenter on", line2: "launch new mobile app" },
  { kind: "named", name: "John Doe", suffix: "on template:", sub: "comments" },
];

const widgetClass = "rounded-[10px] bg-[#f8f6f1] text-theme-1";

/**
 * Colonne droite de `.blog-details` (news-details.html) : recherche,
 * derniers articles, catégories, tags, commentaires récents.
 *
 * `.sidebar__category-list li a span.icon-right-arrow` n'a aucune règle de
 * contenu/glyphe dans style.css (pas de police d'icône associée) : span vide
 * conservé pour la fidélité du markup et de l'animation de survol
 * (scale 0 -> 1), sans glyphe inventé — comportement identique au site
 * source où cet élément reste invisible.
 */
export function NewsDetailsSidebar() {
  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="mt-[50px] w-full px-[15px] [@media(min-width:992px)]:mt-0 [@media(min-width:992px)]:w-[41.6667%] [@media(min-width:1200px)]:w-[33.3333%]">
      {/* sidebar__search */}
      <form onSubmit={handleSearchSubmit} className="relative">
        <input
          type="search"
          placeholder="Search here"
          className="h-[74px] w-full rounded-[10px] border-none bg-theme-2 py-0 pr-[80px] pl-[30px] text-base font-medium text-white outline-none placeholder:text-white [@media(min-width:768px)]:pl-[50px]"
        />
        <button
          type="submit"
          aria-label="Rechercher"
          className="absolute top-0 right-0 bottom-0 flex w-[42px] items-center justify-center border-none bg-transparent text-[22px] text-white outline-none [@media(min-width:768px)]:w-[72px]"
        >
          <i className="lnr-icon-search" aria-hidden />
        </button>
      </form>

      {/* sidebar__post */}
      <div className={cn(widgetClass, "mt-[30px] overflow-hidden px-[30px] pt-[46px] pb-[30px]")}>
        <h3 className="mb-[5px] ml-0 text-xl font-bold [@media(min-width:768px)]:ml-5">
          Latest Posts
        </h3>
        <ul className="m-0 list-none">
          {LATEST_POSTS.map((post) => (
            <li
              key={post.title}
              className="mt-[11px] flex items-center rounded-[10px] py-4 transition-all duration-500 first:mt-0 hover:bg-white"
            >
              <div className="relative mr-5 h-[64px] w-[80px] shrink-0 overflow-hidden rounded-[10px]">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="relative -top-[3px]">
                <h3 className="m-0 text-base leading-6 tracking-normal">
                  <span className="mb-1 block text-sm font-medium text-[#757873]">
                    <i className="fas fa-user-circle mr-[3px] text-theme-2" aria-hidden /> Admin
                  </span>
                  <Link
                    href="/news/details"
                    className="block font-bold text-[#0e2207] transition-colors duration-500 hover:text-theme-2"
                  >
                    {post.title}
                  </Link>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* sidebar__category */}
      <div className={cn(widgetClass, "mt-[30px] overflow-hidden px-[30px] pt-[45px] pb-[38px]")}>
        <h3 className="mb-[9px] ml-5 text-xl font-bold">Categories</h3>
        <ul className="m-0 list-none">
          {CATEGORIES.map((category) => (
            <li key={category} className="mt-1 first:mt-0">
              <Link
                href="/news/details"
                className={cn(
                  "relative flex items-center justify-between rounded-[10px] px-5 py-3 text-base font-medium text-[#757873] transition-all duration-500 hover:bg-white hover:text-[#0e2207] hover:shadow-[0_10px_60px_rgba(0,0,0,0.05)]",
                  category === "Digital Agency" &&
                    "bg-white text-[#0e2207] shadow-[0_10px_60px_rgba(0,0,0,0.05)]"
                )}
              >
                {category}
                <span className="icon-right-arrow text-base text-theme-2" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* sidebar__tags */}
      <div className={cn(widgetClass, "mt-[30px] overflow-hidden px-[45px] pt-[46px] pb-[50px]")}>
        <h3 className="mb-[25px] ml-[5px] text-xl font-bold">Tags</h3>
        <div className="-mt-[10px]">
          {TAGS.map((tag) => (
            <Link
              key={tag}
              href="/news/details"
              className="mt-[10px] ml-[5px] inline-block rounded-[30px] bg-white px-[28px] py-[5px] text-sm text-[#0e2207] transition-all duration-[400ms] hover:bg-theme-1 hover:text-white"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* sidebar__comments */}
      <div className={cn(widgetClass, "mt-[30px] overflow-hidden px-[50px] pt-[46px] pb-[43px]")}>
        <h3 className="mb-[25px] text-xl font-bold">Recent Comments</h3>
        <ul className="m-0 list-none">
          {RECENT_COMMENTS.map((comment, i) => (
            <li key={i} className="group relative mt-[23px] pl-[65px] first:mt-0">
              <div className="absolute top-0 left-0 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-theme-1 text-[15px] text-white transition-all duration-[400ms] group-hover:bg-theme-2">
                <i className="fas fa-comments" aria-hidden />
              </div>
              {comment.kind === "plain" ? (
                <p className="m-0 text-[15px] leading-[26px] font-medium">
                  {comment.line1}
                  <br />
                  {comment.line2}
                </p>
              ) : (
                <>
                  <p className="m-0 text-[15px] leading-[26px] font-medium">
                    <span className="text-[#0e2207]">{comment.name}</span> {comment.suffix}
                  </p>
                  <h5 className="m-0 text-[15px] leading-[26px] font-medium text-[#757873]">
                    {comment.sub}
                  </h5>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
