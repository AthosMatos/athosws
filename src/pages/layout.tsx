import { ATHOSMenu } from "@athosws/react-components";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";
import { FaGamepad, FaMobileAlt } from "react-icons/fa";
import {
  TbFile,
  TbFolders,
  TbPhone,
  TbTimeline,
  TbTools,
  TbUser,
  TbWorldWww,
} from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

export const paths = {
  home: "/",
  projects: "/projects",
  skills: "/skills",
  workTTimeline: "/worktTimeline",
  contact: "/contact",
  resume: "/resume",
  econome: "/project/econome",
  colaboradorPonto: "/project/colaboradorponto",
  athosComponents: "/project/athoscomponents",
  margaridasShop: "/project/margaridasshop",
  autoTab: "/project/autotab",
  uernTheGame: "/project/uernthegame",
  sohtaEngine: "/project/sohtaengine",
};

const Menu = () => {
  return (
    <ATHOSMenu
      navigate={{
        useLocation: useLocation,
        useNavigate: useNavigate,
      }}
      colors={{
        selected: {
          background: "#181818",
          border: {
            color: "#646464",
            width: "1px",
          },
          text: "#ffffff",
        },
        menu: {
          background: "#181818",
          border: {
            color: "#646464",
            width: "1px",
          },
          option: {
            normal: {
              background: "#181818",
              text: "#ffffff",
              border: {
                color: "transparent",
                width: "1px",
              },
            },
            hover: {
              background: "#202020",
              text: "#ffffff",
              border: {
                color: "#646464",
                width: "1px",
              },
            },
            clicked: {
              background: "#a52f78",
              text: "#ffffff",
              border: {
                color: "#646464",
                width: "1px",
              },
            },
          },
        },
      }}
      options={[
        {
          label: "Home",
          icon: <TbUser />,
          path: paths.home,
        },
        {
          label: "Projects",
          icon: <TbFolders />,
          path: paths.projects,
          subOpts: [
            {
              label: "Web",
              icon: <TbWorldWww />,
              subSubOpts: [
                {
                  label: "ATHOS Components",
                  path: paths.athosComponents,
                },
                {
                  label: "Margarida's shop",
                  path: paths.margaridasShop,
                },
                {
                  label: "AutoTab",
                  path: paths.autoTab,
                },
              ],
            },
            {
              label: "Mobile",
              icon: <FaMobileAlt />,
              subSubOpts: [
                {
                  label: "EconoMe",
                  path: paths.econome,
                },
                {
                  label: "Colaborador Ponto",
                  path: paths.colaboradorPonto,
                },
              ],
            },
            {
              label: "Gaming",
              icon: <FaGamepad />,
              subSubOpts: [
                {
                  label: "UERN - The Game",
                  path: paths.uernTheGame,
                },
                {
                  label: "SOHTA Engine",
                  path: paths.sohtaEngine,
                },
              ],
            },
          ],
        },
        {
          label: "Skills",
          icon: <TbTools />,
          path: paths.skills,
        },
        {
          label: "Timeline",
          icon: <TbTimeline />,
          path: paths.workTTimeline,
        },
        {
          label: "Contact",
          icon: <TbPhone />,
          path: paths.contact,
        },
        {
          label: "Resume",
          icon: <TbFile />,
          path: paths.resume,
        },
      ]}
    />
  );
};
type PageNameI = {
  title: string;
  subtitle: string;
  path: string;
};
const pageNames: PageNameI[] = [
  {
    title: "Athos Matos",
    subtitle: "Get to know me",
    path: paths.home,
  },
  {
    title: "Projects",
    subtitle: "Some of projects i've worked on",
    path: paths.projects,
  },
  {
    title: "Skills",
    subtitle: "My most relevant skills",
    path: paths.skills,
  },
  {
    title: "Contact",
    subtitle: "Get in touch",
    path: paths.contact,
  },
  {
    title: "Resume",
    subtitle: "If you prefer the traditional way",
    path: paths.resume,
  },
  {
    title: "EconoMe",
    subtitle: "Simple project to manage your finances",
    path: paths.econome,
  },
  {
    title: "Colaborador Ponto",
    subtitle: "Mobile app for a government agency",
    path: paths.colaboradorPonto,
  },
  {
    title: "ATHOS Components",
    subtitle: "A library of React components",
    path: paths.athosComponents,
  },
  {
    title: "Margarida's shop",
    subtitle: "A e-commerce system",
    path: paths.margaridasShop,
  },
  {
    title: "AutoTab",
    subtitle: "A audio to tablature generator",
    path: paths.autoTab,
  },
  {
    title: "Timeline",
    subtitle: "My academic and professional journey",
    path: paths.workTTimeline,
  },
  {
    title: "UERN - The Game",
    subtitle: "A game made for a college project",
    path: paths.uernTheGame,
  },
  {
    title: "SOHTA Engine",
    subtitle: "A unfinished game engine made for learning purposes",
    path: paths.sohtaEngine,
  },
];
const PageName = () => {
  const location = useLocation();
  const path = location.pathname;

  const pageTitles = useMemo(() => {
    return pageNames.find((page) => page.path === path);
  }, [path]);

  return (
    <div className="border-l border-[rgba(255,255,255,0.2)] px-3 flex flex-col justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={path}
          initial={{ translateX: "-150%" }}
          animate={{ translateX: 0 }}
          exit={{ translateX: "-150%" }}
          transition={{
            duration: 0.24,
            ease: "anticipate",
          }}
        >
          <h1 className="text-white text-2xl font-bold">{pageTitles?.title}</h1>
          <h2 className="text-gray-400 text-sm">{pageTitles?.subtitle}</h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex border-b border-[rgba(255,255,255,0.2)]">
        <div className="w-64 p-3">
          <Menu />
        </div>
        <PageName />
      </div>
      <div className="p-2 w-full flex-1">{children}</div>
    </div>
  );
};
