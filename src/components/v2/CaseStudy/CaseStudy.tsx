import { ArrowLeft, ArrowUp, ArrowUpRight } from "lucide-react";
import Pill from "../../atoms/Pill/Pill";
import MediaBento from "./MediaBento";
import MetricCard from "../MetricCard/MetricCard";
import { MetricGrid } from "../MetricCard/MetricCard.styles";
import ZoomableMedia from "./ZoomableMedia";
import type { Project } from "../../../../scripts/const/projects";
import {
  backToTopLabel,
  backToWorkHref,
  backToWorkLabel,
  caseTopId,
  clientLabel,
  linksLabel,
  roleLabel,
  tagsLabel,
  timelineLabel,
} from "../../../consts.v2.case";
import {
  Article,
  ArticleIndex,
  BackToTop,
  BackToTopRow,
  ArticleMedia,
  ArticleText,
  ArticleTitle,
  BackLink,
  CaseGround,
  CaseLayout,
  Content,
  FactTerm,
  FactValue,
  NameMark,
  ProjectName,
  Rail,
  RailFacts,
  RailLink,
  RailLinks,
  RoleList,
  WalkthroughSlot,
  TitleMark,
} from "./CaseStudy.styles";

const CaseStudy = ({ project }: { project: Project }) => (
  <CaseGround id={caseTopId}>
    <CaseLayout>
      <Rail>
        <BackLink href={backToWorkHref}>
          <ArrowLeft size={14} aria-hidden="true" />
          <span>{backToWorkLabel}</span>
        </BackLink>

        <ProjectName>
          <NameMark>{project.name}</NameMark>
        </ProjectName>

        <RailFacts>
          {project.client ? (
            <div>
              <FactTerm>{clientLabel}</FactTerm>
              <FactValue>{project.client}</FactValue>
            </div>
          ) : null}

          {project.role ? (
            <div>
              <FactTerm>{roleLabel}</FactTerm>
              <FactValue>{project.role}</FactValue>
            </div>
          ) : null}

          <div>
            <FactTerm>{timelineLabel}</FactTerm>
            <FactValue>
              {project.year}
              {project.timeline ? ` · ${project.timeline}` : ""}
            </FactValue>
          </div>

          {project.roles.length ? (
            <div>
              <FactTerm>{tagsLabel}</FactTerm>
              <FactValue>
                <RoleList>
                  {project.roles.map((role) => (
                    <Pill key={role} asChild variant="outline" size="sm">
                      <li>{role}</li>
                    </Pill>
                  ))}
                </RoleList>
              </FactValue>
            </div>
          ) : null}

          {project.buttons.length ? (
            <div>
              <FactTerm>{linksLabel}</FactTerm>
              <FactValue>
                <RailLinks>
                  {project.buttons.map((button) => (
                    <li key={button.link}>
                      <RailLink
                        href={button.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{button.alt}</span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </RailLink>
                    </li>
                  ))}
                </RailLinks>
              </FactValue>
            </div>
          ) : null}
        </RailFacts>
      </Rail>

      {project.walkthrough ? (
        <WalkthroughSlot>
          <ZoomableMedia
            item={project.walkthrough}
            label={`${project.name} walkthrough`}
            ratio="16 / 9"
            sizes="(min-width: 1000px) 70vw, 100vw"
          />
        </WalkthroughSlot>
      ) : null}

      <Content>
        {project.textContents.map((article, index) => (
          <Article key={article.header}>
            <ArticleIndex aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </ArticleIndex>

            <ArticleTitle>
              <TitleMark>{article.header}</TitleMark>
            </ArticleTitle>

            <ArticleText dangerouslySetInnerHTML={{ __html: article.html }} />

            {article.metrics.length ? (
              <ArticleMedia>
                <MetricGrid>
                  {article.metrics.map((metric) => (
                    <MetricCard key={metric.label} {...metric} />
                  ))}
                </MetricGrid>
              </ArticleMedia>
            ) : null}

            {article.media.length ? (
              <ArticleMedia>
                <MediaBento
                  items={article.media}
                  label={`${project.name} — ${article.header}`}
                />
              </ArticleMedia>
            ) : null}
          </Article>
        ))}

        <BackToTopRow>
          <BackToTop href={`#${caseTopId}`}>
            <ArrowUp size={14} aria-hidden="true" />
            <span>{backToTopLabel}</span>
          </BackToTop>
        </BackToTopRow>
      </Content>
    </CaseLayout>
  </CaseGround>
);

export default CaseStudy;
