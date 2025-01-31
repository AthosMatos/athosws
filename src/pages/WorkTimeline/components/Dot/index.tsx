import { ATHOSTooltip } from "@athosws/react-components";
import { motion } from "framer-motion";

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
  const p = ((position > 100 ? 100 : position < 0 ? 0 : position) * 80) / 100;
  const pos = `${p}vw`;
  return (
    <ATHOSTooltip
      style={{
        padding: 0,
        backgroundColor: "transparent",
      }}
      content={
        <div className="w-[30rem] border p-3 border-pink-500 border-opacity-35 bg-black text-white rounded-xl flex overflow-hidden flex-col gap-4 ">
          <p
            className="text-4xl text-pink-500  w-full
             font-bold"
          >
            {title}
          </p>
          <p className="flex flex-col gap-3">
            <p className="text-lg">{description}</p>
            <p className="text-lg text-pink-500">
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
          style={{
            marginLeft: pos,
          }}
          onClick={onClick}
          className={`flex items-center flex-col absolute justify-center select-none`}
        >
          <div className="group relative flex justify-center cursor-pointer">
            <motion.div
              className={`
                group-hover:bg-pink-500 transition-colors
                h-5 w-5 bg-white rounded-full`}
            />
            <div className="absolute text-center transition-colors group-hover:text-pink-500 top-5 flex flex-col items-center">
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
