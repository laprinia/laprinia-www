import styled from "styled-components";

export const FolderBody = styled.div`
  --folder-tab-width: 42%;
  --folder-tab-height: 1.1rem;
  --folder-border-width: 1.5px;
  --folder-surface: var(--neutral-000);
  --folder-outline: var(--accent-color);
  --folder-seam: calc(var(--folder-border-width) + 1px);

  position: relative;
  margin-top: var(--folder-tab-height);
  padding: 1.1rem 1.25rem;
  background-color: var(--folder-surface);
  border: var(--folder-border-width) solid var(--folder-outline);
  border-radius: 0 var(--border-radius) var(--border-radius)
    var(--border-radius);

  &::before {
    content: "";
    position: absolute;
    left: calc(var(--folder-border-width) * -1);
    bottom: calc(100% - var(--folder-seam));
    width: var(--folder-tab-width);
    height: calc(var(--folder-tab-height) + var(--folder-seam));
    background-color: var(--folder-surface);
    border: var(--folder-border-width) solid var(--folder-outline);
    border-bottom: 0;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }
`;
