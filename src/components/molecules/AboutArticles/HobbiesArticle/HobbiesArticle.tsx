import SlabbedArticle from "../SlabbedArticle/SlabbedArticle";

const HobbiesArticle = () => {
  return (
    <SlabbedArticle
      aria-labelledby="hobbies"
      heading={"C) HOBBIES"}
      slabs={[
        "PHOTOGRAPHY",
        "VIDEOGRAPHY",
        "IMAGE PROCESSING",
        "GENERATIVE ART",
      ]}
      isActive={false}
    />
  );
};
export default HobbiesArticle;
