import styled from "styled-components";
import React, { ReactNode } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--background-color);
`;

const DummyContainer = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

export default DummyContainer;
