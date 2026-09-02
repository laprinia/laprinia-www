import styled, { css, keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Bento = styled.div<{ $count: number }>`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(var(--space-3), 1.5vw, var(--space-5));

  @media (min-width: 700px) {
    ${({ $count }) =>
      $count > 1 &&
      css`
        grid-template-columns: repeat(2, minmax(0, 1fr));
      `}

    ${({ $count }) =>
      $count > 2 &&
      $count % 2 === 1 &&
      css`
        > :first-child {
          grid-column: span 2;
        }
      `}
  }
`;

export const Tile = styled.button<{ $ratio: string }>`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  aspect-ratio: ${({ $ratio }) => $ratio};
  overflow: hidden;
  border: none;
  border-radius: var(--border-radius);
  background-color: transparent;
  cursor: pointer;

  img,
  video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover img,
  &:hover video {
    transform: scale(1.02);
  }

  &:focus-visible {
    outline: 2px solid var(--section-accent);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    img,
    video {
      transition: none;
    }

    &:hover img,
    &:hover video {
      transform: none;
    }
  }
`;

export const ZoomHint = styled.span`
  position: absolute;
  right: var(--space-2);
  bottom: var(--space-2);
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  line-height: 1;
  text-transform: lowercase;
  white-space: nowrap;
  background-color: var(--support-color);
  color: var(--foreground-color);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Tile}:hover &,
  ${Tile}:focus-visible & {
    opacity: 1;
  }

  @media (hover: none) {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const zoomIn = keyframes`
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
`;

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: color-mix(in srgb, var(--neutral-800) 94%, transparent);

  &[data-state="open"] {
    animation: ${fadeIn} 0.25s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-state="open"] {
      animation: none;
    }
  }
`;

export const Lightbox = styled(Dialog.Content)`
  position: fixed;
  inset: 0;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(var(--space-4), 5vw, var(--space-14));

  video {
    display: block;
    max-width: 100%;
    max-height: calc(100svh - clamp(2rem, 10vw, 7rem));
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: var(--border-radius);
    background-color: var(--surface-tint);
  }

  &[data-state="open"] {
    animation: ${zoomIn} 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:focus-visible {
    outline: none;
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-state="open"] {
      animation: none;
    }
  }
`;

export const Frame = styled.div`
  display: grid;
  place-items: center;
  max-width: 100%;
  max-height: calc(100svh - clamp(2rem, 10vw, 7rem));
  overflow: auto;
  overscroll-behavior: contain;
  border-radius: var(--border-radius);
  background-color: var(--surface-tint);

  img {
    display: block;
    max-width: 100%;
    max-height: calc(100svh - clamp(2rem, 10vw, 7rem));
    width: auto;
    height: auto;
    object-fit: contain;
    transform-origin: top left;
    scale: var(--media-zoom, 1);
    cursor: zoom-in;
    transition: scale 0.15s ease-out;
  }

  &[data-zoomed="true"] {
    place-items: start;
  }

  &[data-zoomed="true"] img {
    cursor: zoom-out;
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      transition: none;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: clamp(var(--space-4), 3vw, var(--space-8));
  right: clamp(var(--space-4), 3vw, var(--space-8));
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border: none;
  border-radius: var(--radius-pill);
  background-color: var(--support-color);
  color: var(--foreground-color);
  font-family: var(--font-heading);
  font-size: var(--font-size-ui-sm);
  text-transform: lowercase;
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    transform: scale(1.05);
  }

  &:focus-visible {
    outline: 2px solid var(--support-color);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;
