import type { ComponentPropsWithoutRef } from "react";
import { Ribbon, Highlight, Muted, Status } from "./MetaRibbon.styles";

export type MetaRibbonProps = {
  highlight: string;
  muted: string;
  status: string;
} & ComponentPropsWithoutRef<"p">;

const MetaRibbon = ({ highlight, muted, status, ...rest }: MetaRibbonProps) => (
  <Ribbon {...rest}>
    <Highlight>{highlight}</Highlight>
    <Muted>{muted}</Muted>
    <Status>{status}</Status>
  </Ribbon>
);

export default MetaRibbon;
