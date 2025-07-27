import "./Layout.scss";
import { Outlet } from "react-router-dom";
import FloatingCircles from "../FloatingCircles/FloatingCircles";

const Layout = () => {
  return (
    <div className="page">
      <Outlet />
      <FloatingCircles />
    </div>
  );
};

export default Layout;
