import ArrowLink from "../ArrowLink/ArrowLink";
import MediaBento from "../MediaBento/MediaBento";
import ZoomableMedia from "../MediaBento/ZoomableMedia";
import MetricCard from "../MetricCard/MetricCard";
import { MetricGrid } from "../MetricCard/MetricCard.styles";
import Tag from "../Tag/Tag";
import type { Project } from "../../../scripts/const/projects";
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
} from "../../consts.case";
import { Mark } from "../shared.styles";
import {
  Layout,
  Rail,
  ProjectName,
  Summary,
  Facts,
  FactTerm,
  FactValue,
  TagList,
  Content,
  Article,
  ArticleIndex,
  ArticleBody,
  ArticleTitle,
  ArticleText,
  ArticleMedia,
  BackToTopRow,
} from "./CaseStudy.styles";

const CaseStudyV4 = ({ project }: { project: Project }) => {
  const timeline = [project.year, project.timeline].filter(Boolean).join(" · ");

  return (
    <Layout id={caseTopId}>
      <Rail>
        <ArrowLink href={backToWorkHref} direction="back" mono iconSize={14}>
          {backToWorkLabel}
        </ArrowLink>

        <ProjectName>
          <Mark>{project.name}</Mark>
        </ProjectName>
        <Summary>{project.description}</Summary>

        <Facts>
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

          {timeline ? (
            <div>
              <FactTerm>{timelineLabel}</FactTerm>
              <FactValue>{timeline}</FactValue>
            </div>
          ) : null}

          {project.roles.length ? (
            <div>
              <FactTerm>{tagsLabel}</FactTerm>
              <FactValue>
                <TagList>
                  {project.roles.map((role) => (
                    <Tag key={role} size="xs">
                      {role}
                    </Tag>
                  ))}
                </TagList>
              </FactValue>
            </div>
          ) : null}

          {project.links.length ? (
            <div>
              <FactTerm>{linksLabel}</FactTerm>
              <FactValue>
                {project.links.map((link) => (
                  <ArrowLink key={link.url} href={link.url} mono iconSize={14}>
                    {link.label}
                  </ArrowLink>
                ))}
              </FactValue>
            </div>
          ) : null}
        </Facts>
      </Rail>

      <Content>
        {project.walkthrough ? (
          <ZoomableMedia
            item={project.walkthrough}
            label={`${project.name} walkthrough`}
            ratio="16 / 9"
            sizes="(min-width: 1000px) 70vw, 100vw"
          />
        ) : null}

        {project.textContents.map((article, index) => (
          <Article key={article.header}>
            <ArticleIndex aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </ArticleIndex>

            <ArticleBody>
              <ArticleTitle>{article.header}</ArticleTitle>

              <ArticleText dangerouslySetInnerHTML={{ __html: article.html }} />

              {article.metrics.length ? (
                <ArticleMedia>
                  <MetricGrid>
                    {article.metrics.map((metric, metricIndex) => (
                      <MetricCard
                        key={metric.label}
                        {...metric}
                        highlight={metricIndex === article.metrics.length - 1}
                      />
                    ))}
                  </MetricGrid>
                </ArticleMedia>
              ) : null}

              {article.media.length ? (
                <ArticleMedia>
                  <MediaBento
                    items={article.media}
                    label={`${project.name} - ${article.header}`}
                  />
                </ArticleMedia>
              ) : null}
            </ArticleBody>
          </Article>
        ))}

        <BackToTopRow>
          <ArrowLink href={`#${caseTopId}`} direction="up" mono iconSize={14}>
            {backToTopLabel}
          </ArrowLink>
        </BackToTopRow>
      </Content>
    </Layout>
  );
};

export default CaseStudyV4;
