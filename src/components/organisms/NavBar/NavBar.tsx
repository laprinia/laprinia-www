import { useState, useEffect, useRef, useCallback } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Nav,
  NavItem,
  NavItemsContainer,
  CenteredItemWrapper,
  NavItems,
  NavLink,
  Dropdown,
  DropdownButton,
  DropdownContent,
} from "./NavBar.styles";

const NavBar = ({
  items,
  highlightedIndex,
}: {
  items: { label: string; href: string }[];
  highlightedIndex: number;
}) => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const findScrollTarget = useCallback((): HTMLElement | null => {
    const layout = navRef.current?.parentElement;
    if (!layout) return null;
    const viewport = layout.querySelector(
      "[data-radix-scroll-area-viewport]",
    );
    if (viewport) return viewport as HTMLElement;
    const children = layout.querySelectorAll("*");
    for (const child of children) {
      const { overflowY } = getComputedStyle(child);
      if (overflowY === "auto" || overflowY === "scroll") {
        return child as HTMLElement;
      }
    }
    return null;
  }, []);

  useEffect(() => {
    const target = findScrollTarget();
    if (!target) return;
    const onScroll = () => setScrolled(target.scrollTop > 10);
    target.addEventListener("scroll", onScroll, { passive: true });
    return () => target.removeEventListener("scroll", onScroll);
  }, [findScrollTarget]);

  const reorderedItems = [
    items[highlightedIndex],
    ...items.filter((_, index) => index !== highlightedIndex),
  ];

  return (
    <Nav ref={navRef} $scrolled={scrolled}>
      <NavItem highlighted={true}>
        <NavLink aria-labelledby="home-link" href="/">
          LD // HOME
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
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <DropdownButton aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </DropdownButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownContent sideOffset={5}>
              {items.map((item, index) => (
                <DropdownMenu.Item key={index} asChild>
                  <NavLink
                    href={item.href}
                    aria-labelledby={`dropdown-link-${index}`}
                  >
                    {item.label}
                  </NavLink>
                </DropdownMenu.Item>
              ))}
            </DropdownContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </Dropdown>
    </Nav>
  );
};

export default NavBar;
