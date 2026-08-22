import { ArrowRight, CornerRightDown } from "lucide-react";
import NotebookSection from "../NotebookSection/NotebookSection";
import WorkList from "../WorkList/WorkList";
import {
  whatIDoCta,
  whatIDoId,
  featuredProjectNames,
  portfolioHref,
  selectedWorkHeading,
  selectedWorkId,
  viewMoreWorkCta,
} from "../../../consts.v2";

const SelectedWork = () => (
  <NotebookSection
    id={selectedWorkId}
    heading={selectedWorkHeading}
    background="var(--accent-color)"
    color="var(--neutral-100)"
    actions={[
      {
        label: viewMoreWorkCta,
        href: portfolioHref,
        icon: <ArrowRight strokeWidth={2.5} />,
      },
      {
        label: whatIDoCta,
        href: `#${whatIDoId}`,
        icon: <CornerRightDown strokeWidth={2.5} />,
      },
    ]}
  >
    <WorkList names={featuredProjectNames} />
  </NotebookSection>
);

export default SelectedWork;
