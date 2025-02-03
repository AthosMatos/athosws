import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { paths } from "../Menu";

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
export const PageName = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const pageTitle = useMemo(() => {
    return pageNames.find((page) => {
      let p = path;

      if (path.includes("/athosws/")) {
        p = path.replace("/athosws/", "");
      }
      return page.path === p;
    });
  }, [path]);

  useEffect(() => {
    if (path.endsWith("/")) {
      const newPath = path.slice(0, -1);
      navigate(newPath);
    }
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
          <h1 className="text-white md:text-2xl text-lg font-bold">
            {pageTitle?.title}
          </h1>
          <h2 className="text-gray-400 md:text-sm text-xs">
            {pageTitle?.subtitle}
          </h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
