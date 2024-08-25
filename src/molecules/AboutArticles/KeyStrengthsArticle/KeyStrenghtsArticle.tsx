import SlabbedArticle from "../SlabbedArticle/SlabbedArticle";

const KeyStrengthsArticle = () => {
  return (
    <SlabbedArticle
      aria-labelledby="key-strenghts"
      heading={"B) KEY STRENGTHS"}
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
