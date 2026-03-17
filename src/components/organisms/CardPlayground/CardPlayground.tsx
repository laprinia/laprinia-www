import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PlaygroundContainer } from "./CardPlayground.styles";
import { cloudinary3dUrl, cloudinaryUrl } from "../../../lib/cloudinary";

const BASE_SIZE = 80;

interface PlaycardItem {
  src: string;
  type: "svg" | "image";
  scale: number;
}

const PLAYCARD_ITEMS: PlaycardItem[] = [
  { src: "/playcards/ball.svg", type: "svg", scale: 0.8 },
  { src: "/playcards/chess.svg", type: "svg", scale: 1.1 },
  { src: "/playcards/dice.svg", type: "svg", scale: 0.6 },
  { src: "/playcards/domino.svg", type: "svg", scale: 1.2 },
  { src: "/playcards/johnny.svg", type: "svg", scale: 1.3 },
  { src: "/playcards/joker.svg", type: "svg", scale: 1.5 },
  { src: "/playcards/letter.svg", type: "svg", scale: 0.75 },
  { src: "/playcards/seal.svg", type: "svg", scale: 1 },
  { src: "/playcards/sharpner.svg", type: "svg", scale: 1.0 },
  { src: "/playcards/card-1.png", type: "image", scale: 2.5 },
  { src: "/playcards/card-2.png", type: "image", scale: 2.5 },
  { src: "/playcards/card-3.png", type: "image", scale: 2.5 },
];

const resolveUrl = (item: PlaycardItem): string => {
  return item.type === "svg"
    ? cloudinary3dUrl(item.src)
    : cloudinaryUrl(item.src);
};

const CardPlayground = ({ interactive = true }: { interactive?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const zCounter = useRef(PLAYCARD_ITEMS.length);
  const [zIndices, setZIndices] = useState<number[]>(() =>
    PLAYCARD_ITEMS.map((_, i) => i),
  );

  const [shuffled, setShuffled] = useState<
    | {
        item: PlaycardItem;
        left: string;
        top: string;
        rotate: number;
        throwX: number;
        throwY: number;
      }[]
    | null
  >(null);

  useEffect(() => {
    const spread = 20;
    const ordered = PLAYCARD_ITEMS.map((card) => {
      const size = (BASE_SIZE * card.scale) / 2;
      const angle = Math.random() * Math.PI * 2;
      const distance = 30 + Math.random() * 60;
      return {
        item: card,
        left: `calc(50% - ${size}px + ${(Math.random() - 0.5) * 2 * spread}%)`,
        top: `calc(50% - ${size}px + ${(Math.random() - 0.5) * 2 * spread}%)`,
        rotate: Math.random() * 30 - 15,
        throwX: Math.cos(angle) * distance,
        throwY: Math.sin(angle) * distance,
      };
    });
    for (let i = ordered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ordered[i], ordered[j]] = [ordered[j], ordered[i]];
    }
    setShuffled(ordered);
  }, []);

  const bringToFront = (index: number) => {
    const next = zCounter.current++;
    setZIndices((prev) => {
      const copy = [...prev];
      copy[index] = next;
      return copy;
    });
  };

  if (!shuffled)
    return (
      <PlaygroundContainer ref={containerRef} $interactive={interactive} />
    );

  return (
    <PlaygroundContainer ref={containerRef} $interactive={interactive}>
      {shuffled.map(({ item, left, top, rotate, throwX, throwY }, i) => (
        <motion.img
          key={item.src}
          src={resolveUrl(item)}
          alt=""
          draggable={false}
          drag={interactive}
          dragConstraints={interactive ? false : undefined}
          dragElastic={0}
          dragMomentum={false}
          onPointerDown={interactive ? () => bringToFront(i) : undefined}
          initial={{ rotate: 0, opacity: 0, scale: 0.5, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1, x: throwX, y: throwY, rotate }}
          whileTap={
            interactive
              ? {
                  scale: 1.08,
                  rotateX: -3,
                  filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.4))",
                }
              : undefined
          }
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: i * 0.05,
          }}
          style={{
            position: "absolute",
            left,
            top,
            width: BASE_SIZE * item.scale,
            height: BASE_SIZE * item.scale,
            zIndex: zIndices[i],
            cursor: interactive ? "grab" : "default",
            objectFit: "contain",
            transformStyle: "preserve-3d",
            pointerEvents: interactive ? "auto" : "none",
            filter: "drop-shadow(0 4px 8px rgba(60, 60, 60, 0.25))",
          }}
        />
      ))}
    </PlaygroundContainer>
  );
};

export default CardPlayground;
