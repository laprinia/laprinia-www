import React from "react";
import styled from "styled-components";

const Container = styled.aside`
  width: 35%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 0.25rem solid var(--accent-color);
  padding: 1rem 1rem 1rem;
  box-sizing: border-box;
`;

const HeadshotImage = styled.img`
  flex: 1 1 auto;
  object-fit: contain;
  width: 100%;
  max-height: 80%;
`;

const HeadshotButtonContainer = styled.nav`
  width: 100%;
  height: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 0.5rem;
  align-items: flex-end;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const HeadshotButton = styled.button`
  width: auto;
  height: auto;
  font-size: var(--font-size-M);
  margin: 0 0.25rem;
  border: none;
  background: var(--accent-color);
  color: white;
  box-sizing: border-box;
  padding: 0 1rem;
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
        <HeadshotButton id="button-1">LinkedIn</HeadshotButton>
        <HeadshotButton id="button-2">Behance</HeadshotButton>
        <HeadshotButton id="button-3">GitHub</HeadshotButton>
        <HeadshotButton id="button-4">Instagram</HeadshotButton>
      </HeadshotButtonContainer>
    </Container>
  );
};

export default HeadshotComponent;
