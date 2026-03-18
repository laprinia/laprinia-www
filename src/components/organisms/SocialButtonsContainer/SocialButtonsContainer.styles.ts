import styled from "styled-components";

export const HeadshotButtonContainerWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    margin-bottom: 1.5rem;
  }
`;

export const HeadshotButton = styled.a`
  flex: 0 0 auto;
  height: 2.25rem;
  border: none;
  border-radius: var(--border-radius);
  background: var(--accent-color);
  color: var(--neutral-000);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.75rem;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  @media (min-width: 1800px) {
    height: 2.75rem;
  }

  &:hover {
    background-color: var(--neutral-700);
    color: var(--support-color);
  }
`;

export const Icon = styled.span<{ $src: string }>`
  display: inline-block;
  height: 1.1rem;
  width: 1.1rem;
  flex-shrink: 0;
  background-color: var(--neutral-000);
  mask-image: url(${({ $src }) => $src});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-image: url(${({ $src }) => $src});
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  transition: background-color 0.2s ease;

  @media (min-width: 1800px) {
    height: 1.3rem;
    width: 1.3rem;
  }

  ${HeadshotButton}:hover & {
    background-color: var(--support-color);
  }
`;

export const ButtonLabel = styled.span`
  font-size: 0.8rem;
  font-weight: var(--font-weight-regular, 400);
  white-space: nowrap;

  @media (min-width: 1800px) {
    font-size: 0.9rem;
  }
`;
