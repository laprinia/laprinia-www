import styled from "styled-components";

const ImageFlex = styled.img<{ relativeHeight: string }>`
  flex: 1 1 auto;
  object-fit: contain;
  width: 100%;
  max-height: ${({ relativeHeight }) => relativeHeight};
  @media (max-width: 900px) {
    width: 100%;
    padding-bottom: 1rem;
  }
`;

const HeadshotImage = ({
  src,
  relativeHeight,
}: {
  src: string;
  relativeHeight: string;
}) => {
  return <ImageFlex src={src} alt="Headshot" relativeHeight={relativeHeight} />;
};

export default HeadshotImage;
