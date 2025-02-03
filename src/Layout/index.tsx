import { ATHOSColors } from "@athosws/react-components";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "./Menu";
import { PageName } from "./PageName";
export const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex-1 flex flex-col">
      <div
        style={{
          backgroundColor: ATHOSColors.black.coal,
        }}
        className="flex border-b sticky z-[9999] top-0 border-[rgba(255,255,255,0.2)]"
      >
        <div className="md:w-64 w-44 p-3">
          <Menu />
        </div>
        <PageName />
      </div>
      <div className="p-2 w-full h-full flex-1">
        <motion.div
          className="w-full h-full"
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
};
