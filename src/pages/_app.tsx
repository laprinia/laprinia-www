import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globalStyle";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/system";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>laprinia</title>
        <meta
          name="description"
          content="Hi! I am Lavinia, an experienced Web Developer based in Bucharest. Currently available for work."
        />
        <meta
          name="keywords"
          content="Web Developer, Index, Hire Developer, Frontend Romania,Freelance Developer Romania, Javascript, React, Typescript, Next.js, HTML, CSS, UI/UX Designer, Responsive Design, WebGL, 3D Rendering, TouchDesigner, laprinia, laprinion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
};

export default App;
