import styled from "styled-components";

export const AboutGround = styled.div`
  --section-ink: var(--foreground-color);
  --section-accent: var(--accent-color);
  --section-muted: var(--neutral-600);
  --section-surface: var(--background-color);
  --about-rail-width: 17rem;

  min-height: 100svh;
  padding: calc(var(--nav-height) + clamp(var(--space-6), 4vw, var(--space-12)))
    clamp(var(--space-6), 5vw, var(--space-20))
    clamp(var(--space-16), 8vw, var(--space-24));
  box-sizing: border-box;
  color: var(--section-ink);
  background-color: var(--section-surface);
  scroll-margin-top: var(--nav-height);
`;

export const AboutLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(var(--space-10), 5vw, var(--space-16));

  @media (min-width: 1000px) {
    grid-template-columns: var(--about-rail-width) minmax(0, 1fr);
    gap: clamp(var(--space-12), 6vw, var(--space-24));
    align-items: start;
  }
`;

export const Rail = styled.aside`
  display: grid;
  grid-template-columns: clamp(6rem, 28vw, 9rem) minmax(0, 1fr);
  grid-template-areas:
    "portrait name"
    "portrait identity"
    "intro intro"
    "links links";
  gap: var(--space-6) var(--space-4);
  align-items: start;

  @media (min-width: 700px) and (max-width: 999px) {
    grid-template-columns: 14rem minmax(0, 1fr);
    grid-template-areas:
      "portrait name"
      "portrait identity"
      "portrait intro"
      "portrait links";
    gap: clamp(var(--space-6), 3vw, var(--space-8));
  }

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    position: sticky;
    top: calc(var(--nav-height) + clamp(var(--space-6), 4vw, var(--space-12)));
    max-height: calc(100svh - var(--nav-height) - clamp(var(--space-12), 8vw, var(--space-24)));
    overflow-y: auto;
    overscroll-behavior: contain;
  }
`;

export const Portrait = styled.div`
  grid-area: portrait;
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: var(--border-radius);
  background-color: var(--neutral-200);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`;

export const Identity = styled.div`
  grid-area: identity;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

export const Name = styled.h1`
  grid-area: name;
  color: var(--section-accent);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: var(--font-size-title);
  line-height: 0.95;
  text-transform: lowercase;
  text-wrap: balance;
`;

export const NameMark = styled.span`
  display: inline;
  background-image: linear-gradient(
    var(--support-color),
    var(--support-color)
  );
  background-repeat: no-repeat;
  background-position: 0 88%;
  background-size: 100% 0.42em;
  box-decoration-break: clone;

  /* stylelint-disable property-no-vendor-prefix -- Safari needs the prefix */
  -webkit-box-decoration-break: clone;
  /* stylelint-enable property-no-vendor-prefix */
`;

export const Role = styled.p`
  font-size: var(--font-size-ui-sm);
  line-height: 1.4;
  text-transform: lowercase;
`;

export const Location = styled.p`
  color: var(--section-muted);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  text-transform: lowercase;
`;

export const Intro = styled.p`
  grid-area: intro;
  font-size: var(--font-size-ui-sm);
  line-height: 1.5;

  @media (min-width: 1000px) {
    max-width: 34ch;
  }
`;

export const RailLinks = styled.ul`
  grid-area: links;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-6);
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 1000px) {
    flex-direction: column;
    gap: var(--space-2);
  }
`;

export const RailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--section-accent);
  font-family: var(--font-heading);
  font-size: var(--font-size-ui-sm);
  text-transform: lowercase;
  text-underline-offset: 0.25em;

  svg {
    flex-shrink: 0;
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover svg,
  &:focus-visible svg {
    transform: translate(0.15rem, -0.15rem);
  }

  &:focus-visible {
    outline: 2px solid var(--section-accent);
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }

    &:hover svg,
    &:focus-visible svg {
      transform: none;
    }
  }
`;

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-12), 6vw, var(--space-20));
  min-width: 0;
`;

export const Section = styled.section`
  --about-index-width: 8rem;
  --about-index-gap: var(--space-8);

  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  grid-template-areas:
    "index heading"
    "content content";
  gap: var(--space-8) var(--space-3);
  align-items: start;

  @media (min-width: 1000px) {
    grid-template-columns: 3rem minmax(0, 1fr);
    grid-template-areas:
      "index heading"
      ". content";
    gap: clamp(var(--space-5), 2.5vw, var(--space-7)) var(--space-6);
  }
`;

export const SectionIndex = styled.span`
  grid-area: index;
  padding-top: var(--space-1);
  color: var(--section-muted);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);

  @media (min-width: 1000px) {
    padding-top: var(--space-2);
    text-align: right;
  }
`;

export const HeadingSlot = styled.div`
  grid-area: heading;
  min-width: 0;
`;

export const SectionContent = styled.div`
  grid-area: content;
  min-width: 0;
`;

export const Timeline = styled.dl`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-3);
  margin: 0;

  @media (min-width: 700px) {
    grid-template-columns: var(--about-index-width) minmax(0, 1fr);
    gap: var(--space-3) var(--about-index-gap);
  }
`;

export const Period = styled.dt`
  color: var(--section-muted);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);

  @media (min-width: 700px) {
    padding-top: var(--space-1);
  }
`;

export const Detail = styled.dd`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  margin: 0;
`;

export const DetailTitle = styled.span`
  font-size: var(--font-size-body);
  font-weight: 700;
  line-height: 1.35;
`;

export const DetailOrg = styled.span`
  color: var(--section-muted);
  font-size: var(--font-size-ui-sm);
  line-height: 1.35;
`;

export const DetailDescription = styled.span`
  margin-top: var(--space-2);
  max-width: 60ch;
  font-size: var(--font-size-ui-sm);
  line-height: 1.5;
`;

export const Tags = styled.ul`
  --pill-ink: var(--section-accent);

  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    transition:
      background-color 0.25s ease,
      color 0.25s ease;
  }

  li:hover {
    background-color: var(--support-color);
    color: var(--section-accent);
  }

  @media (prefers-reduced-motion: reduce) {
    li {
      transition: none;
    }
  }
`;

export const Groups = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-4);

  @media (min-width: 700px) {
    grid-template-columns: var(--about-index-width) minmax(0, 1fr);
    gap: var(--space-4) var(--about-index-gap);
    align-items: baseline;
  }
`;

export const GroupLabel = styled.h3`
  color: var(--section-muted);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  font-weight: var(--font-weight-regular);
  text-transform: lowercase;
`;

export const HobbyLine = styled.p`
  max-width: 52ch;
  color: var(--section-muted);
  font-size: var(--font-size-body);
  line-height: 1.5;
`;

export const Pairs = styled.dl`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-3);
  margin: 0;

  @media (min-width: 700px) {
    grid-template-columns: var(--about-index-width) minmax(0, 1fr);
    gap: var(--space-3) var(--about-index-gap);
  }
`;

export const PairLabel = styled.dt`
  font-size: var(--font-size-body);
  text-transform: lowercase;
`;

export const PairValue = styled.dd`
  margin: 0;
  color: var(--section-muted);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  text-transform: lowercase;
`;
