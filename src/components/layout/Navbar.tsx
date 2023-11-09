import logo from "@/assets/logo3.svg";
import { Button } from "../ui/Button";
import { useEffect } from "react";
import "@/styles/nav.css";
import navigationItems from "@/data/navigation";
import { BsList, BsX } from "react-icons/bs";
import { useState } from "react";
import avatar from "@/assets/parallax.jpg";

export const Navbar = ({ active }: { active: string }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleNavigate = (item: string) => {
    window.location.href = item;
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      if (!navbar) return;
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }, []);

  return (
    <nav
      id="navbar"
      className={`fadein-animation flex flex-col justify-center transition-colors items-center p-6 fixed top-0 left-0 z-10 w-full
      stained-glass ${open ? "bg-black h-screen" : "h-20"}`}
    >
      <div className="flex items-center justify-between max-w-[120rem] w-full">
        <div id="bg-animation" />
        <Button variant="link" className="logo z-10" onClick={() => handleNavigate("#hero")}>
          <a className="h-10 w-10" href="#home">
            <img src={logo} className="h-full w-full" alt="Bird Logo" />
          </a>
          <h3
            className={`text-4xl text-white leading-normal overflow-hidden  ${
              open ? "w-52" : "w-0"
            }`}
          >
            Navigation
          </h3>
        </Button>
        <ul className="hidden lg:flex gap-8 ">
          {navigationItems.map((navigationItem) => (
            <li key={navigationItem.id} className="cursor-pointer">
              <a href={navigationItem.link}>
                <span
                  className={`text-lg ${
                    active === navigationItem.id ? "text-violet-500" : "text-white"
                  }`}
                >
                  {navigationItem.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={handleToggle}
          className="z-40 absolute top-0 right-0 lg:hidden flex justify-center items-center rounded-3xl text-white text-5xl m-2 h-16 w-20 p-4 "
        >
          {open ? <BsX /> : <BsList />}
        </button>
      </div>
      <div
        className={`flex w-full flex-col justify-center z-30 transition-all overflow-hidden ${
          open
            ? "h-[26rem] rotate-0 translate-x-0"
            : "h-0 -rotate-90 translate-x-28 -translate-y-28"
        }`}
      >
        <ul className="w-full text-white p-4">
          {navigationItems.map((navigationItem) => (
            <li
              key={navigationItem.id}
              className="cursor-pointer"
              onClick={() => handleNavigate(navigationItem.link)}
            >
              <span className={`text-2xl `}>{navigationItem.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <img
        src={avatar}
        className={`absolute bottom-0 left-0 w-full h-full ${open ? "block" : "hidden"}`}
      />
    </nav>
  );
};

//text-violet-500
