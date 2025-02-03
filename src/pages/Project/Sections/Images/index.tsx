import { ATHOSModal } from "@athosws/react-components";
import { useState } from "react";
import { TbCaretLeft, TbCaretRight } from "react-icons/tb";
import { ProjectI } from "../../../Projects/interfaces";
interface ImgSelectI {
  selectedImg: boolean;
  onClick: () => void;
}
const ImgSelect = ({ selectedImg, onClick }: ImgSelectI) => {
  return (
    <div
      onClick={onClick}
      className={`w-4 h-4 bg-white ${
        selectedImg ? "" : "bg-opacity-30"
      } rounded-full cursor-pointer`}
    ></div>
  );
};

interface CaretWrapperI {
  disabled: boolean;
  onClick: () => void;
  direction: "left" | "right";
}
const Caret = ({ disabled, onClick, direction }: CaretWrapperI) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white  border flex border-black rounded-full w-10 h-10 items-center justify-center ${
        disabled
          ? "opacity-30 cursor-not-allowed"
          : "cursor-pointer active:scale-95 transition-transform"
      }`}
    >
      {direction == "left" ? <TbCaretLeft /> : <TbCaretRight />}
    </div>
  );
};

interface ImagesI {
  data?: ProjectI;
}
const Images = ({ data }: ImagesI) => {
  const [imgOpen, setImgOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <>
      <ATHOSModal
        show={imgOpen}
        hide={() => setImgOpen(false)}
        backdrop="rgba(0,0,0,0.6)"
      >
        <div className="select-none">
          <img
            className="h-[94vh] w-[80vw] object-contain border border-stone-400 rounded-xl"
            src={data?.imgs[selectedImg]}
          />
          <div className="flex w-[80vw] text-3xl text-black absolute top-1/2 justify-between px-4">
            <Caret
              disabled={selectedImg == 0}
              onClick={() =>
                !(selectedImg == 0) && setSelectedImg(selectedImg - 1)
              }
              direction="left"
            />
            <Caret
              disabled={!!data?.imgs && selectedImg == data?.imgs.length - 1}
              onClick={() =>
                !(!!data?.imgs && selectedImg == data?.imgs.length - 1) &&
                setSelectedImg(selectedImg + 1)
              }
              direction="right"
            />
          </div>
        </div>
      </ATHOSModal>
      {data?.imgs.length! > 0 && (
        <div className="pb-4 w-full relative flex flex-col gap-4 border border-gray-500 rounded-3xl select-none overflow-hidden">
          <img
            className="xl:!w-full w-[94vw] h-[42rem] select-auto cursor-zoom-in object-cover"
            src={data?.imgs[selectedImg]}
            onClick={() => setImgOpen(true)}
          />

          <div className="flex text-3xl text-black absolute top-1/2 w-full justify-between px-4">
            <Caret
              disabled={selectedImg == 0}
              onClick={() =>
                !(selectedImg == 0) && setSelectedImg(selectedImg - 1)
              }
              direction="left"
            />
            <Caret
              disabled={!!data?.imgs && selectedImg == data?.imgs.length - 1}
              onClick={() =>
                !(!!data?.imgs && selectedImg == data?.imgs.length - 1) &&
                setSelectedImg(selectedImg + 1)
              }
              direction="right"
            />
          </div>
          <div className="flex gap-2 justify-center">
            {data?.imgs.map((_, index) => (
              <ImgSelect
                key={index}
                onClick={() => setSelectedImg(index)}
                selectedImg={selectedImg == index}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Images;
