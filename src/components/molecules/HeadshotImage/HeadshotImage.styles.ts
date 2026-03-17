import styled from "styled-components";

export const ImageFlex = styled.img<{ relativeHeight: string }>`
  flex: 1 1 auto;
  object-fit: contain;
  width: 100%;
  max-height: ${({ relativeHeight }) => relativeHeight};
  @media (max-width: 900px) {
    flex: 0 0 auto;
    width: 100%;
    max-height: 30vh;
    object-fit: contain;
    padding-bottom: 1rem;
  }
`;
