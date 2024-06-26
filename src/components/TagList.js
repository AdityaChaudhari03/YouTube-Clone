import React from "react";
import { useDispatch } from "react-redux";
import { SEARCH_TEXT_API } from "../utils/constants";
import { addvideos } from "../utils/redux/videoInfo";

const TagList = ({ list }) => {
  const dispatch = useDispatch();

  const fetchData = async (i) => {
    const data = await fetch(SEARCH_TEXT_API + i);
    const json = await data.json();
    console.log("tag", json.items, i);
    dispatch(addvideos(json.items));
  };

  return (
    <div className="flex flex-wrap justify-center p-4 gap-2">
      {list.map((i, index) => (
        <button
          className="px-4 py-2 text-sm border border-gray-200 rounded-xl bg-gray-300 dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-200 ease-in-out"
          onClick={() => {
            fetchData(i);
          }}
          key={index}
        >
          {i}
        </button>
      ))}
    </div>
  );
};

export default TagList;
