import styled from "styled-components";
import { motion } from "framer-motion";

export const Stage = styled.div`
  --stack-inset: 0px;

  @media (width >= 769px) {
    --stack-inset: clamp(var(--space-6), 5vw, var(--stack-inset-max));
  }

  --tab-inset: min(var(--tab-inset-max), var(--space-4) + 1.6vw);
  --tab-width: min(
    var(--tab-width-max),
    (100% - var(--tab-inset) - var(--space-4)) / var(--tab-span)
  );
  --tab-stagger: calc(var(--tab-width) * var(--tab-stagger-ratio));

  position: relative;
  height: 100svh;
  overflow: hidden;
  isolation: isolate;
  background-color: var(--background-color);
`;

export const StackTopProbe = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: calc(var(--nav-height) + var(--open-top-gap));
  visibility: hidden;
  pointer-events: none;
`;

export const StageContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  padding-top: var(--nav-height);
  padding-bottom: var(--stack-height);
`;

export const Folder = styled(motion.article)`
  position: absolute;
  inset: 0 var(--stack-inset);
  pointer-events: none;

  &[data-open="true"] {
    bottom: auto;
    height: calc(100% - var(--open-y));
  }
`;

export const FolderBody = styled.div`
  pointer-events: auto;
  cursor: pointer;
  box-shadow: 0 0 0 rgb(0 0 0 / 0%);
  transition: box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  ${Folder}[data-hover="true"] & {
    box-shadow: 0 -20px 48px rgb(0 0 0 / 26%);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  position: absolute;
  inset: var(--tab-height) 0 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--body-radius) var(--body-radius) 0 0;
  background-color: var(--folder-surface);
  color: var(--folder-ink);
`;

export const Tab = styled.button`
  pointer-events: auto;
  position: absolute;
  top: 0;
  right: calc(var(--tab-inset) + var(--tab-stagger) * var(--tab-slot));
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  width: var(--tab-width);
  min-width: min-content;
  height: calc(var(--tab-height) + var(--body-radius) + 2px);
  padding-left: var(--tab-chamfer);
  padding-right: var(--space-4);
  padding-bottom: calc(var(--body-radius) + 2px);
  border: 0;
  border-radius: 0 var(--body-radius) 0 0;
  background-color: var(--folder-surface);
  color: var(--folder-ink);
  font-family: var(--font-heading);
  font-size: clamp(var(--font-size-ui-xs), 1.2vw, var(--font-size-ui-lg));
  text-align: left;
  text-transform: lowercase;
  white-space: nowrap;
  cursor: pointer;
  clip-path: polygon(
    var(--tab-chamfer) 0,
    100% 0,
    100% 100%,
    0 100%,
    0 var(--tab-height)
  );

  &:focus-visible {
    outline: 2px solid var(--folder-ink);
    outline-offset: -6px;
  }
`;

export const TabIndex = styled.span`
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  font-variant-numeric: tabular-nums;
  opacity: 0.6;
`;

export const Panel = styled.div`
  --panel-inset: clamp(var(--space-5), 4vw, var(--space-10));

  flex: 1;
  min-height: 0;
  padding-top: calc(var(--folder-gap) + var(--space-6));
  padding-bottom: calc(var(--panel-cover) + var(--space-16));
  overflow-y: auto;
  overscroll-behavior: contain;
`;
