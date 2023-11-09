type TechIconProps = {
  name: string;
  color: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
};

const TechIcon = ({ iconData }: { iconData: TechIconProps }) => {
  return (
    <div className={`flex gap-4 items-center h-13 sm:justify-normal justify-center`}>
      <div className="w-8 h-8 hidden sm:block">{iconData.icon}</div>
      <p className="h-8 text-xl sm:text-base text-slate-400">{iconData.name}</p>
    </div>
  );
};

export default TechIcon;
