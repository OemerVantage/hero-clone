import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

interface UseScrollAnimationReturn {
  ref: (node?: Element | null) => void;
  controls: ReturnType<typeof useAnimation>;
  inView: boolean;
}

export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn => {
  const { 
    threshold = 0.1, 
    triggerOnce = true,
    rootMargin = "0px"
  } = options;

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!triggerOnce) {
      controls.start("hidden");
    }
  }, [controls, inView, triggerOnce]);

  return { ref, controls, inView };
};

export default useScrollAnimation;
