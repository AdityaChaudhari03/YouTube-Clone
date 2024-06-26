import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { closeMenu } from "../utils/redux/sideBarSlice";

const Body = () => {
  const toggleMenu = useSelector((store) => store.sidbar.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="dark:bg-black dark:text-white">
      <Navbar />

      <div className="flex justify-center">
        {toggleMenu && (
          <div className="w-72 md:w-96 shadow-xl">
            <Sidebar />
          </div>
        )}

        <div className="p-2 ml-1 w-full md:w-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
