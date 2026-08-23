import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  type MutableRefObject,
  type ReactNode,
  type RefObject,
} from "react";
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
): CoverFade => {
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: coverRef,
    offset: ["start end", "start start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1, 0.94],
  );

  return { opacity, scale };
};

export type StackLayerProps = {
  children: ReactNode;
  fade?: CoverFade;
  zIndex?: number;
};

const StackLayer = forwardRef<HTMLDivElement, StackLayerProps>(
  function StackLayer({ children, fade, zIndex = 0 }, ref) {
    const layerRef = useRef<HTMLDivElement | null>(null);

    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        layerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref)
          (ref as MutableRefObject<HTMLDivElement | null>).current = node;
      },
      [ref],
    );

    useEffect(() => {
      const node = layerRef.current;
      if (!node) return;

      const readSmallViewportHeight = () => {
        const probe = document.createElement("div");
        probe.style.cssText =
          "position:absolute;top:0;left:0;width:0;height:100svh;visibility:hidden;pointer-events:none";
        document.body.appendChild(probe);
        const height = probe.getBoundingClientRect().height;
        probe.remove();
        return height || window.innerHeight;
      };

      const syncStickyOffset = () => {
        const overflow = node.offsetHeight - readSmallViewportHeight();
        node.style.setProperty(
          "--layer-top",
          overflow > 0 ? `${-overflow}px` : "0px",
        );
      };

      syncStickyOffset();

      const observer = new ResizeObserver(syncStickyOffset);
      observer.observe(node);
      window.addEventListener("resize", syncStickyOffset);

      return () => {
        observer.disconnect();
        window.removeEventListener("resize", syncStickyOffset);
      };
    }, []);

    return (
      <Layer ref={setRefs} style={fade ? { zIndex, ...fade } : { zIndex }}>
        {children}
      </Layer>
    );
  },
);

export default StackLayer;
