import { useNavigate } from "react-router-dom";
import { paths } from "../layout";
import Dot from "./components/Dot";

const WorkTTimeline = () => {
  const nav = useNavigate();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="">
        <div className="flex items-center gap-4 font-bold text-white text-lg">
          <p>2019</p>
          <div className="bg-white h-2 rounded-full w-[80vw]">
            <div className="flex mt-[-0.34rem]">
              <Dot
                year={2019}
                title="University"
                description="Joined the computer science course."
                location="UERN - Natal/RN"
                position={0}
                onClick={() => window.open("https://portal.uern.br/", "_blank")}
              />
              <Dot
                title="First Contact with Game Development"
                description="I was thrilled to take a game development class in my second period.  Having always loved gaming, the opportunity to create my own game was incredibly motivating.  I used C++ and Direct2D to develop a turn-based game, designing all the pixel art sprites for the characters and the scenario myself.  The game was set in my university and featured characters based on my friends and me, with our professors as the villains.  The professors enjoyed the game, and it was subsequently featured in a university-wide game exposition showcasing student projects."
                location="UERN - Natal/RN"
                year={2020}
                position={15}
                onClick={() =>
                  window.open(
                    "https://github.com/AthosMatos/Games-made-in-college-class",
                    "_blank"
                  )
                }
              />
              <Dot
                title="Research Project"
                description="Due to my early expressed interest in mobile development, I was invited by a professor to participate in the design and development of a mobile application for a shrimp analysis project."
                location="UERN - Natal/RN"
                year={2021}
                position={30}
              />
              <Dot
                title="Internship"
                description="To my surprise, I was accepted for an internship at SETHAS, the State Secretariat of Social Assistance.  My initial assignment was maintaining their mobile application for milk distribution registration, a tool used by social workers.  Seeing the app's outdated design and numerous bugs, I proposed a complete redesign and development.  This proposal was accepted, and I subsequently designed and developed the new application using React Native and Realm (MongoDB)."
                location="SETHAS - Natal/RN"
                year={2022}
                position={45}
                onClick={() => nav(paths.colaboradorPonto)}
              />
              <Dot
                title="Junior Developer"
                description="My internship supervisor, recognizing my potential, recommended me for a job opening.  This recommendation proved successful, and I now work on websites used by state attorneys."
                location="PGE - Natal/RN"
                year={2023}
                position={60}
              />
              <Dot
                title="EconoMe"
                description="I got the idea for this personal finance app in a mobile development class. I built a first version for the class and kept working on it after."
                location="PGE - Natal/RN"
                year={2023}
                position={72}
                onClick={() => nav(paths.econome)}
              />
              <Dot
                title="Graduation"
                description="Finally, I graduated from UERN with a degree in Computer Science."
                location="PGE - Natal/RN"
                year={2024}
                position={84}
                onClick={() =>
                  window.open(
                    "https://photos.google.com/share/AF1QipNQ4S-NCLR73FEQnDHNNx-VLi5J6pBS6QQ9uX3l2GjmfaUsZAryr_DRfXlljEjcQA/photo/AF1QipPL5BATsaV8nVdIxQFUgT8c2ZGwx57d3FQpz5Fs?key=YldiTHN2ZmFjZTRNdDltUWFObFpvdGdRd2h4T3J3",
                    "_blank"
                  )
                }
              />

              <Dot
                title="ATHOS Components"
                description="I built a library of React components to use in my projects."
                location="PGE - Natal/RN"
                year={2024}
                position={94}
                onClick={() => nav(paths.athosComponents)}
              />
            </div>
          </div>
          <p>2025</p>
        </div>
      </div>
    </div>
  );
};

export default WorkTTimeline;
