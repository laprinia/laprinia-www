import { forwardRef, type ReactNode, type RefObject } from "react";
import {
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { Layer } from "./StackLayer.styles";

export type CoverFade = {
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
};

export const useCoverFade = (
  coverRef: RefObject<HTMLDivElement | null>,
): CoverFade | undefined => {
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: coverRef,
    offset: ["start end", "start start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return prefersReducedMotion ? undefined : { opacity, scale };
};

export type StackLayerProps = {
  children: ReactNode;

  fade?: CoverFade;
  zIndex?: number;
};

const StackLayer = forwardRef<HTMLDivElement, StackLayerProps>(
  function StackLayer({ children, fade, zIndex = 0 }, ref) {
    return (
      <Layer ref={ref} style={fade ? { zIndex, ...fade } : { zIndex }}>
        {children}
      </Layer>
    );
  },
);

export default StackLayer;
