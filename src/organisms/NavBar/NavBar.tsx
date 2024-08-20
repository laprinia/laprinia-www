import styled from "styled-components";
import { useState } from "react";

const Nav = styled.nav`
  display: flex;
  padding: 1.25rem;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-L);

  @media (max-width: 1023px) {
    font-size: var(--font-size-M);
  }

  @media (max-width: 767px) {
    font-size: var(--font-size-S);
    flex-direction: row;
    align-items: center;
  }
`;

interface NavItemProps {
  highlighted: boolean;
}

const NavItem = styled.li<NavItemProps>`
  list-style: none;
  font-family: var(--font-heading);
  font-weight: ${(props) =>
    props.highlighted ? "var(--font-weight-bold)" : "var(--font-weight-light)"};
  margin: 0 1rem;

  @media (max-width: 767px) {
    margin: 0;
  }
`;

const NavItemsContainer = styled.ul`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 767px) {
    display: none;
  }
`;

const CenteredItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;

  @media (max-width: 767px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

const Dropdown = styled.div`
  display: none;
  position: relative;

  @media (max-width: 767px) {
    display: flex;
    background-color: var(--background-color);
    align-items: center;
  }
`;

const DropdownButton = styled.button<{ isOpen: boolean }>`
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
    background-color: #020000;
    transition:
      transform 0.3s ease,
      background-color 0.3s ease;

    &:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translateY(9px)" : "rotate(0)"};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translateY(-9px)" : "rotate(0)"};
    }
  }
`;

const DropdownContent = styled.div<{ isOpen: boolean }>`
  background-color: var(--background-color);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  right: 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;

  a {
    padding: 1rem;
    display: block;
    color: black;
    text-decoration: none;
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

const NavBar = ({
  items,
  highlightedIndex,
}: {
  items: { label: string; href: string }[];
  highlightedIndex: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const reorderedItems = [
    items[highlightedIndex],
    ...items.filter((_, index) => index !== highlightedIndex),
  ];

  return (
    <Nav>
      <NavItem highlighted={true}>
        <NavLink aria-labelledby="home-link" href="/">
          LD // Home
        </NavLink>
      </NavItem>
      <NavItemsContainer>
        <CenteredItemWrapper>
          <NavItem highlighted={true}>
            <NavLink
              href={reorderedItems[0].href}
              aria-labelledby={`${reorderedItems[0].label}`}
            >
              {reorderedItems[0].label}
            </NavLink>
          </NavItem>
        </CenteredItemWrapper>
        <NavItems>
          {reorderedItems.slice(1).map((item, index) => (
            <NavItem key={index} highlighted={false}>
              <NavLink href={item.href} aria-labelledby={`${item.label}`}>
                {item.label}
              </NavLink>
            </NavItem>
          ))}
        </NavItems>
      </NavItemsContainer>
      <Dropdown>
        <DropdownButton
          isOpen={isOpen}
          onClick={toggleDropdown}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </DropdownButton>
        <DropdownContent isOpen={isOpen}>
          {items.map((item, index) => (
            <NavLink
              aria-labelledby={`dropdown-link-${index}`}
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </DropdownContent>
      </Dropdown>
    </Nav>
  );
};

export default NavBar;
