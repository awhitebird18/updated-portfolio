import { useEffect, useState } from "react";

const PageTracker = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const fn = () => {
      const scrollPercentageCalc =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      setScrollPercentage(scrollPercentageCalc);
    };

    window.addEventListener("scroll", fn);

    return () => window.removeEventListener("scroll", fn);
  }, [scrollPercentage]);

  return (
    <div className="flex flex-col w-2 parent-container relative">
      <div className="absolute w-4 border-dashed border-b-2 border-r-2 border-slate-800 top-6 bottom-6 z-0 right-1">
        <div
          className={`w-4 border-t-1 border-r-2 border-slate-700 z-0 right-1`}
          style={{ height: `${scrollPercentage}%` }}
        />
      </div>

      <div className="absolute top-6 border-t-2 right-1 border-slate-700 w-4" />
      {scrollPercentage === 100 ? (
        <div className="absolute bottom-6 border-b-2 right-1 border-slate-700 w-4 h-full" />
      ) : null}
    </div>
  );
};

export default PageTracker;
