import Image from "next/image";
import TrustRibbon from "../TrustRibbon/TrustRibbon";
import {
  heroName,
  heroRibbon,
  heroTagline,
  photoboothAlt,
  photoboothPath,
  portraitAlt,
  portraitPath,
} from "../../consts.site";
import {
  Header,
  Intro,
  Ribbon,
  Position,
  RibbonRole,
  RibbonPlace,
  Availability,
  RibbonStatus,
  Stack,
  Name,
  Tagline,
  Shipped,
  InlineStrip,
  Strip,
  RibbonRow,
} from "./HomeHero.styles";

const portraitImage = (
  <Image
    src={portraitPath}
    alt={portraitAlt}
    width={802}
    height={1088}
    sizes="(min-width: 1000px) 1vw, 40vw"
    priority
  />
);

const stripImage = (
  <Image
    src={photoboothPath}
    alt={photoboothAlt}
    width={802}
    height={2177}
    sizes="(min-width: 1000px) 30vw, 1vw"
    priority
  />
);

const HomeHeroV4 = () => (
  <Header id="top">
    <Intro>
      <Ribbon>
        <Position>
          <RibbonRole>{heroRibbon.role}</RibbonRole>
          <RibbonPlace>{heroRibbon.location}</RibbonPlace>
        </Position>

        <Availability>
          <RibbonStatus>{heroRibbon.status}</RibbonStatus>
          <InlineStrip>{portraitImage}</InlineStrip>
        </Availability>
      </Ribbon>

      <Stack>
        <Name>
          {heroName[0]}
          <br />
          {heroName[1]}
        </Name>

        <Tagline>
          {heroTagline.lead}
          <Shipped>{heroTagline.highlight}</Shipped>
          {heroTagline.tail}
        </Tagline>
      </Stack>
    </Intro>

    <Strip>{stripImage}</Strip>

    <RibbonRow>
      <TrustRibbon
        speed="30s"
        tone="neutral"
        variant="inline"
        bordered={false}
      />
    </RibbonRow>
  </Header>
);

export default HomeHeroV4;
