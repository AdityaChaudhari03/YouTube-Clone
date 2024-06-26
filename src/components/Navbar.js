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
    <div className="w-full flex flex-wrap justify-between items-center bg-white dark:bg-black dark:text-white shadow-lg p-3">
      <div className="flex items-center ml-2">
        <span
          className="material-symbols-outlined cursor-pointer text-2xl"
          onClick={() => {
            dispatch(toggleMenu());
          }}
        >
          menu
        </span>
        <Link to="/">
          <img
            className="h-8 mx-3"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="relative flex items-center w-full md:w-auto">
        <div className="flex items-center w-full mt-3 md:w-[500px] border border-gray-300 dark:border-gray-700 rounded-full shadow-md overflow-hidden">
          <input
            type="text"
            className="flex-1 px-4 py-2 bg-transparent outline-none dark:bg-black dark:text-white"
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
              className="material-symbols-outlined cursor-pointer text-gray-500 mr-2"
              onClick={() => {
                setSearchInput("");
                setShowSuggestions(false);
              }}
            >
              close
            </span>
          )}
          <Link to={"/results?search_query=" + searchInput}>
            <button
              onClick={() => {
                searchByItem(searchInput);
                setShowSuggestions(false);
              }}
              className="flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-l border-gray-300 dark:border-gray-700 rounded-r-full"
            >
              <span className="material-symbols-outlined">search</span>
            </button>
          </Link>
        </div>
        {showSuggestions && (
          <div className="absolute mt-2 p-2 w-full md:w-[500px] max-h-64 bg-white border border-gray-300 dark:bg-black dark:border-gray-700 rounded-xl overflow-y-auto z-50">
            <ul>
              {suggestions?.map((item) => (
                <Link to={"/results?search_query=" + item} key={item}>
                  <li
                    className="flex items-center p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
                    onClick={() => searchByItem(item)}
                  >
                    <span className="material-symbols-outlined">search</span>
                    <span className="ml-2">{item}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Switcher />
      <div className="flex items-center">
        <img
          className="rounded-full h-10 w-10 object-cover m-4"
          alt="Avatar"
          src="https://previews.123rf.com/images/tuktukdesign/tuktukdesign1805/tuktukdesign180500107/101624814-avatar-icon-vector-male-user-person-profile-symbol-in-flat-color-glyph-pictogram-illustration.jpg"
        />
      </div>
    </div>
  );
};

export default Navbar;
