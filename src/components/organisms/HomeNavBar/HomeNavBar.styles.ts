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
    font-size: var(--font-size-heading1-desktop);
    text-transform: lowercase;
    color: var(--accent-color);
    font-weight: var(--font-weight-regular);
    @media (max-width: 1023px) {
      font-size: var(--font-size-heading1-tablet);
    }
    @media (max-width: 767px) {
      font-size: var(--font-size-heading1-phone);
    }
    text-decoration: none;
    color: black;
  }
`;
