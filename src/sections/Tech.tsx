import FadeInContainer from "@/components/layout/FadeInContainer";
import TechIcon from "@/components/TechIcon";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiSass,
  SiGit,
  SiNextdotjs,
  SiRedux,
  SiNestjs,
  SiDocker,
  SiMobx,
  SiBitbucket,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
import bottomcurve from "../assets/bottomcurve.svg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tech = ({ sectionRef }: { sectionRef: any }) => {
  const frontendSkills = [
    { name: "HTML", color: "#ff5722", icon: <SiHtml5 color="#fff" size={28} /> },
    { name: "CSS", color: "#2299f8", icon: <SiCss3 color="#fff" size={28} /> },
    { name: "React", color: "#61dbfb", icon: <SiReact color="#fff" size={28} /> },
    { name: "Tailwind CSS", color: "#45adb4", icon: <SiTailwindcss color="#fff" size={28} /> },
    { name: "SASS", color: "#c36192", icon: <SiSass color="#fff" size={28} /> },
    { name: "Next JS", color: "#1f2937", icon: <SiNextdotjs color="#fff" size={28} /> },
    { name: "Redux", color: "#7749bd", icon: <SiRedux color="#fff" size={28} /> },
    { name: "Mobx", color: "#e36113", icon: <SiMobx color="#fff" size={28} /> },
  ];

  const backendSkills = [
    { name: "Node JS", color: "#84ce24", icon: <SiNodedotjs color="#fff" size={28} /> },
    { name: "Mongo DB", color: "#60b24f", icon: <SiMongodb color="#fff" size={28} /> },
    { name: "Postgres SQL", color: "#086dd7", icon: <SiPostgresql color="#fff" size={28} /> },
    { name: "Express JS", color: "#6b7280", icon: <SiTailwindcss color="#fff" size={28} /> },
    { name: "Nest JS", color: "#e0234e", icon: <SiNestjs color="#fff" size={28} /> },
  ];

  const commonSkills = [
    { name: "Javascript", color: "#f0db4f", icon: <SiJavascript color="#fff" size={28} /> },
    { name: "Typescript", color: "#086dd7", icon: <SiTypescript color="#fff" size={28} /> },
    { name: "Git", color: "#f05033", icon: <SiGit color="#fff" size={28} /> },
    { name: "BitBucket", color: "#1962d1", icon: <SiBitbucket color="#fff" size={28} /> },
    { name: "Docker", color: "#086dd7", icon: <SiDocker color="#fff" size={28} /> },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        id="tech"
        ref={sectionRef}
        className="flex items-center lg:justify-around lg:items-start col-start-2 px-8 md:px-16 flex-col lg:flex-row gap-16 w-full max-w-6xl pt-32 pb-16bg-black"
      >
        <div className="w-full lg:w-1/3">
          <h3 className="text-2xl text-slate-100 mb-4">My Tech Stack</h3>
          <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            Tools to get the job done.
          </h2>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h3 className="text-2xl lg:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500">
            Frontend Stack
          </h3>

          <div className="gap-3 flex flex-col">
            {frontendSkills.map((skill) => (
              <FadeInContainer key={skill.name} duration={1000}>
                <TechIcon iconData={skill} />
              </FadeInContainer>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl lg:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-violet-500">
            Backend Stack
          </h3>

          <div className="gap-3 flex flex-col">
            {backendSkills.map((skill) => (
              <FadeInContainer key={skill.name} duration={1000}>
                <TechIcon iconData={skill} />
              </FadeInContainer>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl lg:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">
            Tooling
          </h3>
          <div className="gap-3 flex flex-col">
            {commonSkills.map((skill) => (
              <FadeInContainer key={skill.name} duration={1000}>
                <TechIcon iconData={skill} />
              </FadeInContainer>
            ))}
          </div>
        </div>
      </div>

      <img src={bottomcurve} alt="" className="w-full h-max bg-white" />
    </div>
  );
};

export default Tech;
