import type { GetStaticProps } from "next";

/**
 * Server-side only — deliberately not NEXT_PUBLIC_*, so the flag never reaches
 * the client bundle and can only be read from getStaticProps/getServerSideProps.
 *
 * Set ENABLE_PREVIEW=true in .env.local. It must never be set in Vercel:
 * that omission is what keeps the redesign routes out of production.
 */
export const isPreviewEnabled = (): boolean =>
  process.env.ENABLE_PREVIEW === "true";

/**
 * Shared gate for every /v2 route. Read at build time, so with the flag unset
 * the page is baked as a 404 and renders src/pages/404.tsx.
 */
export const previewGate: GetStaticProps = async () => {
  if (!isPreviewEnabled()) {
    return { notFound: true };
  }

  return { props: {} };
};
