import styled from "styled-components";

export const MobileContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 5rem);
  flex: 1;
  @media (max-width: 1000px) {
    padding: 1.25rem 1.5rem 1.5rem;
    gap: 0.5rem;
  }
`;

export const CanvasSectionWrapper = styled.section`
  height: 60%;
  display: flex;
  align-items: flex-end;
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 40%;
  text-align: center;

  @media (max-width: 1000px) {
    justify-content: space-evenly !important;
  }
`;

export const CanvasSection = styled.article`
  width: 100%;
  height: 100%;
`;
