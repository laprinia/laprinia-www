export const bp = {
  sm: 480,
  md: 700,
  lg: 1000,
  xl: 1230,
  xxl: 1800,
} as const;

export type Breakpoint = keyof typeof bp;

export const media = {
  sm: `@media (width >= ${bp.sm}px)`,
  md: `@media (width >= ${bp.md}px)`,
  lg: `@media (width >= ${bp.lg}px)`,
  xl: `@media (width >= ${bp.xl}px)`,
  xxl: `@media (width >= ${bp.xxl}px)`,
} as const;

export const mediaBelow = {
  sm: `@media (width < ${bp.sm}px)`,
  md: `@media (width < ${bp.md}px)`,
  lg: `@media (width < ${bp.lg}px)`,
  xl: `@media (width < ${bp.xl}px)`,
  xxl: `@media (width < ${bp.xxl}px)`,
} as const;
