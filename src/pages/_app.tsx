import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globalStyle";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/system";
import ErrorBoundary from "../components/templates/ErrorBoundary/ErrorBoundary";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource-variable/atkinson-hyperlegible-next";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <Head>
        <title>laprinia</title>
        <meta
          name="description"
          content="Hi! I am Lavinia, an experienced Web Developer based in Bucharest. Currently available for work."
        />
        <meta
          name="keywords"
          content="Design Engineer, Web Developer, Index, Hire Developer, Frontend Romania, Freelance Developer Romania, Javascript, React, Typescript, Next.js, HTML, CSS, UI/UX Designer, Responsive Design, WebGL, 3D Rendering, TouchDesigner, laprinia, laprinion, Lavinia Dumitrenco, Figma, Figma MCP, Figma Plugin Development, Adobe Photoshop, Adobe Illustrator, Adobe Rush, Adobe XD, Design Systems, Design Tokens, Accessibility, SEO, Figma, Figma MCP, Figma Plugin Development, Adobe Photoshop, Adobe Illustrator, Adobe Rush, Adobe XD, Design Systems, Design Tokens, Accessibility, SEO"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <NextUIProvider>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </NextUIProvider>
    </>
  );
};

export default App;
