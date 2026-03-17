import Image from "next/image";
import {
  HeadshotButton,
  HeadshotButtonContainerWrapper,
  ButtonLabel,
} from "./SocialButtonsContainer.styles";

const SocialButtonsContainer = ({
  buttons,
}: {
  buttons: { id: string; href: string; imgSrc: string; alt: string; label: string }[];
}) => {
  return (
    <HeadshotButtonContainerWrapper aria-labelledby="headshot-buttons">
      {buttons.map((button) => (
        <HeadshotButton
          key={button.id}
          id={button.id}
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={button.imgSrc}
            alt={button.alt}
            loading="lazy"
            width={100}
            height={100}
            quality={75}
          />
          <ButtonLabel>{button.label}</ButtonLabel>
        </HeadshotButton>
      ))}
    </HeadshotButtonContainerWrapper>
  );
};

export default SocialButtonsContainer;
