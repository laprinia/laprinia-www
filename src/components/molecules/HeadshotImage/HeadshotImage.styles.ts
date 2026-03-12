import styled from "styled-components";

export const ImageFlex = styled.img<{ relativeHeight: string }>`
  flex: 1 1 auto;
  object-fit: contain;
  width: 100%;
  max-height: ${({ relativeHeight }) => relativeHeight};
  @media (max-width: 900px) {
    width: 100%;
    padding-bottom: 1rem;
  }
`;
