import { redirect } from "next/navigation";

/**
 * Ancienne page générique de détail service, remplacée par les pages
 * dédiées `/services/[slug]` (cf. seo/implementation-plan.md, Lot 2).
 * Redirigée pour éviter la cannibalisation et le contenu dupliqué.
 */
export default function ServiceDetailsRedirect() {
  redirect("/services");
}
