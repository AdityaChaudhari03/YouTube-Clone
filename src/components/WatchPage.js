import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/redux/sideBarSlice";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API, YOUTUBE_VIDEO_BYID } from "../utils/constants";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { PiShareFat } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import CommentsContainer from "./CommentsContainer";
import ShimmerWatch from "../ShimmerUI/ShimmerWatch";
import LiveChat from "./LiveChat";

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const videoDetails = YOUTUBE_VIDEO_BYID + searchParam.get("v");
  const [videoInfo, setVideoInfo] = useState([]);
  const [suggestionVideo, setSuggestionVideo] = useState([]);

  useEffect(() => {
    const getVideoInfo = async () => {
      const data = await fetch(videoDetails);
      const json = await data.json();
      setVideoInfo(json.items);
    };
    getVideoInfo();
  }, [videoDetails]);

  useEffect(() => {
    const getSubscriber = async () => {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setSuggestionVideo(json.items);
    };
    getSubscriber();
  }, []);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return videoInfo?.length === 0 ? (
    <ShimmerWatch />
  ) : (
    <div className="m-2 ml-5 mr-5 flex flex-wrap overflow-x-hidden">
      <div className="flex m-5 w-full">
        <div className="flex flex-col w-full md:w-2/3">
          <div className="rounded-2xl overflow-hidden">
            <iframe
              className="w-full"
              height="500"
              src={"https://www.youtube.com/embed/" + searchParam.get("v")}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          {videoInfo.map((video) => (
            <div key={video.id}>
              {/* Subscriber Section */}
              <div className="flex items-center m-2">
                <FaUserTie className="rounded-full border border-gray-400 text-4xl p-1" />
                <div className="ml-2">
                  <p className="font-bold text-gray-800">{video?.snippet?.channelTitle}</p>
                  <p className="text-sm">2.56M Subscribers</p>
                </div>
                <div className="ml-auto flex space-x-2">
                  <button className="bg-black text-white border border-gray-200 shadow-sm px-5 py-1 rounded-full hover:bg-gray-800">
                    Subscribe
                  </button>
                  <button className="flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300">
                    <FiThumbsUp className="mx-1" />
                    {video?.statistics?.likeCount}
                  </button>
                  <button className="flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300">
                    <FiThumbsDown className="mx-1" />
                  </button>
                  <button className="flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300">
                    <PiShareFat className="mx-1" /> Share
                  </button>
                  <button className="flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300">
                    <GoDownload className="mx-1" /> Download
                  </button>
                  <button className="flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300">
                    <BsThreeDots className="mx-1" />
                  </button>
                </div>
              </div>
              {/* Video Details Section */}
              <div className="rounded-lg shadow-sm bg-gray-100 p-4">
                <p className="font-bold">
                  {video?.statistics?.viewCount} Views • {video?.snippet?.publishedAt}
                </p>
                <p className="mt-2">{video?.snippet?.description}</p>
              </div>
              {/* Comment Section */}
              <div className="mt-5">
                <h1 className="font-bold text-2xl">Comments</h1>
                <CommentsContainer />
              </div>
            </div>
          ))}
        </div>
        {/* Suggestion video right sidebar section */}
        <div className="hidden md:block md:w-1/3 md:ml-5">
          <LiveChat />
          {suggestionVideo.map((info) => (
            <Link to={"?v=" + info.id} key={info.id} className="block mb-4">
              <div className="p-2 flex hover:bg-gray-200 rounded-md">
                <img
                  className="rounded-xl"
                  src={info?.snippet?.thumbnails?.default?.url}
                  alt="thumbnails"
                  width="120"
                  height="90"
                />
                <div className="ml-2">
                  <p className="font-bold text-sm text-gray-800">{info?.snippet?.title}</p>
                  <p className="text-sm">{info?.snippet?.channelTitle}</p>
                  <p className="text-sm">{info?.statistics?.viewCount} Views</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watchpage;
