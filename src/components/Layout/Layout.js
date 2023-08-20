import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </>
  )
}

export default Layout