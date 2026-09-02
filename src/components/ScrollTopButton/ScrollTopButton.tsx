import { useEffect, useState } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { ArrowUp } from "lucide-react";
import { FloatingTop } from "./ScrollTopButton.styles";

const ScrollTopButton = ({ label }: { label: string }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const toTop = () => window.scrollTo({ top: 0 });

  return (
    <FloatingTop
      type="button"
      onClick={toTop}
      $visible={visible}
      aria-hidden={visible ? undefined : true}
      tabIndex={visible ? undefined : -1}
    >
      <ArrowUp size={18} strokeWidth={2.5} aria-hidden="true" />
      <VisuallyHidden.Root>{label}</VisuallyHidden.Root>
    </FloatingTop>
  );
};

export default ScrollTopButton;
