import { cloudinaryRawUrl } from "../../../lib/cloudinary";
import {
  HeadshotButton,
  HeadshotButtonContainerWrapper,
  ButtonLabel,
  Icon,
} from "./SocialButtonsContainer.styles";

const SocialButtonsContainer = ({
  buttons,
}: {
  buttons: {
    id: string;
    href: string;
    imgSrc: string;
    alt: string;
    label: string;
  }[];
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
          <Icon
            $src={cloudinaryRawUrl(button.imgSrc)}
            role="img"
            aria-label={button.alt}
          />
          <ButtonLabel>{button.label}</ButtonLabel>
        </HeadshotButton>
      ))}
    </HeadshotButtonContainerWrapper>
  );
};

export default SocialButtonsContainer;
