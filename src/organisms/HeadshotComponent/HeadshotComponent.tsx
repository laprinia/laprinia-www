import React from "react";
import styled from "styled-components";
import { socialButtons } from "../../consts";
import SocialButtonsContainer from "../SocialButtonsContainer/SocialButtonsContainer";
import HeadshotImage from "../../molecules/HeadshotImage/HeadshotImage";

const Container = styled.aside`
  width: 35%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 0.25rem solid var(--accent-color);
  padding: 2rem 2rem 1rem;
  box-sizing: border-box;
`;

const HeadshotComponent = () => {
  return (
    <Container>
      <HeadshotImage src={"/headshot.png"} relativeHeight={"85%"} />
      <SocialButtonsContainer buttons={socialButtons} />
    </Container>
  );
};

export default HeadshotComponent;
