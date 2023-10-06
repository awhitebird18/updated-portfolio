type TechIconProps = {
  name: string;
  color: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
};

const TechIcon = ({ iconData }: { iconData: TechIconProps }) => {
  return (
    <div className={`flex gap-4 items-center h-13 md:justify-normal justify-center`}>
      <div className="w-8 h-8 hidden md:block">{iconData.icon}</div>
      <p className="h-8">{iconData.name}</p>
    </div>
  );
};

export default TechIcon;
