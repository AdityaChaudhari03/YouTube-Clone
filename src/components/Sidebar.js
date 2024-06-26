import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/redux/sideBarSlice";
import {
  AiOutlineHome,
  AiOutlineLike,
  AiOutlineShopping,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdOutlineLiveTv,
  MdOutlineSportsSoccer,
} from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { BsPlayBtn } from "react-icons/bs";
import { GoVideo } from "react-icons/go";
import { HiTrendingUp } from "react-icons/hi";
import {
  IoGameControllerOutline,
  IoMusicalNotesOutline,
  IoNewspaperOutline,
} from "react-icons/io5";
import { BiMoviePlay, BiHelpCircle } from "react-icons/bi";
import { FaShopify } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { FcStart, FcFeedback, FcManager } from "react-icons/fc";
import { ImYoutube2 } from "react-icons/im";
import { SiYoutubemusic } from "react-icons/si";
import { VscReport } from "react-icons/vsc";
import { CiYoutube } from "react-icons/ci";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="" onBlur={() => dispatch(closeMenu())}>
      <nav
        id="sidenav-2"
        className="fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-gray-10 dark:bg-black dark:text-white"
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-mode="side"
        data-te-sidenav-content="#content"
      >
        <div className="flex ml-2 p-3">
          <span
            className=" pt-1 material-symbols-outlined cursor-pointer"
            onClick={() => {
              dispatch(toggleMenu());
            }}
          >
            menu
          </span>
          <Link to="/">
            <img
              onClick={() => dispatch(closeMenu())}
              className="h-[1.8rem] mx-2 my-1"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="p-5 shadow-lg h-screen overflow-y-auto">
          <ul>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2 font-bold">
              <Link to="/" className="flex">
                {" "}
                <AiOutlineHome className="mr-5 mt-1 text-xl" /> Home
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <BsPlayBtn className="mr-5 mt-1 text-xl" />
                Shorts
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <MdOutlineSubscriptions className="mr-5 mt-1 text-xl" />
                Subscriptions
              </Link>
            </li>
          </ul>
          <hr className="mt-2"></hr>
          <ul>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <MdOutlineVideoLibrary className="mr-5 mt-1 text-xl" />
                Library
              </Link>{" "}
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <GrHistory className="mr-5 mt-1 text-xl" />
                History
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <GoVideo className="mr-5 mt-1 text-xl" />
                Your Videos
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <MdOutlineWatchLater className="mr-5 mt-1 text-xl" />
                Watch Later
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <AiOutlineLike className="mr-5 mt-1 text-xl" />
                Liked Videos
              </Link>
            </li>
          </ul>
          <hr className="mt-2"></hr>
          <h3 className="font-bold mt-5">Subscriptions</h3>
          <ul>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <FcManager className="mr-5 mt-1 text-xl" />
                Aditya Chaudhari
              </Link>
            </li>
          </ul>
          <hr className="mt-2"></hr>
          <h3 className="font-bold mt-5">Explore</h3>
          <ul>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <HiTrendingUp className="mr-5 mt-1 text-xl" />
                Trending
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <IoGameControllerOutline className="mr-5 mt-1 text-xl" />
                Gaming
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <BiMoviePlay className="mr-5 mt-1 text-xl" />
                Movies
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <IoMusicalNotesOutline className="mr-5 mt-1 text-xl" />
                Music
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <MdOutlineLiveTv className="mr-5 mt-1 text-xl" />
                Live
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <IoNewspaperOutline className="mr-5 mt-1 text-xl" />
                News
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <AiOutlineShopping className="mr-5 mt-1 text-xl" />
                Shopping
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <MdOutlineSportsSoccer className="mr-5 mt-1 text-xl" />
                Sports
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <PiStudentFill className="mr-5 mt-1 text-xl" />
                Learning
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <FaShopify className="mr-5 mt-1 text-xl" />
                Fasion & Beauty
              </Link>
            </li>
          </ul>
          <hr className="mt-2"></hr>
          <h3 className="mt-5 font-bold">More from YouTube</h3>
          <ul>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <ImYoutube2 className="mr-5 mt-1 bg-red text-xl" />
                Youtube Premium
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <SiYoutubemusic className="mr-5 mt-1 text-xl" />
                Youtube Studio
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <CiYoutube className="mr-5 mt-1 bg-red text-xl" />
                Youtube Music
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <FcStart className="mr-5 mt-1 text-xl" />
                Youtube Kids
              </Link>
            </li>
          </ul>
          <hr className="mt-2"></hr>
          <ul>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <AiOutlineSetting className="mr-5 mt-1 text-xl" />
                Setting
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <VscReport className="mr-5 mt-1 text-xl" />
                Report History
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <BiHelpCircle className="mr-5 mt-1 text-xl" />
                Help
              </Link>
            </li>
            <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
              <Link to="/" className="flex">
                {" "}
                <FcFeedback className="mr-5 mt-1 text-xl" />
                Send Feedback
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
