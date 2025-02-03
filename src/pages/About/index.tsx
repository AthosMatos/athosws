import { animate, motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ImageCard = () => {
  const nav = useNavigate();
  const id = `about main img ${Date.now().toString()}`;
  useEffect(() => {
    const img = document.getElementById(id);

    if (!img) return;
    animate(
      img,
      { scale: 1.2 },
      {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }
    );
  }, []);

  return (
    <div className="flex flex-col rounded-lg overflow-hidden w-full h-fit">
      <div className="relative z-30">
        <div
          onClick={() => {
            nav("contact");
          }}
          className="absolute m-4 select-none active:scale-100 transition-transform 
    cursor-pointer hover:scale-105 text-white font-semibold 
    px-4 py-2 bg-pink-500 rounded-full z-30"
        >
          Contact-me
        </div>
        <div className="h-full w-full overflow-hidden ">
          <motion.img
            id={id}
            src={require("../../assets/me.jpg")}
            className="object-cover "
          />
        </div>
      </div>
      <p
        style={{
          backgroundColor: "rgba(22, 22, 22, 0.98)",
        }}
        className="text-xl py-2 px-4 font-light flex-1 text-justify"
      >
        <p className="flex gap-2">
          Hi, I'm <p className="text-pink-500 font-bold">Athos</p>.
        </p>
        A passionate and experienced developer with a degree in Computer
        Science.
      </p>
    </div>
  );
};
const Info = ({ title, text }: { title: string; text: string }) => {
  return (
    <div>
      <p className="text-pink-500 font-bold text-xl">{title}</p>
      <p>{text}</p>
    </div>
  );
};

const InfoSection = () => {
  const date = new Date().getFullYear() - 2020;

  return (
    <div className="w-full flex gap-8 flex-col">
      <Info
        title="Passion"
        text="Over the years, I've had the opportunity to explore a diverse range of technologies and fields, including video and photo editing, music production, web development (front-end and back-end), mobile development, game development, app design, deep learning, and some other cool stuff. As a young musician, I’ve always loved expressing my creativity through songs and melodies, but I eventually discovered my true calling in web and mobile development, as well as app design. These areas allow me to combine the things that inspire me most: creativity and programming logic."
      />
      <Info
        title="Experience"
        text={`Currently, I primarily work with the React framework, which began as a fun learning exercise and has since evolved into a fulfilling career spanning over ${date} years. Building websites, mobile apps, and visually compelling designs feels natural to me, and I take pride in delivering work that not only meets but exceeds expectations. I'm always eager to embrace new challenges, dive into emerging technologies, and refine my craft to develop innovative solutions. Creating, problem-solving, and pushing the boundaries of what’s possible are what fuel my passion for this ever-evolving field.`}
      />
      <Info
        title="Future"
        text="Even though I have certain preferences when it comes to the technologies I enjoy working with, I’m always open to exploring new tools and challenges. After all, the only way I discovered what I love was by trying something new. Who knows? There might be something out there that I’ll enjoy even more than what I’m currently doing."
      />
    </div>
  );
};
const About = () => {
  return (
    <div className="flex-col lg:!flex-row py-8 px-6 flex text-white gap-4 text-justify">
      <ImageCard />
      <InfoSection />
    </div>
  );
};

export default About;
