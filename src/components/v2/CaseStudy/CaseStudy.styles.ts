import styled from "styled-components";

export const CaseGround = styled.div`
  --section-ink: var(--foreground-color);
  --section-accent: var(--accent-color);
  --section-muted: var(--neutral-600);
  --section-surface: var(--background-color);
  --case-rail-width: 17rem;
  --case-gutter: clamp(var(--space-6), 5vw, var(--space-20));
  --case-column: 68rem;
  --case-measure: 100%;
  --case-index-width: 3rem;
  --case-index-gap: var(--space-6);

  min-height: 100svh;
  padding: calc(var(--nav-height) + clamp(var(--space-6), 4vw, var(--space-12)))
    var(--case-gutter) clamp(var(--space-16), 8vw, var(--space-24));
  color: var(--section-ink);
  background-color: var(--section-surface);
  scroll-margin-top: var(--nav-height);
`;

export const CaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-8), 4vw, var(--space-12));

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: var(--case-rail-width) minmax(0, 1fr);
    grid-template-areas:
      "rail walk"
      "rail content";
    column-gap: clamp(var(--space-12), 6vw, var(--space-24));
    row-gap: clamp(var(--space-12), 6vw, var(--space-20));
    align-items: start;
  }
`;

export const WalkthroughSlot = styled.div`
  order: 2;
  min-width: 0;

  @media (min-width: 1000px) {
    grid-area: walk;
  }
`;

export const Rail = styled.aside`
  display: contents;

  @media (min-width: 1000px) {
    grid-area: rail;
    display: flex;
    flex-direction: column;
    gap: clamp(var(--space-6), 3vw, var(--space-9));
    position: sticky;
    top: calc(var(--nav-height) + clamp(var(--space-6), 4vw, var(--space-12)));
    max-height: calc(
      100svh - var(--nav-height) - clamp(var(--space-12), 8vw, var(--space-24))
    );
    overflow-y: auto;
    overscroll-behavior: contain;
  }
`;

export const BackLink = styled.a`
  order: 1;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  align-self: start;
  padding-left: var(--space-1);
  margin-left: calc(var(--space-1) * -1);
  color: var(--section-accent);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  text-transform: lowercase;
  text-decoration: none;

  svg {
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover svg,
  &:focus-visible svg {
    transform: translateX(-0.25rem);
  }

  &:hover span,
  &:focus-visible span {
    text-decoration: underline;
    text-underline-offset: 0.25em;
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

export const ProjectName = styled.h1`
  order: 3;
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
  background-image: linear-gradient(var(--support-color), var(--support-color));
  background-repeat: no-repeat;
  background-position: 0 88%;
  background-size: 100% 0.42em;
  box-decoration-break: clone;

  /* stylelint-disable property-no-vendor-prefix -- Safari needs the prefix */
  -webkit-box-decoration-break: clone;
  /* stylelint-enable property-no-vendor-prefix */
`;

export const RailFacts = styled.dl`
  order: 4;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-5);
  margin: 0;
`;

export const FactTerm = styled.dt`
  margin-bottom: var(--space-2);
  color: var(--section-muted);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  text-transform: lowercase;
`;

export const FactValue = styled.dd`
  margin: 0;
  font-size: var(--font-size-ui-sm);
  line-height: 1.4;
`;

export const RoleList = styled.ul`
  --pill-ink: var(--section-ink);

  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const RailLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin: 0;
  padding: 0;
  list-style: none;
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

export const Content = styled.div`
  order: 5;
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-12), 6vw, var(--space-20));
  min-width: 0;
  max-width: var(--case-column);
`;

export const Article = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-4);
  scroll-margin-top: calc(var(--nav-height) + var(--space-8));

  @media (min-width: 700px) {
    grid-template-columns: var(--case-index-width) minmax(0, 1fr);
    column-gap: var(--case-index-gap);
  }
`;

export const ArticleIndex = styled.span`
  color: var(--section-muted);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);

  @media (min-width: 700px) {
    grid-row: 1 / span 3;
    padding-top: var(--space-2);
    text-align: right;
  }
`;

export const TitleMark = styled.span`
  display: inline;
  background-image: linear-gradient(var(--support-color), var(--support-color));
  background-repeat: no-repeat;
  background-position: 0 88%;
  background-size: 0% 0.42em;
  box-decoration-break: clone;
  transition: background-size 0.45s cubic-bezier(0.22, 1, 0.36, 1);

  /* stylelint-disable property-no-vendor-prefix -- Safari needs the prefix */
  -webkit-box-decoration-break: clone;
  /* stylelint-enable property-no-vendor-prefix */

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const ArticleTitle = styled.h2`
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: var(--font-size-title);
  line-height: 1;
  text-transform: lowercase;
  text-wrap: balance;

  &:hover ${TitleMark} {
    background-size: 100% 0.42em;
  }

  @media (min-width: 700px) {
    grid-column: 2;
  }
`;

export const ArticleText = styled.div`
  max-width: var(--case-measure);
  font-size: var(--font-size-body);
  line-height: 1.6;

  > * + * {
    margin-top: var(--space-4);
  }

  h3 {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: var(--font-size-ui-lg);
    line-height: 1.2;
  }

  ul {
    padding-left: var(--space-4);
    list-style: square;
  }

  li + li {
    margin-top: var(--space-2);
  }

  li::marker {
    color: var(--section-accent);
  }

  strong {
    font-weight: 700;
  }

  li h3 {
    display: inline;
    font-size: inherit;
  }

  a {
    color: var(--section-accent);
    text-underline-offset: 0.2em;

    &:focus-visible {
      outline: 2px solid var(--section-accent);
      outline-offset: 3px;
    }
  }

  code {
    padding: 0.1em 0.35em;
    border-radius: 4px;
    background-color: var(--neutral-200);
    font-family: var(--font-mono);
    font-size: var(--font-size-ui-sm);
  }

  pre {
    padding: var(--space-4);
    overflow-x: auto;
    border-radius: var(--border-radius);
    background-color: var(--neutral-200);
    font-family: var(--font-mono);
    font-size: var(--font-size-ui-sm);
    line-height: 1.5;

    code {
      padding: 0;
      background: none;
    }
  }

  @media (min-width: 700px) {
    grid-column: 2;
  }
`;

export const ArticleMedia = styled.div`
  margin-top: var(--space-3);

  @media (min-width: 700px) {
    grid-column: 2;
  }
`;

export const BackToTopRow = styled.div`
  padding-top: clamp(var(--space-4), 2vw, var(--space-6));
  border-top: 1px solid var(--neutral-300);

  @media (min-width: 700px) {
    margin-left: calc(var(--case-index-width) + var(--case-index-gap));
  }
`;

export const BackToTop = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--section-accent);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  text-transform: lowercase;
  text-decoration: none;

  svg {
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover svg,
  &:focus-visible svg {
    transform: translateY(-0.25rem);
  }

  &:hover span,
  &:focus-visible span {
    text-decoration: underline;
    text-underline-offset: 0.25em;
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

export const RibbonBand = styled.div`
  padding-block: clamp(var(--space-8), 4vw, var(--space-12));
  background-color: var(--background-color);
`;
