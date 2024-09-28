import React, { useState, useEffect } from "react";
import { footerHeroPath, headerHeroPath, mobileHeroPath } from "../consts";
import MobileHome from "../templates/MobileHome/MobileHome";
import DesktopHome from "../templates/DesktopHome/DesktopHome";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? (
    <MobileHome mobileHeroPath={mobileHeroPath} />
  ) : (
    <DesktopHome
      headerHeroPath={headerHeroPath}
      footerHeroPath={footerHeroPath}
    />
  );
};

export default Home;
