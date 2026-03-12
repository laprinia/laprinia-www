import { DesktopContainer, TextContainer } from "./NoWebGL.styles";

const NoWebGL = () => {
  return (
    <DesktopContainer>
      <TextContainer>
        <p aria-labelledby=":p">:p</p>
        <p aria-labelledby="no-webgl-found">
          /*This website uses WebGL. Please make sure your browser supports
          it.*/
        </p>
      </TextContainer>
    </DesktopContainer>
  );
};

export default NoWebGL;
