import { useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import {
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { CornerRightDown } from "lucide-react";
import Button from "../Button/Button";
import Folder from "../Folder/Folder";
import Paperclip from "../Paperclip/Paperclip";
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
  HeroTilt,
  HeroClip,
  HeroFolder,
  HeroBio,
  HeroCtaSlot,
  HeroNav,
  HeroNavLink,
} from "./HomeHero.styles";

const spreadTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] } as const;

const groupVariants: Variants = {
  clipped: {},
  spread: { transition: { delayChildren: 0.8, staggerChildren: 0.35 } },
};

const portraitVariants: Variants = {
  clipped: { x: "150%", rotate: 5 },
  spread: { x: 0, rotate: 0, transition: spreadTransition },
};

const folderVariants: Variants = {
  clipped: { x: "-38%", rotate: -6 },
  spread: { x: 0, rotate: 0, transition: spreadTransition },
};

const clipVariants: Variants = {
  clipped: { rotate: -18 },
  spread: { rotate: -7, transition: spreadTransition },
};

const SCROLL_TILT_RANGE = [0, 600];
const PORTRAIT_TILT = [0, 3];
const FOLDER_TILT = [0, -3];

const DESKTOP_QUERY = "(min-width: 1001px)";

const useIsDesktop = () => {
  const subscribe = useCallback((notify: () => void) => {
    const query = window.matchMedia(DESKTOP_QUERY);
    query.addEventListener("change", notify);
    return () => query.removeEventListener("change", notify);
  }, []);

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false,
  );
};

const toStackedLines = (value: string) => {
  const [first, ...rest] = value.split(" ");
  return [first, rest.join(" ")].filter(Boolean);
};

const HomeHero = () => {
  const [nameFilled, nameOutlined] = toStackedLines(landingName);
  const prefersReducedMotion = useReducedMotion();
  const isDesktop = useIsDesktop();
  const animated = isDesktop && !prefersReducedMotion;
  const motionProps = animated
    ? { initial: "clipped" as const, animate: "spread" as const }
    : {};

  const { scrollY } = useScroll();
  const portraitTilt = useTransform(scrollY, SCROLL_TILT_RANGE, PORTRAIT_TILT);
  const folderTilt = useTransform(scrollY, SCROLL_TILT_RANGE, FOLDER_TILT);

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

      <HeroLower
        key={animated ? "animated" : "static"}
        {...motionProps}
        variants={groupVariants}
      >
        <HeroPortrait variants={portraitVariants}>
          <HeroTilt style={animated ? { rotate: portraitTilt } : undefined}>
            <HeroClip variants={clipVariants}>
              <Paperclip />
            </HeroClip>
            <Image
              src={heroPortraitPath}
              alt={heroPortraitAlt}
              width={600}
              height={747}
              sizes="(min-width: 1001px) 7vw, 22.5vw"
              priority
            />
          </HeroTilt>
        </HeroPortrait>

        <HeroFolder variants={folderVariants}>
          <HeroTilt style={animated ? { rotate: folderTilt } : undefined}>
            <Folder>
              <HeroBio>{landingBio}</HeroBio>
            </Folder>
          </HeroTilt>
        </HeroFolder>
      </HeroLower>

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
    </HeroSection>
  );
};

export default HomeHero;
