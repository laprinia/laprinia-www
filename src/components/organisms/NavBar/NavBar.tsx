import { useState, useEffect, useRef, useCallback } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Nav,
  NavItem,
  NavItemsContainer,
  CenteredItemWrapper,
  NavItems,
  NavLink,
  NavLabel,
  Dropdown,
  DropdownButton,
  DropdownContent,
} from "./NavBar.styles";

const NavBar = ({
  items,
  highlightedIndex,
  variant,
  currentHref,
  layout = "centered",
  homeHref = "/",
}: {
  variant?: "highlight";
  currentHref?: string;
  items: { label: string; href: string }[];
  highlightedIndex: number;
  layout?: "centered" | "grouped";
  homeHref?: string;
}) => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const findScrollTarget = useCallback((): HTMLElement | null => {
    const layout = navRef.current?.parentElement;
    if (!layout) return null;
    const viewport = layout.querySelector("[data-radix-scroll-area-viewport]");
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
    // Some pages scroll an inner container, others scroll the window, so watch
    // both: the container lookup is a heuristic and can pick the wrong element.
    const target = findScrollTarget();
    const update = () =>
      setScrolled((target?.scrollTop ?? 0) > 10 || window.scrollY > 10);

    update();
    window.addEventListener("scroll", update, { passive: true });
    target?.addEventListener("scroll", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      target?.removeEventListener("scroll", update);
    };
  }, [findScrollTarget]);

  const grouped = layout === "grouped";

  const reorderedItems = grouped
    ? items
    : [
        items[highlightedIndex],
        ...items.filter((_, index) => index !== highlightedIndex),
      ];

  return (
    <Nav
      ref={navRef}
      $scrolled={scrolled}
      data-nav-variant={variant}
      data-nav-layout={layout}
    >
      <NavItem highlighted={!grouped}>
        <NavLink
          aria-labelledby="home-link"
          href={homeHref}
          aria-current={currentHref === homeHref ? "page" : undefined}
        >
          <NavLabel>lavinia dumitrenco</NavLabel>
        </NavLink>
      </NavItem>
      <NavItemsContainer>
        {grouped ? null : (
          <CenteredItemWrapper>
            <NavItem highlighted={true}>
              <NavLink
                href={reorderedItems[0].href}
                aria-labelledby={`${reorderedItems[0].label}`}
                aria-current={
                  currentHref === reorderedItems[0].href ? "page" : undefined
                }
              >
                <NavLabel>{reorderedItems[0].label}</NavLabel>
              </NavLink>
            </NavItem>
          </CenteredItemWrapper>
        )}
        <NavItems>
          {(grouped ? reorderedItems : reorderedItems.slice(1)).map(
            (item, index) => (
              <NavItem key={index} highlighted={false}>
                <NavLink
                  href={item.href}
                  aria-labelledby={`${item.label}`}
                  aria-current={currentHref === item.href ? "page" : undefined}
                >
                  <NavLabel>{item.label}</NavLabel>
                </NavLink>
              </NavItem>
            ),
          )}
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
            <DropdownContent sideOffset={5} data-nav-variant={variant}>
              {items.map((item, index) => (
                <DropdownMenu.Item key={index} asChild>
                  <NavLink
                    href={item.href}
                    aria-labelledby={`dropdown-link-${index}`}
                    aria-current={
                      currentHref === item.href ? "page" : undefined
                    }
                  >
                    <NavLabel>{item.label}</NavLabel>
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
