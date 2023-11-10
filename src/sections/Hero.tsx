import "@/styles/hero.css";
import FadeInContainer from "@/components/layout/FadeInContainer";
import { Button } from "@/components/ui/Button";
import sparxLogin from "../assets/sparxlogin.jpg";
import upcurve from "../assets/upcurve.svg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Hero = ({ sectionRef }: { sectionRef: any }) => {
  return (
    <FadeInContainer duration={1000}>
      <div
        className="parallax-section h-screen flex items-center flex-col relative overflow-hidden w-full bg-zinc-900"
        id="hero"
        ref={sectionRef}
      >
        <div className="hero-details flex gap-10 md:gap-4 xl:gap-12 absolute z-30 flex-col items-center top-1/4 left-1/8 -translate-x-1/8">
          <div className="flex flex-col gap-2 md:gap-3 items-center text-center">
            <h1 className="text-7xl xl:text-8xl leading-tight font-bold gradient-text text-white gradient-text">
              Aaron Whitebird
            </h1>
            <p className="text-3xl md:text-4xl font-semibold text-violet-400">
              Fullstack Developer
            </p>
          </div>
          <div className="hero-buttons flex gap-8">
            <a href="#projects">
              <Button className="" variant="secondary">
                Projects
              </Button>
            </a>
            <a href="#contact" className="text-white text-lg">
              <Button className="">Contact</Button>
            </a>
          </div>
        </div>
        <div className="hero-details w-11/12 md:w-3/5 min-h-[23rem] max-h-[28rem] absolute -bottom-12 md:-bottom-24 left-auto rounded-2xl overflow-hidden shadow-lg shadow-violet-500 max-w-5xl">
          <img src={sparxLogin} />
        </div>
        <div className="w-screen h-min absolute bottom-0 left-0">
          <img src={upcurve} alt="" className="w-full " />
          <div className="h-32 md:h-12 bg-black"></div>
        </div>
      </div>
    </FadeInContainer>
  );
};

export default Hero;
