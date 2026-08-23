import { ArrowRight } from "lucide-react";
import Button from "../Button/Button";
import {
  ErrorGround,
  Face,
  Code,
  Title,
  Mark,
  Message,
  Detail,
  Actions,
} from "./ErrorState.styles";

export type ErrorStateProps = {
  code?: string;
  title: string;
  highlight?: string;
  message: string;
  actionLabel?: string;
  actionHref?: string;
  detail?: string | null;
};

const ErrorState = ({
  code,
  title,
  highlight,
  message,
  actionLabel = "back home",
  actionHref = "/",
  detail,
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

    {detail ? <Detail>{detail}</Detail> : null}

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
