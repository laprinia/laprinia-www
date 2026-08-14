import Head from "next/head";
import { previewGate } from "../../../lib/preview";
import {
  PreviewMain,
  PreviewBadge,
  PreviewTitle,
  PreviewNote,
  PreviewLink,
} from "../../../styles/preview.styles";

const PortfolioV2 = () => {
  return (
    <>
      <Head>
        <title>portfolio v2 — preview</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <PreviewMain>
        <PreviewBadge>preview · v2</PreviewBadge>
        <PreviewTitle>Portfolio v2</PreviewTitle>
        <PreviewNote>
          Placeholder. Phase 4 builds this.{" "}
          <PreviewLink href="/v2">← Homepage v2</PreviewLink>
        </PreviewNote>
      </PreviewMain>
    </>
  );
};

export const getStaticProps = previewGate;

export default PortfolioV2;
