import { Article } from "./SlabbedArticle.styles";

const KeyStrengthsArticle = ({
  heading,
  slabs,
  isActive,
}: {
  heading: string;
  slabs: string[];
  isActive: boolean;
}) => {
  return (
    <Article isActive={isActive}>
      <h2>{heading}</h2>
      <section>
        {slabs.map((slab, index) => (
          <p key={index}>{slab}</p>
        ))}
      </section>
    </Article>
  );
};

export default KeyStrengthsArticle;
