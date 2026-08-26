import { useState } from "react";
import Image from "next/image";
import { cloudinaryMotionUrl, cloudinaryRawUrl } from "../../../lib/cloudinary";
import {
  TileLink,
  TileThumb,
  TileMotion,
  TileStill,
  TileName,
  TileMeta,
} from "./LabTile.styles";

const MOTION_TILE_WIDTH = 600;

export type LabTileProps = {
  title: string;
  imageSrc: string;
  motionSrc?: string;
  year: number;
  tag?: string;
  href: string;
};

const LabTile = ({
  title,
  imageSrc,
  motionSrc,
  year,
  tag,
  href,
}: LabTileProps) => {
  const [motionFailed, setMotionFailed] = useState(false);

  return (
    <TileLink href={href}>
      <TileThumb data-motion={motionSrc ? "true" : undefined}>
        {motionSrc ? (
          <TileMotion
            src={
              motionFailed
                ? cloudinaryRawUrl(motionSrc)
                : cloudinaryMotionUrl(motionSrc, MOTION_TILE_WIDTH)
            }
            alt=""
            loading="lazy"
            onError={() => setMotionFailed(true)}
          />
        ) : null}
        <TileStill>
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="(min-width: 768px) 24vw, 46vw"
            quality={75}
          />
        </TileStill>
      </TileThumb>
      <TileName>{title}</TileName>
      <TileMeta>{tag ? `${year} · ${tag}` : year}</TileMeta>
    </TileLink>
  );
};

export default LabTile;
