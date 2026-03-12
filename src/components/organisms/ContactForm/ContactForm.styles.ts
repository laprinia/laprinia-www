import styled from "styled-components";

export const ContainerWrapper = styled.main`
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

export const ContactContainer = styled.section`
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

export const LeftContainer = styled.div`
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

export const RightContainer = styled.div`
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-family: var(--font-heading);
  font-weight: var(--font-weight-regular);
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

export const Input = styled.input`
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  font-family: var(--font-heading);
  font-size: var(--font-size-M);
  font-weight: var(--font-weight-light);
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

export const TextArea = styled.textarea`
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  font-family: var(--font-body);
  font-weight: var(--font-weight-light);
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

export const Button = styled.button`
  font-family: var(--font-heading);
  font-weight: var(--font-weight-regular);
  border: none;
  background-color: var(--accent-color);
  color: white;
  padding: 0.5rem;
  font-size: var(--font-size-body-desktop);

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
