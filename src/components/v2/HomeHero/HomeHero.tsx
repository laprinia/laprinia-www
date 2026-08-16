import Image from "next/image";
import { CornerRightDown } from "lucide-react";
import Button from "../Button/Button";
import { landingName, navItems } from "../../../consts";
import {
  heroPortraitAlt,
  heroPortraitPath,
  landingBio,
  landingTitle,
  selectedWorkCta,
  selectedWorkId,
} from "../../../consts.v2";
import {
  HeroSection,
  HeroName,
  HeroKicker,
  HeroNameFilled,
  HeroNameOutlined,
  HeroLower,
  HeroPortrait,
  HeroIntro,
  HeroBio,
  HeroCtaSlot,
  HeroNav,
  HeroNavLink,
} from "./HomeHero.styles";

const toStackedLines = (value: string) => {
  const [first, ...rest] = value.split(" ");
  return [first, rest.join(" ")].filter(Boolean);
};

const HomeHero = () => {
  const [nameFilled, nameOutlined] = toStackedLines(landingName);

  return (
    <HeroSection>
      <HeroName>
        <HeroKicker>{landingTitle}</HeroKicker>{" "}
        <HeroNameFilled>{nameFilled}</HeroNameFilled>{" "}
        <HeroNameOutlined>{nameOutlined}</HeroNameOutlined>
      </HeroName>

      <HeroNav aria-label="Primary">
        {navItems.map((item) => (
          <HeroNavLink key={item.href} href={item.href}>
            {item.label}
          </HeroNavLink>
        ))}
      </HeroNav>

      <HeroLower>
        <HeroPortrait>
          <Image
            src={heroPortraitPath}
            alt={heroPortraitAlt}
            width={600}
            height={747}
            sizes="(min-width: 1001px) 14vw, 45vw"
            priority
          />
        </HeroPortrait>

        <HeroIntro>
          <HeroBio>{landingBio}</HeroBio>
          <HeroCtaSlot>
            <Button
              asChild
              variant="outline"
              size="lg"
              icon={<CornerRightDown strokeWidth={2.5} />}
            >
              <a href={`#${selectedWorkId}`}>{selectedWorkCta}</a>
            </Button>
          </HeroCtaSlot>
        </HeroIntro>
      </HeroLower>
    </HeroSection>
  );
};

export default HomeHero;
