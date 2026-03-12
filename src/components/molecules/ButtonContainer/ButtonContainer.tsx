import Image from "next/image";
import { Container } from "./ButtonContainer.styles";

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
          <Image
            src={button.imageSrc}
            alt={button.alt}
            loading="lazy"
            width={100}
            height={100}
            quality={75}
          />
        </button>
      ))}
    </Container>
  );
};

export default ButtonContainer;
