import "./Layout.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="page">
      <Outlet />
    </div>
  );
};

export default Layout;
