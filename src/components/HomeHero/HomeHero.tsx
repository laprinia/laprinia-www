import Image from "next/image";
import TrustRibbon from "../TrustRibbon/TrustRibbon";
import {
  heroName,
  heroRibbon,
  heroTagline,
  photoboothAlt,
  photoboothPath,
} from "../../consts.site";
import {
  Header,
  Intro,
  Ribbon,
  RibbonRole,
  RibbonPlace,
  RibbonStatus,
  Stack,
  Name,
  Tagline,
  Shipped,
  InlineStrip,
  Strip,
  RibbonRow,
} from "./HomeHero.styles";

const stripImage = (
  <Image
    src={photoboothPath}
    alt={photoboothAlt}
    width={802}
    height={2177}
    sizes="(min-width: 1000px) 30vw, 40vw"
    priority
  />
);

const HomeHeroV4 = () => (
  <Header id="top">
    <Intro>
      <Ribbon>
        <RibbonRole>{heroRibbon.role}</RibbonRole>
        <RibbonPlace>{heroRibbon.location}</RibbonPlace>
        <RibbonStatus>{heroRibbon.status}</RibbonStatus>
      </Ribbon>

      <Stack>
        <InlineStrip>{stripImage}</InlineStrip>

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
