import userAvatar from "@/assets/userAvatar.jpg";
import star from "@/assets/star.svg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Profile = ({ sectionRef }: { sectionRef: any }) => {
  return (
    <div
      className="w-full relative overflow-hidden flex flex-col items-center bg-black dark px-8 md:px-16"
      id="profile"
      ref={sectionRef}
    >
      <div className="flex flex-col justify-center max-w-6xl gap-6 h-full min-h-screen py-16 relative">
        <div className="w-full items-center justify-center row-1 col-start-2">
          <div className="flex flex-col gap-8 pb-8 relative text-center lg:text-large">
            <div className="flex flex-col md:flex-row gap-8  items-start">
              <div className="relative mb-16 w-full py-8 px-24 md:px-16">
                <div className="magicpattern-violet absolute top-0 left-0" />
                <div className="shadow-lg shadow-violet-700 rounded-full overflow-hidden z-20 relative">
                  <img src={userAvatar} className="object-cover h-full w-full " />
                </div>
                <img src={star} className="animated-star absolute -top-10 -left-0" />
                <img src={star} className="animated-star2 absolute -bottomn-10 right-20" />
              </div>
              <div className="justify-start flex flex-col items-start gap-2">
                <h1 className="text-3xl font-semibold text-violet-500">Profile</h1>
                <p className="text-5xl font-extrabold text-white text-left">Full Stack Developer</p>
                <div className="mt-6 flex flex-col gap-4">
                  <p className="text-lg text-left text-slate-400">
                    <span className="text-xl font-bold text-white">Hi!</span> I’m a Full Stack
                    Developer with a talent for creating intuitive front-end designs and solid
                    back-end solutions. I’ve developed a variety of applications, from instant chat
                    systems to detailed time-keeping software, all with a focus on seamless
                    functionality whether on web browsers, desktops using Electron, or mobile
                    platforms via React Native.
                  </p>
                  <p className="text-lg text-left text-slate-400">
                    I have a real soft spot for tech, especially when it comes to enhancing user
                    experiences and simplifying complex processes. Skilled in React and TypeScript,
                    I make the front end interactive and engaging, while my back-end expertise lies
                    in Node, Express, NestJS, and Postgres.
                  </p>
                  <p className="text-lg text-left text-slate-400">
                    My journey in tech began with a mix of self-teaching and hands-on roles,
                    culminating in a well-rounded skill set honed through both personal discipline
                    and professional teamwork. I'm now looking to bring my collaborative spirit and
                    versatile coding chops to a team that's passionate about delivering top-notch
                    solutions to clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 border-b-2 border-dashed border-slate-900 w-screen -left-1/4 fade-border-horizontal" />
        <div className="absolute -top-0 -right-8 h-screen border-slate-900 border-r-2 border-dashed fade-border hidden lg:black" />
      </div>
    </div>
  );
};

export default Profile;
