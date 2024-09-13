import React from "react";
import NavBar from "../organisms/NavBar/NavBar";
import { navItems, somethingWentWrongPath } from "../consts";
import { Canvas } from "@react-three/fiber";
import CursorWaveTexture from "../molecules/Texture/CursorWaveTexture";
import Layout from "../organisms/Layout/Layout";
import styled from "styled-components";

function ErrorPage({ statusCode }: { statusCode: number }) {
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

ErrorPage.getInitialProps = ({ res, err }: { res: any; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
