import styled from "styled-components";
import BisectorText from "../../molecules/BisectorText/BisectorText";

const ContactContainer = styled.section`
  width: 70%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: var(--accent-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-family: var(--font-heading);
  font-size: var(--font-size-M);
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: var(--font-size-M);
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

  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
`;

const Button = styled.button`
  font-family: var(--font-heading);
  font-size: var(--font-size-M);
  border: none;
  background-color: var(--accent-color);
  color: white;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
    background-color: var(--darker-accent-color);
  }
`;

const ContactForm = () => {
  return (
    <ContactContainer>
      <LeftContainer>
        <Form>
          <Label htmlFor="name">A) NAME:</Label>
          <Input id="name" type="text" aria-label="Your Name" required />

          <Label htmlFor="email">B) EMAIL:</Label>
          <Input id="email" type="email" aria-label="Your Email" required />

          <Label htmlFor="message">C) YOUR MESSAGE:</Label>
          <TextArea id="message" rows={5} aria-label="Your Message" required />

          <Button type="submit">SUBMIT</Button>
        </Form>
      </LeftContainer>
      <RightContainer>
        <BisectorText paragraphs={["1.", "Let's", "Talk"]} />
      </RightContainer>
    </ContactContainer>
  );
};

export default ContactForm;
