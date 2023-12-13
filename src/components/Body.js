import React from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux/";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { openMenu } from "../utils/redux/sideBarSlice";
import { useEffect } from "react";

const Body = () => {
  const toggleMenu = useSelector((store) => store.sidbar.isOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex justify-center dark:bg-black dark:text-white">
        {toggleMenu && (
          <div className="w-50 shadow-xl">
            <Sidebar />
          </div>
        )}
        <div className="p-2 ml-1 dark:bg-black dark:text-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
