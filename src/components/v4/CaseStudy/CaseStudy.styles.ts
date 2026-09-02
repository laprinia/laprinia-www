import styled from "styled-components";
import { media } from "../../../styles/breakpoints";

export const Layout = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(var(--space-10), 5vw, 4.5rem);
  align-items: start;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: calc(var(--nav-height) + clamp(var(--space-10), 6vw, 4.5rem))
    clamp(var(--space-5), 4vw, var(--space-12))
    clamp(var(--space-16), 8vw, var(--space-28));

  ${media.lg} {
    grid-template-columns: 17rem minmax(0, 1fr);
  }
`;

export const Rail = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-5), 2.5vw, var(--space-7));
  min-width: 0;

  ${media.lg} {
    position: sticky;
    top: var(--space-24);
    max-height: calc(
      100svh - var(--nav-height) - clamp(var(--space-12), 8vw, var(--space-24))
    );
    margin-inline: calc(var(--space-3) * -1);
    padding-inline: var(--space-3);
    overflow-y: auto;
    overscroll-behavior: contain;
  }
`;

export const ProjectName = styled.h1`
  margin: 0;
  font-family: var(--font-heading);
  font-weight: var(--font-weight-light);
  font-size: clamp(1.875rem, 3.2vw, 2.75rem);
  line-height: 1;
  letter-spacing: -0.01em;
  text-transform: lowercase;
  color: var(--accent-color);
`;

export const Summary = styled.p`
  margin: 0;
  max-width: 38ch;
  font-size: var(--font-size-ui-md);
  line-height: 1.6;
  color: var(--neutral-700);
`;

export const Facts = styled.dl`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin: 0;
`;

export const FactTerm = styled.dt`
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--section-muted);
`;

export const FactValue = styled.dd`
  margin: 0.2rem 0 0;
  font-size: var(--font-size-ui-sm);
  color: var(--foreground-color);
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-12), 6vw, var(--space-20));
  min-width: 0;
  max-width: 68rem;
`;

export const Article = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-4) clamp(var(--space-4), 2vw, var(--space-6));
  align-items: start;

  ${media.lg} {
    grid-template-columns: var(--space-12) minmax(0, 1fr);
  }
`;

export const ArticleIndex = styled.span`
  padding-top: 0.45rem;
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  color: var(--section-muted);

  ${media.lg} {
    text-align: right;
  }
`;

export const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-3), 1.5vw, var(--space-5));
  min-width: 0;
`;

export const ArticleTitle = styled.h2`
  margin: 0;
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  font-size: clamp(1.375rem, 2.2vw, 1.75rem);
  text-transform: lowercase;
  color: var(--accent-color);
`;

export const ArticleText = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-3), 1.5vw, var(--space-5));
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--neutral-700);

  p,
  ul,
  ol {
    margin: 0;
    max-width: 68ch;
  }

  ul,
  ol {
    padding-left: var(--space-4);
    list-style: square;
  }

  li + li {
    margin-top: var(--space-2);
  }

  li::marker {
    color: var(--accent-color);
  }

  strong {
    color: var(--foreground-color);
    font-weight: var(--font-weight-bold);
  }

  a {
    color: var(--accent-color);
    text-underline-offset: 0.2em;
  }
`;

export const ArticleMedia = styled.div`
  --metric-surface: var(--neutral-000);
  --metric-label-ink: var(--neutral-700);

  margin-top: var(--space-2);
`;

export const BackToTopRow = styled.div`
  padding-top: clamp(var(--space-4), 2vw, var(--space-6));
  border-top: 1px solid var(--neutral-300);

  ${media.lg} {
    margin-left: calc(
      var(--space-12) + clamp(var(--space-4), 2vw, var(--space-6))
    );
  }
`;
