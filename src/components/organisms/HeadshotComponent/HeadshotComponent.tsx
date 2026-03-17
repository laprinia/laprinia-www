import { socialButtons } from "../../../consts";
import SocialButtonsContainer from "../SocialButtonsContainer/SocialButtonsContainer";
import CardPlayground from "../CardPlayground/CardPlayground";
import { Container } from "./HeadshotComponent.styles";

const HeadshotComponent = () => {
  return (
    <Container>
      <CardPlayground />
      <SocialButtonsContainer buttons={socialButtons} />
    </Container>
  );
};

export default HeadshotComponent;
