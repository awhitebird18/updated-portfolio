import innovationImg from "@/assets/innovation.png";
import strengthImg from "@/assets/strength.png";
import knowledgeImg from "@/assets/knowledge.png";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Values = ({ sectionRef }: { sectionRef: any }) => {
  return (
    <div className="w-full flex flex-col items-center parallax-section bg-zinc-800 overflow-hidden">
      <div
        id="values"
        ref={sectionRef}
        className="h-full w-full flex px-8 md:px-16 max-w-6xl pt-32"
      >
        <div className="justify-start flex flex-col items-start gap-2 max-w-6xl">
          <div className="mb-20">
            <div className="w-full mb-4">
              <h3 className="text-3xl text-violet-500 font-semibold mb-4">Core Values</h3>
              <h2 className="text-5xl font-bold bg-clip-text text-white">What keeps me driven.</h2>
            </div>
            <p className="text-lg text-left mb-8 text-violet-200">
              I want to be the very best, like no one ever was. To catch them is.. wait. I mean — by
              upholding core values of hard work, innovation, and continuous learning, I evolve with
              the tech ecosystem, ensuring my development work is not just effective, but truly
              exceptional.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-28 lg:gap-10 relative w-full lg:h-60">
            <div className="w:full lg:w-1/3 h-80 lg:h-[36rem] flex flex-col justify-between relative  shadow-xl shadow-black">
              <div className="overflow-hidden bg-violet-500 absolute w-32 h-32 left-1/2 -translate-x-1/2 -top-16 rounded-full p-2 shadow-lg shadow-violet-950">
                <img src={knowledgeImg} className="w-full h-full" />
              </div>

              <div className="flex flex-col items-center flex-1 px-8 pt-20 text-center gap-4 bg-gradient-to-t to-violet-600 from-violet-950 rounded">
                <h3 className="text-3xl font-semibold text-white">
                  Knowledge and Continuous Learning
                </h3>
                <div className="w-1/2 h-1 bg-violet-900 rounded-sm" />
                <p className="text-violet-300">
                  With a voracious appetite for the latest in technology, I ensure that my skills
                  are as cutting-edge as the solutions I craft.
                </p>
              </div>
            </div>
            <div className="w:full lg:w-1/3 h-96 lg:h-[36rem] flex flex-col justify-between relative rounded-lg">
              <div className="overflow-hidden bg-violet-500 absolute w-40 h-40 left-1/2 -translate-x-1/2 -top-16 rounded-full p-2 shadow-lg shadow-violet-950 ">
                <img src={strengthImg} className="w-full h-full" />
              </div>

              <div className="flex flex-col items-center flex-1  mt-8 px-8 pt-20 text-center gap-4 bg-gradient-to-t to-violet-600 from-violet-950 rounded">
                <h3 className="text-3xl font-semibold text-white">Persistence and Hardwork</h3>
                <div className="w-1/2 h-1 bg-violet-900 rounded-sm" />
                <p className="text-violet-200">
                  It's the quiet dedication behind every line of code, the resilience in the face of
                  complex challenges, and the unwavering commitment to quality that transforms a
                  vision into a tangible, functional reality.
                </p>
              </div>
            </div>
            <div className="w:full lg:w-1/3 h-80 lg:h-[36rem]  flex flex-col justify-between relative  rounded-lg">
              <div className="overflow-hidden bg-violet-500 absolute w-32 h-32 left-1/2 -translate-x-1/2 -top-16 rounded-full p-2 shadow-lg shadow-violet-950 ">
                <img src={innovationImg} className="w-full h-full" />
              </div>

              <div className="flex flex-col items-center flex-1 px-8 pt-20 text-center gap-4 bg-gradient-to-t to-violet-600 from-violet-950 rounded">
                <h3 className="text-3xl font-semibold text-white">
                  Innovation and Problem-Solving
                </h3>
                <div className="w-1/2 h-1 bg-violet-900 rounded-sm" />
                <p className="text-violet-200">
                  My passion for innovation is matched only by my strategy for problem-solving:
                  think outside the box, act with intention, and code with purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          d="M0,160L120,181.3C240,203,480,245,720,245.3C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Values;
