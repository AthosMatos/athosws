import { FaFigma, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ProjectI } from "../../interfaces";

interface LinkI {
  name: string;
  icon: React.ReactNode;
  link?: string;
  private?: boolean;
}
const Link = ({ name, icon, link, private: hidden }: LinkI) => {
  return (
    <div
      title={(hidden && "Private") || undefined}
      onClick={() => !hidden && window.open(link, "_blank")}
      className={`flex gap-2 items-center border border-neutral-600 w-fit p-1 px-3 rounded-full transition-all duration-75
      ${
        hidden
          ? "cursor-not-allowed opacity-40"
          : "hover:text-white cursor-pointer"
      }
      `}
    >
      {icon}
      <a>{name}</a>
    </div>
  );
};

const ProjectCard = (props: ProjectI) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(`/athosws/${props.path}`)}
      className="md:!w-80 w-full h-[28rem] group flex flex-col border border-gray-500 cursor-pointer rounded-xl overflow-hidden"
    >
      <div className="overflow-hidden h-52">
        <img
          src={props.imgs[0]}
          alt={props.title}
          className="w-96 h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-in-out"
        />
      </div>
      <div className="w-full flex-1 p-3 flex flex-col gap-4 bg-neutral-900">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{props.title}</h1>
          <p>{props.shortDescription}</p>
        </div>
        <div className="flex-1 justify-end flex flex-col gap-4">
          <div className="flex gap-4 flex-wrap">
            {props.techs.map((tech) => (
              <a
                title={tech.name}
                href={tech.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-all duration-75"
              >
                {tech.icon}
              </a>
            ))}
          </div>
          <div className="flex gap-2">
            {props.github && (
              <Link
                name="Github"
                icon={<FaGithub />}
                link={props.github}
                private={props.github === "private"}
              />
            )}
            {props.figma && (
              <Link
                name="Figma"
                icon={<FaFigma />}
                link={
                  typeof props.figma != "string" ? props.figma.link : undefined
                }
                private={props.figma === "private"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
