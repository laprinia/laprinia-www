import styled, { css } from "styled-components";

export const Navbar = styled.nav<{ isMobile?: boolean }>`
  font-family: var(--font-heading);

  ${({ isMobile }) =>
    isMobile &&
    css`
      display: flex;
      justify-content: space-between;
    `}

  a {
    font-size: 1.75rem;
    text-transform: lowercase;
    text-decoration: none;
    color: var(--neutral-900);
    font-weight: var(--font-weight-regular);
    @media (max-width: 1023px) {
      font-size: var(--font-size-heading1-tablet);
    }
    @media (max-width: 767px) {
      font-size: var(--font-size-heading1-phone);
    }

    &:hover {
      color: var(--support-color);
      background-color: var(--neutral-700);
      text-decoration: underline;
    }
  }
`;
