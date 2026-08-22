import Image from "next/image";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { ArrowRight } from "lucide-react";
import Button from "../Button/Button";
import Pill from "../../atoms/Pill/Pill";
import {
  Card,
  Intro,
  Head,
  Title,
  Description,
  Tags,
  Thumb,
} from "./FeaturedProjectCard.styles";

export type FeaturedProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  href: string;
  ctaLabel?: string;
  sizes?: string;
};

const FeaturedProjectCard = ({
  title,
  description,
  tags,
  imageSrc,
  href,
  ctaLabel = "view project",
  sizes = "(min-width: 768px) 40vw, 90vw",
}: FeaturedProjectCardProps) => (
  <Card>
    <Intro>
      <Head>
        <Title>{title}</Title>
        <Button
          asChild
          variant="outline"
          size="xl"
          iconOnly
          pill
          icon={<ArrowRight strokeWidth={2.5} />}
        >
          <a href={href}>
            <VisuallyHidden.Root>
              {ctaLabel} {title}
            </VisuallyHidden.Root>
          </a>
        </Button>
      </Head>

      <Description>{description}</Description>
    </Intro>

    <Tags>
      {tags.map((tag) => (
        <Pill key={tag} asChild variant="outline" size="md">
          <li>{tag}</li>
        </Pill>
      ))}
    </Tags>

    <Thumb>
      <Image src={imageSrc} alt="" fill sizes={sizes} quality={75} />
    </Thumb>
  </Card>
);

export default FeaturedProjectCard;
