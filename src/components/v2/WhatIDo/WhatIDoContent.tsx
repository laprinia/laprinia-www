import { whatIDoEntries } from "../../../consts.v2";
import {
  EntryList,
  Entry,
  EntryTerm,
  EntryBadge,
  EntryDefinition,
} from "./WhatIDo.styles";

const WhatIDoContent = () => (
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
);

export default WhatIDoContent;
