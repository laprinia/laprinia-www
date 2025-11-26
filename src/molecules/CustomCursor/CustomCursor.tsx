import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import cursorImage from "../../../public/cursor.avif";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(25);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const updateCursorSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
      setSize(20);
    } else if (screenWidth >= 600 && screenWidth < 900) {
      setSize(20);
    } else {
      setSize(25);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    updateCursorSize();

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        const { clientX: x, clientY: y } = e;
        if (!isVisible) setIsVisible(true);

        requestAnimationFrame(() => {
          cursorRef.current!.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
      }
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", updateCursorSize);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateCursorSize);
    };
  }, [isVisible]);

  return !isMobile ? (
    <aside
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${cursorImage.src})`,
        backgroundSize: "cover",
        willChange: "transform",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.2s ease-out",
      }}
    />
  ) : (
    <></>
  );
};

export default CustomCursor;
