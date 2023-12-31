
const Comments = ({data}) => {
  const {snippet} = data;
  
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-md m-2 p-2">
      <div className="flex ">
        <img className="rounded-full h-10 my-1"
          src={snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
          alt="img"
        />
        <div className="pl-2 ml-2">
          <p className="font-bold justify-normal">{snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
          <p>{snippet?.topLevelComment?.snippet?.textDisplay}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
