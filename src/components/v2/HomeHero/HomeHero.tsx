import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { ArrowDown } from "lucide-react";
import Button from "../Button/Button";
import Crossword from "../Crossword/Crossword";
import { homeTopId, selectedWorkCta, selectedWorkId } from "../../../consts.v2";
import { crosswordStatement } from "../../../consts.v2.crossword";
import { HeroSection, HeroCtaSlot } from "./HomeHero.styles";

const HomeHero = () => (
  <HeroSection id={homeTopId}>
    <VisuallyHidden.Root asChild>
      <h1>{crosswordStatement}</h1>
    </VisuallyHidden.Root>

    <Crossword>
      <HeroCtaSlot>
        <Button
          asChild
          variant="outline"
          size="lg"
          icon={<ArrowDown strokeWidth={2.5} />}
        >
          <a href={`#${selectedWorkId}`}>{selectedWorkCta}</a>
        </Button>
      </HeroCtaSlot>
    </Crossword>
  </HeroSection>
);

export default HomeHero;
