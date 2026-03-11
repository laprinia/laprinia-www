import SlabbedArticle from "../SlabbedArticle/SlabbedArticle";

const KeyStrengthsArticle = () => {
  return (
    <SlabbedArticle
      aria-labelledby="key-strenghts"
      heading={"B) KEY STRENGTHS"}
      slabs={[
        "DESIGN HANDOVER BRIDGER",
        "CREATIVE",
        "RESPONSIBLE",
        "VISIONARY",
        "USER-CENTRIC",
        "ACCESSIBILITY FOCUSED",
        "RESPONSIVE DESIGN",
        "ADVANCED REACT DEVELOPER",
      ]}
      isActive={true}
    />
  );
};

export default KeyStrengthsArticle;
