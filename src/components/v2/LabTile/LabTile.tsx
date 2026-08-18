import Image from "next/image";
import { cloudinaryRawUrl } from "../../../lib/cloudinary";
import {
  TileLink,
  TileThumb,
  TileMotion,
  TileStill,
  TileName,
  TileMeta,
} from "./LabTile.styles";

export type LabTileProps = {
  title: string;
  imageSrc: string;
  motionSrc: string;
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
}: LabTileProps) => (
  <TileLink href={href}>
    <TileThumb>
      <TileMotion src={cloudinaryRawUrl(motionSrc)} alt="" loading="lazy" />
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

export default LabTile;
