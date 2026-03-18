import { Container, Icon } from "./ButtonContainer.styles";

const ButtonContainer = ({
  buttons,
}: {
  buttons: {
    imageSrc: string;
    alt: string;
    link: string;
  }[];
}) => {
  return (
    <Container>
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => (window.location.href = button.link)}
        >
          <Icon $src={button.imageSrc} role="img" aria-label={button.alt} />
        </button>
      ))}
    </Container>
  );
};

export default ButtonContainer;
