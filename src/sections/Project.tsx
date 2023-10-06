/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsArrowLeft, BsArrowRight, BsInfo } from "react-icons/bs";
import { Button } from "@/components/ui/Button";
import FadeInContainer from "@/components/layout/FadeInContainer";
import { Badge } from "@/components/ui/Badge";
import { projectData } from "@/data/projects";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Project = ({ selectedProject }: any) => {
  const colors = ["blue", "red", "yellow", "purple"];

  return (
    <FadeInContainer duration={1000}>
      <div
        id={selectedProject.id}
        className="h-screen w-full justify-center p-6 py-28 lg:py-20 lg:px-24 flex items-center"
      >
        {/* <h1 className="text-6xl top-2 right-1/2 w-full">Skills</h1> */}
        <div className="flex flex-col items-center justify-center h-full z-20 relative w-full max-w-5xl gap-3">
          <div className="p-4">
            <h1 className="text-5xl">Featured Project</h1>
          </div>
          <div
            className={`rounded-xl border border-slate-800 flex flex-col w-full h-full shadow-lg shadow-${selectedProject.color}-500`}
          >
            {/* Tabs */}
            <div className="flex border-b border-slate-800 h-12 items-end">
              {projectData.map((project) => (
                <Button
                  key={project.id}
                  variant="secondary"
                  className={`pointer-events-none flex items-center gap-2 h-9 rounded-bl-none rounded-br-none ${
                    project.id === selectedProject.id
                      ? "bg-slate-900 hover:bg-slate-900"
                      : "bg-transparent"
                  }`}
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 border-slate-800 border">
                    <img src={project.image} />
                  </div>
                  <div className="flex-1 text-left text-xs">{project.title}</div>
                </Button>
              ))}
            </div>
            {/* Address Bar */}
            <div className="flex gap-2 h-10 border-b border-slate-800 px-4 py-1 bg-slate-900">
              <div className="flex gap-4 h-full items-center w-full">
                <div className="w-4">
                  <BsArrowLeft />
                </div>
                <div className="w-4">
                  <BsArrowRight />
                </div>
                <div className="bg-slate-950 w-full h-full rounded-lg px-4 flex items-center gap-3">
                  <div className="border border-slate-700 bg-slate-900 h-4 w-4 rounded-full">
                    <BsInfo />
                  </div>
                  {projectData.find((project) => project.id === selectedProject.id)?.url}
                </div>
              </div>
            </div>

            {/* Main Window */}
            <div className="flex flex-col h-full">
              <div className="space-y-6 h-full justify-between flex flex-col p-4 lg:p-8">
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="flex gap-4 items-center">
                      <div className="max-w-60 w-20 h-20">
                        <img src={selectedProject?.image} className="h-full" />
                      </div>
                      <h1 className="text-3xl md:text-6xl">{selectedProject?.title}</h1>
                    </div>
                    <div className="flex gap-2 md:gap-4 h-min flex-wrap">
                      {selectedProject?.techList.map((tech: any, index: number) => (
                        <Badge
                          key={tech}
                          className={`pointer-events-none bg-${
                            colors[index % colors.length]
                          }-500/40 text-${colors[index % colors.length]}-200`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text:base sm:text-xl whitespace-normal">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-2 flex-1 sm:block">
                  <h2 className="text-xl">Features</h2>
                  <ul className="flex flex-col space-y-3">
                    {selectedProject?.featureList.map((feature: any) => (
                      <li key={feature} className=" flex gap-2 items-center">
                        <div className="h-2 w-2 bg-slate-400 rounded-full" />

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-6 ml-auto">
                  <Button variant="outline" className={`to-${selectedProject.color}-600`} size="lg">
                    <a href={selectedProject?.repoUrl} rel="noreferrer" target="_blank">
                      View Code
                    </a>
                  </Button>
                  <Button variant="default" className={`to-${selectedProject.color}-600`} size="lg">
                    <a href={selectedProject?.url} target="_blank" rel="noreferrer">
                      View Live App
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="z-10">
              <div className="absolute -left-60 -top-0 w-72 opacity-10">
                <img src={selectedProject.backgroundIcon} className="w-full" />
              </div>
              <div className="absolute -right-60 bottom-20 w-72 opacity-10">
                <img src={selectedProject.backgroundIcon} className="w-full" />
              </div>
              <div className="absolute -right-80 -bottom-44 w-60 opacity-10">
                <img src={selectedProject.backgroundIcon} className="w-full" />
              </div>
              <div className="absolute right-96 -bottom-52 w-52 opacity-10">
                <img src={selectedProject.backgroundIcon} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInContainer>
  );
};

export default Project;

//bg-blue-500/40 bg-red-500/40 bg-purple-500/40 bg-yellow-500/40
//text-blue-200 text-red-200 text-purple-200 text-yellow-200
// shadow-blue-500 shadow-violet-500 shadow-yellow-500
// to-blue-600 to-violet-600 to-yellow-600
