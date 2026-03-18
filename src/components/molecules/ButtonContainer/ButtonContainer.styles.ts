import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;

  button {
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: var(--border-radius);
    background-color: var(--accent-color);
    padding: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: var(--neutral-700);
    }
  }
`;

export const Icon = styled.span<{ $src: string }>`
  display: block;
  height: 100%;
  width: 100%;
  background-color: var(--neutral-000);
  mask-image: url(${({ $src }) => $src});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-image: url(${({ $src }) => $src});
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  transition:
    background-color 0.2s ease,
    transform 0.3s ease-in-out;

  button:hover & {
    background-color: var(--support-color);
  }
`;
