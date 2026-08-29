import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "../styles/globalStyle";
import { V2GlobalStyle } from "../styles/v2GlobalStyle";
import ErrorBoundary from "../components/templates/ErrorBoundary/ErrorBoundary";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource-variable/atkinson-hyperlegible-next";
import "@fontsource/ibm-plex-mono/400.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <Head>
        <title>home - Lavinia Dumitrenco</title>
        <meta
          name="description"
          content="Lavinia Dumitrenco — product designer and developer in Bucharest. Five years of user research, interaction design and design systems, shipped into production. Currently available for work."
        />
        <meta
          name="keywords"
          content="Product Designer, UX Designer, Product Design Romania, UX Romania, Design Systems, Design Tokens, User Research, Interaction Design, Accessibility, WCAG, Data Visualization, B2B Product Design, Enterprise UX, Figma, Figma Variables, Prototyping, Frontend Developer, React, TypeScript, Next.js, Lavinia Dumitrenco, laprinia, Bucharest"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" key="og:type" />
        <meta
          property="og:site_name"
          content="Lavinia Dumitrenco"
          key="og:site_name"
        />
        <meta
          property="og:title"
          content="Lavinia Dumitrenco — product designer &amp; developer"
          key="og:title"
        />
        <meta
          property="og:description"
          content="Product designer and developer in Bucharest. Five years of user research, interaction design and design systems, shipped into production."
          key="og:description"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter:card"
        />
      </Head>
      <GlobalStyle />
      <V2GlobalStyle />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
};

export default App;
