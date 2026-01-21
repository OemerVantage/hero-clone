import { motion, Variants } from "framer-motion";
import { ReactNode, Children } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  childDelay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  triggerOnce?: boolean;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

const StaggerChildren = ({
  children,
  className = "",
  staggerDelay = 0.1,
  childDelay = 0,
  duration = 0.5,
  direction = "up",
  distance = 20,
  triggerOnce = true,
  threshold = 0.1,
  as = "div"
}: StaggerChildrenProps) => {
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childDelay
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
    >
      {Children.map(children, (child) => (
        <motion.div variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </MotionComponent>
  );
};

export default StaggerChildren;
