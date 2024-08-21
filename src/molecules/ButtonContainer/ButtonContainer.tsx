import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2.5rem;

  button {
    width: 2rem;
    height: 2rem;
    padding: 0;
    border: none;
    background: none;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
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
