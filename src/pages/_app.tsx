import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "../styles/globalStyle";
import { V2GlobalStyle } from "../styles/v2GlobalStyle";
import ErrorBoundary from "../components/templates/ErrorBoundary/ErrorBoundary";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource-variable/atkinson-hyperlegible-next";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/600.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <Head>
        <title>Lavinia Dumitrenco - Technical Product Designer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" key="og:type" />
        <meta
          property="og:site_name"
          content="Lavinia Dumitrenco"
          key="og:site_name"
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
