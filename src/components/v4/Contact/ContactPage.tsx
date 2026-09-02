import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import ContactForm from "../../v2/ContactForm/ContactForm";
import { contactHeading, contactId } from "../../../consts.v2.contact";
import { v4ContactHoleCount, v4ContactMeta } from "../../../consts.v4";
import {
  Main,
  Sheet,
  Letter,
  MarginRule,
  Holes,
  Hole,
  Meta,
} from "./Contact.styles";

const holes = Array.from({ length: v4ContactHoleCount }, (_, index) => index);

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
        <span>{v4ContactMeta}</span>
      </Meta>
    </Sheet>
  </Main>
);

export default ContactPageV4;
