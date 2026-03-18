import NavBar from "../components/organisms/NavBar/NavBar";
import { navItems } from "../consts";
import Layout from "../components/organisms/Layout/Layout";
import { PageContent } from "../components/organisms/Layout/Layout.styles";
import ContactForm from "../components/organisms/ContactForm/ContactForm";

const Contact = () => (
  <Layout>
    <NavBar items={navItems} highlightedIndex={1} />
    <PageContent>
      <ContactForm />
    </PageContent>
  </Layout>
);

export default Contact;
