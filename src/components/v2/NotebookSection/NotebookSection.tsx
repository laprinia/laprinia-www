import type { CSSProperties, ReactNode } from "react";
import { CornerRightDown } from "lucide-react";
import Notebook from "../Notebook/Notebook";
import Button from "../Button/Button";
import {
  SectionHeading,
  HeadingFilled,
  HeadingOutlined,
  SectionBody,
  SectionCta,
} from "./NotebookSection.styles";

export type NotebookSectionProps = {
  id: string;

  heading: string;
  background: string;
  color: string;
  cta?: { label: string; href: string };
  children?: ReactNode;
};

const NotebookSection = ({
  id,
  heading,
  background,
  color,
  cta,
  children,
}: NotebookSectionProps) => {
  const [filled, ...rest] = heading.split(" ");
  const outlined = rest.join(" ");
  const headingId = `${id}-heading`;

  const surface = {
    "--section-ink": color,
    "--button-ink": color,
    "--button-on-ink": background,
  } as CSSProperties;

  return (
    <Notebook
      as="section"
      id={id}
      aria-labelledby={headingId}
      background={background}
      color={color}
      margin="clamp(1.25rem, 2vw, 2rem)"
      radius="0.5rem"
      minHeight="100svh"
      style={surface}
    >
      <SectionHeading id={headingId}>
        <HeadingFilled>{filled}</HeadingFilled>{" "}
        <HeadingOutlined>{outlined}</HeadingOutlined>
      </SectionHeading>

      {children ? <SectionBody>{children}</SectionBody> : null}

      {cta ? (
        <SectionCta>
          <Button
            asChild
            variant="outline"
            size="lg"
            icon={<CornerRightDown strokeWidth={2.5} />}
          >
            <a href={cta.href}>{cta.label}</a>
          </Button>
        </SectionCta>
      ) : null}
    </Notebook>
  );
};

export default NotebookSection;
