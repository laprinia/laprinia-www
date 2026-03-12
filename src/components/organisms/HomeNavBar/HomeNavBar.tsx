import { memo } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { navItems } from "../../../consts";
import { Navbar } from "./HomeNavBar.styles";

const HomeNavBar = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <Navbar aria-labelledby="navigation" isMobile={isMobile}>
      <VisuallyHidden.Root asChild>
        <p id="navigation">Navigation</p>
      </VisuallyHidden.Root>
      {navItems.map((item, index) => {
        return <a href={item.href}>{item.label.toUpperCase()}</a>;
      })}
    </Navbar>
  );
};

export default memo(HomeNavBar);
