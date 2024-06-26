import React, { useEffect, useState } from "react";
import { SHORTS_API } from "../utils/constants";

const ShortsPage = () => {
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    fetchShorts();
  }, []);

  const fetchShorts = async () => {
    const data = await fetch(SHORTS_API);
    const json = await data.json();
    setShorts(json.items);
  };

  return shorts.length === 0 ? (
    <div className="flex justify-center items-center h-screen">
      <p className="text-gray-500 text-lg">Loading...</p>
    </div>
  ) : (
    <div className="flex justify-center p-5">
      <div className="flex flex-col gap-5">
        {shorts.map((s) => (
          <div className="flex flex-col md:flex-row items-center md:items-start" key={s?.id?.videoId}>
            <iframe
              className="rounded-3xl mb-5 md:mb-0"
              width="290"
              height="490"
              src={
                "https://www.youtube.com/embed/" +
                s?.id?.videoId +
                "?autoplay=0&mute=1&rel=0"
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="flex flex-row md:flex-col gap-4 md:gap-10 mt-2 md:mt-36 ml-0 md:ml-3">
              <span className="material-symbols-outlined text-2xl bg-gray-100 border rounded-full p-2 cursor-pointer hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                thumb_up
              </span>
              <span className="material-symbols-outlined text-2xl bg-gray-100 border rounded-full p-2 cursor-pointer hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                thumb_down
              </span>
              <span className="material-symbols-outlined text-2xl bg-gray-100 border rounded-full p-2 cursor-pointer hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                chat
              </span>
              <span className="material-symbols-outlined text-2xl bg-gray-100 border rounded-full p-2 cursor-pointer hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                share
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortsPage;
