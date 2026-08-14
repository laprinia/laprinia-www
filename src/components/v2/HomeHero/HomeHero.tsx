import { type ReactNode } from "react";
import PulsatingBadge from "../../organisms/PulsatingBadge/PulsatingBadge";
import {
  landingName,
  landingPageIntroduction,
  landingTitle,
  navItems,
} from "../../../consts";
import {
  HeroSection,
  HeroCanvasSlot,
  HeroIdentity,
  HeroName,
  HeroRole,
  HeroIntro,
  HeroBio,
  HeroNav,
  HeroNavLink,
} from "./HomeHero.styles";

const toStackedLines = (value: string) => {
  const [first, ...rest] = value.toUpperCase().split(" ");
  return [first, rest.join(" ")].filter(Boolean);
};

const HomeHero = ({ canvas }: { canvas: ReactNode }) => {
  return (
    <HeroSection>
      <HeroCanvasSlot aria-hidden="true" data-cursor-text="drag!">
        {canvas}
      </HeroCanvasSlot>

      <HeroIdentity>
        <HeroName>
          {toStackedLines(landingName).map((line) => (
            <span key={line}>{line}</span>
          ))}
        </HeroName>
      </HeroIdentity>

      <HeroRole>
        {toStackedLines(landingTitle).map((line) => (
          <span key={line}>{line}</span>
        ))}
      </HeroRole>

      <HeroIntro>
        <HeroBio>{landingPageIntroduction}</HeroBio>
        <PulsatingBadge />
      </HeroIntro>

      <HeroNav aria-label="Primary">
        {navItems.map((item) => (
          <HeroNavLink key={item.href} href={item.href}>
            {item.label}
          </HeroNavLink>
        ))}
      </HeroNav>
    </HeroSection>
  );
};

export default HomeHero;
