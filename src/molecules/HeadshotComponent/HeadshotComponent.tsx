import React from "react";
import styled from "styled-components";

const Container = styled.aside`
  width: 35%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-right: 0.25rem solid var(--accent-color);
  padding-bottom: 2rem;
`;

const HeadshotImage = styled.img`
  flex: 0 0 80%;
  object-fit: contain;
  width: 100%;
  height: auto;
`;

const HeadshotButtonContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 20%;
`;

const HeadshotButton = styled.button`
  width: 3rem;
  height: 3rem;
  margin: 0 0.25rem;
  border: none;
  background: gray;
  box-sizing: border-box;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const HeadshotComponent = () => {
  return (
    <Container>
      <HeadshotImage src="/headshot.png" alt="Headshot" />
      <HeadshotButtonContainer aria-labelledby="headshot-buttons">
        <HeadshotButton id="button-1">1</HeadshotButton>
        <HeadshotButton id="button-2">2</HeadshotButton>
        <HeadshotButton id="button-3">3</HeadshotButton>
        <HeadshotButton id="button-4">4</HeadshotButton>
      </HeadshotButtonContainer>
    </Container>
  );
};

export default HeadshotComponent;
