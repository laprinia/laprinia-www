import React from "react";
import DummyContainer from "../atoms/DummyContainer/DummyContainer";
import DummyHeading from "../atoms/DummyHeading/DummyHeading";
import DummyParagraph from "../atoms/DummyParagraph/DummyParagraph";

const Contact = () => (
  <DummyContainer>
    <DummyHeading sizing={4}>Contact</DummyHeading>
    <DummyParagraph sizing={2}>
      Hi it's me laprinia. Get in touch with me.
    </DummyParagraph>
  </DummyContainer>
);

export default Contact;
