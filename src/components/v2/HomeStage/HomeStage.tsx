import { useRef } from "react";
import StackLayer, { useCoverFade } from "../StackLayer/StackLayer";
import HomeHero from "../HomeHero/HomeHero";
import SelectedWork from "../SelectedWork/SelectedWork";
import WhatIDo from "../WhatIDo/WhatIDo";
import AboutMe from "../AboutMe/AboutMe";

const HomeStage = () => {
  const workRef = useRef<HTMLDivElement>(null);
  const whatRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const heroFade = useCoverFade(workRef);
  const workFade = useCoverFade(whatRef);
  const whatFade = useCoverFade(aboutRef);

  return (
    <>
      <StackLayer fade={heroFade} zIndex={0}>
        <HomeHero />
      </StackLayer>

      <StackLayer ref={workRef} fade={workFade} zIndex={1}>
        <SelectedWork />
      </StackLayer>

      <StackLayer ref={whatRef} fade={whatFade} zIndex={2}>
        <WhatIDo />
      </StackLayer>

      <StackLayer ref={aboutRef} zIndex={3}>
        <AboutMe />
      </StackLayer>
    </>
  );
};

export default HomeStage;
