import Head from "next/head";
import { previewGate } from "../../lib/preview";
import {
  PreviewMain,
  PreviewBadge,
  PreviewTitle,
  PreviewNote,
  PreviewLink,
} from "../../styles/preview.styles";

const HomeV2 = () => {
  return (
    <>
      <Head>
        <title>homepage v2 — preview</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <PreviewMain>
        <PreviewBadge>preview · v2</PreviewBadge>
        <PreviewTitle>Homepage v2</PreviewTitle>
        <PreviewNote>
          Placeholder. Phase 3 builds this.{" "}
          <PreviewLink href="/v2/portfolio">Portfolio v2 →</PreviewLink>
        </PreviewNote>
      </PreviewMain>
    </>
  );
};

export const getStaticProps = previewGate;

export default HomeV2;
