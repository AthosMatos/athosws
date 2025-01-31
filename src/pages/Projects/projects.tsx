import { FaNpm } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { paths } from "../layout";
import { Techs } from "../Skills/consts";
import { ProjectI } from "./interfaces";

export const projects: ProjectI[] = [
  {
    title: "EconoMe",
    path: paths.econome,
    shortDescription:
      "This is a simple android app to manually manage your finances",
    description: `This is a simple project to manually manage your finances. 
    You can add your incomes and expenses,
    and see a summary of your financial situation.
    It was developed using React Native, Typescript,
    Figma, Styled Components, Reanimated and MongoDB.`,
    techs: [
      Techs["React Native"],
      Techs.Typescript,
      Techs.Figma,
      Techs.StyledComponents,
      Techs.Reanimated,
      Techs.MongoDB,
    ],
    github: "private",
    imgs: [
      require("./assets/econome/econome.png"),
      require("./assets/econome/econome2.png"),
    ],
    figma: {
      link: "https://www.figma.com/design/WcEhf0TCmJ4bqtwQEReECa/econome?node-id=0-1&t=7ZCOszekAmZ9a5gf-1",
      iframe: (
        <iframe
          className="w-full h-full"
          src="https://embed.figma.com/design/WcEhf0TCmJ4bqtwQEReECa/econome?node-id=0-1&embed-host=share"
          allowFullScreen
        ></iframe>
      ),
    },
  },
  {
    title: "Colaborador Ponto",
    path: paths.colaboradorPonto,
    shortDescription:
      "This is a mobile (android) app for a government agency to manage donations",
    description: `This app is for a government organization that distributes milk for families in need. 
    As a intern i proposed, designed and created both the mobile app and web site used for the management of said
    distributions. `,
    techs: [
      Techs["React Native"],
      Techs.Javascript,
      Techs.Figma,
      Techs.StyledComponents,
      Techs.Reanimated,
      Techs.MongoDB,
      Techs.GitHub,
      Techs.React,
    ],
    github: "private",
    imgs: [
      require("./assets/colaboradorponto/colaborador.png"),
      require("./assets/colaboradorponto/colaborador (2).png"),
      require("./assets/colaboradorponto/colaborador (3).png"),
      require("./assets/colaboradorponto/colaborador (4).png"),
      require("./assets/colaboradorponto/colaborador (5).png"),
      require("./assets/colaboradorponto/colaborador (6).png"),
    ],
    figma: {
      link: "https://www.figma.com/design/bHNL0VxIakaKube1MbfvnW/Estagio---Colaborador-ponto-ideas?node-id=0-1&t=ozi94itZ0IQiKfgi-1",
      iframe: (
        <iframe
          className="w-full h-full"
          src="https://embed.figma.com/design/bHNL0VxIakaKube1MbfvnW/Estagio---Colaborador-ponto-ideas?node-id=0-1&embed-host=share"
          allowFullScreen
        ></iframe>
      ),
    },
  },
  {
    title: "ATHOS Components",
    path: paths.athosComponents,
    shortDescription:
      "A npm library with some react components that i use in my projects",
    description: `This is a project in development that consists of a npm library 
    with some react components that i can use in my projects.
    The components often have animations and colors modularity
    witch are things that i value the most.

     `,
    techs: [
      Techs.Figma,
      Techs.StyledComponents,
      Techs.Framer,
      Techs.React,
      Techs.Tailwind,
      Techs.Typescript,
      Techs.GitHub,
    ],
    github: "private",
    imgs: [
      require("./assets/athoscomps/athoscomp.png"),
      require("./assets/athoscomps/athoscomp (2).png"),
      require("./assets/athoscomps/athoscomp (3).png"),
    ],
    figma: {
      link: "https://www.figma.com/design/f30atpDOIVMaqwrtWigpXm/ATHOS-Components?node-id=17-888&t=pJtqgaPvl4BAEyv9-1",
      iframe: (
        <iframe
          className="w-full h-full"
          src="https://embed.figma.com/design/f30atpDOIVMaqwrtWigpXm/ATHOS-Components?node-id=17-888&embed-host=share"
          allowFullScreen
        ></iframe>
      ),
    },
    extraComp: (
      <div className="flex gap-4 text-white border-white flex-wrap border-opacity-25 border rounded-xl p-4 items-center w-fit">
        <ButtonWrapper
          href="https://www.npmjs.com/package/@athosws/react-components"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-black font-bold items-center justify-center"
        >
          <FaNpm className="text-5xl" />
          <p> @athosws/react-components</p>
          <TbHandClick className="text-2xl" />
        </ButtonWrapper>
        <div className="font-bold">
          <p>To install:</p>
          <code className="font-normal">
            yarn add @athosws/react-components
          </code>
          <p>or</p>
          <code className="font-normal">
            npm install @athosws/react-components
          </code>
        </div>
      </div>
    ),
  },
  {
    title: "Margarida's Shop",
    path: paths.margaridasShop,
    shortDescription:
      "A Full Stack developed clothing store website with a simple and clean design",
    description: `
    For a client's clothing store, I developed a complete website
    from start to finish.  As the full-stack developer, I built
    the front-end website, the back-end server with its database,
    and the administrative panel for managing the site.
    The client's goal was a simple and clean design.
`,
    techs: [
      Techs.Figma,
      Techs.StyledComponents,
      Techs.Framer,
      Techs.React,
      Techs.Tailwind,
      Techs.Typescript,
      Techs.GitHub,
      Techs.MongoDB,
      Techs.NextJS,
      Techs.NestJS,
    ],
    github: "private",
    imgs: [],
  },
  {
    title: "AutoTab",
    path: paths.autoTab,
    shortDescription:
      "My graduation project, using deep learning to create a audio to tablature generator",
    description: `
    This was my final project for graduation. I developed a system using deep
    learning, specifically Convolutional Neural Networks (CNNs), to
    automatically create guitar tablature from audio recordings.
    The system works by analyzing short segments (snapshots) of the
    full-length audio.  For each snapshot, it identifies the musical
    notes being played.  Then, it combines the note information from
    all the snapshots to construct the complete guitar tablature.
    `,
    techs: [
      Techs.Figma,
      Techs.StyledComponents,
      Techs.React,
      Techs.Typescript,
      Techs.GitHub,
      Techs.Python,
      Techs.TensorFlow,
    ],
    github: "https://github.com/AthosMatos/autotab",
    imgs: [require("./assets/autotab/autotab.png")],
    figma: {
      link: "https://www.figma.com/design/C74zlF2ta7AfSRxriFWMic/Images-TCC---AutoTab?node-id=0-1&t=Kuhp5bjB8u8ULoPr-1",
      iframe: (
        <iframe
          className="w-full h-full"
          src="https://embed.figma.com/design/C74zlF2ta7AfSRxriFWMic/Images-TCC---AutoTab?node-id=0-1&embed-host=share"
          allowFullScreen
        ></iframe>
      ),
    },
  },
  {
    title: "UERN - The Game",
    path: paths.uernTheGame,
    shortDescription:
      "A turn-based game developed in C++ and Direct2D for a college class",

    description: `I used C++ and Direct2D to develop a 
    turn-based game, designing all the pixel art sprites
    for the characters and the scenario myself.
    The game was set in my university and featured
    characters based on my friends and me, with our
    professors as the villains.
    `,
    techs: [Techs["C++"], Techs.GitHub, Techs.DirectX],
    github:
      "https://github.com/AthosMatos/Games-made-in-college-class/tree/main/O%20SEGUNDO/GAME%20OF%20THE%20YEAR",
    imgs: [
      require("./assets/uernthegame/uernthegame (2).png"),
      require("./assets/uernthegame/uernthegame.png"),
      require("./assets/uernthegame/uernthegame (3).png"),
      require("./assets/uernthegame/uernthegame (4).png"),
      require("./assets/uernthegame/uernthegame (5).png"),
      require("./assets/uernthegame/uernthegame (6).png"),
      require("./assets/uernthegame/uernthegame (7).png"),
      require("./assets/uernthegame/uernthegame (8).png"),
    ],
  },
  {
    title: "SOHTA Engine",
    path: paths.sohtaEngine,
    shortDescription: "A unfinished game engine made for learning purposes",

    description: `This C++/DirectX project was initiated as a 
      learning exercise to explore game graphics programming.
      While the engine remains incomplete due to its development
      alongside my college studies, it served its purpose
      in advancing my understanding of the subject.`,
    techs: [Techs["C++"], Techs.GitHub, Techs.DirectX, Techs.Photoshop],
    github: "https://github.com/AthosMatos/SOHTA-Engine/tree/main",
    imgs: [
      require("./assets/sohtaengine/sohtaengine.png"),
      require("./assets/sohtaengine/sohtaengine (2).png"),
    ],
  },
];
