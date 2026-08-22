import { useEffect, useLayoutEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import type { Metric } from "../../../../scripts/const/projects";
import { Card, Label, Value } from "./MetricCard.styles";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

const MetricCard = ({ value, prefix, suffix, label }: Metric) => {
  const numberRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLLIElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  const target = typeof value === "number" ? value : Number(value);
  const animated = Number.isFinite(target) && !prefersReducedMotion;
  const decimals = String(value).split(".")[1]?.length ?? 0;

  // The final value is what renders on the server, so it survives with JS off.
  // Resetting to 0 in a layout effect happens before paint, so the count-up
  // starts from 0 without the final value flashing first.
  useIsomorphicLayoutEffect(() => {
    if (animated && numberRef.current) {
      numberRef.current.textContent = (0).toFixed(decimals);
    }
  }, [animated, decimals]);

  useEffect(() => {
    const node = numberRef.current;
    if (!animated || !inView || !node) return;

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = latest.toFixed(decimals);
      },
    });

    return () => controls.stop();
  }, [animated, inView, target, decimals]);

  return (
    <Card ref={cardRef}>
      <Value>
        {prefix}
        <span ref={numberRef}>{value}</span>
        {suffix}
      </Value>
      <Label>{label}</Label>
    </Card>
  );
};

export default MetricCard;
