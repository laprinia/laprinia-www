import SlabbedArticle from "../SlabbedArticle/SlabbedArticle";

const HobbiesArticle = () => {
  return (
    <SlabbedArticle
      ariaLabel="hobbies"
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
