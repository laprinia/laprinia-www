import Image from "next/image";
import TrustRibbon from "../../v2/TrustRibbon/TrustRibbon";
import {
  v4HeroName,
  v4HeroRibbon,
  v4HeroTagline,
  v4PhotoboothAlt,
  v4PhotoboothPath,
} from "../../../consts.v4";
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
    src={v4PhotoboothPath}
    alt={v4PhotoboothAlt}
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
        <RibbonRole>{v4HeroRibbon.role}</RibbonRole>
        <RibbonPlace>{v4HeroRibbon.location}</RibbonPlace>
        <RibbonStatus>{v4HeroRibbon.status}</RibbonStatus>
      </Ribbon>

      <Stack>
        <InlineStrip>{stripImage}</InlineStrip>

        <Name>
          {v4HeroName[0]}
          <br />
          {v4HeroName[1]}
        </Name>

        <Tagline>
          {v4HeroTagline.lead}
          <Shipped>{v4HeroTagline.highlight}</Shipped>
          {v4HeroTagline.tail}
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
