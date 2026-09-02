import type { CSSProperties } from "react";
import Image from "next/image";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Tag from "../../v2/Tag/Tag";
import { toProjectSlug } from "../../../lib/projects";
import type { RowVariant } from "./ProjectRow.styles";
import {
  Row,
  Meta,
  Head,
  Index,
  Title,
  TitleLink,
  Description,
  Roles,
  Shot,
} from "./ProjectRow.styles";

export type ProjectRowProps = {
  name: string;
  description: string;
  roles: string[];
  headshot: string;
  variant?: RowVariant;
  index?: number;
  meta?: string;
  tilt?: string;
  active: boolean;
  filtered?: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
};

const ProjectRow = ({
  name,
  description,
  roles,
  headshot,
  variant = "feature",
  index,
  meta,
  tilt,
  active,
  filtered = false,
  onActivate,
  onDeactivate,
}: ProjectRowProps) => {
  const compact = variant === "compact";

  return (
    <Row
      $variant={variant}
      data-variant={variant}
      data-active={active}
      data-filtered={filtered}
      style={tilt ? ({ "--shot-tilt": tilt } as CSSProperties) : undefined}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
    >
      <div>
        {meta ? <Meta>{meta}</Meta> : null}

        <Head>
          {index !== undefined && !meta ? (
            <Index aria-hidden="true">{String(index).padStart(2, "0")}</Index>
          ) : null}
          <Title>
            <TitleLink
              href={`/work/${toProjectSlug(name)}`}
              onFocus={onActivate}
              onBlur={onDeactivate}
            >
              {name}
              <VisuallyHidden.Root> - read the case study</VisuallyHidden.Root>
            </TitleLink>
          </Title>
        </Head>

        <Description>{description}</Description>

        {roles.length ? (
          <Roles aria-label={`Disciplines for ${name}`}>
            {roles.slice(0, compact ? 3 : 4).map((role) => (
              <Tag
                key={role}
                variant={compact ? "muted" : "outline"}
                size={compact ? "xs" : "sm"}
              >
                {role}
              </Tag>
            ))}
          </Roles>
        ) : null}
      </div>

      <Shot>
        <Image
          src={headshot}
          alt=""
          fill
          sizes={
            compact
              ? "(min-width: 1000px) 160px, 100vw"
              : "(min-width: 1000px) 240px, 100vw"
          }
          quality={75}
        />
      </Shot>
    </Row>
  );
};

export default ProjectRow;
