import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import Navbar from "../components/Navbar";
import { HiPlus, HiOutlineTrash, HiOutlineClipboardCheck } from "react-icons/hi";
import Profile from "../components/Profile";

const Layout = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <Navbar/>
      <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col lg:p-6 p-4 bg-slate-100">
        {/* <!-- Page content here --> */}
        <Outlet/>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        <Profile/>
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to={'/'}><HiPlus/>Add New</Link>
          </li>
          <li>
            <Link to={'/completed'}><HiOutlineClipboardCheck/>Completed</Link>
          </li>
          <li>
            <Link to={'/trash'}><HiOutlineTrash/>Trash</Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Layout;
