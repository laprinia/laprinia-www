import type { ReactNode } from "react";
import { FolderBody } from "./Folder.styles";

const Folder = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <FolderBody className={className}>{children}</FolderBody>;

export default Folder;
