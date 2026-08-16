import { useRef } from "react";
import StackLayer, { useCoverFade } from "../StackLayer/StackLayer";
import HomeHero from "../HomeHero/HomeHero";
import SelectedWork from "../SelectedWork/SelectedWork";
import AboutMe from "../AboutMe/AboutMe";

const HomeStage = () => {
  const workRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const heroFade = useCoverFade(workRef);
  const workFade = useCoverFade(aboutRef);

  return (
    <>
      <StackLayer fade={heroFade} zIndex={0}>
        <HomeHero />
      </StackLayer>

      <StackLayer ref={workRef} fade={workFade} zIndex={1}>
        <SelectedWork />
      </StackLayer>

      <StackLayer ref={aboutRef} zIndex={2}>
        <AboutMe />
      </StackLayer>
    </>
  );
};

export default HomeStage;
