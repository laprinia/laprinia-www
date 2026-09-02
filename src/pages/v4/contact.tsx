import Head from "next/head";
import type { GetStaticProps } from "next";
import NavBar from "../../components/organisms/NavBar/NavBar";
import Bloom from "../../components/v4/Bloom/Bloom";
import ContactPageV4 from "../../components/v4/Contact/ContactPage";
import Footer from "../../components/v2/Footer/Footer";
import { Stage, FooterSlot } from "../../components/v4/stage.styles";
import {
  v4ContactPageDescription,
  v4ContactPageTitle,
  v4NavItems,
} from "../../consts.v4";

const ContactV4 = () => (
  <>
    <Head>
      <title>{v4ContactPageTitle}</title>
      <meta name="description" content={v4ContactPageDescription} />
      <meta name="robots" content="noindex, nofollow" />
    </Head>

    <NavBar
      items={v4NavItems}
      highlightedIndex={0}
      variant="highlight"
      layout="grouped"
      homeHref="/v4/home"
      currentHref="/v4/contact"
    />

    <Stage>
      <Bloom />
      <ContactPageV4 />
      <FooterSlot>
        <Footer />
      </FooterSlot>
    </Stage>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.VERCEL_ENV === "production") {
    return { notFound: true };
  }

  return { props: {} };
};

export default ContactV4;
