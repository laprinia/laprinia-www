import ContentCarousel from "../ContentCarousel/ContentCarousel";
import { useState } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Container,
  ImageNumberContainer,
  MediaContainer,
} from "./CarouselContainer.styles";

const CarouselContainer = ({
  items,
}: {
  items: { type: string; src: string }[];
}) => {
  const [index, setIndex] = useState(0);

  return (
    <Container aria-labelledby="media-carousel">
      <MediaContainer>
        <VisuallyHidden.Root asChild>
          <h2 id="media-carousel">Media Carousel</h2>
        </VisuallyHidden.Root>
        <ContentCarousel items={items} index={index} setIndex={setIndex} />
      </MediaContainer>
      <ImageNumberContainer aria-labelledby="figure-number">
        <p>
          fig. {index + 1}/{items.length}
        </p>
      </ImageNumberContainer>
    </Container>
  );
};

export default CarouselContainer;
