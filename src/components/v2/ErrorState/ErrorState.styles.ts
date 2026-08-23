import styled from "styled-components";

export const ErrorGround = styled.main`
  --section-ink: var(--foreground-color);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(var(--space-5), 3vw, var(--space-8));
  min-height: 100svh;
  padding: calc(var(--nav-height) + clamp(var(--space-8), 6vw, var(--space-16)))
    clamp(var(--space-4), 4vw, var(--space-10))
    clamp(var(--space-12), 8vw, var(--space-20));
  box-sizing: border-box;
  text-align: center;
  background-color: var(--background-color);
`;

export const Face = styled.p`
  margin: 0;
  color: var(--accent-color);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(4rem, 18vw, 11rem);
  line-height: 0.85;
  letter-spacing: -0.04em;
  user-select: none;
`;

export const Code = styled.span`
  display: block;
  color: var(--neutral-600);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  max-width: 20ch;
  margin: 0;
  color: var(--section-ink);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: var(--font-size-title);
  line-height: 1.05;
  text-transform: lowercase;
  text-wrap: balance;
`;

export const Mark = styled.span`
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

export const Message = styled.p`
  max-width: 42ch;
  margin: 0;
  color: var(--neutral-600);
  font-size: var(--font-size-body);
  line-height: 1.5;
  text-wrap: pretty;
`;

export const Actions = styled.div`
  --button-ink: var(--accent-color);
  --button-on-ink: var(--background-color);

  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  justify-content: center;
  margin-top: var(--space-2);
`;
