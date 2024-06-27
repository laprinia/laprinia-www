import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globalStyle";
import Head from "next/head";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Lavinia Dumitrenco Web Developer</title>
        <meta
          name="description"
          content="Hi! I am Lavinia, an experienced Web Developer based in Buchares. Currently available for work."
        />
        <meta
          name="keywords"
          content="Web Developer, Portfolio, Hire Developer, Frontend Romania,Freelance Developer Romania, Javascript, React, Typescript, Next.js, HTML, CSS, UI/UX Designer, Responsive Design, WebGL, 3D Rendering, TouchDesigner"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
