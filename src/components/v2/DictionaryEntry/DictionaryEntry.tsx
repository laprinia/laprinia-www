import Image from "next/image";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Pill from "../../atoms/Pill/Pill";
import {
  Entry,
  Content,
  EntryIndex,
  Head,
  Term,
  TermLink,
  Definition,
  MetaRule,
  Roles,
  Links,
  CaseCue,
  CueText,
  MetaLink,
  Thumb,
} from "./DictionaryEntry.styles";

export type DictionaryEntryProps = {
  index: number;
  term: string;
  definition: string;
  roles: string[];
  imageSrc: string;
  href: string;
  liveHref?: string;
};

const DictionaryEntry = ({
  index,
  term,
  definition,
  roles,
  imageSrc,
  href,
  liveHref,
}: DictionaryEntryProps) => (
  <Entry>
    <Content>
      <Head>
        <EntryIndex aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </EntryIndex>

        <Term>
          <TermLink href={href}>
            {term}
            <VisuallyHidden.Root> — read the case study</VisuallyHidden.Root>
          </TermLink>
        </Term>
      </Head>

      <Definition>{definition}</Definition>

      <MetaRule>
        {roles.length ? (
          <Roles aria-label={`Disciplines for ${term}`}>
            {roles.map((role) => (
              <Pill key={role} asChild variant="outline" size="sm">
                <li>{role}</li>
              </Pill>
            ))}
          </Roles>
        ) : null}

        <Links>
          <CaseCue aria-hidden="true">
            <CueText>read the case study </CueText>→
          </CaseCue>
          {liveHref ? (
            <MetaLink href={liveHref} target="_blank" rel="noopener noreferrer">
              view live ↗<VisuallyHidden.Root> {term}</VisuallyHidden.Root>
            </MetaLink>
          ) : null}
        </Links>
      </MetaRule>
    </Content>

    <Thumb>
      <Image
        src={imageSrc}
        alt=""
        fill
        sizes="(min-width: 800px) 45vw, 90vw"
        quality={75}
      />
    </Thumb>
  </Entry>
);

export default DictionaryEntry;
