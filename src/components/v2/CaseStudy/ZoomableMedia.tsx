import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Maximize2, X } from "lucide-react";
import { cloudinaryUrl } from "../../../lib/cloudinary";
import type { MediaContent } from "../../../../scripts/const/projects";
import { closeLabel, enlargeLabel } from "../../../consts.v2.case";
import {
  CloseButton,
  Lightbox,
  Overlay,
  Tile,
  ZoomHint,
} from "./MediaBento.styles";

const ZoomableMedia = ({
  item,
  label,
  ratio,
  sizes,
}: {
  item: MediaContent;
  label: string;
  ratio: string;
  sizes: string;
}) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Tile $ratio={ratio}>
        {item.type === "video" ? (
          <video
            src={cloudinaryUrl(item.src)}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <Image src={item.src} alt={label} fill sizes={sizes} quality={75} />
        )}
        <ZoomHint aria-hidden="true">
          <Maximize2 size={14} />
        </ZoomHint>
        <VisuallyHidden.Root>
          {enlargeLabel} {label}
        </VisuallyHidden.Root>
      </Tile>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Overlay />
      <Lightbox aria-describedby={undefined}>
        <VisuallyHidden.Root asChild>
          <Dialog.Title>{label}</Dialog.Title>
        </VisuallyHidden.Root>

        {item.type === "video" ? (
          <video
            src={cloudinaryUrl(item.src)}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        ) : (
          <img src={cloudinaryUrl(item.src, { width: 1600 })} alt={label} />
        )}

        <Dialog.Close asChild>
          <CloseButton>
            <X size={16} aria-hidden="true" />
            {closeLabel}
          </CloseButton>
        </Dialog.Close>
      </Lightbox>
    </Dialog.Portal>
  </Dialog.Root>
);

export default ZoomableMedia;
