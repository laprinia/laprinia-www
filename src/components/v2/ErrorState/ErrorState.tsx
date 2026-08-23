import { ArrowRight } from "lucide-react";
import Button from "../Button/Button";
import {
  ErrorGround,
  Face,
  Code,
  Title,
  Mark,
  Message,
  Actions,
} from "./ErrorState.styles";

export type ErrorStateProps = {
  code?: string;
  title: string;
  highlight?: string;
  message: string;
  actionLabel?: string;
  actionHref?: string;
};

const ErrorState = ({
  code,
  title,
  highlight,
  message,
  actionLabel = "back home",
  actionHref = "/",
}: ErrorStateProps) => (
  <ErrorGround>
    <Face aria-hidden="true">:&apos;(</Face>

    {code ? <Code>{code}</Code> : null}

    <Title>
      {title}
      {highlight ? (
        <>
          {" "}
          <Mark>{highlight}</Mark>
        </>
      ) : null}
    </Title>

    <Message>{message}</Message>

    <Actions>
      <Button
        asChild
        variant="outline"
        size="lg"
        icon={<ArrowRight strokeWidth={2.5} />}
      >
        <a href={actionHref}>{actionLabel}</a>
      </Button>
    </Actions>
  </ErrorGround>
);

export default ErrorState;
