import { ATHOSTooltip } from "@athosws/react-components";
import { motion } from "framer-motion";
import { useState } from "react";

interface DotI {
  year: number;
  title: string;
  description: string;
  location: string;
  position: number;
  onClick?: () => void;
}

const Dot = ({
  year,
  description,
  location,
  title,
  position,
  onClick,
}: DotI) => {
  const screenSize = window.innerWidth;
  const Ismd = screenSize > 768;
  const porc = Ismd ? 80 : 74;
  const p = ((position > 100 ? 100 : position < 0 ? 0 : position) * porc) / 100;
  const pos = Ismd ? `${p}vw` : `${p}vh`;
  const [showDescription, setShowDescription] = useState(false);

  return (
    <ATHOSTooltip
      style={{
        padding: 0,
        backgroundColor: "transparent",
      }}
      forceOpen={showDescription}
      content={
        <div className="md:w-[30rem] w-96 border p-3 border-pink-500 border-opacity-35 bg-black text-white rounded-xl flex overflow-hidden flex-col gap-4 ">
          <p
            className="md:text-4xl text-xl text-pink-500  w-full
             font-bold"
          >
            {title}
          </p>
          <p className="flex md:text-lg text-sm flex-col gap-3">
            <p>{description}</p>
            <p className="text-pink-500">
              {location}, {year}
            </p>
          </p>
        </div>
      }
      followCursor
      position="top"
    >
      {(ref) => (
        <div
          ref={ref}
          style={
            Ismd
              ? { marginLeft: pos }
              : {
                  marginTop: pos,
                }
          }
          onClick={Ismd ? onClick : undefined}
          onDoubleClick={onClick}
          onTouchStart={() => setShowDescription(true)}
          onTouchEnd={() => setShowDescription(false)}
          onTouchCancel={() => setShowDescription(false)}
          className={`flex items-center flex-col absolute justify-center select-none`}
        >
          <div className="group relative flex justify-center cursor-pointer">
            <motion.div
              className={`
                group-hover:bg-pink-500 transition-colors
                h-5 w-5 bg-white rounded-full`}
            />
            <div className="absolute text-center transition-colors group-hover:text-pink-500 md:top-5 flex flex-col items-center md:ml-0 ml-36">
              {/*  <p>{year}</p> */}
              <p>{title}</p>
            </div>
          </div>
        </div>
      )}
    </ATHOSTooltip>
  );
};

export default Dot;
