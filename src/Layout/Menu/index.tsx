import { ATHOSMenu } from "@athosws/react-components";
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
  home: "/athosws",
  projects: "projects",
  skills: "skills",
  workTTimeline: "worktTimeline",
  contact: "contact",
  resume: "resume",
  econome: "project/econome",
  colaboradorPonto: "project/colaboradorponto",
  athosComponents: "project/athoscomponents",
  margaridasShop: "project/margaridasshop",
  autoTab: "project/autotab",
  uernTheGame: "project/uernthegame",
  sohtaEngine: "project/sohtaengine",
};
export const Menu = () => {
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
              background: "transparent",
              text: "#ffffff",
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
          subOption: {
            clicked: {
              background: "#5a1d43",
              text: "#ffffff",
            },
            normal: {
              background: "transparent",
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
          },
          subSubOption: {
            clicked: {
              background: "#a52f784e",
              text: "#d65fa9",
              border: {
                color: "#d65fa9",
                width: "1px",
              },
            },
            normal: {
              background: "transparent",
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
