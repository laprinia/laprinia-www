const CLIP_PATH = "M15 59V21a6 6 0 0 1 12 0v44a9 9 0 0 1-18 0V27";

const Paperclip = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 36 84"
    fill="none"
    strokeLinecap="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d={CLIP_PATH} stroke="var(--neutral-000)" strokeWidth={10} />
    <path d={CLIP_PATH} stroke="currentColor" strokeWidth={4} />
  </svg>
);

export default Paperclip;
