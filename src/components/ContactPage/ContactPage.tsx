import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import ContactForm from "../ContactForm/ContactForm";
import { contactHeading, contactId } from "../../consts.contact";
import { contactHoleCount, contactMeta } from "../../consts.site";
import {
  Main,
  Sheet,
  Letter,
  MarginRule,
  Holes,
  Hole,
  Meta,
} from "./ContactPage.styles";

const holes = Array.from({ length: contactHoleCount }, (_, index) => index);

const ContactPageV4 = () => (
  <Main>
    <Sheet>
      <VisuallyHidden.Root asChild>
        <h1>{contactHeading}</h1>
      </VisuallyHidden.Root>

      <Letter id={contactId}>
        <MarginRule aria-hidden="true" />
        <Holes aria-hidden="true">
          {holes.map((hole) => (
            <Hole key={hole} />
          ))}
        </Holes>

        <ContactForm />
      </Letter>

      <Meta>
        <span>{contactMeta}</span>
      </Meta>
    </Sheet>
  </Main>
);

export default ContactPageV4;
