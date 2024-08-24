import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2.5rem;

  button {
    width: 2rem;
    height: 2rem;
    border: none;
    background-color: var(--accent-color);
    padding: 0.5rem;

    img {
      transition: transform 0.3s ease-in-out;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }

    &:hover {
      cursor: pointer;
      background-color: var(--darker-accent-color);
    }

    &:hover img {
      transform: scale(1.1);
    }
  }
`;

const ButtonContainer = ({
  buttons,
}: {
  buttons: {
    imageSrc: string;
    alt: string;
    link: string;
  }[];
}) => {
  return (
    <Container>
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => (window.location.href = button.link)}
        >
          <img src={button.imageSrc} alt={button.alt} />
        </button>
      ))}
    </Container>
  );
};

export default ButtonContainer;
