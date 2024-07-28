import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-size: var(--font-size-M);

  @media (max-width: 1023px) {
    font-size: var(--font-size-L);
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

interface NavItemProps {
  highlighted: boolean;
}

export const NavItem = styled.div<NavItemProps>`
  font-family: var(--font-heading);
  font-weight: ${(props) =>
    props.highlighted
      ? "var(--font-weight-bold)"
      : "var(--font-weight-regular)"};
  margin: 0 1rem;

  @media (max-width: 767px) {
    margin: 0;
  }
`;

export const NavItems = styled.div`
  display: flex;

  @media (max-width: 767px) {
    display: none; /* Hide items in mobile view */
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;
export const DropdownButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  right: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${DropdownButton}:focus + &,
  ${DropdownButton}:hover + & {
    display: block;
  }

  a {
    padding: 1rem;
    display: block;
  }
`;
