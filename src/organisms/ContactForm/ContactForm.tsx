import styled from "styled-components";
import BisectorText from "../../molecules/BisectorText/BisectorText";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContainerWrapper = styled.main`
  flex-direction: column;
  margin: 0;
  padding: 0 0;
  display: flex;
  flex: 1;

  @media (max-width: 1280px) {
    overflow: hidden;
    height: calc(var(--vh, 1vh) * 100 - 5rem);
  }

  @media (min-width: 1024px) {
    align-items: center;
    justify-content: center;
  }
`;

const ContactContainer = styled.section`
  width: 70%;
  height: 90%;
  display: flex;

  @media (max-width: 1023px) {
    width: 100%;
    height: 90%;
  }

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: flex-end;
    overflow-y: auto;
  }
`;

const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  border-left: 0.25rem solid var(--accent-color);
  border-top: 0.25rem solid var(--accent-color);
  border-bottom: 0.25rem solid var(--accent-color);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1023px) {
    border: none;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 70%;
    margin-top: 1rem;
  }
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: var(--accent-color);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
    height: 30%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;

  @media (max-width: 1280px) {
    font-size: var(--font-size-body-desktop);
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-body-tablet);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-body-phone);
  }
  @media (min-width: 1800px) {
    font-size: var(--font-size-body-xl);
  }
`;

const Input = styled.input`
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  font-family: var(--font-heading);
  font-size: var(--font-size-M);
  width: 100%;
  border: none;
  border-bottom: 1px solid gray;
  background: none;
  transition: border-bottom 0.3s ease;

  @media (max-width: 1280px) {
    font-size: var(--font-size-body-desktop);
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-body-tablet);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-body-phone);
  }

  @media (min-width: 1800px) {
    font-size: var(--font-size-body-xl);
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  font-family: var(--font-heading);
  font-size: var(--font-size-M);
  width: 100%;
  resize: none;
  border: none;
  border-bottom: 1px solid gray;
  background: none;
  transition: border-bottom 0.3s ease;

  @media (max-width: 1280px) {
    font-size: var(--font-size-body-desktop);
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-body-tablet);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-body-phone);
  }

  @media (min-width: 1800px) {
    font-size: var(--font-size-body-xl);
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
`;

const Button = styled.button`
  font-family: var(--font-heading);
  border: none;
  background-color: var(--accent-color);
  color: white;
  padding: 0.5rem;

  @media (max-width: 1280px) {
    font-size: var(--font-size-body-desktop);
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-body-tablet);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-body-phone);
  }

  @media (min-width: 1800px) {
    font-size: var(--font-size-body-xl);
  }

  &:hover {
    background-color: var(--darker-accent-color);
  }
`;

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

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSent(true);
    if (form.current && !isSent) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
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
