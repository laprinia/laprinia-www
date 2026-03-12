import styled from "styled-components";

export const DesktopContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 2.5rem);
  height: calc(100vh - 2.5rem);
  margin: 1.25rem;
  padding: 0;

  @media (max-width: 1023px) {
    flex-direction: column;
    height: calc(100vh - 2.5rem);
    width: calc(100vw - 2.5rem);
    margin: 1.25rem;
  }
`;

export const TextContainer = styled.section`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2.5rem;
  width: 100%;
  height: 100%;
  font-size: var(--font-size-heading3-desktop);

  font-weight: var(--font-weight-bold);
  color: var(--accent-color);

  @media (max-width: 1023px) {
    font-size: var(--font-size-heading3-tablet);
  }

  @media (max-width: 767px) {
    font-size: var(--font-size-heading3-phone);
  }
`;
