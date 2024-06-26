import React from 'react';

const Comments = ({ data }) => {
  const { snippet } = data;

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-md m-2 p-4 bg-white dark:bg-gray-900 shadow-sm">
      <div className="flex items-start">
        <img 
          className="rounded-full h-10 w-10 object-cover"
          src={snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
          alt="author"
        />
        <div className="pl-3 ml-2">
          <p className="font-bold text-gray-900 dark:text-gray-100">
            {snippet?.topLevelComment?.snippet?.authorDisplayName}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            {snippet?.topLevelComment?.snippet?.textDisplay}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
