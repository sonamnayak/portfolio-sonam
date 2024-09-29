import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Footer() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      <b>Sonam Nayak</b> © sonamnayak2710@gmail.com
    </motion.footer>
  );
}
