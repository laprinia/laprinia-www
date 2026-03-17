import styled from "styled-components";

export const CurriculumTextContainer = styled.section`
  flex: 1 1 auto;
  display: flex;
  padding-bottom: 2rem;
  p {
    font-weight: var(--font-weight-light);
  }
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    min-width: 0;
    max-width: 100%;
    padding-bottom: 0rem;
  }
`;

export const Column = styled.article`
  flex: 1;
  padding-right: 0 0.5rem;

  @media (max-width: 900px) {
    padding-right: 0;
    width: 100%;
    min-width: 0;
    max-width: 100%;
  }
`;
