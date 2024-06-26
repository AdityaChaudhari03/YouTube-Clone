import React from 'react';

const ChatMessages = ({ name, message }) => {
  return (
    <div className="flex items-start p-4 m-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <img
        className="h-8 w-8 rounded-full mr-3"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="user-logo"
      />
      <div className="flex flex-col">
        <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{name}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">{message}</p>
      </div>
    </div>
  );
}

export default ChatMessages;
