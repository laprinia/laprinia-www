import { ArrowRight } from "lucide-react";
import NotebookSection from "../NotebookSection/NotebookSection";
import {
  aboutMeCta,
  aboutMeId,
  whatIDoEntries,
  whatIDoHeading,
  whatIDoId,
} from "../../../consts.v2";
import {
  EntryList,
  Entry,
  EntryTerm,
  EntryBadge,
  EntryDefinition,
} from "./WhatIDo.styles";

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
    <EntryList>
      {whatIDoEntries.map((entry, index) => (
        <Entry key={entry.term}>
          <EntryTerm>
            <EntryBadge aria-hidden="true">
              {String.fromCharCode(65 + index)}
            </EntryBadge>{" "}
            {entry.term}
          </EntryTerm>
          <EntryDefinition>{entry.definition}</EntryDefinition>
        </Entry>
      ))}
    </EntryList>
  </NotebookSection>
);

export default WhatIDo;
