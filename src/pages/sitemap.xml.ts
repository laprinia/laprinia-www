import type { GetServerSideProps } from "next";
import { allProjects, toProjectSlug } from "../lib/projects";
import { absoluteUrl } from "../consts.seo";

const staticPaths = ["/", "/work", "/about", "/contact"];

const buildSitemap = (): string => {
  const projectPaths = allProjects()
    .filter((project) => project.published)
    .map((project) => `/work/${toProjectSlug(project.name)}`);

  const urls = [...staticPaths, ...projectPaths]
    .map((path) => `  <url><loc>${absoluteUrl(path)}</loc></url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/xml");
  res.setHeader(
    "Cache-Control",
    "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
  );
  res.write(buildSitemap());
  res.end();

  return { props: {} };
};

const Sitemap = () => null;

export default Sitemap;
