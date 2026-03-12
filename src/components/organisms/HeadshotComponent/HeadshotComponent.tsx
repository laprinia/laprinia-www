import { socialButtons } from "../../../consts";
import SocialButtonsContainer from "../SocialButtonsContainer/SocialButtonsContainer";
import HeadshotImage from "../../molecules/HeadshotImage/HeadshotImage";
import { Container } from "./HeadshotComponent.styles";

const HeadshotComponent = () => {
  return (
    <Container>
      <HeadshotImage src={"/headshot.avif"} relativeHeight={"85%"} />
      <SocialButtonsContainer buttons={socialButtons} />
    </Container>
  );
};

export default HeadshotComponent;
