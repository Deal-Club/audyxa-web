import type { NavItem } from "@/types/content";

/**
 * Menu du thème Amiso. Le site source propose 9 variantes de la page
 * d'accueil (Single/Boxed/RTL/Header Styles) : seule index.html est clonée
 * ici, donc "Home" reste un lien simple plutôt qu'un sous-menu vers des
 * pages qui n'existent pas dans ce clone.
 */
export const NAVIGATION: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "About", href: "/about" },
      {
        label: "Projects",
        href: "#",
        children: [
          { label: "Projects List", href: "/projects" },
          { label: "Project Details", href: "/projects/details" },
        ],
      },
      {
        label: "Team",
        href: "#",
        children: [
          { label: "Team List", href: "/team" },
          { label: "Team Details", href: "/team/details" },
        ],
      },
      { label: "Testimonial", href: "/testimonial" },
      { label: "FAQ", href: "/faq" },
      { label: "Page 404", href: "/404-preview" },
    ],
  },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Services List", href: "/services" },
      { label: "Service Details", href: "/services/details" },
    ],
  },
  {
    label: "Shop",
    href: "#",
    children: [
      { label: "Products", href: "/shop" },
      { label: "Products with Sidebar", href: "/shop/sidebar" },
      { label: "Product Details", href: "/shop/product" },
      { label: "Cart", href: "/shop/cart" },
      { label: "Checkout", href: "/shop/checkout" },
    ],
  },
  {
    label: "News",
    href: "#",
    children: [
      { label: "News Grid", href: "/news" },
      { label: "News Details", href: "/news/details" },
    ],
  },
  { label: "Get in Touch", href: "/contact" },
];
