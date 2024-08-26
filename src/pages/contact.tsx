import React from "react";
import NavBar from "../organisms/NavBar/NavBar";
import { navItems } from "../consts";
import Layout from "../organisms/Layout/Layout";
import styled from "styled-components";
import ContactForm from "../organisms/ContactForm/ContactForm";

const ContainerWrapper = styled.main`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0 0rem;
  display: flex;
  flex: 1;
`;

const Contact = () => (
  <Layout>
    <NavBar items={navItems} highlightedIndex={1} />
    <ContainerWrapper>
      <ContactForm />
    </ContainerWrapper>
  </Layout>
);

export default Contact;
