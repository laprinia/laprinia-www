import BisectorText from "../../molecules/BisectorText/BisectorText";
import { useEffect, useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ContainerWrapper,
  ContactContainer,
  LeftContainer,
  RightContainer,
  Form,
  Label,
  Input,
  TextArea,
  Button,
} from "./ContactForm.styles";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const updateVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    updateVh();
    window.addEventListener("resize", updateVh);

    return () => {
      window.removeEventListener("resize", updateVh);
    };
  }, []);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSent(true);
    if (form.current && !isSent) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_KEY,
          },
        )
        .then(
          () => {
            toast.success("I will get back to you ASAP! 💌", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Flip,
            });
          },
          (error) => {
            toast.error("Oops! Something went wrong! 🥸", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Flip,
            });
          },
        )
        .finally(() => {
          setIsSent(false);
          if (nameRef.current && emailRef.current && messageRef.current) {
            nameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
          }
        });
    }
  };
  return (
    <ContainerWrapper>
      <ContactContainer>
        <LeftContainer>
          <Form ref={form} onSubmit={sendEmail}>
            <Label htmlFor="name">A) NAME:</Label>
            <Input
              id="name"
              type="text"
              aria-label="Your Name"
              name="user_name"
              ref={nameRef}
              required
            />

            <Label htmlFor="email">B) EMAIL:</Label>
            <Input
              id="email"
              type="email"
              aria-label="Your Email"
              name="user_email"
              ref={emailRef}
              required
            />

            <Label htmlFor="message">C) YOUR MESSAGE:</Label>
            <TextArea
              id="message"
              rows={5}
              aria-label="Your Message"
              name="message"
              ref={messageRef}
              required
            />

            <Button type="submit">SUBMIT</Button>
          </Form>
        </LeftContainer>
        <RightContainer>
          <BisectorText paragraphs={["1.", "Let's", "Talk"]} />
        </RightContainer>
        <ToastContainer />
      </ContactContainer>
    </ContainerWrapper>
  );
};

export default ContactForm;
