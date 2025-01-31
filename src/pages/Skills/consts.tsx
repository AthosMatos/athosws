import {
  FaDocker,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaReact,
  FaVideo,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiCplusplus,
  SiFigma,
  SiFramer,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiStyledcomponents,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { TbBrandAdobePhotoshop, TbX } from "react-icons/tb";
import { ReanimatedLogo } from "./assets/reanimatedLogo";
export type TechType =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "design"
  | "deep learning"
  | "mobile"
  | "animation"
  | "game dev";

export interface TechI {
  name: string;
  icon: React.ReactNode;
  link: string;
  type: TechType[];
  level: number;
}

interface TechsI {
  [key: string]: TechI;
}

export const Techs = {
  React: {
    name: "React",
    icon: <FaReact />,
    link: "https://reactjs.org/",
    type: ["frontend"],
    level: 10,
  } as TechI,
  Photoshop: {
    name: "Photoshop",
    icon: <TbBrandAdobePhotoshop />,
    link: "https://www.adobe.com/products/photoshop.html",
    type: ["frontend", "design"],
    level: 6,
  } as TechI,
  VideoEditing: {
    name: "Video Editing",
    icon: <FaVideo />,
    type: ["frontend", "design"],
    level: 9,
  } as TechI,
  "C++": {
    name: "C++",
    icon: <SiCplusplus />,
    link: "https://learn.microsoft.com/pt-br/cpp/cpp/?view=msvc-170",
    type: ["backend", "game dev"],
    level: 7,
  } as TechI,
  DirectX: {
    name: "DirectX",
    icon: <TbX />,
    link: "https://docs.microsoft.com/en-us/windows/win32/direct3d",
    type: ["game dev"],
    level: 4,
  } as TechI,
  "React Native": {
    name: "React Native",
    icon: <FaReact />,
    link: "https://reactnative.dev/",
    type: ["frontend", "mobile"],
    level: 10,
  } as TechI,
  Typescript: {
    name: "Typescript",
    icon: <SiTypescript />,
    link: "https://www.typescriptlang.org/",
    type: ["frontend", "backend"],
    level: 10,
  } as TechI,
  StyledComponents: {
    name: "Styled Components",
    icon: <SiStyledcomponents />,
    link: "https://styled-components.com/",
    type: ["frontend"],
    level: 9,
  } as TechI,
  Javascript: {
    name: "Javascript",
    icon: <SiJavascript />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: ["frontend", "backend"],
    level: 10,
  } as TechI,
  Tailwind: {
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
    link: "https://tailwindcss.com/",
    type: ["frontend"],
    level: 9,
  } as TechI,
  Framer: {
    name: "Framer Motion",
    icon: <SiFramer />,
    link: "https://framer.com/motion/",
    type: ["frontend", `animation`],
    level: 9,
  } as TechI,
  Reanimated: {
    name: "Reanimated",
    icon: <ReanimatedLogo className="w-4 h-4" />,
    link: "https://docs.swmansion.com/react-native-reanimated/",
    type: ["frontend", "mobile", `animation`],
    level: 8,
  } as TechI,
  NodeJS: {
    name: "NodeJS",
    icon: <FaNodeJs />,
    link: "https://nodejs.org/",
    type: ["backend", "devops"],
    level: 10,
  } as TechI,
  MongoDB: {
    name: "MongoDB",
    icon: <SiMongodb />,
    link: "https://www.mongodb.com/",
    type: ["database", "backend"],
    level: 8,
  } as TechI,
  MySQL: {
    name: "MySQL",
    icon: <SiMysql />,
    link: "https://www.mysql.com/",
    type: ["database", "backend"],
    level: 7,
  } as TechI,
  Python: {
    name: "Python",
    icon: <FaPython />,
    link: "https://www.python.org/",
    type: ["backend", "deep learning"],
    level: 8,
  } as TechI,
  TensorFlow: {
    name: "TensorFlow",
    icon: <SiTensorflow />,
    link: "https://www.tensorflow.org/",
    type: ["deep learning"],
    level: 8,
  } as TechI,
  Docker: {
    icon: <FaDocker />,
    link: "https://www.docker.com/",
    name: "Docker",
    type: ["devops"],
    level: 6,
  } as TechI,
  GitHub: {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/",
    type: ["devops"],
    level: 9,
  } as TechI,
  Figma: {
    name: "Figma",
    icon: <SiFigma />,
    link: "https://www.figma.com/",
    type: ["design"],
    level: 9,
  } as TechI,
  NestJS: {
    name: "NestJS",
    icon: <SiNestjs />,
    link: "https://nestjs.com/",
    type: ["backend"],
    level: 7,
  } as TechI,
  NextJS: {
    name: "NextJS",
    icon: <RiNextjsFill />,
    link: "https://nextjs.org/",
    type: ["frontend", "backend"],
    level: 7,
  } as TechI,
};
