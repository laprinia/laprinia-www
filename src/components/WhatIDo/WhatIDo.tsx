import { whatIDoEntries } from "../../consts.content";
import { whatIDoLabel } from "../../consts.site";
import { Container, Rail, RailLabel, RailHeading } from "../shared.styles";
import {
  Entries,
  Entry,
  Marker,
  Term,
  Detail,
  WhatIDoSection,
} from "./WhatIDo.styles";

const letters = ["a", "b", "c", "d", "e"];

const WhatIDoV4 = () => (
  <WhatIDoSection id="what-i-do">
    <Container>
      <Rail>
        <RailLabel>
          <RailHeading>{whatIDoLabel}</RailHeading>
        </RailLabel>

        <Entries>
          {whatIDoEntries.map((entry, index) => (
            <Entry key={entry.term}>
              <Marker aria-hidden="true">
                {letters[index % letters.length]}
              </Marker>
              <div>
                <Term>{entry.term}</Term>
                <Detail>{entry.definition}</Detail>
              </div>
            </Entry>
          ))}
        </Entries>
      </Rail>
    </Container>
  </WhatIDoSection>
);

export default WhatIDoV4;
