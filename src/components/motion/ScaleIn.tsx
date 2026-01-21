import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  initialScale?: number;
  triggerOnce?: boolean;
  threshold?: number;
}

const ScaleIn = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  initialScale = 0.95,
  triggerOnce = true,
  threshold = 0.1
}: ScaleInProps) => {
  const { ref, controls } = useScrollAnimation({ triggerOnce, threshold });

  const variants: Variants = {
    hidden: { opacity: 0, scale: initialScale },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScaleIn;
