import NotebookSection from "../NotebookSection/NotebookSection";
import AboutMeContent from "./AboutMeContent";
import { aboutMeHeading, aboutMeId } from "../../../consts.v2";

const AboutMe = () => (
  <NotebookSection
    id={aboutMeId}
    heading={aboutMeHeading}
    background="var(--neutral-700)"
    color="var(--support-color)"
  >
    <AboutMeContent />
  </NotebookSection>
);

export default AboutMe;
