import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

const CarouselWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: none;
  }
`;

const CarouselContent = styled.figure<{ active: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  opacity: 0;
  transform: translateX(100%);

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`;

const ClickableArea = styled.main<{ right?: boolean; left?: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  cursor: pointer;
  background: rgba(0, 0, 0, 0);

  &:focus {
    outline: 2px solid #fff;
  }

  ${({ left }) =>
    left &&
    css`
      left: 0;
    `}

  ${({ right }) =>
    right &&
    css`
      right: 0;
    `}
`;

const Media = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img,
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media (min-width: 900px) {
      object-fit: scale-down;
    }
  }
`;

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
                src={item.src}
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
