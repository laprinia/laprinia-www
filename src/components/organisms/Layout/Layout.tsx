import { type ReactNode } from "react";
import { LayoutContainer } from "./Layout.styles";

const Layout = ({ children }: { children: ReactNode }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
