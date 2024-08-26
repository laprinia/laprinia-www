import React from "react";
import NavBar from "../organisms/NavBar/NavBar";
import { navItems } from "../consts";
import Layout from "../organisms/Layout/Layout";
import ContactForm from "../organisms/ContactForm/ContactForm";

const Contact = () => (
  <Layout>
    <NavBar items={navItems} highlightedIndex={1} />
    <ContactForm />
  </Layout>
);

export default Contact;
