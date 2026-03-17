import styled from "styled-components";

export const CurriculumTextContainer = styled.section`
  flex: 1 1 auto;
  display: flex;
  gap: 2rem;
  padding-bottom: 2rem;
  p {
    font-weight: var(--font-weight-light);
  }
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0;
    width: 100%;
    min-width: 0;
    max-width: 100%;
    padding-bottom: 0;
  }
`;

export const Column = styled.article`
  flex: 1;
  min-width: 0;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
  }
`;
