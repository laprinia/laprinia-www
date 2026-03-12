import styled from "styled-components";

export const ContainerWrapper = styled.main`
  display: flex;
  overflow: hidden;
  flex: 1;
  margin: 0;
  padding: 0 0rem;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  @media (max-width: 900px) {
    flex: none;
    flex-direction: column;
    overflow: auto;
    height: auto;
  }
`;

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  border-top: 0.25rem solid var(--accent-color);

  @media (max-width: 900px) {
    border: none;
    flex-direction: column;
  }
`;

export const CarouselWrapper = styled.main`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    width: 100%;
    height: 40%;
  }
`;

export const DetailsContainer = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    overflow: visible;
  }
`;
