import SlabbedArticle from "../SlabbedArticle/SlabbedArticle";

const KeyStrengthsArticle = () => {
  return (
    <SlabbedArticle
      aria-labelledby="key-strenghts"
      heading={"B) Key Strengths"}
      slabs={[
        "CREATIVE",
        "RESPONSIBLE",
        "VISIONARY",
        "ACCESSIBILITY",
        "SEO",
        "ADVANCED REACT",
        "MODERN DESIGNER",
        "CI/CD",
        "TESTING",
      ]}
      isActive={true}
    />
  );
};

export default KeyStrengthsArticle;
