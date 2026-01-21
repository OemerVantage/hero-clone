import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  triggerOnce?: boolean;
  threshold?: number;
}

const FadeIn = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 20,
  triggerOnce = true,
  threshold = 0.1
}: FadeInProps) => {
  const { ref, controls } = useScrollAnimation({ triggerOnce, threshold });

  const getDirectionValues = () => {
    switch (direction) {
      case "up": return { y: distance, x: 0 };
      case "down": return { y: -distance, x: 0 };
      case "left": return { x: distance, y: 0 };
      case "right": return { x: -distance, y: 0 };
      case "none": return { x: 0, y: 0 };
    }
  };

  const { x, y } = getDirectionValues();

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
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

export default FadeIn;
