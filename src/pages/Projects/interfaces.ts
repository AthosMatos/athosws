import { TechI } from "../Skills/consts";

export interface TechsI {
  [key: string]: TechI;
}
export interface ProjectI {
  title: string;
  shortDescription: string;
  description?: string;
  techs: TechI[];
  github?: string;
  imgs: any[];
  figma?:
    | {
        link: string;
        iframe?: React.ReactNode;
      }
    | "private";
  extraComp?: React.ReactNode;
  path: string;
}
