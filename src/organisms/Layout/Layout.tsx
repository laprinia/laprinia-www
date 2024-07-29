import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  padding: 1.25rem;
  max-width: 100%;
  box-sizing: border-box;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
