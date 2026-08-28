import Image from "next/image";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Tag from "../Tag/Tag";
import { projects, type Project } from "../../../../scripts/const/projects";
import { toProjectSlug } from "../../../lib/projects";
import {
  List,
  Row,
  RowIndex,
  Body,
  Head,
  Title,
  TitleLink,
  Cue,
  Description,
  Roles,
  Thumb,
} from "./WorkList.styles";

const WorkList = ({ names }: { names: string[] }) => {
  const all = Object.values(projects).flat() as Project[];
  const featured = names
    .map((name) => all.find((project) => project.name === name))
    .filter((project): project is Project => Boolean(project));

  return (
    <List>
      {featured.map((project, index) => (
        <Row key={project.name}>
          <RowIndex aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </RowIndex>

          <Body>
            <Head>
              <Title>
                <TitleLink href={`/portfolio/${toProjectSlug(project.name)}`}>
                  {project.name}
                  <VisuallyHidden.Root>
                    {" "}
                    — read the case study
                  </VisuallyHidden.Root>
                </TitleLink>
              </Title>
              <Cue aria-hidden="true">→</Cue>
            </Head>

            <Description>{project.description}</Description>

            {project.roles.length ? (
              <Roles aria-label={`Disciplines for ${project.name}`}>
                {project.roles.slice(0, 3).map((role) => (
                  <Tag key={role}>{role}</Tag>
                ))}
              </Roles>
            ) : null}
          </Body>

          <Thumb>
            <Image
              src={project.headshot}
              alt=""
              fill
              sizes="(min-width: 700px) 18vw, 20vw"
              quality={75}
            />
          </Thumb>
        </Row>
      ))}
    </List>
  );
};

export default WorkList;
