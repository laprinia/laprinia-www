import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-L);

  @media (max-width: 1023px) {
    font-size: var(--font-size-M);
  }

  @media (max-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

interface NavItemProps {
  highlighted: boolean;
}

const NavItem = styled.div<NavItemProps>`
  font-family: var(--font-heading);
  font-weight: ${(props) =>
    props.highlighted ? "var(--font-weight-bold)" : "var(--font-weight-light)"};
  margin: 0 1rem;

  @media (max-width: 767px) {
    margin: 0;
  }
`;

const NavItemsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

const CenteredItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: flex-start;

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

export const Dropdown = styled.div`
  display: none;
  position: relative;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    font-size: var(--font-size-L);
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${DropdownButton}:focus + &,
  ${DropdownButton}:hover + & {
    display: block;
    opacity: 1;
  }

  a {
    padding: 1rem;
    display: block;
  }
`;

const NavBar = ({
  items,
  highlightedIndex,
}: {
  items: { label: string; href: string }[];
  highlightedIndex: number;
}) => {
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
              aria-labelledby={`nav-link-highlighted`}
            >
              {reorderedItems[0].label}
            </NavLink>
          </NavItem>
        </CenteredItemWrapper>
        <NavItems>
          {reorderedItems.slice(1).map((item, index) => (
            <NavItem key={index} highlighted={false}>
              <NavLink
                href={item.href}
                key={index}
                aria-labelledby={`nav-link-${index}`}
              >
                {item.label}
              </NavLink>
            </NavItem>
          ))}
        </NavItems>
      </NavItemsContainer>
      <Dropdown>
        <DropdownButton aria-label="Menu">☰</DropdownButton>
        <DropdownContent>
          {items.map((item, index) => (
            <NavLink
              aria-labelledby={`dropdown-link-${index}`}
              key={index}
              href={item.href}
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
