import { ProjectEnum } from "@/enums/projects.enum";
import sparxLogo from "@/assets/sparxLogo.svg";
import shiftpointLogo from "@/assets/shiftpointLogo.svg";
import portfolioLogo from "@/assets/portfolio.svg";
import { Tech } from "@/enums/tech.enum";
import shiftpointBackgroundIcon from "@/assets/shiftpointBackgroundIcon.svg";
import sparxBackgroundIcon from "@/assets/sparxBackgroundIcon.svg";
import portfolioBackgroundIcon from "@/assets/portfolioBackgroundIcon.svg";

export const projectData = [
  {
    id: ProjectEnum.SPARX,
    title: "Sparx Chat",
    description:
      "Sparx is a messaging application focused on team collaboration. Drawing inspiration from platforms like Slack, it features chat channels and direct messaging to facilitate easy communication among team members. Users can have real-time conversations, categorize discussions by topics or teams, and communicate effectively. Sparx is designed to support both project-based collaborations and day-to-day team interactions.",
    url: "https://www.spa-rx.ca",
    repoUrl: "https://bitbucket.org/awhitebird-personal/workspace/projects/SPARX",
    videoUrl: "https://www.youtube.com/embed/wVI9iRCCJNU",
    image: sparxLogo,
    backgroundIcon: sparxBackgroundIcon,
    color: "violet",
    featureList: [
      "User authentication and authorization with JSON web tokens.",
      "Utilizing Shadcn component with custom styling for accessilibity.",
      "Includes shortcut keys that align with accessibility best practices and convenience.",
      "Api effectively utilizes web sockets to ensure all of a users open apps are up-to-date.",
      // "Sidebar is fully customizable to allow a user to sort their subscribed channels.",
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
    image: shiftpointLogo,
    backgroundIcon: shiftpointBackgroundIcon,
    color: "blue",
    featureList: [
      "User authentication and authorization.",
      "Admins can create schedules for employees",
      "Complete user management",
      "Export data for payroll",
    ],
    techList: [Tech.REACT, Tech.JAVASCRIPT, Tech.REDUX, Tech.MONGODB, Tech.EXPRESSJS],
  },
  {
    id: ProjectEnum.PORTFOLIO,
    title: "Portfolio v1",
    description:
      "First version of my portfolio and is now out-of-date. Leaving here to demonstrate the difference in styling choices.",
    url: "https://www.awhitebird.ca",
    repoUrl: "https://github.com/awhitebird18/shift-point",
    videoUrl: "https://www.youtube.com/embed/wVI9iRCCJNU",
    image: portfolioLogo,
    backgroundIcon: portfolioBackgroundIcon,
    color: "yellow",
    featureList: [
      "Full user authentication",
      "Password change and reset",
      "Create multiple rooms and threads",
      "User and channel search",
    ],
    techList: [Tech.REACT, Tech.NEXTJS, Tech.JAVASCRIPT],
  },
];
