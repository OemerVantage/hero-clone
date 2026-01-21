import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

interface UseScrollAnimationReturn {
  ref: (node?: Element | null) => void;
  controls: "visible" | "hidden";
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

  const [controls, setControls] = useState<"visible" | "hidden">("hidden");
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin
  });

  useEffect(() => {
    if (inView) {
      setControls("visible");
    } else if (!triggerOnce) {
      setControls("hidden");
    }
  }, [inView, triggerOnce]);

  return { ref, controls, inView };
};

export default useScrollAnimation;
