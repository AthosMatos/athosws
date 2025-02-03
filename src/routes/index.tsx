import { Route, Routes } from "react-router-dom";
import Pages from "../pages";
import About from "../pages/About";
import Cards from "../pages/Cards";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Skills from "../pages/Skills";
import Tabela from "../pages/Tabela";
import WorkTimeline from "../pages/WorkTimeline";

/* const Login = lazy(() => import("./pages/Login")); */

const AppRouter = () => (
  <Routes>
    <Route path="athosws" element={<Pages />}>
      <Route path="" element={<About />} />
      <Route path="tabela" element={<Tabela />} />
      <Route path="cards" element={<Cards />} />
      <Route path="contact" element={<Contact />} />
      <Route path="skills" element={<Skills />} />
      <Route path="projects" element={<Projects />} />
      <Route path="project/:id" element={<Project />} />
      <Route path="resume" element={<Resume />} />
      <Route path="worktTimeline" element={<WorkTimeline />} />
    </Route>
  </Routes>
);

export default AppRouter;

/* <Suspense fallback={<Splash />}>
    
  </Suspense> */
