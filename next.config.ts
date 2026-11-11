import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Tailwind : inliner le CSS dans le <head> retire la requête bloquant le rendu (LCP/FCP).
    inlineCss: true,
  },
};

export default nextConfig;
