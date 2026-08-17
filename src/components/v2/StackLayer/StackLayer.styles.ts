import { motion } from "framer-motion";
import styled from "styled-components";

export const Layer = styled(motion.div)`
  position: sticky;
  top: var(--layer-top, 0px);
  overflow: hidden;
`;
