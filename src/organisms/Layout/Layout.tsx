import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  //padding: 1.25rem;
  max-width: 100%;
  max-height: 100%;
  min-height: 100vh;
  flex-direction: column;
  box-sizing: border-box;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
