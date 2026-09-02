import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button/Button";
import {
  contactEmail,
  contactEmailLabel,
  contactError,
  contactFromLabel,
  contactMessageLabel,
  contactNameLabel,
  contactSendLabel,
  contactSendingLabel,
  contactSuccess,
  contactToLabel,
} from "../../consts.contact";
import {
  Form,
  Envelope,
  EnvelopeLine,
  EnvelopeLabel,
  EnvelopeValue,
  Fields,
  Field,
  FieldLabel,
  Input,
  TextArea,
  Status,
} from "./ContactForm.styles";

type SendState = "idle" | "sending" | "sent" | "error";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<SendState>("idle");

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current || state === "sending") return;

    setState("sending");
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        form.current,
        { publicKey: process.env.NEXT_PUBLIC_KEY },
      )
      .then(
        () => {
          setState("sent");
          form.current?.reset();
        },
        () => setState("error"),
      );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Envelope>
        <EnvelopeLine>
          <EnvelopeLabel>{contactToLabel}</EnvelopeLabel>
          <EnvelopeValue>{contactEmail}</EnvelopeValue>
        </EnvelopeLine>
        <EnvelopeLine>
          <EnvelopeLabel>{contactFromLabel}</EnvelopeLabel>
        </EnvelopeLine>
      </Envelope>

      <Fields>
        <Field>
          <FieldLabel htmlFor="contact-name">{contactNameLabel}</FieldLabel>
          <Input id="contact-name" name="user_name" type="text" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="contact-email">{contactEmailLabel}</FieldLabel>
          <Input id="contact-email" name="user_email" type="email" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="contact-message">
            {contactMessageLabel}
          </FieldLabel>
          <TextArea id="contact-message" name="message" rows={4} required />
        </Field>
      </Fields>

      <Button
        type="submit"
        variant="solid"
        size="lg"
        fullWidth
        pill
        loading={state === "sending"}
      >
        {state === "sending" ? contactSendingLabel : contactSendLabel}
      </Button>

      <Status role="status" $error={state === "error"}>
        {state === "sent" ? contactSuccess : null}
        {state === "error" ? contactError : null}
      </Status>
    </Form>
  );
};

export default ContactForm;
