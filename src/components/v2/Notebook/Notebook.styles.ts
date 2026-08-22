import styled from "styled-components";

export const NotebookPanel = styled.div`
  --notebook-hole-radius: clamp(0.4rem, 1.4vw, 0.75rem);
  --notebook-hole-gap: clamp(0.9rem, 3vw, 1.75rem);
  --notebook-gutter: clamp(1.5rem, 3.5vw, 3rem);
  --notebook-line-width: clamp(0.15rem, 0.5vw, 0.25rem);
  --notebook-holes-top: clamp(1.25rem, 4vw, 2.5rem);
  --notebook-holes-bottom: clamp(1.25rem, 4vw, 2.5rem);
  --notebook-margin: 0rem;
  --notebook-content-gap: 0rem;
  --notebook-padding-block: clamp(1.75rem, 3.5vw, 3.25rem);
  --notebook-padding-inline: clamp(1.25rem, 3vw, 2rem);
  --notebook-background: var(--accent-color);
  --notebook-color: inherit;
  --notebook-radius: 1.25rem;
  --notebook-min-height: 0px;
  --notebook-band-end: calc(100% - var(--notebook-holes-bottom));
  --notebook-pitch: calc(
    var(--notebook-hole-radius) * 2 + var(--notebook-hole-gap)
  );
  --notebook-hole-x: calc(var(--notebook-gutter) / 2);
  --notebook-hole-offset: calc(
    var(--notebook-holes-top) +
      var(--notebook-hole-radius) - var(--notebook-pitch) / 2
  );
  --notebook-line-top: calc(50% - var(--notebook-line-width) / 2);
  --notebook-line-bottom: calc(50% + var(--notebook-line-width) / 2);

  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: var(--notebook-margin);
  scroll-margin-top: var(--notebook-margin);
  min-height: max(
    0px,
    calc(var(--notebook-min-height) - var(--notebook-margin) * 2)
  );
  background-color: var(--notebook-background);
  color: var(--notebook-color);
  border-radius: var(--notebook-radius);

  /* stylelint-disable property-no-vendor-prefix -- Safari still needs these */
  -webkit-mask-image:
    linear-gradient(
      #000 0,
      #000 var(--notebook-holes-top),
      transparent var(--notebook-holes-top),
      transparent var(--notebook-band-end),
      #000 var(--notebook-band-end)
    ),
    radial-gradient(
      circle var(--notebook-hole-radius) at var(--notebook-hole-x) 50%,
      transparent 98%,
      #000 100%
    ),
    linear-gradient(
      to right,
      transparent 0,
      transparent var(--notebook-hole-x),
      #000 var(--notebook-hole-x)
    ),
    linear-gradient(
      #000 0,
      #000 var(--notebook-line-top),
      transparent var(--notebook-line-top),
      transparent var(--notebook-line-bottom),
      #000 var(--notebook-line-bottom)
    );
  -webkit-mask-size:
    100% 100%,
    100% var(--notebook-pitch),
    100% 100%,
    100% var(--notebook-pitch);
  -webkit-mask-position:
    0 0,
    0 var(--notebook-hole-offset),
    0 0,
    0 var(--notebook-hole-offset);
  -webkit-mask-repeat: no-repeat, repeat-y, no-repeat, repeat-y;
  -webkit-mask-composite: source-over, source-in, source-over, source-over;
  /* stylelint-enable property-no-vendor-prefix */

  mask-image:
    linear-gradient(
      #000 0,
      #000 var(--notebook-holes-top),
      transparent var(--notebook-holes-top),
      transparent var(--notebook-band-end),
      #000 var(--notebook-band-end)
    ),
    radial-gradient(
      circle var(--notebook-hole-radius) at var(--notebook-hole-x) 50%,
      transparent 98%,
      #000 100%
    ),
    linear-gradient(
      to right,
      transparent 0,
      transparent var(--notebook-hole-x),
      #000 var(--notebook-hole-x)
    ),
    linear-gradient(
      #000 0,
      #000 var(--notebook-line-top),
      transparent var(--notebook-line-top),
      transparent var(--notebook-line-bottom),
      #000 var(--notebook-line-bottom)
    );
  mask-size:
    100% 100%,
    100% var(--notebook-pitch),
    100% 100%,
    100% var(--notebook-pitch);
  mask-position:
    0 0,
    0 var(--notebook-hole-offset),
    0 0,
    0 var(--notebook-hole-offset);
  mask-repeat: no-repeat, repeat-y, no-repeat, repeat-y;
  mask-composite: add, intersect, add, add;
`;

export const NotebookContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--notebook-content-gap);
  padding: var(--notebook-padding-block) var(--notebook-padding-inline);
  padding-left: calc(var(--notebook-gutter) + var(--notebook-padding-inline));
`;
