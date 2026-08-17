import type { CSSProperties, ReactNode } from "react";
import Notebook from "../Notebook/Notebook";
import Button from "../Button/Button";
import {
  SectionHeading,
  HeadingFilled,
  HeadingOutlined,
  SectionBody,
  SectionActions,
} from "./NotebookSection.styles";

export type SectionAction = {
  label: string;
  href: string;
  icon?: ReactNode;
};

export type NotebookSectionProps = {
  id: string;

  heading: string;
  background: string;
  color: string;
  actions?: SectionAction[];
  children?: ReactNode;
};

const NotebookSection = ({
  id,
  heading,
  background,
  color,
  actions,
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
      margin="clamp(2.5rem, 4vw, 8rem)"
      radius="0.5rem"
      contentGap="2rem"
      minHeight="100svh"
      style={surface}
    >
      <SectionHeading id={headingId}>
        <HeadingFilled>{filled}</HeadingFilled>{" "}
        <HeadingOutlined>{outlined}</HeadingOutlined>
      </SectionHeading>

      {children ? <SectionBody>{children}</SectionBody> : null}

      {actions?.length ? (
        <SectionActions>
          {actions.map((action) => (
            <Button
              key={action.href}
              asChild
              variant="outline"
              size="lg"
              icon={action.icon}
            >
              <a href={action.href}>{action.label}</a>
            </Button>
          ))}
        </SectionActions>
      ) : null}
    </Notebook>
  );
};

export default NotebookSection;
