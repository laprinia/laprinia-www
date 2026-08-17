import type { GetStaticProps } from "next";

export const isPreviewEnabled = (): boolean =>
  process.env.ENABLE_PREVIEW === "true";

export const previewGate: GetStaticProps = async () => {
  if (!isPreviewEnabled()) {
    return { notFound: true };
  }

  return { props: {} };
};
