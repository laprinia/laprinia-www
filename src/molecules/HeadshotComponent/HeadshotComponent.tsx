import React from "react";
import styled from "styled-components";
import {
  behanceLink,
  githubLink,
  instagramLink,
  linkedinLink,
} from "../../consts";

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
  justify-content: space-evenly;
  align-items: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const HeadshotButton = styled.a`
  flex: 1 1 auto;
  height: 2rem;
  max-width: 4rem;
  min-width: 4rem;
  font-size: var(--font-size-M);
  border: none;
  background: var(--accent-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0.5rem;
  text-decoration: none;

  img {
    transition: transform 0.3s ease-in-out;
    height: 100%;
    width: auto;
    display: block;
  }

  &:hover {
    cursor: pointer;
    background-color: var(--darker-accent-color);
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const HeadshotComponent = () => {
  return (
    <Container>
      <HeadshotImage src="/headshot.png" alt="Headshot" />
      <HeadshotButtonContainer aria-labelledby="headshot-buttons">
        <HeadshotButton
          id="button-1"
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/social/linkedin.png" alt="LinkedIn logo" />
        </HeadshotButton>
        <HeadshotButton
          id="button-2"
          href={behanceLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/social/behance.png" alt="Behance logo" />
        </HeadshotButton>
        <HeadshotButton
          id="button-3"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/social/github.png" alt="Github logo" />
        </HeadshotButton>
        <HeadshotButton
          id="button-4"
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/social/instagram.png" alt="Instagram logo" />
        </HeadshotButton>
      </HeadshotButtonContainer>
    </Container>
  );
};

export default HeadshotComponent;
