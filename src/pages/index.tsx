import React, { useState, useEffect } from "react";
import { footerHeroPath, headerHeroPath, mobileHeroPath } from "../consts";
import NoWebGL from "../templates/NoWebGL/NoWebGL";
import dynamic from "next/dynamic";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const DesktopHome = dynamic(
    () => import("../templates/DesktopHome/DesktopHome"),
    {
      loading: () => <p>Loading...</p>,
      ssr: false,
    },
  );
  const MobileHome = dynamic(
    () => import("../templates/MobileHome/MobileHome"),
    {
      loading: () => <p>Loading...</p>,
      ssr: false,
    },
  );
  useEffect(() => {
    const isWebGLAvailable = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl"))
        );
      } catch (e) {
        return false;
      }
    };
    setWebglSupported(isWebGLAvailable());
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return webglSupported ? (
    isMobile ? (
      <MobileHome mobileHeroPath={mobileHeroPath} />
    ) : (
      <DesktopHome
        headerHeroPath={headerHeroPath}
        footerHeroPath={footerHeroPath}
      />
    )
  ) : (
    <NoWebGL />
  );
};

export default Home;
