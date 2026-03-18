import { useState, useEffect, useRef } from "react";
import { Wrapper, Asterisk, Pill } from "./CustomCursor.styles";

const CustomCursor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);

  const [text, setText] = useState<string | null>(null);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isHoverDevice = window.matchMedia("(hover: hover)").matches;
    if (!isHoverDevice) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const textEl = el.closest<HTMLElement>("[data-cursor-text]");
      setText(textEl?.dataset.cursorText ?? null);
      const hideEl = el.closest("[data-cursor-hide]");
      setActive(!!hideEl && !textEl);
    };

    const onLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };

    const onEnter = () => {
      visibleRef.current = true;
      setVisible(true);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (!enabled) return null;

  return (
    <Wrapper ref={ref} $visible={visible}>
      <Asterisk $hidden={!!text} $active={active}>*</Asterisk>
      <Pill $visible={!!text}>
        <span>{text}</span>
      </Pill>
    </Wrapper>
  );
};

export default CustomCursor;
