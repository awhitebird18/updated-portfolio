import { useState, useRef, useEffect } from "react";
import "@/styles/hero.css";
import FadeInContainer from "@/components/layout/FadeInContainer";
import birdLogo from "@/assets/bird.svg";

const Hero = () => {
  const [visibilityRatio, setVisibilityRatio] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleIntersect = ([entry]: any) => {
      setVisibilityRatio(entry.intersectionRatio);
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: Array.from({ length: 101 }, (_, index) => index / 100),
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(heroRef?.current);
      }
    };
  }, []);

  const bgColor = `rgba(0, 0, 15, ${visibilityRatio})`;

  return (
    <FadeInContainer duration={1000}>
      <div
        className="h-screen flex items-center xl:items-start justify-center xl:justify-start md:justify-center relative overflow-hidden p-16 xl:px-24"
        ref={heroRef}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex gap-2 xl:gap-10 relative z-30 flex-col xl:flex-row items-center xl:items-start">
          <div className="w-36 h-36 xl:w-60 xl:h-60">
            <img src={birdLogo} className="w-full h-full" />
          </div>

          <div className="flex flex-col gap-3 items-center xl:items-start text-center xl:text-left">
            <h1 className="text-6xl lg:text-8xl font-semibold gradient-text">Aaron Whitebird</h1>
            <p className="text-3xl hero-details">Fullstack Developer</p>
          </div>
        </div>
        <div style={{ opacity: visibilityRatio }}>
          <div className="shadow shadow-white absolute bottom-20 left-44 w-1 h-1 blur-sm bg-white" />
          <div className="shadow shadow-white absolute bottom-24 left-14 w-0.5 h-0.5  bg-slate-500" />
          <div
            className="w-10 h-10 moon absolute bottom-24 left-24 bg-indigo-900 rounded-full bg-gradient-to-b from-blue-900 to-slate-950 shadow-ring"
            style={{ opacity: visibilityRatio }}
          />
        </div>
        <div className="forest-overlay w-full absolute bottom-0 left-0 overflow-hidden z-20 h-20"></div>
        <div
          className="animated-glow absolute -bottom-24 left-0 w-full h-20 z-0"
          style={{ opacity: visibilityRatio }}
        />
        <div className="z-20 bg-black w-full h-full absolute hero-background top-0 left-0" />
      </div>
    </FadeInContainer>
  );
};

export default Hero;
