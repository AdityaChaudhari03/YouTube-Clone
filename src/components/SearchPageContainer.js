import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SEARCH_TEXT_API } from "../utils/constants";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const SearchPageContainer = () => {
  const [videos, setVideos] = useState([]);

  const querySelector = useSelector((store) => store.details.text);

  useEffect(() => {
    getVideos();
  }, [querySelector]);

  const getVideos = async () => {
    const videos = await fetch(SEARCH_TEXT_API + querySelector);

    const json = await videos.json();
    setVideos(json.items);
  };
  
  return videos?.length === 0 ? (
    <div className="flex justify-center items-center h-screen">
      <p className="text-gray-500 text-lg">Loading...</p>
    </div>
  ) : (
    <div className="flex flex-wrap justify-center md:justify-start ml-2 md:ml-10">
      {videos?.map((video) => (
        <Link
          key={video.id.videoId}
          to={"/watch?v=" + video.id.videoId}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
        >
          <VideoCard data={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchPageContainer;
