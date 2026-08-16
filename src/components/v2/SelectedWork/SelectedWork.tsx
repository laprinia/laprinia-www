import NotebookSection from "../NotebookSection/NotebookSection";
import {
  aboutMeCta,
  aboutMeId,
  selectedWorkHeading,
  selectedWorkId,
} from "../../../consts.v2";

const SelectedWork = () => (
  <NotebookSection
    id={selectedWorkId}
    heading={selectedWorkHeading}
    background="var(--accent-color)"
    color="var(--neutral-100)"
    cta={{ label: aboutMeCta, href: `#${aboutMeId}` }}
  >
    Project cards.
  </NotebookSection>
);

export default SelectedWork;
