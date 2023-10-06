import PageTracker from "./PageTracker";
import { Button } from "../ui/Button";
import { ProjectEnum } from "@/enums/projects.enum";

type NavProps = {
  activeSection?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refs: any;
};

const Navigation = ({ activeSection = "about", refs }: NavProps) => {
  const sections = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: ProjectEnum.SPARX, title: "Sparx" },
    { id: ProjectEnum.SHIFTPOINT, title: "Shift Point" },
    { id: ProjectEnum.PORTFOLIO, title: "Portfolio v1" },
    { id: "resume", title: "Resume" },
    { id: "contact", title: "Contact" },
  ];

  const handleNavigate = (id: string) => {
    const sectionElement = refs[id].current;

    if (sectionElement) {
      const topPosition = sectionElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed top-2 right-4 z-30 nav-details">
      <div className="relative flex h-full">
        <ul className="flex flex-col gap-2 h-full">
          {sections.map((section: { id: string; title: string }) => (
            <li key={section.id} className={`flex items-center justify-center text-xl p-2 `}>
              <Button
                onClick={() => handleNavigate(section.id)}
                variant="secondary"
                className={`w-28 z-10 rounded-lg transition-colors border-2 border-slate-800 border-dashed ${
                  section.id === activeSection
                    ? "bg-gradient-to-t from-slate-900 to-indigo-700 border-solid border-0"
                    : "bg-black"
                }`}
              >
                {section.title}
              </Button>
            </li>
          ))}
        </ul>
        <PageTracker />
      </div>
    </div>
  );
};

export default Navigation;
