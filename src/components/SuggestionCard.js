import React from "react";
import { addDetails } from "../utils/redux/videoInfo";
import { useDispatch } from "react-redux";
import cropTitle from "../helper/cropTitle";
import uploadTime from "../helper/uploadTime";

const SuggestionCard = ({ videos }) => {
  const dispatch = useDispatch();
  const title = videos?.snippet?.title;
  const maxLength = 40;
  const croppedTitle = cropTitle(title, maxLength);
  const publishedAt = videos?.snippet?.publishedAt;
  const timeSincePublished = uploadTime(publishedAt);

  return (
    <div
      className="p-2 m-2 flex w-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition duration-200 ease-in-out"
      onClick={() => dispatch(addDetails(videos?.id?.videoId))}
    >
      <img
        alt="thumbnail"
        src={videos?.snippet?.thumbnails?.medium?.url}
        className="rounded-xl w-52 h-28 object-cover"
      />
      <div className="pl-3 flex flex-col justify-between">
        <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">
          {croppedTitle}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {videos?.snippet?.channelTitle}
        </p>
        <p className="text-gray-500 dark:text-gray-300 text-xs">
          {timeSincePublished}
        </p>
      </div>
    </div>
  );
};

export default SuggestionCard;
