import React, { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const {logoutUser, user} = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
    .then(res => {
      toast.success("Logged out");
    })
    .catch(err => console.log(err));
  };
  
  return (
    <div className="navbar bg-black">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl text-white">
          Task Haven
        </a>
      </div>
      <div className="navbar-center lg:navbar-end text-white">
        <button onClick={handleLogout} className="btn bg-red-500 border-none">
          Logout
        </button>
      </div>
      <div className="navbar-end lg:hidden text-white">
        <div className="dropdown">
          <label
            tabIndex={0}
            htmlFor="my-drawer-2"
            className="lg:hidden btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
