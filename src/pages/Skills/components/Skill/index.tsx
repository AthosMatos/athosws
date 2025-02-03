import { ReactNode } from "react";

interface SkillProps {
  name: string;
  icon: ReactNode;
  level: number;
  onClick?: () => void;
}
const Skill = ({ name, icon, level, onClick }: SkillProps) => {
  const lValue = (8 * level) / 10;
  const satValue = (level * 100) / 10 - 30;
  const screenSize = window.innerWidth;
  return (
    <div
      className="flex text-sm md:!text-lg lg:!text-2xl gap-4 w-full justify-between flex-col border border-gray-500 rounded-lg p-4  cursor-pointer hover:scale-105 transition-all active:scale-100"
      onClick={onClick}
    >
      <div className="flex gap-2 items-center ">
        <div
          className={`flex w-fit h-fit flex-col gap-3 items-center rounded-xl `}
        >
          {icon}
        </div>
        <p>{name}</p>
      </div>
      {screenSize > 768 && (
        <div className="flex gap-2 items-center">
          0
          <div
            style={{
              backgroundColor: "rgb(48, 48, 48)",
            }}
            className={`flex w-14 md:!w-24 lg:!w-32 border border-gray-400 p-1 rounded-full`}
          >
            <div
              style={{
                backgroundColor: `hsl(315.0920245398773, ${satValue}%, 46.86274509803921%)`,
                width: `${lValue}rem`,
              }}
              className={`h-4 rounded-full`}
            />
          </div>
          10
        </div>
      )}
    </div>
  );
};

export default Skill;
