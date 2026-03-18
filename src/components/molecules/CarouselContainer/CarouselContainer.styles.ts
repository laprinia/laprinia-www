import styled from "styled-components";

export const MediaContainer = styled.section`
  height: 95%;
`;

export const Container = styled.article`
  flex: 0 0 60%;
  height: 100%;

  @media (max-width: 900px) {
    flex: 0 0 20rem;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const ImageNumberContainer = styled.aside`
  height: 5%;
  width: 100%;
  background-color: var(--neutral-700);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
  color: var(--support-color);
  font-family: var(--font-heading);
  font-weight: var(--font-weight-regular);

  @media (max-width: 1280px) {
    font-size: var(--font-size-body-desktop);
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-body-tablet);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-body-phone);
  }

  @media (min-width: 1800px) {
    font-size: var(--font-size-body-xl);
  }

  @media (max-width: 900px) {
    height: 2rem;
  }
`;
