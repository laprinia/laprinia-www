import { type ComponentType, type CSSProperties } from "react";
import {
  trustRibbonCompanies,
  trustRibbonLabel,
  trustRibbonMarqueeSpeed,
} from "../../../consts.v2";
import type { LogoProps } from "./logos/types";
import Adobe from "./logos/Adobe";
import SiemensEnergy from "./logos/SiemensEnergy";
import Engie from "./logos/Engie";
import Ubisoft from "./logos/Ubisoft";
import InThePocket from "./logos/InThePocket";
import Kbc from "./logos/Kbc";
import Dytto from "./logos/Dytto";
import {
  Banner,
  Inner,
  Label,
  Viewport,
  Track,
  Group,
  LogoItem,
} from "./TrustRibbon.styles";

const logos: Record<string, ComponentType<LogoProps>> = {
  adobe: Adobe,
  "siemens-energy": SiemensEnergy,
  engie: Engie,
  ubisoft: Ubisoft,
  "in-the-pocket": InThePocket,
  kbc: Kbc,
  dytto: Dytto,
};

const marqueeRuns = [0, 1, 2];

const LogoRun = ({ run }: { run: number }) => (
  <Group aria-hidden={run > 0 || undefined}>
    {trustRibbonCompanies.map((company) => {
      const Logo = logos[company.id];
      if (!Logo) return null;

      return (
        <LogoItem
          key={company.id}
          style={{ "--logo-scale": company.opticalScale } as CSSProperties}
        >
          <Logo titleId={`trust-ribbon-${run}-${company.id}`} />
        </LogoItem>
      );
    })}
  </Group>
);

const TrustRibbon = ({
  label = trustRibbonLabel,
  speed = trustRibbonMarqueeSpeed,
  tone = "accent",
  bordered = true,
  variant = "band",
}: {
  label?: string;
  speed?: string;
  tone?: "accent" | "neutral";
  bordered?: boolean;
  variant?: "band" | "inline";
}) => (
  <Banner
    data-bordered={bordered}
    data-variant={variant}
    style={
      tone === "neutral"
        ? ({ "--ribbon-ink": "var(--neutral-700)" } as CSSProperties)
        : undefined
    }
  >
    <Inner>
      <Label>{label}</Label>

      <Viewport>
        <Track style={{ "--ribbon-speed": speed } as CSSProperties}>
          {marqueeRuns.map((run) => (
            <LogoRun key={run} run={run} />
          ))}
        </Track>
      </Viewport>
    </Inner>
  </Banner>
);

export default TrustRibbon;
