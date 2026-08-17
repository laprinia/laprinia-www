import styled from "styled-components";

export const Card = styled.article`
  --card-space: 1.5rem;
  --card-space-tight: 0.5rem;
  --card-padding: clamp(1.25rem, 2.5vw, 2rem);
  --pill-ink: var(--section-ink);

  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  gap: var(--card-space);
  padding: var(--card-padding);
  background-color: var(--notebook-background);
  color: var(--section-ink);
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--card-space-tight);
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--card-space);
`;

export const Title = styled.h3`
  min-width: 0;
  font-family: var(--font-heading);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.95;
  font-size: var(--font-size-title);
`;

export const Description = styled.p`
  font-size: var(--font-size-body);
  line-height: 1.5;
  max-width: 46ch;
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--card-space-tight);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Thumb = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  min-height: 0;
  aspect-ratio: 16 / 10;
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: var(--section-ink);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
