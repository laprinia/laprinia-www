import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { HorseCanvas } from "../../templates/DesktopHome/HorseCanvas";
import CursorWaveTexture from "../../molecules/Texture/CursorWaveTexture";
import { mobileHeroPath } from "../../../consts";

/** Matches the existing homepage's `window.innerWidth <= 1000` device branch. */
const SMALL_SCREEN = "(max-width: 1000px)";

/**
 * Client-only WebGL island. Everything around it is server-rendered.
 *
 * The device branch lives here, after mount, rather than at the page level —
 * that is what lets the rest of the homepage ship as real HTML. Renders null
 * until the media query resolves, so no canvas is ever built for the wrong
 * breakpoint and only one WebGL context is ever created.
 */
const HeroCanvas = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia(SMALL_SCREEN);
    const sync = () => setIsSmallScreen(query.matches);

    sync();
    query.addEventListener("change", sync);

    return () => query.removeEventListener("change", sync);
  }, []);

  if (isSmallScreen === null) return null;

  if (isSmallScreen) {
    return (
      <Canvas>
        <ambientLight intensity={3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <CursorWaveTexture texturePath={mobileHeroPath} isAutoAnimated />
      </Canvas>
    );
  }

  return <HorseCanvas />;
};

export default HeroCanvas;
