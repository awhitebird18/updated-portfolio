import FadeInContainer from "@/components/layout/FadeInContainer";
import { data } from "@/data/experience";

const Resume = () => {
  return (
    <div className="h-screen w-full flex flex-col gap-16 p-8 md:p-16 lg:px-24 items-center overflow-hidden">
      <h1 className="text-5xl">Experience</h1>

      <div className="flex flex-col justify-center items-center gap-12">
        {data.map((work) => (
          <div key={work.title} className="flex rounded-lg border-slate-800  lg:w-3/4">
            <FadeInContainer duration={1000}>
              <div className="flex gap-6 justify-center">
                <div className="w-16 flex justify-start items-start">
                  <img src={work.companyLogo} className="w-full" />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex gap-2 items-center">
                    <h3 className="font-bold">{work.title}</h3>/
                    <p className="text-indigo-400">{work.company}</p>
                  </div>
                  <p className="text-sm mb-2">{work.dates}</p>
                  <p>{work.description}</p>
                </div>
              </div>
            </FadeInContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
