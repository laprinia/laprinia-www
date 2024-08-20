import styled, { css } from "styled-components";
import React from "react";
import { navItems } from "../../consts";

const Navbar = styled.nav<{ isMobile?: boolean }>`
  ${({ isMobile }) =>
    isMobile &&
    css`
      display: flex;
      justify-content: space-between;
    `}

  a {
    font-weight: var(--font-weight-light);
    text-decoration: none;
    color: black;
  }
`;

const HomeNavBar = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <Navbar aria-labelledby="navigation" isMobile={isMobile}>
      <p id="navigation" hidden>
        Navigation
      </p>
      {navItems.map((item, index) => {
        return <a href={item.href}>{item.label.toUpperCase()}</a>;
      })}
    </Navbar>
  );
};

export default HomeNavBar;
