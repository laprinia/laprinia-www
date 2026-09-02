import styled from "styled-components";
import { media } from "../../styles/breakpoints";

export const Layout = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(var(--space-10), 5vw, var(--space-18));
  align-items: start;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: calc(
      var(--nav-height) + clamp(var(--space-10), 6vw, var(--space-18))
    )
    clamp(var(--space-5), 4vw, var(--space-12))
    clamp(var(--space-16), 8vw, var(--space-28));

  ${media.lg} {
    grid-template-columns: minmax(0, clamp(240px, 26%, 340px)) minmax(0, 1fr);
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

export const Portrait = styled.figure`
  margin: 0;
  transform: rotate(-1.5deg);

  img {
    display: block;
    width: auto;
    height: auto;
    max-width: min(100%, 11rem);
    max-height: 24svh;
  }
`;

export const Name = styled.h1`
  margin: 0;
  font-family: var(--font-heading);
  font-weight: var(--font-weight-light);
  font-size: clamp(1.875rem, 3.2vw, 2.75rem);
  line-height: 1;
  letter-spacing: -0.01em;
  text-transform: lowercase;
  color: var(--accent-color);
`;

export const Standfirst = styled.p`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--foreground-color);
`;

export const Role = styled.span`
  align-self: flex-start;
  background-image: linear-gradient(var(--support-color), var(--support-color));
  background-repeat: no-repeat;
  background-position: 0 92%;
  background-size: 100% 0.5em;
`;

export const Place = styled.span`
  color: var(--section-muted);
`;

export const Status = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--accent-color);

  &::before {
    content: "";
    width: var(--space-2);
    height: var(--space-2);
    border-radius: 50%;
    background-color: var(--accent-color);
  }
`;

export const Intro = styled.p`
  margin: 0;
  max-width: 40ch;
  font-size: var(--font-size-ui-md);
  line-height: 1.6;
  color: var(--neutral-700);
`;

export const RailLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-12), 6vw, var(--space-20));
  min-width: 0;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-5), 2.5vw, var(--space-8));
`;

export const SectionHead = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`;

export const SectionIndex = styled.span`
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  color: var(--section-muted);
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  font-size: clamp(1.375rem, 2.2vw, 1.75rem);
  text-transform: lowercase;
  color: var(--accent-color);
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-7), 3vw, var(--space-10));
`;

export const TimelineRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-2) clamp(var(--space-6), 3vw, var(--space-10));

  ${media.lg} {
    grid-template-columns: minmax(0, 6.5rem) minmax(0, 1fr);
  }
`;

export const Period = styled.p`
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  line-height: 1.7;
  color: var(--section-muted);
`;

export const EntryTitle = styled.h3`
  margin: 0;
  font-family: var(--font-heading);
  font-weight: var(--font-weight-regular);
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  line-height: 1.15;
  color: var(--foreground-color);
`;

export const EntryOrg = styled.p`
  margin: var(--space-1) 0 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  color: var(--accent-color);
`;

export const EntryText = styled.p`
  margin: var(--space-2) 0 0;
  max-width: 60ch;
  font-size: var(--font-size-ui-md);
  line-height: 1.55;
  color: var(--neutral-700);
`;

export const TagRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Groups = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-5), 2.5vw, var(--space-7));
`;

export const GroupRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-3) clamp(var(--space-6), 3vw, var(--space-10));
  align-items: baseline;

  ${media.lg} {
    grid-template-columns: minmax(0, 5rem) minmax(0, 1fr);
  }
`;

export const GroupLabel = styled.p`
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--section-muted);
`;

export const Pairs = styled.dl`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: var(--space-2) var(--space-4);
  align-items: baseline;
  margin: 0;
  max-width: 32rem;
`;

export const PairLabel = styled.dt`
  font-size: var(--font-size-ui-md);
  color: var(--foreground-color);
`;

export const PairValue = styled.dd`
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  text-align: right;
  color: var(--section-muted);
`;

export const BodyText = styled.p`
  margin: 0;
  max-width: 40ch;
  font-size: var(--font-size-ui-md);
  line-height: 1.55;
  color: var(--neutral-700);
`;
