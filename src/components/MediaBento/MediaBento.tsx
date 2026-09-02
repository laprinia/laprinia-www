import ZoomableMedia from "./ZoomableMedia";
import type { MediaContent } from "../../../scripts/const/projects";
import { Bento } from "./MediaBento.styles";

const MediaBento = ({
  items,
  label,
}: {
  items: MediaContent[];
  label: string;
}) => {
  if (!items.length) return null;

  const spansFirst = items.length > 2 && items.length % 2 === 1;

  return (
    <Bento $count={items.length}>
      {items.map((item, index) => (
        <ZoomableMedia
          key={item.src}
          item={item}
          label={`${label} - ${index + 1}`}
          ratio={
            items.length === 1 || (spansFirst && index === 0)
              ? "16 / 9"
              : "4 / 3"
          }
          sizes="(min-width: 1000px) 45vw, 100vw"
        />
      ))}
    </Bento>
  );
};

export default MediaBento;
