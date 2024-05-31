import React from "react";
import DummyContainer from "../atoms/DummyContainer/DummyContainer";
import DummyHeading from "../atoms/DummyHeading/DummyHeading";
import DummyParagraph from "../atoms/DummyParagraph/DummyParagraph";

const About = () => (
  <DummyContainer>
    <DummyHeading sizing={4}>About</DummyHeading>
    <DummyParagraph sizing={2}>
      Hi it's me laprinia. Learn all about me.
    </DummyParagraph>
  </DummyContainer>
);

export default About;
