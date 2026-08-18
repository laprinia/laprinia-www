import Image from "next/image";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Pill from "../../atoms/Pill/Pill";
import {
  Entry,
  Letter,
  Term,
  TermLink,
  Identity,
  Body,
  Definition,
  Roles,
  Meta,
  MetaLink,
  Thumb,
} from "./DictionaryEntry.styles";

export type DictionaryEntryProps = {
  letter: string;
  term: string;
  definition: string;
  roles: string[];
  year: number;
  imageSrc: string;
  href: string;
  liveHref?: string;
};

const DictionaryEntry = ({
  letter,
  term,
  definition,
  roles,
  year,
  imageSrc,
  href,
  liveHref,
}: DictionaryEntryProps) => (
  <Entry>
    <Letter aria-hidden="true">{letter}</Letter>

    <Identity>
      <Term>
        <TermLink href={href}>
          {term}
          <VisuallyHidden.Root> — read the case study</VisuallyHidden.Root>
        </TermLink>
      </Term>

      {roles.length ? (
        <Roles aria-label={`Disciplines for ${term}`}>
          {roles.map((role) => (
            <Pill key={role} asChild variant="outline" size="sm">
              <li>{role}</li>
            </Pill>
          ))}
        </Roles>
      ) : null}
    </Identity>

    <Body>
      <Definition>{definition}</Definition>

      <Meta>
        <span>{year}</span>
        {liveHref ? (
          <>
            <span aria-hidden="true">·</span>
            <MetaLink href={liveHref} target="_blank" rel="noopener noreferrer">
              view live ↗<VisuallyHidden.Root> {term}</VisuallyHidden.Root>
            </MetaLink>
          </>
        ) : null}
      </Meta>
    </Body>

    <Thumb>
      <Image
        src={imageSrc}
        alt=""
        fill
        sizes="(min-width: 900px) 11rem, 60vw"
        quality={75}
      />
    </Thumb>
  </Entry>
);

export default DictionaryEntry;
