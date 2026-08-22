import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-6), 3vw, var(--space-8));
  width: 100%;
  max-width: 44rem;
`;

export const Envelope = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

export const EnvelopeLine = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-3);
  color: var(--section-ink);
  font-family: var(--font-heading);
  font-size: var(--font-size-title);
  line-height: 1.1;
  text-transform: lowercase;
`;

export const EnvelopeLabel = styled.span`
  opacity: 0.55;
`;

export const EnvelopeValue = styled.span`
  font-weight: 700;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-5), 2.5vw, var(--space-7));
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;

export const FieldLabel = styled.label`
  color: var(--section-ink);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  text-transform: lowercase;
  opacity: 0.7;
`;

const control = `
  width: 100%;
  padding: var(--space-2) 0;
  border: none;
  border-bottom: 2px solid var(--section-ink);
  border-radius: 0;
  background: none;
  color: var(--section-ink);
  font-family: var(--font-body);
  font-size: var(--font-size-body);

  &::placeholder {
    color: currentcolor;
    opacity: 0.4;
  }

  &:focus-visible {
    outline: none;
    border-bottom-color: var(--support-color);
  }
`;

export const Input = styled.input`
  ${control}
`;

export const TextArea = styled.textarea`
  ${control}

  min-height: 6rem;
  resize: vertical;
`;

export const Status = styled.p<{ $error?: boolean }>`
  color: var(--section-ink);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  opacity: ${({ $error }) => ($error ? 1 : 0.75)};
  text-decoration: ${({ $error }) => ($error ? "underline" : "none")};
  text-underline-offset: 0.25em;
`;
