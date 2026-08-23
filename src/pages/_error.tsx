import Head from "next/head";
import NavBar from "../components/organisms/NavBar/NavBar";
import Footer from "../components/v2/Footer/Footer";
import ErrorState from "../components/v2/ErrorState/ErrorState";
import { navItems } from "../consts";

const ErrorPage = ({ statusCode }: { statusCode?: number }) => (
  <>
    <Head>
      <title>something went wrong — Lavinia Dumitrenco</title>
      <meta name="robots" content="noindex" />
    </Head>
    <NavBar items={navItems} highlightedIndex={0} variant="highlight" />
    <ErrorState
      code={statusCode ? `error ${statusCode}` : "error"}
      title="something went"
      highlight="sideways"
      message="That is on my end, not yours. Try again in a moment, or head back to the homepage."
    />
    <Footer />
  </>
);

ErrorPage.getInitialProps = ({
  res,
  err,
}: {
  res?: { statusCode: number };
  err?: { statusCode?: number };
}) => ({ statusCode: res?.statusCode ?? err?.statusCode ?? 404 });

export default ErrorPage;
