import MetaRibbon from "../MetaRibbon/MetaRibbon";
import { Header, RibbonSlot, Title, Intro } from "./PageHeader.styles";

export type PageHeaderProps = {
  ribbon: { highlight: string; muted: string; status: string };
  title: string;
  intro: string;
};

const PageHeader = ({ ribbon, title, intro }: PageHeaderProps) => (
  <Header>
    <RibbonSlot>
      <MetaRibbon
        highlight={ribbon.highlight}
        muted={ribbon.muted}
        status={ribbon.status}
      />
    </RibbonSlot>
    <Title>{title}</Title>
    <Intro>{intro}</Intro>
  </Header>
);

export default PageHeader;
