import styled from "styled-components";

export const TechnologiesContainer = styled.section`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 900px) {
    width: 100%;
    padding-bottom: 2rem;
  }
`;
