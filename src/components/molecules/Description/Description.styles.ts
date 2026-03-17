import styled from "styled-components";

export const DescriptionContainer = styled.section`
  flex: 0 1 auto;
  min-width: 0;
  max-width: 100%;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;

  p {
    font-weight: var(--font-weight-light);
    min-width: 0;
    max-width: 65ch;
    overflow-wrap: break-word;
    word-wrap: break-word;
    @media (min-width: 1800px) {
      font-size: var(--font-size-base-xl);
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    padding-bottom: 2rem;
  }
`;
