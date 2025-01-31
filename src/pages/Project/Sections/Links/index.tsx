import { motion } from "framer-motion";
import { FaFigma, FaGithub } from "react-icons/fa";
import { ProjectI } from "../../../Projects/interfaces";
interface LinksI {
  data?: ProjectI;
  showIframe: boolean;
  toogleIframe: () => void;
}

const Links = ({ data, showIframe, toogleIframe }: LinksI) => {
  return (
    <motion.div
      layout="preserve-aspect"
      className="flex gap-2 flex-wrap text-white"
    >
      {data?.github && (
        <a
          href={data?.github != "private" ? data?.github : undefined}
          target="_blank"
          title={data?.github == "private" ? "Private" : undefined}
          rel="noreferrer"
          className={`
        flex gap-2 items-center p-2 bg-stone-950 rounded-full px-4 
        ${
          data?.github == "private"
            ? "cursor-not-allowed opacity-40"
            : "cursor-pointer"
        }
        `}
        >
          <FaGithub />
          <a>Github</a>
        </a>
      )}

      {data?.figma && (
        <a
          href={data?.figma != "private" ? data?.figma.link : undefined}
          target="_blank"
          rel="noreferrer"
          className={`
     flex gap-2 items-center p-2 bg-stone-950 rounded-full px-4 
     ${
       data?.figma == "private"
         ? "cursor-not-allowed opacity-40"
         : "cursor-pointer"
     }
     `}
        >
          <FaFigma />
          <a>Figma Link</a>
        </a>
      )}
      {data?.figma && (
        <a
          onClick={toogleIframe}
          className={`
     flex gap-2 items-center p-2 bg-stone-950 rounded-full px-4 
     ${
       data?.figma == "private"
         ? "cursor-not-allowed opacity-40"
         : "cursor-pointer"
     }
         ${showIframe ? "" : "opacity-30"}
     `}
        >
          <FaFigma />
          <a>Figma Iframe</a>
        </a>
      )}
    </motion.div>
  );
};

export default Links;
