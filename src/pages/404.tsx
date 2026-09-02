import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ErrorState from "../components/ErrorState/ErrorState";
import { navItems } from "../consts";

const Custom404 = () => (
  <>
    <Head>
      <title>page not found - Lavinia Dumitrenco</title>
      <meta name="robots" content="noindex" />
    </Head>
    <NavBar items={navItems} highlightedIndex={0} variant="highlight" />
    <ErrorState
      code="error 404"
      title="this page went"
      highlight="missing"
      message="The link may be out of date, or the page may have moved. The work is all still here."
      actionLabel="see the work"
      actionHref="/work"
    />
    <Footer />
  </>
);

export default Custom404;
