import Seo from "../components/Seo/Seo";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import NavBar from "../components/organisms/NavBar/NavBar";
import Footer from "../components/v2/Footer/Footer";
import Notebook from "../components/v2/Notebook/Notebook";
import ContactForm from "../components/v2/ContactForm/ContactForm";
import { navItems } from "../consts";
import { contactHeading, contactId } from "../consts.v2.contact";
import { ContactGround, ContactPanel } from "../styles/contact.v2.styles";

const ContactV2 = () => (
  <>
    <Seo
      title="Contact - Lavinia Dumitrenco"
      description="Get in touch about product design, design systems or frontend work."
      path="/contact"
    />
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

export default ContactV2;
