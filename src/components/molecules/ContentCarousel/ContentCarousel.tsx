import Image from "next/image";
import { cloudinaryUrl } from "../../../lib/cloudinary";
import {
  CarouselContent,
  CarouselWrapper,
  ClickableArea,
  Media,
} from "./ContentCarousel.styles";

const Carousel = ({
  items,
  index,
  setIndex,
}: {
  items: { type: string; src: string }[];
  index: number;
  setIndex: any;
}) => {
  const handlePrevious = () => {
    setIndex((prevIndex: any) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setIndex((prevIndex: any) => (prevIndex + 1) % items.length);
  };

  return (
    <CarouselWrapper>
      {items.map((item, i) => (
        <CarouselContent
          key={i}
          active={i === index}
          aria-live="polite"
          aria-atomic="true"
        >
          <Media>
            {item.type === "video" ? (
              <video
                src={cloudinaryUrl(item.src)}
                autoPlay
                muted
                loop
                playsInline
                aria-label={`Video ${i + 1}`}
                preload="metadata"
              />
            ) : (
              <Image
                src={item.src}
                alt={`Image ${i + 1}`}
                loading="lazy"
                width={700}
                height={700}
                quality={75}
              />
            )}
          </Media>
        </CarouselContent>
      ))}
      <ClickableArea left onClick={handlePrevious} aria-label="Previous item" />
      <ClickableArea right onClick={handleNext} aria-label="Next item" />
    </CarouselWrapper>
  );
};

export default Carousel;
