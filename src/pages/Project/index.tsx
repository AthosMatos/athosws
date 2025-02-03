import { useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectI } from "../Projects/interfaces";
import { projects } from "../Projects/projects";
import Iframe from "./Sections/Iframe";
import Images from "./Sections/Images";
import Links from "./Sections/Links";
import SkillsUsed from "./Sections/SkillsUsed";

const Project = () => {
  const { id } = useParams();
  const [showIframe, setShowIframe] = useState(false);
  if (!id) return null;
  const data = projects.find((project: ProjectI) => project.path.includes(id));

  return (
    <div className="flex xl:!flex-row flex-col gap-10 p-2">
      <Images data={data} />

      <div className="flex py-4 gap-4 flex-col w-full">
        <div className="text-white flex flex-col gap-4">
          {!showIframe && (
            <>
              <SkillsUsed data={data} />
              <h1 className="text-4xl font-bold">{data?.description}</h1>
            </>
          )}
          <Links
            data={data}
            showIframe={showIframe}
            toogleIframe={() => setShowIframe(!showIframe)}
          />
        </div>

        <Iframe showIframe={showIframe} data={data} />
        {data?.extraComp}
      </div>
    </div>
  );
};

export default Project;
