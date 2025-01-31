import { ATHOSColors } from "@athosws/react-components";
import { motion } from "framer-motion";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout } from "./layout";

const Pages = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  /*  useEffect(() => {
    nav("/about");
  }, []); */
  return (
    <div
      style={{
        backgroundColor: ATHOSColors.black.coal,
      }}
      className="flex items-center justify-center h-screen w-screen"
    >
      <div
        className={`w-[98vw] h-[98vh] border border-gray-100 rounded-xl overflow-auto`}
      >
        <Layout>
          <motion.div
            className="w-full h-full"
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Outlet />
          </motion.div>
        </Layout>
      </div>
    </div>
  );
};

export default Pages;
