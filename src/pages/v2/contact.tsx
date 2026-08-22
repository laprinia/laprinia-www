import Head from "next/head";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import NavBar from "../../components/organisms/NavBar/NavBar";
import Footer from "../../components/v2/Footer/Footer";
import Notebook from "../../components/v2/Notebook/Notebook";
import ContactForm from "../../components/v2/ContactForm/ContactForm";
import { navItems } from "../../consts";
import { contactHeading, contactId } from "../../consts.v2.contact";
import { previewGate } from "../../lib/preview";
import { V2GlobalStyle } from "../../styles/v2GlobalStyle";
import {
  ContactGround,
  ContactPanel,
} from "../../styles/contact.v2.styles";

const ContactV2 = () => (
  <>
    <Head>
      <title>contact v2 — preview</title>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    <V2GlobalStyle />
    <NavBar
      items={navItems}
      highlightedIndex={1}
      variant="highlight"
      currentHref="/contact"
    />
    <main>
      <ContactGround>
        <ContactPanel>
          <Notebook
            id={contactId}
            background="var(--neutral-000)"
            color="var(--accent-color)"
            radius="0.75rem"
            margin="0rem"
            contentGap="0rem"
            minHeight="0px"
          >
            <VisuallyHidden.Root asChild>
              <h1>{contactHeading}</h1>
            </VisuallyHidden.Root>
            <ContactForm />
          </Notebook>
        </ContactPanel>
      </ContactGround>
    </main>
    <Footer />
  </>
);

export const getStaticProps = previewGate;

export default ContactV2;
