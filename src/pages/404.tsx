import NavBar from "../organisms/NavBar/NavBar";
import { navItems, notFoundPath } from "../consts";
import Layout from "../organisms/Layout/Layout";
import React from "react";
import { Canvas } from "@react-three/fiber";
import CursorWaveTexture from "../molecules/Texture/CursorWaveTexture";
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

export default function Custom404() {
  return (
    <Layout>
      <NavBar items={navItems} highlightedIndex={1} />
      <CanvasSectionWrapper>
        <CanvasSection>
          <Canvas>
            <ambientLight intensity={3} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <CursorWaveTexture texturePath={notFoundPath} isAutoAnimated />
          </Canvas>
        </CanvasSection>
      </CanvasSectionWrapper>
    </Layout>
  );
}
