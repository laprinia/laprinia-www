import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Nav = styled.nav<{ $scrolled?: boolean }>`
  display: flex;
  padding: 0 1.25rem;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-heading1-desktop);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  z-index: 100;
  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(245, 244, 240, 0.55)" : "var(--neutral-100)"};
  backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "blur(14px) saturate(1.3)" : "none"};
  -webkit-backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "blur(14px) saturate(1.3)" : "none"};
  transition:
    background 0.3s ease,
    backdrop-filter 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: ${({ $scrolled }) => ($scrolled ? 0.15 : 0)};
    transition: opacity 0.3s ease;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 128px 128px;
  }

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

export const NavLink = styled.a.attrs({ "data-cursor-hide": "" } as Record<
  string,
  string
>)`
  font-family: var(--font-heading);
  text-transform: lowercase;
  text-decoration: none;
  color: inherit;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
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
    background: transparent;
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
  position: absolute;
  top: 100%;
  right: 0;
  border-radius: var(--border-radius);
  background: rgba(245, 244, 240, 0.75);
  backdrop-filter: blur(8px) saturate(1.4);
  -webkit-backdrop-filter: blur(8px) saturate(1.4);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  z-index: 999;

  a {
    padding: 1rem;
    display: block;
    color: var(--neutral-900);
    text-decoration: none;
    transition:
      color 0.2s ease,
      background-color 0.2s ease;
    &:hover {
      color: var(--support-color);
      background-color: var(--neutral-700);
    }
  }
`;
