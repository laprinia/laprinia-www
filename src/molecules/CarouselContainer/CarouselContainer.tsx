import ContentCarousel from "../ContentCarousel/ContentCarousel";
import React, { useState } from "react";
import styled from "styled-components";

const MediaContainer = styled.section`
  height: 95%;
`;

const Container = styled.article`
  flex: 0 0 60%;
  //margin-right: 1rem;
  height: 100%;
  border-right: 0.25rem solid var(--accent-color);

  @media (max-width: 900px) {
    border: none;
    flex: 0 0 20rem;
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const ImageNumberContainer = styled.aside`
  height: 5%;
  width: 100%;
  background-color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  color: white;
  border-right: 0.25rem solid var(--accent-color);
  font-weight: var(--font-weight-semibold);
  @media (max-width: 900px) {
    border: none;
    height: 2rem;
  }
  @media (max-width: 1280px) {
    font-size: var(--font-size-body-desktop);
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-body-tablet);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-body-phone);
  }
  @media (min-width: 1800px) {
    font-size: var(--font-size-body-xl);
  }
`;
const CarouselContainer = ({
  items,
}: {
  items: { type: string; src: string }[];
}) => {
  const [index, setIndex] = useState(0);

  return (
    <Container aria-labelledby="media-carousel">
      <MediaContainer>
        <h2 hidden id="media-carousel">
          Media Carousel
        </h2>
        <ContentCarousel items={items} index={index} setIndex={setIndex} />
      </MediaContainer>
      <ImageNumberContainer aria-labelledby="figure-number">
        <p>fig. {index + 1}</p>
      </ImageNumberContainer>
    </Container>
  );
};

export default CarouselContainer;
