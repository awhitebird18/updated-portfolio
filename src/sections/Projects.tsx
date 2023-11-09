import { Button } from "@/components/ui/Button";

import { projectData } from "../data/projects";
import { BsCircleFill } from "react-icons/bs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Projects({ sectionRef }: { sectionRef: any }) {
  return (
    <div
      id="projects"
      ref={sectionRef}
      className="w-full flex flex-col items-center justify-center bg-white py-32"
    >
      <div className="max-w-6xl px-8 lg:px-16">
        <div className="justify-center flex flex-col items-center mb-8">
          <h1 className="text-3xl font-semibold text-violet-600 leading-4">Featured Projects</h1>
          <p className="text-5xl font-bold text-black leading-normal">My best work.</p>
        </div>
        <div className="flex flex-col gap-44 lg:gap-60 py-6">
          {/* Project */}
          {projectData.map((project, index) => (
            <div
              key={project.id}
              className={`flex gap-12 lg:gap-24 flex-col items-center lg:flex-row ${
                index % 2 && "lg:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-1/2 relative">
                <img
                  src={project.backgroundIcon}
                  className="animated-star w-16 lg:w-36 absolute right-0 top-16 z-10"
                />
                <img src={project.full} className="w-full" />
              </div>

              {/* Info */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4 min-h-[20rem]">
                <h2 className="font-bold text-2xl">{project.title}</h2>
                <p>{project.description}</p>
                <ul className="flex flex-col gap-3">
                  {project.featureList.map((feature) => (
                    <li key={feature} className="flex">
                      <BsCircleFill size={8} className={`mr-1.5 mt-2 shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-6 justify-end mt-12">
                  <a href={project.repoUrl} target="_blank">
                    <Button
                      variant="outline"
                      className={`border-${project.color}-600 text-${project.color}-600 border-2 hover:text-${project.color}-600 border-${project.color}-600 hover:border-${project.color}-800 hover:bg-${project.color}-200`}
                    >
                      Code
                    </Button>
                  </a>
                  <a href={project.url} target="_blank">
                    <Button
                      className={`bg-${project.color}-600 hover:bg-${project.color}-700 active:bg-${project.color}-700`}
                    >
                      Live Site
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
// bg-blue-600 bg-violet-600 border-blue-600 border-violet-600 text-blue-600 text-violet-600
