import { ATHOSColors } from "@athosws/react-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import { Layout } from "../Layout";

const SiteCodeFAB = () => {
  const [codeDescription, setCodeDescription] = useState(false);
  const isScreenMd = window.innerWidth >= 768;

  const openLink = () => {
    if (codeDescription || isScreenMd) {
      window.open("https://github.com/AthosMatos/athosws", "_blank");
    } else {
      setCodeDescription(true);
    }
  };

  return (
    <div
      onClick={openLink}
      className={`absolute py-2 items-center border border-white  cursor-pointer 
    ${
      isScreenMd || codeDescription ? "gap-2 px-3" : "gap-0 px-2"
    } transition-all
    text-base flex select-none font-bold md:bottom-6 md:right-6
    bottom-4 right-4 bg-pink-500 text-white rounded-full
    hover:scale-105 md:active:scale-100 active:scale-95`}
    >
      <FaCode className="text-lg md:text-xl" />
      <motion.div
        animate={{
          width: isScreenMd || codeDescription ? "auto" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden h-fit"
      >
        <div className="flex items-center gap-2 w-max">
          <button className="w-max h-fit text-sm md:text-base">
            The code of this site
          </button>
          <TbHandClick className={`text-lg md:text-xl animate-pulse `} />
        </div>
      </motion.div>
    </div>
  );
};

const Pages = () => {
  return (
    <div
      style={{
        backgroundColor: ATHOSColors.black.coal,
      }}
      className="flex items-center justify-center h-screen w-screen md:p-4 p-2"
    >
      <div
        className={`h-full w-full border border-gray-100 rounded-xl overflow-auto`}
      >
        <Layout />
      </div>
      <SiteCodeFAB />
    </div>
  );
};

export default Pages;
