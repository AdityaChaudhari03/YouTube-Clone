import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, closeMenu, openMenu } from "../utils/redux/sideBarSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { addCache } from "../utils/redux/searchSlice";
import { Link } from "react-router-dom";
import { searchText } from "../utils/redux/videoInfo";
import Switcher from "./Switcher";

const Navbar = () => {
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchHandler = async () => {
    const results = await fetch(YOUTUBE_SEARCH_API + searchInput);
    const json = await results.json();
    setSuggestions(json[1]);
    dispatch(addCache({ [searchInput]: json[1] }));
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (searchCache[searchInput]) {
        setSuggestions(searchCache[searchInput]);
      } else {
        searchHandler();
      }
    }, 200);

    return () => clearInterval(interval);
  }, [searchInput]);

  const searchByItem = (item) => {
    setShowSuggestions(false);
    setSearchInput(item);
    dispatch(searchText(item));
  };

  return (
    <div className=" w-full shadow-lg flex justify-between bg-white dark:bg-black dark:text-white">
      <div className="flex ml-2 p-3" onBlur={() => dispatch(closeMenu())}>
        <span
          className=" pt-3 material-symbols-outlined cursor-pointer"
          onClick={() => {
            dispatch(toggleMenu());
          }}
        >
          menu
        </span>
        <Link to="/">
          <img
            // onClick={() => dispatch(openMenu())}
            className="h-[1.8rem] mx-2 my-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="p-3 flex">
        <div className="w-[500px] border border-gray-200 rounded-l-full p-2  shadow-md h-10  border-r-0 flex ">
          <input
            type="text"
            className="w-[400px] outline-0 px-3 dark:bg-black dark:text-white"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(false)}
            placeholder="Search"
          />

          {searchInput !== "" && (
            <span
              className="material-symbols-outlined cursor-pointer hover:bg-gray-200 rounded-full   "
              onClick={() => {
                setSearchInput("");
                setShowSuggestions(false);
              }}
            >
              close
            </span>
          )}
        </div>
        <div>
          <Link to={"/results?search_query=" + searchInput}>
            <div
              onClick={() => {
                searchByItem(searchInput);
                setShowSuggestions(false);
              }}
              className="material-symbols-outlined border p-2 h-10 w-10 cursor-pointer bg-gray-100 border-gray-200 rounded-r-full dark:bg-black dark:text-white"
            >
              search
            </div>
          </Link>
        </div>
        {showSuggestions && (
          <div
            onFocus={() => {
              if (searchInput.length >= 0) setShowSuggestions(true);
            }}
            className="absolute mt-11 p-2 w-[400px] h-[300px] bg-white border border-gray-600 rounded-xl dark:bg-black dark:text-white"
          >
            <ul className="">
              {suggestions?.map((item) => (
                <>
                  <Link to={"/results?search_query=" + item}>
                    <div
                      key={item}
                      className="flex  hover:bg-gray-200 dark:hover:bg-gray-900  "
                      onClick={() => searchByItem(item)}
                    >
                      <span
                        className="material-symbols-outlined pt-1 "
                        width="25"
                      >
                        search
                      </span>
                      <li className="ml-2 text-lg">{item}</li>
                    </div>
                  </Link>
                </>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Switcher />
      <div>
        <img
          className="style-scope yt-img-shadow rounded-full m-4"
          alt="Avatar"
          height="45"
          width="40"
          src="https://previews.123rf.com/images/tuktukdesign/tuktukdesign1805/tuktukdesign180500107/101624814-avatar-icon-vector-male-user-person-profile-symbol-in-flat-color-glyph-pictogram-illustration.jpg"
        />
      </div>
    </div>
  );
};

export default Navbar;
