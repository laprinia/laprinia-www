import {
  aboutMeHeading,
  aboutMeId,
  selectedWorkHeading,
  selectedWorkId,
  whatIDoHeading,
  whatIDoId,
} from "./consts.v2";

export const folderDials = {
  tabHeightPx: 44,
  tabWidthPx: 224,
  folderGapPx: 16,
  tabChamferPx: 44,
  bodyRadiusPx: 16,
  tabStaggerPx: 112,
  tabInsetPx: 40,
  openTopGapPx: 32,
  stackBottomPx: 24,
  stackInsetPx: 80,
  hoverLiftPx: 14,
};

export const folderSpring = {
  type: "spring" as const,
  stiffness: 200,
  damping: 32,
  mass: 0.9,
};

export type FolderMeta = {
  id: string;
  label: string;
  surface: string;
  ink: string;
};

export const homeFolders: FolderMeta[] = [
  {
    id: selectedWorkId,
    label: selectedWorkHeading,
    surface: "var(--accent-color)",
    ink: "var(--neutral-100)",
  },
  {
    id: whatIDoId,
    label: whatIDoHeading,
    surface: "var(--support-color)",
    ink: "var(--way-darker-accent-color)",
  },
  {
    id: aboutMeId,
    label: aboutMeHeading,
    surface: "var(--neutral-700)",
    ink: "var(--support-color)",
  },
];

export const v3HomeTitle = "home v3 - Lavinia Dumitrenco";

export const v3HomeDescription =
  "Preview of the folder-stack treatment for the homepage sections.";
