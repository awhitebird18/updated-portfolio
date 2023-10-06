import { useEffect, useState, forwardRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type FadeInContainerProps = {
  duration?: number;
  children: React.ReactNode;
};

const FadeInContainer = forwardRef<HTMLDivElement, FadeInContainerProps>(
  ({ duration = 100, children }, ref) => {
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const [innerRef, isVisible] = useIntersectionObserver();

    useEffect(() => {
      if (isVisible) {
        setHasBeenVisible(true);
      }
    }, [isVisible]);
    return (
      <div
        className={`transition z-20 opacity-0 h-full w-full ease-in duration-${duration} ${
          hasBeenVisible && "opacity-100"
        }`}
        ref={ref || innerRef}
      >
        {children}
      </div>
    );
  }
);

export default FadeInContainer;

// duration-100 duration-150 duration-200 duration-300 duration-500 duration-1000
