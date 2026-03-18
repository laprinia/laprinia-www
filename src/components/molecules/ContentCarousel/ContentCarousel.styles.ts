import styled, { css } from "styled-components";

export const CarouselWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselContent = styled.figure<{ active: boolean }>`
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

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--neutral-000);
  mix-blend-mode: difference;
  padding: 0;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-50%) scale(1.15);
  }

  @media (max-width: 900px) {
    width: 2.25rem;
    height: 2.25rem;
  }
`;

export const LeftArrow = styled(ArrowButton)`
  left: 1rem;

  @media (max-width: 900px) {
    left: 0.5rem;
  }
`;

export const RightArrow = styled(ArrowButton)`
  right: 1rem;

  @media (max-width: 900px) {
    right: 0.5rem;
  }
`;

export const ArrowIcon = styled.span`
  font-size: 1.1rem;
  font-weight: var(--font-weight-semibold);
  color: #000000;
  line-height: 1;
  user-select: none;
  pointer-events: none;
`;

export const Media = styled.section`
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
