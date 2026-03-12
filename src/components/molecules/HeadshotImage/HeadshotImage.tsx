import { ImageFlex } from "./HeadshotImage.styles";

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
