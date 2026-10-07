import { execSync } from "node:child_process";
import type { APIRoute } from "astro";
import { locales, site } from "../i18n/content";

// last change to anything the page is built from, not the build date
const lastmod = (() => {
  try {
    return execSync("git log -1 --format=%cs -- src public", { encoding: "utf8" }).trim();
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
})();

export const GET: APIRoute = () => {
  const alternates = [
    ...locales.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${site.url}/${l}"/>`),
    `<xhtml:link rel="alternate" hreflang="x-default" href="${site.url}/en"/>`,
  ].join("");
  const urls = locales
    .map((l) => `<url><loc>${site.url}/${l}</loc><lastmod>${lastmod}</lastmod>${alternates}</url>`)
    .join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
