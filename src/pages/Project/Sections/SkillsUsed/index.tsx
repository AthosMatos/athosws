import { ProjectI } from "../../../Projects/interfaces";

interface SkillsUsedI {
  data?: ProjectI;
}

const SkillsUsed = ({ data }: SkillsUsedI) => {
  return (
    <div className="flex gap-4 flex-wrap ">
      {data?.techs.map((tech, index) => (
        <div key={index} className="flex gap-2 items-center">
          <a
            href={tech.link}
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-stone-950 rounded-md"
          >
            {tech.icon}
          </a>
          <a>{tech.name}</a>
        </div>
      ))}
    </div>
  );
};

export default SkillsUsed;
