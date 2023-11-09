import FadeInContainer from "@/components/layout/FadeInContainer";
import { data } from "@/data/experience";
import arrow from "@/assets/arrow.svg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Experience = ({ sectionRef }: { sectionRef: any }) => {
  return (
    <div
      id="experience"
      ref={sectionRef}
      className="w-full flex flex-col gap-16 py-36 items-center bg-white z-10 relative"
    >
      <div className="flex flex-col max-w-6xl px-8 md:px-16 w-full">
        <div className="justify-start flex flex-col items-start gap-2 mb-12">
          <h1 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
            Experience
          </h1>

          <p className="text-5xl font-bold text-black">Full Stack Developer</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-10">
          {data.map((work, index) => (
            <div key={work.title} className="flex  rounded-lg border-slate-800 w-full">
              <FadeInContainer duration={1000}>
                <div className="flex flex-col gap-4 justify-center">
                  <div className="flex gap-4">
                    <div className="w-16 flex justify-start items-start">
                      <img src={work.companyLogo} className="w-full" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <h3 className="font-bold text-black text-lg">{work.title}</h3>/
                        <p className="text-violet-500 font-semibold">{work.company}</p>
                      </div>
                      <p className="text-sm mb-2 text-slate-500 font-semibold">{work.dates}</p>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 ml-2 md:ml-20">
                    <ul className="text-slate-600 flex flex-col gap-4">
                      {work.points.map((point, index) => (
                        <li key={index} className="flex items-start text-slate-800">
                          <span className="text-3xl h-4 w-4 text-center leading-3 mt-1">
                            &bull;
                          </span>
                          <span className="align-middle ml-2">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < data.length - 1 && (
                  <img src={arrow} className="w-full h-5 opacity-10 mt-12" />
                )}
              </FadeInContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
