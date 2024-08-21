import React, { useState } from "react";
import styled, { css } from "styled-components";

const CarouselWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
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

const ClickableArea = styled.div<{ right?: boolean; left?: boolean }>`
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

const Arrow = styled.div<{ right: boolean; left: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.8rem;
  opacity: 50%;
  color: #0141d5;
  cursor: pointer;
  border: none;
  padding: 10px;
  z-index: 10;

  &:focus {
    outline: 2px solid #fff; /* Visible focus indicator */
  }

  ${({ left }) =>
    left &&
    css`
      left: 20px;
    `}

  ${({ right }) =>
    right &&
    css`
      right: 20px;
    `}
`;

const Media = styled.div`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img,
  video {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const Carousel = ({ items }: { items: { type: string; src: string }[] }) => {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
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
              <video src={item.src} controls aria-label={`Video ${i + 1}`} />
            ) : (
              <img src={item.src} alt={`Image ${i + 1}`} />
            )}
          </Media>
        </CarouselContent>
      ))}
      <ClickableArea left onClick={handlePrevious} aria-label="Previous item" />
      <ClickableArea right onClick={handleNext} aria-label="Next item" />
      {/*<Arrow left onClick={handlePrevious} aria-label="Previous item">*/}
      {/*  ◀*/}
      {/*</Arrow>*/}
      {/*<Arrow right onClick={handleNext} aria-label="Next item">*/}
      {/*  ▶*/}
      {/*</Arrow>*/}
    </CarouselWrapper>
  );
};

export default Carousel;
