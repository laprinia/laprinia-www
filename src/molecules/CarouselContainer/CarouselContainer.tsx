import ContentCarousel from "../ContentCarousel/ContentCarousel";
import React from "react";
import styled from "styled-components";

const Container = styled.article`
  flex: 0 0 60%;
  //margin-right: 1rem;
  border-right: 0.25rem solid var(--accent-color);

  @media (max-width: 900px) {
    border: none;
    flex: 0 0 20rem;
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const CarouselContainer = ({
  items,
}: {
  items: { type: string; src: string }[];
}) => {
  return (
    <Container aria-labelledby="media-carousel">
      <h2 hidden id="media-carousel">
        Media Carousel
      </h2>
      <ContentCarousel items={items} />
    </Container>
  );
};

export default CarouselContainer;
