import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Every public page is prerendered to static HTML at build time — the site
// has no server state (the contact form is mailto-based), so it deploys as a
// plain static site. robots.txt and sitemap.xml are static files in public/.
const PAGES = ["/", "/about", "/residence", "/families", "/contact", "/intake", "/privacy"];

export default defineConfig({
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: false,
      },
      pages: PAGES.map((path) => ({ path })),
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
