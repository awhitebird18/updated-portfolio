import { useState, useEffect } from "react";
import birdImg from "@/assets/bird.svg";
import { Button } from "@/components/ui/Button";
import "@/styles/nav.css";

type NavProps = {
  activeSection?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refs: any;
};

const Nav = ({ refs }: NavProps) => {
  const [showLogo, setShowLogo] = useState(false);

  const handleNavigate = (id: string) => {
    const sectionElement = refs[id].current;

    if (sectionElement) {
      const topPosition = sectionElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight - 150) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-between fixed top-2 left-0 p-2 z-30 nav-details">
      {showLogo ? (
        <Button variant="ghost" onClick={() => handleNavigate("home")} className="logo">
          <div className="h-10 w-10">
            <img src={birdImg} className="h-full w-full" alt="Bird Logo" />
          </div>
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Nav;
