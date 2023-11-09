import { ProjectEnum } from "@/enums/projects.enum";
import { Tech } from "@/enums/tech.enum";
import shiftpointFull from "@/assets/shiftpointfull.jpg";
import sparxfull from "@/assets/sparxfull.jpg";
import shiftpointBackgroundIcon from "@/assets/shiftpointBackgroundIcon.svg";
import chatbubble from "@/assets/chatbubble.svg";

export const projectData = [
  {
    id: ProjectEnum.SPARX,
    title: "Sparx Chat",
    description:
      "Sparx is a messaging application focused on team collaboration. Drawing inspiration from platforms like Slack, it features chat channels and direct messaging to facilitate easy communication among team members. Users can have real-time conversations, categorize discussions by topics or teams, and communicate effectively.",
    url: "https://www.spa-rx.ca",
    repoUrl: "https://bitbucket.org/awhitebird-personal/workspace/projects/SPARX",
    videoUrl: "https://www.youtube.com/embed/wVI9iRCCJNU",
    backgroundIcon: chatbubble,
    full: sparxfull,
    color: "blue",
    featureList: [
      "User authentication and authorization with JSON web tokens.",
      "Utilizing Shadcn component with custom styling for accessilibity.",
      "Includes shortcut keys that align with accessibility best practices and convenience.",
    ],
    techList: [
      Tech.REACT,
      Tech.TYPESCRIPT,
      Tech.MOBX,
      Tech.VITE,
      Tech.NESTJS,
      Tech.POSTGRES,
      Tech.DOCKER,
    ],
  },
  {
    id: ProjectEnum.SHIFTPOINT,
    title: "Shift Point",
    description:
      "Shift Point is a web application developed using React and Express, designed to streamline the process of recording and managing employee timesheets and schedules. With a focus on user-friendly design and efficient functionality, Shift Point offers organizations a straightforward solution to keep track of work hours and plan schedules effectively.",
    url: "https://shift-point.web.app",
    repoUrl: "https://github.com/awhitebird18/shift-point",
    videoUrl: "https://www.youtube.com/embed/wVI9iRCCJNU",
    backgroundIcon: shiftpointBackgroundIcon,
    full: shiftpointFull,
    color: "violet",
    featureList: [
      "User authentication and authorization.",
      "Admins can create schedules for employees",
      "Complete user management",
    ],
    techList: [Tech.REACT, Tech.JAVASCRIPT, Tech.REDUX, Tech.MONGODB, Tech.EXPRESSJS],
  },
];
