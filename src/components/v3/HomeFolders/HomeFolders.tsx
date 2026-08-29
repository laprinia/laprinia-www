import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import FolderStack, { type FolderStackItem } from "../FolderStack/FolderStack";
import Button from "../../v2/Button/Button";
import WorkList from "../../v2/WorkList/WorkList";
import WhatIDoContent from "../../v2/WhatIDo/WhatIDoContent";
import AboutMeContent from "../../v2/AboutMe/AboutMeContent";
import {
  featuredProjectNames,
  viewMoreWorkCta,
  workHref,
} from "../../../consts.v2";
import { homeFolders } from "../../../consts.v3";
import {
  PanelHead,
  PanelTitle,
  BleedSlot,
  InsetSlot,
  PanelActions,
} from "./HomeFolders.styles";

const panels = [
  <>
    <BleedSlot>
      <WorkList names={featuredProjectNames} />
    </BleedSlot>
    <PanelActions>
      <Button
        asChild
        variant="outline"
        size="lg"
        icon={<ArrowRight strokeWidth={2.5} />}
      >
        <a href={workHref}>{viewMoreWorkCta}</a>
      </Button>
    </PanelActions>
  </>,
  <BleedSlot>
    <WhatIDoContent />
  </BleedSlot>,
  <InsetSlot>
    <AboutMeContent />
  </InsetSlot>,
];

const items: FolderStackItem[] = homeFolders.map((folder, index) => ({
  ...folder,
  content: (
    <>
      <PanelHead>
        <PanelTitle>{folder.label}</PanelTitle>
      </PanelHead>
      {panels[index]}
    </>
  ),
}));

const HomeFolders = ({ children }: { children?: ReactNode }) => (
  <FolderStack items={items}>{children}</FolderStack>
);

export default HomeFolders;
