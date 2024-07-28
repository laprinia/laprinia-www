import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  padding: 1.25rem 1.25rem;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
