import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";
import { folderDials, folderSpring, type FolderMeta } from "../../../consts.v3";
import {
  Stage,
  StackTopProbe,
  StageContent,
  Folder,
  FolderBody,
  Tab,
  TabIndex,
  Panel,
} from "./FolderStack.styles";

export type FolderStackItem = FolderMeta & { content: ReactNode };

const allClosed = -1;

const FolderStack = ({
  items,
  children,
}: {
  items: FolderStackItem[];
  children?: ReactNode;
}) => {
  const [openIndex, setOpenIndex] = useState(allClosed);
  const [hoverIndex, setHoverIndex] = useState(allClosed);
  const [stageHeight, setStageHeight] = useState(0);
  const [settled, setSettled] = useState(false);
  const [stackTop, setStackTop] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const probeRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const node = stageRef.current;
    const probe = probeRef.current;
    if (!node || !probe) return;

    const sync = () => {
      setStageHeight(node.clientHeight);
      setStackTop(probe.clientHeight);
    };
    sync();

    const observer = new ResizeObserver(sync);
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (stageHeight) setSettled(true);
  }, [stageHeight]);

  const pitch = folderDials.tabHeightPx + folderDials.folderGapPx;

  const stackFootprint =
    folderDials.stackBottomPx +
    folderDials.tabHeightPx +
    (items.length - 1) * pitch;

  const staggerRatio = folderDials.tabStaggerPx / folderDials.tabWidthPx;
  const tabSpan = 1 + (items.length - 1) * staggerRatio;

  const stageVars = {
    "--tab-height": `${folderDials.tabHeightPx}px`,
    "--folder-gap": `${folderDials.folderGapPx}px`,
    "--tab-width-max": `${folderDials.tabWidthPx}px`,
    "--tab-span": `${tabSpan}`,
    "--tab-stagger-ratio": `${staggerRatio}`,
    "--body-radius": `${folderDials.bodyRadiusPx}px`,
    "--tab-chamfer": `${folderDials.tabChamferPx}px`,
    "--tab-inset-max": `${folderDials.tabInsetPx}px`,
    "--open-top-gap": `${folderDials.openTopGapPx}px`,
    "--stack-height": `${stackFootprint}px`,
    "--stack-inset-max": `${folderDials.stackInsetPx}px`,
  } as CSSProperties;

  const offsetFor = (index: number) => {
    if (index <= openIndex || !stageHeight) return stackTop + index * pitch;

    const resting = stageHeight - stackFootprint + index * pitch;
    if (index !== hoverIndex) return resting;

    return resting - folderDials.hoverLiftPx;
  };

  return (
    <Stage ref={stageRef} style={stageVars}>
      <StackTopProbe ref={probeRef} aria-hidden="true" />
      <StageContent onClick={() => setOpenIndex(allClosed)}>
        {children}
      </StageContent>

      {items.map((item, index) => {
        const isOpen = index === openIndex;
        const isHovered = !isOpen && index === hoverIndex;

        const coveredBelow = Math.max(0, stackFootprint - (index + 1) * pitch);

        const folderVars = {
          zIndex: index + 1,
          "--panel-cover": `${coveredBelow}px`,
          "--open-y": `${stackTop + index * pitch}px`,
          "--folder-surface": item.surface,
          "--folder-ink": item.ink,
          "--tab-slot": items.length - 1 - index,
          "--section-ink": item.ink,
          "--button-ink": item.ink,
          "--button-on-ink": item.surface,
          "--notebook-background": item.surface,
        } as CSSProperties;

        return (
          <Folder
            key={item.id}
            style={folderVars}
            data-open={isOpen}
            data-hover={isHovered}
            initial={false}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() =>
              setHoverIndex((current) =>
                current === index ? allClosed : current,
              )
            }
            animate={{ y: offsetFor(index) }}
            transition={
              prefersReducedMotion || !settled ? { duration: 0 } : folderSpring
            }
          >
            <FolderBody
              onClick={() =>
                setOpenIndex((current) => (current === index ? current : index))
              }
            >
              <Panel
                id={`${item.id}-panel`}
                role="region"
                aria-labelledby={`${item.id}-tab`}
                inert={!isOpen}
              >
                {isOpen ? item.content : null}
              </Panel>
            </FolderBody>

            <Tab
              type="button"
              id={`${item.id}-tab`}
              aria-expanded={isOpen}
              aria-controls={`${item.id}-panel`}
              onClick={() =>
                setOpenIndex((current) =>
                  current === index ? allClosed : index,
                )
              }
              onFocus={() => setHoverIndex(index)}
              onBlur={() =>
                setHoverIndex((current) =>
                  current === index ? allClosed : current,
                )
              }
            >
              <TabIndex aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </TabIndex>
              {item.label}
            </Tab>
          </Folder>
        );
      })}
    </Stage>
  );
};

export default FolderStack;
