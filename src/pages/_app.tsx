import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globalStyle";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/system";
import ErrorBoundary from "../templates/ErrorBoundary/ErrorBoundary";
import CustomCursor from "../molecules/CustomCursor/CustomCursor";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <CustomCursor />
      <Head>
        <title>laprinia</title>
        <meta
          name="description"
          content="Hi! I am Lavinia, an experienced Web Developer based in Bucharest. Currently available for work."
        />
        <meta
          name="keywords"
          content="Web Developer, Index, Hire Developer, Frontend Romania, Freelance Developer Romania, Javascript, React, Typescript, Next.js, HTML, CSS, UI/UX Designer, Responsive Design, WebGL, 3D Rendering, TouchDesigner, laprinia, laprinion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          as="font"
          type="font/woff2"
        />
      </Head>
      {process.env.NODE_ENV === "development" && (
        <Script
          src="/_next/static/chunks/react-refresh.js"
          strategy="beforeInteractive"
        />
      )}
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
