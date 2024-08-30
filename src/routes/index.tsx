import { Route, Routes } from "react-router-dom";
import Pages from "../pages";
import Home from "../pages/Home";

/* const Login = lazy(() => import("./pages/Login")); */

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Pages />}>
      <Route path="" element={<Home />} />
    </Route>
  </Routes>
);

export default AppRouter;

/* <Suspense fallback={<Splash />}>
    
  </Suspense> */
