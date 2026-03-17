import { SlabbedWrapper } from "./SlabbedArticle.styles";

const SlabbedArticle = ({
  heading,
  ariaLabel,
  slabs,
  isActive,
}: {
  heading: string;
  ariaLabel: string;
  slabs: string[];
  isActive: boolean;
}) => {
  return (
    <SlabbedWrapper $isActive={isActive} aria-labelledby={ariaLabel}>
      <h2>{heading}</h2>
      <section>
        {slabs.map((slab, index) => (
          <p key={index}>{slab}</p>
        ))}
      </section>
    </SlabbedWrapper>
  );
};

export default SlabbedArticle;
