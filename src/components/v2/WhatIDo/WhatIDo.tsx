import { ArrowRight } from "lucide-react";
import NotebookSection from "../NotebookSection/NotebookSection";
import WhatIDoContent from "./WhatIDoContent";
import {
  aboutMeCta,
  aboutMeId,
  whatIDoHeading,
  whatIDoId,
} from "../../../consts.v2";

const WhatIDo = () => (
  <NotebookSection
    id={whatIDoId}
    heading={whatIDoHeading}
    background="var(--support-color)"
    color="var(--way-darker-accent-color)"
    actions={[
      {
        label: aboutMeCta,
        href: `#${aboutMeId}`,
        icon: <ArrowRight strokeWidth={2.5} />,
      },
    ]}
  >
    <WhatIDoContent />
  </NotebookSection>
);

export default WhatIDo;
