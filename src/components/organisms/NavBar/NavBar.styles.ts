import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Nav = styled.nav`
  display: flex;
  padding: 1.25rem;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-heading1-desktop);
  position: relative;

  @media (max-width: 1023px) {
    font-size: var(--font-size-heading1-tablet);
  }

  @media (min-width: 1800px) {
    font-size: var(--font-size-heading1-xl);
  }
  @media (max-width: 767px) {
    font-size: var(--font-size-heading1-phone);
    flex-direction: row;
    align-items: center;
  }
`;

export interface NavItemProps {
  highlighted: boolean;
}

export const NavItem = styled.li<NavItemProps>`
  list-style: none;
  font-weight: ${(props) =>
    props.highlighted
      ? "var(--font-weight-semibold)"
      : "var(--font-weight-light)"};
  margin: 0 1rem;

  @media (max-width: 767px) {
    margin: 0;
  }
`;

export const NavItemsContainer = styled.ul`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  list-style: none;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const CenteredItemWrapper = styled.article`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const NavItems = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-family: var(--font-heading);
  text-transform: lowercase;
  text-decoration: none;
    color: inherit;
  transition: color 0.2s ease, background-color 0.2s ease;
  &:hover {
    color: var(--support-color);
    background-color: var(--neutral-700);
    text-decoration: underline;
  }
`;

export const Dropdown = styled.section`
  display: none;
  position: relative;

  @media (max-width: 767px) {
    display: flex;
    background-color: var(--background-color);
    align-items: center;
  }
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  width: 24px;
  height: 24px;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.15em;
  z-index: 10;

  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: var(--accent-color);
    transition:
      transform 0.3s ease,
      opacity 0.3s ease,
      background-color 0.3s ease;
  }

  &[data-state="open"] span:nth-child(1) {
    transform: rotate(45deg) translateY(9.7px);
  }
  &[data-state="closed"] span:nth-child(1) {
    transform: rotate(0);
  }

  &[data-state="open"] span:nth-child(2) {
    opacity: 0;
  }
  &[data-state="closed"] span:nth-child(2) {
    opacity: 1;
  }

  &[data-state="open"] span:nth-child(3) {
    transform: rotate(-45deg) translateY(-9.7px);
  }
  &[data-state="closed"] span:nth-child(3) {
    transform: rotate(0);
  }
`;

export const DropdownContent = styled(DropdownMenu.Content)`
  background-color: var(--background-color);
  position: absolute;
  top: 100%;
  right: 0;
  border-radius: var(--border-radius);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;

  a {
    padding: 1rem;
    display: block;
    color: var(--neutral-900);
    text-decoration: none;
    transition: color 0.2s ease, background-color 0.2s ease;
    &:hover {
      color: var(--support-color);
      background-color: var(--neutral-700);
    }
  }
`;
