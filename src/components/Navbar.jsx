import React from "react";
import { Link } from "react-router";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            {/* <div className="mx-2 flex-1 px-2 lg:hidden">Navbar Title</div> */}

            <div className="hidden w-full flex-none lg:flex">
              <div className="menu menu-horizontal flex w-11/12 items-center justify-center gap-10 text-lg font-semibold border">
                <Link to="/home">Home</Link>
                <Link to="/carrier">Carrier</Link>
                <Link to="/about">About</Link>
              </div>
              <div className="login border">
                <div className="flex gap-2 items-center">
                  <img src={userIcon} alt="" />
                  <button className="btn btn-neutral">Login</button>
                </div>
              </div>
            </div>

            <div className="mx-2 flex-1 flex justify-end-safe border lg:hidden">
              <div className="login">
                <div className="flex gap-2 items-center">
                  <img src={userIcon} alt="" />
                  <button className="btn btn-neutral">Login</button>
                </div>
              </div>
            </div>
          </div>
          {/* Page content here */}
          Content
        </div>
        <div className="drawer-side top-58.5  bg-transparent w-2/6">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className=""
          ></label>
          <ul className="menu bg-white min-h-full text-base  w-full p-0 border-r-1 border-t-4 border-t-gray-500">
            {/* Sidebar content here */}
            <Link className="p-1 pl-7 " to="/home">
              <div className=" hover:text-red-600">Home</div>
            </Link>
            <Link
              className="p-1 pl-7 "
              to="/carrier"
            >
              <div className=" hover:text-red-600">Carrier</div>
            </Link>
            <Link className="p-1 pl-7 " to="/about">
              <div className=" hover:text-red-600">About</div>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
