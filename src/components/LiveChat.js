import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/redux/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/Helper";
import { BiSolidSend } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateRandomMessage(25) + "🚀",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col-reverse h-[400px] ml-2 p-2 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm overflow-y-scroll bg-white dark:bg-gray-800">
        {chatMessages.map((c, i) => (
          <ChatMessages key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="flex items-center mt-5 mb-5 mx-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "Aditya Chaudhari",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <FcBusinessman className="text-3xl" />
        <input
          type="text"
          placeholder="Chat..."
          className="flex-1 mx-3 p-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setLiveMessage(e.target.value)}
          value={liveMessage}
        />
        <button
          type="submit"
          className="p-2 rounded-lg shadow-sm bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <BiSolidSend className="text-2xl" />
        </button>
      </form>
    </>
  );
};

export default LiveChat;
