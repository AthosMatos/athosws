import { FaFilePdf } from "react-icons/fa";
import { TbDownload, TbPdf } from "react-icons/tb";

const Resume = () => {
  const download = () => {
    const pdfUrl = "resume-athos.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume-athos.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex gap-4 md:!flex-row flex-col items-center">
        <img
          className="md:!h-[80vh] md:!w-auto w-[90vw]"
          src={require("./curriculum.png")}
        />
        <div
          onClick={download}
          className="bg-white flex gap-1 items-center text-2xl h-fit text-black p-2 rounded-md cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <FaFilePdf />
          <TbPdf />
          <TbDownload className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Resume;
