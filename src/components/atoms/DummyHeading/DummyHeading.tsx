import { ReactNode } from "react";
import { Heading } from "./DummyHeading.styles";

const DummyHeading = ({
  sizing = 2,
  fontColor = "var(--accent-color)",
  children,
}: {
  sizing?: number;
  fontColor?: string;
  children: ReactNode;
}) => {
  return (
    <Heading sizing={sizing} fontColor={fontColor}>
      {children}
    </Heading>
  );
};

export default DummyHeading;
