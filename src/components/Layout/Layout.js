import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
    </>
  )
}

export default Layout