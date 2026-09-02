import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Maximize2, X } from "lucide-react";
import { cloudinaryUrl } from "../../lib/cloudinary";
import type { MediaContent } from "../../../scripts/const/projects";
import {
  closeLabel,
  enlargeLabel,
  zoomHintLabel,
} from "../../consts.case";
import {
  CloseButton,
  Frame,
  Lightbox,
  Overlay,
  Tile,
  ZoomHint,
} from "./MediaBento.styles";

const MAX_ZOOM = 2;

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
}) => {
  const [zoomed, setZoomed] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const toggleZoom = useCallback(() => {
    setZoomed((previous) => {
      const next = !previous;
      const frame = frameRef.current;
      if (frame && next) {
        requestAnimationFrame(() => {
          frame.scrollTo({
            left: (frame.scrollWidth - frame.clientWidth) / 2,
            top: (frame.scrollHeight - frame.clientHeight) / 2,
          });
        });
      }
      return next;
    });
  }, []);

  const isVideo = item.type === "video";

  return (
    <Dialog.Root onOpenChange={(open) => !open && setZoomed(false)}>
      <Dialog.Trigger asChild>
        <Tile $ratio={ratio}>
          {isVideo ? (
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
            <Maximize2 size={13} />
            {zoomHintLabel}
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

          {isVideo ? (
            <video
              src={cloudinaryUrl(item.src)}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          ) : (
            <Frame
              ref={frameRef}
              data-zoomed={zoomed ? "true" : undefined}
              style={
                { "--media-zoom": zoomed ? MAX_ZOOM : 1 } as React.CSSProperties
              }
            >
              <img
                src={cloudinaryUrl(item.src, { width: 1600 })}
                alt={label}
                onClick={toggleZoom}
              />
            </Frame>
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
};

export default ZoomableMedia;
