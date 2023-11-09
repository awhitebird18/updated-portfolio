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

    useEffect(() => {
      const reveal = () => {
        const fadeContainers = document.querySelectorAll(".fade-in");

        const windowHeight = window.innerHeight;
        const fadeInPoint = 150;
        for (let i = 0; i < fadeContainers.length; i++) {
          const containerTop = fadeContainers[i].getBoundingClientRect().top;

          if (containerTop < windowHeight - fadeInPoint) {
            fadeContainers[i].classList.add("active");
          } else {
            fadeContainers[i].classList.remove("active");
          }
        }
      };

      window.addEventListener("scroll", reveal);

      return () => window.removeEventListener("scroll", reveal);
    }, []);

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
