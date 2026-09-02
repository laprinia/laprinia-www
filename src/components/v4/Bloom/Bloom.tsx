import { useEffect, useState, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";
import { Spotlight, Drift } from "./Bloom.styles";

const drifts: CSSProperties[] = [
  {
    left: "-10vw",
    top: "14vh",
    width: "min(38vw, 520px)",
    filter: "blur(110px)",
    opacity: 0.2,
  },
  {
    right: "-6vw",
    top: "78vh",
    width: "min(30vw, 420px)",
    filter: "blur(100px)",
    opacity: 0.16,
  },
  {
    left: "22vw",
    top: "172vh",
    width: "min(34vw, 460px)",
    filter: "blur(120px)",
    opacity: 0.13,
  },
  {
    right: "14vw",
    top: "250vh",
    width: "min(26vw, 360px)",
    filter: "blur(100px)",
    opacity: 0.15,
  },
];

const Bloom = () => {
  const [spot, setSpot] = useState({ x: 400, y: 300 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const onMove = (event: MouseEvent) => {
      setSpot({ x: Math.round(event.clientX), y: Math.round(event.clientY) });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [prefersReducedMotion]);

  return (
    <div aria-hidden="true">
      <Spotlight style={{ left: `${spot.x}px`, top: `${spot.y}px` }} />
      {drifts.map((style, index) => (
        <Drift key={index} style={style} />
      ))}
    </div>
  );
};

export default Bloom;
