import FadeInContainer from "@/components/layout/FadeInContainer";
import user from "@/assets/user2.svg";
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

const About = () => {
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
    <div className="w-full min-h-screen relative overflow-hidden py-24 px-10 lg:px-24">
      <FadeInContainer duration={1000}>
        <div className="about-grid flex flex-col lg:grid lg:flex-row gap-6 h-full">
          {/* Left Side */}

          {/* Right Side */}
          <div className="w-full items-center justify-center row-1 col-start-2">
            <div className="flex flex-col gap-6 pb-8 relative text-center items-center lg:text-large">
              {/* Header */}

              <div className="flex gap-10 items-center">
                <div className="left-4">
                  <img src={user} className="w-20" />
                </div>
                <div className="justify-start flex flex-col items-start gap-2">
                  <h1 className="text-5xl">Profile</h1>
                  <p className="text-2xl">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-lg">
                As a Full Stack Software Developer, I specialize in leading front-end
                implementations. At Plexxis Software, I spearheaded the development of a
                multi-platform client-facing chat application, extending across Web, Electron, and
                React Native.
              </p>
              <p className="text-lg">
                Driven by a passion for technology and firsthand experience with clients, my mission
                is to leverage my expertise in crafting unparalleled user experiences.
              </p>
              <div className="absolute -bottom-4 border-b-2 border-dashed border-slate-900 w-screen -left-1/4 fade-border-horizontal" />
              <div className="absolute -top-16 -right-8 h-screen border-slate-900 border-r-2 border-dashed fade-border hidden lg:black" />
            </div>
          </div>
          <div className="flex items-center sm:justify-around sm:items-start col-start-2 h-full p-4 py-8 flex-col sm:flex-row gap-16 w-full">
            <div className="flex flex-col gap-4 justify-center items-center">
              <h3 className="text-2xl sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
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
              <h3 className="text-2xl sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-violet-500">
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
              <h3 className="text-2xl sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">
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
        </div>
      </FadeInContainer>
    </div>
  );
};

export default About;
