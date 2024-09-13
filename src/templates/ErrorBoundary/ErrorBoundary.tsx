import React, { useState, useEffect } from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import { navItems, somethingWentWrongPath } from "../../consts";
import { Canvas } from "@react-three/fiber";
import CursorWaveTexture from "../../molecules/Texture/CursorWaveTexture";
import Layout from "../../organisms/Layout/Layout";
import styled from "styled-components";

const CanvasSectionWrapper = styled.section`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;
const CanvasSection = styled.article`
  width: 100%;
  height: 100%;
`;

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error: Error) => {
    console.error("Uncaught error:", error);
    setHasError(true);
  };

  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      handleError(event.reason);
    };

    const handleErrorEvent = (event: Event) => {
      const errorEvent = event as ErrorEvent;
      handleError(errorEvent.error);
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    window.addEventListener("error", handleErrorEvent);

    return () => {
      window.removeEventListener(
        "unhandledrejection",
        handleUnhandledRejection,
      );
      window.removeEventListener("error", handleErrorEvent);
    };
  }, []);

  if (hasError) {
    return (
      <Layout>
        <NavBar items={navItems} highlightedIndex={1} />
        <CanvasSectionWrapper>
          <CanvasSection>
            <Canvas>
              <ambientLight intensity={3} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <CursorWaveTexture
                texturePath={somethingWentWrongPath}
                isAutoAnimated
              />
            </Canvas>
          </CanvasSection>
        </CanvasSectionWrapper>
      </Layout>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
