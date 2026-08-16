import NotebookSection from "../NotebookSection/NotebookSection";
import { aboutMeHeading, aboutMeId } from "../../../consts.v2";

const AboutMe = () => (
  <NotebookSection
    id={aboutMeId}
    heading={aboutMeHeading}
    background="var(--neutral-700)"
    color="var(--support-color)"
  >
    About copy.
  </NotebookSection>
);

export default AboutMe;
