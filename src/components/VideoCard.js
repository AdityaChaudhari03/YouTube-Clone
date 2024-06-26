import React from "react";

const VideoCard = ({ data }) => {
  const { snippet } = data;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="m-2 h-[22rem] w-72 shadow-md rounded-sm bg-white dark:bg-gray-800">
      <img
        className="rounded-lg w-full h-48 object-cover"
        src={thumbnails.high.url}
        alt="thumbnail"
      />
      <div className="p-3">
        <p className="font-semibold text-gray-800 dark:text-white">{channelTitle}</p>
        <p className="text-gray-700 dark:text-gray-300">{title}</p>
      </div>
    </div>
  );
};

export default VideoCard;
