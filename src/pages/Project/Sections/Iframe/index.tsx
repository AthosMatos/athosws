import { motion } from "framer-motion";
import { ProjectI } from "../../../Projects/interfaces";

interface IframeI {
  showIframe: boolean;
  data?: ProjectI;
}

const Iframe = ({ showIframe, data }: IframeI) => {
  return (
    showIframe &&
    data?.figma != "private" && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="border border-gray-500 rounded-lg h-full overflow-hidden"
      >
        {data?.figma?.iframe}
      </motion.div>
    )
  );
};

export default Iframe;
